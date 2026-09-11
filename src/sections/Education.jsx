import React from "react";
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-600 dark:text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>06 · Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education <span className="gradient-text">& Degrees</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base mt-2">
            Academic qualifications demonstrating consistent academic discipline and computer applications expertise.
          </p>
        </div>

        {/* Timeline container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical central or left guide line */}
          <div className="absolute left-4 sm:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-300 dark:to-slate-800 pointer-events-none" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="relative pl-12 sm:pl-20 group">
                {/* Timeline node */}
                <div className="absolute left-1.5 sm:left-5 top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-2 border-cyan-500 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-md shadow-cyan-500/40 group-hover:scale-125 transition-transform">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400"></span>
                </div>

                {/* Card */}
                <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 group-hover:border-cyan-500/40 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800/80">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/25 font-mono">
                          {item.statusBadge}
                        </span>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {item.degree}
                      </h3>
                      <div className="text-sm font-medium text-cyan-600 dark:text-cyan-400 mt-0.5">
                        {item.institution}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                        {item.location}
                      </div>
                    </div>

                    {/* CGPA Badge */}
                    <div className="self-start sm:self-center px-4 py-2 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-700/50 text-center shrink-0 shadow-sm">
                      <div className="text-[10px] uppercase tracking-wider text-cyan-700 dark:text-cyan-300 font-mono font-semibold">Score</div>
                      <div className="text-xl font-extrabold text-slate-900 dark:text-white font-mono">
                        {item.cgpa} <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-300">CGPA</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

