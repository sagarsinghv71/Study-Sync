"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  CheckCircle2,
  BarChart3,
  Timer,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      id: "ai-planner",
      icon: Sparkles,
      title: "AI Study Planner",
      description:
        "Generate personalized study schedules based on your subjects, deadlines and available time.",
      tag: "Intelligent",
      color: "text-[#635BFF]",
      bg: "bg-[#635BFF]/10",
      borderHover: "hover:border-[#635BFF]/50",
    },
    {
      id: "smart-notes",
      icon: BookOpen,
      title: "Smart Notes",
      description:
        "Organize your notes and quickly find the information you need.",
      tag: "Markdown & LaTeX",
      color: "text-[#06B6D4]",
      bg: "bg-[#06B6D4]/10",
      borderHover: "hover:border-[#06B6D4]/50",
    },
    {
      id: "task-manager",
      icon: CheckCircle2,
      title: "Task Manager",
      description:
        "Manage assignments, projects and deadlines from one organized workspace.",
      tag: "Prioritized",
      color: "text-[#22C55E]",
      bg: "bg-[#22C55E]/10",
      borderHover: "hover:border-[#22C55E]/50",
    },
    {
      id: "progress-tracking",
      icon: BarChart3,
      title: "Progress Tracking",
      description:
        "Visualize your study progress and understand where you're improving.",
      tag: "Analytics",
      color: "text-[#4F46E5]",
      bg: "bg-[#4F46E5]/10",
      borderHover: "hover:border-[#4F46E5]/50",
    },
    {
      id: "focus-timer",
      icon: Timer,
      title: "Focus Timer",
      description:
        "Use focused study sessions to reduce distractions and build consistency.",
      tag: "Pomodoro & Flow",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      borderHover: "hover:border-amber-500/50",
    },
    {
      id: "quiz-generator",
      icon: HelpCircle,
      title: "AI Quiz Generator",
      description:
        "Turn your notes into practice questions and quizzes.",
      tag: "Spaced Repetition",
      color: "text-purple-600",
      bg: "bg-purple-600/10",
      borderHover: "hover:border-purple-600/50",
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#635BFF]/10 text-[#635BFF] text-xs font-bold uppercase tracking-wider mb-3">
            POWERFUL FEATURES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Everything you need to stay on track.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B]">
            Engineered from ground up to turn academic chaos into structured, stress-free productivity.
          </p>
        </div>

        {/* 6 Feature Cards Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className={`group relative p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${feature.borderHover}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform duration-200`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#635BFF] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-[#64748B] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-[#635BFF] transition-colors">
                  <span>Explore capability</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
