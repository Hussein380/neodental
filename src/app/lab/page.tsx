"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/common/SectionHeader";
import { WhatsAppModal } from "@/components/common/WhatsAppModal";
import {
  Cpu,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  Layers,
  Award,
  Zap,
} from "lucide-react";

export default function DentalLabPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <SectionHeader
          badge="In-House Dental Laboratory"
          title="From custom design to"
          highlight="your restored smile."
          subtitle="NeoDental features an on-site dental laboratory on 14th Street in Eastleigh, where custom crowns, bridges, and dental appliances are handcrafted with precision."
        />

        {/* Real Lab Photography Showcase Card */}
        <div className="bg-white rounded-3xl border border-neo-clinical/25 shadow-card overflow-hidden mb-16 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] bg-slate-900 overflow-hidden group">
              <Image
                src="/images/hero_dental_lab.jpg"
                alt="Skilled technician crafting gold crowns in NeoDental laboratory workbench"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-neo-red" />
                  <span>On-Site Laboratory Facility</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Crafting Custom Gold & Silver Dental Restorations
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1">
                  14th Street, 1st Avenue, Eastleigh, Nairobi
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-neo-blue-gray block">
                  Why In-House Fabrication Matters:
                </span>
                <p className="text-base text-neo-dark leading-relaxed font-normal">
                  In conventional dental practices, crowns and appliances are sent to external third-party labs, which often causes long delays and multiple appointments for minor adjustments.
                </p>
                <p className="text-base text-neo-dark leading-relaxed font-normal">
                  At NeoDental Clinic, our dental technicians work directly with our treating clinicians on 14th Street in Eastleigh, ensuring micron-level accuracy, direct shade matching, and immediate custom fitting.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="py-3.5 px-7 rounded-full bg-neo-red hover:bg-neo-red-hover text-white text-sm font-bold shadow-md hover:shadow-glow transition-all flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5 fill-white" />
                  <span>Consult on Custom Restorations</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Value Proposition Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-16">
          <div className="bg-neo-ice p-7 rounded-3xl border border-neo-clinical/20 space-y-2.5">
            <Sparkles className="w-6 h-6 text-neo-red" />
            <h3 className="font-extrabold text-neo-navy text-base">
              Gold & Silver Crowns
            </h3>
            <p className="text-xs sm:text-sm text-neo-muted leading-relaxed font-normal">
              Expert custom crafting of classic Gold and high-durability Silver crowns tailored to individual biting forces.
            </p>
          </div>

          <div className="bg-neo-ice p-7 rounded-3xl border border-neo-clinical/20 space-y-2.5">
            <Cpu className="w-6 h-6 text-neo-clinical" />
            <h3 className="font-extrabold text-neo-navy text-base">
              Precision Fit
            </h3>
            <p className="text-xs sm:text-sm text-neo-muted leading-relaxed font-normal">
              Exact adaptation along tooth margins to seal out bacteria and prevent micro-leakage.
            </p>
          </div>

          <div className="bg-neo-ice p-7 rounded-3xl border border-neo-clinical/20 space-y-2.5">
            <Zap className="w-6 h-6 text-neo-navy" />
            <h3 className="font-extrabold text-neo-navy text-base">
              Direct Shade Matching
            </h3>
            <p className="text-xs sm:text-sm text-neo-muted leading-relaxed font-normal">
              Technicians evaluate natural tooth color in person for seamless aesthetic harmony.
            </p>
          </div>

          <div className="bg-neo-ice p-7 rounded-3xl border border-neo-clinical/20 space-y-2.5">
            <Layers className="w-6 h-6 text-neo-red" />
            <h3 className="font-extrabold text-neo-navy text-base">
              Removable Prosthetics
            </h3>
            <p className="text-xs sm:text-sm text-neo-muted leading-relaxed font-normal">
              Custom partial and full dental appliances crafted for natural chewing and facial fullness.
            </p>
          </div>
        </div>

        {/* 5-Step Restorative Pathway */}
        <div className="bg-gradient-to-r from-neo-navy via-neo-navy-light to-neo-navy text-white rounded-3xl p-8 md:p-12 text-left space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-neo-clinical-light">
              Laboratory Process
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold">
              The 5-Step Custom Restorative Pathway
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs sm:text-sm">
            <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-2">
              <span className="font-mono font-bold text-neo-red text-sm">01</span>
              <h4 className="font-bold text-white text-base">Assessment</h4>
              <p className="text-slate-300">Accurate clinical impression and bite registration.</p>
            </div>
            <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-2">
              <span className="font-mono font-bold text-neo-red text-sm">02</span>
              <h4 className="font-bold text-white text-base">Design</h4>
              <p className="text-slate-300">Anatomical waxing and occlusal sculpting for harmony.</p>
            </div>
            <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-2">
              <span className="font-mono font-bold text-neo-red text-sm">03</span>
              <h4 className="font-bold text-white text-base">Creation</h4>
              <p className="text-slate-300">Crafting the restoration using verified dental materials.</p>
            </div>
            <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-2">
              <span className="font-mono font-bold text-neo-red text-sm">04</span>
              <h4 className="font-bold text-white text-base">Refinement</h4>
              <p className="text-slate-300">Chairside micro-refinement and contact polishing.</p>
            </div>
            <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-2">
              <span className="font-mono font-bold text-neo-red text-sm">05</span>
              <h4 className="font-bold text-white text-base">Final Fit</h4>
              <p className="text-slate-300">Permanent bonding and functional chewing verification.</p>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultReason="In-House Dental Laboratory Restorations"
      />
    </div>
  );
}
