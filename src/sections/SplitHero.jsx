import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  FileDown, 
  Sparkles, 
  Layers, 
  Terminal, 
  Cpu, 
  ExternalLink,
  ChevronRight,
  RotateCcw
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "../components/Icons";
import { personalInfo } from "../data/portfolioData";
import Hero3DScene from "../components/Hero3DScene";

export default function SplitHero() {
  const [seamX, setSeamX] = useState(50); // percentage 15% to 85%
  const [isDragging, setIsDragging] = useState(false);
  const [activeTab, setActiveTab] = useState("3d"); // "3d" or "projects"
  const containerRef = useRef(null);
  const seamHandleRef = useRef(null);

  // Rotating developer roles
  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "React.js Developer",
    "Node.js & Express Architect"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }, isDeleting ? 30 : 65);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Keep CSS custom property --seam-x updated
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--seam-x", `${seamX}%`);
    }
  }, [seamX]);

  // Handle Dragging
  const updateSeamFromClientX = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const rawPercent = ((clientX - rect.left) / rect.width) * 100;
    // Bound between 15% and 85% like Reference 1
    const clampedPercent = Math.max(15, Math.min(85, rawPercent));
    setSeamX(clampedPercent);
  }, []);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    updateSeamFromClientX(e.clientX);
  };

  // Window-level dragging for seamless mouse/touch tracking anywhere
  useEffect(() => {
    if (!isDragging) return;

    const onPointerMove = (e) => {
      updateSeamFromClientX(e.clientX);
    };

    const onPointerUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, [isDragging, updateSeamFromClientX]);

  // Keyboard navigation for accessibility
  const handleKeyDown = (e) => {
    let nextX = seamX;
    if (e.key === "ArrowLeft") {
      nextX = Math.max(15, seamX - 4);
      e.preventDefault();
    } else if (e.key === "ArrowRight") {
      nextX = Math.min(85, seamX + 4);
      e.preventDefault();
    } else if (e.key === "Home") {
      nextX = 15;
      e.preventDefault();
    } else if (e.key === "End") {
      nextX = 85;
      e.preventDefault();
    } else if (e.key === "PageDown") {
      nextX = Math.max(15, seamX - 10);
      e.preventDefault();
    } else if (e.key === "PageUp") {
      nextX = Math.min(85, seamX + 10);
      e.preventDefault();
    }
    setSeamX(nextX);
  };

  const handleDoubleClick = () => {
    setSeamX(50);
  };

  return (
    <section
      ref={containerRef}
      id="home"
      data-scene="Split Hero"
      className="split-hero-container relative w-full select-none overflow-hidden"
    >
      {/* ============================================================ */}
      {/* 1. LEFT FIELD: INK / NEAR BLACK (#070709) — DEVELOPER IDENTITY */}
      {/* ============================================================ */}
      <div className="field-ink-panel">
        <div className="field-ink-inner flex flex-col justify-between p-6 sm:p-10 lg:p-12 pt-20 lg:pt-24 pb-24 text-[#f5f5f7]">
          {/* Ambient subtle glow in top-left */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="relative z-10 max-w-lg">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121218] border border-white/10 text-xs font-mono text-[#a1a1aa] mb-4 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#ff2222] animate-pulse" />
              <span>MCA 8.1 CGPA // FULL STACK DEVELOPER</span>
            </div>

            {/* Staggered Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-[0.96] mb-2.5">
              <span className="block text-white">NITHYANANTHAN</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff2222] via-[#ff5555] to-white">
                NAGARAJAN
              </span>
            </h1>

            {/* Typing Role subtitle */}
            <div className="flex items-center gap-2 text-sm sm:text-base font-mono text-[#a1a1aa] mb-4 min-h-[26px]">
              <span className="text-[#ff2222] font-bold">&gt;</span>
              <span className="text-white font-semibold">{displayText}</span>
              <span className="w-2 h-4 bg-[#ff2222] animate-pulse" />
            </div>

            {/* Concise verified personal bio */}
            <p className="text-xs sm:text-sm text-[#8e8e99] leading-relaxed max-w-md mb-5 font-sans">
              MCA Graduate (8.1 CGPA) from Hindusthan College of Arts &amp; Science, Coimbatore.
              Engineering responsive frontends with React.js &amp; Tailwind CSS, backed by robust Node.js/Express REST APIs,
              MongoDB, MySQL, and Python. Completed Python Full Stack internship at Nitroware Technologies.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red-primary group text-xs py-2 px-4"
                title="Download Nithyananthan's verified resume PDF"
              >
                <FileDown className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </a>

              <a
                href="#projects"
                className="btn-dark-secondary group text-xs py-2 px-4"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#ff2222]" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 text-[#8e8e99]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#52525b]">CONNECT:</span>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-[#121218] border border-white/5 hover:border-[#ff2222]/50 hover:text-white transition-all hover:scale-105"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-[#121218] border border-white/5 hover:border-[#ff2222]/50 hover:text-white transition-all hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-[#121218] border border-white/5 hover:border-[#ff2222]/50 hover:text-white transition-all hover:scale-105"
                aria-label="WhatsApp Direct"
              >
                <WhatsappIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bottom stats row */}
          <div className="relative z-10 flex flex-wrap items-center gap-3 sm:gap-5 pt-3.5 border-t border-white/10 font-mono text-[10px] sm:text-[11px] text-[#a1a1aa]">
            <div>
              <span className="text-white font-bold text-xs sm:text-sm block">8.1</span>
              <span className="text-[#71717a]">MCA CGPA</span>
            </div>
            <div className="w-px h-5 bg-white/10" />
            <div>
              <span className="text-white font-bold text-xs sm:text-sm block">Nitroware</span>
              <span className="text-[#71717a]">Python Intern</span>
            </div>
            <div className="w-px h-5 bg-white/10" />
            <div>
              <span className="text-white font-bold text-xs sm:text-sm block">3+ Built</span>
              <span className="text-[#71717a]">Full Stack Apps</span>
            </div>
            <div className="w-px h-5 bg-white/10" />
            <div>
              <span className="text-[#ff2222] font-bold text-xs sm:text-sm block">Active</span>
              <span className="text-[#71717a]">Immediate Joiner</span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. RIGHT FIELD: VIVID RED (#d31422) — 3D & PROJECT SHOWCASE */}
      {/* ============================================================ */}
      <div className="field-red-panel">
        <div className="field-red-grain" />

        <div className="field-red-inner flex flex-col justify-between p-6 sm:p-10 lg:p-12 pt-20 lg:pt-24 pb-24 text-white">
          {/* Top header with view switch */}
          <div className="flex items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/20 text-xs font-mono text-white/90 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>INTERACTIVE CORE // 2026</span>
            </div>

            {/* Toggle view tabs */}
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-full border border-white/15 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setActiveTab("3d")}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                  activeTab === "3d" ? "bg-white text-black font-bold shadow-md" : "text-white/70 hover:text-white"
                }`}
              >
                3D Torus
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("projects")}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                  activeTab === "projects" ? "bg-white text-black font-bold shadow-md" : "text-white/70 hover:text-white"
                }`}
              >
                Projects
              </button>
            </div>
          </div>

          {/* Main Visual Display (Center) */}
          <div className="relative flex-1 flex items-center justify-center my-2 overflow-hidden">
            {activeTab === "3d" ? (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <Hero3DScene className="w-full h-full max-h-[420px]" />
                <p className="text-[11px] font-mono tracking-wider text-white/80 mt-1 bg-black/40 px-3 py-1 rounded-full border border-white/10">
                  ORBIT // MOVE MOUSE TO ROTATE 3D GEOMETRY
                </p>
              </div>
            ) : (
              <div className="w-full max-w-md space-y-2.5">
                <div className="p-3.5 rounded-xl bg-black/50 border border-white/20 backdrop-blur-md shadow-xl hover:bg-black/60 transition-colors">
                  <div className="flex items-center justify-between text-xs font-mono text-red-300 mb-1">
                    <span>CAPSTONE PROJECT</span>
                    <span>NLP / AI</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">AI-Driven Academic Support</h4>
                  <p className="text-xs text-white/80 line-clamp-2">
                    Automated rubric-based student assessment using Python, NLP embeddings, and React UI.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-black/50 border border-white/20 backdrop-blur-md shadow-xl hover:bg-black/60 transition-colors">
                  <div className="flex items-center justify-between text-xs font-mono text-red-300 mb-1">
                    <span>FULL STACK MERN</span>
                    <span>CRUD / JWT</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">MERN Blog Application</h4>
                  <p className="text-xs text-white/80 line-clamp-2">
                    Rich-text blogging platform with secure JWT auth, image uploads, and RESTful Express routing.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-black/50 border border-white/20 backdrop-blur-md shadow-xl hover:bg-black/60 transition-colors">
                  <div className="flex items-center justify-between text-xs font-mono text-red-300 mb-1">
                    <span>DATABASE DESIGN</span>
                    <span>RELATIONAL</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">MySQL Movie Database</h4>
                  <p className="text-xs text-white/80 line-clamp-2">
                    Relational schema modeling, multi-table joins, optimized indexing, and Node.js queries.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Field Bottom Note */}
          <div className="flex items-center justify-between border-t border-white/20 pt-2.5 text-xs font-mono text-white/80">
            <span>LOCATION: TAMIL NADU, INDIA</span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 hover:text-white transition-colors underline underline-offset-4"
            >
              <span>Get In Touch</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. DUAL CLIPPED BIG TYPOGRAPHY (GSAP Reference 1 Kerf Style)  */}
      {/* ============================================================ */}
      <div className="hero-title-overlay" aria-hidden="true">
        {/* Light White Text Layer (Visible over the Ink Panel on the Left) */}
        <div className="hero-title-layer hero-title-layer--light">
          <span>DEVELOPER</span>
          <span className="text-[0.78em] opacity-90">// ARCHITECT</span>
        </div>

        {/* Dark Text Layer (Visible over the Red Panel on the Right) */}
        <div className="hero-title-layer hero-title-layer--dark">
          <span>DEVELOPER</span>
          <span className="text-[0.78em] opacity-90">// ARCHITECT</span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 4. DRAGGABLE SEAM & HANDLE (GSAP Reference 1 Divider)         */}
      {/* ============================================================ */}
      <div className="seam-divider" style={{ left: `${seamX}%` }}>
        {/* Laser Rule Line */}
        <div className="seam-laser-rule" />

        {/* Centered Draggable Slider Handle */}
        <button
          ref={seamHandleRef}
          type="button"
          role="slider"
          aria-label="Balance of developer identity and technical showcase. Drag or use the left and right arrow keys."
          aria-valuemin="15"
          aria-valuemax="85"
          aria-valuenow={Math.round(seamX)}
          aria-valuetext={`${Math.round(seamX)}% allocated to technical showcase`}
          tabIndex={0}
          onPointerDown={handlePointerDown}
          onKeyDown={handleKeyDown}
          onDoubleClick={handleDoubleClick}
          className="seam-handle-btn group"
          title="Drag to split screen or double-click to reset"
        >
          <div className="seam-grip-lines" />
        </button>
      </div>

      {/* ============================================================ */}
      {/* 5. BOTTOM CONTROL HINT PILL                                  */}
      {/* ============================================================ */}
      <div className="absolute left-1/2 bottom-24 -translate-x-1/2 z-20 pointer-events-auto">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0a0a0f]/90 border border-white/10 text-[11px] font-mono text-[#a1a1aa] shadow-xl backdrop-blur-md">
          <span className="text-[#ff2222] font-bold">◄</span>
          <span>DRAG SEAM // ARROWS TO BALANCE</span>
          <span className="text-[#ff2222] font-bold">►</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="text-white font-bold">{Math.round(seamX)}% / {100 - Math.round(seamX)}%</span>
          <button
            type="button"
            onClick={handleDoubleClick}
            className="p-1 hover:text-white transition-colors"
            title="Reset to 50/50 balance"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
}
