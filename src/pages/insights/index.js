import InsightsCon from "@/components/Innovations/containers/InsightsCon";
import Footer from "@/components/Navigations/Footer";
import Navbar from "@/components/Navigations/nav1";
import React from "react";
import Head from "next/head";

const index = () => {
  return (
    <div className="w-full h-[fixed]  bg-background-light ">
      <>
        <Head>
          <title>Insights</title>
          <meta name="description" content=" Events" />
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="Insights" />
          <meta
            property="og:description"
            content="Value, Influence & Profitability At Your Fingertips!"
          />
          <meta property="og:image" content="/assets/images/logos/tlogo.png" />
          <meta property="og:url" content="https://tongston.com/insights" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Insights" />
          <meta property="og:locale" content="en_US" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:title" content="Insights" />
          <meta
            name="twitter:description"
            content="Value, Influence & Profitability At Your Fingertips!"
          />
          <meta name="twitter:image" content="/assets/images/logos/tlogo.png" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
      </>
      {/* render container with atoms  */}
      <Navbar />
      <InsightsCon />
      <Footer />
    </div>
  );
};

export default index;
