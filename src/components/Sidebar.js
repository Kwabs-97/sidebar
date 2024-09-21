import React from "react";
import Link from "next/link";

const navItems = [
  { navItem: "settings", link: "/settings" },
  { navItem: "analytics", link: "/analytics" },
  { navItem: "profile", link: "/profile" },
];
function Sidebar() {
  return (
    <nav className="py-5 px-10 bg-gray-700">
      <ul className="flex flex-col gap-4">
        <li>
          <Link href="/dashboard">Home</Link>
        </li>
        <li>
          <Link href="/dashboard/profile">Profile</Link>
        </li>
        <li>
          <Link href="/dashboard/settings">Settings</Link>
        </li>
        <li>
          <Link href="/dashboard/analytics">Analytics</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
