import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import FooterCard from "../components/FooterCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import arrow from "../../public/images/arrow-right.png";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Header />
      
      <div className="border-b border-[#00000022] py-3">
        <div className="flex items-center gap-5 ml-[19px] text-sm md:text-base">
          <h2 className="font-[500] text-[#8c8c8c] cursor-pointer hover:text-[#f28b00] transition-all">
            Home
          </h2>
          <Image src={arrow} alt="arrow right" width={16} height={16} className="w-4 h-4" />
          <h2 className="font-[500] text-[#8c8c8c]">Accounts</h2>
        </div>
      </div>

      <main className="bg-[#f5f5f5] flex flex-col items-center justify-center px-4 py-8 md:py-12 lg:py-16">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-12">
          <Login />
          <Signup />
        </div>
      </main>

      <FooterCard />
      <Footer />
    </>
  );
}