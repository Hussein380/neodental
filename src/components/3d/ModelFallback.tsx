"use client";

import React, { useState } from "react";
import { toothHotspots } from "@/content/education";
import { Info, Sparkles, CheckCircle2 } from "lucide-react";

interface ModelFallbackProps {
  type?: "anatomy" | "decay" | "root-canal" | "implant" | "lab";
  interactive?: boolean;
}

export const ModelFallback: React.FC<ModelFallbackProps> = ({
  type = "anatomy",
  interactive = true,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState(toothHotspots[0]);

  return (
    <div className="relative w-full h-full min-h-[360px] flex flex-col items-center justify-center p-6 bg-gradient-to-b from-neo-ice/80 to-white rounded-2xl border border-neo-clinical/20 overflow-hidden">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 subtle-grid opacity-60 pointer-events-none" />

      {/* SVG Anatomical Tooth Visualization */}
      <div className="relative w-64 h-64 md:w-72 md:h-72 z-10 flex items-center justify-center">
        <svg
          viewBox="0 0 200 240"
          className="w-full h-full filter drop-shadow-lg transition-transform duration-500 hover:scale-105"
        >
          {/* Gum / Bone Baseline */}
          <path
            d="M20 160 C 60 145, 140 145, 180 160 C 190 190, 190 230, 10 230 C 10 190, 10 170, 20 160 Z"
            fill="#F4C2C2"
            stroke="#E08B8B"
            strokeWidth="2"
            opacity="0.85"
          />

          {/* Tooth Roots */}
          <path
            d="M60 140 C 50 170, 45 205, 55 225 C 65 205, 75 170, 95 145 Z"
            fill="#FFF8E7"
            stroke="#D9CBA8"
            strokeWidth="2"
          />
          <path
            d="M105 145 C 125 170, 135 205, 145 225 C 155 205, 150 170, 140 140 Z"
            fill="#FFF8E7"
            stroke="#D9CBA8"
            strokeWidth="2"
          />

          {/* Dentin Layer */}
          <path
            d="M48 135 C 40 90, 55 50, 100 48 C 145 50, 160 90, 152 135 C 130 145, 70 145, 48 135 Z"
            fill="#F7E7B4"
            stroke="#DFC37C"
            strokeWidth="2"
          />

          {/* Dental Pulp Chamber & Root Canals */}
          <path
            d="M85 105 C 80 80, 120 80, 115 105 C 115 130, 132 170, 138 210 C 130 205, 125 180, 110 135 C 90 135, 75 180, 62 210 C 68 170, 85 130, 85 105 Z"
            fill="#DF0C0A"
            opacity="0.8"
          />

          {/* Outer Enamel Shell */}
          <path
            d="M38 130 C 25 80, 45 30, 100 28 C 155 30, 175 80, 162 130 C 145 138, 55 138, 38 130 Z"
            fill="url(#enamelGradient)"
            stroke="#B5D0E3"
            strokeWidth="2.5"
            opacity="0.6"
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="enamelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#E6F2F8" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#6F9AB8" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Interactive Hotspot Markers */}
          {interactive &&
            toothHotspots.map((hs, i) => {
              const coords: Record<string, { cx: number; cy: number }> = {
                enamel: { cx: 100, cy: 38 },
                dentin: { cx: 80, cy: 75 },
                pulp: { cx: 100, cy: 105 },
                gum: { cx: 35, cy: 165 },
                root: { cx: 135, cy: 185 },
              };
              const pos = coords[hs.id] || { cx: 100, cy: 100 };
              const isSelected = selectedHotspot.id === hs.id;

              return (
                <g
                  key={hs.id}
                  className="cursor-pointer group"
                  onClick={() => setSelectedHotspot(hs)}
                >
                  <circle
                    cx={pos.cx}
                    cy={pos.cy}
                    r={isSelected ? "9" : "7"}
                    fill={isSelected ? "#DF0C0A" : "#0284C7"}
                    className="transition-all duration-300 group-hover:scale-125"
                  />
                  <circle
                    cx={pos.cx}
                    cy={pos.cy}
                    r={isSelected ? "14" : "10"}
                    fill="none"
                    stroke={isSelected ? "#DF0C0A" : "#38BDF8"}
                    strokeWidth="1.5"
                    className="animate-ping opacity-60"
                  />
                  <text
                    x={pos.cx}
                    y={pos.cy + 3}
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="9"
                    fontWeight="bold"
                    pointerEvents="none"
                  >
                    {i + 1}
                  </text>
                </g>
              );
            })}
        </svg>
      </div>

      {/* Interactive Tooltip Card */}
      {interactive && selectedHotspot && (
        <div className="relative z-20 mt-4 max-w-sm w-full bg-white/95 backdrop-blur-md p-4 rounded-xl border border-neo-clinical/30 shadow-subtle text-left animate-fade-in">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-neo-red" />
              <h4 className="font-bold text-neo-navy text-sm">
                {selectedHotspot.name}
              </h4>
            </div>
            <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-neo-ice text-neo-blue-gray">
              Anatomical Layer
            </span>
          </div>
          <p className="text-xs text-neo-muted leading-relaxed mb-2">
            {selectedHotspot.summary}
          </p>
          <div className="text-[11px] text-neo-dark/90 bg-neo-ice/80 p-2 rounded-lg border border-neo-clinical/10 flex items-start gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-neo-clinical flex-shrink-0 mt-0.5" />
            <span>{selectedHotspot.importance}</span>
          </div>
        </div>
      )}

      {/* Badge Indicator */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-1 text-[11px] font-medium text-neo-blue-gray bg-white/80 px-2.5 py-1 rounded-full border border-neo-clinical/20">
        <Info className="w-3.5 h-3.5 text-neo-clinical" />
        <span>Educational Visualizer</span>
      </div>
    </div>
  );
};
