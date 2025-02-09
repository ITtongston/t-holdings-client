// components/BlogManager.js
"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@/shared/buttons/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import DOMPurify from "dompurify";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [newBlogData, setNewBlogData] = useState({
    title: "",
    content: "",
    image: null,
  });
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
      await axios.delete(`https://hold-api.onrender.com/blogs/${id}`);
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setNewBlogData({ ...blog, image: null, content: blog.content || "" });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", newBlogData.title);
      formData.append("content", newBlogData.content);
      if (newBlogData.image) {
        formData.append("image", newBlogData.image);
      }

      await axios.put(
        `https://hold-api.onrender.com/blogs/${editingBlog._id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setEditingBlog(null);
      fetchBlogs();
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

  const handleEditorChange = (value) => {
    setNewBlogData({ ...newBlogData, content: value });
  };

  const handleShare = (blog) => {
    const shareUrl = `https://tongston.com/insights/${blog._id}`;
    if (navigator.share) {
      navigator
        .share({ title: blog.title, url: shareUrl })
        .then(() => console.log("Successfully shared"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert(`Share this link: ${shareUrl}`);
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-y-8 relative">
      <h2 className="text-black font-bold text-2xl">Manage Posts</h2>
      <ul className="grid grid-cols-3 gap-x-7 gap-y-7 ">
        {blogs.map((blog) => (
          <li
            key={blog._id}
            className="border p-4 shadow-lg rounded-md bg-background-dark"
          >
            <h3 className="text-white font-bold text-sm font-heading">
              {blog.title}
            </h3>
            <Image
              src={`https://hold-api.onrender.com/${blog.image}`}
              alt={blog.title}
              width={500}
              height={500}
              className="w-full h-[200px] object-cover"
            />
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(blog.content.slice(0, 50) + "..."),
              }}
              className="text-sm font-body text-white"
            />
            <section className="grid grid-cols-3 justify-center items-start mt-auto mb-3">
              <button
                onClick={() => handleEdit(blog)}
                className="bg-yellow-500 mr-2"
              >
                <FontAwesomeIcon
                  icon={faEdit}
                  className="text-base text-white"
                />
              </button>
              <button
                onClick={() => handleDelete(blog._id)}
                className="bg-red-500 mr-2"
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-base text-white"
                />
              </button>
              <button onClick={() => handleShare(blog)}>
                <FontAwesomeIcon
                  icon={faShareAlt}
                  className="text-base text-white"
                />
              </button>
            </section>
          </li>
        ))}
      </ul>

      {editingBlog && (
        <div className="border p-4">
          <h2 className="text-black font-bold text-2xl">Edit Posts</h2>
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block">Title</label>
              <input
                type="text"
                name="title"
                value={newBlogData.title}
                onChange={handleInputChange}
                className="w-full p-2 text-black text-sm rounded bg-transparent border"
                required
              />
            </div>
            <div>
              <label className="block">Content</label>
              <ReactQuill
                value={newBlogData.content}
                onChange={handleEditorChange}
                className="w-full h-[400px] text-black   tracking-widest  leading-10 text-sm bg-transparent border rounded"
              />
            </div>
            <div>
              <label className="block">Image</label>
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                className="w-full p-2 border rounded bg-transparent text-xs text-black"
              />
              {editingBlog.image && (
                <Image
                  width={100}
                  height={100}
                  src={`https://hold-api.onrender.com/${editingBlog.image}`}
                  alt={editingBlog.title}
                  className="w-32 h-32 object-cover mt-2"
                />
              )}
            </div>

            <button
              type="submit"
              className="bg-background-gold text-black w-[100px]"
            >
              Update
            </button>

            <button
              onClick={() => setEditingBlog(null)}
              text="Cancel"
              className="b ml-2 bg-background-footer_black text-white w-[100px]"
            >
              cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
