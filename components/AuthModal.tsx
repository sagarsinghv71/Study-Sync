"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Sparkles, GraduationCap, Lock, Mail, User, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import StudySyncLogo from "./StudySyncLogo";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "login" | "signup";
  planName?: string;
}

export default function AuthModal({
  isOpen,
  onClose,
  initialMode = "signup",
  planName = "Free Student",
}: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [university, setUniversity] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    setMode(initialMode);
    setSubmitted(false);
    setErrors({});
  }, [initialMode, isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (mode === "signup" && !name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (!email.trim() || !email.includes("@")) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!password || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Welcome to StudySync!
                  </h3>
                  <p className="text-sm text-slate-600 mt-2">
                    {mode === "signup"
                      ? `Your ${planName} account has been initialized. Alex's demo dashboard is fully unlocked.`
                      : "Welcome back! Redirecting you to your personalized study space."}
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 text-left text-xs space-y-2 text-slate-600">
                  <div className="flex items-center justify-between font-semibold text-slate-800">
                    <span>⚡ Demo Student Mode</span>
                    <span className="text-[#635BFF]">Active</span>
                  </div>
                  <p>
                    All dashboard features, AI study plan generation, and task schedules are interactive below.
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="w-full py-3 px-4 rounded-xl font-semibold text-white bg-[#635BFF] hover:bg-[#5248F5] transition-all shadow-md shadow-[#635BFF]/25 cursor-pointer"
                >
                  Explore Dashboard Now
                </button>
              </div>
            ) : (
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <StudySyncLogo size="sm" />
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#635BFF]/10 text-[#635BFF]">
                    {planName}
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex rounded-xl bg-slate-100 p-1 mb-6 text-sm font-medium">
                  <button
                    type="button"
                    onClick={() => {
                      setMode("signup");
                      setErrors({});
                    }}
                    className={`flex-1 py-2 rounded-lg text-center transition-all ${
                      mode === "signup"
                        ? "bg-white text-slate-900 font-semibold shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Create Account
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMode("login");
                      setErrors({});
                    }}
                    className={`flex-1 py-2 rounded-lg text-center transition-all ${
                      mode === "login"
                        ? "bg-white text-slate-900 font-semibold shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Log In
                  </button>
                </div>

                <div className="mb-5">
                  <h3 className="text-xl font-bold text-slate-900">
                    {mode === "signup"
                      ? "Start studying smarter today"
                      : "Welcome back to StudySync"}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {mode === "signup"
                      ? "Join 5,000+ students organizing their academic journey."
                      : "Enter your credentials to access your daily study schedule."}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {mode === "signup" && (
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Alex Rivera"
                          className={`w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#635BFF]/40 focus:bg-white transition-all ${
                            errors.name ? "border-rose-500" : "border-slate-200"
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-xs text-rose-500 mt-1">{errors.name}</p>
                      )}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Student / University Email
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@university.edu"
                        className={`w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#635BFF]/40 focus:bg-white transition-all ${
                          errors.email ? "border-rose-500" : "border-slate-200"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-rose-500 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {mode === "signup" && (
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Major or College (Optional)
                      </label>
                      <div className="relative">
                        <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                        <input
                          type="text"
                          value={university}
                          onChange={(e) => setUniversity(e.target.value)}
                          placeholder="Computer Science, 3rd Year"
                          className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#635BFF]/40 focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className={`w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#635BFF]/40 focus:bg-white transition-all ${
                          errors.password ? "border-rose-500" : "border-slate-200"
                        }`}
                      />
                    </div>
                    {errors.password && (
                      <p className="text-xs text-rose-500 mt-1">{errors.password}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 px-4 rounded-xl font-semibold text-white bg-[#635BFF] hover:bg-[#5248F5] transition-all shadow-md shadow-[#635BFF]/25 flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>{mode === "signup" ? "Create Free Account" : "Sign In"}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <div className="text-center pt-2">
                    <span className="text-[11px] text-slate-400">
                      ⚡ Demo mode enabled • No credit card required
                    </span>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
