"use client";

import { useEffect, useRef, useState } from "react";
import hero1 from "../../public/images/hero1.png";
import hero2 from "../../public/images/hero2.png";
import hero3 from "../../public/images/popup.png";
import hero4 from "../../public/images/04-removebg-preview.png";
import product1 from "../../public/images/04.jpg";
import product2 from "../../public/images/14.jpg";
import product3 from "../../public/images/s07.jpg";
import product4 from "../../public/images/16.jpg";
import product5 from "../../public/product1/04.jpg";
import product6 from "../../public/product1/05.jpg";
import product7 from "../../public/product1/06.jpg";
import arrow from "../../public/images/arrow-right.png";
import Image from "next/image";
import Whitemostsales from "../components/Whitemostsale";
import Footer from "../components/Footer";
import Header from "../components/Header";

const slidesData = [
  {
    id: 1,
    small: "Latest & Greatest",
    title: "CURVED OLED",
    image: hero3,
  },
  {
    id: 2,
    small: "Latest & Greatest",
    title: "CURVED OLED",
    image: hero3,
  },
];

const products = [
  {
    id: 1,
    img: product5,
    name: "Apple iPad Mini G2356",

    li1: " Computers & Tablets",
    li2: "Curved TVs",
    li3: "Hard Drives & Storage",
    li4: "Inkjet Printers",
    li5: "Laptop Accessories",
  },
  {
    id: 2,
    img: product2,
    name: "Apple iPad Mini G2356",
    li1: " Computers & Tablets",
    li2: "Curved TVs",
    li3: "Hard Drives & Storage",
    li4: "Inkjet Printers",
    li5: "Laptop Accessories",
  },
  {
    id: 3,
    img: product3,
    name: "Apple iPad Mini G2356",

    li1: " Computers & Tablets",
    li2: "Curved TVs",
    li3: "Hard Drives & Storage",
    li4: "Inkjet Printers",
    li5: "Laptop Accessories",
  },
  {
    id: 4,
    img: product4,
    name: "Apple iPad Mini G2356",
    li1: " Computers & Tablets",
    li2: "Curved TVs",
    li3: "Hard Drives & Storage",
    li4: "Inkjet Printers",
    li5: "Laptop Accessories",
  },
  {
    id: 5,
    img: product1,
    name: "Apple iPad Mini G2356",
    li1: " Computers & Tablets",
    li2: "Curved TVs",
    li3: "Hard Drives & Storage",
    li4: "Inkjet Printers",
    li5: "Laptop Accessories",
  },
  {
    id: 6,
    img: product6,
    name: "Apple iPad Mini G2356",
    li1: " Computers & Tablets",
    li2: "Curved TVs",
    li3: "Hard Drives & Storage",
    li4: "Inkjet Printers",
    li5: "Laptop Accessories",
  },
];

export default function page({
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
    <>
      <Header />
      <div className="border-b border-[#00000022] py-3 ">
        <div className="flex items-center gap-5 ml-[19px]">
          <h2 className="font-[500] text-[#8c8c8c] cursor-pointer hover:text-[#f28b00] transition-all">
            Home
          </h2>
          <Image src={arrow} alt="arrow right" />
          <h2 className="font-[500] text-[#8c8c8c]">Tracking</h2>
        </div>
      </div>

      <section className="py-10 flex flex-col gap-10">
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative bg-[#f5f5f5] w-[95vw]  md:w-[90vw] py-10 flex items-center justify-center m-auto rounded-lg overflow-hidden shadow-sm"
        >
          <div className="w-full max-w-[1200px]">
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
                    <div className="w-full md:w-1/2">
                      <p className="text-[#919191] ml-5 mt-10 md:mt-0 text-[16px] md:ml-15">
                        {s.small}
                      </p>

                      <h2 className="text-[40px] md:text-[70px]  ml-5 flex gap-2 leading-tight  md:ml-15 font-light nunito text-[#f28b00]">
                        <span className="text-gray-800">{s.title}</span>
                      </h2>
                    </div>

                    <div className=" relative flex items-center justify-end">
                      <div className=" md:flex hidden relative w-[60%] mr-20 drop-shadow-2xl">
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

        <div className="w-[90vw] m-auto">
          <div className="flex justify-between items-center py-1 border-b-1 border-[#e5e5e5]">
            <h2 className="text-[24px] font-[500] mb-5">Our Products</h2>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 mt-5 justify-center  items-center">
            {products.map((item) => (
              <div key={item.id} className="  mb-10">
                <div className="h-[250px] flex items-center rounded-[10px] group">
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="md:w-[15vw] w-[30vw] flex items-center justify-center">
                        <Image className="" src={item.img} alt="products" />
                      </div>

                      <div className="flex flex-col">
                        <h3 className="text-[#484848] text-[16px]">
                          {item.name}
                        </h3>

                        <div>
                          <ul className="flex text-[#919191] text-[13px] flex-col mt-[15px] gap-3">
                            <li>{item.li1}</li>
                            <li>{item.li2}</li>
                            <li>{item.li3}</li>
                            <li>{item.li4}</li>
                            <li>{item.li5}</li>
                          </ul>
                          <h3 className="text-[#f28b00] text-[14px] font-[500] mt-[15px] cursor-pointer">
                            See all
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Whitemostsales />
      <Footer />
    </>
  );
}
