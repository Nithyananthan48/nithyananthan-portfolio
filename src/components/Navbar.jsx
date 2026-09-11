import React, { useState, useEffect } from "react";
import { Menu, X, FileDown, Code2, Sparkles } from "lucide-react";
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
      setIsScrolled(window.scrollY > 20);

      // Section scroll spy
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-[#090d16]/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/70 shadow-sm dark:shadow-lg dark:shadow-black/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick("#home")}
          className="group flex items-center gap-2.5 focus:outline-none"
          aria-label="Nithyananthan Portfolio Homepage"
        >
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-slate-950 font-black text-lg shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            N
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-950"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-wider text-sm sm:text-base text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-mono tracking-widest text-cyan-600 dark:text-cyan-400 uppercase font-semibold">
              Full Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 backdrop-blur-md shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-sm dark:bg-cyan-500/15 dark:text-cyan-400 dark:border dark:border-cyan-500/30"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white/80 dark:hover:bg-slate-800/50"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

          <a
            href={personalInfo.resumePath}
            download="Nithyananthan_Full_Stack_Developer_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile controls: Theme + Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white focus:outline-none shadow-sm"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-white/98 dark:bg-[#090d16]/95 border-b border-slate-200 dark:border-slate-800 backdrop-blur-xl shadow-lg animate-fadeIn">
          <div className="flex flex-col gap-1.5 pt-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-cyan-500 text-slate-950 font-bold dark:bg-cyan-500/15 dark:text-cyan-400 dark:border dark:border-cyan-500/30"
                      : "text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800/80 flex flex-col gap-2">
              <a
                href={personalInfo.resumePath}
                download="Nithyananthan_Full_Stack_Developer_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

