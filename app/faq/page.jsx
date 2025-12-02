"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import arrow from "../../public/images/arrow-right.png";
import Image from "next/image";
import BrandsPage from "../components/BrandsPage";

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faq = [
    {
      title: "What is your international returns policy?",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in accumsan dui. In hac habitasse platea dictumst. Donec sit amet auctor leo. Sed venenatis posuere risus quis dictum. Vivamus ullamcorper orci vitae eros tincidunt, a aliquet lacus dapibus. Sed consectetur, est vel tincidunt imperdiet, justo est dignissim lorem, nec tincidunt lacus lacus ac risus. Cras pretium enim nec vestibulum aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
    },
    {
      title: "How can I find your international delivery policy?",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in accumsan dui. Donec imperdiet, nisl non pharetra convallis, nunc sapien laoreet massa, ac elementum arcu neque vitae enim. Praesent convallis leo est, scelerisque tincidunt magna ultricies eu. Ut placerat est a eros faucibus feugiat. Nullam a urna sit amet sem porttitor malesuada a quis nibh. In hac habitasse platea dictumst. Donec sit amet auctor leo. Sed venenatis posuere risus quis dictum. Vivamus ullamcorper orci vitae eros tincidunt, a aliquet lacus dapibus.",
    },
    {
      title: "What should I do if my order hasn't been delivered yet?",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in accumsan dui. Donec imperdiet, nisl non pharetra convallis, nunc sapien laoreet massa, ac elementum arcu neque vitae enim. Praesent convallis leo est, scelerisque tincidunt magna ultricies eu. Ut placerat est a eros faucibus feugiat. Nullam a urna sit amet sem porttitor malesuada a quis nibh. In hac habitasse platea dictumst. Donec sit amet auctor leo. Sed venenatis posuere risus quis dictum. Vivamus ullamcorper orci vitae eros tincidunt, a aliquet lacus dapibus. Sed consectetur, est vel tincidunt imperdiet, justo est dignissim lorem, nec tincidunt lacus lacus ac risus. Cras pretium enim nec vestibulum aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
    },
    {
      title:
        "I'm an international customer, have you received my returned items?",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in accumsan dui. In hac habitasse platea dictumst. Donec sit amet auctor leo. Sed venenatis posuere risus quis dictum. Vivamus ullamcorper orci vitae eros tincidunt, a aliquet lacus dapibus. Sed consectetur, est vel tincidunt imperdiet, justo est dignissim lorem, nec tincidunt lacus lacus ac risus. Cras pretium enim nec vestibulum aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
    },
    {
      title: "How can I get a new returns note?",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in accumsan dui. Donec imperdiet, nisl non pharetra convallis, nunc sapien laoreet massa, ac elementum arcu neque vitae enim. Praesent convallis leo est, scelerisque tincidunt magna ultricies eu. Ut placerat est a eros faucibus feugiat. Nullam a urna sit amet sem porttitor malesuada a quis nibh. In hac habitasse platea dictumst. Donec sit amet auctor leo. Sed venenatis posuere risus quis dictum. Vivamus ullamcorper orci vitae eros tincidunt, a aliquet lacus dapibus.",
    },
    {
      title: "What should I do if my order hasn't been delivered yet?",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet, nisl non pharetra convallis, nunc sapien laoreet massa, ac elementum arcu neque vitae enim. Praesent convallis leo est, scelerisque tincidunt magna ultricies eu. Ut placerat est a eros faucibus feugiat. Nullam a urna sit amet sem porttitor malesuada a quis nibh. In hac habitasse platea dictumst. Donec sit amet auctor leo. Vivamus ullamcorper orci vitae eros tincidunt, a aliquet lacus dapibus.",
    },
  ];

  return (
    <>
      <Header />
      <div className="border-b border-[#00000022] py-3 ">
        <div className="flex z-0 items-center gap-5 ml-[19px]">
          <h2 className="font-[500] text-[#8c8c8c] cursor-pointer hover:text-[#f28b00] transition-all">
            Home
          </h2>
          <Image src={arrow} alt="arrow right" />
          <h2 className="font-[500] text-[#8c8c8c]">Faq</h2>
        </div>
      </div>
      <section className="py-20">
        <div className="w-sreen m-auto">
          <h1 className="mb-[30px] px-2 md:px-10 text-[20px] font-[400] text-[#2d2d2d]">
            Answers to Your Questions
          </h1>
          {faq.map((faqs, index) => (
            <div key={index} className="px-2 md:px-10 py-4">
              <span
                onClick={() => toggleFaq(index)}
                className={`flex cursor-pointer border-2 border-[#e5e5e5] rounded-full text-[18px] font-[400] text-[#2d2d2d] pt-[19px] px-[33px] pb-[13px]  justify-between items-center ${
                  activeIndex === index ? "bg-[#f5f5f5] border-[#f5f5f5]" : ""
                }`}
              >
                <h3 className="rajdhani-light">{faqs.title}</h3>

                {activeIndex === index ? (
                  <svg
                    onClick={() => toggleFaq(index)}
                    className="w-9 p-2 cursor-pointer text-[#2d2d2d]  transition-transform duration-300 rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 11H5V13H19V11Z"></path>
                  </svg>
                ) : (
                  <svg
                    onClick={() => toggleFaq(index)}
                    className="w-9 p-2 cursor-pointer text-[#2d2d2d]  transition-transform duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                  </svg>
                )}
              </span>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "max-h-[500px] opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="my-5 text-[#919191] pl-[31px] pr-[15px] mt-[32px] mb-[37px] font-[400] text-[16px] leading-relaxed">
                  {faqs.discription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
