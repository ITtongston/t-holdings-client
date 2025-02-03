import React, { useState } from "react";
import { motion } from "framer-motion";
import Teams1 from "./Teams/teams";
import AdvisoryBoard from "./Teams/LeaderBoard";

export default function TeamsTabs() {
  // Define tabs with labels
  const tabs = [
    { id: 1, label: "Team" },
    { id: 2, label: "Advisory Board" },
  ];

  // State for the active tab
  const [activeTab, setActiveTab] = useState(1);

  // Map tab IDs to components
  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return <Teams1 />;
      case 2:
        return <AdvisoryBoard />;
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
            className={`px-4 py-2 text-xl  md:text-2xl    font-bold  font-body max-w-[250px] md:max-w-[250px] h-[70px]  ${
              activeTab === tab.id
                ? " text-white   bg-gradient-to-r from-background-gold via-background-gold  to-orange-400  transition-transform ease-in-out duration-1000 "
                : "bg-background-light text-yellow "
            } transition duration-300 ease-in-out`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <section className="w-full  h-[fixed] px-[3rem]   flex justify-center items-center  bg-gradient-to-r from-background-gold via-background-gold  to-orange-500  ">
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
