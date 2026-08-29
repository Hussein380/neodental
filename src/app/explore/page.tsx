import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "@/components/common/SectionHeader";

const EXPLORE_ITEMS = [
  { slug: "root-canal-treatment", label: "Root Canal Treatment", image: "/images/service_rootcanal_1787732967899.jpg", tags: "Deep Infection · Pulpitis · Save Natural Tooth" },
  { slug: "dental-crowns", label: "Dental Crowns & Bridges", image: "/images/procedure_crowns_guide.jpg", tags: "Post-Root Canal · Structural Cap · High Longevity" },
  { slug: "restorative-fillings", label: "Restorative Fillings", image: "/images/service_fillings_1787732991474.jpg", tags: "Cavity Repair · Enamel Bond · Single Visit" },
  { slug: "dental-implants", label: "Dental Implants", image: "/images/service_implants_1787733002450.jpg", tags: "Missing Root · Jawbone Health · Permanent Tooth" },
  { slug: "cosmetic-dentistry-veneers", label: "Cosmetic Veneers", image: "/images/service_cosmetic_1787733042890.jpg", tags: "Stained Teeth · Gap Closure · Smile Harmony" },
  { slug: "orthodontic-assessment", label: "Orthodontic Assessment", image: "/images/service_ortho_new_1787740812764.jpg", tags: "Crowded Teeth · Overbite · All Ages" },
  { slug: "removable-appliances", label: "Removable Appliances", image: "/images/service_dentures_new_1787740801330.jpg", tags: "Multiple Missing Teeth · Natural Mastication · Comfort Base" },
  { slug: "preventive-examination", label: "Preventive Examination", image: "/images/service_preventive_new_1787740825070.jpg", tags: "6-Month Checkup · Deep Scaling · Early Detection" },
  { slug: "dental-laboratory-services", label: "Dental Laboratory Services", image: "/images/service_lab_new_1787740837341.jpg", tags: "Direct Custom Fit · Fast Adjustments · 14th St Eastleigh" },
  { slug: "emergency-pain-relief", label: "Emergency Pain Relief", image: "/images/service_emergency_1787732956743.jpg", tags: "Acute Pain · Swelling · Broken Tooth" },
];

export default function ExplorePage() {
  return (
    <div className="pt-28 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeader
          badge="Explore Treatments"
          title="Treatment Image Gallery"
          highlight="See every procedure illustration"
          subtitle="Browse high‑resolution clinical images for each dental treatment. Click any image to learn more about the procedure and watch the procedure video."
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPLORE_ITEMS.map(({ slug, label, image, tags }) => (
            <Link
              key={slug}
              href={`/treatments/${slug}`}
              className="group block bg-white rounded-3xl border border-slate-200 hover:border-neo-red hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative w-full h-64 overflow-hidden bg-slate-950">
                <Image
                  src={image}
                  alt={label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-extrabold text-slate-900 mb-1 group-hover:text-neo-red transition-colors capitalize">
                  {label}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">{tags}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

