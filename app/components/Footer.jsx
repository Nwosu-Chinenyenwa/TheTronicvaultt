import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

import logo from "../../public/images/logo2.png";
import call from "../../public/images/call.png";
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
    <footer className="border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          <div className="flex flex-col space-y-6">
            <Image
              src={logo}
              alt="TheTronicvaultt Logo"
              className="w-48 md:w-56 object-contain"
              priority
            />

            <div className="flex items-start gap-3">
              <Image src={call} alt="Phone" className="w-10 h-10 mt-1" />
              <div>
                <p className="text-[14px] text-[#919191]">
                  Got Questions? Call us 24/7!
                </p>
                <p className="text-[18px] font-[700] text-[#484848] mb-[9px]">
                  Call Us: (888) 1234 56789
                </p>
                <p className="text-[14px] text-[#919191] mt-1">
                  PO Box CT16122 Collins Street West,
                  <br />
                  Victoria 8007, Australia.
                </p>
              </div>
            </div>

            <div className="flex">
              {[
                FaFacebookF,
                IoLogoWhatsapp,
                FaTwitter,
                FaInstagram,
                FaPinterest,
                TbWorld,
              ].map((Icon, idx) => (
                <Icon
                  key={idx}
                  className="text-[20px] text-[#d5d5d5] mr-[27px] cursor-pointer transition-colors hover:text-[#f59e0b]"
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[20px] font-[400] text-[#484848] mb-5">
              Find By Categories
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Desktops",
                "Laptops & Notebooks",
                "Components",
                "Tablets",
                "Software",
                "Phones & PDAs",
                "Cameras",
                "More",
              ].map((item) => (
                <li
                  key={item}
                  className="text-[#919191] hover:text-[#f59e0b] cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[20px] font-[400] text-[#484848] mb-5">
              Customer Care
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Contact us",
                "Site Map",
                "My Account",
                "Wish List",
                "Delivery Information",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item) => (
                <li
                  key={item}
                  className="text-[#919191] hover:text-[#f59e0b] cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col space-y-5">
            <h3 className="text-[20px] font-[400] text-[#484848] ">
              Sign Up To Newsletter
            </h3>
            <p className="text-[14px] text-[#919191]">
              Make sure you never miss our interesting news by joining our
              newsletter program.
            </p>

            <div className="flex items-center border-2 border-[#e5e5e5] rounded-full overflow-hidden focus-within:border-[f59e0b] transition-colors">
              <input
                type="email"
                placeholder="Your E-Mail"
                className="flex-1 px-4 py-2 text-sm outline-none placeholder:text-[#727272] text-[#727272]"
              />
              <button className="p-3 text-[#484848] cursor-pointer transition-colors">
                <FaLongArrowAltRight className="text-xl" />
              </button>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {[payment1, payment2, payment3, payment4, payment5].map(
                (src, idx) => (
                  <Image
                    key={idx}
                    src={src}
                    alt={`Payment method ${idx + 1}`}
                    className="h-8 object-contain"
                  />
                )
              )}
            </div>
          </div>
        </div>

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

      <div className="bg-gray-100 py-4 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex sm:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-700">
              All Rights Reserved © TheTronicvaultt {year}
            </p>
            <Image
              src={top}
              alt="Back to top"
              className=" cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
