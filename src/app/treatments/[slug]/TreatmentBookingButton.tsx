"use client";

import React, { useState } from "react";
import { WhatsAppModal } from "@/components/common/WhatsAppModal";
import { Calendar } from "lucide-react";

export function TreatmentBookingButton({
  treatmentTitle,
}: {
  treatmentTitle: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="py-3 px-6 rounded-full bg-neo-red hover:bg-neo-red-hover text-white text-xs font-bold shadow-md hover:shadow-glow transition-all duration-200 active:scale-95 flex items-center gap-2"
      >
        <Calendar className="w-4 h-4 fill-white" />
        <span>Book Consultation</span>
      </button>

      <WhatsAppModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        defaultReason={treatmentTitle}
      />
    </>
  );
}
