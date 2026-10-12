"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import StudySyncLogo from "./StudySyncLogo";

interface NavbarProps {
  onOpenAuth: (mode?: "login" | "signup", plan?: string) => void;
}

export default function Navbar({ onOpenAuth }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "AI Tools", href: "#ai-tools" },
    { name: "Dashboard", href: "#dashboard" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-[#F8FAFC]/80 backdrop-blur-sm border-b border-slate-200/40 py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LEFT: Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group transition-transform active:scale-95"
            aria-label="StudySync Home"
          >
            <StudySyncLogo size="md" />
          </a>

          {/* CENTER: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-[#635BFF] hover:bg-[#635BFF]/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT: Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenAuth("login")}
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 rounded-xl transition-all cursor-pointer"
            >
              Log In
            </button>
            <button
              onClick={() => onOpenAuth("signup")}
              className="inline-flex items-center gap-1.5 px-4.5 py-2 text-sm font-semibold text-white bg-[#635BFF] hover:bg-[#5248F5] rounded-xl transition-all shadow-sm shadow-[#635BFF]/25 hover:shadow-md hover:shadow-[#635BFF]/35 active:scale-95 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 text-slate-700 hover:text-[#635BFF] hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:text-[#635BFF] hover:bg-slate-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth("login");
                  }}
                  className="w-full py-2.5 px-4 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors text-center cursor-pointer"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth("signup");
                  }}
                  className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-[#635BFF] hover:bg-[#5248F5] rounded-xl shadow-sm text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
