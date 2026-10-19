import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, Sparkles, Layers, Cpu, Database } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[28px] bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] shadow-2xl p-6 sm:p-8 text-[#131312] dark:text-[#f3f4f6]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#e8e3d9] dark:border-[#232d3f]">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#fe5922]/10 text-[#fe5922] dark:bg-[#38bdf8]/10 dark:text-[#38bdf8] border border-[#fe5922]/20 dark:border-[#38bdf8]/20">
                {project.badge}
              </span>
              <span className="text-xs text-[#676561] dark:text-[#94a3b8] font-mono">
                {project.category}
              </span>
            </div>
            <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-[#131312] dark:text-white">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-[#676561] dark:text-[#94a3b8] hover:text-[#131312] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="mt-6 space-y-6">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#676561] dark:text-[#94a3b8] mb-2 font-bold">
              Project Architecture & Overview
            </h4>
            <p className="text-[#5e5d59] dark:text-[#94a3b8] leading-relaxed text-sm sm:text-base">
              {project.longDescription || project.shortDescription}
            </p>
          </div>

          {/* Quick Metrics */}
          {project.stats && (
            <div className="grid grid-cols-3 gap-3">
              {project.stats.map((st, i) => (
                <div key={i} className="p-3 rounded-2xl bg-[#faf8f5] dark:bg-[#0c1017] border border-[#e8e3d9] dark:border-[#232d3f] text-center">
                  <div className="text-[10px] text-[#676561] dark:text-[#94a3b8] font-mono uppercase tracking-wider mb-1">{st.label}</div>
                  <div className="text-xs sm:text-sm font-bold text-[#131312] dark:text-white font-mono">{st.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Key Features list */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#676561] dark:text-[#94a3b8] mb-3 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#fe5922] dark:text-[#38bdf8]" />
              Technical Implementation Details
            </h4>
            <ul className="grid grid-cols-1 gap-2.5">
              {project.features.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[#131312] dark:text-[#f3f4f6] p-3 rounded-xl bg-[#faf8f5] dark:bg-[#0c1017] border border-[#e8e3d9] dark:border-[#232d3f]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fe5922] dark:bg-[#38bdf8] mt-2 shrink-0"></span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies used */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#676561] dark:text-[#94a3b8] mb-2.5 font-bold">
              Verified Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#faf8f5] dark:bg-[#0c1017] border border-[#e8e3d9] dark:border-[#232d3f] text-[#131312] dark:text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-8 pt-4 border-t border-[#e8e3d9] dark:border-[#232d3f] flex items-center justify-between gap-3 flex-wrap">
          <div className="text-xs font-mono text-[#676561] dark:text-[#94a3b8]">
            ID // {project.id}
          </div>
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="sc-btn-primary text-xs py-2 px-4 inline-flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Repository</span>
            </a>
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="sc-btn-secondary text-xs py-2 px-4 inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
