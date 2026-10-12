"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Compass, TrendingDown, ArrowDown, Sparkles } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: Layers,
      title: "Too Many Tasks",
      description:
        "Assignments, projects and exams are scattered across different tools.",
      accent: "from-rose-500/10 to-transparent",
      iconColor: "text-rose-600 bg-rose-50",
      badge: "Disorganized",
    },
    {
      icon: Compass,
      title: "No Clear Plan",
      description:
        "You know what you need to study, but don't know where to start.",
      accent: "from-amber-500/10 to-transparent",
      iconColor: "text-amber-600 bg-amber-50",
      badge: "Overwhelmed",
    },
    {
      icon: TrendingDown,
      title: "Losing Consistency",
      description:
        "Motivation is easy to find. Consistency is harder.",
      accent: "from-indigo-500/10 to-transparent",
      iconColor: "text-indigo-600 bg-indigo-50",
      badge: "Burnout",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            The Student Dilemma
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Studying shouldn&apos;t feel overwhelming.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B]">
            Between lectures, assignments, exams and personal goals, students
            often struggle to organize everything.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconColor} shadow-sm`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-200/60 text-slate-600">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#635BFF] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
                  {item.description}
                </p>

                {/* Subtle indicator bottom bar */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs text-slate-400 group-hover:text-slate-600 transition-colors">
                  <span>Problem 0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transition into StudySync */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 max-w-xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#635BFF]/10 text-[#635BFF] mb-3">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#635BFF]/5 via-[#4F46E5]/10 to-[#06B6D4]/5 border border-[#635BFF]/20 shadow-sm">
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#635BFF]">
              <Sparkles className="w-4 h-4" />
              <span>The Solution</span>
            </div>
            <p className="mt-2 text-xl sm:text-2xl font-extrabold text-[#0F172A]">
              StudySync brings everything together.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              One smart workspace that replaces chaotic note apps, scattered calendars, and disjointed to-do lists.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
