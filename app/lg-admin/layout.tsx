import { Sidebar } from "@/components/dashboard/Sidebar";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-screen gap-2 flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default AdminLayout;
