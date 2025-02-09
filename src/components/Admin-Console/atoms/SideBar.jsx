"use client";

import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt, // Dashboard
  faBlog, // Blog Posts
  faTable, // Export Data
  faPen, // Analytics
} from "@fortawesome/free-solid-svg-icons";
import UsersTabs from "../users-Route/UsersTabs";
import { CreateBlog } from "./CreateBlog";
import { faCreativeCommons } from "@fortawesome/free-brands-svg-icons";
import { BlogManager } from "./BlogManager";
import DashBoard from "./DashBoard";

// Create your components for each menu item
const Dashboard = () => <div className="text-red">Dashboard Content</div>;
const BlogPosts = () => <div>Blog Posts Content</div>;
const ExportData = () => <div>Export Data Content</div>;
const Analytics = () => <div>Analytics Content</div>;

export default function SideNavigation() {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const renderContent = () => {
    switch (selectedItem) {
      case "Dashboard":
        return <Analytics />;
      case "BlogPosts":
        return <CreateBlog />;
      case "ExportData":
        return <UsersTabs />;
      case "Analytics":
        return <DashBoard />;
      case "ManageBlogs":
        return <BlogManager />;
      default:
        return <div>Select an option</div>;
    }
  };

  return (
    <div className="h-screen flex bg-white">
      {/* Sidebar Container */}
      <div
        className={`h-full fixed inset-0  z-50 py-9  bg-slate-800  transition-all duration-300 ${
          collapsed ? "w-16" : "w-64"
        }`}
        onMouseEnter={() => setCollapsed(false)} // Expand on mouse enter
        onMouseLeave={() => setCollapsed(true)} // Collapse on mouse leave
      >
        <Sidebar collapsed={collapsed} className="h-full">
          <Menu>
            {/* Dashboard Menu Item */}
            <MenuItem
              icon={<FontAwesomeIcon icon={faTachometerAlt} />}
              className="text-black text-sm"
              onClick={() => setSelectedItem("Dashboard")}
            >
              {!collapsed && "Dashboard"}
            </MenuItem>

            {/* Blog Posts Menu Item */}
            <MenuItem
              icon={<FontAwesomeIcon icon={faBlog} />}
              className="text-black text-sm"
              onClick={() => setSelectedItem("BlogPosts")}
            >
              {!collapsed && "Create Blogs"}
            </MenuItem>

            <MenuItem
              icon={<FontAwesomeIcon icon={faCreativeCommons} />}
              className="text-black text-sm"
              onClick={() => setSelectedItem("ManageBlogs")}
            >
              {!collapsed && "Manage Blogs"}
            </MenuItem>

            {/* Export Data Menu Item */}
            <MenuItem
              icon={<FontAwesomeIcon icon={faTable} />}
              className="text-black text-sm"
              onClick={() => setSelectedItem("ExportData")}
            >
              {!collapsed && "Export Data"}
            </MenuItem>

            {/* Analytics Menu Item */}
            <MenuItem
              icon={<FontAwesomeIcon icon={faPen} />}
              className="text-black text-sm"
              onClick={() => setSelectedItem("Analytics")}
            >
              {!collapsed && "Analytics"}
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>

      {/* Content Display Area */}
      <div className="flex-1 p-3 ml-[8rem]   w-[50%]  md:w-[1100px] h-screen bg-white overflow-y-auto ">
        {/* Show content on desktop */}
        <div className="hidden lg:block">{renderContent()}</div>

        {/* Show message on mobile */}
        <div className="lg:hidden flex justify-center items-center h-full">
          <p className="text-red font-bold font-body text-xl text-center text-wrap ">
            You need to switch to a desktop computer or laptop to view this page
          </p>
        </div>
      </div>
    </div>
  );
}
