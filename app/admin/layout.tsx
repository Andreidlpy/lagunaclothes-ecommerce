import React from "react";
import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen gap-2 flex">
      <Sidebar />
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default DashboardLayout;
