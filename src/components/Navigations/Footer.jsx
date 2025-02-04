import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faFacebook,
  faLinkedin,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Accordion3 from "@/shared/accordions/Accordion1";

export default function Footer() {
  const business = [
    { name: "Tongston Holdings", to: "/t-holdings" },
    { name: "Tongston Institute", to: "/t-institute" },
    { name: "Tongston Media", to: "https://t-hub.tongston.com/t-media" },
    { name: "Tongston College ", to: "/t-college" },
  ];

  const company = [
    { name: "About", to: "/about" },
    { name: "Careers", to: "/careers" },
    // { name: "Tees2025", to: "https://tees25.tongston.com" },
  ];

  const support = [
    { name: "Contact Us", to: "/contact" },
    { name: "Privacy  Policy", to: "#" },
  ];

  const resources = [
    {
      name: "Tongston Entrepreneurial Thinking Podcast ",
      to: "https://open.spotify.com/show/5myLgem74ziFBazrQjgbLZ",
    },
  ];

  // mobile footer
  const footer_accordion = [
    {
      title: "Business ",
      links: [
        { name: "Tongston Holdings", to: "/t-holdings" },
        { name: "Tongston Institute", to: "/t-institute" },
        { name: "Tongston Media", to: "https://t-hub.tongston.com/t-media" },
        { name: "Tongston College ", to: "/t-college" },
      ],
    },
    {
      title: "Company ",
      links: [
        { name: "About", to: "/about" },
        { name: "Careers", to: "/careers" },
        // { name: "Tees2025", to: "https://tees25.tongston.com" },
      ],
    },
    {
      title: "Support ",
      links: [
        { name: "Contact Us", to: "/contact" },
        { name: "Privacy  Policy", to: "#" },
      ],
    },

    {
      title: "Resources ",
      links: [
        {
          name: "Tongston Entrepreneurial Thinking Podcast ",
          to: "https://open.spotify.com/show/5myLgem74ziFBazrQjgbLZ",
        },
      ],
    },
  ];

  const socialMediaLinks = [
    { icon: faLinkedin, link: "https://www.linkedin.com/company/tongston" },
    {
      icon: faFacebook,
      link: "https://web.facebook.com/tongstoncompany/?_rdc=1&_rdr",
    },
    { icon: faXTwitter, link: "https://twitter.com/tongstoncompany" },
    { icon: faInstagram, link: "https://www.instagram.com/tongstoncompany/" },
    {
      icon: faYoutube,
      link: "https://www.youtube.com/@tongstonentrepreneurshipgr7",
    },
  ];
  return (
    <div className="w-full flex flex-col   md:justify-center md:items-center  md:max-h-full py-8  md:py-0  bg-background-footer_black mx-auto ">
      <div className="footer-links-container    w-full h-[fixed]  hidden  px-[4rem] py-8   lg:grid lg:grid-cols-4  gap-x-[4rem] lg:mx-auto  lg:justify-center lg:items-start  ">
        <section className="business-section flex flex-col gap-y-5 justify-start items-start  w-full h-[fixed]">
          <span className="font-heading text-white font-bold text-lg  md:text-xl">
            Our Businesses
          </span>
          {business.map((link) => (
            <Link
              href={link.to}
              key={link.name}
              className=" flex flex-row gap-x-4  w-full "
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-yellow  font-bold  text-xs"
              />
              <span
                className={`text-white font-body transform duration-700 ease-in-out `}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </section>

        <section className="company-section flex flex-col gap-y-5 justify-start items-start  w-full h-[fixed]">
          <span className="font-heading text-white font-bold text-lg  md:text-xl">
            Company
          </span>
          {company.map((link) => (
            <Link
              href={link.to}
              key={link.name}
              className=" flex flex-row gap-x-4 "
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-yellow  font-bold  text-xs"
              />
              <span
                className={`text-white font-body transform duration-700 ease-in-out `}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </section>

        <section className="support-section flex flex-col gap-y-5 justify-start items-start  w-full h-[fixed]">
          <span className="font-heading text-white font-bold text-lg  md:text-xl">
            Support
          </span>
          {support.map((link) => (
            <Link
              href={link.to}
              key={link.name}
              className=" flex flex-row gap-x-4 "
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-yellow  font-bold  text-xs"
              />
              <span
                className={`text-white font-body transform duration-700 ease-in-out `}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </section>

        <section className="resources-section flex flex-col gap-y-5 justify-start items-start  w-full h-[fixed]">
          <span className="font-heading text-white font-bold text-lg  md:text-xl">
            Resources
          </span>
          {resources.map((link) => (
            <Link
              href={link.to}
              target="_blank"
              key={link.name}
              className=" flex flex-row gap-x-4 "
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-yellow  font-bold  text-xs"
              />
              <span
                className={`text-white font-body transform duration-700 ease-in-out `}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </section>
      </div>
      <div className="w-full  lg:w-[90%] border-t border-t-white   border-opacity-20   h-[fixed] p-2    flex  flex-col  gap-y-5   lg:flex-row pb-9  ">
        <section className="mobile-footer w-full h-[fixed] pb-6 lg:hidden">
          <Accordion3 accordions={footer_accordion} />
        </section>
        <section className="copyright-container w-full  ml-[0.5rem]  md:ml-0   md:mt-auto md:mb-5   order-3    md:order-none ">
          <span className={` text-opacity-40`}>
            <span>
              &copy; Tongston {new Date().getFullYear()} All Rights Reserved
            </span>
          </span>
        </section>
        <div className="flex flex-col gap-y-1 justify-center items-center mr-auto  lg:mr-0 ">
          <section className="socials-container w-[fixed] flex    flex-row gap-x-3 justify-start items-start ">
            {socialMediaLinks.map((links, index) => (
              <Link key={index} href={links.link} target="_blank">
                <FontAwesomeIcon
                  icon={links.icon}
                  className="text-gray-100 text-base border border-yellow rounded-[100%] p-2  hover:text-yellow-600 ease-in-out transform duration-700"
                />
              </Link>
            ))}
          </section>
          <div className="h-[fixed] w-full     lg:p-2 flex flex-col justify-start items-start  gap-y-5 mb-5  mr-[1.8rem] lg:mr-0">
            <Link href={`/`}>
              <Image
                src="/assets/images/logos/tlogo.png"
                alt="Logo"
                width={200}
                height={100}
                className=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
