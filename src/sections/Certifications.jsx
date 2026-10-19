import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, ShieldCheck } from "lucide-react";
import { certifications } from "../data/portfolioData";
import { easeSkillClass, staggerContainer, staggerCard } from "../utils/motion";
import TiltCard from "../components/TiltCard";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 relative">
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
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#131312] dark:text-white tracking-tight max-w-3xl leading-[1.12]">
            Professional certifications.{" "}
            <span className="font-editorial-italic font-normal text-[#fe5922] dark:text-[#38bdf8]">
              Industry recognized.
            </span>
          </h2>
          
          <p className="text-[#5e5d59] dark:text-[#94a3b8] max-w-xl text-sm sm:text-base mt-3">
            Credentialed coursework completed across Meta, IBM, MongoDB, Cisco, IIT Bombay, and One Roadmap.
          </p>
        </motion.div>

        {/* Certifications Grid matching SkillClass card system with staggered entrance */}
        <motion.div
          variants={staggerContainer(0.07, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={staggerCard}
              className="h-full"
            >
              <TiltCard
                maxTilt={8}
                className="sc-card p-6 sm:p-7 flex flex-col justify-between group cursor-default h-full"
              >
                <div>
                  {/* Header Tag + Year */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#faf8f5] dark:bg-[#1f2838] text-[#fe5922] dark:text-[#38bdf8] border border-[#e8e3d9] dark:border-[#232d3f]">
                      {cert.provider}
                    </span>
                    <span className="text-xs font-mono text-[#676561] dark:text-[#94a3b8]">
                      {cert.year}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      transition={{ type: "spring", stiffness: 350 }}
                      className="w-10 h-10 rounded-xl bg-white dark:bg-[#1a2233] border border-[#e8e3d9] dark:border-[#232d3f] flex items-center justify-center text-[#fe5922] dark:text-[#38bdf8] shrink-0 shadow-sm"
                    >
                      <ShieldCheck className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#131312] dark:text-white leading-snug group-hover:text-[#fe5922] dark:group-hover:text-[#38bdf8] transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-[#676561] dark:text-[#94a3b8] font-mono mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-[#e8e3d9] dark:border-[#232d3f]">
                    {cert.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#faf8f5] dark:bg-[#1a2233] text-[#131312] dark:text-[#f3f4f6] border border-[#e8e3d9] dark:border-[#232d3f]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-5 pt-3.5 border-t border-[#e8e3d9] dark:border-[#232d3f] flex items-center justify-between text-xs text-[#676561] dark:text-[#94a3b8]">
                  <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-mono font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Verified Credential
                  </span>
                  <span className="font-mono text-[11px] text-[#676561] dark:text-[#94a3b8]">
                    CERT // {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
