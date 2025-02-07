import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faDollar,
  faGraduationCap,
  faMagnet,
  faDownload,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@/shared/buttons/button";
import Image from "next/image";
import Link from "next/link";

export default function Highlights() {
  const names = [
    {
      name: "  Alh. Hassan Usman [Enterprise]",
      icon: faMagnet,
    },
    {
      name: "   Mr. Kamri Apollo [Media]",
      icon: faPlayCircle,
    },
    {
      name: " Ms. Halima Ibrahim Abba [Finance]",
      icon: faDollar,
    },
    {
      name: "   Dr. Lukman Raimi [Education]",
      icon: faGraduationCap,
    },
  ];
  return (
    <div className="flex flex-col gap-y-[3rem] justify-center items-start w-full h-[fixed] px-4   md:ml-[4rem] pb-6">
      <section className="highlights-container w-full  mx-auto flex flex-col gap-y-5  mb-[3rem]">
        {/* cards go here */}
        <span className="font-normal font-body  text-base md:text-xl text-black  md:w-[70%]  ">
          TEEM 2024 Highlights
        </span>
        <div className="teem24-container  shadow-xl border-background-footer_black border rounded-lg   w-full h-[fixed]  md:max-w-[90%]  md:max-h-[500px] grid grid-cols-1  gap-y-5 gap-x-[1rem]   md:grid-cols-2 justify-center items-start overflow-hidden ">
          <section className="youtube-iframe-container w-full ">
            <iframe
              className="w-full "
              height="400"
              src="https://www.youtube.com/embed/1-SJpZrzG2U?si=XrpoJEgk6v9p6BAS"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </section>
          <section className="contents-section w-full h-[400px]  overflow-y-auto  flex flex-col gap-y-6 py-5 px-4">
            <a href="/assets/files/Teem 2024_.pdf" download>
              {" "}
              <h4 className="text-black font-bold underline  font-heading text-lg md:text-xl">
                2024 Tongston Entrepreneurial Education Magazine (#TEEM24) IS
                HERE! GRAB A COPY NOW!
              </h4>
            </a>
            <p className="text-black font-body  text-sm md:text-lg font-medium ">
              The long-awaited Tongston Entrepreneurial Education Magazine
              (#TEEM24) is here!
            </p>
            <p className="text-black font-body  text-base md:text-lg">
              Dive into a wealth of knowledge and insights curated just for you
              across enterprise, finance, media and education. Learn more about
              Tongston’s unique product suite for people, individuals and
              governments globally across technology, finance, media, education,
              data & research and more.
            </p>
            <p className="text-black font-body  text-base md:text-lg">
              Our cover story includes highlights from industry leaders across
              media, education, enterprise and finance:
            </p>
            <span className="flex flex-col gap-y-5">
              {names.map((item, idx) => (
                <ol
                  key={idx}
                  className="list-noe flex flex-row gap-x-5 justify-start items-start  w-full px-4 "
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-red text-xs"
                  />
                  <li className="text-black font-body text-sm md:text-base">
                    {item.name}
                  </li>
                </ol>
              ))}
            </span>
            <section className="button-section col-span-1 w-full px-4  ">
              <a href="/assets/files/Teem 2024_.pdf" download>
                {" "}
                <Button
                  text={`Grab a Copy`}
                  icon={faDownload}
                  className={` bg-background-light    rounded-xl   hover:bg-background-gold  
             
             w-[200px] h-[50px] border border-background-footer_black text-sm hover:border-none  `}
                />
              </a>
            </section>
          </section>
        </div>
      </section>

      {/* section-2 for virtual sr */}
      <div className="teem24-container   mb-[3rem] shadow-xl border-background-footer_black border rounded-lg   w-full h-[fixed]  md:max-w-[90%]  md:max-h-[380px] grid grid-cols-1  gap-y-5 gap-x-[1rem]   md:grid-cols-2 justify-center items-start overflow-hidden ">
        <section className="image-container w-full h-[fixed] ">
          <Image
            src={`/assets/images/backgrounds/mobileXR.png`}
            alt="mobile-xr"
            width={500}
            height={500}
            priority
            className=" object-cover w-full h-full   md:h-[400px]"
          />
        </section>
        <section className="contents-section w-full h-[400px]  overflow-y-auto  flex flex-col gap-y-6 py-5 px-4">
          <h4 className="text-black font-medium  font-heading text-XL md:text-2xl">
            TECHNOLOGY
          </h4>
          <a href="#">
            {" "}
            <p className="text-black font-body  text-base md:text-xl font-bold underline">
              From Sci-Fi to Reality: How Mobile XR is Reshaping Digital
              Experiences
            </p>
          </a>
          <p className="text-black font-body  text-base md:text-lg">
            In recent years, the world of technology has witnessed unprecedented
            advancements, pushing the boundaries of what was once considered
            science fiction. One such remarkable innovation is Extended Reality
            (XR), a fusion of virtual reality (VR), augmented reality (AR), and
            mixed reality (MR).
          </p>
        </section>
      </div>
      {/* section 3 discover events section */}

      <div className="flex flex-col gap-y-5 justify-start items-start  w-full   mb-[3rem]">
        <h5 className="text-black font-heading  text-xl md:text-2xl font-black ">
          Discover Exciting Events Near You!
        </h5>

        <div
          className="discover-container  shadow-xl border-background-footer_black border rounded-lg   w-full   md:max-w-[90%]  h-[300px] grid    justify-center items-start overflow-hidden  relative"
          style={{
            background: `url("/assets/images/backgrounds/insight-discover.png")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute top-0 left-0 bg-black bg-opacity-20 flex justify-start px-4 items-start w-full h-full">
            <Link href={`/events`} className="mt-auto  mb-[3rem]">
              {" "}
              <Button
                text={`Take Me There`}
                icon={faChevronRight}
                className={` bg-background-danger text-white    rounded-md    hover:bg-background-light  
             
             w-[200px] h-[50px] border border-background-footer_black text-sm hover:border-none  hover:text-black `}
              />
            </Link>
          </div>
        </div>
      </div>
      {/* section 4 for recent posts */}
      <div className="flex flex-col gap-y-5 justify-start items-start  w-full   mb-[3rem]">
        <h5 className="text-black font-heading  text-xl md:text-2xl font-black ">
          Recent Posts
        </h5>
        <div className="grid grid-cols-1   md:grid   md:grid-cols-2 gap-y-5  gap-x-[1.5rem] w-full h-[fixed] justify-center items-center">
          <section className="execute-section w-full h-[fixed] flex flex-col gap-y-2 justify-start items-start mb-auto ">
            <Image
              src={`/assets/images/backgrounds/in-careerGoals.png`}
              priority
              width={600}
              height={600}
              className="w-full h-full object-contain  md:h-[500px]  md:object-cover rounded-md"
            />
            <h4 className="text-red font-body text-sm md:text-base">Event</h4>
            <a href="#">
              {" "}
              <p className="font-body font-bold text-lg  md:text-xl text-black underline">
                Execute your Career Goals
              </p>
            </a>
          </section>

          {/* section 2 */}
          <div className="grid grid-cols-1  gap-y-5  w-full   md:w-[70%] h-[fixed] justify-start items-start">
            <section className="execute-section w-full h-[fixed] flex flex-col gap-y-2 justify-start items-start ">
              <Image
                src={`/assets/images/backgrounds/mobileXR.png`}
                priority
                width={600}
                height={600}
                className="w-full    h-[220px]        md:h-[250px] object-cover rounded-md"
              />
              <h4 className="text-red font-body text-sm md:text-base">Event</h4>
              <a href="#">
                {" "}
                <p className="font-body font-bold text-lg  md:text-xl text-black underline">
                  From Sci-Fi to Reality: How Mobile XR is Reshaping Digital
                  Experiences
                </p>
              </a>
            </section>

            {/* image section 2 */}
            <section className="execute-section w-full h-[fixed] flex flex-col gap-y-2 justify-start items-start ">
              <Image
                src={`/assets/images/backgrounds/growthBis.png`}
                priority
                width={600}
                height={600}
                className="w-full    h-[220px]        md:h-[250px] object-cover rounded-md"
              />
              <h4 className="text-red font-body text-sm md:text-base">Event</h4>
              <a href="#">
                {" "}
                <p className="font-body font-bold text-lg  md:text-xl text-black underline">
                  5 Essential Strategies for Small Business Growth: Insights
                  from a Business Consulting Expert
                </p>
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
