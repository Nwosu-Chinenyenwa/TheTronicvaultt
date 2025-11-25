"use client";

import React from "react";
import product1 from "../../public/images/08.jpg";
import product2 from "../../public/product1/1.jpg";
import product3 from "../../public/product1/02.jpg";
import product4 from "../../public/product1/03.jpg";
import { TiShoppingCart } from "react-icons/ti";
import { GoGitCompare } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";

function Modiles() {
  const product1Data = [
    {
      id: 1,
      img: product1,
      title: "Computer",
      name: "Apple İmac Z0SC4824 Retina",
      price: "$5,759.68",
      oldPrice: "$2,999.00",
      category: "New Arrivals",
    },
    {
      id: 2,
      img: product2,
      title: "Computer",
      name: "Apple İmac Z0SC4824 Retina",
      price: "$5,759.68",
      oldPrice: "$2,999.00",
      category: "New Arrivals",
    },
    {
      id: 3,
      img: product3,
      title: "Computer",
      name: "Apple İmac Z0SC4824 Retina",
      price: "$5,759.68",
      oldPrice: "$2,999.00",
      category: "New Arrivals",
    },
    {
      id: 4,
      img: product4,
      title: "Computer",
      name: "Apple İmac Z0SC4824 Retina",
      price: "$5,759.68",
      oldPrice: "$2,999.00",
      category: "New Arrivals",
    },
  ];

  return (
    <section className="py-10 bg-[#f5f5f5] flex items-center justify-center">
      <div className="bg-white w-[90vw] m-auto rounded-2xl">
        <div className="flex justify-between items-center border-b-1 relative border-[#e5e5e5]">
          <h2 className="text-[24px] font-[500] text-white bg-[#484848] py-5 px-2 rounded-tl-2xl rounded-tr-2xl">
            Modile Devices
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row p-5 lg:p-10 items-center gap-5 lg:gap-0">
          <div className="group w-full lg:max-w-[40vw]">
            <div className="border-2 border-[#00000009] rounded-2xl flex items-center p-5">
              <div className="p-2 rounded-[8px] w-full">
                <div className="w-full relative flex justify-center">
                  <Image
                    className="w-full sm:w-[80%] md:w-[60%] lg:w-[50vw]"
                    src={product4}
                    alt="products"
                  />
                </div>
                <ul className="flex flex-col gap-2 mt-4">
                  <li className="flex items-center gap-3">
                    <span className="w-full h-[1px] bg-[#e5e5e5]"></span>
                    <span className="text-[#919191]">Computer</span>
                    <span className="w-full h-[1px] bg-[#e5e5e5]"></span>
                  </li>
                  <li className="text-center flex items-center justify-center">
                    <span className="leading-[28px] text-[#484848] text-[16px] block w-[160px] sm:w-[120px]">
                      Apple İmac Z0SC4824 Retina
                    </span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-[#f28b00] text-[21px] font-[500] mr-[14px]">
                      $5,759.68
                    </span>
                    <span className="text-[14px] underline text-[#c5c5c5]">
                      $2,999.00
                    </span>
                  </li>
                </ul>
                <div className="flex items-center justify-center flex-col mt-5 gap-2">
                  <button className="flex bg-[#f92400] hover:bg-[#f28b00] transition-all text-white gap-3 text-[20px] cursor-pointer font-[600] w-[80%] sm:w-[90%] md:w-[80%] items-center justify-center h-[50px] rounded-full">
                    <TiShoppingCart className="text-[25px]" />
                    <span>Add To Cart</span>
                  </button>
                  <div className="flex items-center gap-10 sm:gap-5">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full lg:w-[40vw] gap-5 lg:ml-auto">
            {product1Data.map((item, index) => (
              <div key={index} className="w-full group">
                <div className="p-2 rounded-[8px]">
                  <div className="w-full relative flex justify-center">
                    <Image
                      className="w-[40vw] sm:w-[80%] md:w-[60%] lg:w-[20vw]"
                      src={item.img}
                      alt="products"
                    />
                  </div>
                  <ul className="flex flex-col gap-2 mt-2">
                    <li className="flex items-center gap-3">
                      <span className="w-full h-[1px] bg-[#e5e5e5]"></span>
                      <span className="text-[#919191]">{item.title}</span>
                      <span className="w-full h-[1px] bg-[#e5e5e5]"></span>
                    </li>
                    <li className="text-center flex items-center justify-center">
                      <span className="leading-[22px] text-[#484848] text-[16px] block w-[160px] sm:w-[120px]">
                        {item.name}
                      </span>
                    </li>
                    <li className="flex items-center justify-center">
                      <span className="text-[#f28b00] text-[21px] font-[500] mr-[14px]">
                        {item.price}
                      </span>
                      <span className="text-[14px] underline text-[#c5c5c5]">
                        {item.oldPrice}
                      </span>
                    </li>
                  </ul>
                  <div className="">
                    <div className="flex items-center transition-all group-hover:opacity-100 justify-center flex-col mt-5 gap-2">
                      <button className="flex bg-[#f92400] hover:bg-[#f28b00] transition-all text-white gap-3 text-[20px] cursor-pointer font-[600] w-[80%] sm:w-[90%] md:w-[80%] items-center justify-center h-[45px] rounded-full">
                        <TiShoppingCart className="text-[25px]" />
                        <span>Add To Cart</span>
                      </button>
                      <div className="flex items-center gap-10 sm:gap-5">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modiles;
