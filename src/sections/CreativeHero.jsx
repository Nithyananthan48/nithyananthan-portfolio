import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileDown, FolderGit2, Mail, GraduationCap, Briefcase, Code2, ArrowUpRight } from "lucide-react";
import { personalInfo, stats } from "../data/portfolioData";

export default function CreativeHero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-[#09090b] text-[#fefefe]"
    >
      {/* Subtle background ambient warmth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#ff2222]/[0.035] rounded-full blur-[140px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto w-full my-auto z-10 pt-6 sm:pt-10">
        
        {/* Availability & Target Role Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#a1a1aa]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff2222] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff2222]"></span>
            </span>
            <span className="text-white font-medium">AVAILABLE FOR HIRE</span>
            <span className="text-white/20">•</span>
            <span className="text-[#a1a1aa]">FRONTEND & FULL STACK DEVELOPER</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff2222]/10 border border-[#ff2222]/25 text-[11px] font-mono text-[#ff4444]">
            <span>MCA 8.1 CGPA</span>
          </div>
        </motion.div>

        {/* Clean, Classic, Professional Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="text-sm sm:text-base font-mono text-[#a1a1aa] tracking-wide">
            Hello, I am <span className="text-white font-semibold">{personalInfo.shortName}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-jost leading-[1.12]">
            Full Stack Developer <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#ff4444]">
              & Frontend Specialist
            </span>
          </h1>

          <p className="max-w-2xl text-base sm:text-lg text-[#a1a1aa] font-normal leading-relaxed pt-2">
            MCA student at Hindusthan College of Arts & Science (<span className="text-[#ff4444] font-mono font-medium">8.1 CGPA</span>) with industry internship experience in Python Full Stack Development at <strong className="text-white font-semibold">Nitroware Technologies</strong>. I build responsive, user-friendly Single Page Applications with <strong className="text-white font-semibold">React.js</strong> and structured backend APIs with <strong className="text-white font-semibold">Node.js</strong>, <strong className="text-white font-semibold">Express</strong>, <strong className="text-white font-semibold">MongoDB</strong>, and <strong className="text-white font-semibold">MySQL</strong>.
          </p>
        </motion.div>

        {/* Professional Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-4 pt-8"
        >
          {/* Primary View Projects */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#ff2222] hover:bg-[#ff3838] text-white font-mono text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(255,34,34,0.35)] active:scale-95"
          >
            <FolderGit2 size={16} />
            <span>EXPLORE WORK</span>
          </a>

          {/* Download CV */}
          <a
            href={personalInfo.resumePath}
            download="Nithyananthan_Full_Stack_Developer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-white/30 text-white font-mono text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 active:scale-95"
          >
            <FileDown size={16} className="text-[#ff2222]" />
            <span>DOWNLOAD CV</span>
          </a>

          {/* Get in Touch */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-[#a1a1aa] hover:text-white font-mono text-xs sm:text-sm transition-colors"
          >
            <Mail size={16} />
            <span>GET IN TOUCH →</span>
          </a>
        </motion.div>
      </div>

      {/* Clean Recruiter Metrics Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-5xl mx-auto w-full pt-10 border-t border-white/10 z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors"
            >
              <div className="font-mono text-[10px] text-[#71717a] uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-xl sm:text-2xl font-bold font-jost text-white flex items-baseline gap-2">
                {stat.value}
                {stat.highlight && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#ff2222]/15 text-[#ff4444] border border-[#ff2222]/30">
                    VERIFIED
                  </span>
                )}
              </div>
              <div className="text-xs text-[#a1a1aa] truncate mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Bottom Bar */}
        <div className="flex items-center justify-between pt-6 text-[11px] font-mono text-[#71717a]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2222]" />
            <span>REACT · NODE.JS · EXPRESS · MONGODB · MYSQL · PYTHON</span>
          </div>
          <a
            href="#about"
            className="hidden sm:flex items-center gap-1 text-white/50 hover:text-white transition-colors"
          >
            <span>LEARN MORE</span>
            <ArrowDown size={12} className="text-[#ff2222]" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
