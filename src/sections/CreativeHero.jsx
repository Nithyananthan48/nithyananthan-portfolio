import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileDown, FolderGit2, Mail, Sparkles, Terminal, Code2 } from "lucide-react";
import { personalInfo, stats } from "../data/portfolioData";

export default function CreativeHero() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    setCoords({ x, y });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#08080a] select-none"
    >
      {/* Reference Signature: Mouse Tracking Dashed Crosshairs */}
      {isHovering && (
        <>
          <div
            className="crosshair-h"
            style={{ top: `${coords.y}px` }}
            aria-hidden="true"
          />
          <div
            className="crosshair-v"
            style={{ left: `${coords.x}px` }}
            aria-hidden="true"
          />
          {/* Realtime Coordinate Tag */}
          <div
            className="absolute z-20 pointer-events-none font-mono text-[10px] text-[#ff2222] bg-black/90 px-2 py-0.5 rounded border border-[#ff2222]/40 shadow-lg tracking-widest hidden sm:block"
            style={{
              top: `${coords.y + 12}px`,
              left: `${coords.x + 12}px`,
            }}
          >
            LOC: X:{String(coords.x).padStart(4, "0")} Y:{String(coords.y).padStart(4, "0")}
          </div>
        </>
      )}

      {/* Decorative Blueprint Corner Guides */}
      <div className="absolute top-24 left-6 font-mono text-[10px] text-white/20 tracking-widest hidden md:block">
        + SYS.INITIALIZE // 2026.04
      </div>
      <div className="absolute top-24 right-6 font-mono text-[10px] text-white/20 tracking-widest hidden md:block">
        LAT: 11.0168° N · LON: 76.9558° E [CBE]
      </div>

      {/* Center Hero Content */}
      <div className="max-w-6xl mx-auto w-full my-auto z-10">
        
        {/* Availability Pill & Role Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#a1a1aa] shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff2222] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff2222]"></span>
            </span>
            <span className="text-white font-medium">AVAILABLE FOR IMMEDIATE HIRE</span>
            <span className="text-white/20">•</span>
            <span className="text-[#a1a1aa]">FULL STACK / REACT DEVELOPER</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#ff2222]/10 border border-[#ff2222]/30 text-[11px] font-mono text-[#ff4444]">
            <Terminal size={12} />
            <span>MCA 8.1 CGPA</span>
          </div>
        </motion.div>

        {/* Master Kinetic Headline Inspired by Reference */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-1 sm:space-y-2"
        >
          <div className="font-mono text-xs sm:text-sm tracking-widest text-[#8e8e98] uppercase">
            // Full Stack Web Developer · Coimbatore, TN
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.02] tracking-tight text-white font-jost">
            <span className="font-light text-white/70">I WRITE </span>
            <span className="font-extrabold text-white">CODE </span>
            <span className="font-light text-white/70">THAT </span>
            <br className="hidden sm:inline" />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#ff4444]">
              BUILDS WEB
            </span>{" "}
            <span className="font-black text-[#ff2222] relative inline-block underline decoration-[#ff2222]/40 decoration-wavy decoration-2">
              EXPERIENCES
            </span>
          </h1>

          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#9e9ea8] font-normal pt-4 leading-relaxed">
            I am <strong className="text-white font-semibold">{personalInfo.shortName}</strong>, an MCA student (<span className="text-[#ff4444] font-mono">8.1 CGPA</span>) & Python Full Stack intern from Nitroware Technologies. I engineer robust Single Page Apps in <strong className="text-white font-semibold">React.js</strong> with scalable <strong className="text-white font-semibold">Node.js / Express</strong> REST APIs and <strong className="text-white font-semibold">MongoDB / MySQL</strong> data persistence.
          </p>
        </motion.div>

        {/* Action Button Row with Creative Bracket Hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-wrap items-center gap-4 pt-8"
        >
          {/* Primary View Projects Button */}
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-lg bg-[#ff2222] text-white font-mono text-xs sm:text-sm font-bold tracking-wider overflow-hidden shadow-[0_0_25px_rgba(255,34,34,0.4)] transition-all duration-300 hover:bg-[#ff3d3d] hover:shadow-[0_0_35px_rgba(255,34,34,0.6)] active:scale-95"
          >
            <span className="font-mono text-white/70 group-hover:-translate-x-1 transition-transform">[</span>
            <FolderGit2 size={16} />
            <span>EXPLORE WORK</span>
            <span className="font-mono text-white/70 group-hover:translate-x-1 transition-transform">]</span>
          </a>

          {/* Download Resume Button */}
          <a
            href={personalInfo.resumePath}
            download="Nithyananthan_Full_Stack_Developer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-5 py-3.5 rounded-lg bg-white/5 border border-white/15 text-white font-mono text-xs sm:text-sm font-semibold tracking-wider hover:bg-white/10 hover:border-white/30 transition-all active:scale-95"
          >
            <FileDown size={16} className="text-[#ff2222] group-hover:translate-y-0.5 transition-transform" />
            <span>DOWNLOAD CV</span>
          </a>

          {/* Quick Contact Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-3.5 rounded-lg text-[#a1a1aa] hover:text-white font-mono text-xs sm:text-sm transition-colors"
          >
            <Mail size={16} />
            <span>GET IN TOUCH →</span>
          </a>
        </motion.div>
      </div>

      {/* Recruiter Metrics Strip Inspired by Reference Page 1 Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="max-w-6xl mx-auto w-full pt-8 border-t border-white/10 z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="p-3 sm:p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#ff2222]/30 transition-colors group"
            >
              <div className="font-mono text-[10px] text-[#71717a] uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-xl sm:text-2xl font-bold font-jost text-white group-hover:text-[#ff2222] transition-colors flex items-baseline gap-2">
                {stat.value}
                {stat.highlight && (
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#ff2222]/20 text-[#ff4444] border border-[#ff2222]/40">
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

        {/* Scroll Prompt */}
        <div className="flex items-center justify-between pt-6 text-[11px] font-mono text-[#71717a]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff2222]" />
            <span>REACT 19 · VITE · TAILWIND 4 · NODE.JS · MONGODB · MYSQL</span>
          </div>
          <a
            href="#about"
            className="hidden sm:flex items-center gap-1.5 text-white/60 hover:text-white transition-colors"
          >
            <span>SCROLL DOWN</span>
            <ArrowDown size={13} className="animate-bounce text-[#ff2222]" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
