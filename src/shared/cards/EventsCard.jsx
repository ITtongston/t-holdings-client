import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../buttons/button";

export default function EventsCard({
  cards = [],
  className,
  mainClass,
  children,
}) {
  return (
    <div
      className={`  w-full h-[fixed] flex flex-col gap-y-5 justify-start items-start   relative  `}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          className={`      shadow-xl   rounded-lg   w-full  pb-2  h-[fixed]  px-2    md:px-4    md:h-[400px] grid grid-cols-1  gap-y-5 gap-x-[3rem]    md:grid-cols-2 justify-center items-center overflow-hidden         ${className}`}
        >
          <section className="image-container w-full h-[fixed]">
            <Image
              src={card.image}
              alt="Event Image"
              width={500}
              height={500}
              className="w-full h-[250px] object-fill    md:h-[300px]  md:object-contain"
            />
          </section>
          <section className="contents-container w-full flex flex-col gap-y-8 justify-start items-start ">
            <Button
              text={card.dumbtn}
              className={`  bg-gray-200 rounded-md text-black font-bold  w-[100px] h-[50px]
            hover:bg-black hover:text-white `}
            />
            <span className="font-bold font-heading  text-xl  md:text-2xl  text-black">
              {card.title}
            </span>
            <p className="text-lg text-black font-body  md:text-xl">
              {card.description}
            </p>
            <div className="flex flex-row  flex-wrap gap-x-5 justify-start items-start text-black font-body text-sm  md:text-base ">
              <span className="flex flex-row  gap-x-2 justify-start items-center ">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="text-red text-sm"
                />
                <span style={{ fontWeight: "bold" }}>Date:</span> {card.date}
              </span>
              {/* time section */}
              <span className="flex flex-row gap-x-2  justify-center items-center ">
                <FontAwesomeIcon icon={faClock} className="text-red text-sm" />
                <span style={{ fontWeight: "bold" }}>Time:</span> {card.time}
              </span>
              {/* location section */}
              <span className="flex flex-row  gap-x-2 justify-center items-center ">
                <FontAwesomeIcon
                  icon={faLocation}
                  className="text-red text-sm"
                />
                <span style={{ fontWeight: "bold" }}>Location:</span>{" "}
                {card.location}
              </span>
            </div>
            <Button
              text={card.router_btn}
              modalClass={`justify-center items-center`}
              modalContent={
                <span className="flex justify-center self-center items-center">
                  <p className="text-bold text-x2l text-center text-wrap text-black font-black ">
                    Coming Soon Stay Tuned !
                  </p>
                </span>
              }
              className={`rounded-md border border-background-danger  bg-background-light text-red  hover:bg-background-danger hover:text-white  hover:border-none`}
            />
          </section>
        </div>
      ))}
      <div
        className={`w-full h-full absolute top-0 left-0  bg-gray-700 bg-opacity-20 flex justify-center items-center    ${mainClass} `}
      >
        {children}
      </div>
    </div>
  );
}
