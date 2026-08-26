"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-36 pb-24 min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neo-ice text-neo-red font-black text-2xl border border-neo-clinical/20">
          404
        </div>

        <h1 className="text-3xl font-extrabold text-neo-navy">
          Page Not Found
        </h1>

        <p className="text-sm text-neo-muted leading-relaxed">
          The dental page or article you are looking for might have been moved, updated, or is temporarily unavailable.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="py-3 px-6 rounded-full bg-neo-red hover:bg-neo-red-hover text-white text-xs font-bold shadow-md transition-all flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/treatments"
            className="py-3 px-6 rounded-full bg-neo-ice hover:bg-slate-200 text-neo-navy text-xs font-bold transition-all flex items-center gap-1.5"
          >
            <span>Browse Treatments</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
