// components/BlogManager.js
"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@/shared/buttons/button"; // Import your button component
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faShareAlt } from "@fortawesome/free-solid-svg-icons";

export const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [newBlogData, setNewBlogData] = useState({
    title: "",
    content: "",
    image: null,
  }); // For editing
  const router = useRouter();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("https://hold-api.onrender.com/blogs");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://hold-api.onrender.com/blogs/${id}`); // Add a delete route to your API
      fetchBlogs(); // Refresh the blog list
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setNewBlogData({ ...blog, image: null }); // Initialize edit form with existing data
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", newBlogData.title);
      formData.append("content", newBlogData.content);
      if (newBlogData.image) {
        // Only append image if a new one is selected
        formData.append("image", newBlogData.image);
      }

      await axios.put(
        `https://hold-api.onrender.com/blogs/${editingBlog._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setEditingBlog(null); // Close the edit form
      fetchBlogs(); // Refresh the blog list
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const handleInputChange = (e) => {
    setNewBlogData({ ...newBlogData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setNewBlogData({ ...newBlogData, image: e.target.files[0] });
  };

  const handleShare = (blog) => {
    // Implement your social media sharing logic here
    const shareUrl = `yourwebsite.com/blog/${blog._id}`; // Replace with your actual URL
    // Example using the Web Share API (if supported by the browser):
    if (navigator.share) {
      navigator
        .share({
          title: blog.title,
          url: shareUrl,
        })
        .then(() => {
          console.log("Successfully shared");
        })
        .catch((error) => {
          console.error("Error sharing:", error);
        });
    } else {
      // Fallback for browsers that don't support Web Share API
      alert(`Share this link: ${shareUrl}`);
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-y-8  relative  ">
      <h2 className="text-black font-bold text-2xl  "> Manage Posts</h2>
      <ul className="grid grid-cols-3 gap-x-7">
        {blogs.map((blog) => (
          <li
            key={blog._id}
            className={`border hover:scale-105 transform duration-700 ease-in-out  p-4 mb-4  shadow-lg rounded-md gap-y-5 flex flex-col h-[300px] w-[300px] bg-gradient-to-br from-background-gold  to-orange-600  
            `}
          >
            <h3 className="text-black font-bold text-sm font-heading ">
              {blog.title}
            </h3>
            <Image
              priority
              src={`/uploads/${blog.image}`}
              alt={blog.title}
              width={50}
              height={50}
              className="w-32 h-32 object-contain"
            />{" "}
            {/* Display image */}
            <p className="text-sm font-body text-white ">
              {blog.content.slice(0, 200)}...
            </p>{" "}
            {/* Display a snippet */}
            <section className="grid grid-cols-3 justify-center items-start mt-auto mb-3">
              <button
                onClick={() => handleEdit(blog)}
                className="bg-yellow-500 mr-2"
              >
                <FontAwesomeIcon
                  icon={faEdit}
                  className="text-base text-black"
                />
              </button>
              <button
                onClick={() => handleDelete(blog._id)}
                className="bg-red-500 mr-2"
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-base text-black"
                />
              </button>
              <button onClick={() => handleShare(blog)} className="">
                <FontAwesomeIcon
                  icon={faShareAlt}
                  className="text-base text-black"
                />
              </button>
            </section>
          </li>
        ))}
      </ul>

      {editingBlog && (
        <div className="border p-4">
          <h2 className="text-black font-bold text-2xl  "> Edit Posts</h2>
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block">Title</label>
              <input
                type="text"
                name="title"
                value={newBlogData.title}
                onChange={handleInputChange}
                className="w-full p-2  text-black text-sm  rounded bg-transparent border border-background-dark "
                required
              />
            </div>
            <div>
              <label className="block">Content</label>
              <textarea
                name="content"
                value={newBlogData.content}
                onChange={handleInputChange}
                className="w-full p-2 h-[200px] text-black text-sm  bg-transparent border border-background-dark rounded"
                rows="4"
                required
              />
            </div>
            <div>
              <label className="block">Image</label>
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                className="w-full p-2 border rounded border-background-dark bg-transparent  text-xs text-black "
              />
              {editingBlog.image && (
                <Image
                  width={100}
                  height={100}
                  src={`/uploads/${editingBlog.image}`}
                  alt={editingBlog.title}
                  className="w-32 h-32 object-cover mt-2"
                />
              )}{" "}
              {/* Show current image */}
            </div>
            <button
              type="submit"
              className="bg-background-gold text-black  w-[100px]"
            >
              Update
            </button>
            <button
              onClick={() => setEditingBlog(null)}
              text="Cancel"
              className="b ml-2 bg-background-footer_black text-white    w-[100px]"
            >
              cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
