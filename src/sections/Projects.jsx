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
  Database
} from "lucide-react";
import { GithubIcon } from "../components/Icons";
import { projects } from "../data/portfolioData";
import ProjectModal from "../components/ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-600 dark:text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>05 · Selected Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base mt-2">
            Showcase of full-stack web platforms, database-driven services, and my MCA final-year research engineering project.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((proj, idx) => {
            const isFeatured = proj.isFeatured;

            return (
              <div
                key={proj.id}
                className={`relative rounded-3xl p-1 transition-all duration-500 ${
                  isFeatured
                    ? "bg-gradient-to-r from-cyan-500/40 via-indigo-500/40 to-purple-500/40 shadow-2xl shadow-cyan-500/10"
                    : "bg-slate-200/80 dark:bg-slate-800/40 hover:bg-slate-200 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-slate-700"
                }`}
              >
                <div className="rounded-[22px] bg-white/95 dark:bg-slate-950/90 p-6 sm:p-8 lg:p-10 border border-slate-200/80 dark:border-transparent shadow-xl dark:shadow-none">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left Column: Visual Mockup / Interactive Canvas preview */}
                    <div className="lg:col-span-5 order-2 lg:order-1">
                      <div className="relative rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 overflow-hidden group">
                        {/* Ambient glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />

                        {/* Top window chrome */}
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800/80">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                            {proj.category}
                          </span>
                        </div>

                        {/* Custom visual mockup per project type */}
                        {proj.previewType === "ai-research" && (
                          <div className="space-y-3 py-2">
                            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-950/80 border border-cyan-500/30 flex items-center justify-between shadow-sm">
                              <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-300 text-xs font-mono font-medium">
                                <Brain className="w-4 h-4 text-cyan-600 dark:text-cyan-400 animate-pulse" />
                                <span>PDF Upload & NLP Extraction</span>
                              </div>
                              <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/15 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-mono font-medium">Active</span>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                              <div className="p-2.5 rounded-lg bg-white/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 shadow-sm">
                                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Methodology Gap</div>
                                <div className="text-xs font-semibold text-slate-900 dark:text-white mt-1">Identified</div>
                              </div>
                              <div className="p-2.5 rounded-lg bg-white/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 shadow-sm">
                                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Dataset Gap</div>
                                <div className="text-xs font-semibold text-slate-900 dark:text-white mt-1">Detected</div>
                              </div>
                            </div>

                            <div className="p-3 rounded-lg bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/40 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                              <span>Output: Concept vectors mapped to literature boundaries</span>
                            </div>
                          </div>
                        )}

                        {proj.previewType === "blog" && (
                          <div className="space-y-3 py-2">
                            <div className="p-3 rounded-xl bg-white dark:bg-slate-950/80 border border-indigo-500/30 shadow-sm">
                              <div className="flex items-center justify-between text-xs font-mono text-indigo-700 dark:text-indigo-300 mb-1 font-medium">
                                <span className="flex items-center gap-1.5">
                                  <FileText className="w-3.5 h-3.5" />
                                  <span>POST /api/blogs</span>
                                </span>
                                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">201 OK</span>
                              </div>
                              <p className="text-xs text-slate-800 dark:text-slate-300 font-semibold truncate">
                                Full-Stack Publishing with JWT Auth & React
                              </p>
                            </div>

                            <div className="p-3 rounded-lg bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/40 text-[11px] font-mono text-slate-600 dark:text-slate-400 space-y-1">
                              <div className="flex justify-between">
                                <span>Auth:</span>
                                <span className="text-cyan-600 dark:text-cyan-400 font-medium">Bearer &lt;JWT&gt;</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Database:</span>
                                <span className="text-cyan-600 dark:text-cyan-400 font-medium">MongoDB Atlas</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {proj.previewType === "movie" && (
                          <div className="space-y-3 py-2">
                            <div className="p-3 rounded-xl bg-white dark:bg-slate-950/80 border border-emerald-500/30 shadow-sm">
                              <div className="flex items-center justify-between text-xs font-mono text-emerald-700 dark:text-emerald-300 mb-1 font-medium">
                                <span className="flex items-center gap-1.5">
                                  <Film className="w-3.5 h-3.5" />
                                  <span>Movie Rating System</span>
                                </span>
                                <span className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold">★ 8.7 / 10</span>
                              </div>
                              <p className="text-xs text-slate-800 dark:text-slate-300 font-semibold">
                                Dynamic catalog & user review feed
                              </p>
                            </div>

                            <div className="p-3 rounded-lg bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/40 text-[11px] font-mono text-slate-600 dark:text-slate-400 space-y-1">
                              <div className="flex justify-between">
                                <span>Server:</span>
                                <span className="text-cyan-600 dark:text-cyan-400 font-medium">Express / Node.js</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Engine:</span>
                                <span className="text-cyan-600 dark:text-cyan-400 font-medium">MySQL Relational DB</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Expand Button Overlay */}
                        <button
                          type="button"
                          onClick={() => setSelectedProject(proj)}
                          className="mt-3 w-full py-2 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-800/90 dark:hover:bg-slate-700 text-cyan-700 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-white text-xs font-medium border border-slate-200 dark:border-slate-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Inspect Full Details & Architecture</span>
                        </button>
                      </div>
                    </div>

                    {/* Right Column: Information & Actions */}
                    <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold font-mono border ${
                          isFeatured 
                            ? "bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-500/30 dark:border-cyan-500/40 shadow-sm"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                        }`}>
                          {proj.badge}
                        </span>
                        {isFeatured && (
                          <span className="inline-flex items-center gap-1 text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold">
                            <Sparkles className="w-3.5 h-3.5" />
                            Featured Capstone
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                        {proj.title}
                      </h3>

                      <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                        {proj.shortDescription}
                      </p>

                      {/* Key features bullets */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono mb-2">
                          Core Capabilities:
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                          {proj.features.slice(0, 6).map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                              <span className="truncate">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {proj.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="pt-3 flex items-center gap-3 flex-wrap">
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold border border-slate-700 hover:border-cyan-500/50 transition-all shadow-sm"
                        >
                          <GithubIcon className="w-4 h-4 text-cyan-400" />
                          <span>View on GitHub</span>
                        </a>

                        <button
                          type="button"
                          onClick={() => setSelectedProject(proj)}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
                        >
                          <span>Full Specifications</span>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

