import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Server, 
  Database, 
  ShieldCheck, 
  GitBranch, 
  Cpu, 
  Check, 
  Terminal,
  Sparkles
} from "lucide-react";
import { skillCategories } from "../data/portfolioData";

export default function CreativeSkills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categoryIcons = {
    frontend: Code2,
    backend: Server,
    database: Database,
    apis: ShieldCheck,
    tools: GitBranch,
    core: Cpu,
  };

  const filteredCategories = selectedCategory === "all"
    ? skillCategories
    : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#08080a] text-white border-t border-white/5">
      {/* Background Decorative Matrix Coordinates */}
      <div className="absolute top-12 left-8 font-mono text-[10px] text-white/10 tracking-widest hidden md:block">
        // 02_TECH_STACK_MATRIX.EXE
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2222]/10 border border-[#ff2222]/30 text-xs font-mono text-[#ff4444] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2222]" />
              <span>02 // SKILL STACK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-jost tracking-tight leading-tight">
              TECHNICAL MATRIX & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-[#ff2222]">
                CORE COMPETENCIES
              </span>
            </h2>
          </div>

          {/* Recruiter Quick Filter Pill */}
          <div className="flex flex-wrap gap-1.5 font-mono text-xs">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                selectedCategory === "all"
                  ? "bg-[#ff2222] text-white border-[#ff2222] shadow-[0_0_15px_rgba(255,34,34,0.4)]"
                  : "bg-white/5 text-[#a1a1aa] border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              ALL (23)
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg border transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#ff2222] text-white border-[#ff2222] shadow-[0_0_15px_rgba(255,34,34,0.4)]"
                    : "bg-white/5 text-[#a1a1aa] border-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                {cat.name.split(" ")[0].toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Terminal;
            return (
              <div
                key={category.id}
                className="group p-6 rounded-2xl bg-[#0f0f15] border border-white/10 hover:border-[#ff2222]/40 transition-all duration-300 relative flex flex-col justify-between"
              >
                {/* Top Row: Category Title & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 text-[#ff2222] flex items-center justify-center border border-white/10 group-hover:scale-105 group-hover:bg-[#ff2222]/10 transition-all">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-xs text-[#71717a]">
                      [{category.skills.length} MODULES]
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-jost text-white group-hover:text-[#ff4444] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[#8e8e98] mt-1 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skill Items List with JetBrains Mono Tags */}
                  <div className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all flex items-center justify-between group/item"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff2222] group-hover/item:scale-125 transition-transform" />
                          <span className="text-sm font-medium text-white font-jost">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-[#a1a1aa] bg-white/5 px-2 py-0.5 rounded">
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Frame Indicator */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-[#555560]">
                  <span>CATEGORY // {category.id.toUpperCase()}</span>
                  <span className="text-[#ff2222]">READY FOR PRODUCTION</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
