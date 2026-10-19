import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  Phone,
  MapPin,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "../components/Icons";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    const mailtoSubject = encodeURIComponent(
      formState.subject || `Full Stack Developer Opportunity from ${formState.name || "Recruiter"}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    
    setFormSubmitted(true);
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" data-scene="Contact" className="py-24 md:py-32 relative bg-[#070709] text-[#f5f5f7]">
      {/* Red ambient glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ff2222]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111118] border border-white/10 text-[#ff2222] text-xs font-mono uppercase tracking-widest mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>06 // TRANSMISSION CHANNEL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-3xl leading-[1.1]">
            Let&apos;s build something.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2222] to-[#ff6666]">
              Start the conversation.
            </span>
          </h2>
          
          <p className="text-[#8e8e99] max-w-xl text-sm sm:text-base mt-4 font-sans leading-relaxed">
            Actively seeking full-time Full Stack Developer or Frontend Developer opportunities. Available for immediate joining.
          </p>
        </motion.div>

        {/* Content Layout: Contact Info Cards + Direct Transmission Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Verified Channels */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Quick Action: Copy Email Card */}
            <div className="rb-card p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#71717a] uppercase">DIRECT INBOX</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-[#ff2222]/20 border border-white/10 text-xs font-mono text-[#ff2222] transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base sm:text-lg font-mono font-bold text-white hover:text-[#ff2222] transition-colors block break-all"
              >
                {personalInfo.email}
              </a>

              <p className="text-xs text-[#8e8e99] leading-relaxed">
                Replies typically sent within 24 hours. Feel free to reach out directly with job specifications or interview requests.
              </p>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="rb-card p-6 sm:p-7 space-y-4">
              <span className="text-xs font-mono text-[#71717a] uppercase block">PHONE &amp; WHATSAPP</span>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2.5 text-sm sm:text-base font-mono font-bold text-white hover:text-[#ff2222] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#ff2222]" />
                  <span>{personalInfo.phone}</span>
                </a>

                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25d366]/15 border border-[#25d366]/30 text-[#25d366] text-xs font-mono font-bold hover:bg-[#25d366]/25 transition-colors"
                >
                  <WhatsappIcon className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Location & Social Profiles */}
            <div className="rb-card p-6 sm:p-7 space-y-4">
              <span className="text-xs font-mono text-[#71717a] uppercase block">VERIFIED PROFILES</span>
              
              <div className="flex items-center gap-2 text-xs font-mono text-[#a1a1aa] mb-3">
                <MapPin className="w-4 h-4 text-[#ff2222]" />
                <span>{personalInfo.location}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-black/50 border border-white/10 hover:border-[#ff2222]/50 hover:bg-[#181824] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-white" />
                    <span className="text-xs font-mono text-white font-medium">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#71717a] group-hover:text-[#ff2222] transition-colors" />
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-black/50 border border-white/10 hover:border-[#ff2222]/50 hover:bg-[#181824] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-[#0a66c2]" />
                    <span className="text-xs font-mono text-white font-medium">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#71717a] group-hover:text-[#ff2222] transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Transmission Terminal Form */}
          <div className="lg:col-span-7">
            <div className="rb-card p-6 sm:p-9 relative overflow-hidden">
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 text-xs font-mono text-[#8e8e99]">transmission_terminal.sh</span>
                </div>
                <span className="text-xs font-mono text-[#ff2222] font-semibold">PORT 4173 // SECURE</span>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#ff2222]/20 border border-[#ff2222] text-[#ff2222] flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Transmission Prepared</h4>
                  <p className="text-xs sm:text-sm text-[#8e8e99] max-w-sm mx-auto font-sans">
                    Your email client should launch automatically. If not, write directly to <strong className="text-white">{personalInfo.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="btn-dark-secondary text-xs"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#8e8e99]">NAME / RECRUITER</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name or company"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm font-sans focus:outline-none focus:border-[#ff2222] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#8e8e99]">EMAIL ADDRESS</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm font-sans focus:outline-none focus:border-[#ff2222] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#8e8e99]">SUBJECT</label>
                    <input
                      type="text"
                      placeholder="e.g. Full Stack Developer Opening / Technical Interview"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm font-sans focus:outline-none focus:border-[#ff2222] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#8e8e99]">MESSAGE</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share project scope, role requirements, or interview details..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm font-sans focus:outline-none focus:border-[#ff2222] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-red-primary w-full py-3 text-sm font-mono uppercase tracking-wider"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Direct Email Transmission</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
