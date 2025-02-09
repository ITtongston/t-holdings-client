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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const correctUsername = "tongstonadmin";
  const correctPassword = "#Tongston_Admin2025";

  // Check authentication status
  useEffect(() => {
    const authStatus = localStorage.getItem("authUsersPage");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Check screen width and disable page on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Change breakpoint if needed
    };

    handleResize(); // Check initially
    window.addEventListener("resize", handleResize); // Listen for changes

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent rendering on mobile devices
  if (isMobile) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-xl font-bold text-gray-700 text-center">
          Please Switch to a Desktop Device to View this Page !
        </h2>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === correctUsername && password === correctPassword) {
      setIsAuthenticated(true);
      showSuccessNotification(<p>Login Successful.</p>);
      sessionStorage.setItem("authUsersPage", "true");
    } else {
      showErrorNotification(
        <p className="text-red">Incorrect Username or Password</p>
      );
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center bg-background-light h-full pb-16 pt-16 p-7">
      {!isAuthenticated ? (
        <div className="grid grid-cols-2 w-full h-full ">
          <section className="form-container flex flex-col w-full h-[500px] shadow-2xl bg-background-light bg-opacity-40 justify-center items-center">
            <h2 className="text-3xl font-black font-heading mb-3 text-black self-baseline ml-[3.6rem]">
              Admin Login
            </h2>
            <form
              onSubmit={handleSubmit}
              className="p-2 md:p-6 rounded-xl shadow-2xl mx-auto w-full md:w-[80%] flex flex-col gap-y-6 relative"
            >
              <Link href="/" className="w-[50px]">
                <Image
                  src={`/assets/images/logos/world-logo.png`}
                  priority
                  alt="tongston logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </Link>

              <label className="flex flex-col gap-y-1 text-black font-normal">
                Username
                <div className="relative flex">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="ring-2 ring-background-footer_black rounded-md p-2 outline-none w-full mb-3 bg-transparent text-black font-thin h-[50px] pr-10"
                    placeholder="Enter username"
                  />
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-black text-sm absolute top-1/2 right-3 transform -translate-y-1/2"
                  />
                </div>
              </label>

              <label className="flex flex-col gap-y-1 text-black font-normal">
                Password
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="ring-2 ring-background-footer_black rounded-md p-2 outline-none w-full mb-3 bg-transparent text-black font-thin h-[50px] pr-10"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-black"
                  >
                    {showPassword ? (
                      <FontAwesomeIcon
                        icon={faEye}
                        className="text-sm text-black"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        className="text-sm text-black"
                      />
                    )}
                  </button>
                </div>
              </label>

              <Button
                text="Login"
                className="bg-background-gold hover:bg-background-dark hover:text-white rounded-lg"
              />
            </form>
          </section>
          <section className="w-full h-[500px] shadow-2xl">
            <Image
              src={`https://www.shutterstock.com/image-vector/man-working-laptop-computer-desk-600nw-1967455246.jpg`}
              width={800}
              height={800}
              priority
              alt="logo-image"
              className="object-fill w-full h-full scale-x-[-1]"
            />
          </section>
        </div>
      ) : (
        <div className="items-start w-full h-full flex flex-col justify-between">
          <section className="log-out-section ml-auto items-end">
            <button
              onClick={() => {
                sessionStorage.removeItem("authUsersPage");
                setIsAuthenticated(false);
              }}
              className="w-[100px] h-[50px] bg-transparent text-black border border-background-dark hover:bg-background-gold"
            >
              Logout
            </button>
          </section>
          <section className="side-bar-section">
            <AdminContainer />
          </section>
        </div>
      )}
      {/* copy right and date */}
      <div className="flex items-center justify-center text-sm text-gray-800 w-full mt-8 ">
        &copy; {new Date().getFullYear()} Tongston Admin Console. All rights
        reserved.
      </div>
    </div>
  );
};

export default Index;
