import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../buttons/button";
import Image from "next/image";
import axios from "axios";
import {
  showSuccessNotification,
  showErrorNotification,
} from "@/shared/Notification/Notification";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function BusinessForm() {
  const [formData, setFormData] = useState({
    org_name: "",
    contact_person: "",
    email_address: "",
    phone_number: "",
    address: "",
    delivery_date: "",
    service_required: "",
  });

  const [errors, setErrors] = useState({
    org_name: "",
    contact_person: "",
    email_address: "",
    phone_number: "",
    address: "",
    delivery_date: "",
    service_required: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = (
    org_name,
    contact_person,
    email_address,
    phone_number,
    address,
    delivery_date,
    service_required
  ) => {
    let valid = true;
    let updatedErrors = {};

    if (!org_name.trim()) {
      updatedErrors.org_name = "name cannot be empty";
      valid = false;
    }
    if (!contact_person.trim()) {
      updatedErrors.contact_person = "field cannot be empty";
      valid = false;
    }

    if (!email_address.trim()) {
      updatedErrors.email_address = "email address is required";
      valid = false;
    }

    if (!phone_number.trim()) {
      updatedErrors.phone_number = "Phone number is required";
      valid = false;
    }

    if (!address.trim()) {
      updatedErrors.address = "address  required";
      valid = false;
    }

    if (!delivery_date.trim()) {
      updatedErrors.delivery_date = "date cannot be empty ";
      valid = false;
    }
    if (!service_required.trim()) {
      updatedErrors.service_required = "please select an option ";
      valid = false;
    }

    setErrors(updatedErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const {
      org_name,
      contact_person,
      email_address,
      phone_number,
      address,
      delivery_date,
      service_required,
    } = formData;

    const isValid = validateForm(
      org_name,
      contact_person,
      email_address,
      phone_number,
      address,
      delivery_date,
      service_required
    );

    if (isValid) {
      try {
        const response = await axios.post(
          process.env.NEXT_PUBLIC_BUSINESS,
          formData
        );
        if (response.status === 200 || response.status === 201) {
          showSuccessNotification("Request submitted successfully!");
          setFormData({
            org_name: "",
            contact_person: "",
            email_address: "",
            phone_number: "",
            address: "",
            delivery_date: "",
            service_required: "",
          });
        } else {
          showErrorNotification("Failed to submit request. Please try again.");
        }
      } catch (error) {
        showErrorNotification("Failed to submit request. Please try again.");
      }
    }
    setIsLoading(false);

    sendEmailNotification(formData);
  };

  const sendEmailNotification = async (data) => {
    try {
      await emailjs.send(
        "service_xxxxxx",
        "template_xxxxxx",
        {
          org_name: data.org_name,
          contact_person: data.contact_person,
          email_address: data.email_address,
          phone_number: data.phone_number,
          address: data.address,
          delivery_date: data.delivery_date,
          service_required: data.service_required,
        },
        "user_xxxxxx"
      );
      console.log("Email sent successfully!");
    } catch (error) {
      console.log("Failed to send email.", error);
    }
  };

  const dropdown_options = [
    {
      label: "Impact /Sustainability Design & Assessment",
      value: "Impact /Sustainability Design & Assessment",
    },
    {
      label: "Data Analysis Consulting",
      value: "Data Analysis Consulting",
    },
    {
      label: "Data Science Consulting",
      value: "Data Science Consulting",
    },
    {
      label: "App / Website Design & Development",
      value: "App / Website Design & Development",
    },
    {
      label: "Software Solutions - Cloud AI Business Solutions",
      value: "Software Solutions - Cloud AI Business Solutions",
    },
    {
      label:
        "Monitoring, Evaluation & Learning [Base-Line, Mid-Line & End-Line Process Evaluation]",
      value:
        "Monitoring, Evaluation & Learning [Base-Line, Mid-Line & End-Line Process Evaluation]",
    },
    {
      label: "ICT & Programming Skills Training",
      value: "ICT & Programming Skills Training",
    },
    {
      label:
        "Branding - Online Presence [Social Media Presence; Website; Collateral; Logo; Promotional Material]",
      value:
        "Branding - Online Presence [Social Media Presence; Website; Collateral; Logo; Promotional Material]",
    },
    {
      label:
        "Multimedia Content Production [3D Animation; 3D Animation; Documentaries; Introduction Videos]",
      value:
        "Multimedia Content Production [3D Animation; 3D Animation; Documentaries; Introduction Videos]",
    },
    {
      label: "Virtual Office & Workspace Solutions",
      value: "Virtual Office & Workspace Solutions",
    },
    {
      label: "Training & Meeting Room Solutions",
      value: "Training & Meeting Room Solutions",
    },
    {
      label: "Curriculum Design & Development Consulting",
      value: "Curriculum Design & Development Consulting",
    },
    {
      label:
        "Educational Curriculum Design Delivery, Monitoring & Evaluation & Showcase",
      value:
        "Educational Curriculum Design Delivery, Monitoring & Evaluation & Showcase",
    },
    {
      label: "E-Learning Content Production & Platform Development",
      value: "E-Learning Content Production & Platform Development",
    },
    {
      label: "Documentation & Production for Marketing & Legacy Showcase",
      value: "Documentation & Production for Marketing & Legacy Showcase",
    },
    {
      label: "Industry & Market Research",
      value: "Industry & Market Research",
    },
    {
      label: "MSME Intervention Design & Deployment",
      value: "MSME Intervention Design & Deployment",
    },
    {
      label: "Business Advisory",
      value: "Business Advisory",
    },
    {
      label: "Governance Advisory",
      value: "Governance Advisory",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-y-5 justify-center items-center p-2">
      <section className="heading-container max-w-lg mb-[3rem]  mt-[1rem]">
        <span className="   w-full p-4  flex flex-col gap-y-4  justify-center items-center text-black font-heading text-xl font-bold h-[90px]">
          <Image
            src={`/assets/images/logos/world-logo.png`}
            width={50}
            height={50}
            priority
            alt="tongston-world"
            className=" object-contain"
          />{" "}
          Request a Service
        </span>
      </section>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg grid grid-cols-1  md:grid-cols-2  gap-x-[1rem] gap-y-[2rem]"
      >
        <label
          htmlFor="name of organization"
          className="flex flex-col gap-y-2  w-full"
        >
          <span className="text-black text-sm font-semibold">
            Name of Organization:
          </span>

          <input
            type="text"
            aria-label="name of organization"
            placeholder="Name of Organization"
            name="org_name"
            value={formData.org_name}
            onChange={handleChange}
            className="w-full h-[50px] bg-background-light border border-background-footer_black p-2 px-2 text-black   rounded-md"
          />
          {errors.org_name && (
            <p className="text-red text-xs">{errors.org_name}</p>
          )}
        </label>
        <label
          htmlFor="    Contact Person:"
          className="flex flex-col gap-y-2  w-full"
        >
          <span className="text-black text-sm font-semibold">
            Contact Person:
          </span>
          <input
            type="text"
            aria-label="contact_person"
            placeholder="Contact Person"
            name="contact_person"
            value={formData.contact_person}
            onChange={handleChange}
            className="w-full h-[50px] bg-background-light border border-background-footer_black p-2 px-2 text-black   rounded-md"
          />
          {errors.contact_person && (
            <p className="text-red text-xs">{errors.contact_person}</p>
          )}
        </label>
        <label
          htmlFor="    Email Address:"
          className="flex flex-col gap-y-2  w-full"
        >
          <span className="text-black text-sm font-semibold">
            Email Address:
          </span>
          <input
            type="email"
            aria-label="email_address"
            placeholder="Email Address"
            name="email_address"
            value={formData.email_address}
            onChange={handleChange}
            className="w-full h-[50px] bg-background-light border border-background-footer_black p-2 px-2 text-black   rounded-md"
          />
          {errors.email_address && (
            <p className="text-red text-xs">{errors.email_address}</p>
          )}
        </label>
        <label
          htmlFor="    Phone Number:"
          className="flex flex-col gap-y-2  w-full"
        >
          <span className="text-black text-sm font-semibold">
            Phone Number:
          </span>
          <input
            type="tel"
            aria-label="Phone Number"
            placeholder="Phone Number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className="w-full h-[50px] bg-background-light border border-background-footer_black p-2 px-2 text-black   rounded-md"
          />
          {errors.phone_number && (
            <p className="text-red text-xs">{errors.phone_number}</p>
          )}
        </label>

        <label
          htmlFor="    Service Delivery Date:"
          className="flex flex-col gap-y-2  w-full"
        >
          <span className="text-black text-sm font-semibold">Address:</span>
          <input
            type="text"
            aria-label="Address"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full h-[50px] bg-background-light border border-background-footer_black p-2 px-2 text-black   rounded-md"
          />
          {errors.address && (
            <p className="text-red text-xs">{errors.address}</p>
          )}
        </label>

        <label
          htmlFor="    Service Delivery Date:"
          className="flex flex-col gap-y-2  w-full"
        >
          <span className="text-black text-sm font-semibold">
            Service Delivery Date:
          </span>
          <input
            type="date"
            aria-label="Expected Service Delivery Date"
            placeholder="Expected date of service delivery"
            name="delivery_date"
            value={formData.delivery_date}
            onChange={handleChange}
            className="w-full h-[50px] bg-background-light border border-background-footer_black p-2 px-2 text-black   rounded-md"
          />
          {errors.delivery_date && (
            <p className="text-red text-xs">{errors.delivery_date}</p>
          )}
        </label>
        <label
          htmlFor="    Service Required:"
          className="flex flex-col gap-y-2  w-full"
        >
          <span className="text-black text-sm font-semibold">
            Service Required:
          </span>
          <select
            value={formData.service_required}
            name="service_required"
            onChange={handleChange}
            className="w-full h-[50px] bg-background-light border border-background-footer_black p-2 px-2 text-black text-xs text-wrap  rounded-md"
          >
            <option disabled> pick an option</option>
            {dropdown_options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.service_required && (
            <p className="text-red text-xs">{errors.service_required}</p>
          )}
        </label>

        <Button
          text={isLoading ? "Submitting..." : "Submit"}
          icon={faChevronRight}
          className={`px-6 py-2 rounded-md ${
            isLoading
              ? "bg-gray-400"
              : "bg-background-gold  text-black  hover:bg-background-dark hover:text-white  md:col-span-2 "
          } text-white`}
          disabled={isLoading}
        />
      </form>
    </div>
  );
}
