import React from "react";
import { ArrowUp, Mail, Heart, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-[#070a12]/80 backdrop-blur-md pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800/60">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-slate-950 font-black text-sm">
                N
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-slate-100 tracking-wide">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm">
              Full Stack Developer & MCA student passionate about building clean, performant, and resilient web applications.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-cyan-500/50 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all hover:-translate-y-0.5"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-cyan-500/50 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all hover:-translate-y-0.5"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-cyan-500/50 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all hover:-translate-y-0.5"
              aria-label="Email Nithyananthan"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-cyan-500/50 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all hover:-translate-y-0.5"
              aria-label="WhatsApp Chat"
            >
              <WhatsappIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60 transition-all group cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 font-mono">
            <span>Crafted with React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

