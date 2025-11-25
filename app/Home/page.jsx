"use client";

import { useState, useEffect } from "react";
import Subscribe from "../components/Subscribe";
import Top from "../components/Top";
import Header from "../components/Header";
import HeroSlider from "../components/Hero";
import Images from "../components/Images";
import NewProducts from "../components/NewProducts";
import ProductSlider from "../components/ProductSlider";
import Modiles from "../components/Modiles";
import Imagebox from "../components/Imagebox";
import MostSales from "../components/MostSales";
import More from "../components/More";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

export default function page() {
  return (
    <>
      <Subscribe />
      <Header />
      <HeroSlider />
      <Images />
      <Banner />
      <NewProducts />
      <ProductSlider />
      <Modiles />
      <Imagebox />
      <MostSales />
      <More />
      <Footer />
    </>
  );
}
