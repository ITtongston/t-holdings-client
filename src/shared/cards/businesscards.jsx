import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BusinessCards({
  cards = [],
  className,
  itemsToShowDesktop = 3,
  itemsToShowMobile = 1,
  itemsToShowTablet = 2,
}) {
  const [currentIndex, setCurrentIndex] = useState(0); // Use currentIndex for clarity
  const [itemsToShow, setItemsToShow] = useState(itemsToShowDesktop);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + itemsToShow < cards.length) {
      setCurrentIndex(currentIndex + 1);
    }
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

  const visibleItems = cards.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <div className="flex flex-col gap-y-4 justify-center items-start p-2 px-4 md:px-[4rem] w-full  ">
      <section className="explore-text-container w-full h-[fixed]">
        <span className="text-black font-bold text-3xl md:text-4xl">
          Explore how
        </span>
      </section>

      <section
        className={`cards-section justify-center items-start flex overflow-x-auto md:grid md:grid-cols-${itemsToShow}  gap-x-[3rem] md:justify-between md:items-center md:overflow-x-auto md:w-full h-[fixed]`}
      >
        {visibleItems.map((card, index) => (
          <div
            key={index}
            className={`w-[320px] md:w-full h-[fixed] flex flex-col gap-y-4 justify-start items-start md:overflow-x-hidden ${className}`}
          >
            <p className="text-black font-body text-lg md:text-xl font-medium ">
              {card.text}
            </p>
            <Image
              priority
              width={500}
              height={500}
              src={card.avatar}
              className="object-contain w-full h-[300px]  md:rounded-[100%]  md:w-[300px] md:object-fill "
            />
          </div>
        ))}
      </section>
      <section className="buttons-container lg:invisible   flex flex-row gap-x-3 justify-start items-start ">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className={`text-3xl p-2 rounded-full ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "  text-black"
          }`}
          disabled={currentIndex === 0}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {/* Next Button */}
        <button
          onClick={handleNext}
          className={`text-3xl p-2 rounded-full ${
            currentIndex + itemsToShow >= cards.length
              ? "opacity-50 cursor-not-allowed"
              : " text-black"
          }`}
          disabled={currentIndex + itemsToShow >= cards.length}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </section>
    </div>
  );
}
