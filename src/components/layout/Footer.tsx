"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NeoLogo } from "@/components/common/NeoLogo";
import { WhatsAppModal } from "@/components/common/WhatsAppModal";
import { useLanguage } from "@/context/LanguageContext";
import { treatmentCategories } from "@/content/treatments";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  ExternalLink,
  ShieldCheck,
  Calendar,
} from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-neo-navy text-white pt-16 pb-24 md:pb-16 border-t border-neo-navy-light relative overflow-hidden">
        {/* Background glow accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-neo-clinical/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-neo-red/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
            {/* Column 1: Brand & Identity (lg:col-span-4) */}
            <div className="lg:col-span-4 space-y-4">
              <NeoLogo variant="dark" size="lg" />
              <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                {t.footer.tagline}
              </p>
              <div className="pt-2 flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="py-2 px-4 rounded-xl bg-neo-red hover:bg-neo-red-hover text-white text-xs font-bold shadow-sm transition-all duration-200 active:scale-95 flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 fill-white" />
                  <span>Book Appointment</span>
                </button>
                <a
                  href="https://wa.me/254729884108?text=Hello%20NeoDental%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20dental%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links (lg:col-span-2) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold text-neo-clinical-light uppercase tracking-wider">
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    {t.nav.home}
                  </Link>
                </li>
                <li>
                  <Link href="/treatments" className="hover:text-white transition-colors">
                    {t.nav.treatments}
                  </Link>
                </li>
                <li>
                  <Link href="/lab" className="hover:text-white transition-colors">
                    {t.nav.dentalLab}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    {t.nav.about}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    {t.nav.contact}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Key Treatments (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold text-neo-clinical-light uppercase tracking-wider">
                {t.footer.services}
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {treatmentCategories.slice(0, 6).map((cat) => (
                  <li key={cat.id}>
                    <Link
                      href={`/treatments#${cat.id}`}
                      className="hover:text-neo-clinical-light transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-neo-red" />
                      <span>{cat.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Confirmed Location & Contacts (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold text-neo-clinical-light uppercase tracking-wider">
                {t.footer.contactInfo}
              </h4>
              
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-neo-red flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">NeoDental Clinic</span>
                    <span>14th Street, 1st Avenue, Eastleigh, Nairobi, Kenya</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-neo-clinical flex-shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <a
                      href="tel:+254729884108"
                      className="hover:text-white font-medium block"
                    >
                      0729 884 108 (Primary & WhatsApp)
                    </a>
                    <a
                      href="tel:+254721284884"
                      className="hover:text-white text-slate-400 block"
                    >
                      0721 284 884 (Additional Clinic Line)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-neo-clinical flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Monday — Sunday</span>
                    <span>9:00 AM — 9:00 PM (Daily)</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      Hours may vary during public holidays.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Disclaimer & Copyright */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-neo-clinical flex-shrink-0" />
              <span>{t.footer.disclaimer}</span>
            </div>
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>

      <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
