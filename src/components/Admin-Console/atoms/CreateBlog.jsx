"use client";

import React, { useState } from "react";
import axios from "axios";
import Button from "@/shared/buttons/button";
import { showErrorNotification } from "@/shared/Notification/Notification";

export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data to send the blog post data
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
      showErrorNotification("Blog post created:", response.data);
      // Reset the form
      setTitle("");
      setImage(null);
      setContent("");
    } catch (error) {
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
          className="w-full p-2 border border-background-dark focus:outline-none  focus:ring-2 focus:ring-offset-background-danger  rounded bg-transparent"
          required
        />
      </div>

      <div>
        <label className="block">Blog Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full p-2 border border-background-dark focus:outline-none  focus:ring-2 focus:ring-offset-background-danger  rounded bg-transparent"
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
