"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AISection from "@/components/AISection";
import DashboardPreview from "@/components/DashboardPreview";
import ProgressSection from "@/components/ProgressSection";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";

export default function Home() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");
  const [selectedPlan, setSelectedPlan] = useState("Free Student");

  const handleOpenAuth = (mode: "login" | "signup" = "signup", plan: string = "Free Student") => {
    setAuthMode(mode);
    setSelectedPlan(plan);
    setAuthModalOpen(true);
  };

  const handleCloseAuth = () => {
    setAuthModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      {/* Sticky Top Navbar */}
      <Navbar onOpenAuth={handleOpenAuth} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 6 & 7: Hero & Trust Proof Bar */}
        <Hero onOpenAuth={handleOpenAuth} />

        {/* Section 8: Problem / About Section */}
        <Problem />

        {/* Section 9: Features Grid */}
        <Features />

        {/* Section 10: How It Works */}
        <HowItWorks />

        {/* Section 11: AI Tools Section */}
        <AISection />

        {/* Section 12: Dashboard Showcase */}
        <DashboardPreview />

        {/* Section 13: Progress & Analytics Section */}
        <ProgressSection />

        {/* Section 14: Testimonials */}
        <Testimonials />

        {/* Section 15: Pricing */}
        <Pricing onOpenAuth={handleOpenAuth} />

        {/* Section 16: FAQ Accordion */}
        <FAQ />

        {/* Section 17: Final CTA */}
        <CTA onOpenAuth={handleOpenAuth} />

        {/* Section 18: Contact Section */}
        <Contact />
      </main>

      {/* Section 19: Footer */}
      <Footer />

      {/* Global Interactive Auth / Onboarding Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={handleCloseAuth}
        initialMode={authMode}
        planName={selectedPlan}
      />
    </div>
  );
}
