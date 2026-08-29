"use client";

import React, { useState } from "react";
import Link from "next/link";
import { educationalArticles } from "@/content/education";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FAQSection } from "@/components/home/FAQSection";
import { useLanguage } from "@/context/LanguageContext";
import {
  BookOpen,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function LearnHubPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Topics" },
    { id: "basics", label: "Dental Basics & Anatomy" },
    { id: "problems", label: "Common Dental Problems" },
    { id: "treatments", label: "Treatment Guides" },
    { id: "prevention", label: "Prevention & Hygiene" },
  ];

  const filteredArticles =
    activeCategory === "all"
      ? educationalArticles
      : educationalArticles.filter((art) => art.category === activeCategory);

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeader
          badge="NeoDental Learn"
          title="Empowering patients through"
          highlight="clear dental education."
          subtitle="Discover how your teeth work, understand common conditions, and learn evidence-based habits to protect your smile for a lifetime."
        />

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? "bg-neo-navy text-white shadow-sm"
                  : "bg-neo-ice text-neo-blue-gray hover:text-neo-navy hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-neo-ice/80 rounded-2xl border border-neo-clinical/20 p-7 flex flex-col justify-between hover:bg-white hover:border-neo-clinical/50 hover:shadow-card transition-all duration-300 group text-left"
            >
              <div>
                {/* Category & Clinical Status Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neo-clinical">
                    {article.category}
                  </span>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 font-semibold border border-sky-200/60">
                    Draft • Educational
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-sky-700 mb-3 group-hover:text-neo-red transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs md:text-sm text-neo-muted leading-relaxed mb-6">
                  {article.summary}
                </p>

                {/* Key Takeaways Preview */}
                <div className="space-y-1.5 pt-3 border-t border-slate-200/60 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neo-blue-gray block mb-1">
                    Key Highlights:
                  </span>
                  {article.keyPoints.slice(0, 2).map((pt, i) => (
                    <div key={i} className="text-xs text-neo-dark flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neo-clinical flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <Link
                  href={`/learn/${article.slug}`}
                  prefetch={true}
                  className="text-xs font-bold text-neo-navy hover:text-neo-red flex items-center gap-1 transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                <span className="text-[10px] font-semibold text-neo-blue-gray">
                  3 min read
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Frequently Asked Questions Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-16 border-t border-slate-100">
        <FAQSection />
      </div>
    </div>
  );
}
