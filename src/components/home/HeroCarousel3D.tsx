"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { treatmentsData } from "@/content/treatments";

// Map treatments to images and formatted cards
const CARDS = treatmentsData.map((t, i) => {
  let image = "";
  if (t.id === "emergency-pain-relief") image = "/images/service_emergency_1787732956743.jpg";
  else if (t.id === "root-canal-treatment") image = "/images/service_rootcanal_1787732967899.jpg";
  else if (t.id === "dental-crowns") image = "/images/service_crowns_1787732979887.jpg";
  else if (t.id === "restorative-fillings") image = "/images/service_fillings_1787732991474.jpg";
  else if (t.id === "dental-implants") image = "/images/service_implants_1787733002450.jpg";
  else if (t.id === "cosmetic-dentistry-veneers") image = "/images/service_cosmetic_1787733042890.jpg";
  else if (t.id === "orthodontic-assessment") image = "/images/service_ortho_new_1787740812764.jpg";
  else if (t.id === "removable-appliances") image = "/images/service_dentures_new_1787740801330.jpg";
  else if (t.id === "preventive-examination") image = "/images/service_preventive_new_1787740825070.jpg";
  else if (t.id === "dental-laboratory-services") image = "/images/service_lab_new_1787740837341.jpg";

  return {
    id: t.id,
    title: t.title.split("(")[0].trim(), // Clean up title
    description: t.fullDescription || t.shortDescription, // Use full description for expansion
    image,
    badge: t.category.toUpperCase(),
  };
});

export const HeroCarousel3D: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // Auto-rotate every 3 seconds, but PAUSE it if a card is expanded
  useEffect(() => {
    if (isExpanded) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CARDS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isExpanded]);

  // Reset expansion state when changing slides
  useEffect(() => {
    setIsExpanded(false);
  }, [currentIndex]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % CARDS.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + CARDS.length) % CARDS.length);

  return (
    <div className="relative w-full h-[340px] sm:h-[400px] lg:h-[480px] flex items-center justify-center perspective-[1000px]">
      <div className="relative w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[310px] h-full flex items-center justify-center">
        <AnimatePresence initial={false}>
          {CARDS.map((card, index) => {
            // Determine relative position using modulo arithmetic for N items
            const len = CARDS.length;
            const relativeIndex = (index - currentIndex + len) % len;
            
            const isActive = relativeIndex === 0;
            const isRight = relativeIndex === 1;
            const isLeft = relativeIndex === len - 1;
            const isVisible = isActive || isRight || isLeft;

            return (
              <motion.div
                key={card.id}
                className={`absolute inset-y-0 w-full flex flex-col overflow-hidden rounded-3xl bg-white shadow-2xl cursor-pointer ${
                  isActive ? "z-30 cursor-default shadow-slate-300/60" : isRight ? "z-20 shadow-slate-200/40" : "z-10 shadow-slate-200/40"
                }`}
                animate={{
                  x: isActive ? "0%" : isRight ? "45%" : isLeft ? "-45%" : "0%",
                  scale: isActive ? 1 : isVisible ? 0.85 : 0.7,
                  zIndex: isActive ? 30 : isRight ? 20 : isLeft ? 10 : 0,
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
                <div className="relative h-[58%] w-full shrink-0 bg-slate-900 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    priority={true}
                    loading="eager"
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 380px, 400px"
                  />
                  {/* Bottom shadow on image to make badge text readable */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  {/* Badge positioned at the bottom left of the image */}
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
                  
                  <p className={`text-xs sm:text-sm text-slate-500 leading-relaxed flex-1 ${
                    isExpanded ? "overflow-y-auto pr-1 py-1" : "line-clamp-1 sm:line-clamp-2"
                  }`}>
                    {card.description}
                  </p>
                  
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
        {CARDS.map((_, idx) => (
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
