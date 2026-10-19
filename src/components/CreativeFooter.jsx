import { ArrowUp, Mail, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";

export default function CreativeFooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 bg-[#060608] border-t border-white/10 text-white select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 font-mono text-sm tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#ff2222]" />
            <span className="font-bold text-white">{personalInfo.name}</span>
            <span className="text-[#ff2222] font-semibold">[DEV]</span>
          </div>
          <p className="text-xs text-[#71717a] font-mono">
            Full Stack Developer · MCA 8.1 CGPA · Coimbatore, TN, India
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-[#ff2222] hover:text-white text-[#a1a1aa] transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-[#ff2222] hover:text-white text-[#a1a1aa] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-emerald-600 hover:text-white text-[#a1a1aa] transition-colors"
            aria-label="WhatsApp"
          >
            <MessageSquare size={15} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-lg bg-white/5 hover:bg-[#ff2222] hover:text-white text-[#a1a1aa] transition-colors"
            aria-label="Email"
          >
            <Mail size={15} />
          </a>
        </div>

        {/* Right: Return to top button */}
        <button
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-[#a1a1aa] hover:text-white border border-white/10 transition-all active:scale-95 cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <ArrowUp size={14} className="text-[#ff2222] group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#555560] gap-2">
        <span>© {new Date().getFullYear()} NITHYANANTHAN N. ALL RIGHTS RESERVED.</span>
        <span>ENGINEERED WITH REACT 19 · GSAP & MOTION · TAILWIND CSS</span>
      </div>
    </footer>
  );
}
