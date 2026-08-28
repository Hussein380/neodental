"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface DiseaseCard {
  id: string;
  title: string;
  badge: string;
  image?: string;
  videoSrc?: string;
  symptoms: string;
  treatment: string;
}

const DISEASES: DiseaseCard[] = [
  {
    id: "decay",
    title: "Tooth Decay (Cavities)",
    badge: "CARIES",
    image: "/images/disease_decay_1787745508191.jpg",
    symptoms: "Visible dark spots or cavities, food trapping, or brief sensitivity to sugary or cold items.",
    treatment: "We gently remove the decay and restore the tooth structure using durable, tooth-colored composite fillings.",
  },
  {
    id: "gum-disease",
    title: "Gum Disease (Gingivitis)",
    badge: "GUM INFLAMMATION",
    image: "/images/disease_gum_1787745519830.jpg",
    symptoms: "Gums bleeding during brushing, red or swollen gum tissue, or persistent bad breath.",
    treatment: "Professional ultrasonic scaling and polishing to remove plaque and hardened tartar under the gumline.",
  },
  {
    id: "root-canal",
    title: "Pulp Infection (Abscess)",
    badge: "INTERNAL INFECTION",
    image: "/images/service_rootcanal_1787732967899.jpg",
    symptoms: "Severe throbbing pain, pain that wakes you up, or a tender bump/pimple on the gums.",
    treatment: "Endodontic root canal therapy to remove infected pulp, sterilize the canals, and seal the tooth.",
  },
  {
    id: "recession",
    title: "Exposed Roots (Sensitivity)",
    badge: "GUM RECESSION",
    image: "/images/disease_recession_1787745531344.jpg",
    symptoms: "Sharp, temporary twinges of pain from cold water or air, and gums pulling away from the teeth.",
    treatment: "Applying desensitizing sealants, fluoride varnishes, or protective composite bonding over exposed roots.",
  },
  {
    id: "broken",
    title: "Fractured / Chipped Tooth",
    badge: "TRAUMA & CRACKS",
    image: "/images/disease_broken_1787745542094.jpg",
    symptoms: "Sharp enamel edges that cut the tongue, or sharp pain specifically when biting down.",
    treatment: "Restoring form and strength using direct composite bonding or placing a full-coverage protective crown.",
  },
  {
    id: "missing",
    title: "Tooth Loss (Missing Teeth)",
    badge: "MISSING DENTITION",
    image: "/images/disease_missing_1787745554487.jpg",
    symptoms: "Difficulty chewing food, shifting of neighboring teeth, or jawbone shrinking over time.",
    treatment: "Custom dental implants, fixed bridges, or removable partial/full dentures made in our laboratory.",
  },
  {
    id: "alignment",
    title: "Crooked / Crowded Teeth",
    badge: "MALOCCLUSION",
    image: "/images/disease_crooked_1787746764805.jpg",
    symptoms: "Overlapping or rotated teeth, wide spaces between teeth, or difficulty flossing effectively.",
    treatment: "Orthodontic arch alignment using durable metal braces or clear ceramic aligners.",
  },
  {
    id: "discoloration",
    title: "Tooth Discoloration",
    badge: "ESTHETICS",
    image: "/images/disease_stained_1787746775573.jpg",
    symptoms: "Stubborn yellowing, dark lines, or surface staining from coffee, tea, or food stains.",
    treatment: "Professional in-office whitening therapy or custom lab-made veneers for permanent brightness.",
  },
  {
    id: "wisdom",
    title: "Impacted Wisdom Teeth",
    badge: "THIRD MOLARS",
    image: "/images/disease_wisdom_1787747293448.jpg",
    symptoms: "Pressure or throbbing at the back of the jaw, stiffness, or swollen gums behind the last molar.",
    treatment: "Safe clinical extraction under comfortable local anesthesia to prevent damage to neighboring teeth.",
  }
];

export const DiseaseCarousel3D: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // Auto-rotate every 3 seconds, but PAUSE it if a card is expanded
  useEffect(() => {
    if (isExpanded) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % DISEASES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isExpanded]);

  // Reset expansion state when changing slides
  useEffect(() => {
    setIsExpanded(false);
  }, [currentIndex]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % DISEASES.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + DISEASES.length) % DISEASES.length);

  return (
    <div className="relative w-full h-[340px] sm:h-[400px] lg:h-[480px] flex items-center justify-center perspective-[1000px]">
      <div className="relative w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[310px] h-full flex items-center justify-center">
        <AnimatePresence initial={false}>
          {DISEASES.map((card, index) => {
            // Determine relative position using modulo arithmetic for N items
            const len = DISEASES.length;
            const relativeIndex = (index - currentIndex + len) % len;
            
            const isActive = relativeIndex === 0;
            const isRight = relativeIndex === 1;
            const isLeft = relativeIndex === len - 1;
            const isVisible = isActive || isRight || isLeft;

            return (
              <motion.div
                key={card.id}
                className={`absolute inset-y-0 w-full flex flex-col overflow-hidden rounded-3xl bg-white shadow-2xl cursor-pointer ${
                  isActive ? "z-35 cursor-default shadow-slate-300/60" : isRight ? "z-20 shadow-slate-200/40" : "z-10 shadow-slate-200/40"
                }`}
                animate={{
                  x: isActive ? "0%" : isRight ? "45%" : isLeft ? "-45%" : "0%",
                  scale: isActive ? 1 : isVisible ? 0.85 : 0.7,
                  zIndex: isActive ? 35 : isRight ? 20 : isLeft ? 10 : 0,
                  opacity: isActive ? 1 : isVisible ? 0.5 : 0,
                  pointerEvents: isVisible ? "auto" : "none",
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1],
                }}
                onClick={() => {
                  if (isRight) handleNext();
                  if (isLeft) handlePrev();
                  if (isActive) setIsExpanded(!isExpanded);
                }}
              >
                {/* Top: Image (Occupies 58% of the card for maximum clarity) */}
                <div className="relative h-[58%] w-full shrink-0">
                  <Image
                    src={card.image!}
                    alt={card.title}
                    fill
                    priority={isActive}
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 380px, 400px"
                  />
                  {/* Bottom shadow on image to make badge text readable */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  {/* Badge positioned at the bottom left of the image/video */}
                  <div className="absolute bottom-3 left-4 sm:left-5">
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-white drop-shadow-md">
                      {card.badge}
                    </span>
                  </div>
                </div>

                {/* Bottom Half: Content (White Background) with slide-up drawers when expanded */}
                <motion.div 
                  animate={{
                    height: isExpanded && isActive ? "100%" : "42%",
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  className={`absolute bottom-0 inset-x-0 flex flex-col p-4 sm:p-5 bg-white z-10 transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                  onClick={(e) => {
                    // Prevent parent click (which toggles isExpanded) when clicking on details
                    if (isExpanded) {
                      e.stopPropagation();
                    }
                  }}
                >
                  <div className="flex justify-between items-start mb-1">
                    <h3 className={`text-[15px] sm:text-lg font-extrabold leading-snug text-slate-900 ${isExpanded ? '' : 'line-clamp-1'}`}>
                      {card.title}
                    </h3>
                    {isExpanded && (
                      <button 
                        onClick={() => setIsExpanded(false)}
                        className="text-slate-400 hover:text-slate-600 p-1 text-sm font-bold"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                  
                  {/* Render content depending on expansion state */}
                  {!isExpanded ? (
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed flex-1 line-clamp-1 sm:line-clamp-2">
                      <span className="font-semibold text-slate-700">Symptoms:</span> {card.symptoms}
                    </p>
                  ) : (
                    <div className="flex-1 overflow-y-auto pr-1 py-1 space-y-3 text-xs sm:text-sm text-slate-600">
                      <div className="space-y-1">
                        <span className="font-bold text-slate-800 block uppercase tracking-wider text-[10px]">What to look for (Symptoms):</span>
                        <p className="leading-relaxed">{card.symptoms}</p>
                      </div>
                      <div className="space-y-1 pt-2 border-t border-slate-100">
                        <span className="font-bold text-red-600 block uppercase tracking-wider text-[10px]">How NeoDental Treats It:</span>
                        <p className="leading-relaxed">{card.treatment}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Learn More link toggler */}
                  <div 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-xs font-bold text-red-600 cursor-pointer"
                  >
                    <span>{isExpanded ? "Close Details" : "Read Full Details"}</span>
                    <span className="text-base leading-none">
                      {isExpanded ? "←" : "→"}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Indicators */}
      <div className="absolute -bottom-8 flex items-center justify-center gap-2 flex-wrap max-w-full px-4">
        {DISEASES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex
                ? "w-6 sm:w-8 h-1.5 bg-red-600"
                : "w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
