import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Accordion3({ accordions = [], className = "" }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="w-full h-auto ml-auto flex flex-col justify-start items-start gap-y-2">
      {accordions.map((accordion, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          style={{
            backgroundColor: "#3C3E3E",
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
                className="transition-transform duration-300 ease-in-out   p-2 rounded-full text-white "
              />
            }
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            className="group w-full"
          >
            <Typography
              className={` transition-transform duration-700 ease-in-out font-heading text-white font-black   text-3xl ${
                expanded === `panel${index}` ? "text-white " : ""
              }`}
            >
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
                className={`contents-container pb-[0.2rem] px-2 bg-background-footer_black pt-5 w-full flex flex-col justify-start items-start text-base font-body text-white font-normal ${className}`}
              >
                {accordion.links.map((link, idx) => (
                  <div
                    key={idx}
                    className="flex flex-row gap-x-3 justify-start items-start :"
                  >
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-yellow text-base"
                    />
                    <Link
                      href={link.to}
                      className="text-white   font-normal font-body text-base  mb-2"
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
              </section>
            </motion.div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
