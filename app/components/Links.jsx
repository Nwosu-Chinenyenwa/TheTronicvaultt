"use client";

import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaBagShopping } from "react-icons/fa6";
import { MdShoppingCart, MdConnectWithoutContact } from "react-icons/md";
import { IoBagCheckOutline, IoHome } from "react-icons/io5";
import { SiAboutdotme } from "react-icons/si";
import { RiServiceFill } from "react-icons/ri";
import { FaQq } from "react-icons/fa";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { RiMenu2Line } from "react-icons/ri";
import { LiaGreaterThanSolid } from "react-icons/lia";
import SubmenuBannerBoxes from "./SubmenuBannerBoxes";
export default function Links() {
  const [display, setdisplay] = useState(false);
  const [showElectronicsMenu, setShowElectronicsMenu] = useState(false);

  return (
    <>
      <div className="bg-[#f28b00] z-10 px-1 pl-4 md:pl-0 md:px-10 py-3 relative items-center flex justify-between">
        <div className="w-[20vw] hidden xl:block pl-[30px]">
          <div className="absolute top-[-10] h-[55px] ">
            <div className="bg-[#484848] flex items-center justify-center gap-5 text-[#fefefe] font-[600] uppercase text-[18px] h-[55px] w-[250px] rounded-tl-2xl rounded-tr-2xl cursor-pointer">
              <RiMenu2Line className="text-[25px]" />
              <span>All Pages</span>
            </div>
          </div>

          {/*  <div className="flex absolute z-50 top-10 bg-[#222222] text-white">
            <ul>
              <li className="border-b h-[50px] border-[#333333] flex items-center w-[250px] px-[24px]">
                <IoHome className="mr-[18px] text-2xl" />

                <span className="font-[600]">Home</span>
              </li>
          
       
            </ul>
          </div> */}
        </div>

        <ul className="hidden md:flex">
          <Link href={"/home"}>
            <li className="text-[14px] text-[#fefefe] border-r border-[#fec579] px-5 cursor-pointer">
              Home
            </li>
          </Link>

          <Link href={"/about"}>
            <li className="text-[14px] text-[#fefefe] border-r border-[#fec579] px-5 cursor-pointer">
              About
            </li>
          </Link>
          <Link href={"/blogs"}>
            <li className="text-[14px] text-[#fefefe] border-r border-[#fec579] px-5 cursor-pointer">
              Blogs
            </li>
          </Link>
          <li className="text-[14px] text-[#fefefe] border-r border-[#fec579] px-5 cursor-pointer">
            Shop
          </li>
          <Link href={"/cart"}>
            <li className="text-[14px] text-[#fefefe] border-r border-[#fec579] px-5 cursor-pointer">
              Cart
            </li>
          </Link>
          <Link href={"/faq"}>
            <li className="text-[14px] text-[#fefefe] border-r border-[#fec579] px-5 cursor-pointer">
              Faq
            </li>
          </Link>
          <div className="" onMouseEnter={() => setShowElectronicsMenu(true)}>
            <li className="text-[14px] text-[#fefefe] border-r border-[#fec579] px-5 cursor-pointer">
              Electronics
            </li>

            {showElectronicsMenu && (
              <div
                onMouseLeave={() => setShowElectronicsMenu(false)}
                className="absolute left-[50] top-full z-50 slideFade"
              >
                <SubmenuBannerBoxes />
              </div>
            )}
          </div>

          <Link href={"/contact"}>
            <li className="text-[14px] text-[#fefefe] border-r border-[#fec579] px-5 cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>

        <li onClick={() => setdisplay(!display)}>
          {!display ? (
            <FiMenu className="flex md:hidden border border-white text-white text-[40px] p-1" />
          ) : (
            <IoMdClose className="flex md:hidden border border-white text-white text-[40px] p-1" />
          )}
        </li>

        <h6 className="uppercase text-[14px] font-[600] text-[#fff] cursor-pointer hover:underline">
          Today's Deal
        </h6>
      </div>

      {display && (
        <div className="flex absolute w-screen  z-20 md:hidden bg-[#222222] text-white">
          <ul>
            <Link href={"/Home"}>
              <li className="border-t border-[#333333] flex items-center justify-between w-[100vw] pl-5">
                <span>Home</span>
                <span className="w-[51px] h-[50px] bg-[#333] flex items-center justify-center">
                  {" "}
                  <IoHome />
                </span>
              </li>
            </Link>
            <Link href={"/about"}>
              <li className="border-t border-[#333333] flex items-center justify-between w-[100vw] pl-5">
                <span>About</span>
                <span className="w-[51px] h-[50px] bg-[#333] flex items-center justify-center">
                  {" "}
                  <SiAboutdotme />
                </span>
              </li>
            </Link>

            <Link href={"/blogs"}>
              <li className="border-t border-[#333333] flex items-center justify-between w-[100vw] pl-5">
                <span>blogs</span>
                <span className="w-[51px] h-[50px] bg-[#333] flex items-center justify-center">
                  {" "}
                  <RiServiceFill />
                </span>
              </li>
            </Link>

            <Link href={"/faq"}>
              <li className="border-t border-[#333333] flex items-center justify-between w-[100vw] pl-5">
                <span>Faq</span>
                <span className="w-[51px] h-[50px] bg-[#333] flex items-center justify-center">
                  {" "}
                  <FaQq />
                </span>
              </li>
            </Link>

            <Link href={"/shop"}>
              <li className="border-t border-[#333333] flex items-center justify-between w-[100vw] pl-5">
                <span>Shop</span>
                <span className="w-[51px] h-[50px] bg-[#333] flex items-center justify-center">
                  {" "}
                  <FaBagShopping />
                </span>
              </li>
            </Link>
            <li className="border-t border-[#333333] flex items-center justify-between w-[100vw] pl-5">
              <span>Cart</span>
              <span className="w-[51px] h-[50px] bg-[#333] flex items-center justify-center">
                {" "}
                <MdShoppingCart />
              </span>
            </li>

            <Link href={"/contact"}>
              <li className="border-t border-[#333333] flex items-center justify-between w-[100vw] pl-5">
                <span>Contact</span>
                <span className="w-[51px] h-[50px] bg-[#333] flex items-center justify-center">
                  {" "}
                  <MdConnectWithoutContact />
                </span>
              </li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}
