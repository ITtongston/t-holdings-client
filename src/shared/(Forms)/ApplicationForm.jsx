import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  showSuccessNotification,
  showErrorNotification,
} from "../Notification/Notification";

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    surname: "",
    location: "",
    dob: "",
    origin: "",
    otherCountry: "",
    phone: "",
    educationLevel: "",
    educationBackground: "",
    internshipDuration: "",
    internshipType: "",
    interestReason: "",
    uniqueValue: "",
    futurePlans: "",
    expectations: "",
    referral: "",
    referralDetails: "",
    additionalExperience: "",
    careerGoals: "",
    leadershipExperience: "",
    teamworkSkills: "",
    technicalSkills: "",
    problemSolvingSkills: "",
  });

  const [files, setFiles] = useState({
    video: null,
    pitchDeck: null,
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFiles((prevFiles) => ({ ...prevFiles, [name]: files[0] }));
  };

  const isStepComplete = () => {
    if (step === 1) {
      return (
        Object.keys(formData)
          .slice(0, 17)
          .every((key) => formData[key].trim() !== "") &&
        Object.keys(files).every((key) => files[key] !== null)
      );
    }
    if (step === 2) {
      return [
        "additionalExperience",
        "careerGoals",
        "leadershipExperience",
      ].every((key) => formData[key].trim() !== "");
    }
    if (step === 3) {
      return [
        "teamworkSkills",
        "technicalSkills",
        "problemSolvingSkills",
      ].every((key) => formData[key].trim() !== "");
    }
    return false;
  };

  const nextStep = () => {
    if (isStepComplete()) setStep((prevStep) => prevStep + 1);
    else
      showErrorNotification(
        <span className="text-red  font-bold text-sm">
          Please complete all fields before proceeding.
        </span>
      );
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    Object.keys(files).forEach((key) => {
      if (files[key]) data.append(key, files[key]);
    });
    try {
      await axios.post("/api/internship-form", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      showSuccessNotification(
        <span className="text-green-400 text-sm font-bold ">
          Your application has been submitted successfully! Please check your
          email for further instructions.
        </span>
      );
      setFormData({
        email: "",
        firstName: "",
        surname: "",
        location: "",
        dob: "",
        origin: "",
        otherCountry: "",
        phone: "",
        educationLevel: "",
        educationBackground: "",
        internshipDuration: "",
        internshipType: "",
        interestReason: "",
        uniqueValue: "",
        futurePlans: "",
        expectations: "",
        referral: "",
        referralDetails: "",
        additionalExperience: "",
        careerGoals: "",
        leadershipExperience: "",
        teamworkSkills: "",
        technicalSkills: "",
        problemSolvingSkills: "",
      });
      setFiles({ video: null, pitchDeck: null, resume: null });
      setStep(1);
    } catch (error) {
      console.error(error);
      showErrorNotification(
        <span className="text-red text-sm font-bold">
          An error occurred while submitting your application. Please try again
          later.
        </span>
      );
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white">
      <h2 className="text-2xl text-black text-center font-medium mb-4">
        Job Application
      </h2>
      <form className="  relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={step} // Key ensures animation is applied on step change
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2   gap-x-[2rem]   md:p-3 gap-y-8 "
          >
            {step === 1 && (
              <>
                {Object.keys(formData)
                  .slice(0, 17)
                  .map((key) => (
                    <div key={key} className="flex flex-col">
                      <label
                        className="text-sm text-black font-medium capitalize"
                        htmlFor={key}
                      >
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </label>
                      <input
                        type={key === "dob" ? "date" : "text"}
                        name={key}
                        id={key}
                        value={formData[key]}
                        required
                        className="input-field bg-transparent border border-background-footer_black p-2 text-black text-sm"
                        onChange={handleChange}
                      />
                    </div>
                  ))}
                {Object.keys(files).map((key) => (
                  <div key={key} className="flex flex-col">
                    <label
                      className="text-sm text-black font-medium capitalize"
                      htmlFor={key}
                    >
                      {key.replace(/([A-Z])/g, " $1").trim()} Upload
                    </label>
                    <input
                      type="file"
                      name={key}
                      id={key}
                      required
                      className="input-field bg-transparent border border-background-footer_black p-2 text-black text-sm"
                      onChange={handleFileChange}
                    />
                    {files[key] && (
                      <span className="text-xs text-green-600 text-wrap">
                        {files[key].name.slice(0, 20)}
                        {files[key].name.length > 20 ? "..." : ""} selected
                      </span>
                    )}
                  </div>
                ))}
              </>
            )}

            {step === 2 &&
              [
                "additionalExperience",
                "careerGoals",
                "leadershipExperience",
              ].map((key) => (
                <div key={key} className="flex flex-col">
                  <label
                    className="text-sm text-black font-medium capitalize"
                    htmlFor={key}
                  >
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </label>
                  <textarea
                    name={key}
                    id={key}
                    value={formData[key]}
                    required
                    className="input-field bg-transparent border border-background-footer_black p-2 text-black text-sm"
                    onChange={handleChange}
                  />
                </div>
              ))}

            {step === 3 &&
              ["teamworkSkills", "technicalSkills", "problemSolvingSkills"].map(
                (key) => (
                  <div key={key} className="flex flex-col">
                    <label
                      className="text-sm text-black font-medium capitalize"
                      htmlFor={key}
                    >
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </label>
                    <textarea
                      name={key}
                      id={key}
                      value={formData[key]}
                      required
                      className="input-field bg-transparent border border-background-footer_black p-2 text-black text-sm"
                      onChange={handleChange}
                    />
                  </div>
                )
              )}
          </motion.div>
        </AnimatePresence>

        <div className="col-span-2 flex justify-between">
          {step > 1 && (
            <button
              type="button"
              className="btn-primary   flex flex-row gap-x-2 justify-start items-center "
              onClick={prevStep}
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-primary text-sm"
              />{" "}
              Previous
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              className="btn-primary   flex flex-row gap-x-2 justify-start items-center "
              onClick={nextStep}
            >
              Next{" "}
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-primary text-sm"
              />{" "}
            </button>
          ) : (
            <button
              type="submit"
              className="btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
