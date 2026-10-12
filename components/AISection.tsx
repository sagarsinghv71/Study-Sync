"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Bot,
  User,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  RefreshCw,
  Zap,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function AISection() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState(0);
  const [planExpanded, setPlanExpanded] = useState(true);

  const handleGenerate = () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setGenerationStep(1);

    setTimeout(() => {
      setGenerationStep(2);
    }, 700);

    setTimeout(() => {
      setGenerationStep(3);
    }, 1400);

    setTimeout(() => {
      setIsGenerating(false);
      setGenerationStep(0);
      try {
        confetti({
          particleCount: 50,
          spread: 50,
          origin: { y: 0.7 },
        });
      } catch {
        // safe fallback
      }
    }, 2100);
  };

  return (
    <section id="ai-tools" className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#635BFF]/10 via-[#06B6D4]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#635BFF]/10 text-[#635BFF] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            STUDYSYNC AI
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Your personal AI study companion.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B]">
            From planning your week to generating quizzes from your notes, StudySync AI
            helps you spend less time organizing and more time learning.
          </p>
        </div>

        {/* AI Assistant Interface Mockup */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-2xl shadow-slate-300/50 overflow-hidden">
          {/* Top Bar */}
          <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#635BFF] to-[#06B6D4] flex items-center justify-center shadow-md">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold flex items-center gap-2">
                  <span>StudySync AI Agent</span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#22C55E]/20 text-[#22C55E]">
                    Online
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">Context: B.Tech Semester V Final Prep</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="hidden sm:inline">Active Model:</span>
              <span className="px-2 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700">
                StudyBrain 4.0
              </span>
            </div>
          </div>

          {/* Chat Container */}
          <div className="p-6 sm:p-8 space-y-6 bg-slate-50/40">
            {/* Student Message */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-3.5 max-w-2xl"
            >
              <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs flex-shrink-0">
                <User className="w-4 h-4 text-slate-600" />
              </div>
              <div className="bg-white p-4 rounded-2xl rounded-tl-sm border border-slate-200 shadow-sm text-sm text-slate-800">
                <div className="text-[11px] font-bold text-slate-400 mb-1">Student</div>
                <p className="font-medium text-slate-900">
                  &ldquo;I have exams in 3 weeks. I need to prepare for DBMS, DSA and Computer Networks.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* AI Response */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex items-start gap-3.5 max-w-3xl ml-auto flex-row-reverse"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#635BFF] to-[#4F46E5] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="bg-white p-5 rounded-2xl rounded-tr-sm border border-[#635BFF]/30 shadow-md text-sm text-slate-800 w-full">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[11px] font-bold text-[#635BFF]">StudySync AI</div>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 21-Day Schedule Generated
                  </span>
                </div>

                <p className="font-medium text-slate-900 mb-4">
                  &ldquo;Got it! Based on your available study time, I&apos;ve created a 21-day preparation plan.&rdquo;
                </p>

                {/* 3-Week Curriculum Breakdown */}
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  {/* Week 1 */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-indigo-200 transition-colors">
                    <div className="flex items-center justify-between font-bold text-xs sm:text-sm text-slate-900 mb-1.5">
                      <span className="flex items-center gap-1.5 text-[#635BFF]">
                        <Calendar className="w-3.5 h-3.5" />
                        Week 1 — Foundation & Core Concepts
                      </span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-indigo-100/70 text-indigo-700">
                        Days 1–7
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 text-xs text-slate-700">
                      <div className="p-2 bg-white rounded-lg border border-slate-200">
                        <strong className="block text-slate-900">DBMS</strong>
                        Fundamentals & ER Modeling
                      </div>
                      <div className="p-2 bg-white rounded-lg border border-slate-200">
                        <strong className="block text-slate-900">DSA</strong>
                        Arrays, Strings & Two Pointers
                      </div>
                      <div className="p-2 bg-white rounded-lg border border-slate-200">
                        <strong className="block text-slate-900">Networks</strong>
                        OSI & TCP/IP Basics
                      </div>
                    </div>
                  </div>

                  {/* Week 2 */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-indigo-200 transition-colors">
                    <div className="flex items-center justify-between font-bold text-xs sm:text-sm text-slate-900 mb-1.5">
                      <span className="flex items-center gap-1.5 text-[#4F46E5]">
                        <Calendar className="w-3.5 h-3.5" />
                        Week 2 — Deep Dive & Algorithms
                      </span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-indigo-100/70 text-indigo-700">
                        Days 8–14
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 text-xs text-slate-700">
                      <div className="p-2 bg-white rounded-lg border border-slate-200">
                        <strong className="block text-slate-900">DBMS</strong>
                        SQL & Normalization (1NF–BCNF)
                      </div>
                      <div className="p-2 bg-white rounded-lg border border-slate-200">
                        <strong className="block text-slate-900">DSA</strong>
                        Binary Trees & Graphs (BFS/DFS)
                      </div>
                      <div className="p-2 bg-white rounded-lg border border-slate-200">
                        <strong className="block text-slate-900">Networks</strong>
                        Routing Protocols & Congestion
                      </div>
                    </div>
                  </div>

                  {/* Week 3 */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-indigo-200 transition-colors">
                    <div className="flex items-center justify-between font-bold text-xs sm:text-sm text-slate-900 mb-1.5">
                      <span className="flex items-center gap-1.5 text-[#06B6D4]">
                        <Calendar className="w-3.5 h-3.5" />
                        Week 3 — Mastery & Exam Simulations
                      </span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-cyan-100/70 text-cyan-800">
                        Days 15–21
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 text-xs text-slate-700">
                      <div className="p-2 bg-white rounded-lg border border-slate-200">
                        <strong className="block text-slate-900">Revision</strong>
                        Formulas, Theorems & Cheat Sheets
                      </div>
                      <div className="p-2 bg-white rounded-lg border border-slate-200">
                        <strong className="block text-slate-900">Mock Tests</strong>
                        3 Timed Full-Length Papers
                      </div>
                      <div className="p-2 bg-white rounded-lg border border-slate-200">
                        <strong className="block text-slate-900">Target Practice</strong>
                        Weak Topic Drill & Flashcards
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Generator Action Button */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-500">
                    {isGenerating ? (
                      <span className="flex items-center gap-1.5 text-[#635BFF] font-semibold">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        {generationStep === 1 && "Analyzing syllabus modules..."}
                        {generationStep === 2 && "Balancing daily cognitive load..."}
                        {generationStep === 3 && "Finalizing 21-day timeline..."}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        Customized to 3.5 hrs/day study schedule
                      </span>
                    )}
                  </div>

                  <button
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#635BFF] hover:bg-[#5248F5] disabled:opacity-75 transition-all shadow-md shadow-[#635BFF]/25 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{isGenerating ? "Regenerating..." : "Generate My Plan"}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Note */}
          <div className="px-6 py-3 bg-slate-50 border-t border-slate-200/80 text-center">
            <span className="text-[11px] text-slate-400">
              ⚡ Demonstration interactive UI mockup • Test the &ldquo;Generate My Plan&rdquo; button above
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
