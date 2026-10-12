"use client";

import React from "react";
import StudySyncLogo from "./StudySyncLogo";
import {
  LinkedInIcon,
  InstagramIcon,
  TwitterIcon,
  GithubIcon,
} from "./SocialIcons";

export default function Footer() {
  const currentYear = 2026;

  const productLinks = [
    { name: "Features", href: "#features" },
    { name: "AI Planner", href: "#ai-tools" },
    { name: "Notes", href: "#features" },
    { name: "Progress", href: "#dashboard" },
    { name: "Pricing", href: "#pricing" },
  ];

  const resourceLinks = [
    { name: "Study Tips", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Help Center", href: "#faq" },
    { name: "FAQ", href: "#faq" },
  ];

  const companyLinks = [
    { name: "About", href: "#how-it-works" },
    { name: "Contact", href: "#contact" },
    { name: "Careers", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="bg-white border-t border-slate-200/90 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-100">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block" aria-label="StudySync Home">
              <StudySyncLogo size="md" />
            </a>
            <p className="text-sm text-[#64748B] max-w-sm leading-relaxed">
              AI-powered productivity for students. Plan smarter, organize tasks, take structured notes, and build daily consistency.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#635BFF]/10 text-slate-600 hover:text-[#635BFF] flex items-center justify-center transition-colors"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#635BFF]/10 text-slate-600 hover:text-[#635BFF] flex items-center justify-center transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#635BFF]/10 text-slate-600 hover:text-[#635BFF] flex items-center justify-center transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#635BFF]/10 text-slate-600 hover:text-[#635BFF] flex items-center justify-center transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-[#635BFF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-[#635BFF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-[#635BFF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} StudySync. All rights reserved.
          </div>
          <div className="flex items-center gap-1 font-medium text-slate-600">
            <span>Built for students who want to do more</span>
            <span className="text-rose-500">❤️</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
