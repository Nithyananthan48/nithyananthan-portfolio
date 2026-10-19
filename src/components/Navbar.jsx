import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown, ExternalLink } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import RollingText from "./RollingText";
import { personalInfo } from "../data/portfolioData";
import { easeSkillClass } from "../utils/motion";

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

      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPos = window.scrollY + 200;

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

  const handleNavClick = (e, href) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    setActiveSection(targetId);
    const el = document.getElementById(targetId);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 72;
      window.scrollTo({
        top: Math.max(0, topOffset),
        behavior: "smooth"
      });
    }
    if (window.history.pushState) {
      window.history.pushState(null, null, href);
    }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: easeSkillClass }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#faf8f5]/90 dark:bg-[#0c1017]/90 backdrop-blur-xl border-b border-[#e8e3d9] dark:border-[#232d3f] shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <motion.a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Nithyananthan Portfolio Homepage"
        >
          <div className="w-9 h-9 rounded-full bg-[#131312] dark:bg-white text-white dark:text-[#131312] flex items-center justify-center font-bold text-sm tracking-tighter shadow-sm transition-transform group-hover:scale-105">
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
        </motion.a>

        {/* Desktop Navigation Links — Floating Pill with Layout Animation */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/80 dark:bg-[#141a26]/80 border border-[#e8e3d9] dark:border-[#232d3f] backdrop-blur-md shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`group relative px-3 py-1.5 rounded-full text-xs transition-colors duration-200 ${
                  isActive
                    ? "text-white dark:text-[#131312] font-semibold"
                    : "text-[#5e5d59] dark:text-[#94a3b8] hover:text-[#131312] dark:hover:text-white font-medium"
                }`}
              >
                {/* Smooth Animated Background Pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-[#131312] dark:bg-white -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <RollingText text={link.label} active={isActive} />
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Download Resume Button */}
          <motion.a
            href={personalInfo.resumePath}
            download="Nithyananthan_Full_Stack_Developer_Resume.pdf"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: easeSkillClass }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#131312] hover:bg-[#fe5922] dark:bg-white dark:hover:bg-[#38bdf8] text-white dark:text-[#131312] dark:hover:text-[#0c1017] transition-colors shadow-sm"
            title="Download verified resume PDF"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </motion.a>

          {/* View Resume in new tab */}
          <motion.a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: easeSkillClass }}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-full text-xs font-medium text-[#676561] hover:text-[#131312] dark:text-[#94a3b8] dark:hover:text-white border border-[#e8e3d9] dark:border-[#232d3f] hover:border-[#131312] dark:hover:border-white transition-colors bg-white/70 dark:bg-[#141a26]/70"
            title="Open resume in new browser tab"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden md:inline">View PDF</span>
          </motion.a>

          {/* Theme Toggle */}
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
        </div>

        {/* Mobile Menu & Theme Toggle Controls */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          
          <motion.button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.92 }}
            className="p-2 rounded-full bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] text-[#131312] dark:text-white hover:border-[#131312] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer Menu — Framer Animated Entrance */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -15, height: 0 }}
            transition={{ duration: 0.35, ease: easeSkillClass }}
            className="lg:hidden overflow-hidden bg-[#faf8f5]/98 dark:bg-[#0c1017]/98 backdrop-blur-2xl border-b border-[#e8e3d9] dark:border-[#232d3f] shadow-2xl"
          >
            <div className="max-w-md mx-auto px-6 py-8 space-y-4">
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link, idx) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.04, duration: 0.3, ease: easeSkillClass }}
                      className={`px-4 py-3 rounded-2xl text-sm transition-all flex items-center justify-between ${
                        isActive
                          ? "bg-[#131312] text-white dark:bg-white dark:text-[#131312] font-bold"
                          : "text-[#5e5d59] dark:text-[#94a3b8] hover:text-[#131312] dark:hover:text-white bg-white/70 dark:bg-[#141a26]/70 border border-[#e8e3d9] dark:border-[#232d3f] font-medium"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#fe5922]" />}
                    </motion.a>
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
