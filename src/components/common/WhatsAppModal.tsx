"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CLINIC_CONFIG, createWhatsAppBookingLink } from "@/config/clinic.config";
import { X, MessageSquare, Phone, Calendar, Clock, Sparkles } from "lucide-react";

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultReason?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  defaultReason = "",
}) => {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("Morning (9:00 AM - 1:00 PM)");
  const [reason, setReason] = useState(defaultReason || "General Dental Consultation");

  // Sync reason when defaultReason changes
  useEffect(() => {
    if (defaultReason) {
      setReason(defaultReason);
    }
  }, [defaultReason]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickReasons = [
    "Tooth Pain / Emergency",
    "Root Canal Treatment",
    "Dental Crown / Bridge",
    "Tooth Filling / Repair",
    "Teeth Cleaning / Check-up",
    "Missing Tooth / Implant Consultation",
    "Teeth Alignment / Orthodontics",
    "Cosmetic Dentistry / Veneers",
  ];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waUrl = createWhatsAppBookingLink({
      patientName: name,
      phone,
      preferredDate: date,
      preferredTime: time,
      reason,
    });

    window.open(waUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Prominent Close Button */}
        <div className="bg-gradient-to-r from-neo-navy via-slate-900 to-neo-navy text-white p-5 sm:p-6 relative flex-shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all active:scale-95 shadow-sm"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1.5 pr-10">
            <span className="w-2.5 h-2.5 rounded-full bg-neo-red animate-pulse" />
            <span className="text-[11px] uppercase tracking-wider font-bold text-red-300">
              Direct WhatsApp Priority Booking
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold pr-10">{t.bookingModal.title}</h3>
          <p className="text-xs text-slate-300 mt-1 max-w-sm">
            {t.bookingModal.subtitle}
          </p>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleWhatsAppSubmit} className="p-5 sm:p-6 space-y-4 text-left overflow-y-auto">
          <div>
            <label className="block text-xs font-bold text-neo-navy uppercase tracking-wider mb-1">
              {t.bookingModal.nameLabel} <span className="text-neo-red">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.bookingModal.namePlaceholder}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-neo-red/30 focus:border-neo-red transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-neo-navy uppercase tracking-wider mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-neo-red" />
                {t.bookingModal.dateLabel}
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-neo-red/30 focus:border-neo-red transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neo-navy uppercase tracking-wider mb-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-neo-red" />
                {t.bookingModal.timeLabel}
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-neo-red/30 focus:border-neo-red transition-all bg-white"
              >
                <option value="Morning (9:00 AM - 1:00 PM)">Morning (9:00 AM - 1:00 PM)</option>
                <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM - 9:00 PM)</option>
                <option value="Urgent / Today">Urgent / Today</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-neo-navy uppercase tracking-wider mb-1.5">
              {t.bookingModal.reasonLabel}
            </label>
            <div className="flex flex-wrap gap-1.5 mb-2.5 max-h-32 overflow-y-auto">
              {quickReasons.map((r) => {
                const isSelected = reason === r;
                return (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setReason(r)}
                    className={`text-[11px] px-2.5 py-1 rounded-lg border font-medium transition-all ${
                      isSelected
                        ? "bg-neo-navy text-white border-neo-navy shadow-xs"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    {r}
                  </button>
                );
              })}
            </div>
            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Or specify particular symptoms..."
              className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-neo-red/30 focus:border-neo-red transition-all"
            />
          </div>

          <div className="pt-2 space-y-2.5">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-2xl bg-neo-red hover:bg-neo-red-hover text-white font-bold text-sm shadow-md shadow-neo-red/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>{t.bookingModal.submitBtn}</span>
            </button>

            <div className="flex items-center justify-between pt-1">
              <a
                href="tel:+254729884108"
                className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-neo-navy font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-neo-red" />
                <span>Call Clinic: 0729 884 108</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="text-xs text-slate-500 hover:text-slate-800 font-semibold underline"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
