import React from "react";
import { motion } from "framer-motion";
import { 
  FileDown, 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  GraduationCap, 
  Briefcase,
  ShieldCheck,
  Calendar
} from "lucide-react";
import { personalInfo, certifications, education, experience } from "../data/portfolioData";

export default function CreativeResume() {
  return (
    <section id="resume" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#08080a] text-white border-t border-white/5">
      {/* Background Coordinate */}
      <div className="absolute top-12 left-8 font-mono text-[10px] text-white/10 tracking-widest hidden md:block">
        // 04_RESUME_AND_CREDENTIALS.DOC
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2222]/10 border border-[#ff2222]/30 text-xs font-mono text-[#ff4444] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2222]" />
              <span>04 // CREDENTIALS & RESUME</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-jost tracking-tight leading-tight">
              VERIFIED RESUME & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-[#ff2222]">
                INDUSTRY CERTIFICATIONS
              </span>
            </h2>
          </div>

          {/* Quick Download Button */}
          <a
            href={personalInfo.resumePath}
            download="Nithyananthan_Full_Stack_Developer_Resume.pdf"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#ff2222] hover:bg-[#ff3d3d] text-white font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(255,34,34,0.4)] active:scale-95 self-start md:self-auto"
          >
            <FileDown size={16} />
            <span>DOWNLOAD OFFICIAL CV (PDF)</span>
          </a>
        </div>

        {/* Master Recruiter Overview Card */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#0f0f16] border border-white/10 mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#ff4444] uppercase tracking-wider block">
                // Candidate Dossier
              </span>
              <h3 className="text-2xl font-bold text-white font-jost">
                {personalInfo.name}
              </h3>
              <p className="text-sm text-[#9e9ea8]">
                {personalInfo.targetRole}
              </p>
              <div className="font-mono text-xs text-[#71717a]">
                Location: {personalInfo.location}
              </div>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs text-[#71717a] uppercase tracking-wider block">
                // Academic Benchmarks
              </span>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-semibold">MCA (Master of Computer Apps)</span>
                  <span className="text-[#ff4444] font-bold">8.1 CGPA</span>
                </div>
                <div className="text-[11px] text-[#71717a]">Hindusthan College of Arts & Science</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-semibold">BBA (Bachelor of Business Admin)</span>
                  <span className="text-white/80">7.3 CGPA</span>
                </div>
                <div className="text-[11px] text-[#71717a]">Kalaignar Karunanidhi Govt Arts College</div>
              </div>
            </div>

            <div id="experience" className="space-y-3 scroll-mt-28">
              <span className="font-mono text-xs text-[#71717a] uppercase tracking-wider block">
                // Industry Internship
              </span>
              <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-semibold">{experience[0].role}</span>
                </div>
                <div className="text-[11px] text-[#ff4444] font-mono">
                  {experience[0].company} · {experience[0].duration}
                </div>
                <p className="text-[11px] text-[#8e8e98] leading-relaxed">
                  {experience[0].description}
                </p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {experience[0].technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-[#a1a1aa]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 9 Verified Industry Certifications Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold font-jost text-white flex items-center gap-2">
              <Award className="text-[#ff2222]" size={22} />
              <span>Verified Skill & Industry Certifications ({certifications.length})</span>
            </h3>
            <span className="font-mono text-xs text-[#71717a] hidden sm:block">
              AUTHENTICATED 2025–2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={cert.title + index}
                className="p-5 rounded-xl bg-[#0e0e15] border border-white/10 hover:border-[#ff2222]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#ff2222]/15 text-[#ff4444] border border-[#ff2222]/30">
                      {cert.issuer}
                    </span>
                    <span className="font-mono text-xs text-[#71717a]">
                      {cert.year}
                    </span>
                  </div>

                  <h4 className="font-bold text-white font-jost text-base group-hover:text-[#ff4444] transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-[#8e8e98] mt-1 font-mono">
                    Provider: {cert.provider}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#a1a1aa]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
