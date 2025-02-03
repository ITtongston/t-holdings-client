import React from "react";
import MySwiper from "@/shared/carousels/swiper";

export default function ColSlide() {
  const slides = [
    {
      image: "https://bit.ly/3HvsGvO",
      title: "Career & Business Advisory ",
    },

    {
      image: "https://bit.ly/42cuUtS",
      title: "Entrepreneurial Thinking for Secondary School Students",
    },
    {
      image:
        "https://ayeorganization.com/wp-content/uploads/2022/05/655285-935x624-2.jpg",
      title: " Entrepreneurial Thinking for Primary School Pupils",
    },

    // ... more slides
  ];

  const slides2 = [
    {
      image:
        "https://www.online.colostate.edu/global/images/degrees/Adult-Education-Training-1200.jpg",
      title: "Entrepreneurial Education Consulting for   Secondary Schools ",
    },

    {
      image:
        "https://sidehustles.com/wp-content/uploads/Build-a-portfolio-and-resume-as-a-curriculum-developer.jpg",
      title: "Cubiculum Development for Secondary Schools",
    },

    // ... more slides
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
      <section className="swiper-section w-full mb-[0.5rem] mx-auto    self-end md:ml-[20%]   ">
        <MySwiper slides={slides2} />
      </section>
    </div>
  );
}
