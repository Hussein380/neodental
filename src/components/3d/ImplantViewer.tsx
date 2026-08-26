"use client";

import React, { useState } from "react";
import { DentalCanvas } from "./DentalCanvas";
import { Shield, Sparkles, ArrowRight } from "lucide-react";

interface ImplantStep {
  step: number;
  title: string;
  badge: string;
  summary: string;
  clinicalNote: string;
  hasPost: boolean;
  hasAbutment: boolean;
  hasCrown: boolean;
}

const implantSteps: ImplantStep[] = [
  {
    step: 1,
    title: "1. Missing Tooth & Bone Space",
    badge: "Initial Gap",
    summary: "When a tooth is lost, the empty space can cause neighboring teeth to drift and jawbone to resorb over time.",
    clinicalNote: "Clinical assessment verifies bone height, width, and distance from anatomical landmarks.",
    hasPost: false,
    hasAbutment: false,
    hasCrown: false,
  },
  {
    step: 2,
    title: "2. Precision Titanium Fixture",
    badge: "Surgical Placement",
    summary: "A medical-grade titanium screw is gently positioned into the jawbone to act as an artificial root.",
    clinicalNote: "Titanium is highly biocompatible and naturally accepted by human bone cells.",
    hasPost: true,
    hasAbutment: false,
    hasCrown: false,
  },
  {
    step: 3,
    title: "3. Osseointegration (Bone Bonding)",
    badge: "Biological Anchor",
    summary: "Over several months, living bone tissue securely fuses around the microscopic grooves of the post.",
    clinicalNote: "Creates an unshakeable, permanent foundation capable of withstanding full biting forces.",
    hasPost: true,
    hasAbutment: true,
    hasCrown: false,
  },
  {
    step: 4,
    title: "4. Custom Abutment & Crown",
    badge: "Restored Smile",
    summary: "A custom dental crown crafted in our laboratory is attached, restoring natural aesthetics and function.",
    clinicalNote: "Seamlessly blends with adjacent teeth without needing to grind down neighboring healthy enamel.",
    hasPost: true,
    hasAbutment: true,
    hasCrown: true,
  },
];

function ImplantModel({ current }: { current: ImplantStep }) {
  return (
    <group position={[0, 0, 0]}>
      {/* Surrounding Jawbone Base */}
      <mesh position={[0, -0.9, 0]}>
        <boxGeometry args={[2.8, 1.2, 1.2]} />
        <meshStandardMaterial color="#E8DFD8" roughness={0.8} />
      </mesh>

      {/* Gum Soft Tissue Layer */}
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[2.8, 0.25, 1.25]} />
        <meshStandardMaterial color="#F2A5A5" roughness={0.6} />
      </mesh>

      {/* Neighboring Left Natural Tooth */}
      <mesh position={[-0.9, 0.35, 0]}>
        <cylinderGeometry args={[0.35, 0.3, 0.9, 20]} />
        <meshPhysicalMaterial color="#F9FCFE" roughness={0.15} transmission={0.2} />
      </mesh>

      {/* Neighboring Right Natural Tooth */}
      <mesh position={[0.9, 0.35, 0]}>
        <cylinderGeometry args={[0.35, 0.3, 0.9, 20]} />
        <meshPhysicalMaterial color="#F9FCFE" roughness={0.15} transmission={0.2} />
      </mesh>

      {/* Implant Post (Titanium screw) */}
      {current.hasPost && (
        <group position={[0, -0.65, 0]}>
          <mesh>
            <cylinderGeometry args={[0.2, 0.12, 0.9, 16]} />
            <meshStandardMaterial color="#88929A" metalness={0.9} roughness={0.3} />
          </mesh>
          {/* Thread ridges */}
          <mesh position={[0, 0.15, 0]}>
            <torusGeometry args={[0.21, 0.03, 8, 24]} />
            <meshStandardMaterial color="#707B84" metalness={0.9} roughness={0.3} />
          </mesh>
          <mesh position={[0, -0.15, 0]}>
            <torusGeometry args={[0.18, 0.03, 8, 24]} />
            <meshStandardMaterial color="#707B84" metalness={0.9} roughness={0.3} />
          </mesh>
        </group>
      )}

      {/* Implant Abutment Connector */}
      {current.hasAbutment && (
        <mesh position={[0, -0.05, 0]}>
          <cylinderGeometry args={[0.25, 0.18, 0.35, 16]} />
          <meshStandardMaterial color="#C4CCD3" metalness={0.8} roughness={0.2} />
        </mesh>
      )}

      {/* Restored Custom Crown */}
      {current.hasCrown && (
        <group position={[0, 0.45, 0]}>
          <mesh>
            <cylinderGeometry args={[0.42, 0.35, 0.85, 24]} />
            <meshPhysicalMaterial
              color="#FFFFFF"
              roughness={0.12}
              transmission={0.25}
              clearcoat={1.0}
            />
          </mesh>
          <mesh position={[0, 0.4, 0]}>
            <sphereGeometry args={[0.38, 20, 20]} />
            <meshPhysicalMaterial color="#FFFFFF" roughness={0.12} clearcoat={1.0} />
          </mesh>
        </group>
      )}
    </group>
  );
}

export const ImplantViewer: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const current = implantSteps[activeStep];

  return (
    <div className="bg-white rounded-2xl border border-neo-clinical/20 shadow-card p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-neo-ice">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neo-ice text-neo-navy text-xs font-semibold mb-2">
            <Shield className="w-3.5 h-3.5 text-neo-clinical" />
            <span>Missing Tooth Replacement Concept</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-neo-navy">
            Dental Implant Integration
          </h3>
        </div>

        <div className="flex items-center gap-1.5 bg-neo-ice p-1.5 rounded-xl overflow-x-auto">
          {implantSteps.map((stg, i) => (
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
          <DentalCanvas fallbackType="implant" heightClass="h-[340px] md:h-[400px]">
            <ImplantModel current={current} />
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
              Clinical Context:
            </span>
            <p className="text-neo-dark">{current.clinicalNote}</p>
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
              Step {activeStep + 1} of {implantSteps.length}
            </span>
            <button
              type="button"
              disabled={activeStep === implantSteps.length - 1}
              onClick={() =>
                setActiveStep((prev) =>
                  Math.min(implantSteps.length - 1, prev + 1)
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
