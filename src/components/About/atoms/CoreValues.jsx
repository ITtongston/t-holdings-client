import React from "react";
import ResponsiveHero from "@/shared/containers/responsivehero";
import Image from "next/image";

export default function CoreValues() {
  const data = [
    {
      heading: "Personal Development",
      description: (
        <span>
          Enabling the Physical, Material Emotional, Intellectual and Spiritual,
          Development of People.
        </span>
      ),
    },
    {
      heading: "Professional Development",
      description: (
        <span>
          Enabling the Brand, Product and Business Development of Organisations.
        </span>
      ),
    },
    {
      heading: "Public Development",
      description: (
        <span>
          {" "}
          Enabling the Personal, social Cultural, Economic and Sustainable
          Development of Societies.
        </span>
      ),
    },
  ];
  return (
    <div className="w-full   h-[fixed] flex flex-col  ga-y-5 justify-center  overflow-hidden   items-center  relative   mb-[80px]">
      <ResponsiveHero
        background={`/assets/images/backgrounds/aboutod6.png`}
        className={` bg-fixed  overflow-hidden  justify-center   flex items-center   py-7  h-[150vh]  md:h-[600px]`}
      />

      <div className="   absolute top-0 left-0  flex flex-col gap-y-9 justify-center items-center  w-full h-[150vh]   md:h-[600px]">
        <span className="text-white font-bold text-3xl  font-heading  md:text-4xl  text-center ">
          Our Core Values
        </span>
        <div className="w-full   mdd:h-[600px] flex   flex-col gap-y-5  px-4  gap-x-6  justify-center  items-center  p-2   md:flex-row md:gap-x- ">
          {data.map((card, index) => (
            <div
              key={index}
              className="flex flex-col  gap-y-3  justify-center items-center  p-1  w-full   md:w-[350px] h-[300px] rounded-xl shadow-2xl  bg-white   px-4  
            md:transform md:hover:scale-105 ease-in-out duration-700 
            "
            >
              <section className=" flex flex-row gap-x-2 justify-center   py-5  mt-9  items-center ">
                <span className="text-black font-semibold text-2xl md:text-3xl  text-center">
                  {card.heading}
                </span>
              </section>
              <section className="description-container flex justify-center  mb-[5rem] items-center  -2 text-center ">
                <p className="text-black font-body text-lg  lg:text-xl  text-center ">
                  {card.description}
                </p>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
