import React from "react";
import product6 from "../../public/product1/05.jpg";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import product1 from "../../public/images/08.jpg";
import product2 from "../../public/product1/1.jpg";
import product3 from "../../public/product1/02.jpg";
import product4 from "../../public/product1/03.jpg";
import product5 from "../../public/product1/04.jpg";
import product7 from "../../public/product1/05.jpg";
import product8 from "../../public/product1/06.jpg";

export default function Whitemostales() {
  const products1 = [
    {
      id: 1,
      img: product6,
      name: "  Razer RZ02-01071500-R3M1",
      old: "$2,999.00",
      price: "$1,250.00",
    },
    {
      id: 2,
      img: product3,
      name: "  Razer RZ02-01071500-R3M1",
      old: "$2,999.00",
      price: "$1,250.00",
    },
    {
      id: 3,
      img: product2,
      name: "  Razer RZ02-01071500-R3M1",
      old: "$2,999.00",
      price: "$1,250.00",
    },
  ];

  const products2 = [
    {
      id: 1,
      img: product8,
      name: "  Razer RZ02-01071500-R3M1",
      old: "$2,999.00",
      price: "$1,250.00",
    },
    {
      id: 2,
      img: product5,
      name: "  Razer RZ02-01071500-R3M1",
      old: "$2,999.00",
      price: "$1,250.00",
    },
    {
      id: 3,
      img: product2,
      name: "  Razer RZ02-01071500-R3M1",
      old: "$2,999.00",
      price: "$1,250.00",
    },
  ];
  const products3 = [
    {
      id: 1,
      img: product7,
      name: "  Razer RZ02-01071500-R3M1",
      old: "$2,999.00",
      price: "$1,250.00",
    },
    {
      id: 2,
      img: product4,
      name: "  Razer RZ02-01071500-R3M1",
      old: "$2,999.00",
      price: "$1,250.00",
    },
    {
      id: 3,
      img: product8,
      name: "  Razer RZ02-01071500-R3M1",
      old: "$2,999.00",
      price: "$1,250.00",
    },
  ];
  return (
    <section className="py-10 flex items-center justify-center">
      <div className="md:w-[90vw] flex md:flex-row flex-col md:items-center gap-10 md:justify-between  p-10 rounded-2xl">
        <div className="md:w-[25vw]">
          <div className="flex justify-between items-center py-1 border-b-1 border-[#e5e5e5]">
            <h2 className="text-[20px] text-[#2d2d2d] font-[500] mb-2">
              Bestsellers
            </h2>
          </div>

          {products1.map((item, index) => (
            <div key={index} className="mt-10 group items-center flex gap-5">
              <div className="group-hover:border-[2px] flex items-center justify-center rounded-[5px] border-[#48484829] w-[30%] bg-white">
                <Image
                  className="object-contain  transition-all rounded-2xl"
                  src={item.img}
                  alt="products"
                />
              </div>

              <div>
                <div className="flex flex-col gap-2 mb-5">
                  <span className="text-[#333333] text-[14px] hover:text-[#f28b00] transition-all cursor-pointer">
                    {item.name}
                  </span>
                  <div className="flex  gap-2">
                    <FaStar className="text-[12px] text-[#f28b00]" />
                    <FaStar className="text-[12px] text-[#f28b00]" />
                    <FaStar className="text-[12px] text-[#f28b00]" />
                    <FaStar className="text-[12px] text-[#f28b00]" />
                    <FaStar className="text-[12px] text-[#f28b00]" />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-[500] text-[18px] text-[#484848]">
                    {item.price}
                  </span>
                  <span className="text-[14px] line-through text-[#c5c5c5] block">
                    {item.old}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:w-[25vw]">
          <div className="flex justify-between items-center py-1 border-b-1 border-[#e5e5e5]">
            <h2 className="text-[20px] text-[#2d2d2d] font-[500] mb-2">
              Featured
            </h2>
          </div>

          {products2.map((item, index) => (
            <div key={index} className="mt-10 group items-center flex gap-5">
              <div className="group-hover:border-[2px] flex items-center justify-center rounded-[5px] border-[#48484829] w-[30%] bg-white">
                <Image
                  className="object-contain  transition-all rounded-2xl"
                  src={item.img}
                  alt="products"
                />
              </div>

              <div>
                <div className="flex flex-col gap-2 mb-5">
                  <span className="text-[#333333] text-[14px] hover:text-[#f28b00] transition-all cursor-pointer">
                    {item.name}
                  </span>
                  <div className="flex  gap-2">
                    <FaStar className="text-[12px] text-[#f28b00]" />
                    <FaStar className="text-[12px] text-[#f28b00]" />
                    <FaStar className="text-[12px] text-[#f28b00]" />
                    <FaStar className="text-[12px] text-[#f28b00]" />
                    <FaStar className="text-[12px] text-[#f28b00]" />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-[500] text-[18px] text-[#484848]">
                    {item.price}
                  </span>
                  <span className="text-[14px] line-through text-[#c5c5c5] block">
                    {item.old}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:w-[25vw]">
          <div className="flex justify-between items-center py-1 border-b-1 border-[#e5e5e5]">
            <h2 className="text-[20px] text-[#2d2d2d] font-[500] mb-2">
              Hot Sale
            </h2>
          </div>

          {products3.map((item, index) => (
            <div key={index} className="mt-10 group items-center flex gap-5">
              <div className="group-hover:border-[2px] flex items-center justify-center rounded-[5px] border-[#48484829] w-[30%] bg-white">
                <Image
                  className="object-contain  transition-all rounded-2xl"
                  src={item.img}
                  alt="products"
                />
              </div>

              <div>
                <div className="flex flex-col gap-2 mb-5">
                  <span className="text-[#333333] text-[14px] hover:text-[#f28b00] transition-all cursor-pointer">
                    {item.name}
                  </span>
                  <div className="flex  gap-2">
                    <FaStar className="text-[12px] text-[#f28b00]" />
                    <FaStar className="text-[12px] text-[#f28b00]" />
                    <FaStar className="text-[12px] text-[#f28b00]" />
                    <FaStar className="text-[12px] text-[#f28b00]" />
                    <FaStar className="text-[12px] text-[#f28b00]" />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-[500] text-[18px] text-[#484848]">
                    {item.price}
                  </span>
                  <span className="text-[14px] line-through text-[#c5c5c5] block">
                    {item.old}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
