import React from "react";
import MySwiper from "@/shared/carousels/swiper";

export default function Slide1() {
  const slides = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlKSJ5QDhqSG-4elia3L3StKZkww52bY7vDQ&s",
      title: "Monitoring Evaluation & Learning Consulting ",
    },

    {
      image:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2oIp4YFrcG5JwHdA2Cd3hC/0e13c524e5d3bb4d463b8f44ba3d605b/GettyImages-672157207__2_.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000",
      title: "Product Development & Quality Assurance",
    },
    {
      image:
        "https://cdn.careerfoundry.com/en/wp-content/uploads/old-blog-uploads/data-analyst-role.jpg",
      title: " Data Analytics",
    },
    {
      image:
        "https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs10661-022-09803-1/MediaObjects/10661_2022_9803_Fig5_HTML.png",
      title: " IMpact / Sustainability Strategy Design  & Assessment ",
    },
    {
      image:
        "https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/1134000614Researcher.jpg=ws1280x960",
      title: " IResearch ",
    },
    // ... more slides
  ];

  const slides2 = [
    {
      image:
        "https://centraldatatech.com/wp-content/uploads/2024/10/CDT-Cloud-Infrastructure.jpg",
      title: "Software Solutions (Cloud) ",
    },

    {
      image:
        "https://www.expert.ai/wp-content/uploads/2024/10/AdobeStock_820465686-scaled.jpeg",
      title: "AI Business Solutions",
    },
    {
      image: "https://tongston.com/assets/uiux-8b0d0d37.jpeg",
      title: " Web & Mobile Development",
    },
    {
      image:
        "https://mitwpu.edu.in/uploads/blog/The%20Ultimate%20Guide%20to%20Becoming%20a%20Product%20Designer.webp",
      title: " Product Design (UI/UX) ",
    },
    {
      image:
        "https://www.acawebconsulting.com/wp-content/uploads/2019/01/tips-for-finding-SEO-expert-aca-web-consulting.jpeg",
      title: " Search Engine Optimization / Site-Map Development ",
    },
  ];

  const slides3 = [];
  return (
    <div className=" h-[fixed] px-4  w-[90%] flex flex-col  gap-y-[2rem]  justify-center items-center      m-9 mx-auto">
      <span className="text-black font-bold text-3xl  font-heading  md:text-4xl  text-center mb-8 ">
        Check out our numerous products & services
      </span>
      <span className="text-black font-bold text-lg  font-heading  md:text-xl  text-center ">
        Data & Research
      </span>
      <section className="swiper-section w-full mb-[0.5rem] ">
        <MySwiper slides={slides} />
      </section>

      <span className="text-black font-bold text-lg  font-heading  md:text-xl  text-center ">
        Information Technology
      </span>
      <section className="swiper-section w-full mb-[0.5rem] ">
        <MySwiper slides={slides2} />
      </section>

      {/* <span className="text-black font-bold text-base  font-heading  md:text-lg  text-center ">
        Administration
      </span>
      <section className="swiper-section w-full mb-[0.5rem] ">
        <MySwiper slides={slides} />
      </section> */}
    </div>
  );
}
