import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BrandsPage from "../components/BrandsPage";
import arrow from "../../public/images/arrow-right.png";
import Image from "next/image";

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
          <h2 className="font-[500] text-[#8c8c8c]">Faq</h2>
        </div>
      </div>
      <section>
        <BrandsPage />
      </section>
      <Footer />
    </>
  );
}
