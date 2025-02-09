import React, { useState } from "react";
import axios from "axios";
import {
  showSuccessNotification,
  showErrorNotification,
} from "@/shared/Notification/Notification";
import emailjs from "@emailjs/browser";
import Button from "@/shared/buttons/button";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Form() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    topic_of_interest: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    topic_of_interest: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // email js keys
  const service_id = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
  const template_id = process.env.NEXT_PUBLIC_CONTACT_TEMPLATE_ID;
  const user_id = process.env.NEXT_PUBLIC_EMAIL_JS_API_KEY;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = (
    first_name,
    last_name,
    phone_number,
    topic_of_interest,
    message
  ) => {
    let valid = true;
    let updatedErrors = {};

    if (!first_name.trim()) {
      updatedErrors.first_name = "First name is required";
      valid = false;
    }

    if (!last_name.trim()) {
      updatedErrors.last_name = "Last name is required";
      valid = false;
    }

    if (!phone_number.trim()) {
      updatedErrors.phone_number = "Phone number is required";
      valid = false;
    }

    if (!topic_of_interest.trim()) {
      updatedErrors.topic_of_interest = "Please select a topic of interest";
      valid = false;
    }

    if (!message.trim()) {
      updatedErrors.message = "Message is required";
      valid = false;
    }

    setErrors(updatedErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { first_name, last_name, phone_number, topic_of_interest, message } =
      formData;

    const isValid = validateForm(
      first_name,
      last_name,
      phone_number,
      topic_of_interest,
      message
    );

    if (isValid) {
      try {
        const response = await axios.post(
          "https://hold-api.onrender.com/contact",
          formData
        );
        if (response.status === 200 || response.status === 201) {
          showSuccessNotification("Form submitted successfully!");
          setFormData({
            first_name: "",
            last_name: "",
            phone_number: "",
            topic_of_interest: "",
            message: "",
          });

          // Move sendEmailNotification here
          await sendEmailNotification(formData);
        } else {
          showErrorNotification("Form Submitted Successfully .");
        }
      } catch (error) {
        console.log("Notification failed");
      }
    }

    setIsLoading(false);
  };

  // Send notification using EmailJS
  const sendEmailNotification = async (data) => {
    try {
      await emailjs.send(
        service_id,
        template_id,
        {
          first_name: data.first_name,
          last_name: data.last_name,
          phone_number: data.phone_number,
          topic_of_interest: data.topic_of_interest,
          message: data.message,
        },
        user_id
      );
      console.log("Notification sent !");
    } catch (error) {
      console.log("Failed to send notification.", error);
    }
  };

  // Array of options for the dropdown
  const topics = [
    {
      value: "Participating in TES 2026",
      label: "Participating in TES 2026",
    },
    {
      value: "Investing in Tongston and its intrapreneurs and entrepreneurs",
      label: "Investing in Tongston and its intrapreneurs and entrepreneurs",
    },
    {
      value: "Experiencing Tongston’s Products or Services",
      label: "Experiencing Tongston’s Products or Services",
    },
    { value: "Partnering with Tongston", label: "Partnering with Tongston" },
    { value: "Others.. Please Specify", label: "Others.. Please Specify" },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto grid grid-cols-1  md:grid-cols-2 gap-y-5 gap-x-5"
    >
      {/* First Name */}
      <div className="mb-4">
        <label htmlFor="first_name" className="block font-medium mb-2">
          First Name
        </label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          className="border border-gray-300  p-2 w-full bg-black"
        />
        {errors.first_name && (
          <p className="text-red text-xs">{errors.first_name}</p>
        )}
      </div>

      {/* Last Name */}
      <div className="mb-4">
        <label htmlFor="last_name" className="block font-medium mb-2">
          Last Name
        </label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          className="border border-gray-300  p-2 w-full bg-black"
        />
        {errors.last_name && (
          <p className="text-red text-xs">{errors.last_name}</p>
        )}
      </div>

      {/* Phone Number */}
      <div className="mb-4">
        <label htmlFor="phone_number" className="block font-medium mb-2">
          Phone Number
        </label>
        <input
          type="text"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          className="border border-gray-300  p-2 w-full bg-black"
        />
        {errors.phone_number && (
          <p className="text-red text-xs">{errors.phone_number}</p>
        )}
      </div>

      {/* Topic of Interest */}
      <div className="mb-4">
        <label htmlFor="topic_of_interest" className="block font-medium mb-2">
          I'm interested in
        </label>
        <select
          name="topic_of_interest"
          value={formData.topic_of_interest}
          onChange={handleChange}
          className="border border-gray-300  text-white text-sm p-2 w-full text-wrap  bg-black"
        >
          <option value="" disabled>
            I'm interested in ...
          </option>
          {topics.map((topic, index) => (
            <option key={index} value={topic.value}>
              {topic.label}
            </option>
          ))}
        </select>
        {errors.topic_of_interest && (
          <p className="text-red text-xs">{errors.topic_of_interest}</p>
        )}
      </div>

      {/* Message */}
      <div className="mb-4   h-[fixed]  md:col-span-2 w-full">
        <label htmlFor="message" className="block font-medium mb-2 ">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-300  p-2 w-full bg-black  h-[130px] md:h-[200px]"
        ></textarea>
        {errors.message && <p className="text-red text-xs">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <Button
          text={isLoading ? "Submitting..." : "Submit"}
          icon={faChevronRight}
          className={`px-6 py-2 rounded-md ${
            isLoading
              ? "bg-gray-400"
              : "bg-background-gold  hover:bg-background-light hover:text-black"
          } text-white`}
          disabled={isLoading}
        />
      </div>
    </form>
  );
}
