"use client";

import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  highlight,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}) => {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl mb-12 md:mb-16 ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
            isDark
              ? "bg-white/10 text-sky-200 border border-white/15"
              : "bg-sky-50 text-sky-700 border border-sky-200/80 shadow-xs"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-neo-red animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight leading-[1.22] ${
          isDark ? "text-white" : "text-sky-700"
        }`}
      >
        {title}{" "}
        {highlight && (
          <span className="text-neo-red relative inline-block">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed font-normal ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
