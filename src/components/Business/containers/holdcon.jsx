import React from "react";
import Hero from "../atoms/holdings/Hero";
import Explore from "../atoms/holdings/Explore";
import Slide1 from "../atoms/holdings/Slide1";
import BrochureCheckout from "../atoms/holdings/BrochureCheckout";
import SelectedClientele from "../atoms/holdings/SelectedClientele";

export default function HoldCon() {
  return (
    <div className="w-full h-[fixed] flex flex-col justify-start items-start overflow-hidden ">
      <Hero />
      <Explore />
      <Slide1 />
      <BrochureCheckout />
      <SelectedClientele />
    </div>
  );
}
