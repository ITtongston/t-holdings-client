import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FreeAccordion({ accordions = [], className = "" }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="w-full h-[fixed]   flex flex-col justify-center items-center  gap-y-1 ">
      {accordions.map((accordion, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          style={{
            backgroundColor: "#C79F00BA",
            width: "100%",
            boxShadow: "20 20 10",
          }}
          className={`hover:border-l-4 hover:border-l-background-gold hover:transition-transform hover:duration-1000 hover:ease-in-out transition-transform duration-1000 ease-in-out ${
            expanded === `panel${index}`
              ? "border-l-4 border-l-background-gold"
              : ""
          }`}
        >
          <AccordionSummary
            expandIcon={
              <FontAwesomeIcon
                icon={expanded === `panel${index}` ? faMinus : faPlus}
                className="transition-transform duration-300 ease-in-out   p-2  text-black border border-red "
              />
            }
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            className="group w-full"
          >
            <Typography
              className={` transition-transform duration-700 ease-in-out font-heading text-black font-black  flex flex-row gap-x-5 justify-start items-center  text-3xl ${
                expanded === `panel${index}` ? "text-white " : " font-bold"
              }`}
            >
              <Image
                priority
                src={`/assets/images/career/Vectorcareer.png`}
                alt="accordion-icon"
                width={20}
                height={20}
                className=" object-contain "
              />
              {accordion.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={
                expanded === `panel${index}`
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0.9, opacity: 0 }
              }
              transition={{ duration: 0.5 }}
              className="bg-transparent w-full h-auto flex flex-col justify-start items-start"
            >
              <section
                className={`contents-container  px-2 bg-background-footer_black bg-opacity-70  h-[fixed] w-full flex flex-col justify-start items-start text-base font-body text-white font-normal ${className}`}
              >
                <div className="flex flex-row  justify-start items-start  w-full">
                  <p className="text-white   font-normal font-body text-base  mb-2">
                    {accordion.content}
                  </p>
                </div>
              </section>
            </motion.div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
