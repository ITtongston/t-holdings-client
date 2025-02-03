import React from "react";
import ResponsiveHero from "@/shared/containers/responsivehero";
import Image from "next/image";

export default function Mission() {
  const data = [
    {
      icon: "/assets/Icons/eye.png",
      heading: "Our Vision",
      description:
        "A world where there is no unemployment, employability,underemployment, and overdependence on government for socio-economic development.",
    },
    {
      icon: "/assets/Icons/mission.png",
      heading: "Our Mission",
      description:
        "To transform People,Organizations & Governments into Valuable, Influential & Profitable  entities.",
    },
  ];
  return (
    <div
      className="w-full   h-[fixed] flex flex-col  ga-y-5 justify-center  overflow-hidden   items-center  relative   mb-[80px]"
      //   style={{
      //     backgroundImage: `url("/assets/images/backgrounds/missionbg.jpg")`,
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //     backgroundRepeat: "no-repeat",
      //   }}
    >
      <ResponsiveHero
        background={`/assets/images/backgrounds/missionbg.jpg`}
        className={`    justify-center   flex items-center     h-[800px]  md:h-[600px] w-full `}
      />
      <div className="absolute top-0 left-0 w-full  h-[800px]  mdd:h-[600px] flex   flex-col gap-y-8  px-4  gap-x-6  justify-center  items-center  p-2   md:flex-row md:gap-x- ">
        {data.map((card, index) => (
          <div
            key={index}
            className="flex flex-col  gap-y-6  justify-center items-center  p-1  w-full    md:w-[350px] h-[300px] rounded-xl shadow-2xl  bg-white   px-4  
            md:transform md:hover:scale-105 ease-in-out duration-700 
            "
          >
            <section className=" flex flex-row gap-x-2 justify-center  mb-auto   items-center pt-8 ">
              <Image
                alt={card.heading}
                src={card.icon}
                width={64}
                height={64}
                className={`w-[40px] h-[40px] object-contain `}
              />
              <span className="text-black font-semibold text-2xl md:text-3xl ">
                {card.heading}
              </span>
            </section>
            <section className="description-container flex justify-center  mb-[5rem] items-center  -2 text-center ">
              <p className="text-black font-body text-lg  md:text-xl  text-center ">
                {card.description}
              </p>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
