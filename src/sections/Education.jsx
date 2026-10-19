import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { education } from "../data/portfolioData";
import { easeSkillClass, staggerContainer, staggerCard } from "../utils/motion";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header — SkillClass Editorial Tag & Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: easeSkillClass }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] text-[#fe5922] dark:text-[#38bdf8] text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#131312] dark:text-white tracking-tight max-w-3xl leading-[1.12]">
            Academic degrees.{" "}
            <span className="font-editorial-italic font-normal text-[#fe5922] dark:text-[#38bdf8]">
              Proven discipline.
            </span>
          </h2>
          
          <p className="text-[#5e5d59] dark:text-[#94a3b8] max-w-xl text-sm sm:text-base mt-3">
            Academic qualifications demonstrating consistent academic discipline and computer applications expertise.
          </p>
        </motion.div>

        {/* Education Cards Grid */}
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerCard}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.25, ease: easeSkillClass }}
              className="sc-card p-7 sm:p-9 space-y-5 cursor-default"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#e8e3d9] dark:border-[#232d3f]">
                <div>
                  <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                    <span className="px-3 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#faf8f5] dark:bg-[#1f2838] border border-[#e8e3d9] dark:border-[#232d3f] text-[#131312] dark:text-[#f3f4f6]">
                      {item.statusBadge}
                    </span>
                    <span className="text-xs font-mono text-[#676561] dark:text-[#94a3b8] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#131312] dark:text-white">
                    {item.degree}
                  </h3>

                  <div className="text-sm font-semibold text-[#fe5922] dark:text-[#38bdf8] mt-1">
                    {item.institution}
                  </div>

                  <div className="text-xs text-[#676561] dark:text-[#94a3b8] flex items-center gap-1.5 mt-1 font-mono">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </div>
                </div>

                {/* Score Pill */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 350 }}
                  className="self-start sm:self-center px-5 py-3 rounded-2xl bg-white dark:bg-[#1a2233] border border-[#e8e3d9] dark:border-[#232d3f] text-center shadow-sm"
                >
                  <div className="text-[10px] uppercase tracking-wider text-[#676561] dark:text-[#94a3b8] font-mono">
                    Grade Score
                  </div>
                  <div className="text-2xl font-extrabold text-[#131312] dark:text-white font-mono">
                    {item.cgpa} <span className="text-xs font-semibold text-[#fe5922] dark:text-[#38bdf8]">CGPA</span>
                  </div>
                </motion.div>
              </div>

              <p className="text-sm sm:text-base text-[#5e5d59] dark:text-[#94a3b8] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
