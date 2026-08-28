"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What happens during my first visit to NeoDental Clinic?",
    answer: "Your initial visit includes a warm consultation, a gentle and thorough clinical examination of your teeth, gums, and oral tissues, and an open discussion about any symptoms or aesthetic goals you may have. We explain all findings clearly using visual diagrams and 3D models before recommending any treatment.",
  },
  {
    question: "Should I visit the dentist even if I have no tooth pain?",
    answer: "Yes, absolutely. Many dental conditions—such as early tooth decay, enamel micro-cracks, and early gum inflammation—develop silently without pain until advanced stages. Regular 6-month check-ups allow us to catch and treat minor issues early, preserving your natural teeth.",
  },
  {
    question: "Does a severe toothache always require tooth extraction?",
    answer: "No. At NeoDental, our primary philosophy is to preserve and save your natural teeth whenever biologically feasible. Root canal therapy, deep restorations, and protective crowns are often effective solutions to relieve acute pain while keeping your natural tooth firmly anchored.",
  },
  {
    question: "What types of dental crowns are available at NeoDental?",
    answer: "NeoDental provides custom-crafted crowns designed with support from our on-site dental laboratory, including confirmed options in durable Silver crowns and classic Gold crowns, alongside restorative caps.",
  },
  {
    question: "How does having an in-house dental laboratory benefit patients?",
    answer: "Having our dental laboratory directly on 14th Street in Eastleigh enables seamless collaboration between our treating clinicians and dental technicians. This results in faster turnaround times, exact custom fit for your bite, and immediate on-site shade and contour adjustments.",
  },
  {
    question: "What are your opening hours and do you accept weekend appointments?",
    answer: "NeoDental Clinic is open 7 days a week, Monday through Sunday, from 9:00 AM to 7:00 PM. We are always ready to accommodate weekend and evening dental visits. Operating hours may vary slightly on public holidays.",
  },
  {
    question: "How can I book an appointment quickly?",
    answer: "You can book directly via WhatsApp at 0729 884 108 using the booking buttons throughout this website, or by calling our clinic lines at 0729 884 108 or 0721 284 884.",
  },
];

export const FAQSection: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-neo-ice relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Frequently Asked Questions"
          title="Understanding your visit &"
          highlight="dental care."
          subtitle="Answers to common questions about appointments, treatments, and oral healthcare at NeoDental Clinic."
        />

        {/* Accordion List */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl border border-neo-clinical/20 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-neo-navy hover:text-neo-red transition-colors text-base sm:text-lg"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neo-clinical flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-neo-red" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-neo-muted leading-relaxed border-t border-slate-100 animate-fade-in font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
