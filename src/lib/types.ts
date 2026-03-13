export type SourceType = "official" | "derived" | "secondary" | "not-verified";

export type Confidence = "high" | "medium" | "low" | "unverified";

export interface SourceEntry {
  id: string;
  title: string;
  organization: string;
  url: string;
  publishedAt: string;
  sourceType: SourceType;
  supportsMetrics: string[];
  confidence: Confidence;
  note: string;
}

export interface MetricEntry {
  id: string;
  label: string;
  value: number;
  unit: string;
  displayValue: string;
  sourceType: SourceType;
  sourceIds: string[];
  methodologyNote: string;
  lastReviewed: string;
  confidence: Confidence;
  caveat?: string;
}

export type BasisType = "realized" | "allocated";

export interface PhaseConfig {
  id: string;
  label: string;
  startDate: string;
  endDate: string;
  totalAmount: number;
  basisType: BasisType;
  formulaNote: string;
  sourceIds: string[];
  badgeType: SourceType;
}

export type TimelineCategory =
  | "launch"
  | "budget"
  | "operational"
  | "food-safety"
  | "policy";

export interface TimelineEntry {
  id: string;
  date: string;
  title: string;
  category: TimelineCategory;
  description: string;
  sourceType: SourceType;
  sourceId?: string;
}

export interface IncidentEntry {
  id: string;
  title: string;
  date: string;
  affectedPersons?: number;
  reportingSource: string;
  verificationStatus: SourceType;
  description: string;
  sourceId?: string;
}

export interface FAQEntry {
  id: string;
  question: string;
  answer: string;
}

export interface ExplanationCard {
  title: string;
  description: string;
  isHighlighted?: boolean;
  icon?: string;
}

export interface CredibilitySummary {
  official: number;
  derived: number;
  secondary: number;
  cautionary: number;
  total: number;
}
