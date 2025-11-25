"use client";

import { useEffect, useRef, useState } from "react";
import hero1 from "../../public/images/hero1.png";
import hero2 from "../../public/images/hero2.png";
import hero3 from "../../public/images/popup.png";
import hero4 from "../../public/images/04-removebg-preview.png";
import Image from "next/image";

const slidesData = [
  {
    id: 0,
    small: "Enhanced Technology",
    title: "SMART TV",
    price: "$1,589.99",
    oldPrice: "$2,500.99",
    discription:
      "The ship set ground on the shore of this uncharted desert isle with Gilligan the Skipper too the millionaire and his story.",
    badgeText: "60 %\nsale",
    image: hero1,
  },
  {
    id: 1,
    small: "Latest & Greatest",
    title: "CURVED OLED",
    discription:
      "The ship set ground on the shore of this uncharted desert isle with Gilligan the Skipper too the millionaire and his story.",
    price: "$2,199.00",
    oldPrice: "$3,200.00",
    badgeText: "30 %\nsale",
    image: hero2,
  },
  {
    id: 2,
    small: "Latest & Greatest",
    title: "CURVED OLED",
    discription:
      "The ship set ground on the shore of this uncharted desert isle with Gilligan the Skipper too the millionaire and his story.",
    price: "$2,199.00",
    oldPrice: "$3,200.00",
    badgeText: "30 %\nsale",
    image: hero3,
  },
  {
    id: 3,
    small: "Enhanced Technology",
    title: "SMART TV",
    price: "$1,589.99",
    oldPrice: "$2,500.99",
    discription:
      "The ship set ground on the shore of this uncharted desert isle with Gilligan the Skipper too the millionaire and his story.",
    badgeText: "60 %\nsale",
    image: hero1,
  },
  {
    id: 4,
    small: "Latest & Greatest",
    title: "CURVED OLED",
    discription:
      "The ship set ground on the shore of this uncharted desert isle with Gilligan the Skipper too the millionaire and his story.",
    price: "$2,199.00",
    oldPrice: "$3,200.00",
    badgeText: "30 %\nsale",
    image: hero2,
  },
  {
    id: 5,
    small: "Latest & Greatest",
    title: "CURVED OLED",
    discription:
      "The ship set ground on the shore of this uncharted desert isle with Gilligan the Skipper too the millionaire and his story.",
    price: "$2,199.00",
    oldPrice: "$3,200.00",
    badgeText: "30 %\nsale",
    image: hero4,
  },
];

export default function HeroSlider({
  slides = slidesData,
  autoplay = true,
  autoplayInterval = 4000,
}) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);
  const length = slides.length;

  useEffect(() => {
    if (!autoplay) return;
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % length);
    }, autoplayInterval);

    return () => {
      resetTimeout();
    };
  }, [index, autoplay, autoplayInterval]);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  const goTo = (i) => {
    setIndex(i);
  };

  const handleMouseEnter = () => {
    resetTimeout();
  };
  const handleMouseLeave = () => {
    if (autoplay) {
      timeoutRef.current = setTimeout(() => {
        setIndex((prev) => (prev + 1) % length);
      }, autoplayInterval);
    }
  };

  return (
    <section className="bg-[#f5f5f5] py-10 flex flex-col gap-10">
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative bg-white w-[95vw] h-[40vh]  md:w-[90vw] xl:h-fit lg:h-[50vh] flex items-center justify-center m-auto rounded-lg overflow-hidden shadow-sm"
      >
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform items-center duration-700 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((s, i) => (
                <div
                  key={s.id}
                  className="w-full flex-shrink-0 flex items-center justify-between gap-6"
                  style={{ minWidth: "100%" }}
                >
                  <div className="w-full min-h-[350px] md:w-1/2">
                    <p className="text-[#919191] ml-5 mt-10 md:mt-0 text-[16px] md:ml-15">
                      {s.small}
                    </p>

                    <h2 className="text-[40px] md:text-[70px]  ml-5 flex gap-2 leading-tight  md:ml-15 font-light nunito text-[#f28b00]">
                      {s.title.split(" ").map((word, idx) =>
                        idx === 1 ? (
                          <span key={idx} className="text-gray-800">
                            {" " + word}
                          </span>
                        ) : (
                          <span key={idx}>{idx === 0 ? word : " " + word}</span>
                        )
                      )}
                    </h2>

                    <p className="open-sans  ml-5 leading-[25px]  md:ml-15 text-[15px] text-[#919191] font-light">
                      {s.discription}
                    </p>

                    <div className="mt-8  relative flex items-center gap-6">
                      <div className="bg-[#f28b00]  text-white font-semibold text-[28px] rounded-e-full px-10 md:px-20 py-2 inline-block shadow-sm">
                        {s.price}
                      </div>

                      <button className="rounded-full border border-gray-300 px-[33px] py-[5px] cursor-pointer text-sm font-semibold hover:bg-gray-50 flex flex-nowrap items-center gap-2 whitespace-nowrap">
                        <span>Shop Now</span>
                        <span className="text-gray-400 text-3xl">&rarr;</span>
                      </button>
                    </div>

                    <p className="mt-4  ml-5 md:ml-15 text-gray-400 line-through">
                      {s.oldPrice}
                    </p>
                  </div>

                  <div className="w-1/2 relative flex items-center justify-end">
                    <div className="max-w-[520px] md:flex hidden relative w-[60%] mr-20 drop-shadow-2xl">
                      <Image
                        src={s.image}
                        alt={s.title}
                        className="w-full z-30 object-cover rounded-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="items-center justify-center flex gap-4">
        {slides.map((_, i) => (
          <div
            className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${
              i === index ? "border-[#f28b00]" : "border-[gray]"
            }`}
            key={i}
          >
            <button
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                i === index ? "bg-[#f28b00]  scale-110 shadow-md" : "bg-white"
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
