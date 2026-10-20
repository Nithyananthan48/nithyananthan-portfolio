import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileDown, FolderGit2, Mail } from "lucide-react";
import { personalInfo, stats } from "../data/portfolioData";

export default function CreativeHero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-[#09090b] text-[#fefefe] overflow-hidden"
    >
      {/* Subtle background ambient warmth */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[350px] bg-[#ff2222]/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[300px] bg-white/[0.015] rounded-full blur-[120px] pointer-events-none" />

      {/* Main Two-Column Balanced Hero Container */}
      <div className="max-w-6xl mx-auto w-full my-auto z-10 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Name, Role, Introduction, Actions (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Availability Pill & Education Tag */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#a1a1aa]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff2222] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff2222]"></span>
                </span>
                <span className="text-white font-medium">AVAILABLE FOR HIRE</span>
                <span className="text-white/20">•</span>
                <span className="text-[#a1a1aa]">FULL STACK & FRONTEND</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff2222]/10 border border-[#ff2222]/30 text-xs font-mono text-[#ff4444]">
                <span>MCA 8.1 CGPA</span>
              </div>
            </div>

            {/* Clear Name Display & Professional Headline */}
            <div className="space-y-2">
              <div className="font-mono text-sm tracking-widest text-[#a1a1aa] uppercase flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#ff2222]" />
                <span>HELLO, I AM</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-jost leading-[1.08]">
                {personalInfo.name}
              </h1>

              <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-jost text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#ff4444]">
                Frontend & Full Stack Developer
              </div>
            </div>

            {/* Short, readable fresher introduction */}
            <p className="text-base sm:text-lg text-[#a1a1aa] font-normal leading-relaxed max-w-xl">
              MCA graduate from <strong className="text-white font-semibold">Hindusthan College of Arts & Science</strong> (<span className="text-[#ff4444] font-mono font-medium">CGPA 8.1</span>) with hands-on experience from a Python Full Stack Development internship at <strong className="text-white font-semibold">Nitroware Technologies</strong>. Skilled in building responsive interfaces with <strong className="text-white font-semibold">React.js</strong> and robust REST APIs with <strong className="text-white font-semibold">Node.js</strong>, <strong className="text-white font-semibold">MongoDB</strong>, and <strong className="text-white font-semibold">MySQL</strong>.
            </p>

            {/* Action Buttons: Explore Projects & Download CV */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary: Explore Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#ff2222] hover:bg-[#ff3838] text-white font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(255,34,34,0.35)] hover:shadow-[0_0_30px_rgba(255,34,34,0.5)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <FolderGit2 size={16} />
                <span>EXPLORE PROJECTS</span>
              </a>

              {/* Secondary: Download CV */}
              <a
                href={personalInfo.resumePath}
                download="Nithyananthan_Full_Stack_Developer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-white/30 text-white font-mono text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileDown size={16} className="text-[#ff2222]" />
                <span>DOWNLOAD CV</span>
              </a>

              {/* Tertiary: Quick Contact */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-3 py-3 text-[#a1a1aa] hover:text-white font-mono text-xs sm:text-sm transition-colors"
              >
                <Mail size={15} />
                <span>GET IN TOUCH →</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Photo in Rounded Rectangular Frame with Red Glow (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-[320px] sm:max-w-[360px]">
              
              {/* Outer Decorative Ambient Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#ff2222]/30 via-transparent to-[#ff2222]/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Image Container Card */}
              <div className="relative rounded-3xl p-3 bg-[#111116] border border-white/15 group-hover:border-[#ff2222]/50 transition-all duration-300 shadow-[0_0_35px_rgba(255,34,34,0.2)]">
                
                {/* Photo Element */}
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-[#0b0b0f] border border-white/10">
                  {!imageError ? (
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      onError={(e) => {
                        if (!e.currentTarget.src.includes("profile.jpg")) {
                          e.currentTarget.src = "/assets/profile.jpg";
                        } else {
                          setImageError(true);
                        }
                      }}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    /* Clear Placeholder Area if image is missing */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-white/5 to-transparent">
                      <div className="w-20 h-20 rounded-full bg-[#ff2222]/15 border border-[#ff2222]/40 text-[#ff4444] font-mono font-black text-3xl flex items-center justify-center mb-3">
                        N
                      </div>
                      <span className="font-mono text-xs font-bold text-white tracking-wider">
                        {personalInfo.name}
                      </span>
                      <span className="text-[11px] font-mono text-[#a1a1aa] mt-1">
                        Profile Image Area
                      </span>
                    </div>
                  )}

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Inner Overlay Label */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="font-mono text-xs font-bold text-white">
                        {personalInfo.shortName}
                      </div>
                      <div className="text-[10px] font-mono text-[#ff4444]">
                        MCA · 8.1 CGPA
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ff2222]/20 text-[#ff4444] border border-[#ff2222]/40">
                      VERIFIED
                    </span>
                  </div>
                </div>

                {/* Micro Sub-details Under Photo */}
                <div className="mt-3 pt-2 border-t border-white/5 grid grid-cols-2 gap-2 text-[11px] font-mono text-center">
                  <div className="p-1.5 rounded-lg bg-white/[0.02]">
                    <span className="text-[#71717a] block text-[9px]">EXPERIENCE</span>
                    <span className="text-white font-medium">Nitroware Tech</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/[0.02]">
                    <span className="text-[#71717a] block text-[9px]">LOCATION</span>
                    <span className="text-white font-medium">Coimbatore, IN</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Recruiter Metrics Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-6xl mx-auto w-full pt-8 border-t border-white/10 z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors group"
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
            <span>REACT 19 · NODE.JS · EXPRESS · MONGODB · MYSQL · PYTHON</span>
          </div>
          <a
            href="#skills"
            className="hidden sm:flex items-center gap-1.5 text-white/50 hover:text-white transition-colors"
          >
            <span>EXPLORE SKILLS</span>
            <ArrowDown size={12} className="text-[#ff2222]" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
