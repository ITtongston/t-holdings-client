"use client";

import React, { useState } from "react";
import axios from "axios";
import Button from "@/shared/buttons/button";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/shared/Notification/Notification";
import emailjs from "@emailjs/browser"; // Import emailjs

// Initialize EmailJS (replace with your actual keys)
emailjs.init("YOUR_EMAILJS_USER_ID"); // Get your User ID from EmailJS

export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("content", content);

    try {
      const response = await axios.post(
        "https://hold-api.onrender.com/blogs",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      showSuccessNotification("Blog post created:", response.data);

      // Fetch subscriber emails and send notifications
      try {
        const mailListResponse = await axios.get(
          "https://hold-api.onrender.com/newsletter"
        ); // Replace with your endpoint
        const subscribers = mailListResponse.data; // Assuming your endpoint returns an array of email addresses

        if (subscribers && subscribers.length > 0) {
          const postLink = `https://tongston.com/insights/${response.data._id}`; // Replace with your domain and post URL structure

          subscribers.forEach(async (subscriber) => {
            try {
              await emailjs.send(
                "YOUR_EMAILJS_SERVICE_ID",
                "YOUR_EMAILJS_TEMPLATE_ID",
                {
                  // Replace with your Service ID and Template ID
                  to_email: subscriber.email, // Assuming each subscriber object has an 'email' property
                  subject: "New Blog Post!",
                  message: ` Hello ${subscriber.full_name}, A new  post "${title}" has been published on tongston.com.  Check it out here: ${postLink}`,
                }
              );
              console.log(`Email sent to ${subscriber.email}`);
            } catch (emailError) {
              console.error(
                `Error sending email to ${subscriber.email}:`,
                emailError
              );
              showErrorNotification(
                `Error sending email to ${subscriber.email}:`,
                emailError
              ); // Notify about individual email sending failures
            }
          });
          showSuccessNotification("Notification emails sent to subscribers.");
        } else {
          showSuccessNotification("No subscribers found.");
        }
      } catch (mailListError) {
        console.error("Error fetching mail list:", mailListError);
        showErrorNotification("Error fetching mail list:", mailListError);
      }

      setTitle("");
      setImage(null);
      setContent("");
    } catch (error) {
      console.error("Error creating blog post:", error);
      showErrorNotification("Error creating blog post:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block">Blog Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full  text-black font-body  text-sm p-2 border border-background-dark focus:outline-none  focus:ring-2 focus:ring-offset-background-danger  rounded bg-transparent"
          required
        />
      </div>

      <div>
        <label className="block">Blog Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full  text-black font-body text-sm p-2 border border-background-dark focus:outline-none  focus:ring-2 focus:ring-offset-background-danger  rounded bg-transparent"
          required
        />
      </div>

      <div>
        <label className="block">Blog Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border border-background-dark focus:outline-none  focus:ring-2 focus:ring-offset-background-danger  rounded bg-transparent"
          rows="6"
          required
        />
      </div>

      <Button
        type="submit"
        text={`  Create  Post`}
        className={`bg-background-gold text-black rounded-lg w-[200px] hover:bg-background-dark hover:text-white`}
      />
    </form>
  );
};
