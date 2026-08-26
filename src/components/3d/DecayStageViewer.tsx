"use client";

import React, { useState } from "react";
import { DentalCanvas } from "./DentalCanvas";
import { ArrowRight, CheckCircle, ShieldAlert, Sparkles } from "lucide-react";

interface DecayStage {
  stage: number;
  name: string;
  badge: string;
  description: string;
  clinicalExplanation: string;
  recommendedTreatment: string;
  lesionColor: string;
  lesionScale: number;
  pulpIrritation: number;
  isRestored?: boolean;
}

const decayStages: DecayStage[] = [
  {
    stage: 1,
    name: "Healthy Tooth",
    badge: "Optimal Health",
    description: "Intact mineralized enamel protects underlying dentin and vital nerve pulp.",
    clinicalExplanation: "Enamel is sound with normal translucency and smooth surface texture.",
    recommendedTreatment: "Routine daily brushing, flossing, and 6-month preventive check-ups.",
    lesionColor: "#FFFFFF",
    lesionScale: 0.01,
    pulpIrritation: 0,
  },
  {
    stage: 2,
    name: "Enamel Demineralization",
    badge: "Early Reversible Stage",
    description: "Bacterial acids create microscopic subsurface mineral loss in the enamel.",
    clinicalExplanation: "A chalky white or light brown spot appears. The surface is not yet cavitated.",
    recommendedTreatment: "Fluoride application, remineralizing therapy, and improved plaque control.",
    lesionColor: "#E3D5B8",
    lesionScale: 0.35,
    pulpIrritation: 0.1,
  },
  {
    stage: 3,
    name: "Dentin Cavitation",
    badge: "Active Decay",
    description: "Acid dissolves through the enamel into softer dentin, accelerating rapidly toward the nerve.",
    clinicalExplanation: "Visible cavity forms. Temperature or sweet sensitivity begins.",
    recommendedTreatment: "Gentle restorative cleaning and placement of a durable tooth-colored filling.",
    lesionColor: "#7D5A3C",
    lesionScale: 0.7,
    pulpIrritation: 0.4,
  },
  {
    stage: 4,
    name: "Pulp Infection (Pulpitis)",
    badge: "Deep Infection",
    description: "Bacteria infiltrate the pulp chamber, triggering inflammation, throbbing pain, or abscess.",
    clinicalExplanation: "Severe spontaneous pain or lingering throbbing to thermal changes.",
    recommendedTreatment: "Root canal treatment to remove infection and preserve the natural tooth.",
    lesionColor: "#3B2616",
    lesionScale: 0.95,
    pulpIrritation: 1.0,
  },
  {
    stage: 5,
    name: "Restored & Protected",
    badge: "Clinical Restoration",
    description: "Infection is cleared, cavity cleaned, and sealed with a high-strength filling or crown.",
    clinicalExplanation: "Tooth function, structural integrity, and natural aesthetics are fully restored.",
    recommendedTreatment: "Ongoing preventive hygiene and periodic check-ups to maintain restoration.",
    lesionColor: "#6F9AB8",
    lesionScale: 0.65,
    pulpIrritation: 0,
    isRestored: true,
  },
];

function DecayToothModel({ currentStage }: { currentStage: DecayStage }) {
  return (
    <group position={[0, 0, 0]}>
      {/* Crown Enamel */}
      <mesh position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.9, 0.75, 1.1, 32]} />
        <meshPhysicalMaterial
          color={currentStage.isRestored ? "#F4F9FD" : "#FAFCFD"}
          roughness={0.15}
          transmission={0.3}
          clearcoat={1.0}
        />
      </mesh>

      {/* Cusps */}
      <mesh position={[-0.45, 0.95, -0.4]}>
        <sphereGeometry args={[0.38, 24, 24]} />
        <meshPhysicalMaterial color="#FFFFFF" roughness={0.15} clearcoat={1.0} />
      </mesh>
      <mesh position={[0.45, 0.95, -0.4]}>
        <sphereGeometry args={[0.38, 24, 24]} />
        <meshPhysicalMaterial color="#FFFFFF" roughness={0.15} clearcoat={1.0} />
      </mesh>
      <mesh position={[-0.45, 0.95, 0.4]}>
        <sphereGeometry args={[0.38, 24, 24]} />
        <meshPhysicalMaterial color="#FFFFFF" roughness={0.15} clearcoat={1.0} />
      </mesh>
      <mesh position={[0.45, 0.95, 0.4]}>
        <sphereGeometry args={[0.38, 24, 24]} />
        <meshPhysicalMaterial color="#FFFFFF" roughness={0.15} clearcoat={1.0} />
      </mesh>

      {/* Caries Lesion / Restoration Inlay on occlusal surface */}
      {currentStage.stage > 1 && (
        <mesh
          position={[0, 0.85, 0]}
          scale={[
            currentStage.lesionScale,
            currentStage.lesionScale * 0.8,
            currentStage.lesionScale,
          ]}
        >
          <sphereGeometry args={[0.4, 24, 24]} />
          <meshStandardMaterial
            color={currentStage.lesionColor}
            roughness={currentStage.isRestored ? 0.2 : 0.85}
            metalness={currentStage.isRestored ? 0.1 : 0.0}
          />
        </mesh>
      )}

      {/* Pulp Chamber responding to irritation */}
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.32, 0.2, 0.55, 16]} />
        <meshStandardMaterial
          color={currentStage.pulpIrritation > 0.5 ? "#B30000" : "#DF0C0A"}
          emissive={currentStage.pulpIrritation > 0.5 ? "#FF2200" : "#DF0C0A"}
          emissiveIntensity={currentStage.pulpIrritation * 0.6 + 0.2}
        />
      </mesh>

      {/* Roots */}
      <mesh position={[-0.38, -0.65, 0]} rotation={[0, 0, 0.1]}>
        <coneGeometry args={[0.35, 1.4, 24]} />
        <meshPhysicalMaterial color="#FFF7E0" roughness={0.35} />
      </mesh>
      <mesh position={[0.38, -0.65, 0]} rotation={[0, 0, -0.1]}>
        <coneGeometry args={[0.35, 1.4, 24]} />
        <meshPhysicalMaterial color="#FFF7E0" roughness={0.35} />
      </mesh>

      {/* Gums */}
      <mesh position={[0, -0.05, 0]}>
        <torusGeometry args={[0.82, 0.18, 16, 32]} />
        <meshStandardMaterial
          color={currentStage.pulpIrritation > 0.7 ? "#E06D6D" : "#F2A5A5"}
          roughness={0.6}
        />
      </mesh>
    </group>
  );
}

export const DecayStageViewer: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const current = decayStages[activeStep];

  return (
    <div className="bg-white rounded-2xl border border-neo-clinical/20 shadow-card p-6 md:p-8">
      {/* Header & Step Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-neo-ice">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neo-ice text-neo-navy text-xs font-semibold mb-2">
            <ShieldAlert className="w-3.5 h-3.5 text-neo-red" />
            <span>Interactive Disease Progression</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-neo-navy">
            How Tooth Decay Progresses
          </h3>
        </div>

        {/* Step Buttons */}
        <div className="flex items-center gap-1.5 bg-neo-ice p-1.5 rounded-xl overflow-x-auto">
          {decayStages.map((stg, i) => (
            <button
              key={stg.stage}
              type="button"
              onClick={() => setActiveStep(i)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                activeStep === i
                  ? "bg-neo-navy text-white shadow-sm"
                  : "text-neo-blue-gray hover:text-neo-navy hover:bg-white/60"
              }`}
            >
              Stage {stg.stage}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Canvas + Educational Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* 3D Visual Column */}
        <div className="lg:col-span-6">
          <DentalCanvas fallbackType="decay" heightClass="h-[340px] md:h-[400px]">
            <DecayToothModel currentStage={current} />
          </DentalCanvas>
        </div>

        {/* Educational Content Column */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-xl font-bold text-neo-navy">{current.name}</h4>
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                current.stage === 4
                  ? "bg-red-100 text-neo-red"
                  : current.stage === 5
                  ? "bg-green-100 text-neo-success"
                  : "bg-blue-50 text-neo-clinical"
              }`}
            >
              {current.badge}
            </span>
          </div>

          <p className="text-sm text-neo-muted leading-relaxed">
            {current.description}
          </p>

          {/* Clinical Insight */}
          <div className="bg-neo-ice/80 p-4 rounded-xl border border-neo-clinical/15 space-y-2 text-xs">
            <div>
              <span className="font-bold text-neo-navy uppercase tracking-wider text-[10px] block mb-0.5">
                Clinical Observation:
              </span>
              <p className="text-neo-dark">{current.clinicalExplanation}</p>
            </div>
            <div>
              <span className="font-bold text-neo-navy uppercase tracking-wider text-[10px] block mb-0.5">
                Recommended Professional Approach:
              </span>
              <p className="text-neo-dark font-medium">{current.recommendedTreatment}</p>
            </div>
          </div>

          {/* Step Navigation Controls */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              disabled={activeStep === 0}
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              className="text-xs font-semibold text-neo-blue-gray hover:text-neo-navy disabled:opacity-30 disabled:pointer-events-none"
            >
              ← Previous Stage
            </button>
            <span className="text-xs text-neo-muted font-medium">
              Step {activeStep + 1} of {decayStages.length}
            </span>
            <button
              type="button"
              disabled={activeStep === decayStages.length - 1}
              onClick={() =>
                setActiveStep((prev) =>
                  Math.min(decayStages.length - 1, prev + 1)
                )
              }
              className="text-xs font-bold text-neo-red hover:text-neo-red-hover flex items-center gap-1 disabled:opacity-30 disabled:pointer-events-none"
            >
              Next Stage <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
