import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" data-scene="Education" className="py-24 md:py-32 relative bg-[#070709] text-[#f5f5f7]">
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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>05.1 // ACADEMIC FOUNDATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-3xl leading-[1.1]">
            Academic milestones.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2222] to-[#ff6666]">
              Consistent high performance.
            </span>
          </h2>
          
          <p className="text-[#8e8e99] max-w-xl text-sm sm:text-base mt-4 font-sans leading-relaxed">
            Verified academic qualifications in Computer Applications and Business Administration.
          </p>
        </motion.div>

        {/* Education Cards Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rb-card p-7 sm:p-9 space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#ff2222]/15 text-[#ff2222] border border-[#ff2222]/30">
                      {item.statusBadge}
                    </span>
                    <span className="text-xs font-mono text-[#a1a1aa] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#ff2222]" />
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {item.degree}
                  </h3>

                  <div className="flex items-center gap-2 text-sm font-mono text-[#8e8e99] mt-1.5 flex-wrap">
                    <span className="text-white font-medium">{item.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#ff2222]" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Score Badge */}
                <div className="sm:text-right shrink-0">
                  <div className="inline-flex flex-col sm:items-end">
                    <span className="text-xs font-mono text-[#71717a] uppercase">{item.scoreLabel}</span>
                    <span className="text-2xl sm:text-3xl font-mono font-black text-[#ff2222]">
                      {item.score}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed font-sans">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {item.highlights?.map((hl, hIdx) => (
                  <span
                    key={hIdx}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-black/60 border border-white/10 text-[#d4d4d8]"
                  >
                    {hl}
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
