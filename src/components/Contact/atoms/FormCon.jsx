import ResponsiveHero from "@/shared/containers/responsivehero";
import React from "react";
import Socials from "./Socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Form from "./Form";

export default function FormCon() {
  return (
    <div
      className="w-full h-[fixed] flex flex-col gap-y-5 justify-center items-center self-center  p-2  md:p-9 "
      style={{
        background: `url("/assets/images/backgrounds/contactbg.gif")`,
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full  flex flex-col  p-3 md:flex-row   justify-center items-center  mb-9 ">
        <section className="contacts-locations-container w-full   h-[400px]   md:h-[600px]  shadow-2xl   md:w-[50%] bg-[#e3b52d]  px-4  p-2 flex flex-col gap-y-5  justify-center items-start">
          <h6 className="text-black font-heading font-bold text-xl  md:text-3xl md:ml-[1rem]">
            Contact Information
          </h6>
          <p className="text-black font-body text-sm  md:text-base   md:w-[60%]   md:ml-[1rem]">
            Please fill the form and our team will get back to you shortly
          </p>
          <p className="text-black font-body text-sm  md:text-base w-[60%]   flex flex-row gap-x-3 justify-start items-center  md:ml-[4rem]">
            <FontAwesomeIcon icon={faPhone} className="text-sm text-red" />{" "}
            <a href="tel:02907003084">02907003084</a>
          </p>
          <p className="text-black font-body text-sm  md:text-base md:w-[60%] flex flex-row gap-x-3 justify-start items-center   md:ml-[4rem]">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-sm text-red"
            />{" "}
            4th Floor, Tower C, Churchgate, Central Business District, Abuja,
            Nigeria
          </p>
          <p className="text-black font-body text-sm  md:text-base md:w-[60%] flex flex-row gap-x-3 justify-start items-center   md:ml-[4rem]">
            <FontAwesomeIcon icon={faEnvelope} className="text-sm text-red" />{" "}
            <a href="mailto:info@tongston.com">info@tongston.com</a>
          </p>
          <section className="md:ml-[3.5rem]">
            <Socials />
          </section>
        </section>
        <section className="form-container w-full h-[fixed] py-6   md:w-[70%]  px-7 shadow-2xl   bg-black   bg-opacity-70 p-2 flex flex-col justify-center items-start">
          <Form />
        </section>
      </div>
    </div>
  );
}
