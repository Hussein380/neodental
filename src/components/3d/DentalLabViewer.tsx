"use client";

import React, { useState } from "react";
import { DentalCanvas } from "./DentalCanvas";
import { Layers, CheckCircle2, ArrowRight, Cpu, Sparkles } from "lucide-react";

interface LabPhase {
  step: number;
  name: string;
  badge: string;
  summary: string;
  labActivity: string;
  modelStyle: "scan-mesh" | "cad-wireframe" | "milled-crown" | "gold-crown" | "polished-fit";
}

const labPhases: LabPhase[] = [
  {
    step: 1,
    name: "1. Scan & Assessment",
    badge: "Digital Precision",
    summary: "Capturing exact micro-dimensions and occlusion data of the prepared tooth.",
    labActivity: "High-accuracy dental impression or digital optical scan transferred to the lab bench.",
    modelStyle: "scan-mesh",
  },
  {
    step: 2,
    name: "2. Custom Anatomical Design",
    badge: "Digital Wax-Up",
    summary: "Sculpting the natural occlusal grooves, contact angles, and emergence profiles.",
    labActivity: "Custom designing the tooth anatomy to harmonize with adjacent and opposing teeth.",
    modelStyle: "cad-wireframe",
  },
  {
    step: 3,
    name: "3. Precision Fabrication",
    badge: "In-House Crafting",
    summary: "Fabricating the restoration with selected dental materials (including confirmed Silver and Gold).",
    labActivity: "Crafting the core coping and anatomical contour with micron-level tolerances.",
    modelStyle: "gold-crown",
  },
  {
    step: 4,
    name: "4. Refinement & Chairside Fitting",
    badge: "Perfect Harmony",
    summary: "Direct collaboration between dental technician and dentist for seamless final polish and fit.",
    labActivity: "Fine-tuning contacts and shade matching before permanent cementation in the mouth.",
    modelStyle: "polished-fit",
  },
];

function LabCrownModel({ current }: { current: LabPhase }) {
  const isWireframe = current.modelStyle === "cad-wireframe";
  const isGold = current.modelStyle === "gold-crown";
  const isScan = current.modelStyle === "scan-mesh";

  return (
    <group position={[0, 0, 0]}>
      {/* Precision Crown Mesh */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.92, 0.8, 1.15, 32, 16]} />
        <meshPhysicalMaterial
          color={
            isGold
              ? "#E5A93C"
              : isScan
              ? "#38BDF8"
              : isWireframe
              ? "#0284C7"
              : "#FAFCFD"
          }
          wireframe={isWireframe}
          metalness={isGold ? 0.85 : isScan ? 0.3 : 0.05}
          roughness={isGold ? 0.2 : isScan ? 0.5 : 0.1}
          clearcoat={isGold || current.modelStyle === "polished-fit" ? 1.0 : 0.0}
        />
      </mesh>

      {/* Anatomical Cusps */}
      <mesh position={[-0.45, 0.95, -0.4]}>
        <sphereGeometry args={[0.38, 24, 24]} />
        <meshPhysicalMaterial
          color={isGold ? "#D99B26" : isScan ? "#6F9AB8" : "#FFFFFF"}
          wireframe={isWireframe}
          metalness={isGold ? 0.85 : 0.05}
          roughness={isGold ? 0.2 : 0.15}
        />
      </mesh>
      <mesh position={[0.45, 0.95, -0.4]}>
        <sphereGeometry args={[0.38, 24, 24]} />
        <meshPhysicalMaterial
          color={isGold ? "#D99B26" : isScan ? "#6F9AB8" : "#FFFFFF"}
          wireframe={isWireframe}
          metalness={isGold ? 0.85 : 0.05}
          roughness={isGold ? 0.2 : 0.15}
        />
      </mesh>
      <mesh position={[-0.45, 0.95, 0.4]}>
        <sphereGeometry args={[0.38, 24, 24]} />
        <meshPhysicalMaterial
          color={isGold ? "#D99B26" : isScan ? "#6F9AB8" : "#FFFFFF"}
          wireframe={isWireframe}
          metalness={isGold ? 0.85 : 0.05}
          roughness={isGold ? 0.2 : 0.15}
        />
      </mesh>
      <mesh position={[0.45, 0.95, 0.4]}>
        <sphereGeometry args={[0.38, 24, 24]} />
        <meshPhysicalMaterial
          color={isGold ? "#D99B26" : isScan ? "#6F9AB8" : "#FFFFFF"}
          wireframe={isWireframe}
          metalness={isGold ? 0.85 : 0.05}
          roughness={isGold ? 0.2 : 0.15}
        />
      </mesh>

      {/* Lab Die Model Base */}
      <mesh position={[0, -0.65, 0]}>
        <cylinderGeometry args={[0.75, 0.75, 1.0, 32]} />
        <meshStandardMaterial
          color="#D3DFE8"
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
}

export const DentalLabViewer: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const current = labPhases[activeStep];

  return (
    <div className="bg-white rounded-2xl border border-neo-clinical/20 shadow-card p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-neo-ice">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neo-ice text-neo-navy text-xs font-semibold mb-2">
            <Cpu className="w-3.5 h-3.5 text-neo-clinical" />
            <span>On-Site Dental Craftsmanship</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-neo-navy">
            The Laboratory Workflow
          </h3>
        </div>

        {/* Phase Tabs */}
        <div className="flex items-center gap-1.5 bg-neo-ice p-1.5 rounded-xl overflow-x-auto">
          {labPhases.map((phase, i) => (
            <button
              key={phase.step}
              type="button"
              onClick={() => setActiveStep(i)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                activeStep === i
                  ? "bg-neo-navy text-white shadow-sm"
                  : "text-neo-blue-gray hover:text-neo-navy hover:bg-white/60"
              }`}
            >
              Phase {phase.step}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6">
          <DentalCanvas fallbackType="lab" heightClass="h-[340px] md:h-[400px]">
            <LabCrownModel current={current} />
          </DentalCanvas>
        </div>

        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-lg md:text-xl font-bold text-neo-navy">
              {current.name}
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
              In-House Laboratory Precision:
            </span>
            <p className="text-neo-dark">{current.labActivity}</p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              disabled={activeStep === 0}
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              className="text-xs font-semibold text-neo-blue-gray hover:text-neo-navy disabled:opacity-30 disabled:pointer-events-none"
            >
              ← Previous Phase
            </button>
            <span className="text-xs text-neo-muted font-medium">
              Phase {activeStep + 1} of {labPhases.length}
            </span>
            <button
              type="button"
              disabled={activeStep === labPhases.length - 1}
              onClick={() =>
                setActiveStep((prev) =>
                  Math.min(labPhases.length - 1, prev + 1)
                )
              }
              className="text-xs font-bold text-neo-red hover:text-neo-red-hover flex items-center gap-1 disabled:opacity-30 disabled:pointer-events-none"
            >
              Next Phase <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
