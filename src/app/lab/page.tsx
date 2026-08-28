"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/common/SectionHeader";
import { WhatsAppModal } from "@/components/common/WhatsAppModal";
import {
  Cpu,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  Layers,
  Award,
  Zap,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
} from "lucide-react";

export default function DentalLabPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lab video player
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  // Auto-play (muted) when section scrolls into view
  useEffect(() => {
    const container = videoContainerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.muted = true;
            video.play().then(() => {
              setIsPlaying(true);
              setHasStarted(true);
            }).catch(() => {});
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
      setHasStarted(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) video.requestFullscreen().catch(() => {});
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <SectionHeader
          badge="In-House Dental Laboratory"
          title="From custom design to"
          highlight="your restored smile."
          subtitle="NeoDental features an on-site dental laboratory on 14th Street in Eastleigh, where custom crowns, bridges, and dental appliances are handcrafted with precision."
        />

        {/* ── LAB VIDEO HERO ── */}
        <div ref={videoContainerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">

          {/* LEFT — compact video player */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-950 shadow-xl shadow-slate-900/25 border border-slate-800/40">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <video
                ref={videoRef}
                src="/videos/labaratory.mp4"
                preload="metadata"
                muted
                playsInline
                loop
                onPlay={() => { setIsPlaying(true); setHasStarted(true); }}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              {/* Big play overlay before first play */}
              {!hasStarted && (
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label="Play lab video"
                  className="absolute inset-0 flex items-center justify-center z-20 group"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-neo-red/90 hover:bg-neo-red backdrop-blur-md flex items-center justify-center shadow-xl shadow-red-600/40 transition-all duration-200 group-hover:scale-110 active:scale-95">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white ml-0.5" />
                  </div>
                </button>
              )}

              {/* Unmute nudge */}
              {hasStarted && isMuted && (
                <button
                  type="button"
                  onClick={toggleMute}
                  className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 hover:bg-neo-red backdrop-blur-md text-white text-[11px] font-bold transition-all active:scale-95"
                  aria-label="Unmute video"
                >
                  <VolumeX className="w-3.5 h-3.5" />
                  Tap to unmute
                </button>
              )}

              {/* Bottom controls */}
              <div className="absolute bottom-0 inset-x-0 z-20 px-4 py-3 flex items-center justify-between">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause" : "Play"}
                  className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white flex items-center justify-center transition-all active:scale-90"
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                </button>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                    className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white flex items-center justify-center transition-all active:scale-90"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={handleFullscreen}
                    aria-label="Fullscreen"
                    className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white flex items-center justify-center transition-all active:scale-90"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Caption bar */}
            <div className="px-4 py-3 bg-slate-900 flex items-center justify-between gap-2">
              <div>
                <p className="text-white font-bold text-xs sm:text-sm leading-snug line-clamp-1">
                  How Custom Dental Restorations Are Crafted
                </p>
                <p className="text-slate-400 text-[11px] mt-0.5">Dental Lab · Precision Fabrication Process</p>
              </div>
              <span className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-600/20 border border-amber-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                Education
              </span>
            </div>
          </div>

          {/* RIGHT — description */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-100">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse flex-shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold text-amber-700 tracking-wide uppercase">
                Lab Restorations
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-neo-navy leading-tight">
              Precision-Crafted{" "}
              <span className="text-amber-600">Dental Restorations</span>
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Modern dental laboratories use highly specialised equipment to fabricate crowns, bridges, and prosthetics with micron-level accuracy. At NeoDental, our on-site lab works directly with treating clinicians to ensure a perfect fit and shade match — no external delays.
            </p>

            <ul className="space-y-2.5 text-sm text-slate-700">
              {[
                "Custom gold & silver crown fabrication on-site",
                "Direct shade matching with treating clinician",
                "Same-day adjustments — no external lab delays",
                "Precision ceramic bridges and partial dentures",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="mt-1 w-4 h-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 text-[10px] font-extrabold">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 py-3 px-7 rounded-full bg-neo-navy hover:bg-neo-navy-light text-white font-bold text-sm shadow-lg transition-all active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              Consult on Custom Restorations
            </button>
          </div>

        </div>
        {/* Real Lab Photography Showcase Card */}
        <div className="bg-white rounded-3xl border border-neo-clinical/25 shadow-card overflow-hidden mb-16 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] bg-slate-900 overflow-hidden group">
              <Image
                src="/images/hero_dental_lab.jpg"
                alt="Skilled technician crafting gold crowns in NeoDental laboratory workbench"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-neo-red" />
                  <span>On-Site Laboratory Facility</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Crafting Custom Gold & Silver Dental Restorations
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1">
                  14th Street, 1st Avenue, Eastleigh, Nairobi
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-neo-blue-gray block">
                  Why In-House Fabrication Matters:
                </span>
                <p className="text-base text-neo-dark leading-relaxed font-normal">
                  In conventional dental practices, crowns and appliances are sent to external third-party labs, which often causes long delays and multiple appointments for minor adjustments.
                </p>
                <p className="text-base text-neo-dark leading-relaxed font-normal">
                  At NeoDental Clinic, our dental technicians work directly with our treating clinicians on 14th Street in Eastleigh, ensuring micron-level accuracy, direct shade matching, and immediate custom fitting.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="py-3.5 px-7 rounded-full bg-neo-red hover:bg-neo-red-hover text-white text-sm font-bold shadow-md hover:shadow-glow transition-all flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5 fill-white" />
                  <span>Consult on Custom Restorations</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Value Proposition Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-16">
          <div className="bg-neo-ice p-7 rounded-3xl border border-neo-clinical/20 space-y-2.5">
            <Sparkles className="w-6 h-6 text-neo-red" />
            <h3 className="font-extrabold text-neo-navy text-base">
              Gold & Silver Crowns
            </h3>
            <p className="text-xs sm:text-sm text-neo-muted leading-relaxed font-normal">
              Expert custom crafting of classic Gold and high-durability Silver crowns tailored to individual biting forces.
            </p>
          </div>

          <div className="bg-neo-ice p-7 rounded-3xl border border-neo-clinical/20 space-y-2.5">
            <Cpu className="w-6 h-6 text-neo-clinical" />
            <h3 className="font-extrabold text-neo-navy text-base">
              Precision Fit
            </h3>
            <p className="text-xs sm:text-sm text-neo-muted leading-relaxed font-normal">
              Exact adaptation along tooth margins to seal out bacteria and prevent micro-leakage.
            </p>
          </div>

          <div className="bg-neo-ice p-7 rounded-3xl border border-neo-clinical/20 space-y-2.5">
            <Zap className="w-6 h-6 text-neo-navy" />
            <h3 className="font-extrabold text-neo-navy text-base">
              Direct Shade Matching
            </h3>
            <p className="text-xs sm:text-sm text-neo-muted leading-relaxed font-normal">
              Technicians evaluate natural tooth color in person for seamless aesthetic harmony.
            </p>
          </div>

          <div className="bg-neo-ice p-7 rounded-3xl border border-neo-clinical/20 space-y-2.5">
            <Layers className="w-6 h-6 text-neo-red" />
            <h3 className="font-extrabold text-neo-navy text-base">
              Removable Prosthetics
            </h3>
            <p className="text-xs sm:text-sm text-neo-muted leading-relaxed font-normal">
              Custom partial and full dental appliances crafted for natural chewing and facial fullness.
            </p>
          </div>
        </div>

        {/* 5-Step Restorative Pathway */}
        <div className="bg-gradient-to-r from-neo-navy via-neo-navy-light to-neo-navy text-white rounded-3xl p-8 md:p-12 text-left space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-neo-clinical-light">
              Laboratory Process
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold">
              The 5-Step Custom Restorative Pathway
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs sm:text-sm">
            <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-2">
              <span className="font-mono font-bold text-neo-red text-sm">01</span>
              <h4 className="font-bold text-white text-base">Assessment</h4>
              <p className="text-slate-300">Accurate clinical impression and bite registration.</p>
            </div>
            <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-2">
              <span className="font-mono font-bold text-neo-red text-sm">02</span>
              <h4 className="font-bold text-white text-base">Design</h4>
              <p className="text-slate-300">Anatomical waxing and occlusal sculpting for harmony.</p>
            </div>
            <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-2">
              <span className="font-mono font-bold text-neo-red text-sm">03</span>
              <h4 className="font-bold text-white text-base">Creation</h4>
              <p className="text-slate-300">Crafting the restoration using verified dental materials.</p>
            </div>
            <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-2">
              <span className="font-mono font-bold text-neo-red text-sm">04</span>
              <h4 className="font-bold text-white text-base">Refinement</h4>
              <p className="text-slate-300">Chairside micro-refinement and contact polishing.</p>
            </div>
            <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-2">
              <span className="font-mono font-bold text-neo-red text-sm">05</span>
              <h4 className="font-bold text-white text-base">Final Fit</h4>
              <p className="text-slate-300">Permanent bonding and functional chewing verification.</p>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultReason="In-House Dental Laboratory Restorations"
      />
    </div>
  );
}
