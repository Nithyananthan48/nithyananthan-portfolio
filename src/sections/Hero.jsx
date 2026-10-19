import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  FileDown, 
  ExternalLink, 
  Sparkles,
  Award,
  GraduationCap,
  Briefcase,
  Layers,
  CheckCircle2,
  MapPin
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "../components/Icons";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "React.js Developer"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
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
      }, isDeleting ? 40 : 85);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* SkillClass Subtle Ambient Background Elements */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[680px] h-[380px] bg-gradient-to-r from-[#fe5922]/10 via-[#0284c7]/8 to-[#a855f7]/8 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute top-1/3 right-4 w-96 h-96 bg-[#0284c7]/8 dark:bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow Tag — SkillClass Editorial Pill */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 dark:bg-[#141a26]/90 border border-[#e8e3d9] dark:border-[#232d3f] shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-[#131312] dark:text-[#f3f4f6]">
              Coimbatore, Tamil Nadu · Available for Full Stack & Frontend Roles
            </span>
          </div>
        </div>

        {/* Hero Grid: Editorial Headline & Copy on Left, Visual Showcase on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Bold Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Identity & Main Headline */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-[#a64025] dark:text-[#38bdf8] font-bold">
                Portfolio of {personalInfo.name}
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#131312] dark:text-white leading-[1.08]">
                Building web apps with{" "}
                <span className="font-editorial-italic font-normal text-[#fe5922] dark:text-[#38bdf8]">
                  code, craft
                </span>{" "}
                & purpose.
              </h1>

              {/* Dynamic Role Subheading */}
              <div className="flex items-center justify-center lg:justify-start gap-2 pt-2 flex-wrap">
                <span className="text-lg sm:text-2xl font-bold text-[#131312] dark:text-[#f3f4f6]">
                  Specializing as
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-xl bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] text-[#fe5922] dark:text-[#38bdf8] font-mono text-base sm:text-xl font-bold shadow-sm min-h-[38px]">
                  {displayText}
                  <span className="animate-pulse ml-0.5 font-normal">|</span>
                </span>
              </div>
            </div>

            {/* Supporting Summary directly from resume */}
            <p className="text-base sm:text-lg text-[#5e5d59] dark:text-[#94a3b8] max-w-2xl leading-relaxed">
              MCA fresher (CGPA 8.1) seeking a Full Stack Developer role. Skilled in Java, Python, and JavaScript, with hands-on experience building React.js frontends, Node.js & Express.js REST APIs, MongoDB and MySQL databases, and JWT authentication.
            </p>

            {/* Action Buttons Cluster */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2 w-full sm:w-auto">
              {/* Primary Button */}
              <a
                href="#projects"
                className="sc-btn-primary w-full sm:w-auto shadow-md"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Download Resume Button */}
              <a
                href={personalInfo.resumePath}
                download="Nithyananthan_Full_Stack_Developer_Resume.pdf"
                className="sc-btn-secondary w-full sm:w-auto"
                title="Download verified resume PDF"
              >
                <FileDown className="w-4 h-4 text-[#fe5922] dark:text-[#38bdf8]" />
                <span>Download Resume</span>
              </a>

              {/* View Resume in new tab */}
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full text-xs font-semibold text-[#5e5d59] hover:text-[#131312] dark:text-[#94a3b8] dark:hover:text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View PDF</span>
              </a>
            </div>

            {/* Social Links & Quick Connect */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-[#676561] dark:text-[#94a3b8] flex-wrap">
              <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] text-[#131312] dark:text-white hover:border-[#fe5922] dark:hover:border-[#38bdf8] hover:text-[#fe5922] dark:hover:text-[#38bdf8] transition-all hover:-translate-y-0.5 shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] text-[#131312] dark:text-white hover:border-[#fe5922] dark:hover:border-[#38bdf8] hover:text-[#fe5922] dark:hover:text-[#38bdf8] transition-all hover:-translate-y-0.5 shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] text-[#131312] dark:text-white hover:border-[#fe5922] dark:hover:border-[#38bdf8] hover:text-[#fe5922] dark:hover:text-[#38bdf8] transition-all hover:-translate-y-0.5 shadow-sm"
                  aria-label="WhatsApp Contact"
                >
                  <WhatsappIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: SkillClass Signature Showcase with Portrait & Stats */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Outer Container with Warm Border and Shadow */}
            <div className="relative w-full max-w-md rounded-[32px] bg-gradient-to-b from-white to-[#f5f2eb] dark:from-[#151b27] dark:to-[#0f141f] p-4 sm:p-5 border border-[#e8e3d9] dark:border-[#232d3f] shadow-2xl">
              
              {/* Profile Image with Rounded Framing */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/4.6] bg-[#e8e3d9] dark:bg-[#1a2233] border border-[#e8e3d9]/80 dark:border-[#232d3f]">
                <img
                  src={personalInfo.profileImage}
                  alt="Nithyananthan N — Full Stack Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />

                {/* Subtle gradient overlay at bottom of photo */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <div className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold">
                      Full Stack Developer
                    </div>
                    <div className="text-base font-bold">
                      {personalInfo.name}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge 1: MCA CGPA */}
              <div className="absolute -top-4 -left-3 sm:-left-6 bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] rounded-2xl p-3 shadow-xl flex items-center gap-3 animate-float-slow">
                <div className="w-10 h-10 rounded-xl bg-[#fe5922]/10 dark:bg-[#38bdf8]/10 text-[#fe5922] dark:text-[#38bdf8] flex items-center justify-center font-bold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#676561] dark:text-[#94a3b8] font-mono">MCA Score</div>
                  <div className="text-sm font-extrabold text-[#131312] dark:text-white font-mono">
                    8.1 CGPA
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge 2: Nitroware Internship */}
              <div className="absolute -bottom-4 -right-3 sm:-right-6 bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] rounded-2xl p-3 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#676561] dark:text-[#94a3b8] font-mono">Nitroware Tech</div>
                  <div className="text-sm font-extrabold text-[#131312] dark:text-white font-mono">
                    Full Stack Intern
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* SkillClass Bottom Tech Ticker Bar */}
        <div className="mt-16 pt-8 border-t border-[#e8e3d9] dark:border-[#232d3f]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#676561] dark:text-[#94a3b8] font-semibold shrink-0">
              Verified Core Toolkit:
            </span>
            <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-end">
              {["React.js", "Node.js", "Express.js", "MongoDB", "Python", "JavaScript", "MySQL", "REST APIs", "JWT Auth", "Git"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/80 dark:bg-[#141a26]/80 border border-[#e8e3d9] dark:border-[#232d3f] text-[#131312] dark:text-[#f3f4f6]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
