import React from "react";
import Con from "@/components/Main/container";
import Head from "next/head";

const index = () => {
  return (
    <div className="w-full h-[fixed]  bg-background-light ">
      <>
        <Head>
          <title>Tongston Entrepreneurship Group</title>
          <meta
            name="description"
            content=" We build Value, Influence  and Profitability  Through our Enterprise Solutions."
          />
          <meta
            property="og:title"
            content="Tongston  Entrepreneurship Group"
          />
          <meta
            property="og:description"
            content=" We build Value, Influence  and Profitability  Through our Enterprise Solutions."
          />
        </Head>
      </>
      {/* render container with atoms  */}
      <Con />
    </div>
  );
};

export default index;
