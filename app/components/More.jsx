import React from "react";
import data1 from "../../public/car.png";
import data2 from "../../public/return.png";
import data3 from "../../public/order.png";
import data4 from "../../public/payment.png";
import Image from "next/image";

export default function More() {
  const data = [
    {
      id: 1,
      img: data1,
      name: "Worldwide Shipping",
      desc: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      id: 2,
      img: data2,
      name: "Easy Returns",
      desc: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      id: 3,
      img: data3,
      name: "Order Tracking",
      desc: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      id: 4,
      img: data4,
      name: "Secure Payment",
      desc: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];

  return (
    <section className="w-[90vw] m-auto py-20 flex flex-wrap justify-center gap-5 md:gap-8 lg:gap-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center w-full sm:w-[45%] md:w-[40%] lg:w-[22%] px-3"
        >
          <div className="group flex flex-col items-center justify-center">
            <div className="h-[88px] w-[88px] flex items-center justify-center rounded-full border-[2px] border-[#c5c5c5] group-hover:border-[#f28b00] transition-all">
              <Image src={item.img} alt={item.name} />
            </div>
            <h3 className="mt-8 text-[18px] sm:text-[20px] text-center text-[#2d2d2d] font-[500] mb-2">
              {item.name}
            </h3>
          </div>
          <p className="text-[#919191] text-center text-[14px] sm:text-[15px]">
            {item.desc}
          </p>
        </div>
      ))}
    </section>
  );
}
