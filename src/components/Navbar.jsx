import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

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
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({
        top: Math.max(0, topOffset),
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08080c]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Wordmark (Ref 1 & 2 inspired) */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Nithyananthan Portfolio Homepage"
        >
          <div className="w-9 h-9 rounded-xl bg-[#ff2222] text-white flex items-center justify-center font-black text-sm tracking-tighter shadow-[0_0_15px_rgba(255,34,34,0.5)] transition-transform group-hover:scale-105">
            N
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-black tracking-wider text-sm sm:text-base text-white">
              <span>NITHYA</span>
              <span className="text-[#ff2222] font-mono">/</span>
              <span className="text-[#a1a1aa] font-medium text-xs font-mono">DEV</span>
            </div>
            <span className="text-[10px] font-mono tracking-wider text-[#71717a] uppercase">
              Full Stack · MCA 8.1
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links — Center Glass Bar */}
        <nav
          className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#111118]/80 border border-white/10 backdrop-blur-md shadow-lg"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                  isActive
                    ? "text-white font-bold"
                    : "text-[#8e8e99] hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-full bg-[#ff2222]/20 border border-[#ff2222]/50 shadow-[0_0_12px_rgba(255,34,34,0.3)] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Status Pill */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121218] border border-white/10 text-xs font-mono text-[#a1a1aa]">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-[11px]">OPEN TO HIRE</span>
          </div>

          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ff2222] hover:bg-[#ff3b3b] text-white text-xs font-mono font-bold transition-all shadow-[0_0_15px_rgba(255,34,34,0.35)] group"
          >
            <span>Resume PDF</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-[#ff2222] text-white text-xs font-mono"
            aria-label="Download Resume"
          >
            <FileDown className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2.5 rounded-xl bg-[#121218] border border-white/10 text-white hover:border-[#ff2222]/50 focus:outline-none"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#ff2222]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-b border-white/10 bg-[#08080c]/98 backdrop-blur-2xl px-4 pt-3 pb-6 shadow-2xl"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-mono transition-colors ${
                      isActive
                        ? "bg-[#ff2222]/20 border border-[#ff2222]/40 text-white font-bold"
                        : "text-[#8e8e99] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#ff2222]" />}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-[#a1a1aa]">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>Available for Full Stack roles</span>
                </div>
                <a
                  href={personalInfo.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-[#ff2222] text-white text-xs font-mono font-bold"
                >
                  Resume PDF
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
