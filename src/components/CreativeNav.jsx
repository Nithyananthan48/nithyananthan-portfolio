import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, FileDown, Terminal } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function CreativeNav() {
  const [timeString, setTimeString] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  // Update live clock every second (Reference feature)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Track scroll position for active section & navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPos = window.scrollY + 220;

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
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 72;
      window.scrollTo({
        top: Math.max(0, topOffset),
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08080a]/92 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Signature Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Nithyananthan N Portfolio Home"
        >
          <div className="w-8 h-8 rounded-lg bg-[#ff2222] text-white flex items-center justify-center font-mono font-black text-sm shadow-[0_0_15px_rgba(255,34,34,0.5)] transition-transform group-hover:scale-105">
            N
          </div>
          <div className="flex items-center gap-1.5 font-mono text-sm tracking-wider text-[#fefefe]">
            <span className="font-bold">NITHYANANTHAN</span>
            <span className="text-[#ff2222]">[DEV]</span>
          </div>
        </a>

        {/* Center: Reference 2026 Edition Pill */}
        <div className="hidden md:flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-[#a1a1aa]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff2222] animate-pulse" />
          <span>2026 EDITION</span>
          <span className="text-white/20">•</span>
          <span className="text-white">MCA 8.1 CGPA</span>
        </div>

        {/* Right: Live Ticking Clock & Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Live digital clock */}
          <div className="flex items-center gap-2 font-mono text-xs text-[#a1a1aa] bg-black/40 px-3 py-1.5 rounded-lg border border-white/5">
            <span className="text-[#ff2222]">●</span>
            <span className="text-white font-medium">{timeString || "04:00:00 AM"}</span>
            <span className="text-[#666670] text-[10px]">IST</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-1 font-mono text-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    isActive
                      ? "text-white font-bold bg-[#ff2222]/20 border border-[#ff2222]/40"
                      : "text-[#9e9ea8] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Resume PDF Button */}
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ff2222] hover:bg-[#ff3d3d] text-white font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(255,34,34,0.35)] group"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu & Resume trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#ff2222] text-white text-xs font-mono"
            aria-label="Download Resume"
          >
            <FileDown className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2 rounded-lg bg-[#111116] border border-white/10 text-white hover:border-[#ff2222]/50 focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#ff2222]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-b border-white/10 bg-[#08080a]/98 backdrop-blur-2xl px-4 pt-3 pb-6 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10 text-xs font-mono text-[#a1a1aa]">
              <span>LIVE TIME: {timeString}</span>
              <span className="text-[#ff2222]">COIMBATORE, IN</span>
            </div>

            <nav className="flex flex-col gap-1 font-mono text-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#ff2222]/20 border border-[#ff2222]/40 text-white font-bold"
                        : "text-[#9e9ea8] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#ff2222]" />}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
