"use client";

import { useState } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { BsCart2, BsHeart, BsPlus, BsDash } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { SlReload } from "react-icons/sl";
import { GoGitCompare } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

export default function ProductGallery() {
  const images = [
    "https://creativelayers.net/themes/techno-html/images/product/flexslider/big-size.jpg",
    "https://creativelayers.net/themes/techno-html/images/product/flexslider/thumb/2.jpg",
    "https://creativelayers.net/themes/techno-html/images/product/flexslider/thumb/3.jpg",
    "https://creativelayers.net/themes/techno-html/images/product/flexslider/thumb/4.jpg",
    "https://creativelayers.net/themes/techno-html/images/product/flexslider/thumb/5.jpg",
    "https://creativelayers.net/themes/techno-html/images/product/flexslider/thumb/6.jpg",
  ];

  const [mainImg, setMainImg] = useState(images[0]);
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <main className="p-2 md:p-6 lg:p-10 flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-[520px]">
          <div
            className="w-full h-[300px] sm:h-[380px] md:h-[420px] lg:h-[480px] flex items-center justify-center rounded-lg overflow-hidden relative bg-white"
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
            onMouseMove={handleMove}
          >
            <img
              src={mainImg}
              alt="watch"
              className={`object-cover w-full md:w-[50vw] lg:w-[30vw] transition duration-200 ${
                zoom ? "scale-200" : "scale-100"
              }`}
              style={
                zoom ? { transformOrigin: `${position.x}% ${position.y}%` } : {}
              }
            />
          </div>

          <div className="flex gap-3 sm:gap-4 md:gap-5 mt-6 sm:mt-10 lg:mt-[88px] overflow-x-auto">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setMainImg(img)}
                className={`min-w-[70px] min-h-[70px] w-[80px] h-[80px] border-2 cursor-pointer rounded-lg overflow-hidden ${
                  mainImg === img ? "border-[#f28b00]" : "border-[#e5e5e5]"
                }`}
              >
                <img
                  src={img}
                  alt="thumb"
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 md:p-10 rounded-[8px] pt-[36px] pb-[38px] pr-[30px] pl-[30px] md:pl-[41px] bg-[#f5f5f5]">
          <h1 className="text-[18px] font-bold text-[#484848] mb-[3px]">
            Warch 42 mm Smart Watches
          </h1>

          <p className="text-[#919191] text-[14px]">Smart Watches</p>

          <div className="flex flex-wrap items-center mt-[12px] pb-[15px] gap-3 sm:gap-0">
            <div className="flex flex-col">
              <span className="flex gap-2">
                {[1, 2, 3, 4].map((s) => (
                  <AiFillStar key={s} className="text-orange-400" />
                ))}
                <AiFillStar className="text-gray-300" />
              </span>

              <div className="flex text-[14px]">
                <p className="text-[#838383]">3 Reviews</p>

                <button className="text-[#484848] ml-[11px]">
                  Add Your Review
                </button>
              </div>
            </div>

            <div className="flex items-center ml-auto">
              <p className="text-[#484848] text-[14px]">Availability</p>
              <span className="ml-2 bg-[#f92400] text-white px-4 py-1 rounded-full text-sm">
                In stock
              </span>
            </div>
          </div>

          <div className="mt-4">
            <p className="line-through text-[#c5c5c5] text-[14px]">$2,999.00</p>
            <p className="text-[#f28b00] text-[35px] font-[400]">$1,589.00</p>
          </div>

          <p className="mt-[31px] mb-[9px] text-[14px] text-[#838383]">
            Vivamus in tempor eros. Phasellus rhoncus in nunc sit amet mattis.
            Integer in ipsum vestibulum, molestie arcu ac, efficitur tellus.
            Phasellus id vulputate erat.
          </p>

          <p className="mt-3 text-[14px] text-[#838383]">
            <span className="font-semibold text-[#484848]">SKU:</span>{" "}
            FW511948218
          </p>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 mt-6">
            <button className="w-full sm:w-[170px] py-3 bg-white shadow-sm rounded-full px-5 flex items-center justify-between">
              Select Color <IoIosArrowDown />
            </button>

            <div className="w-full sm:w-[160px] py-3 shadow-sm bg-white rounded-full flex items-center justify-between px-5">
              <BsDash />
              <span>Quantity</span>
              <BsPlus />
            </div>
          </div>

          <div className="flex flex-col xl:flex-row mt-8 gap-6 sm:gap-10">
            <button className="w-full sm:w-auto bg-[#f92400] hover:bg-[#2d2d2d] transition-colors cursor-pointer text-white py-4 px-10 rounded-full text-lg flex items-center justify-center gap-3">
              <TiShoppingCart className="text-xl" />
              Add to Cart
            </button>

            <div className="flex justify-center sm:justify-start items-center gap-6">
              <div className="text-[#919191] cursor-pointer text-[12px] font-[600] flex items-center gap-2">
                <GoGitCompare className="text-[25px]" />
                <span>Compare</span>
              </div>

              <div className="text-[#919191] cursor-pointer text-[12px] font-[600] flex items-center gap-2">
                <CiHeart className="text-[25px]" />
                <span>Wishlist</span>
              </div>
            </div>
          </div>

          <div className="mt-[25px] items-center flex">
            <h2 className="font-bold text-[#484848] mr-[25px]">SHARE</h2>

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
                  className="text-[15px] text-[#d5d5d5] mr-[20px] cursor-pointer transition-colors hover:text-[#f59e0b]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
