"use client";

import React, { useState } from "react";
import { DiseaseCarousel3D } from "./DiseaseCarousel3D";
import { WhatsAppModal } from "@/components/common/WhatsAppModal";
import { useLanguage } from "@/context/LanguageContext";
import { MessageSquare } from "lucide-react";

export const SymptomTriage: React.FC = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 md:py-24 bg-slate-50 relative overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Split Layout (Exact same design structure as Hero) */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[60vh] lg:min-h-[70vh] items-center gap-6 sm:gap-8 lg:gap-12">
          
          {/* LEFT — Copy & CTAs */}
          <div className="pt-4 sm:pt-6 lg:py-16 space-y-6 w-full text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold text-red-600 tracking-wide uppercase whitespace-nowrap">
                Clinical Education
              </span>
            </div>
            
            <h2 className="text-[2.2rem] sm:text-4xl lg:text-[2.8rem] font-extrabold leading-[1.1] tracking-tight text-slate-900">
              Common Tooth <span className="text-red-600 block sm:inline">Diseases & Concerns.</span>
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-lg font-normal">
              Understanding what is happening inside your mouth is the first step to a healthy smile. 
              Explore common dental issues, see exactly what they look like, and learn how our clinicians treat them.
            </p>
            
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-lg shadow-red-600/20 hover:shadow-red-600/30 transition-all duration-200 active:scale-95"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                Ask a Dentist on WhatsApp
              </button>
            </div>
          </div>

          {/* RIGHT — 3D Rotating Disease Carousel */}
          <div className="relative block w-full h-[370px] sm:h-[440px] lg:h-[530px] mt-8 lg:mt-0 pt-4 lg:pt-8">
            <DiseaseCarousel3D />
          </div>
          
        </div>
      </div>

      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultReason="Tooth Disease & Treatment Inquiry"
      />
    </section>
  );
};
