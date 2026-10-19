import React from "react";

/**
 * SkillClass Signature Rolling Text Link Effect
 * Recreating Framer's two-line rolling interaction where hovering slides the primary
 * text upward and brings in the colored secondary text from below.
 */
export default function RollingText({ text, active = false, className = "" }) {
  return (
    <span className={`relative inline-flex flex-col h-[18px] overflow-hidden leading-[18px] select-none ${className}`}>
      <span
        className={`inline-block transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:-translate-y-full ${
          active ? "text-white dark:text-[#131312] font-semibold" : ""
        }`}
      >
        {text}
      </span>
      <span
        aria-hidden="true"
        className={`absolute top-full left-0 inline-block transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:-translate-y-full ${
          active
            ? "text-white dark:text-[#131312] font-semibold"
            : "text-[#fe5922] dark:text-[#38bdf8] font-semibold"
        }`}
      >
        {text}
      </span>
    </span>
  );
}
