"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  Flame,
  TrendingUp,
  BookOpen,
  Award,
  ChevronRight,
  Check,
} from "lucide-react";

interface HeroProps {
  onOpenAuth: (mode?: "login" | "signup", plan?: string) => void;
}

export default function Hero({ onOpenAuth }: HeroProps) {
  // Interactive checklist in mockup
  const [completedItems, setCompletedItems] = useState<{ [key: string]: boolean }>({
    math: true,
    dsa: false,
    dbms: false,
  });

  const toggleItem = (key: string) => {
    setCompletedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="relative pt-6 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Subtle atmospheric background light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#635BFF]/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-[#06B6D4]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#635BFF]/20 shadow-sm text-xs sm:text-sm font-semibold text-[#635BFF]">
              <Sparkles className="w-4 h-4 text-[#635BFF]" />
              <span>AI-powered productivity for students</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.12]">
              Study <span className="text-[#635BFF] relative inline-block">
                Smarter.
                <svg
                  className="absolute left-0 -bottom-1 w-full text-[#635BFF]/20 h-2 -z-10"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M0,8 Q50,0 100,8 L100,12 L0,12 Z" />
                </svg>
              </span>
              <br />
              <span className="text-[#0F172A]">Achieve More.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-xl mx-auto lg:mx-0">
              StudySync helps you plan your semester, organize your tasks, create
              smarter study schedules and stay on track — all in one place.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={() => onOpenAuth("signup")}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-white bg-[#635BFF] hover:bg-[#5248F5] transition-all shadow-md shadow-[#635BFF]/25 hover:shadow-lg hover:shadow-[#635BFF]/35 active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Start Studying Free</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#features"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all text-center hover:border-slate-300"
              >
                Explore Features
              </a>
            </div>

            {/* Trust Micro-Text */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2 text-xs text-[#64748B]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#22C55E]" />
              <span>No credit card required</span>
              <span>•</span>
              <span>Built for students</span>
            </div>

            {/* Student Social Proof Snippet */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 border-t border-slate-200/60 max-w-md mx-auto lg:mx-0">
              <div className="flex -space-x-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500 text-white font-bold text-xs ring-2 ring-white">
                  AS
                </span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500 text-white font-bold text-xs ring-2 ring-white">
                  PM
                </span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white font-bold text-xs ring-2 ring-white">
                  RV
                </span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-white font-bold text-xs ring-2 ring-white">
                  AR
                </span>
              </div>
              <div className="text-left text-xs">
                <div className="flex items-center gap-1 text-amber-500">
                  {"★".repeat(5)}
                  <span className="font-bold text-slate-800 ml-1">4.9/5</span>
                </div>
                <span className="text-slate-500">
                  Loved by <strong className="text-slate-700">5,000+</strong> students
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Realistic Dashboard Product Preview + Floating UI Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            {/* FLOATING CARD 1: 12 Day Streak (Top-Right) */}
            <div className="absolute -top-4 sm:-top-6 -right-2 sm:-right-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 flex items-center gap-2.5 animate-float-slow">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                  <span>12 Day Streak</span>
                  <span>🔥</span>
                </div>
                <div className="text-[10px] text-slate-500 font-medium">On fire this week!</div>
              </div>
            </div>

            {/* FLOATING CARD 2: AI Plan Generated (Bottom-Left) */}
            <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-6 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-[#635BFF]/30 shadow-xl shadow-[#635BFF]/15 flex items-center gap-2.5 animate-float-delayed">
              <div className="w-8 h-8 rounded-xl bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#635BFF]" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">AI Plan Generated</div>
                <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>Optimized for 3 exams</span>
                </div>
              </div>
            </div>

            {/* FLOATING CARD 3: 72% Weekly Goal (Bottom-Right) */}
            <div className="hidden sm:flex absolute bottom-8 -right-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200 shadow-lg flex items-center gap-2 animate-float-slow">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
              <div className="text-xs font-bold text-slate-800">
                72% Weekly Goal
              </div>
            </div>

            {/* MAIN DASHBOARD MOCKUP CONTAINER */}
            <div className="relative rounded-2xl bg-white border border-slate-200 shadow-2xl shadow-slate-300/60 overflow-hidden">
              {/* Window Header bar */}
              <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400/90 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/90 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/90 inline-block" />
                  <span className="text-xs text-slate-400 font-mono ml-2">studysync.app/dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-[#22C55E]/10 text-[#22C55E]">
                    ● Live Sync
                  </span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-4 sm:p-6 bg-slate-50/50 space-y-4">
                {/* Header row */}
                <div className="flex items-center justify-between bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm">
                  <div>
                    <h2 className="text-sm sm:text-base font-bold text-slate-900">
                      Today&apos;s Study Plan
                    </h2>
                    <p className="text-xs text-slate-500">
                      Wednesday, October 14 • Midterm Sprint
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-slate-500 block">Progress</span>
                    <span className="text-sm font-extrabold text-[#635BFF]">72%</span>
                  </div>
                </div>

                {/* Subject Schedule Cards (interactive toggle) */}
                <div className="space-y-2.5">
                  {/* Mathematics */}
                  <div
                    onClick={() => toggleItem("math")}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      completedItems.math
                        ? "bg-slate-50/80 border-slate-200 opacity-80"
                        : "bg-white border-slate-200 hover:border-[#635BFF]/40 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                          completedItems.math
                            ? "bg-emerald-500 text-white"
                            : "border-2 border-slate-300 hover:border-[#635BFF]"
                        }`}
                      >
                        {completedItems.math && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div
                          className={`text-xs sm:text-sm font-bold ${
                            completedItems.math ? "line-through text-slate-400" : "text-slate-800"
                          }`}
                        >
                          Mathematics — Calculus II
                        </div>
                        <div className="text-[11px] text-slate-500 flex items-center gap-2">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-400" /> 1h 30m
                          </span>
                          <span>•</span>
                          <span className="text-indigo-600 font-medium">Integration & Series</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-600">
                      {completedItems.math ? "Done" : "09:00 AM"}
                    </span>
                  </div>

                  {/* Data Structures */}
                  <div
                    onClick={() => toggleItem("dsa")}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      completedItems.dsa
                        ? "bg-slate-50/80 border-slate-200 opacity-80"
                        : "bg-white border-indigo-200/80 ring-1 ring-indigo-500/10 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                          completedItems.dsa
                            ? "bg-emerald-500 text-white"
                            : "border-2 border-slate-300 hover:border-[#635BFF]"
                        }`}
                      >
                        {completedItems.dsa && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div
                          className={`text-xs sm:text-sm font-bold ${
                            completedItems.dsa ? "line-through text-slate-400" : "text-slate-900"
                          }`}
                        >
                          Data Structures & Algorithms
                        </div>
                        <div className="text-[11px] text-slate-500 flex items-center gap-2">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-400" /> 2h
                          </span>
                          <span>•</span>
                          <span className="text-cyan-600 font-medium">Binary Trees & Graphs</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-amber-50 text-amber-700">
                      {completedItems.dsa ? "Done" : "In Progress"}
                    </span>
                  </div>

                  {/* Database Systems */}
                  <div
                    onClick={() => toggleItem("dbms")}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      completedItems.dbms
                        ? "bg-slate-50/80 border-slate-200 opacity-80"
                        : "bg-white border-slate-200 hover:border-[#635BFF]/40 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                          completedItems.dbms
                            ? "bg-emerald-500 text-white"
                            : "border-2 border-slate-300 hover:border-[#635BFF]"
                        }`}
                      >
                        {completedItems.dbms && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div
                          className={`text-xs sm:text-sm font-bold ${
                            completedItems.dbms ? "line-through text-slate-400" : "text-slate-800"
                          }`}
                        >
                          Database Systems (DBMS)
                        </div>
                        <div className="text-[11px] text-slate-500 flex items-center gap-2">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-400" /> 1h
                          </span>
                          <span>•</span>
                          <span className="text-slate-600">SQL Normalization</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      {completedItems.dbms ? "Done" : "02:00 PM"}
                    </span>
                  </div>
                </div>

                {/* Bottom Row: Upcoming Assignment + Focus Streak */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                      Upcoming Assignment
                    </div>
                    <div className="text-xs font-bold text-slate-800 mt-1 truncate">
                      DBMS Schema Project
                    </div>
                    <div className="text-[10px] text-rose-500 font-semibold mt-0.5">
                      Due Tomorrow, 11:59 PM
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                      Focus Streak
                    </div>
                    <div className="text-xs font-bold text-slate-800 mt-1 flex items-center gap-1">
                      <span>12 consecutive days</span>
                      <Flame className="w-3 h-3 text-amber-500 fill-amber-500" />
                    </div>
                    <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                      Top 5% of your class
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SECTION 7: TRUST / SOCIAL PROOF BAR */}
        <div className="mt-16 pt-10 border-t border-slate-200/70">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            Designed for students who want to stay ahead
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
            <div className="text-center pt-3 md:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                10K+
              </div>
              <div className="text-xs font-medium text-slate-500 mt-1">
                Study Sessions
              </div>
            </div>

            <div className="text-center pt-3 md:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                5K+
              </div>
              <div className="text-xs font-medium text-slate-500 mt-1">
                Active Students
              </div>
            </div>

            <div className="text-center pt-3 md:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#635BFF]">
                95%
              </div>
              <div className="text-xs font-medium text-slate-500 mt-1">
                Weekly Goal Completion
              </div>
            </div>

            <div className="text-center pt-3 md:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] flex items-center justify-center gap-1">
                <span>4.9/5</span>
                <span className="text-amber-500 text-lg">★</span>
              </div>
              <div className="text-xs font-medium text-slate-500 mt-1">
                Student Rating
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <span className="text-[11px] text-slate-400 font-normal">
              * Design mockup metrics for product showcase demonstration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
