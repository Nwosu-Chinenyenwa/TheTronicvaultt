"use client";

import React, { useState } from "react";
import product1 from "../../public/images/08.jpg";
import product2 from "../../public/product1/1.jpg";
import product3 from "../../public/product1/02.jpg";
import product4 from "../../public/product1/03.jpg";
import product5 from "../../public/product1/04.jpg";
import product6 from "../../public/product1/05.jpg";
import product7 from "../../public/product1/06.jpg";
import product8 from "../../public/product1/07.jpg";
import Image from "next/image";
import { TiShoppingCart } from "react-icons/ti";
import { GoGitCompare } from "react-icons/go";
import { CiHeart } from "react-icons/ci";

export default function NewProducts() {
  const tabs = ["New Arrivals", "Featured", "Top Selling"];
  const [active, setActive] = useState("New Arrivals");

  const product1Data = [
    {
      id: 1,
      img: product1,
      title: "Computer",
      name: "Apple İmac Z0SC4824 Retina",
      price: "$5,759.68",
      oldPrice: "$2,999.00",
      status: "sale",
      category: "New Arrivals",
    },
    {
      id: 2,
      img: product2,
      title: "Computer",
      name: "Apple İmac Z0SC4824 Retina",
      price: "$5,759.68",
      oldPrice: "$2,999.00",
      status: "New",
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
    {
      id: 5,
      img: product5,
      title: "Computer",
      name: "Apple İmac Z0SC4824 Retina",
      price: "$5,759.68",
      oldPrice: "$2,999.00",
      category: "New Arrivals",
    },
    {
      id: 6,
      img: product6,
      title: "Computer",
      name: "Apple İmac Z0SC4824 Retina",
      price: "$5,759.68",
      oldPrice: "$2,999.00",
      category: "New Arrivals",
    },
    {
      id: 7,
      img: product7,
      title: "Computer",
      name: "Apple İmac Z0SC4824 Retina",
      price: "$5,759.68",
      oldPrice: "$2,999.00",
      category: "New Arrivals",
    },
    {
      id: 8,
      img: product8,
      title: "Computer",
      name: "Apple İmac Z0SC4824 Retina",
      price: "$5,759.68",
      oldPrice: "$2,999.00",
      category: "New Arrivals",
    },
  ];

  const filter = product1Data.filter(
    (product) => product.category === tabs.find((tab) => tab === active)
  );

  return (
    <div className="py-20 w-[90vw] m-auto">
      <div className="w-full">
        <div className="flex items-center gap-10 sm:gap-5 sm:text-[14px] md:text-[16px] lg:text-[18px]">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`text-[18px] cursor-pointer transition-all ${
                active === tab ? "text-black font-[500]" : "text-[#8b8b8b]"
              }`}
              onClick={() => setActive(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        <div className="relative mt-4">
          <div className="w-full h-[1px] bg-[#e5e5e5]"></div>

          <div
            className="absolute left-0 top-0 -translate-y-[6px] transition-all duration-300"
            style={{
              transform: `translateX(${
                tabs.indexOf(active) * 120
              }px) translateY(-6px)`,
            }}
          >
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-transparent border-b-[#dcdcdc]"></div>
          </div>
        </div>
      </div>

      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filter.map((item, index) => (
          <div key={index} className="w-fit group m-auto">
            <div className="p-2 rounded-[8px]">
              <div>
                <div className="w-[100%] relative flex justify-center">
                  <Image className="w-[60vw] sm:w-[35vw] md:w-[25vw] lg:w-[20vw]" src={item.img} alt="products" />

                  {item.status && (
                    <span
                      className={`w-[45px] h-[45px] flex rounded-full items-center font-[600] text-[12px] justify-center text-white absolute top-5 left-0`}
                      style={{
                        background:
                          item.status.toLowerCase() === "new"
                            ? "#f28b00"
                            : item.status.toLowerCase() === "sale"
                            ? "#f92400"
                            : "transparent",
                      }}
                    >
                      {item.status}
                    </span>
                  )}
                </div>

                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-3">
                    <span className="w-full h-[1px] bg-[#e5e5e5]"></span>
                    <span className="text-[#919191]">{item.title}</span>
                    <span className="w-full h-[1px] bg-[#e5e5e5]"></span>
                  </li>

                  <li className="text-center flex items-center justify-center">
                    <span className="leading-[22px] text-[#484848] text-[16px] block w-[160px]">
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
              </div>

              <div className="group">
                <div className="flex items-center opacity-0 transition-all group-hover:opacity-100 justify-center flex-col mt-5 gap-2">
                  <button className="flex bg-[#f92400] hover:bg-[#f28b00] transition-all text-white gap-3 text-[20px] cursor-pointer font-[600] w-[80%] items-center justify-center h-[45px] rounded-full">
                    <TiShoppingCart className="text-[25px]" />
                    <span>Add To Cart</span>
                  </button>

                  <div className="flex items-center gap-10">
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
  );
}
