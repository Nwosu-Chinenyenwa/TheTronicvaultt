"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/images/logo2.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { MdCompareArrows } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import Cartdropdown from "./Cartdropdown";
import Link from "next/link";

export default function Nav() {
  const [display, setDisplay] = useState(0);
  const [love, setlove] = useState(false);
  const [cartdropdown, setcartdropdown] = useState(0);
  return (
    <>
      <section className="flex flex-col  md:flex-row p-5 justify-center gap-5 lg:justify-between items-center md:p-10">
        <Image
          className="w-[60vw] md:w-[25vw] lg:w-[20vw]"
          src={logo}
          alt="Logo"
        />

        <ul className="flex border-2 w-[90vw] lg:w-fit justify-between md:justify-center md:w-fit relative items-center pl-10 p-3 border-[#e5e5e5] active:border-[#d7d2d2] rounded-full gap-7">
          <li className="relative xl:px-2 hidden lg:block">
            <span
              onClick={() => setDisplay(display === 1 ? 0 : 1)}
              className="flex items-center text-[#727272] border-r border-[#0000003a] px-1 xl:px-5 cursor-pointer justify-center gap-1"
            >
              <span>All Category</span>
              <IoIosArrowDown />
            </span>

            <ul
              className={`opacity-0 absolute top-10 bg-white flex flex-col gap-1  m-auto rounded-[5px] p-2 w-[15vw] shadow-sm z-10 ${
                display === 1
                  ? "translate-y-2 opacity-100 z-[30] translate-y-0 transition-all duration-300 ease-in-out"
                  : "opacity-0 z-0"
              }`}
            >
              <div className="text-[14px]">
                <h2 className="text-[#f28b00] text-[17px] mb-1">Electronics</h2>

                <ul className="ml-2 flex flex-col gap-2">
                  <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                    Components
                  </li>
                  <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                    Laptops & Computers
                  </li>
                  <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                    PS5
                  </li>
                  <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                    Monitor
                  </li>
                  <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                    Scanners
                  </li>
                </ul>
              </div>
              <div className="text-[14px]">
                <h2 className="text-[#f28b00] text-[17px] mb-1">Accessories</h2>

                <ul className="ml-2 flex flex-col gap-2">
                  <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                    Software
                  </li>
                  <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                    Mobile
                  </li>
                  <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                    TV stands
                  </li>
                  <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                    Printer
                  </li>
                  <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                    Media
                  </li>
                </ul>
              </div>
            </ul>
          </li>
          <li>
            <input
              className="placeholder:text-[#919191] placeholder:text-[14px] outline-none w-full md:w-[20vw] px-2 text-[#727272]"
              type="text"
              placeholder="Search what you looking for?"
            />
          </li>
          <li>
            <IoSearchOutline className="text-[#919191] cursor-pointer mr-5 text-[20px]" />
          </li>
        </ul>
        <ul className="flex items-center z-20 gap-5">
          <Link href={"/compare"}>
            <div className="h-[50px] w-[50px] rounded-full border-2 transition-all border-[#e5e5e5] text-[#33333374] hover:border-[#f28b00] text-[25px] flex items-center justify-center cursor-pointer">
              <MdCompareArrows />
            </div>
          </Link>

          <Link href={"/wishlist"}>
            <div className="h-[50px] w-[50px] rounded-full border-2 transition-all border-[#e5e5e5] text-[#33333374] hover:border-[#f28b00] text-[25px] flex items-center justify-center cursor-pointer">
              <FaRegHeart />
            </div>
          </Link>

          <div>
            <div
              onClick={() => setcartdropdown(cartdropdown === 1 ? 0 : 1)}
              className="flex items-center gap-3 cursor-pointer relative"
            >
              <div className="relative w-[50px] h-[50px] rounded-full border-2 border-[#e5e5e5] flex items-center justify-center">
                <span className="absolute -top-1 -right-1 bg-[#f28b00] text-white text-[13px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                  4
                </span>

                <TiShoppingCart className="text-[#33333374] text-[25px]" />
              </div>

              <span className="text-[16px] hidden md:block font-medium text-[#2d2d2d]">
                $0.00
              </span>
            </div>

            <div
              className={`absolute right-0 ${
                cartdropdown === 1
                  ? "translate-y-2 opacity-100 z-30 group-hover:translate-y-0 transition-all duration-300 ease-in-out"
                  : "opacity-0 z-0"
              }`}
            >
              <Cartdropdown />
            </div>
          </div>
        </ul>
      </section>
    </>
  );
}
