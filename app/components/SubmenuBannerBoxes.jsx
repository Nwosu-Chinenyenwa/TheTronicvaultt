"use client";

import React from "react";

export default function SubmenuBannerBoxes() {
  return (
    <section>
      <section className="bg-white rounded-bl-[8px] rounded-br-[8px] w-[90vw] mx-auto">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-[#f28b00] text-[18px] font-[400] mb-6">
                Accessories
              </h3>
              <ul className="space-y-2 text-[#2d2d2d] text-[14px]">
                <li className="cursor-pointer transition-colors hover:text-[#f28b00]">Electronics</li>
                <li className="cursor-pointer transition-colors hover:text-[#f28b00]">Furniture</li>
                <li className="cursor-pointer transition-colors hover:text-[#f28b00]">Accessories</li>
                <li className="cursor-pointer transition-colors hover:text-[#f28b00]">Divided</li>
                <li className="cursor-pointer transition-colors hover:text-[#f28b00]">Everyday Fashion</li>
                <li className="cursor-pointer transition-colors hover:text-[#f28b00]">Modern Classic</li>
                <li className="cursor-pointer transition-colors hover:text-[#f28b00]">Party</li>
              </ul>
              <p className="mt-4 text-[#f28b00] font-[700] cursor-pointer">
                Shop All
              </p>
            </div>

            <div>
              <h3 className="text-[#f28b00] text-[18px] font-[400] mb-6">
                Laptop And Computer
              </h3>
              <ul className="space-y-2 text-[#2d2d2d] text-[14px]">
                <li className="cursor-pointer transition-colors hover:text-[#f28b00]">Networking & Internet Devices</li>
                <li className="cursor-pointer transition-colors hover:text-[#f28b00]">Laptops, Desktops & Monitors</li>
                <li className="cursor-pointer transition-colors hover:text-[#f28b00]">Hard Drives & Memory Cards</li>
                <li className="cursor-pointer transition-colors hover:text-[#f28b00]">Printers & Ink</li>
                <li className="cursor-pointer transition-colors hover:text-[#f28b00]">Networking & Internet Devices</li>
                <li className="cursor-pointer transition-colors hover:text-[#f28b00]">Computer Accessories</li>
                <li className="cursor-pointer transition-colors hover:text-[#f28b00]">Software</li>
              </ul>
              <p className="mt-4 text-[#f28b00] font-[700] cursor-pointer">
                Shop All
              </p>
            </div>

            <div>
              <h3 className="text-[#f28b00] text-[18px] font-[400] mb-6">
                Audio & Video
              </h3>
              <ul className="space-y-2 text-[#2d2d2d] text-[14px]">
                <li className="cursor-pointer transition-colors hover:text-[#f28b00]">Headphones & Speakers</li>
                <li className="cursor-pointer transition-colors hover:text-[#f28b00]">Home Entertainment Systems</li>
                <li className="cursor-pointer transition-colors hover:text-[#f28b00]">MP3 & Media Players</li>
              </ul>
              <p className="mt-4 text-[#f28b00] font-[700] cursor-pointer">
                Shop All
              </p>
            </div>

            <div>
              <h3 className="text-[#f28b00] text-[18px] font-[400] mb-6">
                Home Audio
              </h3>
              <ul className="space-y-2 text-[#2d2d2d] text-[14px]">
                <li className="cursor-pointer transition-colors hover:text-[#f28b00]">Home Theater Systems</li>
                <li className="cursor-pointer transition-colors hover:text-[#f28b00]">Receivers & Amplifiers</li>
                <li className="cursor-pointer transition-colors hover:text-[#f28b00]">Speakers</li>
                <li className="cursor-pointer transition-colors hover:text-[#f28b00]">CD Players & Turntables</li>
                <li className="cursor-pointer transition-colors hover:text-[#f28b00]">High-Resolution Audio</li>
                <li className="cursor-pointer transition-colors hover:text-[#f28b00]">4K Ultra HD TVs</li>
              </ul>
              <p className="mt-4 text-[#f28b00] font-[700] cursor-pointer">
                Shop All
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-6">
            <div className="relative overflow-hidden group cursor-pointer">
              <img
                src="https://creativelayers.net/themes/techno-html/images/banner_boxes/submenu-01.png"
                alt="suhd"
                className="w-full h-auto object-contain"
              />

              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                            translate-x-[-100%] group-hover:translate-x-[150%]
                            transition-transform duration-700 ease-out rotate-[25deg]"
              ></div>
            </div>

            <div className="relative overflow-hidden group cursor-pointer">
              <img
                src="https://creativelayers.net/themes/techno-html/images/banner_boxes/submenu-02.png"
                alt="music"
                className="w-full h-auto object-contain"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                            translate-x-[-100%] group-hover:translate-x-[150%]
                            transition-transform duration-700 ease-out rotate-[25deg]"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
