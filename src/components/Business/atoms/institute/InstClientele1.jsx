import React from "react";
import Marquees from "@/shared/carousels/marquee";
import Button from "@/shared/buttons/button";

export default function InstClientele() {
  const clients = [
    {
      direction: "left",
      images: [
        "/assets/images/business/t-institute/client1.png",
        "/assets/images/business/t-institute/client2.png",
        "/assets/images/business/t-institute/client3.png",
        "/assets/images/business/t-institute/client4.png",
        "/assets/images/business/t-institute/client5.png",
        "/assets/images/business/t-institute/client6.png",
        "/assets/images/business/t-institute/client1.png",
        "/assets/images/business/t-institute/client2.png",
        "/assets/images/business/t-institute/client3.png",
        "/assets/images/business/t-institute/client4.png",
        "/assets/images/business/t-institute/client5.png",
        "/assets/images/business/t-institute/client6.png",
      ],
    },
  ];
  return (
    <div className="w-full h-[fixed] flex flex-col justify-center  items-center   mb-9">
      <span className="text-black font-bold text-3xl  font-heading  md:text-4xl  text-center mb-9  ">
        Our Selected Clientele
      </span>
      <section className="clients-slider w-full px-4 h-[fixed]">
        <Marquees marquees={clients} className={``} className2={``} />
      </section>
    </div>
  );
}
