import React from "react";
import Con from "@/components/Main/container";
import Head from "next/head";
import Navbar from "@/components/Navigations/nav1";
import Footer from "@/components/Navigations/Footer";

const index = () => {
  return (
    <div className="w-full h-[fixed]  bg-background-light fade ">
      <>
        <Head>
          {/* meta image  */}

          <link
            rel="icon"
            type="image/png"
            href="/assets/images/logos/world-logo.png"
          />
          <title>Tongston Entrepreneurship Group</title>
          <meta
            name="description"
            content="We build valuable, profitable, and influential people, governments, businesses & non-profits."
          />

          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="Tongston Entrepreneurship Group" />
          <meta
            property="og:description"
            content="We build valuable, profitable, and influential people, governments, businesses & non-profits."
          />
          <meta property="og:image" content="/assets/images/logos/tlogo.png" />
          <meta property="og:url" content="https://tongston.com" />
          <meta property="og:type" content="website" />
          <meta
            property="og:site_name"
            content="Tongston Entrepreneurship Group"
          />
          <meta property="og:locale" content="en_US" />

          {/* Twitter Card Meta Tags */}
          <meta
            name="twitter:title"
            content="Tongston Entrepreneurship Group"
          />
          <meta
            name="twitter:description"
            content="We build valuable, profitable, and influential people, governments, businesses & non-profits."
          />
          <meta name="twitter:image" content="/assets/images/logos/tlogo.png" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
      </>
      {/* render container with atoms  */}
      <Navbar />
      <Con />
      <Footer />
    </div>
  );
};

export default index;
