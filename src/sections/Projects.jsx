import React, { useState } from "react";
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  FileText, 
  Film, 
  Layers, 
  CheckCircle2, 
  Maximize2,
  Cpu,
  Brain,
  Database,
  Star,
  Lock,
  ArrowRight
} from "lucide-react";
import { GithubIcon } from "../components/Icons";
import { projects } from "../data/portfolioData";
import ProjectModal from "../components/ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header — SkillClass Editorial Tag & Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] text-[#fe5922] dark:text-[#38bdf8] text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Selected Full Stack Works</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#131312] dark:text-white tracking-tight max-w-3xl leading-[1.12]">
            Real applications.{" "}
            <span className="font-editorial-italic font-normal text-[#fe5922] dark:text-[#38bdf8]">
              Built from end to end.
            </span>
          </h2>
          
          <p className="text-[#5e5d59] dark:text-[#94a3b8] max-w-xl text-sm sm:text-base mt-3">
            Exploration of my verified full-stack applications, relational and document databases, and AI-assisted research tools.
          </p>
        </div>

        {/* 3 Signature SkillClass Project Cards */}
        <div className="space-y-10">
          {projects.map((proj) => {
            return (
              <div
                key={proj.id}
                className="sc-card overflow-hidden p-6 sm:p-10 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Number, Badge, Title, Description, Tech Tags & CTAs */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    {/* Top Row: Number + Badge */}
                    <div className="flex items-center gap-3">
                      <span className="font-editorial-italic text-3xl sm:text-4xl text-[#fe5922] dark:text-[#38bdf8] font-normal">
                        {proj.number}
                      </span>
                      <span className="h-4 w-px bg-[#e8e3d9] dark:bg-[#232d3f]" />
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#faf8f5] dark:bg-[#1f2838] border border-[#e8e3d9] dark:border-[#232d3f] text-[#131312] dark:text-[#f3f4f6]">
                        {proj.badge}
                      </span>
                      <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium ml-auto flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        {proj.statusText}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#131312] dark:text-white tracking-tight leading-tight">
                      {proj.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm sm:text-base text-[#5e5d59] dark:text-[#94a3b8] leading-relaxed">
                      {proj.shortDescription}
                    </p>

                    {/* Key Technical Features */}
                    <div className="space-y-2.5 pt-1">
                      {proj.features.slice(0, 3).map((f, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#131312] dark:text-[#f3f4f6]">
                          <CheckCircle2 className="w-4 h-4 text-[#fe5922] dark:text-[#38bdf8] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies Pill Grid */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {proj.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#faf8f5] dark:bg-[#1a2233] border border-[#e8e3d9] dark:border-[#232d3f] text-[#131312] dark:text-[#f3f4f6]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="sc-btn-primary text-xs py-2.5 px-5"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub Repository</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => setSelectedProject(proj)}
                        className="sc-btn-secondary text-xs py-2.5 px-5 cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-[#fe5922] dark:text-[#38bdf8]" />
                        <span>Architecture Details</span>
                      </button>

                      {proj.liveDemoUrl && (
                        <a
                          href={proj.liveDemoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>

                  </div>

                  {/* Right Column: Interactive Visual UI Simulation Mockup */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl bg-[#faf8f5] dark:bg-[#0c1017] border border-[#e8e3d9] dark:border-[#232d3f] p-5 shadow-inner">
                      
                      {/* Window header */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e8e3d9] dark:border-[#232d3f]">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
                        </div>
                        <span className="text-[10px] font-mono text-[#676561] dark:text-[#94a3b8]">
                          {proj.category}
                        </span>
                      </div>

                      {/* Simulation per project */}
                      {proj.previewType === "ai-research" && (
                        <div className="space-y-3">
                          <div className="p-3.5 rounded-xl bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] shadow-sm">
                            <div className="flex items-center justify-between text-xs font-mono font-medium text-[#131312] dark:text-white">
                              <span className="flex items-center gap-2">
                                <Brain className="w-4 h-4 text-[#fe5922] dark:text-[#38bdf8] animate-pulse" />
                                <span>PDF Text Extraction Engine</span>
                              </span>
                              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 font-mono">Completed</span>
                            </div>
                            <div className="text-[11px] text-[#676561] dark:text-[#94a3b8] mt-2 font-mono">
                              &gt; Extracted 14,200 tokens from literature corpus.
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div className="p-3 rounded-xl bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f]">
                              <div className="text-[10px] font-mono text-[#676561] dark:text-[#94a3b8]">Methodology Gap</div>
                              <div className="text-xs font-bold text-[#131312] dark:text-white mt-1">Identified</div>
                            </div>
                            <div className="p-3 rounded-xl bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f]">
                              <div className="text-[10px] font-mono text-[#676561] dark:text-[#94a3b8]">Dataset Gap</div>
                              <div className="text-xs font-bold text-[#131312] dark:text-white mt-1">Detected</div>
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-[#fe5922]/5 dark:bg-[#38bdf8]/5 border border-[#fe5922]/20 dark:border-[#38bdf8]/20 text-[11px] font-mono text-[#a64025] dark:text-[#38bdf8]">
                            React UI + MongoDB Storage Active
                          </div>
                        </div>
                      )}

                      {proj.previewType === "blog" && (
                        <div className="space-y-3">
                          <div className="p-3 rounded-xl bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] flex items-center justify-between shadow-sm">
                            <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#131312] dark:text-white">
                              <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                              <span>JWT Authentication Validated</span>
                            </div>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 font-mono">Bearer Token</span>
                          </div>

                          <div className="p-3.5 rounded-xl bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] space-y-2">
                            <div className="text-xs font-bold text-[#131312] dark:text-white">MERN Post Publisher</div>
                            <div className="flex items-center gap-2 text-[10px] font-mono text-[#676561] dark:text-[#94a3b8]">
                              <span className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">POST</span>
                              <span>/api/posts/create</span>
                              <span className="ml-auto text-emerald-600">201 Created</span>
                            </div>
                          </div>

                          <div className="p-2.5 rounded-xl bg-[#faf8f5] dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] flex justify-between text-[11px] font-mono text-[#676561] dark:text-[#94a3b8]">
                            <span>CRUD Operations</span>
                            <span className="text-[#131312] dark:text-white font-semibold">MongoDB Atlas</span>
                          </div>
                        </div>
                      )}

                      {proj.previewType === "movie" && (
                        <div className="space-y-3">
                          <div className="p-3.5 rounded-xl bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] shadow-sm">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-1.5 text-amber-500">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                                ))}
                              </div>
                              <span className="text-xs font-mono font-bold text-[#131312] dark:text-white">5.0 / 5.0</span>
                            </div>
                            <div className="text-xs text-[#131312] dark:text-white font-medium">
                              User reviews saved via Node & Express REST API
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] space-y-1">
                            <div className="text-[10px] font-mono text-[#676561] dark:text-[#94a3b8]">Relational Database</div>
                            <div className="text-xs font-bold text-[#131312] dark:text-white font-mono flex items-center justify-between">
                              <span>MySQL Tables & Foreign Keys</span>
                              <span className="text-emerald-600 text-[10px]">Connected</span>
                            </div>
                          </div>

                          <div className="p-2.5 rounded-xl bg-[#faf8f5] dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] text-[11px] font-mono text-[#676561] dark:text-[#94a3b8]">
                            Responsive Vanilla JS Frontend + Express Router
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
