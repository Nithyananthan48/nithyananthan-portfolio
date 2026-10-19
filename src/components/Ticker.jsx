import React from "react";
import { motion } from "framer-motion";

export default function Ticker() {
  const items = [
    "FULL STACK DEVELOPER",
    "MCA 8.1 CGPA",
    "REACT.JS & RESPONSIVE UI",
    "NODE.JS & EXPRESS REST APIS",
    "MONGODB & MYSQL DATABASES",
    "JWT AUTHENTICATION",
    "NITROWARE TECHNOLOGIES INTERN",
    "COIMBATORE, TAMIL NADU",
  ];

  // Duplicate for seamless loop
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-[#e8e3d9] dark:border-[#232d3f] bg-white/50 dark:bg-[#0f141f]/50 backdrop-blur-sm select-none">
      <div className="sc-ticker-track flex items-center gap-8 whitespace-nowrap will-change-transform hover:[animation-play-state:paused]">
        {repeatedItems.map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-8 text-xs sm:text-sm font-mono tracking-widest text-[#676561] dark:text-[#94a3b8] font-medium"
          >
            <span className="hover:text-[#fe5922] dark:hover:text-[#38bdf8] transition-colors cursor-default">
              {item}
            </span>
            <span className="font-editorial-italic text-[#fe5922] dark:text-[#38bdf8] text-base select-none">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
