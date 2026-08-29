import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { educationalArticles } from "@/content/education";
import { TreatmentBookingButton } from "@/app/treatments/[slug]/TreatmentBookingButton";
import {
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  ChevronLeft,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Info,
} from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return educationalArticles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = educationalArticles.find((a) => a.slug === params.slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      url: `https://neodentals.com/learn/${article.slug}`,
    },
  };
}

export default function EducationalArticlePage({ params }: Props) {
  const article = educationalArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 text-sm font-bold text-neo-blue-gray hover:text-neo-red transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to NeoDental Learn</span>
        </Link>
      </div>

      {/* 1. Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        <header className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-neo-clinical px-3 py-1 rounded-full bg-neo-ice">
              {article.category}
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
              Review Status: {article.reviewStatus.toUpperCase()}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-sky-700 tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {article.summary}
          </p>
        </header>

        {/* 2. Main Educational Content Card */}
        <section className="bg-neo-ice/80 p-8 sm:p-10 rounded-3xl border border-neo-clinical/20 space-y-4">
          <h2 className="text-2xl font-extrabold text-sky-700">
            Clinical Explanation & Biological Fundamentals
          </h2>
          <p className="text-base text-slate-700 leading-relaxed font-normal">
            {article.content}
          </p>
        </section>

        {/* 3. Key Takeaways Card */}
        <section className="bg-white p-8 sm:p-10 rounded-3xl border border-neo-clinical/25 shadow-card space-y-5">
          <h3 className="text-lg font-bold text-sky-700 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-sky-600" />
            Key Clinical Points to Remember
          </h3>
          <div className="space-y-3">
            {article.keyPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. What You Can Do at Home */}
        <section className="bg-neo-ice p-8 sm:p-10 rounded-3xl border border-slate-200/80 space-y-5">
          <h3 className="text-lg font-bold text-sky-700 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-neo-red" />
            Actionable Steps for Daily Oral Care
          </h3>
          <ul className="space-y-2.5 text-sm sm:text-base text-slate-700">
            {article.whatToDo.map((step, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-sky-500 flex-shrink-0 mt-2" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 5. When to Seek Professional Dental Care */}
        <section className="bg-red-50/80 p-8 sm:p-10 rounded-3xl border border-red-200 space-y-3">
          <h3 className="text-lg font-bold text-neo-red flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-neo-red" />
            When Should You Visit NeoDental Clinic?
          </h3>
          <p className="text-sm sm:text-base text-slate-900 font-medium leading-relaxed">
            {article.whenToSeeDentist}
          </p>
        </section>

        {/* 6. Appointment Action Strip */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-sky-700">
              Have questions about this dental condition?
            </h4>
            <p className="text-xs text-neo-muted">
              Speak directly with our clinic team in Eastleigh, Nairobi.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <TreatmentBookingButton treatmentTitle={article.title} />
          </div>
        </div>

        {/* Educational Disclaimer */}
        <div className="bg-neo-ice p-5 rounded-2xl border border-neo-clinical/15 text-xs text-neo-muted flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-neo-blue-gray flex-shrink-0 mt-0.5" />
          <span>
            This educational material is provided for patient health awareness and does not replace individualized diagnostic assessment. Always consult a licensed dentist for personalized recommendations.
          </span>
        </div>
      </article>
    </div>
  );
}
