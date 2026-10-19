import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  ExternalLink, 
  Layers, 
  Database, 
  CheckCircle2, 
  Sparkles, 
  Info 
} from "lucide-react";
import { GithubIcon } from "../components/Icons";
import { projects } from "../data/portfolioData";
import ProjectModal from "../components/ProjectModal";

export default function CreativeProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeHoverId, setActiveHoverId] = useState(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] text-white border-t border-white/5">
      {/* Background Section Coordinate */}
      <div className="absolute top-12 right-8 font-mono text-[10px] text-white/10 tracking-widest hidden md:block">
        // 03_FEATURED_ENGINEERING_REEL.V3
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2222]/10 border border-[#ff2222]/30 text-xs font-mono text-[#ff4444] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2222]" />
            <span>03 // FEATURED WORK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-jost tracking-tight leading-tight">
            SELECTED FULL STACK <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-[#ff2222]">
              & PRACTICAL WEB PROJECTS
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9e9ea8] max-w-2xl">
            Hover over any project row to expand interactive architecture details, technical stack modules, and repository links.
          </p>
        </div>

        {/* Signature Expanding Bracket Project Rows (Inspired by sk-ashiq-quadiri Page 3) */}
        <div className="space-y-6">
          {projects.map((proj, idx) => {
            const isHovered = activeHoverId === proj.id;
            return (
              <div
                key={proj.id}
                onMouseEnter={() => setActiveHoverId(proj.id)}
                onMouseLeave={() => setActiveHoverId(null)}
                className="group relative rounded-2xl bg-[#0e0e15] border border-white/10 hover:border-[#ff2222]/50 p-6 sm:p-10 transition-all duration-500 overflow-hidden shadow-xl"
              >
                {/* Background Ambient Glow on Hover */}
                <div
                  className={`absolute -right-20 -top-20 w-80 h-80 bg-[#ff2222]/10 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Top Row: Index, Badge & Status */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm sm:text-base font-bold text-[#ff2222]">
                      0{idx + 1} //
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90">
                      {proj.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        proj.statusText === "Completed" ? "bg-emerald-400" : "bg-amber-400 animate-pulse"
                      }`}
                    />
                    <span className="font-mono text-xs text-[#a1a1aa]">
                      STATUS: {proj.statusText.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Main Expanding Bracket Display */}
                <div className="flex items-center justify-between gap-2 sm:gap-4 my-2">
                  {/* Left Bracket */}
                  <span
                    className={`font-mono text-4xl sm:text-6xl lg:text-7xl font-extralight text-[#ff2222] select-none transition-transform duration-500 ${
                      isHovered ? "-translate-x-2 sm:-translate-x-4" : "translate-x-0"
                    }`}
                  >
                    [
                  </span>

                  {/* Project Title Centerpiece */}
                  <div className="flex-1 text-center px-2 sm:px-6">
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-jost text-white group-hover:text-[#ff4444] transition-colors leading-tight tracking-tight">
                      {proj.title}
                    </h3>
                  </div>

                  {/* Right Bracket */}
                  <span
                    className={`font-mono text-4xl sm:text-6xl lg:text-7xl font-extralight text-[#ff2222] select-none transition-transform duration-500 ${
                      isHovered ? "translate-x-2 sm:translate-x-4" : "translate-x-0"
                    }`}
                  >
                    ]
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#9e9ea8] max-w-3xl mx-auto text-center mt-4 leading-relaxed">
                  {proj.shortDescription}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                  {proj.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[#d4d4d8] group-hover:border-[#ff2222]/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4 mt-8 pt-6 border-t border-white/5">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-[#ff2222] text-white border border-white/15 hover:border-transparent font-mono text-xs font-bold tracking-wider transition-all duration-300 active:scale-95 shadow-md"
                  >
                    <Info size={14} />
                    <span>VIEW ARCHITECTURE</span>
                  </button>

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 border border-white/10 font-mono text-xs font-semibold tracking-wider transition-all duration-300"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>SOURCE REPO</span>
                    <ArrowUpRight size={14} className="text-[#ff2222]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recruiter Technical Archive Matrix */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#0c0c12] border border-white/10">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="font-mono text-xs text-[#ff4444] font-bold">
              // ARCHIVE_MATRIX // VERIFIED CAPSTONE PROJECTS
            </div>
            <div className="font-mono text-xs text-[#71717a]">
              REPOSITORIES: GITHUB.COM/NITHYANANTHAN48
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <span className="text-[10px] font-mono text-[#ff2222] block">01 / NLP CAPSTONE</span>
              <h4 className="font-bold text-white font-jost text-base">AI Research Gap Detection</h4>
              <p className="text-xs text-[#8e8e98]">
                Extracts PDF research paper text and identifies conceptual gaps across methodology, dataset, and application.
              </p>
              <div className="font-mono text-[11px] text-white/70 pt-2">
                Stack: Python · NLP · React.js · MongoDB
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <span className="text-[10px] font-mono text-[#ff2222] block">02 / MERN PLATFORM</span>
              <h4 className="font-bold text-white font-jost text-base">Full Stack Blogging</h4>
              <p className="text-xs text-[#8e8e98]">
                Complete blogging engine featuring JWT authentication, post authoring, and all 4 MongoDB CRUD operations.
              </p>
              <div className="font-mono text-[11px] text-white/70 pt-2">
                Stack: React.js · Node · Express · MongoDB · JWT
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <span className="text-[10px] font-mono text-[#ff2222] block">03 / RELATIONAL DB</span>
              <h4 className="font-bold text-white font-jost text-base">MySQL Movie Rating</h4>
              <p className="text-xs text-[#8e8e98]">
                Interactive film ratings system backed by relational MySQL schemas and Express.js REST endpoints.
              </p>
              <div className="font-mono text-[11px] text-white/70 pt-2">
                Stack: JavaScript · Node · Express · MySQL
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal Integration */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
