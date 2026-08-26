"use client";

import React from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import {
  MessageSquare,
  Users,
  Search,
  HelpCircle,
  FileText,
  HeartHandshake,
  SmilePlus,
} from "lucide-react";

export const PatientJourney: React.FC = () => {
  const { t } = useLanguage();

  const journeySteps = [
    {
      step: "01",
      title: "Contact Clinic",
      description: "Reach out via WhatsApp or phone to pick a convenient date & time.",
      icon: <MessageSquare className="w-5 h-5 text-neo-red" />,
    },
    {
      step: "02",
      title: "Warm Consultation",
      description: "Meet our clinic team in a calm, respectful, anxiety-free setting.",
      icon: <Users className="w-5 h-5 text-neo-clinical" />,
    },
    {
      step: "03",
      title: "Gentle Examination",
      description: "Thorough clinical assessment to inspect teeth, gums, and oral tissues.",
      icon: <Search className="w-5 h-5 text-neo-navy" />,
    },
    {
      step: "04",
      title: "Understanding Issues",
      description: "We explain findings clearly using visual 3D models—no medical jargon.",
      icon: <HelpCircle className="w-5 h-5 text-neo-red" />,
    },
    {
      step: "05",
      title: "Custom Care Plan",
      description: "Review all appropriate treatment options together with clear transparency.",
      icon: <FileText className="w-5 h-5 text-neo-clinical" />,
    },
    {
      step: "06",
      title: "Gentle Treatment",
      description: "Modern care supported by our on-site dental lab for precision fit.",
      icon: <HeartHandshake className="w-5 h-5 text-neo-navy" />,
    },
    {
      step: "07",
      title: "Aftercare & Health",
      description: "Personalized advice to maintain your healthy smile for life.",
      icon: <SmilePlus className="w-5 h-5 text-neo-red" />,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Your Patient Journey"
          title="Clear, calm dental care at"
          highlight="every single step."
          subtitle="We remove dental anxiety and uncertainty through transparent communication, gentle pacing, and respectful clinical care."
        />

        {/* 7-Step Clear Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {journeySteps.map((item, idx) => (
            <div
              key={item.step}
              className={`bg-neo-ice/90 rounded-3xl border border-neo-clinical/20 p-7 flex flex-col justify-between hover:bg-white hover:border-neo-clinical/50 hover:shadow-card transition-all duration-300 relative group ${
                idx === 6 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-2xl font-black text-neo-navy/25 group-hover:text-neo-red transition-colors">
                    {item.step}
                  </span>
                  <div className="p-3 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-neo-navy mb-2.5 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-neo-muted leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/70 flex items-center justify-between">
                <span className="text-[11px] font-bold text-neo-blue-gray uppercase tracking-wider">
                  Step {idx + 1} of 7
                </span>
                <span className="w-2 h-2 rounded-full bg-neo-clinical" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
