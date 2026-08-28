"use client";

import React, { useState, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { treatmentsData, treatmentCategories } from "@/content/treatments";
import { SectionHeader } from "@/components/common/SectionHeader";
import { WhatsAppModal } from "@/components/common/WhatsAppModal";
import { useLanguage } from "@/context/LanguageContext";
import { CardVideoPreview } from "@/components/treatments/CardVideoPreview";
import {
  ArrowRight,
  Calendar,
  Search,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
  Zap,
  Activity,
  HeartHandshake,
  Microscope,
  PhoneCall,
  SlidersHorizontal,
  X,
  Stethoscope,
  Play,
} from "lucide-react";

// Visual treatment enhancements & imagery mapping
interface TreatmentMeta {
  image: string;
  badge: string;
  badgeColor: string;
  duration: string;
  comfort: string;
  tags: string[];
  hasVideo?: boolean;
  videoSrc?: string;
}

const treatmentMetaMap: Record<string, TreatmentMeta> = {
  "emergency-pain-relief": {
    image: "/images/service_emergency_1787732956743.jpg",
    badge: "Immediate Relief",
    badgeColor: "bg-red-600 text-white",
    duration: "Same-Day Care",
    comfort: "Immediate Numbing",
    tags: ["Acute Pain", "Swelling", "Broken Tooth"],
  },
  "root-canal-treatment": {
    image: "/images/service_rootcanal_1787732967899.jpg",
    badge: "Tooth Preservation",
    badgeColor: "bg-neo-navy text-white",
    duration: "1–2 Visits",
    comfort: "Painless Anesthesia",
    tags: ["Deep Infection", "Pulpitis", "Save Natural Tooth"],
    hasVideo: true,
    videoSrc: "/videos/rootcanal.mp4",
  },
  "dental-crowns": {
    image: "/images/procedure_crowns_guide.jpg",
    badge: "Gold, Silver & Restorative",
    badgeColor: "bg-amber-600 text-white",
    duration: "2 Visits",
    comfort: "Custom Precision Fit",
    tags: ["Post-Root Canal", "Structural Cap", "High Longevity"],
    hasVideo: true,
    videoSrc: "/videos/crown.mp4",
  },
  "restorative-fillings": {
    image: "/images/service_fillings_1787732991474.jpg",
    badge: "Tooth-Colored Filling",
    badgeColor: "bg-emerald-600 text-white",
    duration: "30–45 Mins",
    comfort: "Gentle & Fast",
    tags: ["Cavity Repair", "Enamel Bond", "Single Visit"],
    hasVideo: true,
    videoSrc: "/videos/filling.mp4",
  },
  "dental-implants": {
    image: "/images/service_implants_1787733002450.jpg",
    badge: "Permanent Replacement",
    badgeColor: "bg-sky-700 text-white",
    duration: "Custom Roadmap",
    comfort: "Sedation & Numbing",
    tags: ["Missing Root", "Jawbone Health", "Permanent Tooth"],
    hasVideo: true,
    videoSrc: "/videos/implant.mp4",
  },
  "cosmetic-dentistry-veneers": {
    image: "/images/service_cosmetic_1787733042890.jpg",
    badge: "Aesthetic Makeover",
    badgeColor: "bg-purple-600 text-white",
    duration: "1–2 Visits",
    comfort: "Minimal Enamel Prep",
    tags: ["Stained Teeth", "Gap Closure", "Smile Harmony"],
    hasVideo: true,
    videoSrc: "/videos/veneers.mp4",
  },
  "orthodontic-assessment": {
    image: "/images/service_ortho_new_1787740812764.jpg",
    badge: "Alignment & Occlusion",
    badgeColor: "bg-blue-600 text-white",
    duration: "Personalized Plan",
    comfort: "Progressive Alignment",
    tags: ["Crowded Teeth", "Overbite/Spacing", "All Ages"],
    hasVideo: true,
    videoSrc: "/videos/braces.mp4",
  },
  "removable-appliances": {
    image: "/images/service_dentures_new_1787740801330.jpg",
    badge: "Lab-Crafted Prosthetics",
    badgeColor: "bg-teal-700 text-white",
    duration: "Fast Lab Turnaround",
    comfort: "Non-Surgical",
    tags: ["Multiple Missing Teeth", "Natural Mastication", "Comfort Base"],
  },
  "preventive-examination": {
    image: "/images/service_preventive_new_1787740825070.jpg",
    badge: "Routine Wellness",
    badgeColor: "bg-indigo-600 text-white",
    duration: "45 Mins",
    comfort: "100% Pain-Free",
    tags: ["6-Month Checkup", "Deep Scaling", "Early Detection"],
  },
  "dental-laboratory-services": {
    image: "/images/service_lab_new_1787740837341.jpg",
    badge: "On-Site Laboratory",
    badgeColor: "bg-slate-900 text-amber-400 font-bold",
    duration: "Direct Fabrication",
    comfort: "Chairside Refinement",
    tags: ["Direct Custom Fit", "Fast Adjustments", "14th St Eastleigh"],
  },
};

// Interactive Symptom Triage Matrix
interface SymptomItem {
  id: string;
  emoji: string;
  label: string;
  category: string;
  targetSlug: string;
  description: string;
}

const interactiveSymptoms: SymptomItem[] = [
  {
    id: "pain",
    emoji: "⚡",
    label: "Severe Throbbing Toothache",
    category: "emergency",
    targetSlug: "emergency-pain-relief",
    description: "Acute pain, facial swelling, or sudden dental injury",
  },
  {
    id: "hotcold",
    emoji: "🔥",
    label: "Lingering Hot / Cold Sensitivity",
    category: "root-canal",
    targetSlug: "root-canal-treatment",
    description: "Deep internal pulp inflammation requiring tooth preservation",
  },
  {
    id: "broken",
    emoji: "🔨",
    label: "Broken or Fractured Tooth",
    category: "crowns",
    targetSlug: "dental-crowns",
    description: "Restoring structurally compromised teeth with custom caps",
  },
  {
    id: "cavity",
    emoji: "🕳️",
    label: "Visible Cavity / Food Catching",
    category: "restorative",
    targetSlug: "restorative-fillings",
    description: "Gentle tooth-colored composite restorations",
  },
  {
    id: "stained",
    emoji: "✨",
    label: "Yellow or Discolored Teeth",
    category: "cosmetic",
    targetSlug: "cosmetic-dentistry-veneers",
    description: "Aesthetic smile brightening & custom veneers",
  },
  {
    id: "crooked",
    emoji: "🦷",
    label: "Crowded or Crooked Teeth",
    category: "orthodontics",
    targetSlug: "orthodontic-assessment",
    description: "Alignment planning and corrective bite solutions",
  },
  {
    id: "missing",
    emoji: "🚫",
    label: "Missing One or More Teeth",
    category: "implants",
    targetSlug: "dental-implants",
    description: "Permanent dental implants or removable lab prostheses",
  },
  {
    id: "checkup",
    emoji: "🩺",
    label: "Routine Checkup & Cleaning",
    category: "preventive",
    targetSlug: "preventive-examination",
    description: "Comprehensive screening & tartar/calculus scaling",
  },
  {
    id: "lab",
    emoji: "👑",
    label: "Custom Gold / Silver Crown",
    category: "lab",
    targetSlug: "dental-laboratory-services",
    description: "Precision prosthetics crafted in our Eastleigh lab",
  },
];

export default function TreatmentsHubPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeSymptom, setActiveSymptom] = useState<string | null>(null);
  const [highlightedCard, setHighlightedCard] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalReason, setModalReason] = useState("General Dental Treatment");

  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Filter treatments by Category & Search query, with video-enabled cards at the top
  const filteredTreatments = useMemo(() => {
    const list = treatmentsData.filter((tr) => {
      const matchesCategory =
        selectedCategory === "all" || tr.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const meta = treatmentMetaMap[tr.id] || treatmentMetaMap[tr.slug];
      const tagMatches = meta?.tags.some((tag) => tag.toLowerCase().includes(q));

      return (
        tr.title.toLowerCase().includes(q) ||
        tr.shortDescription.toLowerCase().includes(q) ||
        tr.category.toLowerCase().includes(q) ||
        tr.symptoms.some((s) => s.toLowerCase().includes(q)) ||
        tagMatches
      );
    });

    // Place cards with looping videos at the top
    return [...list].sort((a, b) => {
      const aHasVideo = Boolean(treatmentMetaMap[a.id]?.videoSrc || treatmentMetaMap[a.slug]?.videoSrc);
      const bHasVideo = Boolean(treatmentMetaMap[b.id]?.videoSrc || treatmentMetaMap[b.slug]?.videoSrc);
      if (aHasVideo && !bHasVideo) return -1;
      if (!aHasVideo && bHasVideo) return 1;
      return 0;
    });
  }, [selectedCategory, searchQuery]);

  // Handle clicking a symptom
  const handleSelectSymptom = (symptom: SymptomItem) => {
    setActiveSymptom(symptom.id);
    setSelectedCategory("all");
    setSearchQuery("");
    setHighlightedCard(symptom.targetSlug);

    // Smooth scroll to the target card
    setTimeout(() => {
      const el = document.getElementById(`treatment-${symptom.targetSlug}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);

    // Remove pulse highlight after 4 seconds
    setTimeout(() => {
      setHighlightedCard(null);
    }, 4000);
  };

  const handleClearFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setActiveSymptom(null);
    setHighlightedCard(null);
  };

  return (
    <div className="pt-28 pb-24 bg-slate-50 min-h-screen">
      {/* 1. Page Header & Trust Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <SectionHeader
          badge="Dental Treatments & Clinical Care"
          title="Exceptional dental treatments designed for"
          highlight="comfort, beauty & longevity."
          subtitle="Explore our comprehensive restorative, cosmetic, surgical, and custom lab solutions located in Eastleigh, Nairobi."
        />
      </div>


      {/* 3. Search & Category Filters Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8" ref={cardsContainerRef}>
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          
          {/* Live Search Input */}
          <div className="relative flex-1 max-w-lg">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by treatment name, symptom, or keyword..."
              className="w-full pl-11 pr-10 py-3 bg-white rounded-2xl border border-slate-200 text-sm font-medium text-neo-navy placeholder-slate-400 focus:outline-none focus:border-neo-red focus:ring-2 focus:ring-red-100 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-neo-navy"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Results Count & Reset */}
          <div className="flex items-center justify-between sm:justify-end gap-3 text-xs text-slate-500 font-semibold">
            <span>
              Showing <strong className="text-neo-navy">{filteredTreatments.length}</strong> of{" "}
              {treatmentsData.length} treatments
            </span>
            {(selectedCategory !== "all" || searchQuery) && (
              <button
                type="button"
                onClick={handleClearFilters}
                className="text-neo-red hover:underline font-bold"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
              selectedCategory === "all"
                ? "bg-neo-navy text-white shadow-md shadow-neo-navy/20 scale-105"
                : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100 hover:text-neo-navy"
            }`}
          >
            <span>All Services</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              selectedCategory === "all" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
            }`}>
              {treatmentsData.length}
            </span>
          </button>

          {treatmentCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = treatmentsData.filter((tr) => tr.category === cat.id).length;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-neo-navy text-white shadow-md shadow-neo-navy/20 scale-105"
                    : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100 hover:text-neo-navy"
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. High-Impact Visual Treatment Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredTreatments.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto my-8">
            <div className="w-16 h-16 rounded-full bg-red-50 text-neo-red mx-auto flex items-center justify-center mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-neo-navy mb-2">No matching treatments found</h4>
            <p className="text-sm text-slate-500 mb-6">
              We couldn&apos;t find any treatment matching &ldquo;{searchQuery}&rdquo;. Try another term or speak directly with our clinical desk.
            </p>
            <button
              type="button"
              onClick={handleClearFilters}
              className="px-6 py-2.5 rounded-full bg-neo-navy text-white text-xs font-bold hover:bg-neo-navy-light transition-colors"
            >
              Show All Treatments
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map((treatment) => {
              const meta = treatmentMetaMap[treatment.id] ||
                treatmentMetaMap[treatment.slug] || {
                  image: "/images/service_preventive_new_1787740825070.jpg",
                  badge: "Clinical Care",
                  badgeColor: "bg-neo-navy text-white",
                  duration: "1–2 Visits",
                  comfort: "Gentle Care",
                  tags: ["Oral Health", "Restoration"],
                };

              const isTargeted = highlightedCard === treatment.slug || highlightedCard === treatment.id;

              return (
                <div
                  key={treatment.id}
                  id={`treatment-${treatment.slug}`}
                  className={`bg-white rounded-3xl border flex flex-col justify-between overflow-hidden transition-all duration-300 group ${
                    isTargeted
                      ? "border-red-500 shadow-2xl ring-4 ring-red-400/40 scale-[1.02]"
                      : "border-slate-200/80 hover:border-slate-300 hover:shadow-card hover:-translate-y-1"
                  }`}
                >
                  <div>
                    {/* Visual Video / Image Preview Container */}
                    <div className="relative w-full overflow-hidden bg-slate-950">
                      <CardVideoPreview
                        videoSrc={meta.videoSrc}
                        posterSrc={meta.image}
                        alt={treatment.title}
                      />

                      {/* Top Badges */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className={`text-[10px] sm:text-xs font-extrabold uppercase px-3 py-1 rounded-full shadow-sm ${meta.badgeColor}`}>
                            {meta.badge}
                          </span>
                          {meta.hasVideo && (
                            <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-red-600/90 text-white shadow-sm backdrop-blur-md flex items-center gap-1">
                              <Play className="w-2.5 h-2.5 fill-white" />
                              <span>Live Video</span>
                            </span>
                          )}
                        </div>

                        {!treatment.isConfirmed ? (
                          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-neo-navy font-bold shadow-xs">
                            Consultation
                          </span>
                        ) : (
                          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/90 backdrop-blur-md text-white font-bold shadow-xs flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            Confirmed
                          </span>
                        )}
                      </div>

                      {/* Quick Meta Chips pinned at bottom of video/image */}
                      <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center gap-2 z-10">
                        <span className="text-[11px] font-semibold text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1">
                          <Clock className="w-3 h-3 text-red-400" />
                          {meta.duration}
                        </span>
                        <span className="text-[11px] font-semibold text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-emerald-400" />
                          {meta.comfort}
                        </span>
                      </div>
                    </div>

                    {/* Card Content Area */}
                    <div className="p-6 sm:p-7">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-neo-clinical">
                          {treatment.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-extrabold text-neo-navy mb-2.5 group-hover:text-neo-red transition-colors leading-snug">
                        <Link href={`/treatments/${treatment.slug}`}>
                          {treatment.title}
                        </Link>
                      </h3>

                      {/* Short Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
                        {treatment.shortDescription}
                      </p>

                      {/* Key Indications / Symptoms Mini Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {treatment.symptoms.slice(0, 2).map((sym, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg truncate max-w-full"
                          >
                            • {sym}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-slate-100 mt-2">
                    <Link
                      href={`/treatments/${treatment.slug}`}
                      className="text-xs font-bold text-neo-navy hover:text-neo-red flex items-center gap-1.5 transition-colors group/link py-2"
                    >
                      <span>{meta.hasVideo ? "Watch Video & Guide" : "Explore Procedure & 3D"}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => {
                        setModalReason(treatment.title);
                        setIsModalOpen(true);
                      }}
                      className="py-2.5 px-4 rounded-xl bg-neo-red hover:bg-neo-red-hover text-white text-xs font-bold shadow-md shadow-neo-red/20 transition-all flex items-center gap-1.5 active:scale-95"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 5. In-House Dental Lab & Quality Assurance Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-800 text-xs font-bold">
              <Microscope className="w-4 h-4 text-amber-600" />
              <span>Direct Laboratory Advantage</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-neo-navy leading-tight">
              On-Site Dental Lab for Same-Day Precision & Custom Crafting
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Unlike ordinary clinics that outsource prosthetics to third-party labs, NeoDental features an in-house dental laboratory directly on 14th Street, Eastleigh. Our dental technicians work hand-in-hand with your dentist for custom Gold, Silver, and aesthetic restorations with flawless shade matching.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-slate-700">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Zero shipping delays
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Confirmed Gold & Silver options
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Chairside adjustments
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto flex-shrink-0">
            <Link
              href="/lab"
              className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-neo-navy hover:bg-neo-navy-light text-white font-bold text-xs shadow-md transition-colors"
            >
              <span>Explore In-House Dental Lab</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              type="button"
              onClick={() => {
                setModalReason("Direct Dental Lab Consultation");
                setIsModalOpen(true);
              }}
              className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-slate-100 hover:bg-slate-200 text-neo-navy font-bold text-xs transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-neo-red" />
              <span>Ask a Dental Technician</span>
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Modal */}
      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultReason={modalReason}
      />
    </div>
  );
}
