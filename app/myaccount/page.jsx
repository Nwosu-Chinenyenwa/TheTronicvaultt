"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Profile from "../components/Profile";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterCard from "../components/FooterCard";
import Image from "next/image";
import arrow from "../../public/images/arrow-right.png";
import Loader from "../components/Loader";

export default function AccountsPage() {
  const [checking, setChecking] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const supabase = createClient(true);
    supabase.auth.getSession().then(({ data }) => {
      if (data?.session?.user) {
        setUser(data.session.user);
      } else {
        setUser(null);
      }
      setChecking(false);
    });

    const supabaseRealtime = createClient(true);
    const { data: sub } = supabaseRealtime.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );
    return () => {
      sub?.subscription?.unsubscribe?.();
    };
  }, []);

  useEffect(() => {
    if (!user) return;

    const guestId =
      typeof window !== "undefined"
        ? localStorage.getItem("guest_id_v1")
        : null;
    if (!guestId) return;

    (async () => {
      try {
        const res = await fetch("/api/migrate-guest", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ guestId }),
        });
        const data = await res.json();
        if (res.ok) {
          localStorage.removeItem("guest_id_v1");
          localStorage.setItem("spinner_played_v1", "1");
        } else {
          console.error("migration failed", data);
        }
      } catch (err) {
        console.error("migration request error", err);
      }
    })();
  }, [user]);

  return (
    <>
      <Header />

      <div className="border-b border-[#00000022] py-3">
        <div className="flex items-center gap-5 ml-[19px] text-sm md:text-base">
          <h2 className="font-[500] text-[#8c8c8c] cursor-pointer hover:text-[#f28b00] transition-all">
            Home
          </h2>
          <Image
            src={arrow}
            alt="arrow right"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <h2 className="font-[500] text-[#8c8c8c]">Accounts</h2>
        </div>
      </div>

      <main className="bg-[#f5f5f5] flex flex-col items-center justify-center px-4 py-8 md:py-12 lg:py-16">
        {checking ? (
          <div className="min-h-[200px] flex items-center justify-center">
            <Loader />
          </div>
        ) : user ? (
          <div className="w-full max-w-6xl">
            <Profile user={user} />
          </div>
        ) : (
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-12">
            <Login />
            <Signup />
          </div>
        )}
      </main>

      <FooterCard />
      <Footer />
    </>
  );
}
