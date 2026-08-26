"use client";

import React, { useState } from "react";
import { DentalCanvas } from "./DentalCanvas";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

interface RootCanalStep {
  step: number;
  title: string;
  badge: string;
  summary: string;
  actionDetails: string;
  pulpColor: string;
  fillingHeight: number;
  hasCrown: boolean;
}

const rootCanalSteps: RootCanalStep[] = [
  {
    step: 1,
    title: "1. Diagnosis & Deep Pulp Infection",
    badge: "Infection Identified",
    summary: "Bacteria have breached the dentin barrier, causing acute inflammation (pulpitis) or necrosis in the root canal.",
    actionDetails: "Diagnostic assessment and local anesthesia ensure comfortable, pain-free treatment.",
    pulpColor: "#B30000",
    fillingHeight: 0,
    hasCrown: false,
  },
  {
    step: 2,
    title: "2. Precise Access & Cleaning",
    badge: "Disinfection",
    summary: "A microscopic opening allows specialized endodontic instruments to clean and disinfect the narrow root canals.",
    actionDetails: "Diseased tissue is gently removed and antibacterial irrigation clears all microscopic canals.",
    pulpColor: "#E2E8F0",
    fillingHeight: 0,
    hasCrown: false,
  },
  {
    step: 3,
    title: "3. Biocompatible Sealing (Gutta-Percha)",
    badge: "Hermetic Seal",
    summary: "The dried canals are permanently sealed with biocompatible rubber material (gutta-percha) and adhesive sealer.",
    actionDetails: "Prevents bacteria from ever re-entering the internal root spaces.",
    pulpColor: "#F59E0B",
    fillingHeight: 1.0,
    hasCrown: false,
  },
  {
    step: 4,
    title: "4. Permanent Restoration & Crown",
    badge: "Restored Strength",
    summary: "A custom dental crown is placed over the tooth to restore 100% biting strength and natural appearance.",
    actionDetails: "Protects the treated tooth from structural fracture for years of confident chewing.",
    pulpColor: "#F59E0B",
    fillingHeight: 1.0,
    hasCrown: true,
  },
];

function RootCanalToothModel({ current }: { current: RootCanalStep }) {
  return (
    <group position={[0, 0, 0]}>
      {/* Crown or Restorative Cap */}
      <mesh position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.9, 0.75, 1.1, 32]} />
        <meshPhysicalMaterial
          color={current.hasCrown ? "#F0F4F8" : "#FAFDFE"}
          roughness={current.hasCrown ? 0.1 : 0.25}
          metalness={current.hasCrown ? 0.2 : 0.05}
          clearcoat={1.0}
          transmission={current.hasCrown ? 0.1 : 0.35}
        />
      </mesh>

      {/* Cusps */}
      <mesh position={[-0.45, 0.95, -0.4]}>
        <sphereGeometry args={[0.38, 24, 24]} />
        <meshPhysicalMaterial color={current.hasCrown ? "#E2E8F0" : "#FFFFFF"} roughness={0.15} />
      </mesh>
      <mesh position={[0.45, 0.95, -0.4]}>
        <sphereGeometry args={[0.38, 24, 24]} />
        <meshPhysicalMaterial color={current.hasCrown ? "#E2E8F0" : "#FFFFFF"} roughness={0.15} />
      </mesh>
      <mesh position={[-0.45, 0.95, 0.4]}>
        <sphereGeometry args={[0.38, 24, 24]} />
        <meshPhysicalMaterial color={current.hasCrown ? "#E2E8F0" : "#FFFFFF"} roughness={0.15} />
      </mesh>
      <mesh position={[0.45, 0.95, 0.4]}>
        <sphereGeometry args={[0.38, 24, 24]} />
        <meshPhysicalMaterial color={current.hasCrown ? "#E2E8F0" : "#FFFFFF"} roughness={0.15} />
      </mesh>

      {/* Internal Root Canals (Visualizing Cleansing / Gutta-Percha fill) */}
      <mesh position={[-0.35, -0.6, 0]} rotation={[0, 0, 0.1]}>
        <cylinderGeometry args={[0.08, 0.03, 1.1, 12]} />
        <meshStandardMaterial
          color={current.pulpColor}
          emissive={current.pulpColor}
          emissiveIntensity={0.4}
        />
      </mesh>
      <mesh position={[0.35, -0.6, 0]} rotation={[0, 0, -0.1]}>
        <cylinderGeometry args={[0.08, 0.03, 1.1, 12]} />
        <meshStandardMaterial
          color={current.pulpColor}
          emissive={current.pulpColor}
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Roots (Semi-transparent in step 2/3 to show internal filling) */}
      <mesh position={[-0.38, -0.65, 0]} rotation={[0, 0, 0.1]}>
        <coneGeometry args={[0.35, 1.4, 24]} />
        <meshPhysicalMaterial
          color="#FFF7E0"
          roughness={0.35}
          transmission={current.step > 1 ? 0.4 : 0.05}
          thickness={0.5}
        />
      </mesh>
      <mesh position={[0.38, -0.65, 0]} rotation={[0, 0, -0.1]}>
        <coneGeometry args={[0.35, 1.4, 24]} />
        <meshPhysicalMaterial
          color="#FFF7E0"
          roughness={0.35}
          transmission={current.step > 1 ? 0.4 : 0.05}
          thickness={0.5}
        />
      </mesh>

      {/* Gums */}
      <mesh position={[0, -0.05, 0]}>
        <torusGeometry args={[0.82, 0.18, 16, 32]} />
        <meshStandardMaterial color="#F2A5A5" roughness={0.6} />
      </mesh>
    </group>
  );
}

export const RootCanalViewer: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const current = rootCanalSteps[activeStep];

  return (
    <div className="bg-white rounded-2xl border border-neo-clinical/20 shadow-card p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-neo-ice">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neo-ice text-neo-navy text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-neo-clinical" />
            <span>Endodontic Tooth Preservation</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-neo-navy">
            Root Canal Treatment Explained
          </h3>
        </div>

        {/* Step Tabs */}
        <div className="flex items-center gap-1.5 bg-neo-ice p-1.5 rounded-xl overflow-x-auto">
          {rootCanalSteps.map((stg, i) => (
            <button
              key={stg.step}
              type="button"
              onClick={() => setActiveStep(i)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                activeStep === i
                  ? "bg-neo-navy text-white shadow-sm"
                  : "text-neo-blue-gray hover:text-neo-navy hover:bg-white/60"
              }`}
            >
              Step {stg.step}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6">
          <DentalCanvas fallbackType="root-canal" heightClass="h-[340px] md:h-[400px]">
            <RootCanalToothModel current={current} />
          </DentalCanvas>
        </div>

        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-lg md:text-xl font-bold text-neo-navy">
              {current.title}
            </h4>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-neo-clinical-light text-neo-navy">
              {current.badge}
            </span>
          </div>

          <p className="text-sm text-neo-muted leading-relaxed">
            {current.summary}
          </p>

          <div className="bg-neo-ice/80 p-4 rounded-xl border border-neo-clinical/15 space-y-2 text-xs">
            <span className="font-bold text-neo-navy uppercase tracking-wider text-[10px] block">
              Procedure Focus:
            </span>
            <p className="text-neo-dark">{current.actionDetails}</p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              disabled={activeStep === 0}
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              className="text-xs font-semibold text-neo-blue-gray hover:text-neo-navy disabled:opacity-30 disabled:pointer-events-none"
            >
              ← Previous Step
            </button>
            <span className="text-xs text-neo-muted font-medium">
              Step {activeStep + 1} of {rootCanalSteps.length}
            </span>
            <button
              type="button"
              disabled={activeStep === rootCanalSteps.length - 1}
              onClick={() =>
                setActiveStep((prev) =>
                  Math.min(rootCanalSteps.length - 1, prev + 1)
                )
              }
              className="text-xs font-bold text-neo-red hover:text-neo-red-hover flex items-center gap-1 disabled:opacity-30 disabled:pointer-events-none"
            >
              Next Step <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
