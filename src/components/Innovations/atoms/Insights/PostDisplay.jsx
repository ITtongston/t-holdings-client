"use client";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Button from "@/shared/buttons/button";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DOMPurify from "dompurify";

export default function PostDisplay() {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1); // Mobile
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setSlidesPerView(3); // Tablet
      } else {
        setSlidesPerView(3); // Desktop
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(3); // Initial number of visible cards
  const [showMore, setShowMore] = useState(true); // State for "See More" button

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://hold-api.onrender.com/blogs");
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []); // Fetch posts only once on component mount

  const handleShowMore = () => {
    setVisiblePosts(visiblePosts + 3);
    if (visiblePosts + 3 >= posts.length) {
      // Check before setting showMore to false
      setShowMore(false);
    }
  };

  const handleShowLess = () => {
    setVisiblePosts(3);
    setShowMore(true); // Crucial: Set showMore back to true!
  };

  const handleShare = (post) => {
    // Implement your social media sharing logic here
    const shareUrl = `https://tongston.com/insights/${post._id}`; // Replace with your actual URL
    // Example using the Web Share API (if supported by the browser):
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
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

  const formatTextWithLineBreaks = (text) => {
    if (!text) return null;

    const cleanText = DOMPurify.sanitize(text); // Sanitize!
    const formattedText = cleanText.replace(/\n/g, "<br />");

    return (
      <p
        className="text-black font-body text-sm"
        dangerouslySetInnerHTML={{ __html: formattedText }}
      />
    );
  };

  return (
    <div className="w-full h-[fixed] p-2 pb-6 md:p-8 flex flex-col gap-y-5 justify-start items-start mb-[80px]">
      <span className="font-bold font-heading text-3xl md:text-3xl text-black md:ml-[3rem]">
        LATEST
      </span>

      <section className="post-container grid   grid-cols-1    md:grid-cols-3  gap-y-5  gap-x-4 w-full justify-center items-center p-2   md:w-[95%] h-[fixed] mx-auto">
        {posts.slice(0, visiblePosts).map(
          (
            post,
            index // Slice the posts array
          ) => (
            <div
              key={post._id}
              className={`  group overflow-hidden  w-full    md:w-[300px] h-[400px] border border-background-gold  p-3 rounded-md shadow-xl bg-background-light flex flex-col gap-y-5 justify-start items-start ${
                index === 0
                  ? "md:col-span-2    md:w-full "
                  : index === 2
                  ? "md:col-span-2   md:w-full "
                  : ""
              }`}
            >
              <Image
                priority
                src={`https://hold-api.onrender.com/${post.image}`} // Corrected path - removed extra space
                width={4500}
                height={500}
                className="w-full h-[200px] object-cover   group-hover:scale-105  transform ease-in-out duration-700"
                alt={post.title} // Add alt text for accessibility
              />
              <h6 className="text-black font-black font-heading text-base hover:underline transform duration-700 ease-in-out">
                {post.title.slice(0, 100)}...
              </h6>{" "}
              {/* add a paragraph with slice  */}
              <p className="text-black font-body text-sm  md:text-base">
                {post.content.slice(0, 50)}...
              </p>
              <Button
                text={`Read `}
                className={` mt-auto  bg-background-light border w-[80px] border-background-footer_black text-black  rounded-md`}
                modalClass={`justify-start items-start `}
                modalContent={
                  <div className=" flex flex-col gap-y-4  h-screen  w-[full] mb-[5rem] ">
                    <h6 className="text-black font-black font-heading text-base">
                      {post.title}
                    </h6>{" "}
                    {formatTextWithLineBreaks(post.content)}
                    <button
                      onClick={() => handleShare(post)}
                      className="ml-auto text-black font-bold"
                    >
                      <FontAwesomeIcon
                        icon={faShareAlt}
                        className="text-base text-black "
                      />{" "}
                      Share
                    </button>
                  </div>
                }
              />
            </div>
          )
        )}
      </section>
      <section className="ml-[2rem]">
        {/* Conditionally render "See More" or "See Less" button */}
        {visiblePosts < posts.length && ( // Show "See More" if not all posts are shown
          <button
            onClick={handleShowMore}
            className="mt-4 text-black font-bold py-2 px-4 rounded"
          >
            See More
          </button>
        )}

        {visiblePosts > 3 && ( // Show "See Less" if more than 3 posts are shown
          <button
            onClick={handleShowLess}
            className="mt-4 text-black font-bold py-2 px-4 rounded"
          >
            See Less
          </button>
        )}
      </section>
    </div>
  );
}
