import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import product5 from "../../public/product1/04.jpg";
import product6 from "../../public/product1/05.jpg";
import product7 from "../../public/product1/06.jpg";
import Image from "next/image";
import { TiShoppingCart } from "react-icons/ti";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Whitefootercards from "../components/Whitefootercards";

export default function page() {
  const wish = [
    {
      img: product5,
      name: "Tablet Red Elite Book Revolve 810 G2",
      price: "$6,250.00",
      status: "In Stock",
    },
    {
      img: product6,
      name: "Tablet Red Elite Book Revolve 810 G2",
      price: "$6,250.00",
      status: "In Stock",
    },
    {
      img: product7,
      name: "Tablet Red Elite Book Revolve 810 G2",
      price: "$6,250.00",
      status: "In Stock",
    },
  ];

  return (
    <>
      <Header />
      <section className="pt-[44px] pb-[35px] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-[20px]">
          <h3 className="text-[20px] text-[#2d2d2d] font-[400]">My wishlist</h3>
        </div>

        <div className="hidden md:block overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead className="border-b border-[#e5e5e5]">
              <tr>
                <th className="text-[13px] text-left font-[400] tracking-[-0.3px] pt-[17px] pb-[18px] text-[#484848] w-[40%]">
                  Product Name
                </th>
                <th className="pt-[17px] text-left font-[400] pb-[18px] text-[14px] text-[#484848] w-[20%]">
                  Unit Price
                </th>
                <th className="pt-[17px] text-left font-[400] pb-[18px] text-[14px] text-[#484848] w-[20%]">
                  Stock Status
                </th>
                <th className="w-[20%] text-center"></th>
              </tr>
            </thead>
            <tbody>
              {wish.map((item, index) => (
                <tr key={index} className="border-b border-[#e5e5e5]">
                  <td className="pt-[38px] pb-[45px] flex items-center gap-6">
                    <RiDeleteBin5Line className="text-[#8c8c8c] cursor-pointer text-xl" />
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 relative">
                        <Image
                          src={item.img}
                          alt={item.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <h3 className="text-[15px] text-[#484848] max-w-[180px] line-clamp-2">
                        {item.name}
                      </h3>
                    </div>
                  </td>
                  <td className="text-left">
                    <div className="text-[20px] text-[#f28b00]">{item.price}</div>
                  </td>
                  <td>
                    <h3 className="inline-block h-[25px] leading-[25px] text-white bg-[#f92400] text-[12px] font-semibold rounded-[15px] px-[17px]">
                      {item.status}
                    </h3>
                  </td>
                  <td className="text-center">
                    <button className="flex items-center justify-center gap-3 bg-[#919191] hover:bg-[#2d2d2d] transition-all text-white text-[14px] font-[600] h-[45px] px-6 rounded-full mx-auto cursor-pointer">
                      <TiShoppingCart className="text-[25px]" />
                      <span>Add To Cart</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-6">
          {wish.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm border border-[#e5e5e5] flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <div className="flex justify-between items-start sm:hidden">
                <RiDeleteBin5Line className="text-[#8c8c8c] cursor-pointer text-xl" />
              </div>

              <div className="flex items-center gap-4 flex-1">
                <div className="w-20 h-20 relative flex-shrink-0">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-[15px] text-[#484848] font-medium line-clamp-2">
                    {item.name}
                  </h3>
                  <div className="mt-2 text-[20px] text-[#f28b00] font-medium">
                    {item.price}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-3">
                <h3 className="inline-block h-[25px] leading-[25px] text-white bg-[#f92400] text-[12px] font-semibold rounded-[15px] px-[17px] self-start sm:self-auto">
                  {item.status}
                </h3>
                <button className="flex items-center justify-center gap-2 bg-[#919191] hover:bg-[#2d2d2d] transition-all text-white text-[14px] font-[600] h-[40px] px-4 rounded-full text-sm w-full sm:w-auto">
                  <TiShoppingCart className="text-[22px]" />
                  <span>Add To Shopping Cart</span>
                </button>
              </div>

              <RiDeleteBin5Line className="hidden sm:block text-[#8c8c8c] cursor-pointer text-xl ml-4" />
            </div>
          ))}
        </div>
      </section>

      <Whitefootercards />
      <Footer />
    </>
  );
}