"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle2,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";
import {
  LinkedInIcon,
  InstagramIcon,
  TwitterIcon,
  GithubIcon,
} from "./SocialIcons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Please enter a subject";
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch {
        // safe fallback
      }
    }, 800);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSuccess(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Info & Demo Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#635BFF]/10 text-[#635BFF] text-xs font-bold uppercase tracking-wider mb-3">
                <MessageSquare className="w-3.5 h-3.5" />
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                Have a question?
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#64748B]">
                We&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact Details Card */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#635BFF] shadow-sm flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Direct Email
                  </div>
                  <a
                    href="mailto:hello@studysync.app"
                    className="text-base font-bold text-slate-900 hover:text-[#635BFF] transition-colors"
                  >
                    hello@studysync.app
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    For inquiries, syllabus feedback & student discounts
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-200/60">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Connect With Us
                </div>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:shadow-sm flex items-center justify-center transition-all"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:shadow-sm flex items-center justify-center transition-all"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter / X"
                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-black hover:border-black/40 hover:shadow-sm flex items-center justify-center transition-all"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-400 hover:shadow-sm flex items-center justify-center transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-400">
              * Note: These are fictional demo contact details created for the StudySync student showcase platform.
            </div>
          </div>

          {/* RIGHT: Interactive Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-[#64748B] max-w-md mx-auto">
                    Thank you for reaching out, <strong className="text-slate-800">{formData.name}</strong>. Our student support team will reply to <span className="text-[#635BFF]">{formData.email}</span> shortly.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl font-semibold text-sm bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all cursor-pointer shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Alex Rivera"
                        className={`w-full px-4 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#635BFF]/40 transition-all ${
                          errors.name ? "border-rose-500" : "border-slate-200"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-500 mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@university.edu"
                        className={`w-full px-4 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#635BFF]/40 transition-all ${
                          errors.email ? "border-rose-500" : "border-slate-200"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-500 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Question regarding AI Study Planner & Syllabus Sync"
                      className={`w-full px-4 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#635BFF]/40 transition-all ${
                        errors.subject ? "border-rose-500" : "border-slate-200"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-rose-500 mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us what you need help with..."
                      className={`w-full px-4 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#635BFF]/40 transition-all resize-none ${
                        errors.message ? "border-rose-500" : "border-slate-200"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-[#635BFF] hover:bg-[#5248F5] disabled:opacity-75 transition-all shadow-md shadow-[#635BFF]/25 flex items-center justify-center gap-2 cursor-pointer group active:scale-95"
                    >
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
