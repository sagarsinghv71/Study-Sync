"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Book,
  GraduationCap,
  CheckCircle2,
  Sparkles,
  Clock,
  ArrowRight,
} from "lucide-react";

interface CTAProps {
  onOpenAuth: (mode?: "login" | "signup", plan?: string) => void;
}

export default function CTA({ onOpenAuth }: CTAProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#635BFF] via-[#5248F5] to-[#4F46E5] text-white p-8 sm:p-14 lg:p-16 shadow-2xl shadow-[#635BFF]/30 overflow-hidden text-center">
          {/* Subtle interior lighting */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-white/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#06B6D4]/30 rounded-full blur-2xl pointer-events-none" />

          {/* FLOATING EDUCATIONAL ICONS */}
          {/* 1. Book (top-left) */}
          <div className="hidden md:flex absolute top-10 left-12 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 animate-float-slow">
            <Book className="w-6 h-6 text-cyan-200" />
          </div>

          {/* 2. Graduation Cap (top-right) */}
          <div className="hidden md:flex absolute top-12 right-16 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 animate-float-delayed">
            <GraduationCap className="w-7 h-7 text-yellow-300" />
          </div>

          {/* 3. Check Mark (bottom-left) */}
          <div className="hidden md:flex absolute bottom-12 left-20 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 animate-float-delayed">
            <CheckCircle2 className="w-6 h-6 text-emerald-300" />
          </div>

          {/* 4. Sparkles (bottom-right) */}
          <div className="hidden md:flex absolute bottom-10 right-20 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 animate-float-slow">
            <Sparkles className="w-6 h-6 text-amber-200" />
          </div>

          {/* 5. Clock (center-right offset) */}
          <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-8 p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 animate-float-delayed">
            <Clock className="w-5 h-5 text-indigo-200" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Start Your Free Semester Prep
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to take control of your studies?
            </h2>

            <p className="text-base sm:text-lg text-indigo-100 max-w-xl mx-auto font-medium">
              Plan smarter, stay consistent and make every study session count.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenAuth("signup")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-[#635BFF] bg-white hover:bg-slate-50 transition-all shadow-lg shadow-black/10 hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Start Studying Free →</span>
              </button>

              <a
                href="#features"
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-white bg-white/15 hover:bg-white/20 border border-white/20 transition-all text-center backdrop-blur-md"
              >
                Explore Features
              </a>
            </div>

            <div className="pt-2 text-xs text-indigo-200 font-medium">
              Free forever for basic study planning • No credit card required
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
