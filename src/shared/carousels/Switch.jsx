import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Switch({
  teams = [],
  itemsToShowDesktop = 4,
  itemsToShowMobile = 1,
  itemsToShowTablet = 3,
  prevIcon,
  nextIcon,
  className = "",
  className2,
}) {
  const [index, setIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(itemsToShowDesktop);

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = () => {
    if (index + itemsToShow < teams.length) setIndex(index + 1);
  };

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(itemsToShowMobile); // Mobile
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setItemsToShow(itemsToShowTablet); // Tablet
      } else {
        setItemsToShow(itemsToShowDesktop); // Desktop
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Update on resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, [itemsToShowDesktop, itemsToShowMobile, itemsToShowTablet]);

  const visibleItems = teams.slice(index, index + itemsToShow);

  return (
    <div className={`relative w-full pb-10 py-10 px-5 ${className}`}>
      <div className="flex justify-center items-center gap-x-5 w-full">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className={`text-lg flex justify-center items-center p-2 rounded-full w-7 h-7 ${
            index === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-yellow bg-white hover:text-white text-black"
          }`}
          disabled={index === 0}
        >
          {prevIcon || <FontAwesomeIcon icon={faArrowLeft} />}
        </button>

        {/* Visible Items */}
        <div className="flex gap-x-[2rem] justify-center items-center w-full">
          {visibleItems.map((team, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-y-4 w-[300px] lg:px-6 md:w-[265px] items-center justify-center  md:justify-start md:items-start relative group h-[fixed]"
            >
              <Image
                src={team.avatar}
                alt={team.name}
                width={800}
                height={800}
                priority
                className="rounded-[100%] w-[300px] h-[230px]   lg:w-[250px] lg:h-[200px] object-contain   md:object-cover "
              />
              <span className="text-black font-bold font-heading text-lg md:text-sm">
                {team.name}
              </span>
              <section className={`flex gap-x-5   ${idx === 4 ? "" : ""}`}>
                <p className="text-red font-semibold text-sm text-body   text-center md:text-left">
                  {team.bio}
                </p>
                <Link href={team.profileurl} target="_blank">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-xl text-blue-700"
                  />
                </Link>
              </section>

              <div
                className={`team-description-container absolute top-0 left-0 p-4 w-full max-h-[280px] 
                opacity-0 transform duration-700 md:group-hover:opacity-100 group-hover:scale-105
                group-hover:-translate-y-10 bg-black bg-opacity-100   ${className2}`}
              >
                <p className="text-white text-xs">{team.bio_description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className={`text-lg flex justify-center items-center p-2 rounded-full ${
            index + itemsToShow >= teams.length
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-yellow bg-white hover:text-white text-black"
          }`}
          disabled={index + itemsToShow >= teams.length}
        >
          {nextIcon || <FontAwesomeIcon icon={faArrowRight} />}
        </button>
      </div>
    </div>
  );
}
