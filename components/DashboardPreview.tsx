"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  CheckSquare,
  CalendarDays,
  FileText,
  Sparkles,
  BarChart2,
  Settings,
  Clock,
  CheckCircle2,
  AlertCircle,
  Flame,
  ChevronRight,
  Search,
  Bell,
  MoreVertical,
} from "lucide-react";
import StudySyncLogo from "./StudySyncLogo";

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [scheduleStatus, setScheduleStatus] = useState<{ [key: string]: string }>({
    dsa: "Completed",
    dbms: "In Progress",
    cn: "Upcoming",
    rev: "Scheduled",
  });

  const sidebarItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "My Tasks", icon: CheckSquare },
    { name: "Study Planner", icon: CalendarDays },
    { name: "Notes", icon: FileText },
    { name: "AI Tools", icon: Sparkles },
    { name: "Progress", icon: BarChart2 },
    { name: "Settings", icon: Settings },
  ];

  return (
    <section id="dashboard" className="py-20 sm:py-28 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#635BFF]/10 text-[#635BFF] text-xs font-bold uppercase tracking-wider mb-3">
            PRODUCT SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Everything organized in one dashboard.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B]">
            Say goodbye to 15 different browser tabs and disorganized sticky notes. Here is your unified command center.
          </p>
        </div>

        {/* Dashboard Mockup Shell */}
        <div className="rounded-3xl border border-slate-300 shadow-2xl shadow-slate-300/60 overflow-hidden bg-slate-900">
          {/* Top Window Bar */}
          <div className="px-5 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              <span className="text-xs text-slate-400 font-mono ml-2">StudySync App v2.4 (Student Edition)</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="hidden sm:inline">Active Term: Fall Semester 2026</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
          </div>

          {/* Interior App UI */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] bg-[#F8FAFC]">
            {/* SIDEBAR (Desktop) */}
            <div className="hidden lg:flex lg:col-span-3 bg-white border-r border-slate-200/90 flex-col justify-between p-5">
              <div>
                {/* Logo & Student Info */}
                <div className="mb-6 pb-5 border-b border-slate-100">
                  <StudySyncLogo size="sm" />
                  <div className="mt-4 flex items-center gap-3 p-2 rounded-xl bg-slate-50 border border-slate-200/60">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#635BFF] to-[#06B6D4] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                      AR
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs font-bold text-slate-900 truncate">Alex Rivera</div>
                      <div className="text-[11px] text-slate-500 truncate">CS Major • Year 3</div>
                    </div>
                  </div>
                </div>

                {/* Sidebar Nav Items */}
                <nav className="space-y-1">
                  {sidebarItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.name;
                    return (
                      <button
                        key={item.name}
                        onClick={() => setActiveTab(item.name)}
                        className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all text-left cursor-pointer ${
                          isActive
                            ? "bg-[#635BFF] text-white shadow-sm shadow-[#635BFF]/30"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Storage / Pro Badge */}
              <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#635BFF]/10 to-[#06B6D4]/10 border border-[#635BFF]/20 text-xs text-slate-700">
                <div className="font-bold text-[#635BFF] flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Pro Exam Mode</span>
                </div>
                <div className="text-[11px] text-slate-600">
                  4 AI Study Sessions remaining today
                </div>
              </div>
            </div>

            {/* MAIN DASHBOARD CONTENT */}
            <div className="lg:col-span-9 p-5 sm:p-7 flex flex-col justify-between">
              <div>
                {/* Greeting Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200/80">
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#0F172A] tracking-tight flex items-center gap-2">
                      <span>Good morning, Alex</span>
                      <span className="inline-block animate-wave">👋</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Here&apos;s your study plan for today.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="Search subjects or notes..."
                        className="pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none"
                        readOnly
                      />
                    </div>
                    <button className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-slate-800">
                      <Bell className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* 4 Quick Stat Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 my-6">
                  {/* Today's Progress */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                    <span className="text-[11px] font-semibold text-slate-500">
                      Today&apos;s Progress
                    </span>
                    <div className="text-2xl font-extrabold text-[#635BFF] mt-1">
                      72%
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2.5 overflow-hidden">
                      <div className="bg-[#635BFF] h-full rounded-full w-[72%]" />
                    </div>
                  </div>

                  {/* Study Streak */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                    <span className="text-[11px] font-semibold text-slate-500">
                      Study Streak
                    </span>
                    <div className="text-2xl font-extrabold text-amber-500 mt-1 flex items-center gap-1">
                      <span>12 days</span>
                      <Flame className="w-5 h-5 fill-amber-500" />
                    </div>
                    <span className="text-[10px] text-emerald-600 font-semibold block mt-2">
                      Personal record!
                    </span>
                  </div>

                  {/* Completed Tasks */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                    <span className="text-[11px] font-semibold text-slate-500">
                      Tasks Completed
                    </span>
                    <div className="text-2xl font-extrabold text-[#0F172A] mt-1">
                      8 / 11
                    </div>
                    <span className="text-[10px] text-slate-500 block mt-2">
                      3 left for today
                    </span>
                  </div>

                  {/* Focus Time */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                    <span className="text-[11px] font-semibold text-slate-500">
                      Focus Time
                    </span>
                    <div className="text-2xl font-extrabold text-[#06B6D4] mt-1">
                      3h 45m
                    </div>
                    <span className="text-[10px] text-emerald-600 font-semibold block mt-2">
                      +45m vs target
                    </span>
                  </div>
                </div>

                {/* Middle Grid: Study Schedule (Left) + Right Panel (Right) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                  {/* Study Schedule (8 cols) */}
                  <div className="md:col-span-7 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-bold text-[#0F172A]">Study Schedule</h4>
                      <span className="text-xs text-slate-500 font-medium">4 Sessions Planned</span>
                    </div>

                    <div className="space-y-2.5">
                      {/* 09:00 — Data Structures */}
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-slate-400 font-mono">09:00</span>
                          <div>
                            <div className="text-xs sm:text-sm font-bold text-slate-800 line-through">
                              Data Structures & Algorithms
                            </div>
                            <div className="text-[10px] text-slate-500">Binary Tree Traversals</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                          Completed
                        </span>
                      </div>

                      {/* 11:00 — DBMS */}
                      <div className="p-3 rounded-xl bg-indigo-50/50 border border-indigo-200 flex items-center justify-between ring-1 ring-indigo-500/10">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-[#635BFF] font-mono">11:00</span>
                          <div>
                            <div className="text-xs sm:text-sm font-bold text-slate-900">
                              Database Management Systems
                            </div>
                            <div className="text-[10px] text-indigo-600 font-medium">Relational Algebra & SQL</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-[#635BFF]">
                          In Progress
                        </span>
                      </div>

                      {/* 14:00 — Computer Networks */}
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-slate-500 font-mono">14:00</span>
                          <div>
                            <div className="text-xs sm:text-sm font-bold text-slate-800">
                              Computer Networks
                            </div>
                            <div className="text-[10px] text-slate-500">Subnetting & Routing</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                          Upcoming
                        </span>
                      </div>

                      {/* 17:00 — Revision */}
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-slate-500 font-mono">17:00</span>
                          <div>
                            <div className="text-xs sm:text-sm font-bold text-slate-800">
                              Revision & Practice Problems
                            </div>
                            <div className="text-[10px] text-slate-500">Flashcards & Quiz</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                          Scheduled
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Panel (5 cols) */}
                  <div className="md:col-span-5 space-y-4">
                    {/* Upcoming Assignment Card */}
                    <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 bg-rose-50 px-2 py-0.5 rounded">
                          High Priority
                        </span>
                        <AlertCircle className="w-4 h-4 text-rose-500" />
                      </div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase">Upcoming Assignment</h4>
                      <p className="text-sm font-bold text-slate-900 mt-1">
                        DBMS Schema Design
                      </p>
                      <div className="mt-2 text-xs text-rose-600 font-semibold flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Due tomorrow, 11:59 PM</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-2">
                        Includes ER diagram submission and SQL table creation scripts.
                      </p>
                    </div>

                    {/* Quick Pomodoro Widget */}
                    <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-4.5 rounded-2xl shadow-sm">
                      <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
                        <span>Current Focus Session</span>
                        <span className="text-amber-400 font-bold">● Pomodoro</span>
                      </div>
                      <div className="text-2xl font-mono font-bold tracking-widest text-center py-1">
                        23:45
                      </div>
                      <div className="text-center text-[10px] text-slate-400">
                        Topic: Normal Forms (3NF / BCNF)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Dashboard status indicator */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                <span>Last auto-sync: 2 mins ago</span>
                <span className="text-[#635BFF] font-semibold">StudySync Student Dashboard Mockup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
