"use client";

import React, { useState } from "react";
import { Html } from "@react-three/drei";
import { toothHotspots } from "@/content/education";
import { Hotspot } from "@/types";
import { Sparkles, Info, X } from "lucide-react";

interface InteractiveToothProps {
  onSelectHotspot?: (hotspot: Hotspot) => void;
  showHotspots?: boolean;
}

export const InteractiveTooth: React.FC<InteractiveToothProps> = ({
  onSelectHotspot,
  showHotspots = true,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  const handleHotspotClick = (hs: Hotspot) => {
    setActiveHotspot(activeHotspot?.id === hs.id ? null : hs);
    if (onSelectHotspot) {
      onSelectHotspot(hs);
    }
  };

  return (
    <group position={[0, 0, 0]}>
      {/* --- CROWN ENAMEL SHELL (Bright, Opaque & High-Gloss Molar) --- */}
      <mesh position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.92, 0.75, 1.15, 32]} />
        <meshStandardMaterial
          color="#F9FCFE"
          roughness={0.18}
          metalness={0.08}
        />
      </mesh>

      {/* Occlusal Cusps (4 Natural Molar Cusps) */}
      <mesh position={[-0.45, 0.98, -0.4]}>
        <sphereGeometry args={[0.38, 24, 24]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.15} />
      </mesh>
      <mesh position={[0.45, 0.98, -0.4]}>
        <sphereGeometry args={[0.38, 24, 24]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.15} />
      </mesh>
      <mesh position={[-0.45, 0.98, 0.4]}>
        <sphereGeometry args={[0.38, 24, 24]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.15} />
      </mesh>
      <mesh position={[0.45, 0.98, 0.4]}>
        <sphereGeometry args={[0.38, 24, 24]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.15} />
      </mesh>

      {/* Central Groove Fissure Line */}
      <mesh position={[0, 1.0, 0]}>
        <boxGeometry args={[0.8, 0.04, 0.08]} />
        <meshStandardMaterial color="#E2E8F0" roughness={0.8} />
      </mesh>

      {/* --- DENTIN SUB-CORE (Warm Mineral Layer) --- */}
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.7, 0.55, 0.85, 24]} />
        <meshStandardMaterial
          color="#F6E7B8"
          roughness={0.45}
        />
      </mesh>

      {/* --- PULP CHAMBER (Vital Core - Red Vascular Core) --- */}
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.3, 0.18, 0.55, 16]} />
        <meshStandardMaterial
          color="#DF0C0A"
          emissive="#DF0C0A"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* --- TOOTH ROOTS (Mesial & Distal Roots) --- */}
      {/* Left Root */}
      <mesh position={[-0.38, -0.65, 0]} rotation={[0, 0, 0.1]}>
        <coneGeometry args={[0.36, 1.4, 24]} />
        <meshStandardMaterial
          color="#FFF8E8"
          roughness={0.35}
        />
      </mesh>
      {/* Left Pulp Canal */}
      <mesh position={[-0.35, -0.6, 0]} rotation={[0, 0, 0.1]}>
        <cylinderGeometry args={[0.06, 0.02, 1.1, 12]} />
        <meshStandardMaterial color="#DF0C0A" emissive="#DF0C0A" emissiveIntensity={0.4} />
      </mesh>

      {/* Right Root */}
      <mesh position={[0.38, -0.65, 0]} rotation={[0, 0, -0.1]}>
        <coneGeometry args={[0.36, 1.4, 24]} />
        <meshStandardMaterial
          color="#FFF8E8"
          roughness={0.35}
        />
      </mesh>
      {/* Right Pulp Canal */}
      <mesh position={[0.35, -0.6, 0]} rotation={[0, 0, -0.1]}>
        <cylinderGeometry args={[0.06, 0.02, 1.1, 12]} />
        <meshStandardMaterial color="#DF0C0A" emissive="#DF0C0A" emissiveIntensity={0.4} />
      </mesh>

      {/* --- GUM LINE TISSUE BASE --- */}
      <mesh position={[0, -0.05, 0]}>
        <torusGeometry args={[0.84, 0.2, 16, 32]} />
        <meshStandardMaterial
          color="#F2A5A5"
          roughness={0.6}
        />
      </mesh>

      {/* --- INTERACTIVE 3D HOTSPOTS --- */}
      {showHotspots &&
        toothHotspots.map((hs) => {
          const isSelected = activeHotspot?.id === hs.id;
          return (
            <group key={hs.id} position={hs.position}>
              <mesh
                onClick={(e) => {
                  e.stopPropagation();
                  handleHotspotClick(hs);
                }}
              >
                <sphereGeometry args={[0.12, 16, 16]} />
                <meshStandardMaterial
                  color={isSelected ? "#DF0C0A" : "#0284C7"}
                  emissive={isSelected ? "#DF0C0A" : "#38BDF8"}
                  emissiveIntensity={isSelected ? 0.9 : 0.5}
                />
              </mesh>

              {/* Pulsing ring */}
              <mesh>
                <ringGeometry args={[0.14, 0.18, 24]} />
                <meshBasicMaterial
                  color={isSelected ? "#DF0C0A" : "#38BDF8"}
                  transparent
                  opacity={0.8}
                />
              </mesh>

              {/* Tooltip HTML Overlay attached to 3D position */}
              {isSelected && (
                <Html
                  position={[0.2, 0.2, 0]}
                  style={{
                    transform: "translate3d(10px, -50%, 0)",
                    pointerEvents: "auto",
                  }}
                  center={false}
                >
                  <div className="w-64 sm:w-72 bg-white/98 backdrop-blur-md p-4 rounded-2xl border border-neo-clinical/30 shadow-card text-left text-neo-dark animate-fade-in z-50">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-neo-red" />
                        <h4 className="font-extrabold text-neo-navy text-sm">
                          {hs.name}
                        </h4>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveHotspot(null);
                        }}
                        className="text-neo-blue-gray hover:text-neo-navy p-0.5"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs text-neo-muted leading-relaxed mb-2 font-normal">
                      {hs.details}
                    </p>

                    <div className="text-[11px] text-neo-navy bg-neo-ice p-2.5 rounded-xl border border-neo-clinical/15 flex items-start gap-1.5 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-neo-red flex-shrink-0 mt-0.5" />
                      <span>{hs.importance}</span>
                    </div>
                  </div>
                </Html>
              )}
            </group>
          );
        })}
    </group>
  );
};
