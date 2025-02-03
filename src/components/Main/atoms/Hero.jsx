import React from "react";
import ResponsiveHero from "@/shared/containers/responsivehero"; // Adjust the path to where this component is saved
import HeroText from "@/shared/typography/herotext";

export default function Hero() {
  return (
    <div className="w-full relative    overflow-hidden   mb-[80px] flex  justify-center items-center">
      <ResponsiveHero
        background={`/assets/images/backgrounds/mainbg.jpg`}
        className={`h-[700px]  md:h-[550px]`}
      />
      <div className="overlay-bg absolute top-0 left-0 flex flex-col justify-center items-center  mx-auto  h-[700px] md:h-[550px] w-full bg-black bg-opacity-55">
        <HeroText>
          <span className="text-white font-normal font-heading   text-2xl md:text-4xl">
            WE ARE
          </span>
          <span className="font-bold font-heading  text-3xl md:text-5xl text-white  ">
            TONGSTON GROUP
          </span>
          <h1 className="font-body font-bold text-white  text-lg md:text-xl md:w-[50%] ">
            We make People, Institutions & Governments Globally Valuable,
            Influential & Profitable Through Entrepreneurial Education |
            Enterprise | Media | Finance services
          </h1>
          <p className="font-body text-2xl text-white font-bold "></p>
        </HeroText>
      </div>
    </div>
  );
}
