import React from "react";

import Sidebar from "./Sidebar";
function DashboardLayout({ children }) {
  return (
    <div className="dashboard-container flex flex-row w-screen h-screen bg-white">
      <Sidebar />
      <main className="dashboard-content flex-1 p-6 items-center flex justify-center text-black">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
