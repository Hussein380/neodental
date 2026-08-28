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
  const [imgSrc, setImgSrc] = React.useState<string>("/logo_transparent.png");
  const [hasError, setHasError] = React.useState<boolean>(false);

  // Generous height dimensions tailored for the official logo badge
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
      {!hasError ? (
        <Image
          src={imgSrc}
          alt="NeoDental Clinic Logo"
          width={180}
          height={180}
          className={`${logoDimensions} object-contain`}
          priority
          onError={() => {
            if (imgSrc === "/logo_transparent.png") {
              setImgSrc("/logo.png");
            } else {
              setHasError(true);
            }
          }}
        />
      ) : (
        <div className="flex items-center gap-2 font-extrabold text-xl tracking-tight text-neo-navy">
          <span className="text-neo-red">Neo</span>Dental
        </div>
      )}
    </Link>
  );
};
