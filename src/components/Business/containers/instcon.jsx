import React from "react";
import InstHero from "../atoms/institute/InstHero";
import InstExplore from "../atoms/institute/InstExplore";
import InstSlide from "../atoms/institute/InstSlide";
import CheckoutBrochure from "../atoms/institute/CheckoutBrochure";
import InstClientele from "../atoms/institute/InstClientele1";
import InstClientele2 from "../atoms/institute/InstClientele2";

export default function InstCon() {
  return (
    <div className="w-full h-[fixed] flex flex-col justify-start items-start overflow-hidden ">
      <InstHero />
      <InstExplore />
      <InstSlide />
      <CheckoutBrochure />
      <InstClientele />
      <InstClientele2 />
    </div>
  );
}
