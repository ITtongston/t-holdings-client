import React from "react";
import HoverCards from "@/shared/cards/hovercards";

export default function BizCards() {
  const card1 = [
    {
      title: "TONGSTON INSTITUTE",
      heading: "Entrepreneurial Education",
      icon: "/assets/Icons/hat.svg",
      bg: "/assets/images/backgrounds/busCard3.png", // Replace with an actual image URL
      biz_description:
        "Our organic apples are freshly picked and packed with nutrients.",
      route: "/t-institute",
      file_ref:
        "/assets/files/_T INSTITUTE TRAINING_BROCHURE December 2023.pptx.pdf",
    },
    {
      title: "TONGSTON COLLEGE",
      heading: "Entrepreneurial Education",
      icon: "/assets/Icons/hat.svg",
      bg: "/assets/images/backgrounds/businessCard5.png", // Replace with an actual image URL
      biz_description:
        "Delicious and healthy carrots for your daily dose of vitamins.",
      route: "/t-college",
      file_ref:
        "/assets/files/LONG FORM - CONSOLIDATED TONGSTON BROCHURE.pptx.pdf",
    },

    {
      title: "TONGSTON VENTURES",
      heading: "Finance",
      icon: "/assets/Icons/finance.svg",
      bg: "/assets/images/backgrounds/busCard2.png", // Replace with an actual image URL
      biz_description:
        "Cutting-edge laptops for all your work and entertainment needs.",
      route: "https://t-ventures.tongston.com",
    },
    {
      title: "TONGSTON MEDIA",
      heading: "Media",
      icon: "/assets/Icons/media.svg", // You can replace this with a different icon for smartphones
      bg: "/assets/images/backgrounds/busCard1.png", // Replace with an actual image URL
      biz_description:
        "Latest smartphones with advanced features and sleek designs.",
      route: "https://t-hub.tongston.com/t-media",
      file_ref: "/assets/files/Tongston Entreprenuership Media Brochure.pdf",
    },
    {
      title: "TONGSTON HOLDINGS",
      heading: "Enterprise",
      icon: "/assets/Icons/hat.svg",
      bg: "/assets/images/backgrounds/busCard4.png", // Replace with an actual image URL
      biz_description:
        "Experience top-quality sound with our premium headphones.",
      route: "/t-holdings",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center mx-auto ">
      <HoverCards cards={card1} className={``} className2={``} />
    </div>
  );
}
