"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroCarousel3D } from "./HeroCarousel3D";
import { WhatsAppModal } from "@/components/common/WhatsAppModal";
import { Calendar, ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    // Clean white base — no dark colors
    <section className="relative pt-20 md:pt-24 overflow-hidden bg-white">

      {/* ── MAIN HERO — Split Layout ──────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[70vh] lg:min-h-[80vh] items-center gap-6 sm:gap-8 lg:gap-12">

          {/* LEFT — Copy & CTAs */}
          <motion.div 
            className="pt-4 sm:pt-6 lg:py-16 space-y-6 w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Headline */}
            <motion.h1 variants={itemVariants} className="text-[2.2rem] sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-slate-900">
              Discover What We{" "}
              <span className="text-red-600 block sm:inline">Offer You.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-lg font-normal">
              From routine cleanings to complete smile restorations, explore our full range of 
              dental services. We provide <span className="font-semibold text-slate-900">expert care</span> for every stage of your dental health.
            </motion.p>

            {/* Trust stats — horizontal on sm+, text only */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 py-2">
              <div className="text-sm font-bold text-slate-700">
                Zero Hidden Fees
              </div>
              <div className="text-sm font-bold text-slate-700">
                In-House Dental Lab
              </div>
              <div className="text-sm font-bold text-slate-700">
                500+ Patients Served
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-lg shadow-red-600/20 hover:shadow-red-600/30 transition-all duration-200 active:scale-95"
              >
                <Calendar className="w-5 h-5 fill-white" />
                Book Appointment
              </button>

              <Link
                href="/treatments"
                className="group inline-flex items-center justify-center gap-2 py-4 px-7 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm transition-all duration-200 shadow-sm"
              >
                View Treatments
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT — Branded clinical photo (visible on both mobile and desktop) */}
          <div className="relative block w-full h-[370px] sm:h-[440px] lg:h-[530px] mt-8 lg:mt-0 pt-4 lg:pt-8">
            <HeroCarousel3D />
          </div>

        </div>
      </div>

      <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
