import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2, 
  Maximize2,
  Brain,
  Lock,
  ArrowRight,
  Database,
  Layers,
  Sparkles
} from "lucide-react";
import { GithubIcon } from "../components/Icons";
import { projects } from "../data/portfolioData";
import ProjectModal from "../components/ProjectModal";
import TiltCard from "../components/TiltCard";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" data-scene="Projects" className="py-24 md:py-32 relative bg-[#070709] text-[#f5f5f7]">
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
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>04 // FEATURED PRODUCTION WORK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-3xl leading-[1.1]">
            Engineered systems.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2222] to-[#ff6666]">
              Real problems solved.
            </span>
          </h2>
          
          <p className="text-[#8e8e99] max-w-xl text-sm sm:text-base mt-4 font-sans leading-relaxed">
            Verified full-stack web applications, relational schemas, and AI-assisted tools built with modern industry standards.
          </p>
        </motion.div>

        {/* Stacking Project Cards (Inspired by Reference 1 & 2) */}
        <div className="space-y-12 pb-12">
          {projects.map((proj, idx) => {
            return (
              <div
                key={proj.id}
                className="sticky transition-transform duration-300"
                style={{
                  top: `calc(84px + ${idx * 24}px)`,
                  zIndex: idx + 10,
                  transformOrigin: "50% 0% 0",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: idx * 0.08 }}
                  className="rb-card overflow-hidden p-6 sm:p-10 shadow-2xl bg-[#111116] border border-white/10 hover:border-[#ff2222]/40 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left Column: Number, Badge, Title, Description, Tech Tags & CTAs */}
                    <div className="lg:col-span-7 space-y-6">
                      
                      {/* Top Row: Number + Badge */}
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-3xl sm:text-4xl text-[#ff2222] font-black">
                          {proj.number}
                        </span>
                        <span className="h-4 w-px bg-white/10" />
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 border border-white/10 text-white">
                          {proj.badge}
                        </span>
                        <span className="text-xs font-mono text-emerald-400 font-medium ml-auto flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          {proj.statusText}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                        {proj.title}
                      </h3>

                      {/* Short Description */}
                      <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed font-sans">
                        {proj.shortDescription}
                      </p>

                      {/* Key Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {proj.highlights?.slice(0, 4).map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs font-mono text-[#d4d4d8]">
                            <CheckCircle2 className="w-4 h-4 text-[#ff2222] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {proj.tags?.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md text-xs font-mono bg-black/50 border border-white/10 text-[#d4d4d8]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                        {proj.liveUrl && (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-red-primary text-xs"
                          >
                            <span>Live App</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-dark-secondary text-xs"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>Source Code</span>
                          </a>
                        )}

                        <button
                          type="button"
                          onClick={() => setSelectedProject(proj)}
                          className="px-4 py-2.5 rounded-full text-xs font-mono font-medium text-[#a1a1aa] hover:text-white hover:bg-white/5 transition-colors ml-auto flex items-center gap-1.5"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Technical Deep-Dive</span>
                        </button>
                      </div>

                    </div>

                    {/* Right Column: Visual Preview with 3D Tilt */}
                    <div className="lg:col-span-5">
                      <TiltCard className="rounded-2xl overflow-hidden border border-white/10 bg-black/60 shadow-2xl relative group/card">
                        {/* Terminal Window Header */}
                        <div className="bg-[#181822] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                          </div>
                          <span className="text-[11px] font-mono text-[#8e8e99]">
                            {proj.id}.architecture.json
                          </span>
                        </div>

                        {/* Interactive Project Visual Card */}
                        <div className="p-6 sm:p-8 space-y-4">
                          <div className="p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-[#a1a1aa] space-y-2">
                            <div className="text-[#ff2222] font-bold">&gt; PROJECT_SUMMARY:</div>
                            <div className="text-white font-semibold">{proj.title}</div>
                            <div>• Role: Full Stack Developer</div>
                            <div>• Architecture: Modular REST + Client UI</div>
                            <div>• DB: {proj.tags?.find(t => t.includes("Mongo") || t.includes("MySQL")) || "Optimized Storage"}</div>
                          </div>

                          <div className="p-4 rounded-xl bg-gradient-to-br from-[#ff2222]/10 to-transparent border border-[#ff2222]/20 flex items-center justify-between">
                            <div>
                              <div className="text-xs font-mono text-white/70">DEPLOYMENT STATUS</div>
                              <div className="text-sm font-bold text-white">Production Ready</div>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-[#ff2222] text-white text-xs font-mono font-bold">
                              Verified
                            </span>
                          </div>
                        </div>

                        {/* Hover Overlay Button */}
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                          <button
                            type="button"
                            onClick={() => setSelectedProject(proj)}
                            className="btn-red-primary text-xs"
                          >
                            <Maximize2 className="w-4 h-4" />
                            <span>View Full Case Study</span>
                          </button>
                        </div>
                      </TiltCard>
                    </div>

                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
