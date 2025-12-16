"use client";
import { useRef, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../public/images/logo2.png";
import pro1 from "../../public/images/01.jpg";
import pro2 from "../../public/images/02.jpg";
import pro3 from "../../public/images/03.jpg";
import pro4 from "../../public/images/04.jpg";
import pro5 from "../../public/images/05.jpg";
import pro6 from "../../public/images/06.jpg";
import { createClient } from "@/utils/supabase/client";

export default function Game() {
  const wheelRef = useRef(null);
  const confettiRef = useRef(null);
  const rotationRef = useRef(0);
  const animFrame = useRef(null);
  const confettiFrame = useRef(null);
  const router = useRouter();

  const [spinning, setSpinning] = useState(false);
  const [reward, setReward] = useState(null);
  const [spinsRemaining, setSpinsRemaining] = useState(5);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const productImages = [pro1, pro2, pro3, pro4, pro5, pro6];
  const imageCache = useRef({});

  const prizeLabels = [
    "AWPods",
    "Voucher",
    "Free Data",
    "Phone",
    "$50",
    "Food Coupon",
  ];

  const prizes = [
    { label: prizeLabels[0], color: "#ffffff" },
    { label: prizeLabels[1], color: "#ffffff" },
    { label: prizeLabels[2], color: "#ffffff" },
    { label: prizeLabels[3], color: "#ffffff" },
    { label: prizeLabels[4], color: "#ffffff" },
    { label: prizeLabels[5], color: "#ffffff" },
  ];

  const size = 420;

  function generateUUID() {
    // simple RFC4122 v4-ish UUID (good enough client-side)
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  async function getCurrentUser() {
    try {
      const supabase = createClient(true);
      const { data } = await supabase.auth.getSession();
      return data?.session?.user ?? null;
    } catch (e) {
      console.error("getCurrentUser error", e);
      return null;
    }
  }

  function getOrCreateGuestId() {
    const key = "guest_id_v1";
    let guest = localStorage.getItem(key);
    if (!guest) {
      guest = generateUUID();
      localStorage.setItem(key, guest);
    }
    return guest;
  }

  async function saveSpinResultToDB({ prize, image }) {
    const supabase = createClient(true);
    const user = await getCurrentUser();

    if (user) {
      const { error } = await supabase
        .from("wins")
        .insert([{ user_id: user.id, prize, image }]);
      if (error) console.error("saveSpinResult user insert error", error);
      await supabase.from("profiles").upsert({ id: user.id, has_played: true });
    } else {
      const guestId = getOrCreateGuestId();
      const { error } = await supabase
        .from("wins")
        .insert([{ guest_id: guestId, prize, image }]);
      if (error) console.error("saveSpinResult guest insert error", error);
    }

    localStorage.setItem("spinner_played_v1", "1");
    localStorage.setItem(
      "spinner_win_v1",
      JSON.stringify({ prize, image, created_at: new Date().toISOString() })
    );
  }

  useEffect(() => {
    const loadImages = async () => {
      const loadPromises = productImages.map((imgSrc, index) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.onload = () => {
            imageCache.current[index] = img;
            resolve(img);
          };
          img.onerror = reject;
          img.src = imgSrc.src;
        });
      });

      try {
        await Promise.all(loadPromises);
        setImagesLoaded(true);
        drawWheel(0);
      } catch (error) {
        console.error("Error loading images:", error);
        setImagesLoaded(true);
      }
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = wheelRef.current;
    const ctx = canvas.getContext("2d");
    const ratio = window.devicePixelRatio || 1;

    canvas.width = size * ratio;
    canvas.height = size * ratio;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;

    ctx.scale(ratio, ratio);

    drawWheel(0);
  }, [imagesLoaded]);

  function drawWheel(angle) {
    const canvas = wheelRef.current;
    const ctx = canvas.getContext("2d");

    const cx = size / 2;
    const cy = size / 2;
    const r = size / 2 - 8;

    ctx.clearRect(0, 0, size, size);

    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate((-angle * Math.PI) / 180);

    const numSlices = prizes.length;
    const sliceAngle = (2 * Math.PI) / numSlices;
    const sliceAngleDeg = 360 / numSlices;

    for (let i = 0; i < numSlices; i++) {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, r, i * sliceAngle, (i + 1) * sliceAngle);
      ctx.strokeStyle = "#e5e7eb";
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    for (let i = 0; i < numSlices; i++) {
      ctx.save();

      const segmentCenterAngle = i * sliceAngle + sliceAngle / 2;
      ctx.rotate(segmentCenterAngle);

      if (imagesLoaded && imageCache.current[i]) {
        ctx.save();
        ctx.translate(r * 0.5, 0);

        const segmentCenterDeg = i * sliceAngleDeg + sliceAngleDeg / 2;
        let imageRotation = 0;

        if (segmentCenterDeg > 90 && segmentCenterDeg <= 270) {
          imageRotation = Math.PI;
        }

        ctx.rotate(imageRotation);

        const imgSize = 50;
        try {
          ctx.drawImage(
            imageCache.current[i],
            -imgSize / 2,
            -imgSize / 2,
            imgSize,
            imgSize
          );
        } catch (error) {
          console.error("Error drawing image:", error);
        }
        ctx.restore();
      }

      ctx.translate(r * 0.8, 0);

      const segmentCenterDeg = i * sliceAngleDeg + sliceAngleDeg / 2;
      let textRotation = Math.PI / 2;

      if (segmentCenterDeg > 90 && segmentCenterDeg <= 270) {
        textRotation += Math.PI;
      }

      ctx.rotate(textRotation);

      ctx.fillStyle = "#1f2937";
      ctx.font = "bold 14px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(prizes[i].label, 0, 0);
      ctx.restore();
    }

    ctx.restore();

    ctx.beginPath();
    ctx.arc(cx, cy, 48, 0, Math.PI * 2);
    ctx.fillStyle = "#1f2937";
    ctx.fill();

    ctx.fillStyle = "#fff";
    ctx.font = "bold 16px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("SPIN", cx, cy + 6);
  }

  function easeOut(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function spin() {
    if (spinning || spinsRemaining <= 0 || !imagesLoaded) return;

    setSpinning(true);
    setReward(null);

    const current = rotationRef.current;
    const slice = 360 / prizes.length;

    const selectedIndex = Math.floor(Math.random() * prizes.length);

    const targetPosition = 0;
    const selectedSegmentCenter = selectedIndex * slice + slice / 2;
    const rotationNeeded = (targetPosition - selectedSegmentCenter + 360) % 360;

    const extraRotations = 360 * (4 + Math.floor(Math.random() * 3));
    const finalAngle = current + extraRotations + rotationNeeded;
    const duration = 4000 + Math.random() * 1000;
    const start = performance.now();

    function animate(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = easeOut(t);

      const angle = current + (finalAngle - current) * eased;
      rotationRef.current = angle;
      drawWheel(angle);

      if (t < 1) {
        animFrame.current = requestAnimationFrame(animate);
      } else {
        finish(selectedIndex);
      }
    }

    animFrame.current = requestAnimationFrame(animate);
  }

  function finish(index) {
    const wonPrize = prizes[index].label;
    setReward(wonPrize);
    setSpinning(false);
    setSpinsRemaining((prev) => prev - 1);
    startConfetti();
    toast.success(`Congratulations! You won ${wonPrize}`);

    (async () => {
      try {
        await saveSpinResultToDB({
          prize: wonPrize,
          image: productImages[index]?.src ?? null,
        });
      } catch (err) {
        console.error("Failed to save spin result", err);
      }
    })();
  }

  function handleContinue() {
    router.push("/home");
  }

  function startConfetti() {
    const canvas = confettiRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = size;
    canvas.height = size;

    const parts = [];
    const center = size / 2;

    for (let i = 0; i < 80; i++) {
      const angle = (2 * Math.PI * i) / 80;
      const speed = 3 + Math.random() * 3;
      parts.push({
        x: center,
        y: center,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: 4 + Math.random() * 6,
        life: 80 + Math.random() * 30,
        color: ["#F87171", "#34D399", "#60A5FA", "#C084FC"][i % 4],
      });
    }

    function loop() {
      ctx.clearRect(0, 0, size, size);

      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.1;
        p.life -= 1;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.life <= 0) parts.splice(i, 1);
      }

      if (parts.length) confettiFrame.current = requestAnimationFrame(loop);
    }

    if (confettiFrame.current) cancelAnimationFrame(confettiFrame.current);
    confettiFrame.current = requestAnimationFrame(loop);
  }

  const isContinueMode = spinsRemaining <= 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <Image className="w-[40vw] lg:w-[20vw]" src={logo} alt="logo" />
      <h1 className="text-[#2d2d2d] text-[25px] font-[400] py-2">
        Lucky Spinner
      </h1>

      {!imagesLoaded && (
        <div className="relative w-[420px] h-[420px] flex items-center justify-center">
          <div className="text-lg">Loading products...</div>
        </div>
      )}

      <div
        className="relative w-[420px] h-[420px]"
        style={{ display: imagesLoaded ? "block" : "none" }}
      >
        <canvas ref={wheelRef} className="rounded-full shadow-xl" />
        <canvas
          ref={confettiRef}
          className="absolute inset-0 pointer-events-none"
        />
      </div>

      <button
        onClick={isContinueMode ? handleContinue : spin}
        disabled={(spinning && !isContinueMode) || !imagesLoaded}
        className={`mt-6 cursor-pointer px-6 py-3 rounded-full text-white font-semibold shadow-lg transition-all ${
          isContinueMode
            ? "bg-[#d17803] hover:bg-[#d17702] active:scale-95"
            : spinning || !imagesLoaded
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#f28b00] hover:bg-[#f28b00] active:scale-95"
        }`}
      >
        {!imagesLoaded
          ? "Loading..."
          : isContinueMode
            ? "CONTINUE"
            : spinning
              ? "Spinning..."
              : `SPIN ${spinsRemaining} left`}
      </button>

      <p className="text-[#919191] py-2 text-[14px] text-center">
        Spin the wheel for a chance to win exclusive products and exciting
        rewards!
      </p>
      <Toaster />
    </div>
  );
}
