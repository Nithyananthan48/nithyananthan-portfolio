import React from "react";
import { motion } from "framer-motion";
import { 
  Layers, 
  Layout, 
  Server, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  FolderGit2, 
  MonitorSmartphone, 
  Workflow, 
  Users, 
  CheckCircle2
} from "lucide-react";
import { developmentProcess, whyWorkWithMe } from "../data/portfolioData";
import { easeSkillClass, staggerContainer, staggerCard } from "../utils/motion";
import TiltCard from "../components/TiltCard";

const processIconMap = {
  Layers: Layers,
  Layout: Layout,
  Server: Server,
  Database: Database,
  ShieldCheck: ShieldCheck,
  Cpu: Cpu
};

const whyIconMap = {
  Sparkles: Sparkles,
  FolderGit2: FolderGit2,
  Cpu: Cpu,
  MonitorSmartphone: MonitorSmartphone,
  Workflow: Workflow,
  Users: Users
};

export default function Capabilities() {
  return (
    <section id="lifecycle" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PART 1: The Experience / Development Lifecycle (SkillClass 6-step numbered signature) */}
        <div>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: easeSkillClass }}
            className="flex flex-col items-center text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] text-[#fe5922] dark:text-[#38bdf8] text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
              <Workflow className="w-3.5 h-3.5" />
              <span>Development Lifecycle</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#131312] dark:text-white tracking-tight max-w-3xl leading-[1.12]">
              From initial schema to{" "}
              <span className="font-editorial-italic font-normal text-[#fe5922] dark:text-[#38bdf8]">
                production delivery.
              </span>
            </h2>
            
            <p className="text-[#5e5d59] dark:text-[#94a3b8] max-w-xl text-sm sm:text-base mt-3">
              A structured, step-by-step full-stack engineering workflow tested across real web applications.
            </p>
          </motion.div>

          {/* 6-Step Grid with Framer Motion Staggered Entrance */}
          <motion.div
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {developmentProcess.map((step) => {
              const IconComponent = processIconMap[step.icon] || Layers;
              return (
                <motion.div
                  key={step.step}
                  variants={staggerCard}
                  className="h-full"
                >
                  <TiltCard
                    maxTilt={8}
                    className="sc-card p-7 flex flex-col justify-between group cursor-default h-full"
                  >
                    <div>
                      {/* Top Row: Step Number & Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-editorial-italic text-3xl sm:text-4xl text-[#fe5922] dark:text-[#38bdf8] font-normal">
                          {step.step}
                        </span>
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 4 }}
                          transition={{ type: "spring", stiffness: 350 }}
                          className="w-10 h-10 rounded-xl bg-[#faf8f5] dark:bg-[#1f2838] border border-[#e8e3d9] dark:border-[#232d3f] flex items-center justify-center text-[#131312] dark:text-white shadow-xs"
                        >
                          <IconComponent className="w-5 h-5 text-[#fe5922] dark:text-[#38bdf8]" />
                        </motion.div>
                      </div>

                      <div className="text-xs font-mono uppercase tracking-wider text-[#a64025] dark:text-[#38bdf8] font-semibold mb-1">
                        {step.tagline}
                      </div>

                      <h3 className="text-xl font-bold text-[#131312] dark:text-white mb-2.5">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#5e5d59] dark:text-[#94a3b8] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#e8e3d9] dark:border-[#232d3f] flex items-center justify-between text-[11px] font-mono text-[#676561] dark:text-[#94a3b8]">
                      <span>PHASE // {step.step}</span>
                      <span className="text-[#fe5922] dark:text-[#38bdf8] font-medium flex items-center gap-1">
                        Standard
                      </span>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* PART 2: Why Work With Me (Values & Collaboration Strengths) */}
        <div className="mt-24 pt-20 border-t border-[#e8e3d9] dark:border-[#232d3f]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: easeSkillClass }}
            className="flex flex-col items-center text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] text-[#fe5922] dark:text-[#38bdf8] text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Working Values</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#131312] dark:text-white tracking-tight max-w-2xl leading-[1.15]">
              Why work with{" "}
              <span className="font-editorial-italic font-normal text-[#fe5922] dark:text-[#38bdf8]">
                Nithyananthan?
              </span>
            </h2>
            
            <p className="text-[#5e5d59] dark:text-[#94a3b8] max-w-xl text-sm sm:text-base mt-3">
              A balanced mindset combining technical curiosity, engineering discipline, and practical team execution.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whyWorkWithMe.map((item, idx) => {
              const IconComponent = whyIconMap[item.icon] || Sparkles;
              return (
                <motion.div
                  key={idx}
                  variants={staggerCard}
                  className="h-full"
                >
                  <TiltCard
                    maxTilt={8}
                    className="sc-card p-7 flex flex-col justify-between group cursor-default h-full"
                  >
                    <div>
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: -4 }}
                        transition={{ type: "spring", stiffness: 350 }}
                        className="w-12 h-12 rounded-2xl bg-white dark:bg-[#1f2838] border border-[#e8e3d9] dark:border-[#232d3f] flex items-center justify-center text-[#fe5922] dark:text-[#38bdf8] mb-5 shadow-sm"
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.div>

                      <h3 className="text-lg font-bold text-[#131312] dark:text-white mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#5e5d59] dark:text-[#94a3b8] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-[#e8e3d9] dark:border-[#232d3f] flex items-center justify-between text-[11px] font-mono text-[#676561] dark:text-[#94a3b8]">
                      <span>VALUE // 0{idx + 1}</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Verified
                      </span>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
