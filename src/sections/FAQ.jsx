import React, { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles, Mail } from "lucide-react";
import { faqs, personalInfo } from "../data/portfolioData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header — SkillClass Editorial Tag & Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#141a26] border border-[#e8e3d9] dark:border-[#232d3f] text-[#fe5922] dark:text-[#38bdf8] text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Queries</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#131312] dark:text-white tracking-tight max-w-2xl leading-[1.12]">
            Frequently asked{" "}
            <span className="font-editorial-italic font-normal text-[#fe5922] dark:text-[#38bdf8]">
              questions.
            </span>
          </h2>
          
          <p className="text-[#5e5d59] dark:text-[#94a3b8] max-w-xl text-sm sm:text-base mt-3">
            Key details about my technical capabilities, project background, internship, and current availability.
          </p>
        </div>

        {/* SkillClass Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="sc-card overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#131312] dark:text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#faf8f5] dark:bg-[#1f2838] border border-[#e8e3d9] dark:border-[#232d3f] flex items-center justify-center text-[#131312] dark:text-white shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#131312] text-white dark:bg-white dark:text-[#131312]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 text-sm sm:text-base text-[#5e5d59] dark:text-[#94a3b8] leading-relaxed border-t border-[#e8e3d9]/60 dark:border-[#232d3f]/60 mt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have a Question Pill */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#5e5d59] dark:text-[#94a3b8]">
            <span>Have a specific opportunity or question?</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-[#fe5922] dark:text-[#38bdf8] font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>Reach out directly</span>
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
