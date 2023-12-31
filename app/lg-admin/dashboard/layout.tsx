import { Sidebar } from "@/components/dashboard/Sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4 grid-cols-[200px_minmax(900px,_1fr)_100px]">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
