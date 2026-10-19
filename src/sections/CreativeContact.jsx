import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  MessageSquare, 
  ExternalLink,
  Terminal,
  Sparkles
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import { personalInfo } from "../data/portfolioData";

export default function CreativeContact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Create mailto fallback
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] text-white border-t border-white/5">
      {/* Background Coordinate */}
      <div className="absolute top-12 right-8 font-mono text-[10px] text-white/10 tracking-widest hidden md:block">
        // 05_TRANSMISSION_TERMINAL.SH
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2222]/10 border border-[#ff2222]/30 text-xs font-mono text-[#ff4444] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2222]" />
            <span>05 // INITIATE TRANSMISSION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-jost tracking-tight leading-tight">
            LET'S CONNECT & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-[#ff2222]">
              BUILD EXCEPTIONAL EXPERIENCES
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9e9ea8] max-w-2xl">
            Currently available for Full Stack Developer & Frontend Developer roles, internships, and technical collaboration.
          </p>
        </div>

        {/* Reference Signature 3-Column Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Column 1: LOCATION & AVAILABILITY */}
          <div className="p-6 rounded-2xl bg-[#0f0f16] border border-white/10 space-y-4">
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
              <p className="text-[11px] text-[#71717a]">
                On-site (Coimbatore, Chennai, Bangalore), Hybrid & Remote.
              </p>
            </div>
          </div>

          {/* Column 2: DIRECT COMMUNICATIONS */}
          <div className="p-6 rounded-2xl bg-[#0f0f16] border border-white/10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="font-mono text-xs text-[#ff4444] font-bold">02 // DIRECT REACH</span>
              <Mail size={16} className="text-[#ff2222]" />
            </div>

            {/* Email with 1-click Copy */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#71717a] block">EMAIL ADDRESS</span>
              <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/5">
                <span className="text-xs font-mono text-white truncate">
                  {personalInfo.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-2 py-1 rounded bg-[#ff2222]/20 hover:bg-[#ff2222] text-[#ff4444] hover:text-white text-[11px] font-mono transition-all flex items-center gap-1 shrink-0"
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copied ? "COPIED" : "COPY"}</span>
                </button>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#71717a] block">PHONE & WHATSAPP</span>
              <div className="flex items-center justify-between text-xs font-mono">
                <a href={`tel:${personalInfo.phone}`} className="text-white hover:text-[#ff4444] transition-colors">
                  {personalInfo.phone}
                </a>
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <MessageSquare size={12} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: SOCIAL CHANNELS */}
          <div className="p-6 rounded-2xl bg-[#0f0f16] border border-white/10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="font-mono text-xs text-[#ff4444] font-bold">03 // PROFILES</span>
              <Terminal size={16} className="text-[#ff2222]" />
            </div>

            <div className="space-y-2">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-[#ff2222]/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5 text-xs font-mono text-white">
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </div>
                <ExternalLink size={12} className="text-[#71717a] group-hover:text-[#ff2222] transition-colors" />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-[#ff2222]/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5 text-xs font-mono text-white">
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </div>
                <ExternalLink size={12} className="text-[#71717a] group-hover:text-[#ff2222] transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Transmission Terminal Interactive Form */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#0e0e15] border border-white/10 relative overflow-hidden">
          <div className="flex items-center gap-2 pb-4 border-b border-white/10 font-mono text-xs text-[#ff4444] mb-6">
            <Terminal size={14} />
            <span>DISPATCH_MESSAGE // SECURE TRANSMISSION CHANNEL</span>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#ff2222]/20 border border-[#ff2222] text-[#ff4444] flex items-center justify-center mx-auto">
                <Check size={24} />
              </div>
              <h4 className="text-xl font-bold font-jost text-white">
                Message Prepared for Transmission
              </h4>
              <p className="text-sm text-[#9e9ea8] max-w-md mx-auto">
                Your email client was initiated. You can also reach out directly to{" "}
                <a href={`mailto:${personalInfo.email}`} className="text-[#ff4444] underline">
                  {personalInfo.email}
                </a>
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-white border border-white/10"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-[#a1a1aa] mb-2 uppercase">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-[#ff2222] focus:outline-none text-white font-mono text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#a1a1aa] mb-2 uppercase">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-[#ff2222] focus:outline-none text-white font-mono text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#a1a1aa] mb-2 uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Full Stack Developer Opportunity / Project Inquiry"
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-[#ff2222] focus:outline-none text-white font-mono text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#a1a1aa] mb-2 uppercase">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your role, engineering challenge, or project..."
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-[#ff2222] focus:outline-none text-white font-mono text-sm transition-colors"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] font-mono text-[#71717a]">
                  DIRECT_TRANSMISSION // RESPONSE TIME: &lt; 24 HOURS
                </span>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#ff2222] hover:bg-[#ff3d3d] text-white font-mono text-xs font-bold tracking-wider transition-all shadow-[0_0_20px_rgba(255,34,34,0.4)] active:scale-95 cursor-pointer"
                >
                  <Send size={14} />
                  <span>DISPATCH TRANSMISSION</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
