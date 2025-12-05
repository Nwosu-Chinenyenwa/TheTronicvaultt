import React from "react";

export default function Signup() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-[#fff] rounded-[8px] shadow-sm pt-10 pb-16 md:pt-[44px] md:pb-[50px] px-6 md:px-[50px] md:h-[500px] flex flex-col justify-between">
        <div>
          <div className="mb-[60px] md:mb-[97px] text-center">
            <h3 className="text-[20px] font-[400] text-[#2d2d2d]">Register</h3>
          </div>

          <form>
            <div className="mb-[22px]">
              <label className="block text-[#484848] mb-[12px]">
                Email address *
              </label>
              <input
                className="w-full h-[40px] placeholder:text-[#727272] text-[#727272] rounded-[20px] border-2 border-[#e5e5e5] outline-none text-[13px] hover:border-[#cacaca] px-[30px]"
                type="email"
                placeholder="ali@example.com"
              />
            </div>

            <div className="mb-[22px]">
              <label className="block text-[#484848] mb-[12px]">Password *</label>
              <input
                className="w-full h-[40px] placeholder:text-[#727272] text-[#727272] rounded-[20px] border-2 border-[#e5e5e5] outline-none text-[13px] hover:border-[#cacaca] px-[30px]"
                type="password"
                placeholder="••••••"
              />
            </div>
          </form>
        </div>

        <div className="flex justify-center md:justify-start mt-6 md:mt-0">
          <button className="h-[50px] w-full md:w-auto text-[15px] font-[600] text-white px-[64px] rounded-full bg-[#484848] hover:bg-[#2d2d2d] transition-all">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}