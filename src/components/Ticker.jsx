import React from "react";

export default function Ticker() {
  const items = [
    "FULL STACK DEVELOPER",
    "MCA 8.1 CGPA",
    "REACT.JS & RESPONSIVE UI",
    "NODE.JS & EXPRESS REST APIS",
    "MONGODB & MYSQL DATABASES",
    "JWT AUTHENTICATION",
    "NITROWARE TECHNOLOGIES INTERN",
    "COIMBATORE, TAMIL NADU, INDIA",
  ];

  // Duplicate for seamless infinite marquee loop
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-white/10 bg-[#0a0a0f] select-none z-10">
      <div className="sc-ticker-track flex items-center gap-8 whitespace-nowrap will-change-transform hover:[animation-play-state:paused]">
        {repeatedItems.map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-8 text-xs sm:text-sm font-mono tracking-widest text-[#a1a1aa] font-medium"
          >
            <span className="hover:text-[#ff2222] transition-colors cursor-default">
              {item}
            </span>
            <span className="text-[#ff2222] text-sm select-none">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
