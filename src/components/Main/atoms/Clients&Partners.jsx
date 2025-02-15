import React from "react";
import Marquee from "@/shared/carousels/marquee";

export default function ClientsPartners() {
  //array of objects for the various clients and images
  const clientele = [
    {
      direction: "left",
      images: [
        "/assets/images/logos/clients/cl37.png",
        "/assets/images/logos/clients/cl38.png",
        "/assets/images/logos/clients/cl39.jpg",
        "/assets/images/logos/clients/cl40.jpg",
        "/assets/images/logos/clients/cl41.png",
        "/assets/images/logos/clients/cl42.png",
        "/assets/images/logos/clients/client0.png",
        "/assets/images/logos/clients/client1.png",
        "/assets/images/logos/clients/client10.png",
        "/assets/images/logos/clients/client11.png",
        "/assets/images/logos/clients/client12.png",
        "/assets/images/logos/clients/client13.png",
        "/assets/images/logos/clients/client14.png",
        "/assets/images/logos/clients/client15.png",
        "/assets/images/logos/clients/client16.png",
        "/assets/images/logos/clients/client17.png",
        "/assets/images/logos/clients/client18.png",
        "/assets/images/logos/clients/client19.png",
        "/assets/images/logos/clients/client2.png",
        "/assets/images/logos/clients/client20.png",
        "/assets/images/logos/clients/client21.png",
        "/assets/images/logos/clients/client22.png",
        "/assets/images/logos/clients/client23.png",
        "/assets/images/logos/clients/client24.png",
        "/assets/images/logos/clients/client25.png",
        "/assets/images/logos/clients/client26.png",
        "/assets/images/logos/clients/client27.png",
        "/assets/images/logos/clients/client28.png",
        "/assets/images/logos/clients/client29.png",
        "/assets/images/logos/clients/client3.png",
        "/assets/images/logos/clients/client30.png",
        "/assets/images/logos/clients/client31.png",
        "/assets/images/logos/clients/client32.png",
        "/assets/images/logos/clients/client33.png",
        "/assets/images/logos/clients/client34.png",
        "/assets/images/logos/clients/client35.png",
        "/assets/images/logos/clients/client36.png",
        "/assets/images/logos/clients/client4.png",
        "/assets/images/logos/clients/client5.png",
        "/assets/images/logos/clients/client6.png",
        "/assets/images/logos/clients/client7.png",
        "/assets/images/logos/clients/client8.png",
        "/assets/images/logos/clients/client9.png",
      ],
    },
  ];

  //awards
  const awards = [
    {
      direction: "right",
      images: [
        "/assets/images/awards/FUELD_SMP-(Individual-Dubai)-Trendsetters-To-Watch_2024_Bello Tongo.jpg",
        "/assets/images/awards/award1.png",
        "/assets/images/awards/award2.png",
        "/assets/images/awards/FUELD_SMP-(Individual-Dubai)-Trendsetters-To-Watch_2024_Bello Tongo.jpg",
        "/assets/images/awards/award3.png",
        "/assets/images/awards/award4.png",
        "/assets/images/awards/award5.png",
        "/assets/images/awards/award6.png",
        "/assets/images/awards/FUELD_SMP-(Individual-Dubai)-Trendsetters-To-Watch_2024_Bello Tongo.jpg",
        "/assets/images/awards/award7.png",
        "/assets/images/awards/award8.png",
        "/assets/images/awards/award1.png",
        "/assets/images/awards/award2.png",
        "/assets/images/awards/FUELD_SMP-(Individual-Dubai)-Trendsetters-To-Watch_2024_Bello Tongo.jpg",
        "/assets/images/awards/award3.png",
        "/assets/images/awards/award4.png",
        "/assets/images/awards/award5.png",
        "/assets/images/awards/award6.png",
        "/assets/images/awards/FUELD_SMP-(Individual-Dubai)-Trendsetters-To-Watch_2024_Bello Tongo.jpg",
        "/assets/images/awards/award7.png",
        "/assets/images/awards/award8.png",
      ],
    },
  ];

  //partners
  const partners = [
    {
      direction: "left",
      images: [
        "/assets/images/logos/partners/partner1.png",
        "/assets/images/logos/partners/partner2.png",
        "/assets/images/logos/partners/partner3.png",
        "/assets/images/logos/partners/partner4.png",
        "/assets/images/logos/partners/partner5.png",
        "/assets/images/logos/partners/partner6.png",
        "/assets/images/logos/partners/partner7.png",
        "/assets/images/logos/partners/partner8.png",
        "/assets/images/logos/partners/partner9.png",
        "/assets/images/logos/partners/partner10.png",
        "/assets/images/logos/partners/partner1.png",
        "/assets/images/logos/partners/partner2.png",
        "/assets/images/logos/partners/partner3.png",
        "/assets/images/logos/partners/partner4.png",
        "/assets/images/logos/partners/partner5.png",
        "/assets/images/logos/partners/partner6.png",
        "/assets/images/logos/partners/partner7.png",
        "/assets/images/logos/partners/partner8.png",
        "/assets/images/logos/partners/partner9.png",
        "/assets/images/logos/partners/partner10.png",
      ],
    },
  ];

  return (
    <div className="w-full h-[fixed] pb-5  bg-background-light flex flex-col gap-y-[4rem]  justify-center items-center py-4   mb-[70px]">
      <section className="clientele-section flex flex-col gap-y-[2rem] justify-center items-center  w-[90%] ">
        <span className="text-black font-bold text-3xl  font-heading  md:text-4xl  text-center ">
          Our Clientele
        </span>
        <Marquee
          marquees={clientele}
          speed={20}
          className={`  h-auto   w-[auto] p-2 md:w-[70%] `}
        />
      </section>
      <section className="awards-section flex flex-col gap-y-[2rem] justify-center items-center w-[90%]">
        <span className="text-black font-bold text-3xl  font-heading  md:text-4xl  text-center ">
          Our Awards & Recognition
        </span>
        <Marquee
          marquees={awards}
          speed={20}
          className={`  h-auto   w-[auto]  md:w-[70%]  p-2 `}
        />
      </section>

      <section className="partners-section flex flex-col gap-y-4 justify-center items-center  w-[90%]">
        <span className="text-black font-bold text-3xl  font-heading  md:text-4xl  text-center ">
          Our Partners & Affiliates
        </span>
        <Marquee
          marquees={partners}
          speed={20}
          className={`  h-[fixed]  md:w-[70%] w-[auto]  `}
          imageClass={`w-[200px]  h-[200px]  object-cover`}
        />
      </section>
    </div>
  );
}
