"use client";

import React, { useEffect } from "react";
import { RotateCw, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="pt-36 pb-24 min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-neo-red font-black text-2xl border border-red-200">
          <AlertTriangle className="w-8 h-8 text-neo-red" />
        </div>

        <h1 className="text-2xl font-extrabold text-neo-navy">
          Something went wrong
        </h1>

        <p className="text-sm text-neo-muted leading-relaxed">
          We encountered an unexpected error while loading this page.
        </p>

        <div className="pt-2 flex justify-center">
          <button
            type="button"
            onClick={() => reset()}
            className="py-3 px-6 rounded-full bg-neo-navy hover:bg-neo-navy-light text-white text-xs font-bold shadow-md transition-all flex items-center gap-2"
          >
            <RotateCw className="w-4 h-4" />
            <span>Try again</span>
          </button>
        </div>
      </div>
    </div>
  );
}
