import React, { useState } from "react";
import { 
  Mail, 
  FileDown, 
  Send, 
  Check, 
  Copy, 
  Sparkles,
  Phone,
  MapPin,
  ArrowRight,
  ExternalLink
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

    // Trigger user's mail client transparently with prefilled fields
    const mailtoSubject = encodeURIComponent(
      formState.subject || `Full Stack Developer Inquiry from ${formState.name || "Recruiter"}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    
    setFormSubmitted(true);
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header — SkillClass Editorial Tag & Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] text-[#fe5922] dark:text-[#38bdf8] text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#131312] dark:text-white tracking-tight max-w-3xl leading-[1.12]">
            Let’s build something{" "}
            <span className="font-editorial-italic font-normal text-[#fe5922] dark:text-[#38bdf8]">
              worth keeping.
            </span>
          </h2>
          
          <p className="text-[#5e5d59] dark:text-[#94a3b8] max-w-xl text-sm sm:text-base mt-3">
            Open for Junior Full Stack Developer and Frontend Developer opportunities. Let’s talk about how I can contribute to your team.
          </p>
        </div>

        {/* 2-Column Layout matching SkillClass Reservation / Contact section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card */}
            <div className="sc-card p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#676561] dark:text-[#94a3b8] font-semibold">
                  Direct Email
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs text-[#fe5922] dark:text-[#38bdf8] hover:underline font-mono cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                className="text-lg sm:text-xl font-bold text-[#131312] dark:text-white hover:text-[#fe5922] dark:hover:text-[#38bdf8] transition-colors block font-mono break-all"
              >
                {personalInfo.email}
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="sc-btn-primary w-full text-xs py-2.5"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="sc-card p-6 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#676561] dark:text-[#94a3b8] font-semibold">
                Phone & Instant Chat
              </div>

              <div className="text-lg font-bold text-[#131312] dark:text-white font-mono">
                {personalInfo.phone}
              </div>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="sc-btn-secondary flex-1 text-xs py-2.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 flex-1 py-2.5 px-4 rounded-full text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-sm"
                >
                  <WhatsappIcon className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Location & Social Links Card */}
            <div className="sc-card p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#1a2233] border border-[#e8e3d9] dark:border-[#232d3f] flex items-center justify-center text-[#fe5922] dark:text-[#38bdf8] shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#676561] dark:text-[#94a3b8]">
                    Based in
                  </div>
                  <div className="text-sm font-bold text-[#131312] dark:text-white">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#e8e3d9] dark:border-[#232d3f] flex items-center gap-3">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="sc-btn-secondary flex-1 text-xs py-2"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="sc-btn-secondary flex-1 text-xs py-2"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-600" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: SkillClass Reservation-style Contact Form */}
          <div className="lg:col-span-7">
            <div className="sc-card p-7 sm:p-9 space-y-6">
              
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#131312] dark:text-white">
                  Send an Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#5e5d59] dark:text-[#94a3b8] mt-1">
                  Fill out the details below. This form prepares and launches your email client directly with all your information pre-filled.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-[#131312] dark:text-white">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] dark:bg-[#0c1017] border border-[#e8e3d9] dark:border-[#232d3f] text-sm text-[#131312] dark:text-white focus:outline-none focus:border-[#fe5922] dark:focus:border-[#38bdf8] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-[#131312] dark:text-white">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] dark:bg-[#0c1017] border border-[#e8e3d9] dark:border-[#232d3f] text-sm text-[#131312] dark:text-white focus:outline-none focus:border-[#fe5922] dark:focus:border-[#38bdf8] transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-[#131312] dark:text-white">
                    Subject / Role Opportunity
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Full Stack Developer Opening / Technical Interview"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] dark:bg-[#0c1017] border border-[#e8e3d9] dark:border-[#232d3f] text-sm text-[#131312] dark:text-white focus:outline-none focus:border-[#fe5922] dark:focus:border-[#38bdf8] transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-[#131312] dark:text-white">
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about the role, technical requirements, or team setup..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] dark:bg-[#0c1017] border border-[#e8e3d9] dark:border-[#232d3f] text-sm text-[#131312] dark:text-white focus:outline-none focus:border-[#fe5922] dark:focus:border-[#38bdf8] transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="sc-btn-primary w-full cursor-pointer py-3.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </button>

                {formSubmitted && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-700 dark:text-emerald-400 font-medium text-center">
                    Email client launched! You can also email directly at <strong>{personalInfo.email}</strong>.
                  </div>
                )}
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
