import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  Code, 
  CheckCircle2, 
  FileDown, 
  MapPin, 
  Sparkles, 
  Calendar,
  Layers,
  Award
} from "lucide-react";
import { personalInfo, education, experience, developmentProcess } from "../data/portfolioData";

export default function CreativeAbout() {
  const [activeTab, setActiveTab] = useState("background");

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0e] text-[#fefefe] border-t border-white/5">
      {/* Background Decorative Tech Coordinates */}
      <div className="absolute top-12 right-8 font-mono text-[10px] text-white/10 tracking-widest hidden md:block">
        // 01_ABOUT_CORE.SYS
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2222]/10 border border-[#ff2222]/30 text-xs font-mono text-[#ff4444] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2222]" />
            <span>01 // ABOUT THE DEVELOPER</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-jost tracking-tight leading-tight">
            CRAFTING PRACTICAL WEB EXPERIENCES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-[#ff2222]">
              THROUGH CLEAN CODE & STRUCTURED ARCHITECTURE
            </span>
          </h2>
        </div>

        {/* Two-Column Master Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait Card & Recruiter Quick Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group p-4 sm:p-5 rounded-2xl bg-[#111118] border border-white/10 hover:border-[#ff2222]/40 transition-all duration-300 shadow-2xl">
              
              {/* Corner Frame Accents */}
              <div className="absolute top-2 left-2 font-mono text-xs text-[#ff2222] select-none">┌</div>
              <div className="absolute top-2 right-2 font-mono text-xs text-[#ff2222] select-none">┐</div>
              <div className="absolute bottom-2 left-2 font-mono text-xs text-[#ff2222] select-none">└</div>
              <div className="absolute bottom-2 right-2 font-mono text-xs text-[#ff2222] select-none">┘</div>

              {/* Profile Image with subtle zoom on hover */}
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-neutral-900 border border-white/5">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to avatar if profile.jpg fails
                    e.currentTarget.src = personalInfo.avatarImage;
                  }}
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Bottom Overlay Info Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-black/80 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-mono text-xs font-bold text-white tracking-wide">
                        {personalInfo.name}
                      </div>
                      <div className="text-[11px] text-[#ff4444] font-mono">
                        {personalInfo.title}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-[#a1a1aa] font-mono">
                      <MapPin size={12} className="text-[#ff2222]" />
                      <span>Coimbatore, IN</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Under-Photo Verified Quick Details */}
              <div className="pt-4 grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-[#71717a] block text-[10px]">CURRENT EDUCATION</span>
                  <span className="text-white font-bold">MCA · 8.1 CGPA</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-[#71717a] block text-[10px]">INDUSTRY PRACTICE</span>
                  <span className="text-white font-bold">Nitroware Tech</span>
                </div>
              </div>

              {/* Direct CV Button */}
              <a
                href={personalInfo.resumePath}
                download="Nithyananthan_Full_Stack_Developer_Resume.pdf"
                className="mt-4 w-full py-3 px-4 rounded-lg bg-white/5 hover:bg-[#ff2222] hover:text-white border border-white/10 hover:border-transparent text-white font-mono text-xs font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn"
              >
                <FileDown size={14} className="group-hover/btn:translate-y-0.5 transition-transform" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Kinetic Statement, Tabs & In-Depth Details */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Kinetic Highlight Statement Inspired by Reference */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f0f16] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff2222]/10 blur-3xl pointer-events-none" />
              
              <div className="font-mono text-xs text-[#ff4444] tracking-widest uppercase mb-3">
                // Developer Philosophy & Focus
              </div>
              
              <p className="text-xl sm:text-2xl text-white font-jost font-semibold leading-relaxed">
                "I focus on writing clean, maintainable code to bridge responsive user interfaces with robust backend APIs and high-integrity databases."
              </p>

              <p className="mt-4 text-[#9e9ea8] text-sm sm:text-base leading-relaxed">
                {personalInfo.about}
              </p>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="flex border-b border-white/10 gap-2">
              <button
                onClick={() => setActiveTab("background")}
                className={`pb-3 px-4 font-mono text-xs font-bold tracking-wider transition-all relative ${
                  activeTab === "background"
                    ? "text-[#ff2222]"
                    : "text-[#71717a] hover:text-white"
                }`}
              >
                [ EDUCATION & INTERNSHIP ]
                {activeTab === "background" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff2222]"
                  />
                )}
              </button>

              <button
                onClick={() => setActiveTab("process")}
                className={`pb-3 px-4 font-mono text-xs font-bold tracking-wider transition-all relative ${
                  activeTab === "process"
                    ? "text-[#ff2222]"
                    : "text-[#71717a] hover:text-white"
                }`}
              >
                [ WORKFLOW PIPELINE ]
                {activeTab === "process" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff2222]"
                  />
                )}
              </button>
            </div>

            {/* Tab 1: Education & Internship Timeline */}
            {activeTab === "background" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* MCA Card */}
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-2 text-xs font-mono text-[#ff4444]">
                        <GraduationCap size={14} />
                        <span>2024 — 2026 · FINAL YEAR</span>
                      </div>
                      <h4 className="text-lg font-bold font-jost text-white">
                        {education[0].degree}
                      </h4>
                      <p className="text-xs text-[#a1a1aa]">
                        {education[0].institution} · {education[0].location}
                      </p>
                    </div>
                    <div className="px-3 py-1 rounded-md bg-[#ff2222]/20 border border-[#ff2222]/40 text-[#ff4444] font-mono text-xs font-bold whitespace-nowrap">
                      CGPA: {education[0].cgpa}
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-[#8e8e98] leading-relaxed">
                    {education[0].description}
                  </p>
                </div>

                {/* Nitroware Technologies Internship */}
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-2 text-xs font-mono text-[#ff4444]">
                        <Briefcase size={14} />
                        <span>{experience[0].period}</span>
                      </div>
                      <h4 className="text-lg font-bold font-jost text-white">
                        {experience[0].role}
                      </h4>
                      <p className="text-xs text-[#a1a1aa]">
                        {experience[0].company} · {experience[0].location}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80 whitespace-nowrap">
                      {experience[0].duration}
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-[#8e8e98] leading-relaxed">
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

                {/* BBA Foundation */}
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-2 text-xs font-mono text-[#a1a1aa]">
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

            {/* Tab 2: Workflow Pipeline */}
            {activeTab === "process" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {developmentProcess.map((step) => (
                  <div
                    key={step.step}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#ff2222]/30 transition-all group"
                  >
                    <div className="flex items-center justify-between font-mono text-xs mb-1.5">
                      <span className="text-[#ff2222] font-bold">{step.step} //</span>
                      <span className="text-[#71717a] text-[10px]">{step.tagline}</span>
                    </div>
                    <h5 className="font-bold text-white text-sm font-jost group-hover:text-[#ff4444] transition-colors">
                      {step.title}
                    </h5>
                    <p className="mt-1.5 text-xs text-[#8e8e98] leading-relaxed">
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
