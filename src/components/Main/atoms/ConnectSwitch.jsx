import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faYoutube,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCommentDots,
  faPhoneAlt,
  faPodcast,
  faPen,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function SocialLinks() {
  const [index, setIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(5); // Default is 5 for larger screens

  const items = [
    {
      route: "https://www.instagram.com/tongstoncompany/",
      icon: faInstagram,
      text: "Follow Us on Instagram",
    },
    {
      route: "https://www.youtube.com/@tongstonentrepreneurshipgr7",
      icon: faYoutube,
      text: "Subscribe to our Youtube Page",
    },
    {
      route: "https://web.facebook.com/tongstoncompany/?_rdc=1&_rdr",
      icon: faFacebook,
      text: "Check out our Facebook Page",
    },
    {
      route: "https://twitter.com/tongstoncompany",
      icon: faXTwitter,
      text: "Follow Us on X",
    },
    {
      route: "https://www.linkedin.com/company/tongston/",
      icon: faLinkedin,
      text: "Find Us on LinkedIn",
    },
    {
      route: "https://tongston.com/contact",
      icon: faCommentDots,
      text: "Chat with Us",
    },
    {
      route: "tel:02907003084",
      icon: faPhoneAlt,
      text: "Call Us On 02907003084",
    },
    {
      route: "https://open.spotify.com/show/5myLgem74ziFBazrQjgbLZ",
      icon: faPodcast,
      text: "Listen to Our Podcast",
    },
    {
      route: "mailto:info@tongston.com",
      icon: faPen,
      text: "Write to Us via Email",
    },
  ];

  const visibleItems = items.slice(index, index + itemsToShow);

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = () => {
    if (index + itemsToShow < items.length) setIndex(index + 1);
  };

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(3); // Show 2 items on smaller screens
      } else {
        setItemsToShow(5); // Default for larger screens
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Update on resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <div className="relative py-10 px-5">
      <div className="flex justify-center items-center space-x-5">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className={`text-2xl p-2 w-10 h-10 flex justify-center items-center  rounded-full ${
            index === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-yellow bg-white hover:text-white text-black"
          }`}
          disabled={index === 0}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        {/* Visible Items */}
        <div className="grid grid-cols-2   gap-x-[2rem] md:grid md:grid-cols-3 gap-y-6 justify-center">
          {visibleItems.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center   ${
                i === 3
                  ? " relative  md:left-[8rem]  "
                  : i === 4
                  ? "relative  md:left-[10rem]"
                  : i === 2
                  ? "relative left-[4.5rem] md:left-[0]"
                  : ""
              }`}
            >
              <Link href={item.route} target="_blank">
                <div className="text-4xl text-black mb-4 bg-background-light  flex justify-center items-center rounded-full  h-16 w-16   md:w-20 md:h-20  shadow-2xl">
                  <FontAwesomeIcon icon={item.icon} className="" />
                </div>
              </Link>
              <p className="text-xs md:text-sm font-body text-white font-medium md:w-[80%]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className={`text-2xl p-2 w-10 h-10 flex justify-center items-center  p-2 rounded-full ${
            index + itemsToShow >= items.length
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-yellow bg-white hover:text-white text-black"
          }`}
          disabled={index + itemsToShow >= items.length}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}
