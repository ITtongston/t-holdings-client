import React from "react";

import ColHero from "../atoms/college/Hero";
import ColExplore from "../atoms/college/ColExplore";
import ColClientele from "../atoms/college/ColSelectedClientele";
import ColSlide from "../atoms/college/ColSlide";

export default function CollCon() {
  return (
    <div className="w-full h-[fixed] flex flex-col justify-start items-start overflow-hidden ">
      <ColHero />
      <ColExplore />
      <ColSlide />
      <ColClientele />
    </div>
  );
}
