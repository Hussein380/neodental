"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

interface CardVideoPreviewProps {
  videoSrc?: string;
  posterSrc: string;
  alt: string;
}

export const CardVideoPreview: React.FC<CardVideoPreviewProps> = ({ videoSrc, posterSrc, alt }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [loadedSrc, setLoadedSrc] = useState<string | undefined>(undefined);

  // Lazy‑load video when component enters viewport
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !videoSrc) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoadedSrc(videoSrc);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [videoSrc]);

  // Autoplay when video source becomes available
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !loadedSrc) return;
    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [loadedSrc]);

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-60 sm:h-64 overflow-hidden bg-slate-950 group">
      {/* Poster Image shown until video loads */}
      <Image
        src={posterSrc}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-500 ${
          isVideoReady && loadedSrc ? "opacity-0 pointer-events-none" : "opacity-100"
        } group-hover:scale-105 transition-transform duration-500`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Video element, source set lazily */}
      {loadedSrc && (
        <video
          ref={videoRef}
          src={loadedSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={() => setIsVideoReady(true)}
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={(e) => {
            e.currentTarget.currentTime = 0;
            e.currentTarget.play().catch(() => {});
          }}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 pointer-events-none" />

      {/* Play/Pause button */}
      {loadedSrc && isVideoReady && (
        <button
          type="button"
          onClick={togglePlay}
          className="absolute bottom-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-neo-red text-white flex items-center justify-center backdrop-blur-md opacity-80 hover:opacity-100 transition-all active:scale-90"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white ml-0.5" />}
        </button>
      )}
    </div>
  );
};
