"use client";

import React, { useState } from "react";
import { WhatsAppModal } from "@/components/common/WhatsAppModal";
import { useLanguage } from "@/context/LanguageContext";
import { Calendar, Phone, MessageSquare, MapPin, Clock } from "lucide-react";

export const CallToAction: React.FC = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 md:py-20 bg-gradient-to-r from-neo-navy via-neo-navy-light to-neo-navy text-white relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neo-red/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neo-clinical/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-neo-clinical-light">
            <span className="w-2 h-2 rounded-full bg-neo-red animate-ping" />
            <span>Ready to Speak to a Dentist?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
            Schedule your personalized dental consultation at NeoDental today.
          </h2>

          <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Conveniently located on 14th Street, 1st Avenue, Eastleigh, Nairobi. Open 7 days a week, 9:00 AM — 9:00 PM.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="py-3.5 px-8 rounded-full bg-neo-red hover:bg-neo-red-hover text-white text-sm font-bold shadow-lg hover:shadow-glow transition-all duration-200 active:scale-95 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 fill-white" />
              <span>Book Appointment</span>
            </button>

            <a
              href="https://wa.me/254729884108?text=Hello%20NeoDental%20Clinic,%20I%20would%20like%20to%20book%20a%20dental%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-7 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-bold border border-white/20 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: 0729 884 108</span>
            </a>

            <a
              href="tel:+254729884108"
              className="py-3.5 px-6 rounded-full bg-white text-neo-navy hover:bg-slate-100 text-sm font-bold shadow-md transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-neo-red" />
              <span>Call 0729 884 108</span>
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-neo-red" />
              14th St, 1st Ave, Eastleigh
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-neo-clinical" />
              Open Daily 9:00 AM – 9:00 PM
            </span>
          </div>
        </div>
      </section>

      <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
