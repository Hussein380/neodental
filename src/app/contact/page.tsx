"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { WhatsAppModal } from "@/components/common/WhatsAppModal";
import { useLanguage } from "@/context/LanguageContext";
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Navigation,
  Calendar,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

export default function ContactPage() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        <SectionHeader
          badge={t.contact.badge}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        {/* Contact Information & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Address Card */}
            <div className="bg-neo-ice p-6 rounded-2xl border border-neo-clinical/25 shadow-subtle space-y-2">
              <div className="flex items-center gap-2.5 mb-1">
                <MapPin className="w-5 h-5 text-neo-red" />
                <h3 className="font-extrabold text-sky-700 text-base">
                  {t.contact.addressTitle}
                </h3>
              </div>
              <p className="text-sm font-semibold text-slate-800">
                NeoDental Clinic
              </p>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                {t.contact.address}
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=14th+Street+1st+Avenue+Eastleigh+Nairobi+Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-neo-red transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-sky-600" />
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="bg-neo-ice p-6 rounded-2xl border border-neo-clinical/25 shadow-subtle space-y-3">
              <div className="flex items-center gap-2.5 mb-1">
                <Phone className="w-5 h-5 text-sky-600" />
                <h3 className="font-extrabold text-sky-700 text-base">
                  {t.contact.phoneTitle}
                </h3>
              </div>
              
              <div className="space-y-2 text-xs md:text-sm">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/80">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">
                      Primary & WhatsApp Line
                    </span>
                    <a
                      href="tel:+254729884108"
                      className="font-bold text-sky-700 hover:text-neo-red text-sm"
                    >
                      0729 884 108
                    </a>
                  </div>
                  <a
                    href="https://wa.me/254729884108?text=Hello%20NeoDental%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                    title="WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/80">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">
                      Additional Clinic Line
                    </span>
                    <a
                      href="tel:+254721284884"
                      className="font-bold text-sky-700 hover:text-neo-red text-sm"
                    >
                      0721 284 884
                    </a>
                  </div>
                  <a
                    href="tel:+254721284884"
                    className="p-2 rounded-lg bg-sky-50 text-sky-700 hover:bg-sky-100 transition-colors"
                    title="Call"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-neo-ice p-6 rounded-2xl border border-neo-clinical/25 shadow-subtle space-y-2">
              <div className="flex items-center gap-2.5 mb-1">
                <Clock className="w-5 h-5 text-sky-600" />
                <h3 className="font-extrabold text-sky-700 text-base">
                  {t.contact.hoursTitle}
                </h3>
              </div>
              <p className="text-sm font-bold text-slate-900">
                {t.contact.hours}
              </p>
              <p className="text-xs text-slate-500">
                {t.contact.holidayNotice}
              </p>
            </div>

            {/* Quick Action Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full py-3.5 px-6 rounded-2xl bg-neo-red hover:bg-neo-red-hover text-white font-bold text-sm shadow-md hover:shadow-glow transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 fill-white" />
              <span>Book Appointment via WhatsApp</span>
            </button>
          </div>

          {/* Right Column: Google Maps Embed Card (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-neo-clinical/25 shadow-card overflow-hidden h-[540px] flex flex-col relative">
            <div className="p-4 bg-neo-ice border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neo-red" />
                <span className="text-xs font-bold text-sky-700">
                  NeoDental Clinic Location • Eastleigh, Nairobi
                </span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-neo-blue-gray">
                14th St, 1st Ave
              </span>
            </div>

            {/* Interactive Embedded Google Map */}
            <div className="relative flex-grow w-full bg-slate-100">
              <iframe
                title="NeoDental Clinic Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818454267232!2d36.8524021!3d-1.2778051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f16d7a4628d05%3A0x8e833446059d29ff!2sEastleigh%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              {/* Map Floating Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-neo-clinical/30 shadow-card flex items-center justify-between gap-3">
                <div className="text-xs">
                  <span className="font-bold text-neo-navy block">
                    NeoDental Clinic
                  </span>
                  <span className="text-neo-blue-gray">
                    14th Street, 1st Avenue, Eastleigh
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=14th+Street+1st+Avenue+Eastleigh+Nairobi+Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 px-3 rounded-lg bg-neo-navy hover:bg-neo-navy-light text-white text-xs font-bold transition-colors whitespace-nowrap flex items-center gap-1"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3 text-neo-red" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultReason="Appointment / Location Inquiry"
      />
    </div>
  );
}
