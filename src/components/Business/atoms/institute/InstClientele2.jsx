import React from "react";
import Marquees from "@/shared/carousels/marquee";
import Button from "@/shared/buttons/button";
import BusinessForm from "@/shared/(Forms)/businessform";

export default function InstClientele2() {
  const clients = [
    {
      direction: "right",
      images: [
        "/assets/images/business/t-institute/slider2/client1.png",
        "/assets/images/business/t-institute/slider2/client2.png",
        "/assets/images/business/t-institute/slider2/client3.png",
        "/assets/images/business/t-institute/slider2/client4.png",
        "/assets/images/business/t-institute/slider2/client5.png",
        "/assets/images/business/t-institute/slider2/client6.png",
        "/assets/images/business/t-institute/slider2/client7.png",
        "/assets/images/business/t-institute/slider2/client8.png",
        "/assets/images/business/t-institute/slider2/client9.png",
        "/assets/images/business/t-institute/slider2/client10.png",
        "/assets/images/business/t-institute/slider2/client11.png",
        "/assets/images/business/t-institute/slider2/client12.png",
        "/assets/images/business/t-institute/slider2/client13.png",
        "/assets/images/business/t-institute/slider2/client14.png",
        "/assets/images/business/t-institute/slider2/client15.png",
        "/assets/images/business/t-institute/slider2/client16.png",
        "/assets/images/business/t-institute/slider2/client17.png",
        "/assets/images/business/t-institute/slider2/client18.png",
        "/assets/images/business/t-institute/slider2/client19.png",
        "/assets/images/business/t-institute/slider2/client20.png",
        "/assets/images/business/t-institute/slider2/client21.png",
        "/assets/images/business/t-institute/slider2/client23.png",
        "/assets/images/business/t-institute/slider2/client24.png",
        "/assets/images/business/t-institute/slider2/client25.png",
        "/assets/images/business/t-institute/slider2/client26.png",
      ],
    },
  ];
  return (
    <div className="w-full h-[fixed] flex flex-col justify-center  items-center   mb-9">
      <span className="text-black font-bold text-lg  font-heading  md:text-xl  text-center mb-9  md:w-[60%] ">
        our individual clientele work for several leading public, private &
        non-profit institutions
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
