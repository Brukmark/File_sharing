"use client";
import { File, Files, ShieldAlert, ShieldEllipsis, Upload } from "lucide-react";
import React, { useState } from "react";

function SideNav() {
  const menuList = [
    { id: 1, name: "upload", icon: Upload, path: "/upload" },
    { id: 2, name: "files", icon: File, path: "/files" },
    { id: 3, name: "upgrade", icon: ShieldEllipsis, path: "/upgrade" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="shadow-sm border-r h-full">
      <div className="p-5 border-b">
        <img src="/logo.svg" alt="non" width={150} height={100} />
      </div>
      <div className="flex flex-col float-left w-full">
        {menuList.map((item, index) => (
          <button
            className={`flex gap-2 p-4 px-6 hover:bg-gray-100 w-full text-gray-500 ${
              activeIndex == index ? "bg-blue-50 text-primary" : null
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
