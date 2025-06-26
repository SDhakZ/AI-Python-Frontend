// src/components/Layout.js
import React from "react";
import SidebarLayout from "./SidebarLayout";
import { Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-svh ">
      <SidebarLayout />
      <div className="flex-grow h-full overflow-y-auto max-h-svh">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
