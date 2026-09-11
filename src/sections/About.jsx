import React from "react";
import { GraduationCap, Briefcase, Code, Sparkles, Award, CheckCircle2 } from "lucide-react";
import { personalInfo, stats } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-600 dark:text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 · Background & Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base mt-2">
            MCA student developing real full stack solutions with modern JavaScript, React, and server-side engineering.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                Learning with curiosity. Building with <span className="text-cyan-600 dark:text-cyan-400 font-mono">intent</span>.
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                I am currently pursuing my Master of Computer Applications and developing my skills as a Full Stack Developer. I have a strong foundation in HTML, CSS, JavaScript, and React.js, along with practical exposure to backend technologies and database integration.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Through internships and projects, I have gained experience in developing responsive interfaces, integrating APIs, working with databases, implementing authentication, and building complete web application features.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                I enjoy learning new technologies, solving problems, and continuously improving my development skills.
              </p>

              {/* Core Strengths Checklist */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>Practical MERN & Python experience</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>Responsive, accessible UI design</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>REST API & database operations</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>Fast learner & team collaborator</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Key Milestones Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className={`glass-panel p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:border-cyan-500/50 hover:-translate-y-1 ${
                  item.highlight ? "ring-2 ring-cyan-500/40 bg-cyan-50/50 dark:bg-slate-900/90" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                    {item.label}
                  </span>
                  {item.highlight ? (
                    <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  ) : (
                    <GraduationCap className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                  )}
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
                    {item.value}
                  </div>
                  <div className="text-xs text-cyan-700 dark:text-cyan-400 font-semibold mt-1">
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}

            {/* Location & Academic Base Card */}
            <div className="sm:col-span-2 glass-panel p-5 rounded-2xl flex items-center justify-between gap-4 border-slate-200 dark:border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono font-semibold">Academic Base</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Hindusthan CAS, Coimbatore</div>
                </div>
              </div>
              <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                2024–2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

