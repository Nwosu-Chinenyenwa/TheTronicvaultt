import React from "react";
import { ChevronDown } from "lucide-react";
import { Check } from "lucide-react";
import Whitefootercards from "../components/Whitefootercards";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function page() {
  return (
    <>
      <Header />
      <section className="mt-[30px] mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Left Column: Forms */}
          <div className="w-full lg:w-3/5">
            {/* Billing Details */}
            <div className="mb-12">
              <h1 className="text-[20px] font-[400] text-[#2d2d2d] mb-[12px] mt-[14px]">
                Checkout
              </h1>

              <div className="pt-[13px] pr-[20px] pb-[12px] pl-[20px] border-2 border-dotted border-[#d4d4d4] rounded-[10px] mt-[10px] mb-[28px] text-[#484848] text-[14px]">
                <p>
                  Returning customer?{" "}
                  <a href="#" className="text-[#f28b00]">
                    Click here to login
                  </a>
                </p>
              </div>

              <h2 className="text-[16px] font-normal text-[#484848] pb-[22px] mb-[17px] border-b border-[#e5e5e5]">
                Billing details
              </h2>

              <form className="space-y-6 mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-[12px] ml-[2px] text-[#484848] block"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Ali"
                      className="w-full h-[40px] mt-[12px] outline-none text-[#727272] placeholder:text-[#727272] pt-[8px] pr-[15px] pb-[8px] pl-[30px] border-2 border-[#e5e5e5] rounded-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-[12px] ml-[2px] text-[#484848] block"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Tufan"
                      className="w-full h-[40px] mt-[12px] outline-none text-[#727272] placeholder:text-[#727272] pt-[8px] pr-[15px] pb-[8px] pl-[30px] border-2 border-[#e5e5e5] rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-[12px] ml-[2px] text-[#484848] block"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder=""
                    title="optional"
                    className="w-full h-[40px] mt-[12px] outline-none text-[#727272] placeholder:text-[#727272] pt-[8px] pr-[15px] pb-[8px] pl-[30px] border-2 border-[#e5e5e5] rounded-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-[12px] ml-[2px] text-[#484848] block"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full h-[40px] mt-[12px] outline-none text-[#727272] placeholder:text-[#727272] pt-[8px] pr-[15px] pb-[8px] pl-[30px] border-2 border-[#e5e5e5] rounded-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-[12px] ml-[2px] text-[#484848] block"
                    >
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full h-[40px] mt-[12px] outline-none text-[#727272] placeholder:text-[#727272] pt-[8px] pr-[15px] pb-[8px] pl-[30px] border-2 border-[#e5e5e5] rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="mb-[12px] ml-[2px] text-[#484848] block"
                  >
                    Country <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="country"
                      defaultValue="Australia"
                      className="w-full h-[40px] mt-[12px] outline-none text-[#727272] placeholder:text-[#727272] pt-[8px] pr-[15px] pb-[8px] pl-[30px] border-2 border-[#e5e5e5] rounded-full appearance-none bg-white"
                    >
                      <option>Australia</option>
                      {/* Add other countries as needed */}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-[#727272]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="street"
                    className="mb-[12px] ml-[2px] text-[#484848] block"
                  >
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="street"
                    placeholder="Street address"
                    className="w-full h-[40px] mt-[12px] outline-none text-[#727272] placeholder:text-[#727272] pt-[8px] pr-[15px] pb-[8px] pl-[30px] border-2 border-[#e5e5e5] rounded-full"
                  />
                  <input
                    type="text"
                    placeholder="Apartment, suite, unit etc. (optional)"
                    className="w-full h-[40px] mt-[12px] outline-none text-[#727272] placeholder:text-[#727272] pt-[8px] pr-[15px] pb-[8px] pl-[30px] border-2 border-[#e5e5e5] rounded-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="mb-[12px] ml-[2px] text-[#484848] block"
                  >
                    Town / City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-full h-[40px] mt-[12px] outline-none text-[#727272] placeholder:text-[#727272] pt-[8px] pr-[15px] pb-[8px] pl-[30px] border-2 border-[#e5e5e5] rounded-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="state"
                      className="mb-[12px] ml-[2px] text-[#484848] block"
                    >
                      State / County <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="state"
                      className="w-full h-[40px] mt-[12px] outline-none text-[#727272] placeholder:text-[#727272] pt-[8px] pr-[15px] pb-[8px] pl-[30px] border-2 border-[#e5e5e5] rounded-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="postcode"
                      className="mb-[12px] ml-[2px] text-[#484848] block"
                    >
                      Postcode / ZIP <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="postcode"
                      className="w-full h-[40px] mt-[12px] outline-none text-[#727272] placeholder:text-[#727272] pt-[8px] pr-[15px] pb-[8px] pl-[30px] border-2 border-[#e5e5e5] rounded-full"
                    />
                  </div>
                </div>

                <div className="flex items-center mt-[36px] mb-[39px] gap-2 text-[16px] text-[#5e5d5d] font-sans">
                  <input
                    type="checkbox"
                    id="create-account"
                    className="w-5 h-5 accent-[#f59e0b] cursor-pointer"
                  />
                  <label htmlFor="create-account" className="cursor-pointer">
                    Create an account
                  </label>
                </div>
              </form>
            </div>

            {/* Shipping Address */}
            <div>
              <h2 className="text-[16px] font-normal text-[#484848] pb-[22px] mb-[17px] border-b border-[#e5e5e5]">
                Shipping Address
              </h2>

              <form className="space-y-6 mt-6">
                <div className="flex items-center mt-[36px] mb-[39px] gap-2 text-[16px] text-[#5e5d5d] font-sans">
                  <input
                    type="checkbox"
                    id="ship-different"
                    className="w-5 h-5 accent-[#f59e0b] cursor-pointer"
                  />
                  <label htmlFor="ship-different" className="cursor-pointer">
                    Ship to a different address
                  </label>
                </div>

                {/* Shipping fields - same as billing but wrapped in responsive grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="shipping-firstName"
                      className="mb-[12px] ml-[2px] text-[#484848] block"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="shipping-firstName"
                      placeholder="Ali"
                      className="w-full h-[40px] mt-[12px] outline-none text-[#727272] placeholder:text-[#727272] pt-[8px] pr-[15px] pb-[8px] pl-[30px] border-2 border-[#e5e5e5] rounded-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="shipping-lastName"
                      className="mb-[12px] ml-[2px] text-[#484848] block"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="shipping-lastName"
                      placeholder="Tufan"
                      className="w-full h-[40px] mt-[12px] outline-none text-[#727272] placeholder:text-[#727272] pt-[8px] pr-[15px] pb-[8px] pl-[30px] border-2 border-[#e5e5e5] rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="shipping-company"
                    className="mb-[12px] ml-[2px] text-[#484848] block"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="shipping-company"
                    placeholder=""
                    title="optional"
                    className="w-full h-[40px] mt-[12px] outline-none text-[#727272] placeholder:text-[#727272] pt-[8px] pr-[15px] pb-[8px] pl-[30px] border-2 border-[#e5e5e5] rounded-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="shipping-email"
                      className="mb-[12px] ml-[2px] text-[#484848] block"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="shipping-email"
                      className="w-full h-[40px] mt-[12px] outline-none text-[#727272] placeholder:text-[#727272] pt-[8px] pr-[15px] pb-[8px] pl-[30px] border-2 border-[#e5e5e5] rounded-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="shipping-phone"
                      className="mb-[12px] ml-[2px] text-[#484848] block"
                    >
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="shipping-phone"
                      className="w-full h-[40px] mt-[12px] outline-none text-[#727272] placeholder:text-[#727272] pt-[8px] pr-[15px] pb-[8px] pl-[30px] border-2 border-[#e5e5e5] rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="shipping-country"
                    className="mb-[12px] ml-[2px] text-[#484848] block"
                  >
                    Country <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="shipping-country"
                      defaultValue="Australia"
                      className="w-full h-[40px] mt-[12px] outline-none text-[#727272] placeholder:text-[#727272] pt-[8px] pr-[15px] pb-[8px] pl-[30px] border-2 border-[#e5e5e5] rounded-full appearance-none bg-white"
                    >
                      <option>Australia</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-[#727272]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="shipping-street"
                    className="mb-[12px] ml-[2px] text-[#484848] block"
                  >
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="shipping-street"
                    placeholder="Street address"
                    className="w-full h-[40px] mt-[12px] outline-none text-[#727272] placeholder:text-[#727272] pt-[8px] pr-[15px] pb-[8px] pl-[30px] border-2 border-[#e5e5e5] rounded-full"
                  />
                  <input
                    type="text"
                    placeholder="Apartment, suite, unit etc. (optional)"
                    className="w-full h-[40px] mt-[12px] outline-none text-[#727272] placeholder:text-[#727272] pt-[8px] pr-[15px] pb-[8px] pl-[30px] border-2 border-[#e5e5e5] rounded-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="shipping-city"
                    className="mb-[12px] ml-[2px] text-[#484848] block"
                  >
                    Town / City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="shipping-city"
                    className="w-full h-[40px] mt-[12px] outline-none text-[#727272] placeholder:text-[#727272] pt-[8px] pr-[15px] pb-[8px] pl-[30px] border-2 border-[#e5e5e5] rounded-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="shipping-state"
                      className="mb-[12px] ml-[2px] text-[#484848] block"
                    >
                      State / County <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="shipping-state"
                      className="w-full h-[40px] mt-[12px] outline-none text-[#727272] placeholder:text-[#727272] pt-[8px] pr-[15px] pb-[8px] pl-[30px] border-2 border-[#e5e5e5] rounded-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="shipping-postcode"
                      className="mb-[12px] ml-[2px] text-[#484848] block"
                    >
                      Postcode / ZIP <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="shipping-postcode"
                      className="w-full h-[40px] mt-[12px] outline-none text-[#727272] placeholder:text-[#727272] pt-[8px] pr-[15px] pb-[8px] pl-[30px] border-2 border-[#e5e5e5] rounded-full"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="mb-[12px] ml-[2px] text-[#484848]">
                    Order Notes
                  </h2>
                  <textarea
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    className="w-full min-h-[128px] mt-[12px] outline-none text-[#727272] placeholder:text-[#a3a3a3] pt-[12px] pr-[15px] pb-[12px] pl-[15px] border-2 border-[#e5e5e5] rounded-[12px] resize-none"
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-2/5">
            <div className="w-full bg-[#f5f5f5] p-6 rounded-lg">
              <h2 className="mb-[38px] text-[18px] font-bold text-[#484848]">
                Your Order
              </h2>

              <div className="flex justify-between text-[#2d2d2d] text-[15px]">
                <span>Product</span>
                <span>Total</span>
              </div>

              <div className="space-y-3 mb-3">
                <div className="flex justify-between text-[14px] text-[#838383] pt-[22px] pb-[1px]">
                  <span>Apple iPad Mini G2356</span>
                  <span>$99.00</span>
                </div>
                <div className="flex justify-between text-[14px] text-[#838383] pt-[5px] pb-[1px]">
                  <span>Beats Pill + Portable Speaker</span>
                  <span>$100.00</span>
                </div>
              </div>

              <div className="flex justify-between mb-4">
                <span className="pt-[11px] pr-0 pb-[14px] pl-0">Total</span>
                <span className="text-[#8c8c8c] pt-[11px] pb-[14px] text-[18px]">
                  $1,999.00
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
                </div>
              </div>

              <div className="flex justify-between mb-6">
                <span className="pt-[11px] pr-0 pb-[14px] pl-0">Total</span>
                <span className="text-[#8c8c8c] pt-[11px] pb-[14px] text-[18px]">
                  $1,999.00
                </span>
              </div>

              <div className="flex items-center gap-2 text-[16px] mb-[46px] text-[#5e5d5d] font-sans">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-5 h-5 accent-[#f59e0b] cursor-pointer"
                />
                <label htmlFor="terms" className="cursor-pointer">
                  I’ve read and accept the terms & conditions *
                </label>
              </div>

              <button className="w-full h-12 rounded-full bg-[#f92400] text-white cursor-pointer font-medium hover:bg-[#f28b00] transition">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </section>
      <Whitefootercards />
      <Footer />
    </>
  );
}
