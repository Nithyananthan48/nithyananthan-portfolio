import React, { useState } from "react";
import { 
  Code, 
  Server, 
  Database, 
  Wrench, 
  Cpu, 
  CheckCircle2, 
  Sparkles,
  Terminal,
  Layers
} from "lucide-react";
import { skillCategories } from "../data/portfolioData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", name: "All Skills" },
    ...skillCategories.map((c) => ({ id: c.id, name: c.name }))
  ];

  const displayedCategories = activeTab === "all" 
    ? skillCategories 
    : skillCategories.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-600 dark:text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>03 · Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="gradient-text">Practical Knowledge</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base mt-2">
            Applied technical capabilities acquired through coursework, full stack internship, and hands-on project implementation.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === cat.id
                  ? "bg-cyan-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20"
                  : "bg-white dark:bg-slate-900/70 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-slate-700 shadow-sm dark:shadow-none"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="space-y-12">
          {displayedCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800/80 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400"></span>
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                    {category.description}
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {category.skills.length} skills
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="glass-panel p-4 rounded-xl flex items-center justify-between group hover:border-cyan-500/50 hover:bg-cyan-50/40 dark:hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500/15 transition-colors font-mono font-bold text-xs">
                        &lt;/&gt;
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                          {skill.tag}
                        </span>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-cyan-50 dark:bg-slate-800/80 text-cyan-700 dark:text-cyan-400 border border-cyan-200/60 dark:border-slate-700/60">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-12 p-4 rounded-2xl bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 text-center text-xs text-slate-600 dark:text-slate-400 font-mono shadow-sm dark:shadow-none">
          <span>
            💡 Skills are represented with honesty based on practical project usage, internship tasks, and academic application.
          </span>
        </div>

      </div>
    </section>
  );
}

