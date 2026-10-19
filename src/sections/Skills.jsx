import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, 
  Server, 
  Database, 
  Wrench, 
  Cpu, 
  ShieldCheck,
  Sparkles
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
    <section id="skills" data-scene="Skills" className="py-24 md:py-32 relative bg-[#070709] text-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111118] border border-white/10 text-[#ff2222] text-xs font-mono uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>03 // CORE TECHNICAL MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-3xl leading-[1.1]">
            Verified full-stack toolset.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2222] to-[#ff6666]">
              Modern &amp; battle-tested.
            </span>
          </h2>
          
          <p className="text-[#8e8e99] max-w-xl text-sm sm:text-base mt-4 font-sans leading-relaxed">
            Practical skills verified through academic coursework, Nitroware Technologies internship, and independent full-stack deployments.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-14">
          {categories.map((cat) => {
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-mono font-medium transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#ff2222] text-white font-bold shadow-[0_0_15px_rgba(255,34,34,0.4)]"
                    : "bg-[#111118] text-[#8e8e99] hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Skill Cards by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((category) => {
              const IconComp = categoryIconMap[category.id] || Cpu;
              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="rb-card p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    {/* Category Title */}
                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-[#ff2222]/10 border border-[#ff2222]/30 text-[#ff2222]">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-white text-lg font-mono">
                          {category.name}
                        </h3>
                      </div>
                      <span className="text-xs font-mono text-[#71717a]">
                        {category.skills.length} skills
                      </span>
                    </div>

                    {/* Skill List with Progress Bars */}
                    <div className="space-y-4">
                      {category.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="text-white font-medium">{skill.name}</span>
                            <span className="text-[#a1a1aa]">{skill.level}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-black/60 rounded-full overflow-hidden border border-white/5">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: sIdx * 0.05 }}
                              className="h-full bg-gradient-to-r from-[#ff2222] to-[#ff6666] rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom tagline */}
                  <div className="pt-5 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#71717a]">
                    <span>STATUS: PRODUCTION-READY</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff2222]" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
