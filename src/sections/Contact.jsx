import React, { useState } from "react";
import { 
  Mail, 
  FileDown, 
  Send, 
  Check, 
  Copy, 
  Sparkles,
  Phone,
  ArrowUpRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "../components/Icons";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);
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
    const mailtoSubject = encodeURIComponent(
      formState.subject || `Portfolio Inquiry from ${formState.name || "Recruiter"}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-600 dark:text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>08 · Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Build <span className="gradient-text">Something Together</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl text-sm sm:text-base mt-3 leading-relaxed">
            I’m currently looking for opportunities where I can apply my development skills, learn from real-world projects and grow as a Full Stack Developer.
          </p>
        </div>

        {/* Two-column layout: Direct Contact Cards on Left, Interactive Message Composer on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left: Contact Info & Action Buttons */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card */}
            <div className="glass-panel p-5 rounded-2xl border-slate-200 dark:border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                  Direct Email
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-xs text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-mono font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="font-mono">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors block font-mono break-all"
              >
                {personalInfo.email}
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-cyan-500/20"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
            </div>

            {/* Direct WhatsApp Card */}
            <div className="glass-panel p-5 rounded-2xl border-slate-200 dark:border-slate-800/80 space-y-3">
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                Phone & WhatsApp
              </div>
              <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono">
                {personalInfo.phone}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-emerald-500/20"
                >
                  <WhatsappIcon className="w-3.5 h-3.5" />
                  <span>WhatsApp Me</span>
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium text-xs border border-slate-200 dark:border-slate-700 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>Call Directly</span>
                </a>
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-4 rounded-2xl flex items-center justify-between group hover:border-cyan-500/40 transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-4 rounded-2xl flex items-center justify-between group hover:border-cyan-500/40 transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>

            {/* Download Resume Banner Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-50 to-indigo-50 dark:from-cyan-950/60 dark:to-indigo-950/60 border border-cyan-200 dark:border-cyan-800/50 flex items-center justify-between gap-4 shadow-sm">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-semibold">Curriculum Vitae</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Download Complete Resume</div>
              </div>
              <a
                href={personalInfo.resumePath}
                download="Nithyananthan_Full_Stack_Developer_Resume.pdf"
                className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 shrink-0 transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>Resume PDF</span>
              </a>
            </div>

          </div>

          {/* Right: Interactive Message Composer */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-5">
              <div className="pb-3 border-b border-slate-200 dark:border-slate-800/80">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Draft an inquiry or opportunity details. It will open your pre-formatted mail client.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 uppercase font-semibold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 focus:border-cyan-500/80 focus:ring-2 focus:ring-cyan-500/20 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none transition-all shadow-sm dark:shadow-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 uppercase font-semibold">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 focus:border-cyan-500/80 focus:ring-2 focus:ring-cyan-500/20 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none transition-all shadow-sm dark:shadow-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 uppercase font-semibold">
                    Subject / Opportunity
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Stack Developer Role / Project Collaboration"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 focus:border-cyan-500/80 focus:ring-2 focus:ring-cyan-500/20 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none transition-all shadow-sm dark:shadow-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 uppercase font-semibold">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Hi Nithyananthan, we reviewed your projects and would like to discuss..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 focus:border-cyan-500/80 focus:ring-2 focus:ring-cyan-500/20 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none transition-all resize-none shadow-sm dark:shadow-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

