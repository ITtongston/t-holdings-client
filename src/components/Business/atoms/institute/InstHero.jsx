import React from "react";
import GlobalHero from "@/shared/business/GlobalHero";

export default function InstHero() {
  const hero_data = [
    {
      heading: "Tongston Institute",
      description: (
        <span className="font-semibold">
          We provide Consulting, Curriculum Design, Development & Integration,
          Training, Research and Resource Development for people & educational
          institutions across all educational levels, public, private and
          non-profit institutions across all sectors
        </span>
      ),
      img: "https://www.niet.org/assets/News/Chinle__ScaleMaxWidthWzEyMDBd.tls.jpg",
    },
  ];

  const sub_hero_data = [
    {
      description: (
        <span className="font-semibold font-heading text-xl  md:text-4xl ">
          {" "}
          We Empower<span className="text-red"> Entrepreneurial Thinking </span>
          Across All Education Levels Globally
        </span>
      ),
      img: "/assets/images/business/t-institute/InstHeroCon2.png",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-start items-start  mb-[80px]">
      <GlobalHero
        items={hero_data}
        className={``}
        heroColor={`#5606f5`}
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
