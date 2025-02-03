import React from "react";
import Marquees from "@/shared/carousels/marquee";
import Button from "@/shared/buttons/button";
import BusinessForm from "@/shared/(Forms)/businessform";

export default function SelectedClientele() {
  const clients = [
    {
      direction: "left",
      images: [
        "/assets/images/business/t-holdings/modal-images/slcl1.png",
        "/assets/images/business/t-holdings/modal-images/slcl2.jpg",
        "/assets/images/business/t-holdings/modal-images/slcl3.jpg",
        "/assets/images/business/t-holdings/modal-images/slcl4.png",
        "/assets/images/business/t-holdings/modal-images/arise.svg",
        "/assets/images/business/t-holdings/modal-images/slcl1.png",
        "/assets/images/business/t-holdings/modal-images/slcl2.jpg",
        "/assets/images/business/t-holdings/modal-images/slcl3.jpg",
        "/assets/images/business/t-holdings/modal-images/slcl4.png",
        "/assets/images/business/t-holdings/modal-images/arise.svg",
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

      <section className="w-full h--[fixed] px-4 mt-[3rem] flex flex-col  justify-center items-center">
        <span className="text-black font-bold text-2xl  font-heading  md:text-3xl  text-center mb-9  ">
          Contact us to provide a custom solution for you
        </span>
        <Button
          text={`Get In Touch`}
          className={`w-[200px] text-sm bg-background-light border border-background-footer_black 
          rounded-xl  hover:bg-background-gold hover:border-none `}
          modalContent={
            <div>
              <BusinessForm />
            </div>
          }
        />
      </section>
    </div>
  );
}
