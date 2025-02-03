import React from "react";
import ResponsiveHero from "@/shared/containers/responsivehero"; // Adjust the path to where this component is saved
import HeroText from "@/shared/typography/herotext";

export default function Hero() {
  return (
    <div className="w-full relative    overflow-hidden   mb-[80px] flex  justify-center items-center">
      <ResponsiveHero
        background={`/assets/images/backgrounds/aboutUsBg.png`}
        className={`h-[700px]  md:h-[550px]`}
      />
      <div className="overlay-bg absolute top-0 left-0 flex flex-col justify-center items-center  mx-auto  h-[700px] md:h-[550px] w-full bg-black bg-opacity-30">
        <HeroText>
          <span className="text-white font-semibold font-heading   text-2xl md:text-4xl">
            WE ARE
          </span>
          <span className="font-bold font-heading  text-3xl md:text-3xl text-white  ">
            TONGSTON ENTREPRENEURSHIP GROUP
          </span>
          <p className="font-body font-semibold text-white  text-lg md:text-3xl md:w-full ">
            EDUCATION | MEDIA | FINANCE | ENTERPRISE
          </p>
          <p className="font-body text-2xl text-white font-semibold "></p>
        </HeroText>
      </div>
    </div>
  );
}
