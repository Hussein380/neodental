"use client";

import React, { useState } from "react";
import { DentalCanvas } from "@/components/3d/DentalCanvas";
import { InteractiveTooth } from "@/components/3d/InteractiveTooth";
import { SectionHeader } from "@/components/common/SectionHeader";
import { toothHotspots } from "@/content/education";
import { Hotspot } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, ShieldCheck, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

export const AnatomyExplorer: React.FC = () => {
  const { t } = useLanguage();
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(toothHotspots[0]);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-neo-ice/50 via-white to-neo-ice/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Interactive Dental Anatomy"
          title="Your teeth are more than"
          highlight="what you see."
          subtitle="Rotate the 3D tooth model and click each layer below to understand the biological structures protecting your smile."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* 3D Model Explorer Canvas (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <DentalCanvas fallbackType="anatomy" heightClass="h-[400px] sm:h-[460px] md:h-[510px]">
              <InteractiveTooth
                showHotspots={true}
                onSelectHotspot={(hs) => setSelectedHotspot(hs)}
              />
            </DentalCanvas>
          </div>

          {/* Anatomical Layers Selector & Explanation Panel (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neo-blue-gray block mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-neo-clinical" />
                Select Biological Layer to Explore:
              </span>

              {/* Hotspots selector pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2.5">
                {toothHotspots.map((hs) => (
                  <button
                    key={hs.id}
                    type="button"
                    onClick={() => setSelectedHotspot(hs)}
                    className={`p-3.5 rounded-2xl border text-left transition-all text-sm font-bold flex items-center justify-between ${
                      selectedHotspot.id === hs.id
                        ? "bg-neo-navy text-white border-neo-navy shadow-sm"
                        : "bg-white text-neo-navy border-slate-200 hover:border-neo-clinical"
                    }`}
                  >
                    <span>{hs.name}</span>
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        selectedHotspot.id === hs.id ? "bg-neo-red" : "bg-slate-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Active Hotspot Deep Dive Card */}
            <div className="bg-white p-7 rounded-3xl border border-neo-clinical/25 shadow-card space-y-4 animate-fade-in">
              <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-neo-red" />
                  <h3 className="text-xl font-extrabold text-sky-700">
                    {selectedHotspot.name}
                  </h3>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-neo-ice text-neo-blue-gray">
                  Anatomical Layer
                </span>
              </div>

              <p className="text-base text-neo-dark leading-relaxed font-normal">
                {selectedHotspot.details}
              </p>

              <div className="bg-neo-ice p-4 rounded-2xl border border-neo-clinical/15 text-sm text-neo-navy space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-xs uppercase tracking-wider text-neo-clinical">
                  <Sparkles className="w-4 h-4" />
                  Clinical & Preventive Significance:
                </span>
                <p className="text-neo-dark leading-relaxed">
                  {selectedHotspot.importance}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/learn/understanding-tooth-anatomy"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-neo-red hover:text-neo-red-hover transition-colors"
                >
                  <span>Read full dental anatomy guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
