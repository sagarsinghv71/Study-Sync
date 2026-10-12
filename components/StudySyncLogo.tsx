import React from "react";

interface StudySyncLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function StudySyncLogo({
  className = "",
  iconOnly = false,
  size = "md",
}: StudySyncLogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div className={`inline-flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}>
      {/* Brand Icon combining Graduation Cap + Checkmark + AI Spark */}
      <div
        className={`relative ${iconSizes[size]} rounded-xl bg-gradient-to-br from-[#635BFF] via-[#554de6] to-[#4F46E5] flex items-center justify-center shadow-md shadow-[#635BFF]/20 ring-1 ring-white/20 overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-200`}
      >
        {/* Subtle interior glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/25 pointer-events-none" />

        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white"
        >
          {/* Graduation Cap Top / Diamond */}
          <path
            d="M16 6L4 12L16 18L28 12L16 6Z"
            fill="currentColor"
            fillOpacity="0.95"
          />

          {/* Graduation Cap Base Arch */}
          <path
            d="M8.5 14.5V19.5C8.5 22.8 11.8 25.5 16 25.5C18.2 25.5 20.2 24.8 21.6 23.6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Checkmark Integrated dynamically on the right side */}
          <path
            d="M14 18.5L17.5 22L26 13"
            stroke="#06B6D4"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* AI Spark element at the upper right */}
          <path
            d="M26 4C26 5.5 27 6.5 28.5 6.5C27 6.5 26 7.5 26 9C26 7.5 25 6.5 23.5 6.5C25 6.5 26 5.5 26 4Z"
            fill="#FACC15"
          />
        </svg>
      </div>

      {!iconOnly && (
        <span className={`font-bold ${textSizes[size]} text-[#0F172A] tracking-tight flex items-center`}>
          <span>Study</span>
          <span className="text-[#635BFF]">Sync</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#06B6D4] ml-1 self-end mb-1" />
        </span>
      )}
    </div>
  );
}
