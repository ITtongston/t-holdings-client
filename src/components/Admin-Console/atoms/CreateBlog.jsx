"use client";

import React, { useState } from "react";
import axios from "axios";
import Button from "@/shared/buttons/button";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/shared/Notification/Notification";
import emailjs from "@emailjs/browser"; // Import EmailJS

export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("content", content);

    setLoading(true);

    // Load EmailJS credentials from environment variables
    const service_id = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
    const template_id = process.env.NEXT_PUBLIC_BLOG_NOTIFY_TEMPLATE_ID;
    const user_id = process.env.NEXT_PUBLIC_EMAIL_JS_API_KEY;

    // Debugging logs to check if environment variables are loaded
    console.log("Service ID:", service_id);
    console.log("Template ID:", template_id);
    console.log("User ID:", user_id);

    try {
      // Create a new blog post
      const response = await axios.post(
        "https://hold-api.onrender.com/blogs",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      showSuccessNotification("Blog post created successfully!");
      const postLink = `https://tongston.com/insights/${response.data._id}`; // Adjust your post URL

      // Fetch subscriber emails
      try {
        const mailListResponse = await axios.get(
          "https://hold-api.onrender.com/newsletter"
        );

        const subscribers = mailListResponse.data; // Assuming it returns an array of subscriber objects

        if (subscribers && subscribers.length > 0) {
          // Send emails to all subscribers using Promise.all()
          await Promise.all(
            subscribers.map(async (subscriber) => {
              try {
                await emailjs.send(
                  service_id,
                  template_id,
                  {
                    email: subscriber.email, // Ensure your EmailJS template has {email}
                    subject: "Tongston has created a new post!",
                    message: `Hello ${subscriber.name},\n\nA new post "${title}" has been published on Tongston. Check it out here: ${postLink}`,
                  },
                  user_id // Pass User ID here
                );
                console.log(`Email sent to ${subscriber.email}`);
              } catch (emailError) {
                console.error(
                  `Error sending email to ${subscriber.email}:`,
                  emailError
                );
                showErrorNotification(
                  `Error sending email to ${subscriber.email}`
                );
              }
            })
          );

          showSuccessNotification(
            `Notification emails sent to ${subscribers.length} subscribers.`
          );
        } else {
          showSuccessNotification("No subscribers found.");
        }
      } catch (mailListError) {
        console.error("Error fetching mail list:", mailListError);
        showErrorNotification("Error fetching subscriber list.");
      }

      // Reset form fields after submission
      setTitle("");
      setImage(null);
      setContent("");
    } catch (error) {
      console.error("Error creating blog post:", error);
      showErrorNotification("Error creating blog post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-black">Blog Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-black font-body text-sm p-2 border border-background-dark focus:outline-none focus:ring-2 focus:ring-offset-background-danger rounded bg-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-black">Blog Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full text-black font-body text-sm p-2 border border-background-dark focus:outline-none focus:ring-2 focus:ring-offset-background-danger rounded bg-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-black">Blog Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border text-black text-sm  border-background-dark focus:outline-none focus:ring-2 focus:ring-offset-background-danger rounded bg-transparent"
          rows="6"
          required
        />
      </div>

      <Button
        text={loading ? "Creating Post..." : "Create Post"}
        className={`px-6 py-2 rounded-md ${
          loading
            ? "bg-gray-400 w-[200px]"
            : "bg-background-gold text-black hover:bg-background-dark hover:text-white md:col-span-2"
        }`}
        disabled={loading}
      />
    </form>
  );
};
