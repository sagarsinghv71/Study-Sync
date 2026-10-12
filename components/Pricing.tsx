"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";

interface PricingProps {
  onOpenAuth: (mode?: "login" | "signup", plan?: string) => void;
}

export default function Pricing({ onOpenAuth }: PricingProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "FREE",
      tagline: "Essential study tracking for casual organizing.",
      priceMonthly: "₹0",
      priceYearly: "₹0",
      period: "/month",
      badge: "Forever Free",
      isPopular: false,
      features: [
        "Basic task management",
        "Study planner",
        "Focus timer",
        "Basic progress tracking",
      ],
      buttonText: "Start Free",
      buttonStyle: "bg-white text-slate-800 hover:bg-slate-50 border border-slate-200",
    },
    {
      name: "PRO",
      tagline: "The complete AI engine for ambitious college students.",
      priceMonthly: "₹199",
      priceYearly: "₹159",
      period: "/month",
      badge: "Most Popular",
      isPopular: true,
      features: [
        "AI Study Planner",
        "Unlimited notes",
        "AI Quiz Generator",
        "Advanced analytics",
        "Custom study plans",
      ],
      buttonText: "Start Pro",
      buttonStyle: "bg-[#635BFF] text-white hover:bg-[#5248F5] shadow-lg shadow-[#635BFF]/30",
    },
    {
      name: "STUDENT+",
      tagline: "Ultimate academic acceleration for intense semesters.",
      priceMonthly: "₹399",
      priceYearly: "₹319",
      period: "/month",
      badge: "Max Performance",
      isPopular: false,
      features: [
        "Everything in Pro",
        "Advanced AI tools",
        "Exam preparation mode",
        "Priority support",
        "Advanced insights",
      ],
      buttonText: "Choose Student+",
      buttonStyle: "bg-slate-900 text-white hover:bg-slate-800 shadow-md",
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#635BFF]/10 text-[#635BFF] text-xs font-bold uppercase tracking-wider mb-3">
            TRANSPARENT PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Simple plans for every student.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B]">
            Start free without a credit card. Upgrade whenever you need advanced AI exam simulation.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                !isAnnual
                  ? "bg-[#635BFF] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                isAnnual
                  ? "bg-[#635BFF] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Annual billing</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, idx) => {
            const currentPrice = isAnnual ? plan.priceYearly : plan.priceMonthly;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`relative rounded-3xl bg-white p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular
                    ? "border-2 border-[#635BFF] shadow-xl shadow-[#635BFF]/10 scale-100 md:scale-105 z-10"
                    : "border border-slate-200/90 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Popular Ribbon */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#635BFF] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-md shadow-[#635BFF]/30">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-extrabold text-[#0F172A]">{plan.name}</h3>
                    {!plan.isPopular && (
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#64748B] min-h-[32px]">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-6 mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-[#0F172A]">
                        {currentPrice}
                      </span>
                      <span className="text-sm font-semibold text-slate-500">
                        {plan.period}
                      </span>
                    </div>
                    {isAnnual && plan.name !== "FREE" && (
                      <div className="text-xs text-emerald-600 font-semibold mt-1">
                        Billed annually (billed ₹{parseInt(currentPrice.slice(1)) * 12}/yr)
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Included with {plan.name}:
                    </span>
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onOpenAuth("signup", plan.name)}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer group active:scale-95 ${plan.buttonStyle}`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing Guarantee footnote */}
        <div className="mt-12 text-center text-xs text-slate-400">
          <p>
            * All prices shown are for demonstration mockup purposes. 14-day risk-free trial on all paid tiers.
          </p>
        </div>
      </div>
    </section>
  );
}
