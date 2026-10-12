"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "StudySync helped me finally stop procrastinating. I know exactly what I need to study every day.",
      name: "Aarav Sharma",
      role: "B.Tech Student",
      university: "IIT Delhi",
      initials: "AS",
      color: "bg-indigo-500",
      highlight: "Stopped Procrastinating",
    },
    {
      quote:
        "The AI planner is the feature I use the most. It turns my messy exam preparation into an actual plan.",
      name: "Priya Mehta",
      role: "Computer Science Student",
      university: "BITS Pilani",
      initials: "PM",
      color: "bg-cyan-500",
      highlight: "Exam Preparation",
    },
    {
      quote:
        "I love having tasks, notes and progress tracking in one place.",
      name: "Rohan Verma",
      role: "Engineering Student",
      university: "Manipal University",
      initials: "RV",
      color: "bg-emerald-500",
      highlight: "All-in-One Space",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#635BFF]/10 text-[#635BFF] text-xs font-bold uppercase tracking-wider mb-3">
            STUDENT STORIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Students are building better study habits.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B]">
            From engineering majors to pre-med students, here is how learners stay on track with StudySync.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Stars & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-200/60 text-slate-700">
                    {item.highlight}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-4 border-t border-slate-200/70 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${item.color} text-white flex items-center justify-center font-bold text-sm shadow-sm ring-2 ring-white`}
                >
                  {item.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                  </div>
                  <div className="text-xs text-slate-500">
                    {item.role} • {item.university}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fictional demo notice */}
        <div className="mt-12 text-center">
          <span className="text-[11px] text-slate-400">
            * Fictional demo testimonials created for website concept demonstration
          </span>
        </div>
      </div>
    </section>
  );
}
