import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade"; // Import effect-fade.css
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const MySwiper = ({ slides }) => {
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1); // Mobile
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setSlidesPerView(3); // Tablet
      } else {
        setSlidesPerView(3); // Desktop
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={30}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      speed={3000}
      effect="fade"
      className="mySwiper relative mb-[5rem] p-4"
    >
      <div className="swiper-button-next !text-yellow cursor-pointer "></div>
      <div className="swiper-button-prev !text-yellow cursor-pointer"></div>
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          className="flex flex-col items-center justify-center   w-full  md:w-[300px]"
        >
          <Image
            priority
            width={500}
            height={500}
            src={slide.image}
            alt={slide.title}
            className="w-[300px] h-48 object-cover mb-4 rounded-xl border border-background-footer_black shadow-2xl "
          />
          <p className="text-lg  md:text-xl  w-[90%] font-semibold text-transparent bg-clip-text bg-gradient-to-br from-background-danger via-background-footer_black to-background-danger">
            {slide.title}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper;
