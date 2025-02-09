import EventsCon from "@/components/Innovations/containers/EventsCon";
import Footer from "@/components/Navigations/Footer";
import Navbar from "@/components/Navigations/nav1";
import React from "react";
import Head from "next/head";

const index = () => {
  return (
    <div className="w-full h-[fixed]  bg-background-light ">
      <>
        <Head>
          <title>Events</title>
          <meta name="description" content=" Events" />
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="Events" />
          <meta property="og:description" content="Events" />
          <meta property="og:image" content="/assets/images/logos/tlogo.png" />
          <meta property="og:url" content="https://tongston.com/events" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Events" />
          <meta property="og:locale" content="en_US" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:title" content="Events" />
          <meta name="twitter:description" content="Events" />
          <meta name="twitter:image" content="/assets/images/logos/tlogo.png" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
      </>
      {/* render container with atoms  */}
      <Navbar />
      <EventsCon />
      <Footer />
    </div>
  );
};

export default index;
