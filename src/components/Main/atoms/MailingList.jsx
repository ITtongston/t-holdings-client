import React, { useState } from "react";
import emailjs from "emailjs-com";
import Button from "@/shared/buttons/button";
import axios from "axios";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/shared/Notification/Notification";

export default function MailingList() {
  // EmailJS variables
  const service_id = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
  const template_id = process.env.NEXT_PUBLIC_NEWS_TEMPLATE_ID;
  const user_id = process.env.NEXT_PUBLIC_EMAIL_JS_API_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // Creating errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  // Create the loading state

  const [isLoading, setIsLoading] = useState(false);

  // Handle change function
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validate form function
  const validateForm = (name, email) => {
    let valid = true;
    let updatedErrors = {};

    if (!name.trim()) {
      updatedErrors.name = "Name cannot be empty";
      valid = false;
    }

    // Validate email using regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      updatedErrors.email = "Please enter a valid  email ";
      valid = false;
    }

    setErrors(updatedErrors);
    return valid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { name, email } = formData;

    const isValid = validateForm(name, email);
    if (!isValid) {
      setIsLoading(false);
      return;
    }

    try {
      // Check if email already exists
      const checkResponse = await axios.get(
        // `https://hold-api.onrender.com/newsletter/check-email?email=${email}`,
        `${process.env.NEXT_PUBLIC_SUBSCRIBER_CHECK}?email=${email}`
      );

      if (checkResponse.data.exists) {
        showErrorNotification(
          <span className="text-red font-medium text-lg">
            You are already subscribed! Please stay tuned.
          </span>
        );
        setIsLoading(false);
        return;
      }

      // If email doesn't exist, proceed with submission
      const response = await axios.post(
        process.env.NEXT_PUBLIC_SUBSCRIBER,

        formData
      );
      if (response.status === 200 || response.status === 201) {
        showSuccessNotification(" Subscribed successfully!");
        setFormData({ name: "", email: "" });

        // Send email notification
        sendEmailNotification(formData);
      } else {
        showErrorNotification("Failed Please try again.");
      }
    } catch (error) {
      showErrorNotification("Failed to retrieve data.");
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
          name: data.name,
          email: data.email,
        },
        user_id
      );
      console.log("Notification sent successfully!");
    } catch (error) {
      console.log("Failed to send notification.", error);
    }
  };

  return (
    <div className="w-full h-[400px] bg-background-gold flex flex-col gap-y-5 justify-center items-center">
      <div className="container flex flex-col gap-y-3 justify-center items-center w-full mt-8">
        <span className="text-black font-bold text-3xl font-heading md:text-4xl text-center">
          Get Latest Updates
        </span>
        <p className="text-black font-body font-normal text-center text-lg md:text-xl">
          Don&apos;t miss out on important information. Subscribe to the latest
          updates.
        </p>
      </div>
      <div className="mail-form-container w-full container flex flex-col gap-y-4 justify-center items-center p-2">
        <form
          onSubmit={handleSubmit}
          className="form flex flex-col gap-y-8 justify-center items-center"
        >
          <div className="form px-4 flex flex-col gap-y-4 justify-center items-center md:flex-row gap-x-5">
            <span className="flex flex-col gap-y-1">
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter Your Full Name"
                onChange={handleChange}
                className="w-[300px] md:w-[400px] outline-none focus:ring-1 transform ease-in-out duration-700 focus:ring-rose-800 h-[55px] p-2 rounded-md bg-background-light text-black font-bold"
              />
              {errors.name &&
                showErrorNotification(
                  <p className="text-red text-xs">{errors.name}</p>
                )}
            </span>
            <span className="flex flex-col gap-y-1">
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter Your Email"
                onChange={handleChange}
                className="w-[300px] md:w-[400px] outline-none focus:ring-1 transform ease-in-out duration-700 focus:ring-rose-800 h-[55px] p-2 rounded-md bg-background-light text-black font-bold"
              />
              {errors.email &&
                showErrorNotification(
                  <p className="text-red text-xs">{errors.email}</p>
                )}
            </span>
          </div>
          <Button
            text={isLoading ? "Submitting..." : "Submit"}
            className={`px-6 py-2 rounded-md ${
              isLoading
                ? "bg-gray-400"
                : "bg-background-danger  hover:bg-background-light hover:text-black"
            } text-white`}
            disabled={isLoading}
          />
        </form>
      </div>
    </div>
  );
}
