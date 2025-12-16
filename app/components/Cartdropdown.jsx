import Link from "next/link";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function Cartdropdown() {
  return (
    <div className="w-[350px] bg-white p-5 shadow-lg rounded-md">
      <div className="flex items-start group gap-4 pb-4 mb-4">
        <img
          src="https://creativelayers.net/themes/techno-html/images/product/other/img-cart-1.jpg"
          width={55}
          height={55}
          alt="product"
          className="object-contain group-hover:border-2 border-[#48484829] transition-all rounded-2xl"
        />

        <div className="flex-1">
          <p className="text-[12px] text-[#484848] leading-tight">
            Samsung Galaxy S6 4G LTE
            <br />
            with 32GB Memory Cell Phone
          </p>

          <p className="text-[11px] text-[#f28b00] mt-2 font-medium">
            1 x $250.00
          </p>
        </div>

        <IoCloseOutline className="text-[22px] text-gray-500 cursor-pointer" />
      </div>

      <div className="flex items-start group gap-4 pb-4 mb-4">
        <img
          src="https://creativelayers.net/themes/techno-html/images/product/other/img-cart-2.jpg"
          width={55}
          height={55}
          alt="product"
          className="object-contain group-hover:border-2 border-[#48484829] transition-all rounded-2xl"
        />

        <div className="flex-1">
          <p className="text-[12px] text-[#484848] leading-tight">
            Samsung Galaxy S6 4G LTE
            <br />
            with 32GB Memory Cell Phone
          </p>

          <p className="text-[11px] text-[#f28b00] mt-2 font-medium">
            1 x $250.00
          </p>
        </div>

        <IoCloseOutline className="text-[22px] text-gray-500 cursor-pointer" />
      </div>

      <div className="flex items-center justify-between mt-2 mb-5">
        <span className="text-[14px] font-bold text-[#484848]">Subtotal:</span>
        <span className="text-[22px] font-semibold text-[#f28b00]">
          $1,999.00
        </span>
      </div>

      <div className="flex justify-between items-center gap-4">
        <Link href={"/cart"}>
          <button className="py-[10px] px-[33px] border-2 border-[#f28b00] rounded-full text-[14px] text-[#f28b00] cursor-pointer font-[600]">
            View Cart
          </button>
        </Link>

        <Link href={"/checkout"}>
          <button className="py-[10px] px-[33px] bg-[#484848] rounded-full text-[14px] text-white font-medium font-[600] cursor-pointer">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
