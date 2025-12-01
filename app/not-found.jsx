"use client";

import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import arrow from "../public/images/arrow-right.png";
import found from "../public/images/error.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";

export default function notfound() {
  const [query, setquery] = useState("");
  const route = useRouter();

  const pages = {
    home: "/home",
    about: "/about",
    contact: "/contact",
    faq:"/faq",
    topcategories:"/topcategories",
    tracking:"/tracking",
  };

  const handle = () => {
    const value = query.toLowerCase().trim();

    if (pages[value]) {
      route.push(pages[value]);
    } else toast.error(`404 page not found:${query}`);
  };

  return (
    <>
      <Header />
      <section>
        <div>
          <div className="border-b border-[#00000022] py-3 ">
            <div className="flex items-center gap-5 ml-[19px]">
              <h2 className="font-[500] text-[#8c8c8c] cursor-pointer hover:text-[#f28b00] transition-all">
                Home
              </h2>
              <Image src={arrow} alt="arrow right" />
              <h2 className="font-[500] text-[#8c8c8c]">
                Page not founded (404)
              </h2>
            </div>
          </div>

          <div className="flex flex-col py-20 items-center justify-center">
            <div className="flex flex-col items-center text-center justify-center">
              <Image src={found} alt="404" />
              <h1 className="text-[30px] font-[500] mt-[41px] mb-[11px] text-[#2d2d2d]">
                Sorry but we couldn’t find the page you are looking for.
              </h1>
              <p className="text-[#919191]">
                Please check to make sure you’ve typed the URL correctly. Maybe
                try a search?
              </p>
            </div>
            <div className="border-2 border-dotted w-[80vw] md:w-[60vw] lg:w-[50vw]  border-[#e5e5e5] rounded-[10px] pt-[63px] pb-[59px] mt-[44px] mb-[32px] text-center">
              <div className="flex flex-wrap gap-5 md:gap-0 justify-center items-center">
                <input
                  value={query}
                  onChange={(e) => setquery(e.target.value)}
                  className="w-[263px] h-[40px] text-[#727272] outline-none px-[15px] pl-[30px] py-[8px] border-2 border-[#e5e5e5] rounded-[30px] inline-block mr-[13px]"
                  type="text"
                  placeholder="Search"
                />
                <button
                  onClick={handle}
                  className="inline-block rounded-full cursor-pointer text-white font-sans bg-[#2d2d2d] h-[40px] leading-[40px] text-[13px] px-[52px] font-normal relative overflow-hidden z-3"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Toaster />
    </>
  );
}
