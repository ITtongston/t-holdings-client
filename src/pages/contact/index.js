import ContactCon from "@/components/Contact/container";
import Footer from "@/components/Navigations/Footer";
import Navbar from "@/components/Navigations/nav1";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <div className="w-full h-[fixed]  bg-background-light ">
      <>
        <Head>
          <title>Contact</title>
          <meta
            name="description"
            content=" We're glad you are here! Share your details with us to get started"
          />
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="Contact" />
          <meta
            property="og:description"
            content="We're glad you are here! Share your details with us to get started"
          />
          <meta property="og:image" content="/assets/images/logos/tlogo.png" />
          <meta property="og:url" content="https://tongston.com/contact" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Contact" />
          <meta property="og:locale" content="en_US" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:title" content="Contact" />
          <meta
            name="twitter:description"
            content="We're glad you are here! Share your details with us to get started"
          />
          <meta name="twitter:image" content="/assets/images/logos/tlogo.png" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
      </>
      {/* render container with atoms  */}
      <Navbar />
      <ContactCon />
      <Footer />
    </div>
  );
};

export default index;
