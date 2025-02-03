import React from "react";
import Con from "@/components/About/container";
import Head from "next/head";

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
          <meta property="og:title" content="ABout | Tongston Group" />
          <meta
            property="og:description"
            content=" Tongston is a multi-award winning group focused on entrepreneurial education, enterprise, finance and media leveraging on technology for people, government and institutions to drive global sustainable socio-economic development"
          />
        </Head>
      </>
      {/* render container with atoms  */}
      <Con />
    </div>
  );
};

export default index;
