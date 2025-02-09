import ServiceRequestChart from "@/api/dashboard/businesschart";
import ContactCharts from "@/api/dashboard/contactchart";
import SubscribersChart from "@/api/dashboard/subscriberschart";
import React from "react";

export default function DashBoard() {
  return (
    <div className="w-full h-[fixed] justify-center grid grid-cols-2  gap-y-8  items-start  p-3">
      <ServiceRequestChart />
      <ContactCharts />
      <SubscribersChart />
    </div>
  );
}
