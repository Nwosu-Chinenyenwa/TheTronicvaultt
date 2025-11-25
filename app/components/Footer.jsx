import React from "react";
import logo from "../../public/images/logo2.png";
import Image from "next/image";
import call from "../../public/images/call.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import payment1 from "../../public/images/paypal.webp";
import payment2 from "../../public/images/ft-02.png";
import payment3 from "../../public/images/ft-03.png";
import payment4 from "../../public/images/ft-04.png";
import payment5 from "../../public/images/ft-05.png";
import app1 from "../../public/images/app-store.png";
import app2 from "../../public/images/google-play.png";
import top from "../../public/images/top.png";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="border-t border-[#00000022]">
        <div className="py-10 md:w-[97vw] xl:w-[90vw] m-auto">
          <ul className="flex flex-col md:flex-row justify-between">
            <li className="flex flex-col md:mb-0 mb-5 gap-5">
              <Image className="w-[40vw] md:w-[20vw]" src={logo} alt="Logo" />
              <div className="flex items-center gap-5">
                <Image className="" src={call} alt="call" />

                <div>
                  <p className="text-[14px] text-[#919191]">
                    Got Questions ? Call us 24/7!
                  </p>
                  <p className="text-[18px] font-[700] text-[#484848]">
                    Call Us: (888) 1234 56789
                  </p>
                  <p className="text-[14px] text-[#919191] ">
                    PO Box CT16122 Collins Street <br /> West, Victoria 8007,
                    <br /> Australia.
                  </p>
                </div> 
              </div>

              <div className="flex gap-7">
                <FaFacebookF className="text-[#d5d5d5] cursor-pointer transition-all hover:text-[#656565]" />
                <IoLogoWhatsapp className="text-[#d5d5d5] cursor-pointer transition-all hover:text-[#656565]" />
                <FaTwitter className="text-[#d5d5d5] cursor-pointer transition-all hover:text-[#656565]" />
                <FaInstagram className="text-[#d5d5d5] cursor-pointer transition-all hover:text-[#656565]" />
                <FaPinterest className="text-[#d5d5d5] cursor-pointer transition-all hover:text-[#656565]" />
                <TbWorld className="text-[#d5d5d5] cursor-pointer transition-all hover:text-[#656565]" />
              </div>
            </li>

            <li className="md:hidden lg:block">
              <h2 className="font-[500] text-[#484848] text-[20px]">
                Find By Categories
              </h2>
              <ul className="mt-5 flex flex-col gap-2 text-[14px]">
                <li className="text-[#919191] transition-all hover:text-[#f28b00] cursor-pointer">
                  Desktops
                </li>
                <li className="text-[#919191] transition-all hover:text-[#f28b00] cursor-pointer">
                  Laptops & Notebooks
                </li>
                <li className="text-[#919191] transition-all hover:text-[#f28b00] cursor-pointer">
                  Components
                </li>
                <li className="text-[#919191] transition-all hover:text-[#f28b00] cursor-pointer">
                  Tablets
                </li>
                <li className="text-[#919191] transition-all hover:text-[#f28b00] cursor-pointer">
                  Software
                </li>
                <li className="text-[#919191] transition-all hover:text-[#f28b00] cursor-pointer">
                  Phones & PDAs
                </li>
                <li className="text-[#919191] transition-all hover:text-[#f28b00] cursor-pointer">
                  Cameras
                </li>
                <li className="text-[#919191] transition-all hover:text-[#f28b00] cursor-pointer">
                  More
                </li>
              </ul>
            </li>

            <li>
              <h2 className="font-[500] text-[#484848] text-[20px]">
                Customer Care
              </h2>
              <ul className="mt-5 flex flex-col gap-2 text-[14px]">
                <li className="text-[#919191] transition-all hover:text-[#f28b00] cursor-pointer">
                  Contact us
                </li>
                <li className="text-[#919191] transition-all hover:text-[#f28b00] cursor-pointer">
                  Site Map
                </li>
                <li className="text-[#919191] transition-all hover:text-[#f28b00] cursor-pointer">
                  My Account
                </li>
                <li className="text-[#919191] transition-all hover:text-[#f28b00] cursor-pointer">
                  Wish List
                </li>
                <li className="text-[#919191] transition-all hover:text-[#f28b00] cursor-pointer">
                  Delivery Information
                </li>
                <li className="text-[#919191] transition-all hover:text-[#f28b00] cursor-pointer">
                  Privacy Policy
                </li>
                <li className="text-[#919191] transition-all hover:text-[#f28b00] cursor-pointer">
                  Terms & Conditions
                </li>
              </ul>
            </li>

            <li className="flex flex-col gap-2">
              <h2 className="font-[500] text-[#484848] text-[20px]">
                Sign Up To New Letter
              </h2>
              <ul className="mt-5 flex flex-col gap-2">
                <p className="text-[14px] text-[#919191] ">
                  Make sure that you never miss our interesting <br />
                  news by joining our newsletter program
                </p>
                <span className="flex border-2 border-[#e5e5e5] active:border-[#d7d2d2] rounded-full w-fit items-center  p-1 px-5">
                  <input
                    className="placeholder:text-[#919191] outline-none  p-1 text-[#727272]"
                    type="text"
                    placeholder="Your E-Mail"
                  />
                  <FaLongArrowAltRight className="mr-5 text-[#2d2d2de5] cursor-pointer" />
                </span>

                <li className="flex items-center gap-5">
                  <Image src={payment1} alt="payment1" />
                  <Image src={payment2} alt="payment1" />
                  <Image src={payment3} alt="payment1" />
                  <Image src={payment4} alt="payment1" />
                  <Image src={payment5} alt="payment1" />
                </li>
              </ul>
            </li>
          </ul>

          <ul>
            <h2 className="mt-[33px] mb-[25px] text-[20px] text-[#484848] text-center">
              Mobile Apps
            </h2>
            <div className="flex items-center gap-5 md:gap-10 items-center justify-center">
              <li className="flex gap-5 cursor-pointer hover:border-[#f28b00] transition-all rounded-[8px] border-2 h-[75px] w-[232px] border-[#e5e5e5] items-center justify-center">
                <Image src={app1} alt="app" />

                <span>
                  <h2 className="font-[400] text-[15px] md:text-[18px] text-[#484848]">
                    App Store
                  </h2>
                  <p className="text-[#919191] text-[12px] md:text-[14px]">
                    Available now on the
                  </p>
                </span>
              </li>
              <li className="flex gap-5 rounded-[8px] cursor-pointer hover:border-[#f28b00] transition-all border-2 h-[75px] w-[232px] border-[#e5e5e5] items-center justify-center">
                <Image src={app2} alt="app" />

                <span>
                  <h2 className="font-[400] text-[14px] md:text-[18px] text-[#484848]">
                    Google Store
                  </h2>
                  <p className="text-[#919191] text-[12px] md:text-[14px]">
                    Available now on the
                  </p>
                </span>
              </li>
            </div>
          </ul>
        </div>

        <div className="bg-[#f5f5f5] py-5">
          <div className="w-[90vw] m-auto">
            <ul className="flex justify-between items-center">
              <p className="text-[#484848] text-[14px]">
                {" "}
                All Rights Reserved © TheTronicvaultt {year}
              </p>
              <Image className="cursor-pointer" src={top} alt="top" />
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
