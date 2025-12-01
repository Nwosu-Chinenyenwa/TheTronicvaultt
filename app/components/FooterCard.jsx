import React from "react";
import data1 from "../../public/car.png";
import data2 from "../../public/return.png";
import data3 from "../../public/order.png";
import data4 from "../../public/payment.png";
import Image from "next/image";

export default function FooterCard() {
  const bill = [
    { title: "Worldwide Shipping", img: data1 },
    { title: "Worldwide Shipping", img: data2 },
    { title: "Worldwide Shipping", img: data3 },
    { title: "Worldwide Shipping", img: data4 },
  ];

  return (
    <>
      <section className="bg-[#f5f5f5] py-[50px]">
        <div className="px-1 md:px-8 m-auto">
          <div
            className="
              flex xl:flex
              flex-wrap
              justify-between
              gap-5

              md:grid md:grid-cols-2
              lg:grid lg:grid-cols-3
              xl:flex xl:gap-0
            "
          >
            {bill.map((item, i) => (
              <div
                key={i}
                className="
                  rounded-[8px]
                  hover:border hover:border-[#f92400]
                  transition-all

                  w-full
                  md:w-full
                  lg:w-full
                  xl:w-[20vw]

                  flex items-center justify-center
                  bg-white shadow-sm
                "
              >
                <div className="h-[88px] flex items-center justify-center w-[40%]">
                  <Image src={item.img} alt={item.title} />
                </div>

                <div className="w-[58%] pl-[33px]">
                  <h3 className="text-[#2d2d2d] text-[18px] font-[400]">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
