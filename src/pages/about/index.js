import React from "react";
import Con from "@/components/About/container";
import Head from "next/head";
import Navbar from "@/components/Navigations/nav1";
import Footer from "@/components/Navigations/Footer";

const index = () => {
  return (
    <div className="w-full h-[fixed]  bg-background-light ">
      <>
        <Head>
          <title>About</title>
          <meta
            name="description"
            content=" Tongston is a multi-award winning group focused on entrepreneurial education, enterprise, finance and media leveraging on technology for people, government and institutions to drive global sustainable socio-economic development"
          />
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="About" />
          <meta
            property="og:description"
            content="Tongston is a multi-award winning group focused on entrepreneurial education, enterprise, finance and media leveraging on technology for people, government and institutions to drive global sustainable socio-economic development"
          />
          <meta property="og:image" content="/assets/images/logos/tlogo.png" />
          <meta property="og:url" content="https://tongston.com/about" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="About" />
          <meta property="og:locale" content="en_US" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:title" content="About" />
          <meta
            name="twitter:description"
            content="Tongston is a multi-award winning group focused on entrepreneurial education, enterprise, finance and media leveraging on technology for people, government and institutions to drive global sustainable socio-economic development"
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
