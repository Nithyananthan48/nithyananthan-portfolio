import React, { useState } from "react";
import { 
  Code, 
  Server, 
  Database, 
  Wrench, 
  Cpu, 
  Sparkles,
  Layers,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { skillCategories } from "../data/portfolioData";

const categoryIconMap = {
  frontend: Code,
  backend: Server,
  database: Database,
  apis: ShieldCheck,
  tools: Wrench,
  core: Cpu,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", name: "All Technologies" },
    ...skillCategories.map((c) => ({ id: c.id, name: c.name }))
  ];

  const displayedCategories = activeTab === "all" 
    ? skillCategories 
    : skillCategories.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header — SkillClass Editorial Tag & Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] text-[#fe5922] dark:text-[#38bdf8] text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Toolkit</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#131312] dark:text-white tracking-tight max-w-3xl leading-[1.12]">
            Every tool for the stack.{" "}
            <span className="font-editorial-italic font-normal text-[#fe5922] dark:text-[#38bdf8]">
              Organized & verified.
            </span>
          </h2>
          
          <p className="text-[#5e5d59] dark:text-[#94a3b8] max-w-xl text-sm sm:text-base mt-3">
            Practical skills verified through my academic coursework, Nitroware Technologies internship, and independent full-stack implementations.
          </p>
        </div>

        {/* Category Filter Tabs — SkillClass Pill Filter */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === cat.id
                  ? "bg-[#131312] text-white dark:bg-white dark:text-[#131312] shadow-sm font-semibold"
                  : "bg-white/80 dark:bg-[#141a26]/80 text-[#5e5d59] dark:text-[#94a3b8] hover:text-[#131312] dark:hover:text-white border border-[#e8e3d9] dark:border-[#232d3f]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skill Cards by Category */}
        <div className="space-y-12">
          {displayedCategories.map((category) => {
            const IconComponent = categoryIconMap[category.id] || Code;
            return (
              <div key={category.id} className="space-y-5">
                
                {/* Category Subheader */}
                <div className="flex items-center justify-between border-b border-[#e8e3d9] dark:border-[#232d3f] pb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-[#1f2838] border border-[#e8e3d9] dark:border-[#232d3f] flex items-center justify-center text-[#fe5922] dark:text-[#38bdf8]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#131312] dark:text-white">
                        {category.name}
                      </h3>
                      <p className="text-xs text-[#676561] dark:text-[#94a3b8] font-mono mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#676561] dark:text-[#94a3b8] px-2.5 py-1 rounded-full bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f]">
                    {category.skills.length} competencies
                  </span>
                </div>

                {/* Skill Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="sc-card p-5 flex items-center justify-between group hover:-translate-y-0.5 transition-all"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-[#faf8f5] dark:bg-[#1a2233] border border-[#e8e3d9] dark:border-[#232d3f] flex items-center justify-center text-[#131312] dark:text-white group-hover:scale-105 transition-transform">
                          <IconComponent className="w-5 h-5 text-[#fe5922] dark:text-[#38bdf8]" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#131312] dark:text-white group-hover:text-[#fe5922] dark:group-hover:text-[#38bdf8] transition-colors">
                            {skill.name}
                          </div>
                          <div className="text-[11px] font-mono text-[#676561] dark:text-[#94a3b8] mt-0.5">
                            {skill.tag}
                          </div>
                        </div>
                      </div>

                      <div className="w-2 h-2 rounded-full bg-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
