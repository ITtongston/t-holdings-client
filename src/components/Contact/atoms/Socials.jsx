import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faYoutube,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Socials() {
  const socials = [
    {
      name: "Facebook",
      icon: faFacebook,
      link: "https://web.facebook.com/tongstoncompany/?_rdc=1&_rdr",
    },
    {
      name: "Twitter",
      icon: faXTwitter,
      link: "https://twitter.com/tongstoncompany",
    },
    {
      name: "Instagram",
      icon: faInstagram,
      link: "https://instagram.com/tongstoncompany?igshid=YmMyMTA2M2Y=",
    },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      link: "https://www.linkedin.com/company/tongston/",
    },
    {
      name: "YouTube",
      icon: faYoutube,
      link: "https://www.youtube.com/@tongstonentrepreneurshipgr7",
    },

    {
      name: "Mailchimp",
      icon: faEnvelope,
      link: "mailto:info@tongston.com",
    },
  ];
  return (
    <div className="flex flex-row gap-x-4 justify-start   items-start w-full h-[fixed] p-2 ">
      {socials.map((item) => (
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <div className="flex items-center justify-center w-7 h-7  md:w-9 md:h-9 rounded-full bg-transparent border border-black  transition-all duration-300">
            <FontAwesomeIcon
              icon={item.icon}
              className="text-black text-sm md:text-base"
            />
          </div>
        </a>
      ))}
    </div>
  );
}
