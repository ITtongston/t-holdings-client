import React from "react";
import BusinessCards from "@/shared/cards/businesscards";

export default function InstExplore() {
  const card_data = [
    {
      text: (
        <span>
          By
          <span className="text-red">
            {" "}
            Deploying Consultancy services to integrate entrepreneurial{" "}
          </span>{" "}
          thinking in education in the curriculum and support entrepreneurial
          students.
        </span>
      ),
      avatar: "/assets/images/business/t-institute/InstSlide1.png",
    },
    {
      text: (
        <span>
          By conducting research & providing{" "}
          <span className="text-red">
            {" "}
            platforms & resources for entrepreneurs, intrapreneurs{" "}
          </span>{" "}
          & institutions globally to attain value, influence & profitability.
        </span>
      ),
      avatar: "/assets/images/business/t-institute/InstSlide3.png",
    },
    {
      text: (
        <span>
          By <span className="text-red">training people, institutions </span> &
          governments on entrepreneurial education.
        </span>
      ),
      avatar: "/assets/images/business/t-institute/InstSlide2.png",
    },
  ];
  return (
    <div className="w-full  flex flex-col justify-start items-start  mb-[80px]">
      <BusinessCards cards={card_data} className={``} />
    </div>
  );
}
