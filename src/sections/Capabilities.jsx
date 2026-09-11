import React from "react";
import { 
  Layout, 
  Code2, 
  Layers, 
  Network, 
  Database, 
  Palette, 
  BugPlay, 
  Sparkles, 
  FolderGit2, 
  Cpu, 
  MonitorSmartphone, 
  Workflow, 
  Users,
  CheckCircle 
} from "lucide-react";
import { capabilities, whyWorkWithMe } from "../data/portfolioData";

const iconMap = {
  Layout: Layout,
  Code2: Code2,
  Layers: Layers,
  Network: Network,
  Database: Database,
  Palette: Palette,
  BugPlay: BugPlay,
  Sparkles: Sparkles,
  FolderGit2: FolderGit2,
  Cpu: Cpu,
  MonitorSmartphone: MonitorSmartphone,
  Workflow: Workflow,
  Users: Users,
};

export default function Capabilities() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* WHAT I CAN DO */}
        <div>
          <div className="flex flex-col items-center text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-600 dark:text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>02 · Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What I <span className="gradient-text">Can Do</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base mt-2">
              Practical competencies grounded in academic projects, personal builds, and real internship work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const IconComponent = iconMap[cap.icon] || Code2;
              return (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    <span>CAPABILITY // 0{idx + 1}</span>
                    <span className="text-cyan-600 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">Active</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* WHY WORK WITH ME */}
        <div className="mt-24 pt-16 border-t border-slate-200 dark:border-slate-800/80">
          <div className="flex flex-col items-center text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Strengths</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why Work <span className="gradient-text">With Me</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base mt-2">
              A balanced approach combining engineering discipline, active learning, and honest collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyWorkWithMe.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Sparkles;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/70 hover:border-indigo-400/50 hover:bg-white dark:hover:bg-slate-900/60 transition-all shadow-sm flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

