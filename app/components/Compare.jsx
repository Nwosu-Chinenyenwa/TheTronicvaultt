"use client";

import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";

export default function Compare() {
  return (
    <>
      <div className="bg-white pt-[45px] pb-[85px]">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-6 py-6">

          <h1 className="text-[20px] font-[400] text-[#2d2d2d] mb-[32px]">
            Compare
          </h1>

          <div className="overflow-x-auto border-2 border-[#e5e5e5] rounded-[8px]">
            <table className="w-full min-w-[750px] md:min-w-full table-fixed border-collapse">
              <tbody>

                <tr className="border-b border-[#e5e5e5]">
                  <td className="w-40 sm:w-48 bg-[#f5f5f5] p-4 sm:p-6 text-[16px] sm:text-[20px] font-[400] text-[#2d2d2d] text-left align-top">
                    Product
                  </td>

                  {[ 
                    "https://creativelayers.net/themes/techno-html/images/product/other/05.jpg",
                    "https://creativelayers.net/themes/techno-html/images/product/other/06.jpg",
                    "https://creativelayers.net/themes/techno-html/images/product/other/07.jpg"
                  ].map((img, i) => (
                    <td key={i} className="bg-white p-4 sm:p-6 text-center align-top">
                      <div className="mb-[30px] sm:mb-[43px]">
                        <img
                          src={img}
                          className="mx-auto object-contain w-[90px] sm:w-auto"
                        />
                      </div>
                      <p className="text-[14px] sm:text-[16px] text-center text-[#484848] leading-tight max-w-[140px] mx-auto">
                        {i === 0 && "Apple iPad Mini G2356"}
                        {i === 1 && "New X5C-1 2.4GHz Gyro RC Quadcopter Drone"}
                        {i === 2 && `Apple iPad Air 2 32GB 9.7" Tablet`}
                      </p>
                    </td>
                  ))}
                </tr>

                <tr className="bg-white border-b border-[#e5e5e5]">
                  <td className="bg-[#f5f5f5] p-4 sm:p-6 text-left text-[16px] sm:text-[20px] font-[400] text-[#2d2d2d]">
                    Price
                  </td>
                  {["$1,250.00", "$2,009.00", "$5,759.68"].map((price, i) => (
                    <td key={i} className="p-4 sm:p-6 text-center">
                      <p className="text-[20px] sm:text-[22px] font-[480] text-[#f28b00]">
                        {price}
                      </p>
                    </td>
                  ))}
                </tr>

                <tr className="bg-white border-b border-[#e5e5e5]">
                  <td className="bg-[#f5f5f5] p-4 sm:p-6 text-[16px] sm:text-[20px] text-[#2d2d2d]">
                    Add to Cart
                  </td>
                  {[1, 2, 3].map((item, i) => (
                    <td key={i} className="p-4 sm:p-6 text-center">
                      <button className="flex bg-[#f92400] hover:bg-[#f28b00] transition-all text-white gap-2 sm:gap-3 text-[16px] sm:text-[20px] cursor-pointer font-[600] w-[90%] sm:w-[80%] mx-auto items-center justify-center h-[40px] sm:h-[45px] rounded-full">
                        <TiShoppingCart className="text-[20px] sm:text-[25px]" />
                        <span>Add To Cart</span>
                      </button>
                    </td>
                  ))}
                </tr>

                <tr className="bg-white border-b border-[#e5e5e5]">
                  <td className="bg-[#f5f5f5] p-4 sm:p-6 text-[16px] sm:text-[20px] text-[#2d2d2d]">
                    Description
                  </td>
                  {[1, 2, 3].map((item, i) => (
                    <td key={i} className="p-4 sm:p-6">
                      <p className="text-[13px] sm:text-[14px] text-[#919191] text-center leading-relaxed">
                        The iPhone 5c replaces the iPhone 5 in the Apple stable,
                        inheriting its internals, like the A6 processor, 4"
                        screen...
                      </p>
                    </td>
                  ))}
                </tr>

                <tr className="bg-white border-b border-[#e5e5e5]">
                  <td className="bg-[#f5f5f5] p-4 sm:p-6 text-[16px] sm:text-[20px] text-[#2d2d2d]">
                    Color
                  </td>
                  {["Black", "Red", "Blue"].map((color, i) => (
                    <td key={i} className="p-4 sm:p-6 text-center text-[#919191] text-[13px] sm:text-[14px]">
                      <p>{color}</p>
                    </td>
                  ))}
                </tr>

                <tr className="bg-white border-b border-[#e5e5e5]">
                  <td className="bg-[#f5f5f5] p-4 sm:p-6 text-[16px] sm:text-[20px] text-[#2d2d2d]">
                    Stock
                  </td>
                  {[1, 2, 3].map((item, i) => (
                    <td key={i} className="p-4 sm:p-6 text-center text-[#919191] text-[13px] sm:text-[14px]">
                      <p>In stock</p>
                    </td>
                  ))}
                </tr>

                <tr className="bg-white border-b border-[#e5e5e5]">
                  <td className="bg-[#f5f5f5] p-4 sm:p-6 text-[16px] sm:text-[20px] text-[#2d2d2d]">
                    Delete
                  </td>
                  {[1, 2, 3].map((item, i) => (
                    <td key={i} className="p-4 sm:p-6 text-center">
                      <button className="text-[#919191] cursor-pointer mx-auto">
                        <RiDeleteBin5Line className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </td>
                  ))}
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  );
}
