export type Language = "en" | "sw" | "so";

export type ContentStatus = "draft" | "review_required" | "approved" | "published";

export interface TreatmentItem {
  id: string;
  slug: string;
  category: TreatmentCategory;
  title: string;
  shortDescription: string;
  fullDescription: string;
  isConfirmed: boolean; // false if CLINIC_CONFIRMATION_REQUIRED
  symptoms: string[];
  processSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  benefits: string[];
  considerations: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  relatedTreatments: string[];
  interactiveModelType?: "anatomy" | "decay" | "root-canal" | "implant" | "crown" | "lab";
  seoTitle: string;
  seoDescription: string;
}

export type TreatmentCategory =
  | "emergency"
  | "restorative"
  | "root-canal"
  | "crowns"
  | "cosmetic"
  | "orthodontics"
  | "implants"
  | "removable"
  | "preventive"
  | "lab";

export interface CategoryInfo {
  id: TreatmentCategory;
  name: string;
  description: string;
  badge?: string;
}

export interface EducationalArticle {
  id: string;
  slug: string;
  category: "basics" | "problems" | "treatments" | "prevention";
  title: string;
  summary: string;
  content: string;
  keyPoints: string[];
  whatToDo: string[];
  whenToSeeDentist: string;
  relatedTreatmentSlug?: string;
  interactiveModelType?: "anatomy" | "decay" | "root-canal" | "implant" | "lab";
  reviewStatus: ContentStatus;
  seoTitle: string;
  seoDescription: string;
}

export interface SymptomConcern {
  id: string;
  title: string;
  iconName: string;
  possibleMeaning: string;
  whyExaminationMatters: string;
  treatmentApproach: string;
  whenToSeekCare: string;
  suggestedTreatmentSlug: string;
}

export interface Hotspot {
  id: string;
  name: string;
  position: [number, number, number];
  summary: string;
  details: string;
  importance: string;
}
