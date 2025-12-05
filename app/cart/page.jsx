"use client";

import React from "react";
import Image from "next/image";
import product5 from "../../public/product1/04.jpg";
import product6 from "../../public/product1/05.jpg";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Header from "../components/Header";
import Whitefootercards from "../components/Whitefootercards";
import Footer from "../components/Footer";

const cartItems = [
  {
    id: 1,
    name: "Apple iPad Mini",
    model: "G2356",
    price: "$1,250.00",
    quantity: 5,
    total: "$6,250.00",
    image: product5,
  },
  {
    id: 2,
    name: "Beats Pill+ Portable Speaker",
    model: "",
    price: "$1,250.00",
    quantity: 5,
    total: "$6,250.00",
    image: product6,
  },
];

export default function ShoppingCart() {
  return (
    <>
      <Header />
      <section className="w-full flex flex-col lg:flex-row gap-5 lg:gap-8 justify-center items-start py-8 px-4 lg:px-0">
        {/* CART TABLE - Left Side */}
        <div className="w-full lg:max-w-3xl">
          <h1 className="text-[18px] font-[400] text-[#484848] mb-[27px]">
            Shopping Cart
          </h1>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] table-fixed border-collapse">
              <thead>
                <tr className="border-b border-[#e5e5e5]">
                  <th className="w-[45%] text-left pb-4 text-[#484848] text-[15px] font-[400]">
                    Product
                  </th>
                  <th className="w-[25%] text-center pb-4 text-[#484848] text-[15px] font-[400]">
                    Quantity
                  </th>
                  <th className="w-[30%] text-right pb-4 text-[#484848] text-[15px] font-[400] pr-8">
                    Total
                  </th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="py-8">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 rounded overflow-hidden bg-gray-50 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-[15px] text-[#484848] leading-tight">
                            {item.name}
                          </h4>
                          {item.model && (
                            <p className="text-[13px] text-[#989898] mt-1">
                              {item.model}
                            </p>
                          )}
                        </div>
                      </div>
                    </td>

                    <td className="py-8">
                      <div className="flex justify-center">
                        <div className="relative inline-flex items-center h-11 rounded-full border-2 border-[#e5e5e5] bg-white px-4 w-full max-w-[140px]">
                          <FiMinus className="absolute left-3 text-[#484848] text-sm cursor-pointer" />
                          <input
                            className="outline-none w-full placeholder:text-[#727272] text-center px-8 text-sm"
                            type="number"
                            placeholder="Quantity"
                          />
                          <AiOutlinePlus className="absolute right-3 text-[#484848] text-sm cursor-pointer" />
                        </div>
                      </div>
                    </td>

                    <td className="py-8">
                      <div className="flex items-center justify-between pr-8">
                        <span className="text-[20px] text-[#f28b00] whitespace-nowrap">
                          {item.total}
                        </span>
                        <RiDeleteBin5Line className="text-[#8c8c8c] text-xl cursor-pointer flex-shrink-0" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

   
          <div className="mt-[44px] mb-[32px]">
            <div className="border-2 border-dotted border-[#e5e5e5] rounded-[10px] pt-[40px] pb-[40px] px-4 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <input
                  className="w-full sm:w-[263px] h-[40px] text-[#727272] outline-none px-[15px] pl-[30px] py-[8px] border-2 border-[#e5e5e5] rounded-[30px]"
                  type="text"
                  placeholder="Apply Coupon"
                />
                <button className="w-full sm:w-auto rounded-full cursor-pointer text-white font-sans bg-[#2d2d2d] h-[40px] leading-[40px] text-[13px] px-[52px] font-normal">
                  Coupon Code
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[30vw] lg:max-w-sm bg-[#fafafa] p-6 rounded-lg mt-8 lg:mt-0">
          <h3 className="text-[18px] font-[700] text-[#484848] mb-[27px]">
            Cart Totals
          </h3>

          <div className="flex justify-between items-center pt-[11px] pb-[20px]">
            <span className="text-[#2d2d2d] text-[15px]">Subtotal</span>
            <span className="text-[#8c8c8c] font-[400] text-[19px]">
              $2,589.00
            </span>
          </div>

          <div className="mb-4">
            <span className="text-[#2d2d2d] text-[15px] block mb-3">
              Shipping
            </span>

            <div className="space-y-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="shipping"
                  className="w-4 h-4 text-[#727272] focus:ring-0"
                  defaultChecked
                />
                <span className="text-[#838383] text-[14px]">
                  Flat Rate: <span className="font-bold">$3.00</span>
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="shipping"
                  className="w-4 h-4 text-[#727272] focus:ring-0"
                />
                <span className="text-[#838383] text-[14px]">
                  Free Shipping
                </span>
              </label>

              <a
                href="#"
                className="block text-center text-[#2d2d2d] text-[14px] underline mt-3"
              >
                Calculate Shipping
              </a>
            </div>
          </div>

          <div className="flex justify-between items-center border-t border-[#e5e5e5] pt-[16px] pb-[16px]">
            <span className="text-[15px] text-[#2d2d2d]">Total</span>
            <span className="text-[24px] text-[#f28b00]">$1,591.00</span>
          </div>

          <div className="flex flex-col mt-[70px] gap-4">
            <button className="w-full h-12 rounded-full bg-[#adadad] cursor-pointer text-white font-medium hover:bg-[#2d2d2d] transition">
              Update Cart
            </button>

            <button className="w-full h-12 rounded-full bg-[#f92400] text-white cursor-pointer font-medium hover:bg-[#f28b00] transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </section>
      <Whitefootercards />
      <Footer />
    </>
  );
}
