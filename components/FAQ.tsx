"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  // Allow multiple or single open
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is StudySync?",
      answer:
        "StudySync is an AI-powered student productivity platform built specifically to help college and high school students organize coursework, create realistic revision timelines, take smart structured notes, and build consistent daily study habits without cognitive burnout.",
    },
    {
      question: "How does the AI study planner work?",
      answer:
        "You input your subjects, syllabus topics, upcoming exam dates, and available hours per day. StudySync's engine calculates optimal study blocks using spaced repetition algorithms and balances cognitively intensive subjects with lighter revision sessions.",
    },
    {
      question: "Can I use StudySync for college exams?",
      answer:
        "Yes, absolutely! StudySync was purpose-built for university curricula like Engineering (DSA, DBMS, Networks), Medical sciences, Business, and Humanities. It handles semester midterms, final exam marathons, and weekly assignments with ease.",
    },
    {
      question: "Is StudySync free?",
      answer:
        "Yes! StudySync offers a generous Free tier that includes core task management, study planning, pomodoro focus timers, and basic progress metrics. You only upgrade if you want unlimited AI exam preparation and automated quiz generation.",
    },
    {
      question: "Can I create quizzes from my notes?",
      answer:
        "Yes! With the AI Quiz Generator in Pro and Student+ tiers, you can paste your lecture notes or upload syllabus summaries, and StudySync will instantly generate multiple-choice questions, flashcards, and active recall practice problems.",
    },
    {
      question: "Does StudySync work on mobile?",
      answer:
        "Yes! StudySync is 100% responsive and works fluidly across mobile phones, tablets, iPads, laptops, and ultra-wide desktop monitors. You can review your daily schedule on the bus or study on your laptop in the library.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#635BFF]/10 text-[#635BFF] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            QUESTIONS & ANSWERS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Frequently asked questions.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B]">
            Everything you need to know about StudySync, AI study plans, and getting started.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#F8FAFC] border-[#635BFF]/40 shadow-sm"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span
                    className={`text-base sm:text-lg font-bold transition-colors ${
                      isOpen ? "text-[#635BFF]" : "text-slate-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#635BFF] text-white rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#64748B] leading-relaxed border-t border-slate-100/80">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
