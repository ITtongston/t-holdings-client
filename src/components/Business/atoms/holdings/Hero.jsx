import React from "react";
import GlobalHero from "@/shared/business/GlobalHero";

export default function Hero() {
  const hero_data = [
    {
      heading: "Tongston Holdings",
      description: (
        <span className="font-semibold">
          We provide a range of enterprise solutions to drive value, influence &
          profitability in people, governments and public, private and
          non-profit institutions.
        </span>
      ),
      img: "/assets/images/business/t-holdings/herobg.png",
    },
  ];

  const sub_hero_data = [
    {
      description: (
        <span className="font-semibold font-heading text-xl  md:text-4xl">
          {" "}
          We unlock{" "}
          <span className="text-red"> Value, Influence & Profitability </span>
          for Clients through our enterprise solutions
        </span>
      ),
      img: "/assets/images/business/t-holdings/HoldHero2.png",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-start items-start  mb-[80px]">
      <GlobalHero
        items={hero_data}
        className={``}
        heroColor={`#59229f`}
        textColor={`white`}
      />
      <GlobalHero
        items={sub_hero_data}
        className={`md:flex md:flex-row-reverse`}
        heroColor={`white`}
        textColor={`black`}
        visibleClass={`hidden`}
        imageClass={`md:w-[103%]`}
      />
    </div>
  );
}
