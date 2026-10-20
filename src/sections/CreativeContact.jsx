import React, { useState } from "react";
import { 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  MessageSquare, 
  ExternalLink,
  Terminal,
  Phone,
  ArrowUpRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import { personalInfo } from "../data/portfolioData";

export default function CreativeContact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] text-white border-t border-white/5">
      {/* Background Coordinate */}
      <div className="absolute top-12 right-8 font-mono text-[10px] text-white/10 tracking-widest hidden md:block">
        // 05_CONTACT_DIRECT.SH
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2222]/10 border border-[#ff2222]/30 text-xs font-mono text-[#ff4444] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2222]" />
            <span>05 // INITIATE DIRECT CONTACT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-jost tracking-tight leading-tight">
            LET'S CONNECT & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-[#ff2222]">
              BUILD EXCEPTIONAL EXPERIENCES
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9e9ea8] max-w-2xl">
            Currently available for Full Stack Developer & Frontend Developer roles, technical internships, and immediate job opportunities.
          </p>
        </div>

        {/* 3-Column Direct Contact Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Column 1: LOCATION & AVAILABILITY */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0f0f16] border border-white/10 hover:border-white/20 transition-all space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="font-mono text-xs text-[#ff4444] font-bold">01 // LOCATION</span>
              <MapPin size={16} className="text-[#ff2222]" />
            </div>
            
            <div className="space-y-1">
              <h4 className="font-bold text-white font-jost text-lg">
                Coimbatore, Tamil Nadu
              </h4>
              <p className="text-xs text-[#8e8e98]">
                India · Timezone IST (UTC+5:30)
              </p>
            </div>

            <div className="pt-2 border-t border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-white/90">
                <span className="w-2 h-2 rounded-full bg-[#ff2222] animate-pulse" />
                <span>OPEN FOR IMMEDIATE HIRE</span>
              </div>
              <p className="text-[11px] text-[#71717a] leading-relaxed">
                Open for On-site (Coimbatore, Chennai, Bangalore), Hybrid, and Remote opportunities.
              </p>
            </div>
          </div>

          {/* Column 2: DIRECT COMMUNICATIONS */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0f0f16] border border-white/10 hover:border-white/20 transition-all space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="font-mono text-xs text-[#ff4444] font-bold">02 // DIRECT REACH</span>
              <Mail size={16} className="text-[#ff2222]" />
            </div>

            {/* Email with 1-click Copy */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-[#71717a] block">EMAIL ADDRESS</span>
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs font-mono text-white hover:text-[#ff4444] truncate transition-colors"
                >
                  {personalInfo.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded bg-[#ff2222]/20 hover:bg-[#ff2222] text-[#ff4444] hover:text-white text-[11px] font-mono transition-all flex items-center gap-1 shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copied ? "COPIED" : "COPY"}</span>
                </button>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-mono text-[#71717a] block">PHONE & WHATSAPP</span>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs font-mono">
                <a 
                  href={`tel:${personalInfo.phone}`} 
                  className="text-white hover:text-[#ff4444] transition-colors flex items-center gap-1.5"
                >
                  <Phone size={13} className="text-[#ff2222]" />
                  <span>{personalInfo.phone}</span>
                </a>
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold"
                >
                  <MessageSquare size={13} />
                  <span>WhatsApp →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: PROFESSIONAL PROFILES */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0f0f16] border border-white/10 hover:border-white/20 transition-all space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="font-mono text-xs text-[#ff4444] font-bold">03 // PROFILES</span>
              <Terminal size={16} className="text-[#ff2222]" />
            </div>

            <div className="space-y-2.5">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/[0.03] border border-white/5 hover:border-[#ff2222]/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5 text-xs font-mono text-white">
                  <GithubIcon className="w-4 h-4 text-white group-hover:text-[#ff2222] transition-colors" />
                  <span>GitHub Profile</span>
                </div>
                <ExternalLink size={13} className="text-[#71717a] group-hover:text-[#ff2222] transition-colors" />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/[0.03] border border-white/5 hover:border-[#ff2222]/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5 text-xs font-mono text-white">
                  <LinkedinIcon className="w-4 h-4 text-white group-hover:text-[#ff2222] transition-colors" />
                  <span>LinkedIn Profile</span>
                </div>
                <ExternalLink size={13} className="text-[#71717a] group-hover:text-[#ff2222] transition-colors" />
              </a>
            </div>

            <div className="pt-2 border-t border-white/5 text-[11px] font-mono text-[#71717a] flex items-center justify-between">
              <span>RESPONSE TIME</span>
              <span className="text-[#ff4444]">&lt; 24 HOURS</span>
            </div>
          </div>

        </div>

        {/* Quick Action Banner */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#0e0e15] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold font-jost text-white">
              Ready to discuss an opportunity or project?
            </h4>
            <p className="text-xs sm:text-sm text-[#8e8e98]">
              Reach out directly via email, phone, or LinkedIn — I respond within 24 hours.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`mailto:${personalInfo.email}?subject=Full%20Stack%20Developer%20Opportunity`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#ff2222] hover:bg-[#ff3d3d] text-white font-mono text-xs font-bold tracking-wider transition-all shadow-[0_0_20px_rgba(255,34,34,0.35)] active:scale-95"
            >
              <Mail size={14} />
              <span>SEND EMAIL</span>
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-white font-mono text-xs font-semibold tracking-wider transition-all active:scale-95"
            >
              <span>CONNECT ON LINKEDIN</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
