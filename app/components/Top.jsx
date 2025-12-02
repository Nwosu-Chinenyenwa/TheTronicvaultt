"use client";

import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

export default function Top() {
  const [myaccountOpen, setMyaccountOpen] = useState(0);
  return (
    <>
      <section className="flex flex-col md:flex-row justify-center gap-5 sm:justify-between sm:px-3 py-2 md:py-0 h-fit md:gap-0  md:h-[37px] text-[14px]  lg:px-10 lg:justify-between border-b border-[#f2890041] text-[#2d2d2d] items-center">
        <ul className="flex">
          <Link href={"/faq"}>
            <li className="flex px-2 border-r border-[#80808064] items-center hover:text-[#f28b00] cursor-pointer">
              Support
            </li>
          </Link>
          <li className="flex px-2 border-r border-[#80808064] items-center hover:text-[#f28b00] cursor-pointer">
            Store Locator
          </li>
          <Link href={"/tracking"}>
          <li className="flex px-2 items-center hover:text-[#f28b00] cursor-pointer">
            Track Your Orders
          </li>
          </Link>
        </ul>

        <div className="">
          <span className="text-[#f28b00]">Call Us</span>
          <a className="hover:text-[#f28b00] transition-all" href="tel:">
            +77363563882992
          </a>
        </div>

        <ul className="flex items-center">
          <li className="relative px-2 border-r border-[#80808064] ">
            <span
              onClick={() => setMyaccountOpen(myaccountOpen === 1 ? 0 : 1)}
              className="flex items-center hover:text-[#f28b00] cursor-pointer justify-center gap-1"
            >
              <span>My Account</span>
              <IoIosArrowDown />
            </span>

            <ul
              className={` absolute top-10 bg-white flex flex-col gap-1  m-auto rounded-[5px] p-2 shadow-sm  z-10 ${
                myaccountOpen === 1
                  ? "translate-y-2 opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out z-10"
                  : "opacity-0"
              }`}
            >
              <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                Login
              </li>
              <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                Sign Up
              </li>
              <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                My cart
              </li>
              <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                My Account
              </li>
              <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                Checkout
              </li>
            </ul>
          </li>

          <li className="flex px-2 border-r border-[#80808064] items-center hover:text-[#f28b00] cursor-pointer">
            USD
          </li>

          <li className="relative group  px-2 ">
            <span
              onClick={() => setMyaccountOpen(myaccountOpen === 2 ? 0 : 2)}
              className="flex items-center hover:text-[#f28b00] cursor-pointer justify-center gap-1"
            >
              <span>English</span>
              <IoIosArrowDown />
            </span>

            <ul
              className={`absolute top-10 bg-white flex flex-col gap-1  m-auto rounded-[5px] p-2 shadow-sm z-10 ${
                myaccountOpen === 2
                  ? "translate-y-2 opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out z-10"
                  : "opacity-0"
              }`}
            >
              <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                English
              </li>
              <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                Spanish
              </li>
              <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                French
              </li>
              <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                Greek
              </li>
              <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                German
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </>
  );
}
