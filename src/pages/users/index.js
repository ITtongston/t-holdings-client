import React from "react";
import Con from "@/components/Main/container";
import Head from "next/head";
import SubscriberList from "@/api/FetchSubscribers";
import GetServiceRequest from "@/api/GetServiceRequest";

const index = () => {
  return (
    <div className="w-full  flex flex-col gap-y-[4rem]  bg-background-light h-fixed] pb-[4rem] ">
      {/* render container with atoms  */}
      <SubscriberList />
      {/* render service request ui */}
      <GetServiceRequest />
    </div>
  );
};

export default index;
