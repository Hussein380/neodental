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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  // Strict Viewport Observer: Only load and play video when strictly in view, pause when scrolled away
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !videoSrc) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current;
          if (entry.isIntersecting) {
            // Lazy load source only when card enters viewport
            setShouldLoadVideo(true);
            if (video) {
              video.play().then(() => setIsPlaying(true)).catch(() => {});
            }
          } else {
            // CRITICAL FOR SMOOTH SCROLLING: Pause video immediately when off-screen to free GPU/CPU
            if (video && !video.paused) {
              video.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      {
        threshold: 0.25, // Only trigger when at least 25% of the card is visible
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [videoSrc]);

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
      {/* High-definition Poster Image always present as immediate fallback & initial load */}
      <Image
        src={posterSrc}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-300 ${
          isVideoReady && isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
        } group-hover:scale-105 transition-transform duration-500 will-change-transform`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={false}
      />

      {/* Video element only instantiated & rendered when card is scrolled into view */}
      {shouldLoadVideo && videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          onCanPlay={() => {
            setIsVideoReady(true);
            if (videoRef.current) {
              videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
            }
          }}
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isVideoReady && isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 pointer-events-none" />

      {/* Play/Pause toggle button */}
      {videoSrc && shouldLoadVideo && isVideoReady && (
        <button
          type="button"
          onClick={togglePlay}
          className="absolute bottom-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-neo-red text-white flex items-center justify-center backdrop-blur-md opacity-80 hover:opacity-100 transition-all active:scale-90"
          aria-label={isPlaying ? "Pause video preview" : "Play video preview"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white ml-0.5" />}
        </button>
      )}
    </div>
  );
};

