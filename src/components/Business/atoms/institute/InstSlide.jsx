import React from "react";
import MySwiper from "@/shared/carousels/swiper";

export default function InstSlide() {
  const slides = [
    {
      image: "https://shorturl.at/lqEOW",
      title: "ICT/ Programming Skills Training ",
    },

    {
      image: "https://shorturl.at/tuK59",
      title: "Web & App Development Training for Professionals",
    },
    {
      image: "https://tongston.com/assets/dataCourse-7d562ba8.jpg",
      title: " Data Analytics Training for Professionals",
    },
    {
      image: "https://shorturl.at/eoDKW",
      title: " Data Science Training for Professionals ",
    },
    {
      image: "https://shorturl.at/mtQTU",
      title: " Monitoring & Evaluation Training for NGOs ",
    },
    // ... more slides
  ];

  const slide2 = [
    {
      image: "https://shorturl.at/lqEOW",
      title: "Entrepreneurial Education Consulting for Governments",
    },
    {
      image: "https://shorturl.at/fkzFK",
      title: " Entrepreneurial Education Consulting for Secondary Schools",
    },
    {
      image: "https://shorturl.at/vBIPU",
      title: " Entrepreneurial Education Consulting for Non-Profits ",
    },
    {
      image: "https://shorturl.at/blqwL",
      title: " Cubiculum Design & Development ",
    },
  ];
  return (
    <div className=" h-[fixed] px-4  w-[90%] flex flex-col  gap-y-[2rem]  justify-center items-center      m-9 mx-auto">
      <span className="text-black font-bold text-3xl  font-heading  md:text-4xl  text-center mb-8 ">
        Check out our numerous products & services
      </span>
      <span className="text-black font-bold text-lg  font-heading  md:text-xl  text-center ">
        Training
      </span>
      <section className="swiper-section w-full mb-[0.5rem] ">
        <MySwiper slides={slides} />
      </section>

      <span className="text-black font-bold text-lg  font-heading  md:text-xl  text-center ">
        Consultancy
      </span>
      <section className="swiper-section w-full mb-[0.5rem] ">
        <MySwiper slides={slide2} />
      </section>
    </div>
  );
}
