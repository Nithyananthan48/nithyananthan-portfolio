import React from "react";
import { Award, CheckCircle, ExternalLink, Sparkles, BookOpen, ShieldCheck } from "lucide-react";
import { certifications } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-600 dark:text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>07 · Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Verified <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base mt-2">
            Structured course certifications from established platforms and institutions including Meta, IBM, IIT Bombay, and Greens Technologies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/25">
                    {cert.provider}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {cert.year}
                  </span>
                </div>

                <div className="flex items-start gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                      Issued by {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Skills covered */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                  {cert.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-mono font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Verified Completion
                </span>
                <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500">CERT · 0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

