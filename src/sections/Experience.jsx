import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, Terminal, ArrowRight } from "lucide-react";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header — SkillClass Editorial Tag & Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] text-[#fe5922] dark:text-[#38bdf8] text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Experience</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#131312] dark:text-white tracking-tight max-w-3xl leading-[1.12]">
            Industry exposure.{" "}
            <span className="font-editorial-italic font-normal text-[#fe5922] dark:text-[#38bdf8]">
              Hands-on development.
            </span>
          </h2>
          
          <p className="text-[#5e5d59] dark:text-[#94a3b8] max-w-xl text-sm sm:text-base mt-3">
            Practical full-stack web application development and collaborative team engineering.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="sc-card p-7 sm:p-10 space-y-7 relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#fe5922] via-[#0284c7] to-[#8b5cf6]" />

              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#e8e3d9] dark:border-[#232d3f]">
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="px-3 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#fe5922]/10 text-[#fe5922] dark:bg-[#38bdf8]/10 dark:text-[#38bdf8] border border-[#fe5922]/20 dark:border-[#38bdf8]/20">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-[#676561] dark:text-[#94a3b8]">
                      {exp.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#131312] dark:text-white">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-3 text-sm text-[#5e5d59] dark:text-[#94a3b8] mt-1.5 flex-wrap">
                    <span className="flex items-center gap-1.5 text-[#131312] dark:text-white font-semibold">
                      <Building className="w-4 h-4 text-[#fe5922] dark:text-[#38bdf8]" />
                      {exp.company}
                    </span>
                    <span className="text-[#e8e3d9] dark:text-[#232d3f]">•</span>
                    <span className="flex items-center gap-1.5 font-mono text-xs">
                      <MapPin className="w-3.5 h-3.5 text-[#676561] dark:text-[#94a3b8]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Period Badge */}
                <div className="self-start sm:self-center px-4 py-2 rounded-2xl bg-white dark:bg-[#1a2233] border border-[#e8e3d9] dark:border-[#232d3f] text-xs font-mono font-bold text-[#131312] dark:text-white shadow-sm">
                  <div className="text-[10px] uppercase tracking-wider text-[#676561] dark:text-[#94a3b8] font-normal">Internship Window</div>
                  <div>{exp.period}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#5e5d59] dark:text-[#94a3b8] leading-relaxed">
                {exp.description}
              </p>

              {/* Verified Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#676561] dark:text-[#94a3b8] font-bold">
                  Key Deliverables & Responsibilities
                </h4>
                <div className="space-y-2.5">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#131312] dark:text-[#f3f4f6]">
                      <CheckCircle2 className="w-4 h-4 text-[#fe5922] dark:text-[#38bdf8] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-[#faf8f5] dark:bg-[#1a2233] text-[#131312] dark:text-[#f3f4f6] border border-[#e8e3d9] dark:border-[#232d3f]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
