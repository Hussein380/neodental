import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { treatmentsData } from "@/content/treatments";
import { TreatmentBookingButton } from "./TreatmentBookingButton";
import { TreatmentInteractiveGuide } from "@/components/treatments/TreatmentInteractiveGuide";
import {
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  Clock,
  Sparkles,
  Phone,
  MessageSquare,
  ChevronLeft,
  Calendar,
} from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return treatmentsData.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const treatment = treatmentsData.find((t) => t.slug === params.slug);
  if (!treatment) return { title: "Treatment Not Found" };

  const url = `https://neodentals.com/treatments/${treatment.slug}`;

  return {
    title: treatment.seoTitle,
    description: treatment.seoDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: treatment.seoTitle,
      description: treatment.seoDescription,
      url,
      siteName: "NeoDental Clinic",
      locale: "en_KE",
      type: "article",
      images: [
        {
          url: "https://neodentals.com/logo.png",
          width: 800,
          height: 600,
          alt: `${treatment.title} - NeoDental Clinic Eastleigh`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: treatment.seoTitle,
      description: treatment.seoDescription,
    },
  };
}

export default function TreatmentDetailPage({ params }: Props) {
  const treatment = treatmentsData.find((t) => t.slug === params.slug);

  if (!treatment) {
    notFound();
  }

  // Structured Data 1: MedicalProcedure Schema
  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: treatment.title,
    description: treatment.fullDescription,
    bodyLocation: "Teeth, Gums, Oral Cavity",
    procedureType: "NoninvasiveProcedure",
    howPerformed: treatment.processSteps.map((s) => `${s.step}. ${s.title}: ${s.description}`).join(" "),
    provider: {
      "@type": "Dentist",
      name: "NeoDental Clinic",
      address: {
        "@type": "PostalAddress",
        streetAddress: "14th Street, 1st Avenue, Eastleigh",
        addressLocality: "Eastleigh",
        addressRegion: "Nairobi",
        addressCountry: "KE",
      },
      telephone: "+254729884108",
      url: "https://neodentals.com",
    },
  };

  // Structured Data 2: FAQPage Schema for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: treatment.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  // Structured Data 3: BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://neodentals.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Treatments",
        item: "https://neodentals.com/treatments",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: treatment.title,
        item: `https://neodentals.com/treatments/${treatment.slug}`,
      },
    ],
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Inject Google SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href="/treatments"
          prefetch={true}
          className="inline-flex items-center gap-2 text-sm font-bold text-neo-blue-gray hover:text-neo-red transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to All Dental Treatments</span>
        </Link>
      </div>

      {/* 1. Visual Clinical Guide & 3D Explorer (VIDEO AT THE VERY TOP) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-left">
        <TreatmentInteractiveGuide
          slug={treatment.slug}
          title={treatment.title}
          category={treatment.category}
          interactiveModelType={treatment.interactiveModelType}
        />
      </div>

      {/* 2. Hero Overview Banner (Now beneath the video) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-br from-neo-navy via-neo-navy-light to-neo-navy text-white rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-card">
          <div className="max-w-3xl space-y-5 relative z-10 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-neo-clinical-light">
              <span className="w-2 h-2 rounded-full bg-neo-red" />
              <span>{treatment.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {treatment.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {treatment.shortDescription}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <TreatmentBookingButton treatmentTitle={treatment.title} />

              <a
                href="https://wa.me/254729884108?text=Hello%20NeoDental%20Clinic,%20I%20have%20a%20question%20about%20your%20treatment."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-7 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-bold border border-white/20 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Content Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 text-left">
        {/* Section: Overview & Symptoms */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Full Description */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-sky-700 mb-4">
                Understanding This Dental Treatment
              </h2>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                {treatment.fullDescription}
              </p>
            </div>

            {/* Key Benefits Card */}
            <div className="bg-neo-ice p-7 rounded-3xl border border-neo-clinical/20 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-sky-700 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-600" />
                Key Patient Benefits
              </h3>
              <div className="space-y-2.5">
                {treatment.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Indications Card */}
          <div className="lg:col-span-5 bg-white p-7 rounded-3xl border border-neo-clinical/25 shadow-card space-y-4">
            <h3 className="text-lg font-bold text-sky-700 border-b border-slate-100 pb-3.5">
              When Is This Treatment Indicated?
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              You may benefit from a consultation if you experience any of the following symptoms:
            </p>
            <div className="space-y-3">
              {treatment.symptoms.map((symptom, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-neo-red flex-shrink-0 mt-2" />
                  <span>{symptom}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section: Clinical Step-by-Step Pathway */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Clinical Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-sky-700">
              What Happens During Your Visit (Step-by-Step)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {treatment.processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-neo-ice rounded-3xl border border-neo-clinical/20 p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-2xl bg-sky-600 text-white text-xs font-bold flex items-center justify-center mb-4 font-mono">
                    0{step.step}
                  </div>
                  <h3 className="text-lg font-bold text-sky-700 mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: FAQs */}
        {treatment.faq.length > 0 && (
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-sky-700">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {treatment.faq.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-3xl border border-neo-clinical/20 shadow-xs space-y-2.5"
                >
                  <h3 className="text-base font-bold text-sky-700">
                    {item.question}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="bg-neo-ice p-6 rounded-2xl border border-neo-clinical/20 text-xs text-neo-muted flex items-start gap-2.5">
          <ShieldAlert className="w-5 h-5 text-neo-blue-gray flex-shrink-0 mt-0.5" />
          <span>
            Educational information only. Actual clinical recommendations require an individualized in-person assessment by a qualified dental professional at NeoDental Clinic.
          </span>
        </div>
      </div>
    </div>
  );
}
