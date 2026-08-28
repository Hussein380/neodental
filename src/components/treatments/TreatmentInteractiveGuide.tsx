"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { RootCanalViewer } from "@/components/3d/RootCanalViewer";
import { DecayStageViewer } from "@/components/3d/DecayStageViewer";
import { ImplantViewer } from "@/components/3d/ImplantViewer";
import { DentalLabViewer } from "@/components/3d/DentalLabViewer";
import { InteractiveTooth } from "@/components/3d/InteractiveTooth";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  Eye,
  Layers,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Maximize,
  Clapperboard,
  RotateCcw,
} from "lucide-react";

interface TreatmentInteractiveGuideProps {
  slug: string;
  title: string;
  category: string;
  interactiveModelType?: "anatomy" | "decay" | "root-canal" | "implant" | "crown" | "lab";
}

export const TreatmentInteractiveGuide: React.FC<TreatmentInteractiveGuideProps> = ({
  slug,
  title,
  category,
  interactiveModelType,
}) => {
  // Video mapping for treatments with video animations
  const treatmentVideoMap: Record<
    string,
    { video: string; title: string; subtitle: string; callouts: string[] }
  > = {
    "root-canal-treatment": {
      video: "/videos/rootcanal.mp4",
      title: "Full Endodontic Canal Cleansing Motion",
      subtitle: "See how specialized micro-instruments clean, disinfect, and seal inner root canals",
      callouts: [
        "100% Painless: Local anesthesia ensures complete comfort",
        "Micro-Cleaning: Removes diseased pulp from delicate root canals",
        "Hermetic Seal: Prevents future infection and preserves your natural tooth",
      ],
    },
    "dental-crowns": {
      video: "/videos/crown.mp4",
      title: "Precision Dental Crown Placement & Fit",
      subtitle: "Watch how a custom Gold, Silver, or porcelain cap restores tooth strength",
      callouts: [
        "Crafted in our On-Site Dental Lab on 14th Street",
        "Micron-accurate bite adaptation & gumline seal",
        "Confirmed durable Gold and Silver alloy selections",
      ],
    },
    "dental-implants": {
      video: "/videos/implant.mp4",
      title: "Permanent Dental Implant Anchoring",
      subtitle: "Watch how titanium implants integrate seamlessly with the jawbone",
      callouts: [
        "Permanent artificial root foundation preventing bone loss",
        "Does not damage neighboring healthy teeth",
        "Restores natural biting power and chewing confidence",
      ],
    },
    "cosmetic-dentistry-veneers": {
      video: "/videos/veneers.mp4",
      title: "Ultra-Thin Aesthetic Veneer Application",
      subtitle: "See how custom porcelain shells transform tooth symmetry and shade",
      callouts: [
        "Minimal enamel preparation for maximum tooth preservation",
        "Custom shade-matched to your natural facial aesthetics",
        "Instantly closes gaps and corrects minor tooth wear",
      ],
    },
    "restorative-fillings": {
      video: "/videos/filling.mp4",
      title: "Tooth-Colored Composite Filling & Bonding",
      subtitle: "Watch how gentle decay removal and composite curing restores tooth structure",
      callouts: [
        "Preserves maximum healthy tooth structure",
        "Completed in 30–45 minutes in a single gentle visit",
        "Seamless shade matching for invisible, durable repairs",
      ],
    },
    "orthodontic-assessment": {
      video: "/videos/braces.mp4",
      title: "Teeth Alignment & Corrective Biomechanics",
      subtitle: "See how progressive orthodontic tension aligns crowded and gapped teeth",
      callouts: [
        "Corrects overbite, underbite, and spacing issues",
        "Significantly improves brushing access and gum health",
        "Customized alignment roadmaps for adults and teens",
      ],
    },
  };

  const videoData = treatmentVideoMap[slug];

  // Specific high-definition procedure illustration mapping
  const procedureImageMap: Record<
    string,
    { image: string; title: string; subtitle: string; callouts: string[] }
  > = {
    "root-canal-treatment": {
      image: "/images/procedure_rootcanal_guide.jpg",
      title: "Endodontic Canal Disinfection & Bio-Sealing",
      subtitle: "Microscopic cross-section of internal canal shaping and hermetic seal",
      callouts: [
        "100% Painless: Local anesthesia numbs the tooth completely",
        "Deep Disinfection: Cleans all micro-canals with biocompatible rinse",
        "Gutta-Percha Seal: Prevents bacterial reinfection for long-term tooth preservation",
      ],
    },
    "dental-crowns": {
      image: "/images/procedure_crowns_guide.jpg",
      title: "Precision Lab-Crafted Gold, Silver & Restorative Caps",
      subtitle: "Custom-milled encasement protecting weakened teeth from fracture",
      callouts: [
        "Direct Collaboration with On-Site Eastleigh Laboratory",
        "Confirmed durable Gold and Silver alloy selections",
        "Micron-accurate bite adaptation & margin sealing",
      ],
    },
    "cosmetic-dentistry-veneers": {
      image: "/images/service_cosmetic_1787733042890.jpg",
      title: "Aesthetic Porcelain Veneers & Smile Makeovers",
      subtitle: "Natural smile contouring and precision shade harmony",
      callouts: [
        "Conservative tooth preservation approach",
        "Tailored to your individual facial symmetry",
        "Radiant, durable enamel-like finish",
      ],
    },
    "emergency-pain-relief": {
      image: "/images/service_emergency_1787732956743.jpg",
      title: "Immediate Acute Pain Stabilization",
      subtitle: "Targeted diagnostics and immediate relief for acute swelling or trauma",
      callouts: [
        "Rapid Diagnostic Assessment on 14th Street",
        "Immediate localized pressure & infection relief",
        "Same-day emergency treatment protocol",
      ],
    },
    "restorative-fillings": {
      image: "/images/service_fillings_1787732991474.jpg",
      title: "Direct Composite Bonding & Cavity Seal",
      subtitle: "Minimally invasive tooth-colored restoration matching natural enamel",
      callouts: [
        "Preserves maximum natural healthy tooth structure",
        "Completed in 30–45 minutes in a single visit",
        "Seamless shade matching for invisible repairs",
      ],
    },
    "dental-implants": {
      image: "/images/service_implants_1787733002450.jpg",
      title: "Permanent Titanium Root Integration",
      subtitle: "Biocompatible anchor anchoring crowns and multi-unit bridges",
      callouts: [
        "Preserves jawbone density and facial structure",
        "No damage to adjacent natural teeth",
        "Permanent, natural chewing function",
      ],
    },
  };

  const procedureData = procedureImageMap[slug] || {
    image: "/images/service_rootcanal_1787732967899.jpg",
    title: `${title} Clinical Overview`,
    subtitle: "Clinical precision and gentle patient care at NeoDental Clinic",
    callouts: [
      "Individualized treatment planning by experienced clinicians",
      "Modern clinical tools and pain-management protocols",
      "Follow-up care and long-term oral health guidance",
    ],
  };

  const [activeTab, setActiveTab] = useState<"media" | "3d">("media");

  // Video playback states
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Strict Viewport Optimization: Pause video when scrolled out of view to avoid scroll jank/lag
  React.useEffect(() => {
    const container = videoContainerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            if (!video.paused) {
              video.pause();
              setIsPlaying(false);
            }
          } else {
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [videoData]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoContainerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      } else {
        videoContainerRef.current.requestFullscreen().catch(() => {});
      }
    }
  };

  const render3DViewer = () => {
    switch (interactiveModelType) {
      case "root-canal":
        return <RootCanalViewer />;
      case "decay":
        return <DecayStageViewer />;
      case "implant":
        return <ImplantViewer />;
      case "lab":
      case "crown":
        return <DentalLabViewer />;
      case "anatomy":
      default:
        return <InteractiveTooth />;
    }
  };

  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-neo-red text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Procedure & Anatomy Explorer</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neo-navy">
            Watch the Procedure & Clinical Breakdown
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            See the real procedure motion video, high-resolution anatomical illustration, and interactive 3D model.
          </p>
        </div>

        {/* View Switcher: Media Showcase vs 3D Model */}
        <div className="inline-flex p-1 rounded-2xl bg-slate-100 border border-slate-200 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveTab("media")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "media"
                ? "bg-white text-neo-navy shadow-sm"
                : "text-slate-600 hover:text-neo-navy"
            }`}
          >
            <Clapperboard className="w-4 h-4 text-neo-red" />
            <span>Video & Clinical Image</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("3d")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "3d"
                ? "bg-white text-neo-navy shadow-sm"
                : "text-slate-600 hover:text-neo-navy"
            }`}
          >
            <Layers className="w-4 h-4 text-neo-clinical" />
            <span>3D Model</span>
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-8">
        {activeTab === "media" ? (
          <div className="space-y-8">
            {/* Split Media Grid: Full Video + Clinical Cross-Section Image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* 1. Full Video Player (if available) or Featured Media */}
              {videoData ? (
                <div
                  ref={videoContainerRef}
                  className="lg:col-span-6 relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-md min-h-[340px] sm:min-h-[420px] flex flex-col justify-between group transform-gpu will-change-transform"
                >
                  <video
                    ref={videoRef}
                    src={videoData.video}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    preload="metadata"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={(e) => {
                      e.currentTarget.currentTime = 0;
                      e.currentTarget.play().catch(() => {});
                    }}
                    className="w-full h-full object-cover absolute inset-0 transform-gpu"
                  />

                  {/* Gradient Overlay for controls */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/25 pointer-events-none" />

                  {/* Top Bar with Badges & Sound Controller */}
                  <div className="relative z-10 p-4 flex items-center justify-between pointer-events-auto">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-wider shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      <span>Full Procedure Video</span>
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={toggleMute}
                        className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors backdrop-blur-md"
                        aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>

                      <button
                        type="button"
                        onClick={handleFullscreen}
                        className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors backdrop-blur-md"
                        aria-label="Fullscreen"
                      >
                        <Maximize className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Bottom Video Controller Info Bar */}
                  <div className="relative z-10 p-4 flex items-center justify-between text-white pointer-events-auto">
                    <div className="pr-4">
                      <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                        {videoData.title}
                      </h4>
                      <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                        {videoData.subtitle}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={togglePlay}
                      className="w-10 h-10 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all flex-shrink-0 active:scale-95 shadow-sm"
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
                    </button>
                  </div>
                </div>
              ) : null}

              {/* 2. High-Definition Clinical Illustration Card */}
              <div
                className={`${
                  videoData ? "lg:col-span-6" : "lg:col-span-12"
                } relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md min-h-[340px] sm:min-h-[420px] flex flex-col justify-end group`}
              >
                <Image
                  src={procedureData.image}
                  alt={procedureData.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/20 pointer-events-none" />

                <div className="relative z-10 p-5 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md inline-block mb-1.5 border border-white/15">
                    Clinical Cross-Section & Details
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white leading-tight">
                    {procedureData.title}
                  </h4>
                  <p className="text-xs text-slate-200 line-clamp-1 mt-0.5">
                    {procedureData.subtitle}
                  </p>
                </div>
              </div>

            </div>

            {/* Clinical Highlights & Safety Guarantee */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {(videoData?.callouts || procedureData.callouts).map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-left"
                >
                  <div className="w-7 h-7 rounded-xl bg-red-100 text-neo-red flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-950 flex items-center gap-3 text-left">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>
                <strong>Compassionate Clinical Guarantee:</strong> All treatments are performed with modern local numbing and patient-first comfort protocols.
              </span>
            </div>
          </div>
        ) : (
          /* 3D Interactive Model Tab */
          <div className="w-full min-h-[480px]">
            {render3DViewer()}
          </div>
        )}
      </div>
    </section>
  );
};
