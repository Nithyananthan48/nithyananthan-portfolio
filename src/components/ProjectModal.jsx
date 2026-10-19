import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Layers, Terminal } from "lucide-react";
import { GithubIcon } from "./Icons";
import { easeSkillClass } from "../utils/motion";

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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: easeSkillClass }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0f0f16] border border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.8)] p-6 sm:p-8 text-white"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#ff2222]/15 text-[#ff4444] border border-[#ff2222]/30">
                  {project.badge}
                </span>
                <span className="text-xs text-[#a1a1aa] font-mono">
                  {project.category}
                </span>
              </div>
              <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white font-jost">
                {project.title}
              </h3>
            </div>
            
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-[#9e9ea8] hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#ff4444] mb-2 font-bold flex items-center gap-2">
                <Terminal size={14} />
                <span>Architecture & Overview</span>
              </h4>
              <p className="text-[#a1a1aa] leading-relaxed text-sm sm:text-base">
                {project.longDescription || project.shortDescription}
              </p>
            </div>

            {/* Quick Metrics */}
            {project.stats && (
              <div className="grid grid-cols-3 gap-3">
                {project.stats.map((st, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center"
                  >
                    <div className="text-[10px] text-[#71717a] font-mono uppercase tracking-wider mb-1">{st.label}</div>
                    <div className="text-xs sm:text-sm font-bold text-white font-mono">{st.value}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Key Features list */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#ff4444] mb-3 font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff2222]" />
                <span>Technical Implementation Details</span>
              </h4>
              <ul className="grid grid-cols-1 gap-2.5">
                {project.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#e4e4e7] p-3 rounded-xl bg-white/[0.02] border border-white/5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff2222] mt-2 shrink-0"></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies used */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#ff4444] mb-2.5 font-bold">
                Verified Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white/5 border border-white/10 text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between gap-3 flex-wrap">
            <div className="text-xs font-mono text-[#71717a]">
              PROJECT_ID // {project.id}
            </div>
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-4 rounded-lg bg-[#ff2222] hover:bg-[#ff3d3d] text-white font-mono text-xs font-bold inline-flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(255,34,34,0.4)]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>VIEW REPOSITORY</span>
              </a>
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs inline-flex items-center gap-1.5 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>LIVE DEMO</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
