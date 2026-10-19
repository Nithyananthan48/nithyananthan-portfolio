import React from "react";
import { ArrowUp, Mail, FileDown, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-[#e8e3d9] dark:border-[#232d3f] bg-white/70 dark:bg-[#0a0e15]/70 backdrop-blur-md pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Brand & Quick Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#e8e3d9] dark:border-[#232d3f]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#131312] dark:bg-white text-white dark:text-[#131312] flex items-center justify-center font-bold text-sm">
                N
              </div>
              <span className="font-extrabold text-lg text-[#131312] dark:text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-[#5e5d59] dark:text-[#94a3b8] max-w-sm leading-relaxed">
              MCA fresher & Full Stack Developer from Coimbatore. Focused on building responsive, maintainable web applications using React, Node, Express, MongoDB, and MySQL.
            </p>

            <div className="pt-1 flex items-center gap-2.5">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-[#faf8f5] dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] text-[#131312] dark:text-white hover:text-[#fe5922] dark:hover:text-[#38bdf8] transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-[#faf8f5] dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] text-[#131312] dark:text-white hover:text-[#fe5922] dark:hover:text-[#38bdf8] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-full bg-[#faf8f5] dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] text-[#131312] dark:text-white hover:text-[#fe5922] dark:hover:text-[#38bdf8] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-[#faf8f5] dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] text-[#131312] dark:text-white hover:text-[#fe5922] dark:hover:text-[#38bdf8] transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsappIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#676561] dark:text-[#94a3b8] font-bold mb-3">
              Sections
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#5e5d59] dark:text-[#94a3b8] hover:text-[#131312] dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Resume Download */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div className="space-y-2 text-left md:text-right">
              <div className="text-xs font-mono uppercase tracking-wider text-[#676561] dark:text-[#94a3b8] font-bold">
                Official Resume
              </div>
              <p className="text-xs text-[#5e5d59] dark:text-[#94a3b8]">
                Updated Oct 2026 version
              </p>
              <a
                href={personalInfo.resumePath}
                download="Nithyananthan_Full_Stack_Developer_Resume.pdf"
                className="sc-btn-primary text-xs py-2 px-4 inline-flex mt-1"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono text-[#676561] dark:text-[#94a3b8] hover:text-[#131312] dark:hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#676561] dark:text-[#94a3b8]">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All verified rights reserved.
          </div>
          <div className="font-mono text-[11px]">
            Designed with SkillClass aesthetic · Built with React & Tailwind CSS
          </div>
        </div>

      </div>
    </footer>
  );
}
