import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, ShieldCheck } from "lucide-react";
import { certifications } from "../data/portfolioData";
import TiltCard from "../components/TiltCard";

export default function Certifications() {
  return (
    <section id="certifications" data-scene="Certifications" className="py-24 md:py-32 relative bg-[#070709] text-[#f5f5f7]">
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
            <Award className="w-3.5 h-3.5" />
            <span>05.2 // CREDENTIAL REPOSITORY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-3xl leading-[1.1]">
            Verified certifications.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2222] to-[#ff6666]">
              Technical rigor.
            </span>
          </h2>
          
          <p className="text-[#8e8e99] max-w-xl text-sm sm:text-base mt-4 font-sans leading-relaxed">
            Certifications completed across Meta, IBM, MongoDB, Cisco, IIT Bombay, and One Roadmap.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="h-full"
            >
              <TiltCard
                maxTilt={8}
                className="rb-card p-6 sm:p-7 flex flex-col justify-between group cursor-default h-full"
              >
                <div>
                  {/* Header Tag + Year */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#ff2222]/15 text-[#ff2222] border border-[#ff2222]/30">
                      {cert.provider}
                    </span>
                    <span className="text-xs font-mono text-[#71717a]">
                      {cert.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#ff2222] transition-colors">
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#8e8e99] leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Validation Strip */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#a1a1aa]">
                  <span className="flex items-center gap-1.5 text-[#ff2222]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                  <span className="text-[#52525b]">{cert.credentialId ? `ID: ${cert.credentialId.slice(0, 10)}...` : "Completed"}</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
