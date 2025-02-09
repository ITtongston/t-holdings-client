import React, { useState } from "react";
import { motion } from "framer-motion";
import GetServiceRequest from "@/api/FetchServiceRequest";
import SubscriberList from "@/api/FetchSubscribers";
import FetchContacts from "@/api/FetchContacts";

export default function UsersTabs() {
  // Define tabs with labels
  const tabs = [
    { id: 1, label: "Service Requests" },
    { id: 2, label: "Subscribers" },
    { id: 3, label: "Contacts" },
  ];

  // State for the active tab
  const [activeTab, setActiveTab] = useState(1);

  // Map tab IDs to components
  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return <GetServiceRequest />;
      case 2:
        return <SubscriberList />;
      case 3:
        return <FetchContacts />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[fixed]  w-full     ">
      {/* Tabs */}
      <div className="flex flex-row justify-center items-center   flex-wrap  w-full  px-2   md:px-[4rem]  lg:px-[8rem]   space-x-2   md:space-y-0 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm  md:text-lg    font-bold  font-body max-w-[250px] md:max-w-[250px] h-[70px]  ${
              activeTab === tab.id
                ? " text-yellow     transition-transform ease-in-out duration-1000 "
                : "bg-background-light text-black "
            } transition duration-300 ease-in-out`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <section className="w-full  h-[fixed]    md:px-[3rem]   flex justify-center items-center   ">
        <motion.div
          key={activeTab} // Unique key for re-rendering
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="     w-full "
        >
          {renderTabContent()}
        </motion.div>
      </section>
    </div>
  );
}
