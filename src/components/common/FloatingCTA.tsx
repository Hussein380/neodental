"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, Calendar } from "lucide-react";
import { WhatsAppModal } from "./WhatsAppModal";

export const FloatingCTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-3 left-3 right-3 z-40 md:hidden animate-fade-in pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-between gap-2 p-2 bg-white/95 backdrop-blur-lg rounded-2xl border border-neo-clinical/30 shadow-2xl">
          {/* Direct Phone Call */}
          <a
            href="tel:+254729884108"
            className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-neo-ice text-neo-navy text-center hover:bg-slate-200 transition-colors"
            aria-label="Call NeoDental Clinic"
          >
            <Phone className="w-4 h-4 text-neo-clinical mb-0.5" />
            <span className="text-[10px] font-bold">Call</span>
          </a>

          {/* Quick WhatsApp */}
          <a
            href="https://wa.me/254729884108?text=Hello%20NeoDental%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20dental%20visit."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 text-emerald-800 text-center hover:bg-emerald-100 transition-colors"
            aria-label="WhatsApp NeoDental Clinic"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
            <span className="text-[10px] font-bold">WhatsApp</span>
          </a>

          {/* Book Appointment Modal Trigger */}
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-neo-red hover:bg-neo-red-hover text-white font-bold text-xs shadow-md transition-all active:scale-95"
            aria-label="Book Dental Appointment"
          >
            <Calendar className="w-4 h-4 fill-white" />
            <span>Book</span>
          </button>
        </div>
      </div>

      <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
