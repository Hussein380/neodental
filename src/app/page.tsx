import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { SymptomTriage } from "@/components/home/SymptomTriage";
import { CallToAction } from "@/components/home/CallToAction";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section with Interactive Card Carousel */}
      <HeroSection />

      {/* 2. "What Brings You to NeoDental?" Symptom Triage Explorer */}
      <SymptomTriage />

      {/* 3. Final Appointment & WhatsApp Conversion CTA */}
      <CallToAction />
    </div>
  );
}
