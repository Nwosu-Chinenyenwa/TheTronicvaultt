import React from "react";
import Header from "../components/Header";
import arrow from "../../public/images/arrow-right.png";
import Image from "next/image";
import Footer from "../components/Footer";
import FooterCard from "../components/FooterCard";

export default function page() {
  return (
    <>
      <Header />
      <div className="border-b border-[#00000022] py-3 ">
        <div className="flex items-center gap-5 ml-[19px]">
          <h2 className="font-[500] text-[#8c8c8c] cursor-pointer hover:text-[#f28b00] transition-all">
            Home
          </h2>
          <Image src={arrow} alt="arrow right" />
          <h2 className="font-[500] text-[#8c8c8c]">Tracking</h2>
        </div>
      </div>

      <section className="bg-[#f5f5f5] pt-[30px] pb-[3px]">
        <div className="bg-[#fff] rounded-[10px] pt-[120px] md:px-[90px] pb-[116px] md:w-[90vw] m-auto ">
          <div className="shabow-sm flex flex-col items-center justify-center">
            <div className="text-center mb-[22px]">
              <h3 className="mb-[26px] text-[20px] font-[400] text-[#2d2d2d]">
                Track Your Order
              </h3>
              <p className="text-[13px] text-[#929292]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. <br className="md:block hidden"/> Excepteur sint
                occaecat cupidatat non proident.
              </p>
            </div>

            <div>
              <div className="flex md:flex-row flex-col md:justify-between">
                <div className="w-[50%] mb-5 md:mb-0 px-[15px] flex flex-col gap-[13px]">
                  <label className="font-[400]">Order ID</label>
                  <span className="flex border-2 border-[#e5e5e5] active:border-[#d7d2d2] h-[40px] rounded-full w-fit items-center  p-1 px-5">
                    <input
                      className="placeholder:text-[#919191] pl-[27px] outline-none w-[70vw] md:w-[30vw]  p-1 text-[#727272]"
                      type="text"
                      placeholder="Found You Comfirmation email"
                    />
                  </span>
                </div>
                <div className="w-[50%] px-[15px] flex flex-col gap-[13px]">
                  <label className="font-[400]">Billing Email</label>
                  <span className="flex border-2 border-[#e5e5e5] active:border-[#d7d2d2] h-[40px] rounded-full w-fit items-center  p-1 px-5">
                    <input
                      className="placeholder:text-[#919191] pl-[27px] outline-none w-[70vw] md:w-[30vw]  p-1 text-[#727272]"
                      type="text"
                      placeholder="Found You Comfirmation email"
                    />
                  </span>
                </div>
              </div>
            </div>

            <button className="flex px-[64px] font-[600] cursor-pointer text-[16px] items-center justify-center rounded-full text-white mb-[8px] mt-[32px] transition-all hover:bg-[#2d2d2d] h-[50px]  bg-[#f92400]">
              Tracking
            </button>
          </div>
        </div>
      </section>
      <FooterCard />
      <Footer />
    </>
  );
}
