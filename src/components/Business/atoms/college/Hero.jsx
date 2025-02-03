import React from "react";
import GlobalHero from "@/shared/business/GlobalHero";

export default function ColHero() {
  const hero_data = [
    {
      heading: "Tongston College",
      description: (
        <span className="font-semibold">
          Empowering primary and secondary students with entrepreneurial
          education and resources for a future in jobs and enterprise
        </span>
      ),
      img: "/assets/images/business/t-college/herocon1.png",
    },
  ];

  const sub_hero_data = [
    {
      description: (
        <span className="font-semibold font-heading text-xl  md:text-4xl ">
          {" "}
          We Empower<span className="text-red">
            {" "}
            Entrepreneurial Thinking
          </span>{" "}
          Across Basic Education Globally
        </span>
      ),
      img: "/assets/images/business/t-college/herocon2.png",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-start items-start  mb-[80px]">
      <GlobalHero
        items={hero_data}
        className={``}
        heroColor={`#C79F00BA`}
        textColor={`black`}
        imageClass={`scale-x-[-1]  md:scale-x-[1]`}
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
