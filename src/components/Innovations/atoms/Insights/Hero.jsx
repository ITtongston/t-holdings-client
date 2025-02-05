import React from "react";
import ResponsiveHero from "@/shared/containers/responsivehero"; // Adjust the path to where this component is saved
import HeroText from "@/shared/typography/herotext";
import Button from "@/shared/buttons/button";

export default function Hero() {
  return (
    <div className="w-full relative    overflow-hidden   mb-[80px] flex  justify-center items-center">
      <ResponsiveHero
        background={`/assets/images/Teem/mediatmpIMG_6346.jpg`}
        className={`h-[700px]  md:h-[500px]`}
      />
      <div className="overlay-bg absolute top-0 left-0 flex  gap-y-8 flex-col justify-center items-start  px-4 mx-auto  h-[700px] md:h-[550px] w-full bg-black bg-opacity-60">
        <h1 className="font-bold font-heading  text-3xl md:text-5xl text-white  md:w-[70%]  ">
          Value, Influence & Profitability At Your Fingertips!
        </h1>
        <div className="buttons-container flex flex-col gap-y-4 justify-start items-start    md:flex-row gap-x-5">
          <Button
            text={`Explore TEEM 2024`}
            className={` bg-background-light    rounded-xl   hover:bg-background-gold  
             
             w-[200px] h-[50px] border border-background-footer_black text-sm hover:border-none  `}
            modalContent={
              <div className="p-2">
                {" "}
                <iframe
                  src="/assets/files/Teem 2024_.pdf"
                  height={600}
                  width={500}
                  className="bg-background-light"
                ></iframe>
              </div>
            }
          />

          {/* <Button
            text={`TEES Pitches Prizes`}
            className={` bg-background-light    rounded-xl   hover:bg-background-gold  
             
             w-[200px] h-[50px] border border-background-footer_black text-sm hover:border-none  `}
            modalContent={
              <div className="p-2">
                {" "}
                <iframe
                  src=""
                  height={600}
                  width={500}
                  className="bg-background-light"
                ></iframe>
              </div>
            }
          /> */}
        </div>
      </div>
    </div>
  );
}
