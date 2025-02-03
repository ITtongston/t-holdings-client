import React, { useState } from "react";
import { motion } from "framer-motion";
import Virtual from "./Virtual";
import Inperson from "./Inperson";

export default function EventTabs() {
  // Define tabs with labels
  const tabs = [
    { id: 1, label: "VIRTUAL EVENT" },
    { id: 2, label: "IN-PERSON EVENT" },
  ];

  // State for the active tab
  const [activeTab, setActiveTab] = useState(1);

  // Map tab IDs to components
  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return <Virtual />;
      case 2:
        return <Inperson />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[fixed]  w-full  mb-[5rem]   ">
      {/* Tabs */}
      <div className="flex flex-row justify-center items-center   flex-wrap  w-full  px-2   md:px-[4rem]  lg:px-[4rem]   space-x-2   md:space-y-0   mb-[3rem]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm  md:text-base rounded-md    font-normal  font-body max-w-[200px] md:max-w-[200px] h-[70px] ml-auto  ${
              activeTab === tab.id
                ? " text-white   bg-black    transition-transform ease-in-out duration-1000 "
                : "bg-gray-300   text-black hover:bg-gray-400 transform ease-in-out duration-700 "
            } transition duration-300 ease-in-out`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <section className="w-full  h-[fixed]    md:px-[3rem]   flex justify-center items-center  bg-background-light  ">
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
