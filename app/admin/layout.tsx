"use client";

import React from "react";
import { Sidebar } from "./_components/sidebar";
import { Header } from "./_components/header";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen flex flex-col sm:flex-row">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
