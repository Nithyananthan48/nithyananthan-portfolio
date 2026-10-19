import React, { useState, useEffect } from "react";
import { Menu, X, FileDown, ExternalLink, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { personalInfo } from "../data/portfolioData";

export default function Navbar({ isDark, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      // Section scroll spy
      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    setActiveSection(targetId);
    if (window.history.pushState) {
      window.history.pushState(null, null, href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#faf8f5]/90 dark:bg-[#0c1017]/90 backdrop-blur-xl border-b border-[#e8e3d9] dark:border-[#232d3f] shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - SkillClass Editorial Aesthetic */}
        <a
          href="#home"
          onClick={() => handleNavClick("#home")}
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Nithyananthan Portfolio Homepage"
        >
          <div className="w-9 h-9 rounded-full bg-[#131312] dark:bg-white text-white dark:text-[#131312] flex items-center justify-center font-bold text-sm tracking-tighter transition-transform group-hover:scale-105 shadow-sm">
            N
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-sm sm:text-base text-[#131312] dark:text-white group-hover:text-[#fe5922] dark:group-hover:text-[#38bdf8] transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-mono tracking-wider text-[#676561] dark:text-[#94a3b8] uppercase font-medium">
              Full Stack Developer · MCA
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links — Floating Pill Container */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/80 dark:bg-[#141a26]/80 border border-[#e8e3d9] dark:border-[#232d3f] backdrop-blur-md shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                  isActive
                    ? "bg-[#131312] text-white dark:bg-white dark:text-[#131312] font-semibold shadow-sm"
                    : "text-[#5e5d59] dark:text-[#94a3b8] hover:text-[#131312] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 font-medium"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Download Resume Button */}
          <a
            href={personalInfo.resumePath}
            download="Nithyananthan_Full_Stack_Developer_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#131312] hover:bg-[#fe5922] dark:bg-white dark:hover:bg-[#38bdf8] text-white dark:text-[#131312] dark:hover:text-[#0c1017] transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5"
            title="Download verified resume PDF"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* View Resume in new tab */}
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-2 rounded-full text-xs font-medium text-[#676561] hover:text-[#131312] dark:text-[#94a3b8] dark:hover:text-white border border-[#e8e3d9] dark:border-[#232d3f] hover:border-[#131312] dark:hover:border-white transition-all bg-white/70 dark:bg-[#141a26]/70"
            title="Open resume in new browser tab"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden md:inline">View PDF</span>
          </a>

          {/* Theme Toggle */}
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
        </div>

        {/* Mobile Menu & Theme Toggle Controls */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] text-[#131312] dark:text-white hover:border-[#131312] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu — SkillClass Clean Editorial Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#faf8f5]/98 dark:bg-[#0c1017]/98 backdrop-blur-2xl border-b border-[#e8e3d9] dark:border-[#232d3f] shadow-2xl transition-all">
          <div className="max-w-md mx-auto px-6 py-8 space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`px-4 py-3 rounded-2xl text-sm transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-[#131312] text-white dark:bg-white dark:text-[#131312] font-bold"
                        : "text-[#5e5d59] dark:text-[#94a3b8] hover:text-[#131312] dark:hover:text-white bg-white/70 dark:bg-[#141a26]/70 border border-[#e8e3d9] dark:border-[#232d3f] font-medium"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#fe5922]" />}
                  </a>
                );
              })}
            </div>

            {/* Resume actions in mobile menu */}
            <div className="pt-4 border-t border-[#e8e3d9] dark:border-[#232d3f] flex flex-col gap-2.5">
              <a
                href={personalInfo.resumePath}
                download="Nithyananthan_Full_Stack_Developer_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-semibold bg-[#131312] text-white hover:bg-[#fe5922] dark:bg-white dark:text-[#131312] dark:hover:bg-[#38bdf8] transition-colors shadow-sm"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-medium border border-[#e8e3d9] dark:border-[#232d3f] text-[#5e5d59] dark:text-[#94a3b8] hover:text-[#131312] dark:hover:text-white"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Resume in Tab</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
