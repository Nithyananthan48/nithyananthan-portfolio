import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, Terminal, ArrowUpRight } from "lucide-react";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-600 dark:text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04 · Professional Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work & <span className="gradient-text">Internship</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base mt-2">
            Hands-on industry exposure in full stack web development and software engineering processes.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/40 pb-6 group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-md shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Experience Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 group-hover:border-cyan-500/40 transition-all">
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800/80">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/25 mb-2 font-mono">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm mt-1 flex-wrap">
                      <span className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400 font-medium">
                        <Building className="w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="text-slate-400 dark:text-slate-600">·</span>
                      <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-slate-600 dark:text-slate-400 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60 self-start sm:self-center">
                    {exp.period}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Highlights */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono mb-3">
                    Key Deliverables & Learnings
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

