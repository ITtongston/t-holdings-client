import React from "react";
import Button from "@/shared/buttons/button";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function PastEvent() {
  const event_data = [
    {
      dum_btn: "In-Person & Virtual Event",
      title: <span>Nigeria Investment Summit Panel Part 2</span>,
      location: "Park Plaza",
      date: "Nov 2, 2022",
      route: "https://www.youtube.com/watch?v=QDxUEt3gFHc",
      avatar: "/assets/images/events/pe1.png",
    },
    {
      dum_btn: "Virtual Event",
      title:
        "The Tongston Ultimate Guide to Accessing Funds for a business/passion",
      location: "Zoom webinar",
      date: "July 27, 2022",
      route: "https://www.youtube.com/watch?v=Su4gUKXR3BE&t=7s",
      avatar: "/assets/images/events/pe2.png",
    },
    // Add other event objects here...
    {
      dum_btn: "Virtual Event",
      title: "Nigeria Investment Summit Panel Part 3",
      location: "Online",
      date: "Dec 12, 2022",
      route: "https://www.youtube.com/watch?v=QDxUEt3gFHc",
      avatar: "/assets/images/events/pe3.png",
    },

    {
      dum_btn: "In-Person & Virtual Event",
      title:
        "Tongston speaks at the Northeast University Students Peace Conference",
      location: "Northeast university",
      date: "Nov 11, 2022",
      route: "https://www.youtube.com/watch?v=ZLZBbY9E8ME",
      avatar: "/assets/images/events/pe4.png",
    },

    {
      dum_btn: "In-Person & Virtual Event",
      title:
        "Tongston SOSF International Day of Women and Girls in Science Competition",
      location: "KaftenTv",
      date: "Nov 11, 2022",
      route: "https://www.youtube.com/watch?v=ZLZBbY9E8ME",
      avatar: "/assets/images/events/pe5.png",
    },

    {
      dum_btn: "Virtual Event",
      title:
        "Future of Education Summit 2022: How to incorporate entrepreneurship thinking",
      location: "CNBC",
      date: "Nov 13, 2022",
      route: "https://www.youtube.com/watch?v=ZLZBbY9E8ME",
      avatar: "/assets/images/events/pe6.png",
    },

    {
      dum_btn: "In-Person Event",
      title: "Education 2.0: Speaker Session - Engr. Bello Tongo",
      location: "Dubai",
      date: "March 23, 2022",
      route: "https://www.youtube.com/watch?v=ZLZBbY9E8ME",
      avatar: "/assets/images/events/pe7.png",
    },

    {
      dum_btn: "In-Person Event",
      title:
        "Start-up Session: Engr. Bello Tongo, CEO, Tongston Entrepreneurship Group",
      location: "Dubai",
      date: "March 23, 2022",
      route: "https://www.youtube.com/watch?v=ZLZBbY9E8ME",
      avatar: "/assets/images/events/pe8.png",
    },

    {
      dum_btn: "In-Person Event",
      title: "2022 Global Tongston Entrepreneurial Education Summit",
      location: "Education Summit",
      date: "Sept 1, 2022",
      route: "https://www.youtube.com/watch?v=ZLZBbY9E8ME",
      avatar: "/assets/images/events/pe9.png",
    },

    {
      dum_btn: "Virtual Event",
      title:
        "The Tongston Entrepreneurial Thinking Podcast - Episode One Introduction",
      location: "Youtube Podcast",
      date: "une 12, 2022",
      route: "https://www.youtube.com/watch?v=ZLZBbY9E8ME",
      avatar: "/assets/images/events/pe10.png",
    },

    {
      dum_btn: "Virtual Event",
      title: "Teachers, Re-imagine The Future (Tongston Webinar)",
      location: "Youtube",
      date: "Nov 25, 2022",
      route: "https://www.youtube.com/watch?v=ZLZBbY9E8ME",
      avatar: "/assets/images/events/pe11.png",
    },

    {
      dum_btn: "Virtual Event",
      title: "2022 SOSF LEAD4CHANGE INNOVATORS INITIATIVE PITCH EVENT",
      location: "Youtube",
      date: "Dec 17, 2022",
      route: "https://www.youtube.com/watch?v=ZLZBbY9E8ME",
      avatar: "/assets/images/events/pe12.png",
    },
    {
      dum_btn: "Virtual Event",
      title: "TONGSTON ENTREPRENEURIAL EDUCATION SUMMIT 2023",
      location: "Zoom",
      date: "Dec 9, 2023",
      route: "https://www.youtube.com/watch?v=UlaC9YMPA8k&t=13607s",
      avatar: "/assets/images/events/pe13.jpg",
    },
    {
      dum_btn: "In-Person Event",
      title: "DATA ANALYSIS CRASH COURSE",
      location: " 16 Emeka Anyaku Street, Area 11, Abuja",
      date: "Sep 30th, 2023",
      route: "https://www.youtube.com/watch?v=ZLZBbY9E8ME",
      avatar: "/assets/images/events/pe14.jpg",
    },
  ];

  return (
    <div
      className="w-full        h-[500px]  md:h-[600px] flex flex-col gap-y-6   justify-center items-center relative"
      style={{
        background: `url("/assets/images/pastEventBg.png")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="title-container w-full flex justify-center items-center  mt-8">
        <span className="font-bold font-heading text-3xl md:text-4xl text-black">
          PAST EVENTS
        </span>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={4000}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-[90%] px-4 "
        style={{
          height: "500px",
        }}
      >
        {event_data.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="  w-full  md:max-w-[350px] p-3 h-[350px] rounded-md flex flex-col gap-y-5 justify-start items-start bg-background-light">
              <p className="w-[250px]  text-red mr-auto text-left bg-transparent  ">
                {event.dum_btn}
              </p>
              <h5 className="text-black font-bold font-heading text-lg md:text-xl">
                {event.title}
              </h5>
              <span className="text-black font-bold font-heading text-base md:text-lg">
                Location: <span className="font-normal">{event.location}</span>
              </span>
              <span className="text-black font-bold font-heading text-base md:text-lg">
                Date: <span className="font-normal">{event.date}</span>
              </span>
              <div className="route-view-all-section flex flex-row gap-x-2 justify-start items-center">
                <Link href={event.route} target="_blank">
                  <span className="text-red font-semibold">
                    View Event{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-red text-lg -rotate-45"
                    />
                  </span>
                </Link>
              </div>
              <Image
                priority
                src={event.avatar}
                alt="Event Avatar"
                width={200}
                height={200}
                className="rounded-full w-[160px] h-[150px] self-center relative bottom-[3rem] left-[8rem] invisible  md:visible "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
