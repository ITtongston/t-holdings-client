"use client";

import React, { useState, useEffect } from "react";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/shared/Notification/Notification";
import Button from "@/shared/buttons/button";
import Image from "next/image";
import Link from "next/link";
import AdminContainer from "@/components/Admin-Console/AdminContainer";

const Index = () => {
  // State for authentication, username, and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const correctUsername = "tongstonadmin"; // Developer-defined username
  const correctPassword = "#Tongston_Admin2025"; // Developer-defined password

  // Check if user is already authenticated
  useEffect(() => {
    const authStatus = localStorage.getItem("authUsersPage");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === correctUsername && password === correctPassword) {
      setIsAuthenticated(true);
      showSuccessNotification(<p>Login Successful.</p>);

      sessionStorage.setItem("authUsersPage", "true"); // Store auth status in sessionStorage
    } else {
      showErrorNotification(
        <p className="text-red">Incorrect Username or Password</p>
      );
    }
  };

  return (
    <div className="w-full flex flex-col gap-y-16 justify-center items-center bg-background-light    max-h-[1000vh]   md:max-h-full pb-16 pt-16 p-3">
      {!isAuthenticated ? (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-200 p-2 md:p-6 rounded shadow-lg mx-auto w-full md:w-[80%] flex flex-col gap-y-6 relative"
        >
          <Link href="/">
            <Image
              src={`/assets/images/logos/world-logo.png`}
              priority
              alt="tongston logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </Link>
          <h2 className="text-xl font-bold mb-3 text-black">
            Enter Username and Password provided by your site admin
          </h2>

          {/* Username Input Field */}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-background-dark p-2 w-full mb-3 bg-transparent text-black h-[50px]"
            placeholder="Enter username"
          />

          {/* Password Input Field */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-background-dark p-2 w-full mb-3 bg-transparent text-black h-[50px] pr-10"
              placeholder="Enter password"
            />
            {/* Eye Icon Button for Toggle */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-black"
            >
              {showPassword ? "👁️‍🗨️" : "👁️"}
            </button>
          </div>

          <Button
            text="Login"
            className="bg-background-gold hover:bg-background-dark hover:text-white rounded-lg"
          />
        </form>
      ) : (
        <div className="  items-start w-full h-full  flex flex-col justify-between">
          <section className="log-out-section  ml-auto    items-end ">
            <button
              onClick={() => {
                sessionStorage.removeItem("authUsersPage");
                setIsAuthenticated(false);
              }}
              className=" w-[100px] h-[50px] bg-transparent text-black border border-background-dark hover:bg-background-gold "
            >
              Logout
            </button>
          </section>
          <section className="side-bar-section">
            <AdminContainer />
          </section>
        </div>
      )}
    </div>
  );
};

export default Index;
