"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppModal } from "@/components/common/WhatsAppModal";
import { CLINIC_CONFIG } from "@/config/clinic.config";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Calendar,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageSquare,
  Clock,
  Layers,
} from "lucide-react";

interface ShowcaseCard {
  id: string;
  badge: string;
  title: string;
  highlight: string;
  shortDescription: string;
  fullDescription: string;
  images: {
    src: string;
    alt: string;
    caption: string;
  }[];
  keyBenefits: string[];
  ctaText: string;
  ctaReason: string;
  detailUrl: string;
}

const showcaseCards: ShowcaseCard[] = [
  {
    id: "in-house-lab",
    badge: "In-House Dental Laboratory",
    title: "Precision Gold & Silver Crowns",
    highlight: "Crafted Directly in Eastleigh",
    shortDescription:
      "Unlike clinics that outsource, our on-site dental technicians design, craft, and custom-fit dental restorations right on 14th Street for superior comfort and bite alignment.",
    fullDescription:
      "Our integrated on-site laboratory enables direct chairside collaboration between your dentist and the dental technician. We provide verified high-durability options in classic Gold crowns, Silver crowns, and customized removable prosthetics tailored to your natural facial symmetry.",
    images: [
      {
        src: "/images/hero_dental_lab.jpg",
        alt: "Skilled dental technician crafting gold crowns in Eastleigh dental lab",
        caption: "Custom crown fabrication on our Eastleigh laboratory bench",
      },
      {
        src: "/images/hero_dentist_consult.jpg",
        alt: "Dentist explaining tooth restoration to patient",
        caption: "Chairside shade matching & anatomical refinement",
      },
    ],
    keyBenefits: [
      "Custom Gold & Silver crown fabrication",
      "Direct technician collaboration for fast turnaround",
      "Perfect bite alignment & natural facial harmony",
    ],
    ctaText: "Consult on Custom Crowns",
    ctaReason: "In-House Dental Lab / Custom Gold & Silver Crowns",
    detailUrl: "/lab",
  },
  {
    id: "gentle-care",
    badge: "Patient-Centered Care",
    title: "Gentle Consultations & Cleanings",
    highlight: "Anxiety-Free Environment",
    shortDescription:
      "Experience welcoming, respectful dental care in the heart of Eastleigh. We take time to explain all procedures clearly using visual diagrams—no medical jargon.",
    fullDescription:
      "We believe regular preventive visits shouldn't be stressful. From thorough ultrasonic plaque removal to proactive gum health screenings, our team provides gentle, unhurried care tailored to both adults and children.",
    images: [
      {
        src: "/images/hero_dental_care.jpg",
        alt: "Compassionate Somali dentist consulting patient in modern clinic",
        caption: "Gentle, respectful patient care in Eastleigh, Nairobi",
      },
      {
        src: "/images/hero_patient_smile.jpg",
        alt: "Patient with natural healthy smile",
        caption: "Confidence through proactive oral health",
      },
    ],
    keyBenefits: [
      "Warm, respectful, and anxiety-free atmosphere",
      "Gentle ultrasonic scaling & stain polishing",
      "Transparent recommendations before any treatment",
    ],
    ctaText: "Book a Dental Check-Up",
    ctaReason: "Routine Check-up & Consultation",
    detailUrl: "/treatments/preventive-examination",
  },
  {
    id: "tooth-preservation",
    badge: "Tooth-Saving Endodontics",
    title: "Root Canal & Deep Relief",
    highlight: "Saving Your Natural Teeth",
    shortDescription:
      "Prompt, comfortable care to relieve severe toothaches, eliminate deep infections, and protect natural teeth from unnecessary extractions.",
    fullDescription:
      "When bacteria reach the tooth nerve, root canal therapy gently removes the infected pulp, disinfects the canals, and hermetically seals the space with biocompatible material—preserving your natural jawbone and bite strength.",
    images: [
      {
        src: "/images/hero_dentist_consult.jpg",
        alt: "Dentist explaining root canal preservation to patient",
        caption: "Modern endodontic tooth-saving care",
      },
      {
        src: "/images/hero_dental_care.jpg",
        alt: "Modern clinic consultation room",
        caption: "Comfortable local anesthesia & sterile care",
      },
    ],
    keyBenefits: [
      "Immediate alleviation of acute throbbing pain",
      "Preserves natural teeth & prevents bone resorption",
      "Protected with a durable custom crown restoration",
    ],
    ctaText: "Inquire About Root Canals",
    ctaReason: "Root Canal Treatment / Tooth Pain Relief",
    detailUrl: "/treatments/root-canal-treatment",
  },
  {
    id: "radiant-smiles",
    badge: "Aesthetic Dentistry",
    title: "Cosmetic Enhancements & Veneers",
    highlight: "Natural Smile Harmony",
    shortDescription:
      "Personalized smile enhancements, composite bonding, and aesthetic restorations designed to look radiant, balanced, and completely natural.",
    fullDescription:
      "Whether addressing uneven enamel, chipped edges, or deep discoloration, our cosmetic treatments focus on preserving healthy tooth structure while restoring aesthetic balance and boosting everyday confidence.",
    images: [
      {
        src: "/images/hero_patient_smile.jpg",
        alt: "Radiant patient smile with healthy natural teeth",
        caption: "Natural, healthy smile enhancements",
      },
      {
        src: "/images/hero_dental_lab.jpg",
        alt: "Precision lab crafted aesthetic veneers",
        caption: "Custom aesthetic veneers & restorative bonding",
      },
    ],
    keyBenefits: [
      "Natural-looking enhancements tailored to facial contours",
      "Conservative approach preserving natural enamel",
      "Custom shade matching crafted in our on-site lab",
    ],
    ctaText: "Explore Cosmetic Options",
    ctaReason: "Cosmetic Dentistry / Smile Enhancement",
    detailUrl: "/treatments/cosmetic-dentistry-veneers",
  },
];

export const HeroCardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState<Record<string, number>>({});
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalReason, setModalReason] = useState("General Dental Consultation");

  const currentCard = showcaseCards[currentIndex];
  const currentSubImageIndex = activeImageIndex[currentCard.id] || 0;
  const currentImage = currentCard.images[currentSubImageIndex] || currentCard.images[0];

  const handleNext = useCallback(() => {
    setIsExpanded(false);
    setCurrentIndex((prev) => (prev + 1) % showcaseCards.length);
  }, []);

  const handlePrev = useCallback(() => {
    setIsExpanded(false);
    setCurrentIndex((prev) => (prev - 1 + showcaseCards.length) % showcaseCards.length);
  }, []);

  // Auto-advance timer (5.5s interval, pauses when user hovers)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  const handleSubImageClick = (cardId: string, imgIdx: number) => {
    setActiveImageIndex((prev) => ({ ...prev, [cardId]: imgIdx }));
  };

  const handleOpenBooking = (reason: string) => {
    setModalReason(reason);
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        className="w-full relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Main Card Container */}
        <div className="bg-white rounded-3xl border border-neo-clinical/25 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden text-left">
          
          {/* Top Progress & Navigation Header */}
          <div className="bg-neo-ice/80 px-6 py-3.5 border-b border-slate-200/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-neo-red animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-neo-navy">
                {currentCard.badge}
              </span>
            </div>

            {/* Manual Navigation Controls & Slide Counter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-neo-blue-gray mr-1">
                {currentIndex + 1} / {showcaseCards.length}
              </span>
              <button
                type="button"
                onClick={handlePrev}
                className="p-1.5 rounded-full bg-white hover:bg-neo-navy hover:text-white text-neo-navy border border-slate-200 shadow-xs transition-all active:scale-95"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="p-1.5 rounded-full bg-white hover:bg-neo-navy hover:text-white text-neo-navy border border-slate-200 shadow-xs transition-all active:scale-95"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card Content Grid: Image + Information */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            
            {/* Image Column (md:col-span-6) */}
            <div className="md:col-span-6 relative bg-slate-900 min-h-[280px] sm:min-h-[340px] md:min-h-[420px] flex flex-col justify-between overflow-hidden group">
              <Image
                key={currentImage.src}
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Top Image Badge */}
              <div className="relative z-10 p-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-neo-navy text-[11px] font-bold shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-neo-red" />
                  <span>NeoDental Eastleigh</span>
                </span>
              </div>

              {/* Bottom Caption & Multi-Image Gallery Switcher */}
              <div className="relative z-10 p-4 space-y-2">
                <p className="text-xs text-white/90 font-medium drop-shadow-md">
                  {currentImage.caption}
                </p>

                {/* Sub-image Thumbnails (if card has multiple images) */}
                {currentCard.images.length > 1 && (
                  <div className="flex items-center gap-2 pt-1">
                    {currentCard.images.map((img, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleSubImageClick(currentCard.id, i)}
                        className={`relative w-12 h-9 rounded-lg overflow-hidden border-2 transition-all ${
                          currentSubImageIndex === i
                            ? "border-neo-red scale-105 shadow-md"
                            : "border-white/60 opacity-70 hover:opacity-100"
                        }`}
                        title={img.caption}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                    <span className="text-[10px] text-white/80 font-semibold ml-1">
                      {currentSubImageIndex + 1} of {currentCard.images.length} views
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Content Column (md:col-span-6) */}
            <div className="md:col-span-6 p-6 sm:p-7 md:p-8 flex flex-col justify-between min-h-[400px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  className="flex flex-col justify-between h-full space-y-5"
                >
                  <div className="space-y-3.5">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-neo-navy tracking-tight leading-tight">
                      {currentCard.title}{" "}
                      <span className="text-neo-red block sm:inline text-xl sm:text-2xl font-bold">
                        — {currentCard.highlight}
                      </span>
                    </h3>

                    {/* Description with Expandable "See more" */}
                    <div className="text-sm sm:text-base text-neo-dark leading-relaxed font-normal">
                      <p>
                        {isExpanded
                          ? currentCard.fullDescription
                          : currentCard.shortDescription}
                      </p>
                      <button
                        type="button"
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-1.5 text-xs font-bold text-neo-red hover:text-neo-red-hover inline-flex items-center gap-1 transition-colors"
                      >
                        <span>{isExpanded ? "Show less" : "Read full clinical details..."}</span>
                      </button>
                    </div>

                    {/* Key Benefits List */}
                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      {currentCard.keyBenefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-neo-dark"
                        >
                          <CheckCircle2 className="w-4 h-4 text-neo-clinical flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => handleOpenBooking(currentCard.ctaReason)}
                      className="py-3 px-6 rounded-full bg-neo-red hover:bg-neo-red-hover text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-glow transition-all duration-200 active:scale-95 flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4 fill-white" />
                      <span>{currentCard.ctaText}</span>
                    </button>

                    <Link
                      href={currentCard.detailUrl}
                      className="text-xs sm:text-sm font-bold text-neo-navy hover:text-neo-red flex items-center gap-1.5 transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 text-neo-red" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Indicator Dots */}
          <div className="bg-neo-ice/60 px-6 py-2.5 border-t border-slate-200/60 flex items-center justify-center gap-2">
            {showcaseCards.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => {
                  setIsExpanded(false);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-neo-red"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultReason={modalReason}
      />
    </>
  );
};
