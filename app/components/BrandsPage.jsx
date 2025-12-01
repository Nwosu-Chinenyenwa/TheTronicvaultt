"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const alphabet = [
  "All",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const allBrands = [
  { name: "Adopted", products: 12 },
  { name: "Apple", products: 896 },
  { name: "HP", products: 145 },
  { name: "eBay", products: 5 },
  { name: "Huawei", products: 156 },
  { name: "Toshiba", products: 26 },
  { name: "Tencent", products: 12 },
  { name: "Philips", products: 896 },
  { name: "Sony", products: 145 },
  { name: "Dell", products: 5 },
  { name: "LG", products: 156 },
  { name: "Canon", products: 26 },

  { name: "Adopted", products: 12 },
  { name: "Apple", products: 896 },
  { name: "HP", products: 145 },
  { name: "eBay", products: 5 },
  { name: "Huawei", products: 156 },
  { name: "Toshiba", products: 26 },
  { name: "Tencent", products: 12 },
  { name: "Philips", products: 896 },
  { name: "Sony", products: 145 },
  { name: "Dell", products: 5 },
  { name: "LG", products: 156 },
  { name: "Canon", products: 26 },
];

export default function BrandsPage() {
  const [active, setActive] = useState("All");

  const filteredBrands =
    active === "All"
      ? allBrands
      : allBrands.filter((brand) => brand.name.startsWith(active));

  return (
    <div className="w-full min-h-screen bg-[#f5f5f5] p-8 py-20">
      <div className="w-[90vw] m-auto">
        <h2 className="font-[400] text-[#2d2d2d] text-[20px] mb-[29px]">
          Brands
        </h2>

        <div className="bg-white pt-[31px] pr-[50px] pb-[24px] pl-[110px] rounded-[8px] shadow-[0px_2px_3px_rgba(234,234,234,1)] mb-[39px] justify-between">
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => setActive(letter)}
              className={`text-[18px] mr-[22px] cursor-pointer font-medium transition-all ${
                active === letter ? "text-[#ffa500]" : "text-[#444]"
              }`}
            >
              {letter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
          <AnimatePresence>
            {filteredBrands.map((brand, index) => (
              <motion.div
                key={brand.name + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="bg-white rounded-lg justify-center pt-[36px] pb-[29px] text-center hover:bg-[#f28b00] cursor-pointer group transition-all shadow-sm"
              >
                <h3 className="text-[16px] font-[500] mb-[1px] group-hover:text-white text-[#484848]">
                  {brand.name}
                </h3>
                <p className="text-[13px] text-gray-500 group-hover:text-white">
                  {brand.products} Product
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
