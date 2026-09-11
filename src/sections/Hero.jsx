import React from "react";
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Code2, 
  Terminal, 
  Sparkles,
  Layers,
  Database,
  CheckCircle
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "../components/Icons";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-blob-slow" />
      <div className="absolute top-1/3 right-10 w-[380px] h-[380px] bg-indigo-500/15 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/70 text-xs text-slate-700 dark:text-slate-300 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-mono font-semibold">Available for Full Stack Opportunities</span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-600 dark:text-cyan-400 font-mono tracking-wide">
                  {personalInfo.title}
                </span>
                <span className="hidden sm:inline text-slate-400 dark:text-slate-600 text-xl font-mono">/</span>
                <span className="text-xs sm:text-sm px-2.5 py-0.5 rounded-md bg-cyan-100 text-cyan-900 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-800/60 dark:text-cyan-300 font-mono font-semibold">
                  MCA Final Year
                </span>
              </div>
              <p className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-200 italic pt-1">
                "{personalInfo.tagline}"
              </p>
            </div>

            {/* Intro Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.intro}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Nithyananthan_Full_Stack_Developer_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold text-sm border border-slate-300 dark:border-slate-700/80 hover:border-cyan-500 transition-all hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto shadow-sm"
              >
                <FileDown className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white font-semibold text-sm transition-colors w-full sm:w-auto hover:bg-slate-200/60 dark:hover:bg-slate-800/40"
              >
                <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="pt-3 flex items-center justify-center lg:justify-start gap-4 text-slate-500 dark:text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                Connect:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all hover:-translate-y-0.5 shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all hover:-translate-y-0.5 shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-lg bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all hover:-translate-y-0.5 shadow-sm"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all hover:-translate-y-0.5 shadow-sm"
                  aria-label="WhatsApp Chat"
                >
                  <WhatsappIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase (Profile + Dev Terminal) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Profile Frame with floating animation and glowing accent */}
            <div className="relative w-64 sm:w-72 aspect-square rounded-3xl p-1 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 shadow-2xl shadow-cyan-500/20 group animate-float-slow">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-950 relative">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-xs font-mono font-medium text-slate-100 bg-slate-950/80 px-2.5 py-1 rounded-full backdrop-blur-md border border-slate-800">
                    Nithyananthan · MCA 2026
                  </span>
                </div>
              </div>

              {/* Floating Tech Badge 1: React */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-cyan-500/40 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-300">React.js</span>
              </div>

              {/* Floating Tech Badge 2: Node.js */}
              <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-emerald-500/40 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300">Node.js</span>
              </div>
            </div>

            {/* Developer Terminal Card below */}
            <div className="mt-8 w-full max-w-sm rounded-2xl glass-panel p-4 text-xs font-mono border border-slate-200 dark:border-slate-800/80 shadow-xl">
              <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-200 dark:border-slate-800/70">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                </div>
                <span className="text-slate-500 dark:text-slate-400 text-[11px]">dev@nithyananthan:~$</span>
              </div>
              <div className="space-y-1.5 text-slate-800 dark:text-slate-300">
                <p>
                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold">const</span> <span className="text-indigo-600 dark:text-indigo-300 font-semibold">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  role: <span className="text-emerald-700 dark:text-emerald-400 font-semibold">"Full Stack Developer"</span>,
                </p>
                <p className="pl-4">
                  education: <span className="text-emerald-700 dark:text-emerald-400 font-semibold">"MCA Final Year (8.1 CGPA)"</span>,
                </p>
                <p className="pl-4">
                  stack: [<span className="text-amber-700 dark:text-amber-300 font-semibold">"React"</span>, <span className="text-amber-700 dark:text-amber-300 font-semibold">"Node"</span>, <span className="text-amber-700 dark:text-amber-300 font-semibold">"MongoDB"</span>, <span className="text-amber-700 dark:text-amber-300 font-semibold">"Python"</span>],
                </p>
                <p className="pl-4">
                  readyForWork: <span className="text-cyan-600 dark:text-cyan-400 font-semibold">true</span>
                </p>
                <p>&#125;;</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

