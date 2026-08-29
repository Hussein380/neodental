"use client";

import React, { useState } from "react";
import Link from "next/link";
import { treatmentsData } from "@/content/treatments";
import { SectionHeader } from "@/components/common/SectionHeader";
import { WhatsAppModal } from "@/components/common/WhatsAppModal";
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react";

export const FeaturedTreatments: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string>("General Consultation");

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Dental Services & Care"
          title="Personalized dental treatments for"
          highlight="every stage of health."
          subtitle="From urgent emergency relief and root canals to custom Gold & Silver crowns and smile restorations in Eastleigh, Nairobi."
        />

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatmentsData.slice(0, 6).map((treatment) => (
            <div
              key={treatment.id}
              className="bg-neo-ice/80 rounded-3xl border border-neo-clinical/20 p-8 flex flex-col justify-between hover:bg-white hover:border-neo-clinical/50 hover:shadow-card transition-all duration-300 group text-left"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-neo-clinical">
                    {treatment.category}
                  </span>
                  {!treatment.isConfirmed && (
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-slate-200 text-neo-blue-gray font-bold">
                      Consultation Required
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-neo-red transition-colors leading-snug">
                  {treatment.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                  {treatment.shortDescription}
                </p>

                {/* Key Benefits */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-200/70">
                  {treatment.benefits.slice(0, 2).map((benefit, i) => (
                    <div
                      key={i}
                      className="text-xs sm:text-sm text-neo-dark flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-neo-clinical flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-5 border-t border-slate-200/80 flex items-center justify-between gap-3">
                <Link
                  href={`/treatments/${treatment.slug}`}
                  className="text-sm font-bold text-neo-navy hover:text-neo-red flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Guide</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedTreatment(treatment.title);
                    setIsModalOpen(true);
                  }}
                  className="py-2.5 px-4 rounded-xl bg-white hover:bg-neo-red hover:text-white text-neo-navy border border-slate-200 shadow-sm transition-all duration-200 flex items-center gap-1.5 text-xs font-bold"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Link */}
        <div className="mt-14 text-center">
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 py-4 px-9 rounded-full bg-sky-600 hover:bg-sky-700 text-white text-sm font-bold shadow-md shadow-sky-600/20 transition-all duration-200 hover:scale-105"
          >
            <span>View All Dental Treatments</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      </div>

      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultReason={selectedTreatment}
      />
    </section>
  );
};
