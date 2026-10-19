import React from "react";
import { ArrowUp, Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#070709] text-[#8e8e99] pt-16 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Brand & Quick Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#ff2222] text-white flex items-center justify-center font-black text-sm shadow-[0_0_15px_rgba(255,34,34,0.4)]">
                N
              </div>
              <span className="font-black text-lg text-white tracking-wider">
                NITHYANANTHAN <span className="text-[#ff2222] font-mono">/</span> DEV
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-[#8e8e99] max-w-md leading-relaxed font-sans">
              MCA Graduate (8.1 CGPA) &amp; Full Stack Developer based in Coimbatore, Tamil Nadu. Specializing in high-performance React user interfaces, scalable Express REST APIs, MongoDB, MySQL, and Python services.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#111118] border border-white/10 hover:border-[#ff2222]/50 text-white transition-all hover:scale-105"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#111118] border border-white/10 hover:border-[#ff2222]/50 text-[#0a66c2] transition-all hover:scale-105"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#111118] border border-white/10 hover:border-[#ff2222]/50 text-[#25d366] transition-all hover:scale-105"
                aria-label="WhatsApp"
              >
                <WhatsappIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-3">
              SCENES
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <a href="#home" className="hover:text-[#ff2222] transition-colors">01 Split Hero</a>
              <a href="#about" className="hover:text-[#ff2222] transition-colors">02 About</a>
              <a href="#skills" className="hover:text-[#ff2222] transition-colors">03 Skills</a>
              <a href="#projects" className="hover:text-[#ff2222] transition-colors">04 Projects</a>
              <a href="#experience" className="hover:text-[#ff2222] transition-colors">05 Experience</a>
              <a href="#contact" className="hover:text-[#ff2222] transition-colors">06 Contact</a>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="md:col-span-3 space-y-3 sm:text-right">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-3">
              IMMEDIATE HIRE
            </h4>
            <p className="text-xs text-[#8e8e99]">
              Available for full-time Full Stack Developer &amp; Frontend roles.
            </p>
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ff2222] text-white text-xs font-mono font-bold hover:bg-[#ff3b3b] transition-colors shadow-lg"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>

        </div>

        {/* Bottom Colophon (Ref 2 Style) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#71717a]">
          <div className="flex items-center gap-2">
            <span>© 2026 NITHYANANTHAN N</span>
            <span>•</span>
            <span className="text-[#a1a1aa]">GSAP SPLIT-SCREEN + INFINITE REEL</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>RETURN TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#ff2222]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
