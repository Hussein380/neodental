"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NeoLogo } from "@/components/common/NeoLogo";
import { WhatsAppModal } from "@/components/common/WhatsAppModal";
import { useLanguage } from "@/context/LanguageContext";
import { CLINIC_CONFIG } from "@/config/clinic.config";
import { Language } from "@/types";
import { treatmentCategories } from "@/content/treatments";
import {
  ChevronDown,
  Menu,
  X,
  Calendar,
  Phone,
  MessageSquare,
  Globe,
  MapPin,
  Clock,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTreatmentsDropdownOpen, setIsTreatmentsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsTreatmentsDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: t.nav.home, href: "/" },
    {
      name: t.nav.treatments,
      href: "/treatments",
      hasDropdown: true,
    },
    { name: t.nav.dentalLab, href: "/lab" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.contact, href: "/contact" },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "sw", label: "SW" },
    { code: "so", label: "SO" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      >
        {/* Top Contact & Hours Bar - Blended Dark Blue Matching Logo */}
        <div className="bg-[#071B36] text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Left: Location & Hours */}
            <div className="flex items-center gap-6 text-slate-300">
              <span className="flex items-center gap-1.5 text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-neo-red" />
                <span>14th Street, 1st Avenue, Eastleigh, Nairobi</span>
              </span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>Open Daily: 9:00 AM – 7:00 PM</span>
              </span>
            </div>

            {/* Right: Phone & WhatsApp */}
            <div className="flex items-center gap-5 font-semibold">
              <a
                href={`tel:${CLINIC_CONFIG.contact.primaryPhoneTel}`}
                className="flex items-center gap-1.5 text-white hover:text-sky-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>Call: {CLINIC_CONFIG.contact.primaryPhone}</span>
              </a>
              <span className="text-white/20">|</span>
              <a
                href={`https://wa.me/${CLINIC_CONFIG.contact.whatsAppDigits}?text=Hello%20NeoDental%20Clinic,%20I%20would%20like%20to%20inquire%20about%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: {CLINIC_CONFIG.contact.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar - Dark Blue Blended Perfectly with Logo */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? "bg-[#071B36]/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3"
              : "bg-[#071B36] py-3.5 border-b border-white/10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Official Clear Logo */}
            <NeoLogo size="md" />

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setIsTreatmentsDropdownOpen(true)}
                      onMouseLeave={() => setIsTreatmentsDropdownOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`inline-flex items-center gap-1 text-sm font-bold transition-colors py-2 ${
                          pathname.startsWith("/treatments")
                            ? "text-sky-400"
                            : "text-slate-200 hover:text-sky-300"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isTreatmentsDropdownOpen
                              ? "rotate-180 text-sky-400"
                              : "text-slate-400"
                          }`}
                        />
                      </Link>

                      {/* Dropdown Menu */}
                      {isTreatmentsDropdownOpen && (
                        <div className="absolute top-full left-0 w-80 bg-[#0B2545] rounded-2xl shadow-2xl border border-white/15 p-3 grid grid-cols-1 gap-1 animate-fade-in z-50">
                          <div className="px-3 py-1.5 text-[11px] font-bold text-sky-400 uppercase tracking-wider border-b border-white/10 mb-1 flex items-center justify-between">
                            <span>Dental Services</span>
                            <span className="text-[10px] text-slate-400">
                              Eastleigh
                            </span>
                          </div>
                          {treatmentCategories.map((cat) => (
                            <Link
                              key={cat.id}
                              href={`/treatments#${cat.id}`}
                              className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:bg-white/10 hover:text-white transition-all flex items-center justify-between"
                            >
                              <span>{cat.name}</span>
                              {cat.badge && (
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-neo-red/20 text-red-300 font-bold border border-neo-red/30">
                                  {cat.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-bold transition-colors py-2 ${
                      isActive
                        ? "text-sky-400"
                        : "text-slate-200 hover:text-sky-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right Actions: Language & CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Selector */}
              <div className="flex items-center bg-white/10 p-1 rounded-full border border-white/15 text-xs font-bold">
                <Globe className="w-3.5 h-3.5 text-slate-300 ml-1.5 mr-1" />
                {languages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => setLanguage(l.code)}
                    className={`px-2.5 py-0.5 rounded-full transition-all text-xs font-bold ${
                      language === l.code
                        ? "bg-sky-600 text-white shadow-sm"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              {/* Primary Book CTA */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="py-3 px-6 rounded-full bg-neo-red hover:bg-neo-red-hover text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-glow transition-all duration-200 active:scale-95 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 fill-white" />
                <span>{t.nav.bookAppointment}</span>
              </button>
            </div>

            {/* Mobile Hamburger & Language */}
            <div className="flex items-center gap-2 lg:hidden">
              <div className="flex items-center bg-white/10 p-0.5 rounded-lg border border-white/15 text-[10px] font-bold">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => setLanguage(l.code)}
                    className={`px-2 py-0.5 rounded ${
                      language === l.code
                        ? "bg-sky-600 text-white"
                        : "text-slate-300"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors border border-white/15"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer with AnimatePresence */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:hidden bg-[#071B36]/98 backdrop-blur-xl border-b border-white/15 shadow-2xl px-6 py-6 overflow-hidden"
            >
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-base font-bold py-2 px-3 rounded-xl transition-colors ${
                      pathname === link.href
                        ? "bg-white/15 text-sky-400"
                        : "text-slate-200 hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsModalOpen(true);
                    }}
                    className="w-full py-3.5 px-4 rounded-xl bg-neo-red hover:bg-neo-red-hover text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 fill-white" />
                    <span>{t.nav.bookAppointment}</span>
                  </button>

                  <a
                    href={`https://wa.me/${CLINIC_CONFIG.contact.whatsAppDigits}?text=Hello%20NeoDental%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20dental%20visit.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600/20 text-emerald-300 font-bold text-sm border border-emerald-500/30 flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp: {CLINIC_CONFIG.contact.primaryPhone}</span>
                  </a>

                  <a
                    href={`tel:${CLINIC_CONFIG.contact.primaryPhoneTel}`}
                    className="w-full py-3 px-4 rounded-xl bg-white/10 text-white font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-sky-400" />
                    <span>Call {CLINIC_CONFIG.contact.primaryPhone}</span>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
