import React from "react";
import { 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Award, 
  CheckCircle2, 
  MapPin, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { personalInfo, stats } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header — SkillClass Editorial Tag & Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] text-[#fe5922] dark:text-[#38bdf8] text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Meet the Developer</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#131312] dark:text-white tracking-tight max-w-3xl leading-[1.12]">
            Mastering the fundamentals.{" "}
            <span className="font-editorial-italic font-normal text-[#fe5922] dark:text-[#38bdf8]">
              Building scalable software.
            </span>
          </h2>
          
          <p className="text-[#5e5d59] dark:text-[#94a3b8] max-w-xl text-sm sm:text-base mt-3">
            MCA fresher and aspiring Full Stack Developer committed to clean architecture, modern frameworks, and responsive user experiences.
          </p>
        </div>

        {/* Content Layout: Narrative Card + Stats Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="sc-card p-6 sm:p-9 space-y-5">
              
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#a64025] dark:text-[#38bdf8] font-bold">
                  Academic & Professional Journey
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#131312] dark:text-white leading-snug">
                  Driven by genuine curiosity for how software connects end users with databases.
                </h3>
              </div>

              <div className="space-y-4 text-[#5e5d59] dark:text-[#94a3b8] text-sm sm:text-base leading-relaxed">
                <p>
                  I am an MCA student at Hindusthan College of Arts and Science in Coimbatore, graduating with an 8.1 CGPA. My journey into software development is driven by a deep interest in building complete, dependable web systems from responsive React user interfaces down to secure backend endpoints and database schemas.
                </p>

                <p>
                  During my Python Full Stack Development internship at Nitroware Technologies in Coimbatore (9 May 2026 – 9 June 2026), I gained practical industry experience contributing to both client-side and server-side web features, writing structured code, and solving real debugging challenges alongside fellow developers.
                </p>

                <p>
                  Beyond coursework, I have engineered full-stack applications on my own — including a MERN stack blogging platform with JWT authentication, a relational movie rating platform backed by MySQL, and my MCA final year capstone project analyzing academic research papers with NLP to discover methodology and dataset gaps.
                </p>
              </div>

              {/* Core Attributes Checklist */}
              <div className="pt-5 border-t border-[#e8e3d9] dark:border-[#232d3f] grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#131312] dark:text-[#f3f4f6]">
                  <CheckCircle2 className="w-4 h-4 text-[#fe5922] dark:text-[#38bdf8] shrink-0" />
                  <span className="font-medium">React.js & Responsive Frontend Craft</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#131312] dark:text-[#f3f4f6]">
                  <CheckCircle2 className="w-4 h-4 text-[#fe5922] dark:text-[#38bdf8] shrink-0" />
                  <span className="font-medium">Node.js, Express & RESTful APIs</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#131312] dark:text-[#f3f4f6]">
                  <CheckCircle2 className="w-4 h-4 text-[#fe5922] dark:text-[#38bdf8] shrink-0" />
                  <span className="font-medium">MongoDB (NoSQL) & MySQL (Relational)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#131312] dark:text-[#f3f4f6]">
                  <CheckCircle2 className="w-4 h-4 text-[#fe5922] dark:text-[#38bdf8] shrink-0" />
                  <span className="font-medium">Git Version Control & Teamwork</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Stats & Milestones */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="sc-card p-6 flex items-center justify-between gap-4"
              >
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#676561] dark:text-[#94a3b8] font-semibold">
                    {item.label}
                  </div>
                  <div className="text-3xl font-extrabold text-[#131312] dark:text-white font-mono mt-1">
                    {item.value}
                  </div>
                  <div className="text-xs text-[#a64025] dark:text-[#38bdf8] font-semibold mt-1">
                    {item.sub}
                  </div>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#1f2838] border border-[#e8e3d9] dark:border-[#232d3f] flex items-center justify-center text-[#131312] dark:text-white shrink-0 shadow-sm">
                  {idx === 0 ? (
                    <GraduationCap className="w-6 h-6 text-[#fe5922] dark:text-[#38bdf8]" />
                  ) : idx === 1 ? (
                    <Award className="w-6 h-6 text-[#0284c7] dark:text-[#38bdf8]" />
                  ) : idx === 2 ? (
                    <Briefcase className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Code2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  )}
                </div>
              </div>
            ))}

            {/* Quick Action Pill */}
            <div className="sc-card p-6 flex flex-col justify-between space-y-4 bg-gradient-to-br from-[#fe5922]/5 to-transparent dark:from-[#38bdf8]/5">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#a64025] dark:text-[#38bdf8] font-bold">
                  Next Step
                </div>
                <div className="text-base font-bold text-[#131312] dark:text-white mt-1">
                  Want to review my full credentials?
                </div>
                <p className="text-xs text-[#676561] dark:text-[#94a3b8] mt-1">
                  Check out verified coursework, certifications, and project repositories.
                </p>
              </div>

              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#131312] dark:text-white hover:text-[#fe5922] dark:hover:text-[#38bdf8] transition-colors"
              >
                <span>Read Official Resume (PDF)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
