import React from "react";
import BusinessCards from "@/shared/cards/businesscards";

export default function ColExplore() {
  const card_data = [
    {
      text: (
        <span>
          {" "}
          By<span className="text-red"> Deploying Consultancy services</span> to
          integrate entrepreneurial thinking in basic education in the
          curriculum
        </span>
      ),
      avatar: "/assets/images/business/t-college/slide1.png",
    },
    {
      text: (
        <span>
          By{" "}
          <span className="text-red">
            {" "}
            deploying learning solutions to primary and secondary school
            students
          </span>{" "}
          on entrepreneurial education for the future of jobs and enterprise
        </span>
      ),
      avatar: "/assets/images/business/t-college/slide2.png",
    },
    {
      text: (
        <span>
          By By
          <span className="text-red">
            {" "}
            deploying resources, provide access to entrepreneurial ecosystems
          </span>{" "}
          to primary and secondary school students for long-term impact
        </span>
      ),
      avatar: "/assets/images/business/t-college/slide3.png",
    },
  ];
  return (
    <div className="w-full  flex flex-col justify-start items-start  mb-[80px]">
      <BusinessCards cards={card_data} className={``} />
    </div>
  );
}
