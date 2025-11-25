"use client";

import React from "react";
import product2 from "../../public/product1/1.jpg";
import Image from "next/image";
import { TiShoppingCart } from "react-icons/ti";
import { GoGitCompare } from "react-icons/go";
import { CiHeart } from "react-icons/ci";

export default function Imagebox() {
  return (
    <section className="py-20">
      <div className="flex flex-col lg:flex-row w-[90vw] m-auto justify-center gap-10 lg:gap-0">
        <div className="py-10 w-full lg:w-[30vw] relative">
          <span className="absolute bg-[#f5f5f5] font-[700] text-[#2d2d2d] text-[16px] h-[50px] sm:h-[67px] flex items-center px-6 sm:px-[36px] rounded-tl-full rounded-bl-full right-0">
            Special offer
          </span>
          <p className="text-[#919191] mt-10 sm:mt-30 mr-0 sm:mr-10">
            There are many variations of passages of Lorem Ipsum available, but
            the majorited have suffered alteration.
          </p>

          <div className="flex flex-wrap sm:flex-nowrap items-center mt-4 sm:mt-[58px] uppercase justify-between gap-4 sm:gap-0">
            {["Days", "Hours", "Mins", "Secs"].map((label, idx) => (
              <div key={idx} className="flex flex-col gap-1 items-center">
                <span className="flex items-center justify-center h-[50px] sm:h-[68px] w-[50px] sm:w-[68px] rounded-full text-[#2d2d2d] leading-[50px] sm:leading-[68px] border-[#e5e5e5] border text-[20px] sm:text-[25px] font-[500]">
                  00
                </span>
                <span className="text-[16px] sm:text-[20px] font-[500] text-[#f28b00]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="py-10 w-full lg:w-[50vw] border-1 border-[#e5e5e5] rounded-[8px] relative">
          <span className="absolute bg-[#f28b00] font-[700] text-[#ffff] text-[16px] h-[50px] sm:h-[67px] flex items-center px-6 sm:px-[36px] rounded-tr-full rounded-br-full">
            Special offer
          </span>

          <div className="mt-10 flex flex-col lg:flex-row items-center gap-6">
            <Image
              className="w-full lg:w-[30vw] rounded"
              src={product2}
              alt="products"
            />
            <div className="w-full p-3 lg:w-[20vw] flex flex-col gap-3">
              <span className="text-[#484848] text-[16px]">Computer</span>
              <span className="leading-[22px] text-[#919191] text-[16px] block">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
                possimus ipsum, id, deserunt distinctio, odio alias maiores
                inventore itaque numquam accusantium nesciunt aperiam minus.
                Odit vitae corporis tenetur similique doloribus!
              </span>
              <li className="flex items-center gap-5">
                <span className="text-[#f28b00] text-[21px] font-[500] mr-[14px]">
                  $5,759.68
                </span>
                <span className="text-[14px] underline text-[#c5c5c5]">
                  $2,999.00
                </span>
              </li>
              <div className="flex items-center transition-all group-hover:opacity-100 justify-center flex-col mt-5 gap-2">
                <button className="flex bg-[#f92400] hover:bg-[#f28b00] transition-all text-white gap-3 text-[18px] sm:text-[20px] cursor-pointer font-[600] w-full sm:w-[80%] items-center justify-center h-[45px] rounded-full">
                  <TiShoppingCart className="text-[25px]" />
                  <span>Add To Cart</span>
                </button>
                <div className="flex items-center gap-6 sm:gap-10">
                  <div className="text-[#919191] font-[600] text-[12px] flex items-center gap-2">
                    <GoGitCompare />
                    <span>Compare</span>
                  </div>
                  <div className="text-[#919191] font-[600] text-[12px] flex items-center gap-2">
                    <CiHeart />
                    <span>Wishlist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
