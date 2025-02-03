import React from "react";
import BusinessCards from "@/shared/cards/businesscards";

export default function Explore() {
  const card_data = [
    {
      text: (
        <span>
          {" "}
          By <span className="text-red">
            deploying Data research solutions
          </span>{" "}
          to non-profits, public & private sectors
        </span>
      ),
      avatar: "/assets/images/business/t-holdings/HoldSlide1.png",
    },
    {
      text: (
        <span>
          By{" "}
          <span className="text-red">
            {" "}
            providing administration, HR governance strategy, Accounting & HR
            solutions
          </span>{" "}
          through our{" "}
          <a
            href="https://t-hub.tongston.com"
            target="_blank"
            className="text-blue-600 underline"
          >
            Tongston Hub
          </a>
        </span>
      ),
      avatar: "/assets/images/business/t-holdings/HoldSlide3.png",
    },
    {
      text: (
        <span>
          By<span className="text-red"> Integrating Technology</span> through
          training & consultancy
        </span>
      ),
      avatar: "/assets/images/business/t-holdings/HoldSlide2.png",
    },
  ];
  return (
    <div className="w-full  flex flex-col justify-start items-start  mb-[80px]">
      <BusinessCards cards={card_data} className={``} />
    </div>
  );
}
