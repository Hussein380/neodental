"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Center } from "@react-three/drei";
import { ModelFallback } from "./ModelFallback";
import { RotateCw, Loader2 } from "lucide-react";

interface DentalCanvasProps {
  children: React.ReactNode;
  fallbackType?: "anatomy" | "decay" | "root-canal" | "implant" | "lab";
  autoRotate?: boolean;
  enableZoom?: boolean;
  cameraPosition?: [number, number, number];
  heightClass?: string;
}

export const DentalCanvas: React.FC<DentalCanvasProps> = ({
  children,
  fallbackType = "anatomy",
  autoRotate = true,
  enableZoom = true,
  cameraPosition = [0, 0, 4.0],
  heightClass = "h-[390px] sm:h-[450px] md:h-[500px]",
}) => {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [isRotating, setIsRotating] = useState<boolean>(autoRotate);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      setPrefersReducedMotion(true);
      setIsRotating(false);
    }
  }, []);

  if (!mounted) {
    return (
      <div className={`relative w-full ${heightClass} rounded-3xl overflow-hidden bg-gradient-to-b from-neo-ice/80 to-white/90 border border-neo-clinical/20 flex items-center justify-center`}>
        <Loader2 className="w-8 h-8 text-neo-clinical animate-spin" />
      </div>
    );
  }

  if (!hasWebGL) {
    return <ModelFallback type={fallbackType} />;
  }

  return (
    <div
      className={`relative w-full ${heightClass} rounded-3xl overflow-hidden bg-gradient-to-b from-neo-ice/70 via-white/90 to-neo-ice/50 border border-neo-clinical/25 shadow-card select-none group`}
    >
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 subtle-grid opacity-50 pointer-events-none" />

      {/* 3D WebGL Canvas */}
      <Canvas
        camera={{ position: cameraPosition, fov: 42 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        className="cursor-grab active:cursor-grabbing w-full h-full"
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[6, 8, 6]} intensity={1.4} color="#FFFFFF" />
        <directionalLight position={[-6, -4, -4]} intensity={0.6} color="#6F9AB8" />
        <pointLight position={[0, 4, 4]} intensity={1.0} color="#FFFFFF" />
        <pointLight position={[0, -3, 3]} intensity={0.4} color="#DF0C0A" />

        <Suspense fallback={null}>
          <Center>
            {prefersReducedMotion ? (
              <>{children}</>
            ) : (
              <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.25}>
                {children}
              </Float>
            )}
          </Center>

          <OrbitControls
            enableZoom={enableZoom}
            minDistance={2.5}
            maxDistance={6.5}
            enablePan={false}
            autoRotate={isRotating}
            autoRotateSpeed={0.8}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI - Math.PI / 6}
          />
        </Suspense>
      </Canvas>

      {/* Interactive Controls Overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
        <div className="flex items-center gap-2 text-xs font-semibold text-neo-navy bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-neo-clinical/30 shadow-subtle">
          <RotateCw className="w-3.5 h-3.5 text-neo-red animate-spin-slow" />
          <span>Drag to rotate 360°</span>
          {enableZoom && (
            <span className="hidden sm:inline text-neo-muted">
              • Pinch to zoom
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => setIsRotating((prev) => !prev)}
          className="pointer-events-auto px-3 py-1.5 text-xs font-bold rounded-full bg-white/95 hover:bg-white text-neo-navy border border-neo-clinical/30 shadow-subtle transition-all duration-200 hover:scale-105 active:scale-95"
          title="Toggle Auto Rotation"
        >
          {isRotating ? "Pause Rotation" : "Auto Rotate"}
        </button>
      </div>
    </div>
  );
};
