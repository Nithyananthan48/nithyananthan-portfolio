import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, CheckCircle2, Building, Sparkles } from "lucide-react";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" data-scene="Experience" className="py-24 md:py-32 relative bg-[#070709] text-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111118] border border-white/10 text-[#ff2222] text-xs font-mono uppercase tracking-widest mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>05 // INDUSTRY IMMERSION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-3xl leading-[1.1]">
            Industry practice.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2222] to-[#ff6666]">
              Real-world engineering.
            </span>
          </h2>
          
          <p className="text-[#8e8e99] max-w-xl text-sm sm:text-base mt-4 font-sans leading-relaxed">
            Hands-on software development internship solving real backend, database, and client challenges.
          </p>
        </motion.div>

        {/* Experience Timeline Card */}
        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7 }}
              className="rb-card p-7 sm:p-10 space-y-7 relative overflow-hidden"
            >
              {/* Top Red Accent Strip */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#ff2222] via-[#ff6666] to-[#ff2222]" />

              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#ff2222]/15 text-[#ff2222] border border-[#ff2222]/30">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-[#a1a1aa]">
                      {exp.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-3 text-sm font-mono text-[#8e8e99] mt-1.5 flex-wrap">
                    <span className="flex items-center gap-1.5 text-white font-medium">
                      <Building className="w-4 h-4 text-[#ff2222]" />
                      {exp.company}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#ff2222]" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed font-sans">
                {exp.description}
              </p>

              {/* Key Deliverables & Contributions */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#ff2222] font-bold">
                  Key Technical Contributions:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {exp.responsibilities?.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm font-mono text-[#d4d4d8]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#ff2222] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Leveraged */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-[#71717a] mr-2">TECH STACK:</span>
                {exp.technologies?.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-black/60 border border-white/10 text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
