import React from "react";
import { motion } from "framer-motion";
import { 
  Layers, 
  Layout, 
  Server, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  FolderGit2, 
  MonitorSmartphone, 
  Workflow, 
  Users, 
  CheckCircle2
} from "lucide-react";
import { developmentProcess, whyWorkWithMe } from "../data/portfolioData";
import TiltCard from "../components/TiltCard";

const processIconMap = {
  Layers: Layers,
  Layout: Layout,
  Server: Server,
  Database: Database,
  ShieldCheck: ShieldCheck,
  Cpu: Cpu
};

const whyIconMap = {
  Sparkles: Sparkles,
  FolderGit2: FolderGit2,
  Cpu: Cpu,
  MonitorSmartphone: MonitorSmartphone,
  Workflow: Workflow,
  Users: Users
};

export default function Capabilities() {
  return (
    <section id="lifecycle" data-scene="Lifecycle" className="py-24 md:py-32 relative bg-[#070709] text-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PART 1: The Experience / Development Lifecycle */}
        <div>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111118] border border-white/10 text-[#ff2222] text-xs font-mono uppercase tracking-widest mb-4">
              <Workflow className="w-3.5 h-3.5" />
              <span>02.1 // ENGINEERING PIPELINE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-3xl leading-[1.1]">
              From architecture planning to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2222] to-[#ff6666]">
                production deployment.
              </span>
            </h2>
            
            <p className="text-[#8e8e99] max-w-xl text-sm sm:text-base mt-4 font-sans leading-relaxed">
              A structured 6-step full-stack engineering workflow tested across real web applications.
            </p>
          </motion.div>

          {/* 6-Step Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentProcess.map((step, idx) => {
              const IconComponent = processIconMap[step.icon] || Layers;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="h-full"
                >
                  <TiltCard
                    maxTilt={8}
                    className="rb-card p-7 flex flex-col justify-between group cursor-default h-full"
                  >
                    <div>
                      {/* Top Row: Step Number & Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-3xl sm:text-4xl text-[#ff2222] font-black">
                          {step.step}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center text-white">
                          <IconComponent className="w-5 h-5 text-[#ff2222]" />
                        </div>
                      </div>

                      <div className="text-xs font-mono uppercase tracking-wider text-[#ff2222] font-semibold mb-1">
                        {step.tagline}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2.5">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#8e8e99] leading-relaxed font-sans">
                        {step.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#71717a]">
                      <span>PHASE // {step.step}</span>
                      <span className="text-white font-medium flex items-center gap-1">
                        Production Standard
                      </span>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* PART 2: Why Work With Me */}
        <div className="mt-24 pt-20 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111118] border border-white/10 text-[#ff2222] text-xs font-mono uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>02.2 // VALUE PROPOSITION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-3xl leading-[1.1]">
              Why hire me for your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2222] to-[#ff6666]">
                engineering team.
              </span>
            </h2>
            
            <p className="text-[#8e8e99] max-w-xl text-sm sm:text-base mt-4 font-sans leading-relaxed">
              Combining strong computer application fundamentals (MCA 8.1 CGPA) with hands-on full-stack development experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyWorkWithMe.map((item, index) => {
              const IconComp = whyIconMap[item.icon] || Sparkles;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="h-full"
                >
                  <TiltCard
                    maxTilt={8}
                    className="rb-card p-7 flex flex-col justify-between group cursor-default h-full"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center text-white mb-5">
                        <IconComp className="w-5 h-5 text-[#ff2222]" />
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#8e8e99] leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs font-mono text-[#a1a1aa]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff2222]" />
                      <span>Verified Competency</span>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
