"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Cpu, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: Target,
      title: "Set Your Goals",
      description: "Add your subjects, deadlines and academic goals.",
      detail: "Input syllabus modules, upcoming exams, and free study blocks.",
      badge: "Step 1: Input",
    },
    {
      step: "02",
      icon: Cpu,
      title: "Let AI Build Your Plan",
      description: "StudySync creates a personalized schedule around your available time.",
      detail: "Smart load balancing adjusts for difficult topics & active revision.",
      badge: "Step 2: Generate",
    },
    {
      step: "03",
      icon: TrendingUp,
      title: "Track Your Progress",
      description: "Complete tasks, maintain your streak and improve your study habits.",
      detail: "Earn focus streak days, visualize masteries, and crush exams.",
      badge: "Step 3: Excel",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#635BFF]/10 text-[#635BFF] text-xs font-bold uppercase tracking-wider mb-3">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Your smarter study workflow.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B]">
            Three intuitive steps between feeling behind and mastering your entire coursework.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-16 left-24 right-24 h-0.5 bg-gradient-to-r from-[#635BFF]/30 via-[#635BFF] to-[#06B6D4]/30 -z-0" />

          {/* 3 Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Number Circle with Glow & Icon */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-white border-2 border-[#635BFF] shadow-lg shadow-[#635BFF]/15 flex flex-col items-center justify-center group-hover:scale-105 group-hover:bg-[#635BFF] transition-all duration-300">
                      <span className="text-xs font-black text-[#635BFF] group-hover:text-white/80 transition-colors">
                        STEP
                      </span>
                      <span className="text-xl font-extrabold text-[#0F172A] group-hover:text-white transition-colors">
                        {item.step}
                      </span>
                    </div>

                    {/* Floating mini icon badge */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-[#4F46E5] text-white flex items-center justify-center shadow-md">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Step Content Card */}
                  <div className="w-full bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm group-hover:shadow-md group-hover:border-slate-300 transition-all text-left">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#635BFF]">
                        {item.badge}
                      </span>
                      <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#635BFF] transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-[#0F172A] font-medium leading-relaxed">
                      {item.description}
                    </p>

                    <p className="mt-2 text-xs text-[#64748B] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Workflow Summary Pill */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600">
            <span className="font-semibold text-slate-800">Average student setup time:</span>
            <span className="text-[#635BFF] font-bold">under 3 minutes</span>
            <span>•</span>
            <span>Seamless calendar & syllabus sync</span>
          </div>
        </div>
      </div>
    </section>
  );
}
