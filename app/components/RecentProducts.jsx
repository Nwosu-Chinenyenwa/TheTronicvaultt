import React from "react";
import img1 from "../../public/images/01 (1).jpg";
import img2 from "../../public/images/01.jpg";
import img3 from "../../public/images/02.jpg";
import img4 from "../../public/images/03.jpg";
import img5 from "../../public/images/04.jpg";
import Image from "next/image";

export default function RecentProducts() {
  const recent = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
  ];

  return (
    <section className="pt-[83px] pb-[40px] w-[90vw] m-auto">
      <div className="flex justify-between items-center mb-[40px] py-1 border-b border-[#e5e5e5]">
        <h2 className="text-[20px] font-[400] mb-5">Recent Products</h2>
      </div>

      <div className="flex flex-wrap justify-center  items-center">
        {recent.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[45%] md:w-[180px] lg:w-[200px] mr-0 sm:mr-2 md:mr-[30px] mb-4 md:mb-0"
          >
            <div className="pt-[29px] pb-[20px] px-[16px] cursor-pointer border-2 hover:border-[#f28b00] rounded-[8px] min-h-auto transition-all border-[#e5e5e5]">
              <div className="h-[110px] mb-[30px]">
                <Image src={item.img} alt="recent products" />
              </div>
              <div>
                <h3 className="ml-[2px] text-[12px] text-[#919191]">
                  Computer
                </h3>
                <h2 className="min-h-[60px] w-full sm:w-[90%] hover:text-[#f28b00] transition-colors mt-[4px] mb-[2px] font-[400] text-[13px] text-[#484848]">
                  Apple İmac Z0SC4824 <br /> Retina
                </h2>
                <div>
                  <span className="text-[18px] mr-[10px] font-[500] text-[#f28b00]">
                    $2,999.00
                  </span>
                  <span className="text-[14px] line-through text-[#c5c5c5]">
                    $5,759.68
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
