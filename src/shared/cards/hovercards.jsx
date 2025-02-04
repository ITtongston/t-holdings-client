import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../buttons/button";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function HoverCards({
  cards = [],
  cards2 = [],
  className,
  className2,
}) {
  return (
    <div
      className={`  gap-x-3  gap-y-4 md:grid-cols-2  w-full  mx-uto   h-[fixed]`}
    >
      <section
        className={`grid grid-cols-1  md:grid-cols-3  lg:grid-cols-4 gap-y-5 gap-x-[2rem] w-full   p-2 md:p-8  mx-auto justify-center items-center ${className}`}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden    w-full  md:w-[280px]  h-[280px] flex flex-col gap-y-5 justify-center items-center p-1  ${
              index === 4 ? "lg:col-span-4 mx-auto self-center" : ""
            }`}
            style={{
              backgroundImage: `url(${card.bg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <span className="font-heading text-2xl text-white font-bold md:text-3xl text-center text-wrap   md:w-[80%]">
              {card.title}
            </span>
            <span className="font-body text-lg text-white font-normal md:text-xl text-center  md:w-[50%]">
              {card.heading}
            </span>
            <Image
              src={card.icon}
              width={50}
              height={50}
              alt={card.title}
              className=""
            />
            <div className="overlay-text flex flex-col gap-y-5 justify-center px-4 items-start absolute top-0 left-0    w-full  md:w-[280px] h-[300px] bg-black   opacity-0 transform ease-in-out duration-700 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 group-hover:transform group-hover:duration-700 *:group-hover:ease-in-out">
              <p className="text-white font-body text-sm    md:text-sm">
                {card.biz_description}
              </p>
              <div className="buttons-container flex flex-col gap-y-5 p-2">
                <Link
                  href={card.route}
                  className="text-white font-bold font-body text-sm"
                >
                  Learn More
                </Link>
                <a
                  href={card.file_ref} // Ensure this is the correct file path
                  download
                >
                  <Button
                    text={`Get Brochure`}
                    icon={faDownload}
                    className={`text-black bg-background-light hover:bg-background-gold rounded-lg  `}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
      {/* <section
        className={`flex flex-col relative   md:right-[5rem] gap-y-8 pt-8 justify-start items-start ${className2}`}
      >
        {cards2.map((card, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden px-2   w-full   md:w-[400px]   md:self-end  h-[300px] flex flex-col gap-y-5 justify-center items-center `}
            style={{
              backgroundImage: `url(${card.bg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="font-heading text-2xl text-white font-bold md:text-xl text-center">
              {card.title}
            </h3>
            <h3 className="font-body text-3xl text-white font-normal md:text-2xl text-center  md:w-[50%]">
              {card.heading}
            </h3>
            <Image
              src={card.icon}
              width={50}
              height={50}
              alt={card.title}
              className=""
            />
            <div className="overlay-text flex flex-col gap-y-5 justify-center px-4 items-start absolute top-0 left-0 w-[350px]  md:w-[400px] h-[300px] bg-black   opacity-0 transform ease-in-out duration-700 translate-x-full group-hover:opacity-100 group-hover:-translate-x-0 group-hover:transform group-hover:duration-700 *:group-hover:ease-in-out">
              <p className="text-white font-body text-lg md:text-xl">
                {card.biz_description}
              </p>
              <div className="buttons-container flex flex-col gap-y-5 p-2">
                <Link
                  href={card.route}
                  className="text-white font-bold font-heading text-xl"
                >
                  Learn More
                </Link>
                <a
                  href={card.file_ref} // Ensure this is the correct file path
                  className="text-white font-bold font-heading text-xl"
                  download
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        ))}
      </section> */}
    </div>
  );
}
