import Button from "@/shared/buttons/button";
import Link from "next/link";
import React from "react";

export default function Explore() {
  const card_data = [
    {
      route: "/t-holdings",
      content: "Impact /Sustainability Design & Assessment",
      color: "#191970",
      text_color: "white",
    },
    {
      route: "/t-holdings",
      content: "Data Analysis consulting",
      color: "#191970",
      text_color: "white",
    },
    {
      route: "/t-holdings",
      content: "Data science Consulting",
      color: "#191970",
      text_color: "white",
    },
    {
      route: "/t-holdings",
      content: "App / Website Design & Development",
      color: "#191970",
      text_color: "white",
    },
    {
      route: "/t-holdings",
      content: "Software solutions - Cloud AI Business Solutions",
      color: "#191970",
      text_color: "white",
    },
    {
      route: "/t-institute",
      content:
        "Monitoring, evaluation & Learning [Base-Line, Mid-Line & End-Line Process Evaluation]",
      color: "#5a5aad",
      text_color: "white",
    },
    {
      route: "/t-institute",
      content: "]ICT & Programming Skills Training",
      color: "#5a5aad",
      text_color: "white",
    },
    {
      route: "https://t-hub.tongston.com/media",
      content:
        "Branding- Online Presence[Social media Presence ; Website);collateral; Logo; Promotional Material ]",
      color: "#5a5aad",
      text_color: "white",
    },
    {
      route: "https://t-hub.tongston.com/media",
      content:
        "Multimedia Content Production [3D Animation; 3D Animation; Documentaries; Introduction videos]",
      color: "#5a5aad",
      text_color: "white",
    },
    {
      route: "#",
      content: "Virtual Office & Workspace Solutions",
      color: "#5a5aad",
      text_color: "white",
    },
    {
      route: "#",
      content: "Training & Meeting room Solutions",
      color: "#008b8b",
      text_color: "white",
    },
    {
      route: "/t-institute",
      content: "Curriculum Design & Development Consulting",
      color: "#008b8b",
      text_color: "white",
    },
    {
      route: "/t-institute",
      content:
        "Educational Curriculum Design Delivery , Monitoring & Evaluation &and Showcase",
      color: "#008b8b",
      text_color: "white",
    },
    {
      route: "/t-holdings",
      content: "E-learning Content Production & Platform Development",
      color: "#008b8b",
      text_color: "white",
    },
    {
      route: "https://t-hub.tongston.com/media",
      content: "Documentation & Production for Marketing & Legacy Showcase",
      color: "#008b8b",
      text_color: "white",
    },
    {
      route: "/t-holdings",
      content: "Industry & Market Research",
      color: "#7878f5",
      text_color: "white",
    },
    {
      route: "#",
      content: "MSME Intervention Design & Deployment",
      color: "#7878f5",
      text_color: "white",
    },
    {
      route: "#",
      content: "Business Advisory",
      color: "#7878f5",
      text_color: "white",
    },
    {
      route: "#",
      content: "Governance Advisory",
      color: "#7878f5",
      text_color: "white",
    },
  ];
  return (
    <div
      className="w-full h-[400px] flex flex-col justify-center items-center overflow-hidden  mb-[80px]"
      style={{
        backgroundImage: `url("/assets/images/backgrounds/productBg.png")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container flex flex-col gap-y-3 justify-center items-center w-full h-[fixed] mt-8 ">
        <span className="text-white  font-semibold  text-3xl  font-heading  md:text-4xl  text-center ">
          Explore Our Services
        </span>
        <Button
          text={`Explore Now`}
          className={` border border-white bg-transparent text-white font-bold  rounded-md hover:bg-white  hover:text-black `}
          modalContent={
            <span className="w-full max-h-screen p-2 pb-4  py-[4rem] grid grid-cols-2  md:grid-cols-3  justify-center items-start gap-x-5 gap-y-5">
              {/* render the modal in here */}
              {card_data.map((card, index) => (
                <Link
                  key={index}
                  href={card.route}
                  className={`w-[150px]   h-[150px]  rounded-lg shadow-2xl flex justify-center items-center `}
                  style={{
                    background: card.color,
                  }}
                >
                  <p
                    className="text-center text-sm px-2"
                    style={{
                      color: card.text_color,
                    }}
                  >
                    {card.content}
                  </p>
                </Link>
              ))}
            </span>
          }
        />
      </div>
    </div>
  );
}
