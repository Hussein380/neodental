"use client";

import React, { useState, useRef, useEffect } from "react";
import { DiseaseCarousel3D } from "./DiseaseCarousel3D";
import { WhatsAppModal } from "@/components/common/WhatsAppModal";
import { useLanguage } from "@/context/LanguageContext";
import { MessageSquare, Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

export const SymptomTriage: React.FC = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Educational video player state
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Default to unmuted
  const [hasStarted, setHasStarted] = useState(false);

  // Auto-play when video scrolls into view (attempt with audio first)
  useEffect(() => {
    const container = videoContainerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Attempt playing with audio first
            video.muted = false;
            setIsMuted(false);
            video
              .play()
              .then(() => {
                setIsPlaying(true);
                setHasStarted(true);
              })
              .catch(() => {
                // If browser blocks unmuted autoplay, fallback to muted autoplay
                video.muted = true;
                setIsMuted(true);
                video
                  .play()
                  .then(() => {
                    setIsPlaying(true);
                    setHasStarted(true);
                  })
                  .catch(() => {});
              });
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.4 } // 40% visible before autoplay kicks in
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
    <section className="py-20 md:py-24 bg-slate-50 relative overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid Split Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[60vh] lg:min-h-[70vh] items-center gap-6 sm:gap-8 lg:gap-12">

          {/* LEFT — Copy & CTAs */}
          <div className="pt-4 sm:pt-6 lg:py-16 space-y-6 w-full text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold text-red-600 tracking-wide uppercase whitespace-nowrap">
                {t.triage.badge}
              </span>
            </div>

            <h2 className="text-[2.2rem] sm:text-4xl lg:text-[2.8rem] font-extrabold leading-[1.1] tracking-tight text-slate-900">
              {t.triage.titleStart} <span className="text-red-600 block sm:inline">{t.triage.titleHighlight}</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-lg font-normal">
              {t.triage.subtitle}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-lg shadow-red-600/20 hover:shadow-red-600/30 transition-all duration-200 active:scale-95"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                {t.triage.askDentistBtn}
              </button>
            </div>
          </div>

          {/* RIGHT — 3D Rotating Disease Carousel */}
          <div className="relative block w-full h-[370px] sm:h-[440px] lg:h-[530px] mt-8 lg:mt-0 pt-4 lg:pt-8">
            <DiseaseCarousel3D />
          </div>
        </div>

        {/* ── STANDALONE EDUCATIONAL VIDEO SECTION ── */}
        <div className="mt-20 sm:mt-24">

          {/* 2-col layout: video left, description right */}
          <div ref={videoContainerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* LEFT — compact video player */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-950 shadow-xl shadow-slate-900/25 border border-slate-800/40">
              {/* 16:9 aspect ratio */}
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <video
                  ref={videoRef}
                  src="/videos/homepagecavities.mp4"
                  preload="metadata"
                  muted
                  playsInline
                  loop
                  onPlay={() => { setIsPlaying(true); setHasStarted(true); }}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                {/* Big play overlay — only before first play */}
                {!hasStarted && (
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label="Play educational video"
                    className="absolute inset-0 flex items-center justify-center z-20 group"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600/90 hover:bg-red-600 backdrop-blur-md flex items-center justify-center shadow-xl shadow-red-600/40 transition-all duration-200 group-hover:scale-110 active:scale-95">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white ml-0.5" />
                    </div>
                  </button>
                )}

                {/* Unmute nudge — shown while muted & playing */}
                {hasStarted && isMuted && (
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 hover:bg-red-600 backdrop-blur-md text-white text-[11px] font-bold transition-all active:scale-95"
                    aria-label="Unmute video"
                  >
                    <VolumeX className="w-3.5 h-3.5" />
                    {t.triage.videoTapUnmute}
                  </button>
                )}

                {/* Bottom controls bar */}
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
                    {t.triage.videoCardTitle}
                  </p>
                  <p className="text-slate-400 text-[11px] mt-0.5">{t.triage.videoCardSubtitle}</p>
                </div>
                <span className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  {t.triage.videoLiveBadge}
                </span>
              </div>
            </div>

            {/* RIGHT — description card */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold text-red-600 tracking-wide uppercase">
                  {t.triage.videoBadge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {t.triage.videoTitleStart}{" "}
                <span className="text-red-600">{t.triage.videoTitleHighlight}</span>
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.triage.videoSubtitle}
              </p>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 py-3 px-7 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-lg shadow-red-600/20 transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                {t.triage.bookConsultBtn}
              </button>
            </div>

          </div>
        </div>

      </div>

      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultReason="Tooth Disease & Treatment Inquiry"
      />
    </section>
  );
};

