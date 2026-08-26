"use client";

import React, { useState } from "react";
import Link from "next/link";
import { treatmentsData, treatmentCategories } from "@/content/treatments";
import { SectionHeader } from "@/components/common/SectionHeader";
import { WhatsAppModal } from "@/components/common/WhatsAppModal";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Sparkles,
  Layers,
} from "lucide-react";

export default function TreatmentsHubPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalReason, setModalReason] = useState("General Dental Treatment");

  const filteredTreatments =
    selectedCategory === "all"
      ? treatmentsData
      : treatmentsData.filter((tr) => tr.category === selectedCategory);

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeader
          badge="Dental Treatments & Services"
          title="Comprehensive dental care tailored for"
          highlight="comfort and longevity."
          subtitle="Explore our full spectrum of restorative, cosmetic, endodontic, and prosthetic dental solutions in Eastleigh, Nairobi."
        />

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === "all"
                ? "bg-neo-navy text-white shadow-sm"
                : "bg-neo-ice text-neo-blue-gray hover:text-neo-navy hover:bg-slate-200"
            }`}
          >
            All Treatments ({treatmentsData.length})
          </button>
          {treatmentCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? "bg-neo-navy text-white shadow-sm"
                  : "bg-neo-ice text-neo-blue-gray hover:text-neo-navy hover:bg-slate-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Treatments List / Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              id={treatment.category}
              className="bg-neo-ice/80 rounded-2xl border border-neo-clinical/20 p-7 flex flex-col justify-between hover:bg-white hover:border-neo-clinical/50 hover:shadow-card transition-all duration-300 group text-left"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neo-clinical">
                    {treatment.category}
                  </span>
                  {!treatment.isConfirmed && (
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-slate-200 text-neo-blue-gray font-semibold">
                      Consultation Required
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-neo-navy mb-2.5 group-hover:text-neo-red transition-colors">
                  {treatment.title}
                </h3>

                <p className="text-xs md:text-sm text-neo-muted leading-relaxed mb-5">
                  {treatment.shortDescription}
                </p>

                {/* Common Symptoms / Indications */}
                <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-200/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neo-blue-gray block mb-1">
                    Typical Indications:
                  </span>
                  {treatment.symptoms.slice(0, 3).map((sym, i) => (
                    <div
                      key={i}
                      className="text-xs text-neo-dark flex items-start gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-neo-red flex-shrink-0 mt-1.5" />
                      <span>{sym}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
                <Link
                  href={`/treatments/${treatment.slug}`}
                  className="text-xs font-bold text-neo-navy hover:text-neo-red flex items-center gap-1 transition-colors"
                >
                  <span>Detailed Treatment Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setModalReason(treatment.title);
                    setIsModalOpen(true);
                  }}
                  className="py-2 px-3.5 rounded-xl bg-white hover:bg-neo-red hover:text-white text-neo-navy text-xs font-bold border border-slate-200 shadow-sm transition-all flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultReason={modalReason}
      />
    </div>
  );
}
