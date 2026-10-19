import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  Code2, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Terminal,
  Database
} from "lucide-react";
import { personalInfo, stats } from "../data/portfolioData";
import TiltCard from "../components/TiltCard";

export default function About() {
  return (
    <section id="about" data-scene="About" className="py-24 md:py-32 relative bg-[#070709] text-[#f5f5f7]">
      {/* Background ambient red glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#ff2222]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111118] border border-white/10 text-[#ff2222] text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 // THE DEVELOPER MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-3xl leading-[1.1]">
            Engineering from first principles.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2222] to-[#ff6666]">
              Delivering full-stack velocity.
            </span>
          </h2>
          
          <p className="text-[#8e8e99] max-w-2xl text-sm sm:text-base mt-4 font-sans leading-relaxed">
            MCA graduate (8.1 CGPA) with hands-on full-stack development experience. Dedicated to clean architecture, RESTful API design, responsive interfaces, and optimized database schemas.
          </p>
        </motion.div>

        {/* Content Layout: Narrative Card + Stats Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="rb-card p-6 sm:p-9 space-y-6">
              
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-widest text-[#ff2222] font-bold">
                  Background &amp; Industry Experience
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                  Transforming structured concepts into responsive, production-ready web software.
                </h3>
              </div>

              <div className="space-y-4 text-[#a1a1aa] text-sm sm:text-base leading-relaxed font-sans">
                <p>
                  I am an MCA graduate from <strong className="text-white">Hindusthan College of Arts and Science</strong>, Coimbatore, holding an <strong className="text-[#ff2222]">8.1 CGPA</strong>. My technical drive is centered around constructing complete end-to-end web architectures — from component-based React user interfaces to secure Express servers and relational/document databases.
                </p>

                <p>
                  During my Python Full Stack Development internship at <strong className="text-white">Nitroware Technologies</strong> in Coimbatore (May – June 2026), I built practical industry experience writing modular backend routes, debugging API contracts, and ensuring clean state synchronization between client and server.
                </p>

                <p>
                  My portfolio features production-tested applications built from scratch: an <strong className="text-white">AI-Driven Academic Support System</strong> using NLP for paper gap analysis, a complete <strong className="text-white">MERN Blog Platform</strong> with JWT authentication, and a normalized <strong className="text-white">MySQL Movie Database</strong> with complex relational queries.
                </p>
              </div>

              {/* Core Attributes Checklist */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "React.js & Responsive Frontend Craft",
                  "Node.js, Express & RESTful APIs",
                  "MongoDB (NoSQL) & MySQL (Relational)",
                  "JWT Authentication & Route Security",
                  "Git Version Control & Team Workflows",
                  "Python Full Stack & Capstone AI / NLP",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-[#d4d4d8]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#ff2222] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Impact Metrics & Key Stats */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Metric Card 1: MCA Status */}
            <TiltCard className="rb-card p-6 sm:p-8 relative overflow-hidden border-[#ff2222]/30">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#ff2222]/10 border border-[#ff2222]/30 text-[#ff2222]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#ff2222]/20 text-[#ff2222] font-bold">
                  8.1 CGPA
                </span>
              </div>
              <h4 className="text-xl font-bold text-white mb-1">Master of Computer Applications</h4>
              <p className="text-xs font-mono text-[#8e8e99] mb-3">Hindusthan College of Arts &amp; Science (2024–2026)</p>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                Specialized in Advanced Java, Web Technology, Relational Databases, and Full Stack Architecture.
              </p>
            </TiltCard>

            {/* Metric Card 2: Industry Internship */}
            <TiltCard className="rb-card p-6 sm:p-8 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white">
                  <Briefcase className="w-6 h-6 text-[#ff2222]" />
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/10 text-white font-medium">
                  May – June 2026
                </span>
              </div>
              <h4 className="text-xl font-bold text-white mb-1">Python Full Stack Intern</h4>
              <p className="text-xs font-mono text-[#8e8e99] mb-3">Nitroware Technologies, Coimbatore</p>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                Hands-on practical development of backend REST services, database queries, and client-side integration.
              </p>
            </TiltCard>

            {/* Metric Card 3: Undergraduate Degree */}
            <TiltCard className="rb-card p-6 sm:p-8 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/10 text-white font-medium">
                  7.3 CGPA
                </span>
              </div>
              <h4 className="text-xl font-bold text-white mb-1">Bachelor of Business Administration</h4>
              <p className="text-xs font-mono text-[#8e8e99] mb-3">Government Arts College, Dharmapuri (2021–2024)</p>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                Strong foundation in analytical problem-solving, project management, and business communication.
              </p>
            </TiltCard>

          </div>
        </div>

      </div>
    </section>
  );
}
