import React from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative p-2.5 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 bg-slate-900/60 dark:bg-slate-800/80 border-slate-700/60 dark:border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 cursor-pointer shadow-sm group"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 group-hover:rotate-45" />
        ) : (
          <Moon className="w-5 h-5 text-cyan-600 transition-transform duration-300 group-hover:-rotate-12" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

