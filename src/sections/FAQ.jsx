import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Mail } from "lucide-react";
import { faqs, personalInfo } from "../data/portfolioData";
import { easeSkillClass } from "../utils/motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header — SkillClass Editorial Tag & Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: easeSkillClass }}
          className="flex flex-col items-center text-center mb-16"
        >
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
        </motion.div>

        {/* SkillClass Accordion List with AnimatePresence */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: easeSkillClass }}
                className={`sc-card overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-[#fe5922]/40 dark:border-[#38bdf8]/40 shadow-md"
                    : ""
                }`}
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
                  
                  {/* Rotating Chevron Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                      isOpen
                        ? "bg-[#131312] text-white dark:bg-white dark:text-[#131312] border-transparent"
                        : "bg-[#faf8f5] dark:bg-[#1f2838] border-[#e8e3d9] dark:border-[#232d3f] text-[#131312] dark:text-white"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Animated Answer Drawer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: easeSkillClass }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 text-sm sm:text-base text-[#5e5d59] dark:text-[#94a3b8] leading-relaxed border-t border-[#e8e3d9]/60 dark:border-[#232d3f]/60 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have a Question Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: easeSkillClass }}
          className="mt-12 text-center"
        >
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
        </motion.div>

      </div>
    </section>
  );
}
