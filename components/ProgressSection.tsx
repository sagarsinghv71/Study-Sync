"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flame, Target, CheckCircle2, TrendingUp, Calendar, Clock } from "lucide-react";

export default function ProgressSection() {
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  const daysData = [
    { day: "Mon", full: "Monday", hours: 2.5, percent: 48 },
    { day: "Tue", full: "Tuesday", hours: 3.2, percent: 61 },
    { day: "Wed", full: "Wednesday", hours: 4.1, percent: 79 },
    { day: "Thu", full: "Thursday", hours: 2.8, percent: 54 },
    { day: "Fri", full: "Friday", hours: 4.5, percent: 86 },
    { day: "Sat", full: "Saturday", hours: 5.2, percent: 100 },
    { day: "Sun", full: "Sunday", hours: 3.8, percent: 73 },
  ];

  const totalHours = daysData.reduce((acc, curr) => acc + curr.hours, 0).toFixed(1);

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#635BFF]/10 text-[#635BFF] text-xs font-bold uppercase tracking-wider mb-3">
            STUDY ANALYTICS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            See your progress. Build momentum.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B]">
            Consistency is built on clear feedback. Watch your daily study habits compound into extraordinary exam results.
          </p>
        </div>

        {/* Analytics UI Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Chart Card (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50"
          >
            {/* Chart Title & Stat Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Weekly Study Hours
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-1 flex items-center gap-2">
                  <span>{totalHours} hrs</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                    +18% vs last week
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="w-3 h-3 rounded-full bg-[#635BFF] inline-block" />
                <span>Focused Study Time</span>
              </div>
            </div>

            {/* Interactive Bar Chart Visualization */}
            <div className="pt-8 pb-4">
              <div className="h-56 sm:h-64 flex items-end justify-between gap-2 sm:gap-4 px-2">
                {daysData.map((item, index) => {
                  const isHovered = hoveredDay === index;
                  return (
                    <div
                      key={item.day}
                      onMouseEnter={() => setHoveredDay(index)}
                      onMouseLeave={() => setHoveredDay(null)}
                      className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer relative"
                    >
                      {/* Tooltip on Hover */}
                      {isHovered && (
                        <div className="absolute -top-12 z-20 bg-slate-900 text-white px-2.5 py-1 rounded-lg text-xs font-bold shadow-lg pointer-events-none whitespace-nowrap">
                          {item.full}: {item.hours}h
                        </div>
                      )}

                      {/* Bar Track */}
                      <div className="w-full max-w-[48px] bg-slate-100 rounded-t-xl h-full flex items-end overflow-hidden p-0.5">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${item.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                          className={`w-full rounded-t-lg transition-colors ${
                            isHovered
                              ? "bg-[#4F46E5]"
                              : item.hours >= 4.5
                              ? "bg-gradient-to-t from-[#635BFF] to-[#06B6D4]"
                              : "bg-[#635BFF]"
                          }`}
                        />
                      </div>

                      {/* Day Label */}
                      <span className="mt-3 text-xs font-bold text-slate-600 group-hover:text-[#635BFF] transition-colors">
                        {item.day}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {item.hours}h
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Chart Footer Insight */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500">
              <span>Peak Day: Saturday (5.2 hours)</span>
              <span className="text-[#635BFF] font-semibold">Average 3.7h / day</span>
            </div>
          </motion.div>

          {/* Metric Cards (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Card 1: Study Streak */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Study Streak
                </span>
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Flame className="w-5 h-5 fill-amber-500" />
                </div>
              </div>

              <div className="text-3xl font-extrabold text-[#0F172A] flex items-center gap-2">
                <span>12 days</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700">
                  🔥 Active
                </span>
              </div>

              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                You&apos;ve completed all assigned study tasks for 12 consecutive days.
              </p>
            </motion.div>

            {/* Card 2: Weekly Goal */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Weekly Goal
                </span>
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-[#635BFF] flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
              </div>

              <div className="text-3xl font-extrabold text-[#635BFF] flex items-center gap-2">
                <span>84%</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
                  Ahead
                </span>
              </div>

              <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
                <div className="bg-gradient-to-r from-[#635BFF] to-[#06B6D4] h-full rounded-full w-[84%]" />
              </div>

              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                21 out of 25 planned study hours completed this week.
              </p>
            </motion.div>

            {/* Card 3: Tasks Completed */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Tasks Completed
                </span>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>

              <div className="text-3xl font-extrabold text-[#0F172A] flex items-center gap-2">
                <span>42</span>
                <span className="text-xs font-bold text-slate-500">Tasks</span>
              </div>

              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                Assignments, quiz revisions, and textbook modules checked off.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
