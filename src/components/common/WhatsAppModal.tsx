"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CLINIC_CONFIG, createWhatsAppBookingLink } from "@/config/clinic.config";
import { X, MessageSquare, Phone, Calendar, Clock, CheckCircle2 } from "lucide-react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neo-navy/70 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl border border-neo-clinical/30 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-neo-navy via-neo-navy-light to-neo-navy text-white p-6 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-neo-red animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-semibold text-neo-clinical-light">
              Fast WhatsApp Booking
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold">{t.bookingModal.title}</h3>
          <p className="text-xs text-slate-300 mt-1">
            {t.bookingModal.subtitle}
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleWhatsAppSubmit} className="p-6 space-y-4 text-left">
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
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-neo-red/40 focus:border-neo-red transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-neo-navy uppercase tracking-wider mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-neo-clinical" />
                {t.bookingModal.dateLabel}
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-neo-red/40 focus:border-neo-red transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neo-navy uppercase tracking-wider mb-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-neo-clinical" />
                {t.bookingModal.timeLabel}
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-neo-red/40 focus:border-neo-red transition-all bg-white"
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
            <div className="flex flex-wrap gap-1.5 mb-2">
              {quickReasons.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setReason(r)}
                  className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all ${
                    reason === r
                      ? "bg-neo-navy text-white border-neo-navy"
                      : "bg-neo-ice text-neo-blue-gray border-slate-200 hover:border-neo-clinical"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Or type specific symptoms..."
              className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-neo-red/40 focus:border-neo-red transition-all"
            />
          </div>

          <div className="pt-2 space-y-3">
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl bg-neo-red hover:bg-neo-red-hover text-white font-bold text-sm shadow-md hover:shadow-glow flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              {t.bookingModal.submitBtn}
            </button>

            <div className="text-center">
              <a
                href="tel:+254729884108"
                className="inline-flex items-center gap-1.5 text-xs text-neo-blue-gray hover:text-neo-navy font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-neo-clinical" />
                {t.bookingModal.directCall}
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
