import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  Code, 
  CheckCircle2, 
  FileDown, 
  MapPin, 
  Calendar,
  Layers,
  Award,
  Terminal,
  UserCheck
} from "lucide-react";
import { personalInfo, education, experience, developmentProcess } from "../data/portfolioData";

export default function CreativeAbout() {
  const [activeTab, setActiveTab] = useState("background");

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#09090b] text-[#fefefe] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2222]/10 border border-[#ff2222]/25 text-xs font-mono text-[#ff4444] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2222]" />
            <span>ABOUT THE DEVELOPER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-jost tracking-tight leading-tight">
            Engineering Web Solutions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#ff4444]">
              with Clean Code & Purpose
            </span>
          </h2>
        </div>

        {/* Two-Column Master Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Developer Overview Card (NO profile picture, NO person avatar) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0f0f14] border border-white/10 shadow-xl space-y-6">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ff2222] text-white flex items-center justify-center font-mono font-black text-base shadow-[0_0_15px_rgba(255,34,34,0.4)]">
                    N
                  </div>
                  <div>
                    <h3 className="font-bold text-white font-jost text-lg leading-snug">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs font-mono text-[#ff4444]">
                      {personalInfo.targetRole}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-[#a1a1aa] font-mono">
                  <MapPin size={13} className="text-[#ff2222]" />
                  <span>Coimbatore</span>
                </div>
              </div>

              {/* Developer Dossier Details */}
              <div className="space-y-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <span className="text-[#71717a]">CURRENT DEGREE</span>
                  <span className="text-white font-semibold">MCA (8.1 CGPA)</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <span className="text-[#71717a]">INSTITUTION</span>
                  <span className="text-white font-semibold">Hindusthan CAS</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <span className="text-[#71717a]">PRACTICE</span>
                  <span className="text-white font-semibold">Nitroware Tech (Python)</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <span className="text-[#71717a]">CORE STACK</span>
                  <span className="text-white font-semibold">React · Node · DBs</span>
                </div>
              </div>

              {/* Direct Resume Action */}
              <a
                href={personalInfo.resumePath}
                download="Nithyananthan_Full_Stack_Developer_Resume.pdf"
                className="w-full py-3 px-4 rounded-xl bg-[#ff2222] hover:bg-[#ff3838] text-white font-mono text-xs font-semibold tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,34,34,0.3)] active:scale-95"
              >
                <FileDown size={15} />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Bio Statement, Education & Experience Tabs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Professional Bio Statement */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0f0f14] border border-white/10 space-y-3">
              <div className="text-xs font-mono text-[#ff4444] uppercase tracking-wider">
                // Background & Engineering Focus
              </div>
              
              <p className="text-base sm:text-lg text-white font-jost font-medium leading-relaxed">
                "I focus on writing clean, maintainable code to bridge responsive user interfaces with robust backend APIs and high-integrity databases."
              </p>

              <p className="text-[#a1a1aa] text-sm leading-relaxed pt-1">
                {personalInfo.about}
              </p>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="flex border-b border-white/10 gap-2">
              <button
                onClick={() => setActiveTab("background")}
                className={`pb-3 px-3 font-mono text-xs font-semibold tracking-wider transition-all relative cursor-pointer ${
                  activeTab === "background"
                    ? "text-[#ff2222]"
                    : "text-[#71717a] hover:text-white"
                }`}
              >
                EDUCATION & INTERNSHIP
                {activeTab === "background" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff2222]"
                  />
                )}
              </button>

              <button
                onClick={() => setActiveTab("process")}
                className={`pb-3 px-3 font-mono text-xs font-semibold tracking-wider transition-all relative cursor-pointer ${
                  activeTab === "process"
                    ? "text-[#ff2222]"
                    : "text-[#71717a] hover:text-white"
                }`}
              >
                WORKFLOW PIPELINE
                {activeTab === "process" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff2222]"
                  />
                )}
              </button>
            </div>

            {/* Tab 1: Education & Experience Details */}
            {activeTab === "background" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {/* MCA Degree Card */}
                <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff4444]">
                        <GraduationCap size={14} />
                        <span>2024 — 2026 · FINAL YEAR</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold font-jost text-white">
                        {education[0].degree}
                      </h4>
                      <p className="text-xs text-[#a1a1aa]">
                        {education[0].institution} · {education[0].location}
                      </p>
                    </div>
                    <div className="px-2.5 py-1 rounded-md bg-[#ff2222]/15 border border-[#ff2222]/30 text-[#ff4444] font-mono text-xs font-bold whitespace-nowrap">
                      CGPA: {education[0].cgpa}
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-[#8e8e98] leading-relaxed">
                    {education[0].description}
                  </p>
                </div>

                {/* Nitroware Technologies Internship (Anchor target for #experience) */}
                <div id="experience" className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all scroll-mt-24">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff4444]">
                        <Briefcase size={14} />
                        <span>{experience[0].period}</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold font-jost text-white">
                        {experience[0].role}
                      </h4>
                      <p className="text-xs text-[#a1a1aa]">
                        {experience[0].company} · {experience[0].location}
                      </p>
                    </div>
                    <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80 whitespace-nowrap">
                      {experience[0].duration}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-[#8e8e98] leading-relaxed">
                    {experience[0].description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {experience[0].technologies.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#a1a1aa]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BBA Foundation Degree Card */}
                <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#a1a1aa]">
                        <GraduationCap size={14} />
                        <span>{education[1].period}</span>
                      </div>
                      <h4 className="text-base font-bold font-jost text-white">
                        {education[1].degree}
                      </h4>
                      <p className="text-xs text-[#71717a]">
                        {education[1].institution} · {education[1].location}
                      </p>
                    </div>
                    <div className="px-2.5 py-1 rounded bg-white/5 text-white/70 font-mono text-xs">
                      CGPA: {education[1].cgpa}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 2: Development Process */}
            {activeTab === "process" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {developmentProcess.map((step) => (
                  <div
                    key={step.step}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#ff2222]/30 transition-all"
                  >
                    <div className="flex items-center justify-between font-mono text-xs mb-1">
                      <span className="text-[#ff2222] font-semibold">{step.step} //</span>
                      <span className="text-[#71717a] text-[10px]">{step.tagline}</span>
                    </div>
                    <h5 className="font-bold text-white text-sm font-jost">
                      {step.title}
                    </h5>
                    <p className="mt-1 text-xs text-[#8e8e98] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
