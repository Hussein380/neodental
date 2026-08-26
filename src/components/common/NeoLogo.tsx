"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NeoLogoProps {
  className?: string;
  variant?: "light" | "dark" | "default";
  size?: "sm" | "md" | "lg";
}

export const NeoLogo: React.FC<NeoLogoProps> = ({
  className = "",
  variant = "default",
  size = "md",
}) => {
  const isDark = variant === "dark";

  // Generous height dimensions tailored for the new official logo badge
  const logoDimensions = {
    sm: "h-11 w-auto",
    md: "h-14 sm:h-16 w-auto",
    lg: "h-16 md:h-20 w-auto",
  }[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center select-none group transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label="NeoDental Clinic Homepage"
    >
      <Image
        src="/logo.png"
        alt="NeoDental Clinic Logo"
        width={180}
        height={180}
        className={`${logoDimensions} object-contain`}
        priority
      />
    </Link>
  );
};
