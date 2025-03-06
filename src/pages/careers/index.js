import CareersCon from "@/components/Careers/container";
import Footer from "@/components/Navigations/Footer";
import Navbar from "@/components/Navigations/nav1";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <div className="w-full h-[fixed]  bg-background-light  fade ">
      <>
        <Head>
          <title>Careers</title>
          <meta
            name="description"
            content=" Dare to Think, Create and Sell Your Ideas"
          />
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="Careers" />
          <meta
            property="og:description"
            content="Dare to Think, Create and Sell Your Ideas"
          />
          <meta property="og:image" content="/assets/images/logos/tlogo.png" />
          <meta property="og:url" content="https://tongston.com/careers" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Careers" />
          <meta property="og:locale" content="en_US" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:title" content="Careers" />
          <meta
            name="twitter:description"
            content="Dare to Think, Create and Sell Your Ideas"
          />
          <meta name="twitter:image" content="/assets/images/logos/tlogo.png" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
      </>
      {/* render container with atoms  */}
      <Navbar />
      <CareersCon />

      <Footer />
    </div>
  );
};

export default index;
