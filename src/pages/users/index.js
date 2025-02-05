"use client";

import UsersTabs from "@/components/users-Route/UsersTabs";
import React, { useState, useEffect } from "react";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/shared/Notification/Notification";
import Button from "@/shared/buttons/button";
import Image from "next/image";

const Index = () => {
  // State for authentication and password
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = "#Tongston_Admin2025"; // Developer-defined password

  // Check if user is already authenticated
  useEffect(() => {
    const authStatus = localStorage.getItem("authUsersPage");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, [password]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      showSuccessNotification(<p>Login Successful.</p>);

      sessionStorage.setItem("authUsersPage", "true"); // Store auth status in sessionStorage
    } else {
      showErrorNotification(
        <p className="text-red">
          Please enter the password provided by your site admin
        </p>
      );
    }
  };

  return (
    <div className="w-full flex flex-col gap-y-16 justify-center items-center bg-background-light h-[fixed] pb-16   pt-16 p-3 ">
      {!isAuthenticated ? (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-200   p-2   md:p-6 rounded shadow-lg mx-auto  w-full    md:w-[80%]    flex flex-col gap-y-6     relative"
        >
          <Image
            src={`/assets/images/logos/world-logo.png`}
            priority
            alt="tongston logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <h2 className="text-xl font-bold mb-3 text-black">
            Enter the Password provided by your site admin{" "}
          </h2>
          <div className="relative">
            {/* Password Input Field */}
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
        <div className=" flex flex-col gap-y-7 justify-start items-start  w-full   h-[fixed]  py-[5rem] ">
          <section className="log-out-section  ml-5 top-[2rem] md:ml-[7rem]   relative   md:top-[4rem]   ">
            <button
              onClick={() => {
                sessionStorage.removeItem("authUsersPage");
                setIsAuthenticated(false);
              }}
              className="bg-transparent  border border-background-dark text-black   rounded   hover:bg-background-danger hover:text-white transform duration-700 ease-in-out   px-4 py-2  mt-4"
            >
              Logout
            </button>
          </section>

          <UsersTabs />
        </div>
      )}
    </div>
  );
};

export default Index;
