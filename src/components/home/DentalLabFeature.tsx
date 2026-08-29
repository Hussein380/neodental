"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/common/SectionHeader";
import { WhatsAppModal } from "@/components/common/WhatsAppModal";
import {
  Cpu,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Calendar,
  Layers,
  Zap,
} from "lucide-react";

export const DentalLabFeature: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const labSteps = [
    {
      step: "01",
      title: "Clinical Scan & Impression",
      description: "Accurate micro-dimensions of your prepared tooth and bite alignment are recorded.",
    },
    {
      step: "02",
      title: "Anatomical Custom Design",
      description: "Custom occlusal contours and contact angles sculpted for chewing comfort.",
    },
    {
      step: "03",
      title: "Precision Lab Crafting",
      description: "Handcrafted using verified dental materials, including classic Gold & Silver crowns.",
    },
    {
      step: "04",
      title: "Chairside Refinement & Fit",
      description: "Direct technician-dentist collaboration for micro-refinements and permanent bonding.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-neo-ice/80 via-white to-neo-ice/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="In-House Dental Craftsmanship"
          title="From custom design to"
          highlight="your restored smile."
          subtitle="NeoDental features an integrated dental laboratory right on 14th Street in Eastleigh, where restorations, crowns, and appliances are handcrafted with precision."
        />

        {/* Visual Showcase Card with Real Lab Photography */}
        <div className="bg-white rounded-3xl border border-neo-clinical/25 shadow-card overflow-hidden mb-14 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image Column */}
            <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] bg-slate-900 overflow-hidden group">
              <Image
                src="/images/hero_dental_lab.jpg"
                alt="Skilled technician crafting gold crowns in NeoDental laboratory"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-neo-red" />
                  <span>On-Site 14th Street Facility</span>
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  Precision Gold & Silver Dental Restorations
                </h3>
                <p className="text-xs text-slate-200 mt-1">
                  Custom fabricated for your individual anatomy and bite alignment.
                </p>
              </div>
            </div>

            {/* Steps & Advantages Column */}
            <div className="lg:col-span-6 p-7 sm:p-9 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-neo-blue-gray block">
                  The In-House Crafting Pathway:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {labSteps.map((s) => (
                    <div
                      key={s.step}
                      className="bg-neo-ice p-4 rounded-2xl border border-slate-200/80 space-y-1.5"
                    >
                      <span className="text-xs font-black text-neo-red font-mono">
                        {s.step}
                      </span>
                      <h4 className="font-bold text-sky-700 text-sm">
                        {s.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {s.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="py-3 px-6 rounded-full bg-neo-red hover:bg-neo-red-hover text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-glow transition-all duration-200 active:scale-95 flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 fill-white" />
                  <span>Consult on Custom Restorations</span>
                </button>

                <Link
                  href="/lab"
                  className="text-xs sm:text-sm font-bold text-slate-800 hover:text-neo-red flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Full Lab Guide</span>
                  <ArrowRight className="w-4 h-4 text-neo-red" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-7 rounded-3xl border border-neo-clinical/20 shadow-subtle space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-sky-50 flex items-center justify-center text-neo-red mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-sky-700 text-lg">
              Precision Custom Fit
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Every crown, bridge, and removable appliance is crafted specifically for your unique bite and facial symmetry.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-neo-clinical/20 shadow-subtle space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600 mb-4">
              <Cpu className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-sky-700 text-lg">
              Direct Technician Collaboration
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Our dental technicians work side-by-side with treating clinicians, allowing instantaneous adjustments and exact shade matching on-site.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-neo-clinical/20 shadow-subtle space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-700 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-sky-700 text-lg">
              Gold & Silver Crown Expertise
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              We provide confirmed high-durability options in classic Gold and Silver crowns, crafted to the highest restorative standards.
            </p>
          </div>
        </div>
      </div>

      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultReason="In-House Dental Laboratory Restorations"
      />
    </section>
  );
};
