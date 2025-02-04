import React from "react";
import ResponsiveHero from "@/shared/containers/responsivehero"; // Adjust the path to where this component is saved
import HeroText from "@/shared/typography/herotext";
import Button from "@/shared/buttons/button";

export default function EHero() {
  return (
    <div className="w-full relative    overflow-hidden   mb-[80px] flex  justify-center items-center">
      <ResponsiveHero
        background={`/assets/images/backgrounds/tes26.jpg`}
        className={`h-[700px]  md:h-[500px]`}
      />
      <div className="overlay-bg absolute top-0 left-0 flex  gap-y-8 flex-col justify-center items-start  px-4 mx-auto  h-[700px] md:h-[550px] w-full bg-black bg-opacity-60">
        <span className="font-bold font-heading  text-3xl md:text-5xl text-white  md:w-[70%]  ">
          Welcome To <span className="text-red">TE</span>S 2026
        </span>
        <span className="font-semibold font-heading  text-lg md:text-xl text-white  md:w-[70%]  ">
          LEARN! SHOWCASE! NETWORK
          <br /> <br />
          {/* DATE: : 30, November, 2025 TIME: 9:00 AM WAT LOCATION: Zoom, Linkedin
          & YouTube */}
          Coming Soon
        </span>
        <div className="buttons-container flex flex-col gap-y-4 justify-start items-start    md:flex-row gap-x-5">
          {/* <a href="https://tees25.tongston.com" target="_blank">
            {" "}
            <Button
              text={`Register`}
              className={` bg-background-light    rounded-xl   hover:bg-background-gold  
             
             w-[200px] h-[50px] border border-background-footer_black text-sm hover:border-none  `}
            />
          </a> */}
        </div>
      </div>
    </div>
  );
}
