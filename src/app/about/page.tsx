"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/common/SectionHeader";
import { WhatsAppModal } from "@/components/common/WhatsAppModal";
import { HeroCardCarousel } from "@/components/home/HeroCardCarousel";
import { PatientJourney } from "@/components/home/PatientJourney";
import {
  ShieldCheck,
  Heart,
  Sparkles,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  Calendar,
  CheckCircle2,
} from "lucide-react";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 text-left">
        {/* Header */}
        <SectionHeader
          badge="About NeoDental Clinic"
          title="Patient-centered dental care in the"
          highlight="heart of Eastleigh, Nairobi."
          subtitle="Dedicated to clear communication, clinical excellence, and restoring oral wellness in a welcoming, respectful environment."
        />

        {/* 1. Who We Are */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-sky-700">
              Who We Are
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              NeoDental Clinic is a modern dental practice and dental laboratory located on 14th Street, 1st Avenue in Eastleigh, Nairobi. We provide a comprehensive range of dental solutions—from immediate emergency pain relief and gentle root canal therapy to custom crowns and preventive check-ups.
            </p>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Our central philosophy is founded on patient empowerment: helping you understand your dental health clearly so you can make comfortable, informed decisions for yourself and your family.
            </p>
          </div>

          <div className="lg:col-span-5 bg-neo-ice p-8 rounded-3xl border border-neo-clinical/20 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-neo-red" />
              <h3 className="font-extrabold text-sky-700 text-lg">
                Core Clinic Pillars
              </h3>
            </div>
            <div className="space-y-3 text-xs md:text-sm text-slate-800">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                <span>Transparent, jargon-free patient education</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                <span>On-site dental laboratory for precision custom fit</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                <span>Open 7 days a week, 9:00 AM — 7:00 PM</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                <span>Accessible location in Eastleigh, Nairobi</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Our Clinical Approach */}
        <div className="bg-neo-ice rounded-3xl p-8 md:p-12 border border-neo-clinical/20 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Our Philosophy
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-sky-700">
              Compassionate, Conservative Dentistry
            </h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              We focus on preserving natural tooth structure wherever biologically possible, prioritizing gentle care and anxiety-free visits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <Heart className="w-5 h-5 text-neo-red mb-2" />
              <h3 className="font-bold text-sky-700 text-base">
                Anxiety-Free Atmosphere
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We understand that dental visits can cause apprehension. Our team takes time to listen and pace treatments to your comfort.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <ShieldCheck className="w-5 h-5 text-sky-600 mb-2" />
              <h3 className="font-bold text-sky-700 text-base">
                Strict Hygiene Protocols
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every clinical instrument and surface undergoes hospital-grade sterilization and protective infection control measures.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <Sparkles className="w-5 h-5 text-neo-red mb-2" />
              <h3 className="font-bold text-sky-700 text-base">
                Integrated Laboratory
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our on-site dental technicians craft restorations directly on 14th Street for superior anatomical accuracy and rapid adjustments.
              </p>
            </div>
          </div>
        </div>

        {/* Spotlight Showcase Carousel */}
        <div className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Clinic Highlights
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-sky-700">
              Specialized Care & Technology
            </h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Explore the unique features, technologies, and philosophies that define our daily clinical practice.
            </p>
          </div>
          <HeroCardCarousel />
        </div>

        {/* Calming Patient Journey */}
        <div className="pt-4 border-t border-slate-100">
          <PatientJourney />
        </div>

        {/* 3. Confirmed Location & Hours */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-neo-clinical/25 shadow-card space-y-6">
          <h2 className="text-2xl font-extrabold text-sky-700">
            Visit NeoDental Clinic in Eastleigh
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-sm">
            <div className="space-y-1.5">
              <span className="font-bold uppercase tracking-wider text-neo-blue-gray text-[11px] block flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-neo-red" />
                Clinic Location
              </span>
              <p className="font-semibold text-neo-navy">NeoDental Clinic</p>
              <p className="text-neo-muted">
                14th Street, 1st Avenue, Eastleigh, Nairobi, Kenya
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="font-bold uppercase tracking-wider text-neo-blue-gray text-[11px] block flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-neo-clinical" />
                Operating Hours
              </span>
              <p className="font-semibold text-neo-navy">
                Monday — Sunday: 9:00 AM — 7:00 PM
              </p>
              <p className="text-neo-muted text-xs">
                Open 7 days a week (Holiday hours may vary).
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="font-bold uppercase tracking-wider text-neo-blue-gray text-[11px] block flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-neo-navy" />
                Direct Contact
              </span>
              <a
                href="tel:+254729884108"
                className="font-semibold text-neo-red block hover:underline"
              >
                0729 884 108 (Primary & WhatsApp)
              </a>
              <a
                href="tel:+254721284884"
                className="text-neo-muted block hover:underline"
              >
                0721 284 884 (Additional Line)
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="py-3 px-6 rounded-full bg-neo-red hover:bg-neo-red-hover text-white text-xs font-bold shadow-sm transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 fill-white" />
              <span>Book Appointment</span>
            </button>
            <Link
              href="/contact"
              className="py-3 px-6 rounded-full bg-neo-ice hover:bg-slate-200 text-neo-navy text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>View Map & Directions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultReason="Consultation / Visit Inquiry"
      />
    </div>
  );
}
