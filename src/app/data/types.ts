export interface ProcessPhase {
  phase: string;
  title: string;
  description: string;
}

export interface ProjectMedia {
  type: "image" | "video";
  src: string;
  caption: string;
  poster?: string;
}

export interface ResearchItem {
  title: string;
  description: string;
}

export interface SolutionItem {
  title: string;
  description: string;
  image?: string;
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface NarrativeSection {
  eyebrow?: string;
  title: string;
  body: string[];
  bullets?: string[];
  /** Optional full-width figure under the copy. */
  image?: string;
  caption?: string;
  cards?: { title: string; description: string; image?: string }[];
}

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  year: string;
  role: string;
  tags: string[];
  accent: string;
  gridSpan: "half" | "full";
  image: string;
  gallery: ProjectMedia[];
  figmaUrl?: string;
  secondaryFigmaUrl?: string;
  secondaryFigmaLabel?: string;
  embedFigmaUrl?: string;
  secondaryEmbedFigmaUrl?: string;
  embedFigmaLabel?: string;
  liveUrl?: string;
  impact: string;
  client: string;
  timeline: string;
  team: string;
  tools: string[];
  context: string;
  overview: string;
  challenge: string;
  goals: string[];
  research: ResearchItem[];
  insights: string[];
  process: ProcessPhase[];
  solutions: SolutionItem[];
  deliverables: string[];
  outcomes: string[];
  learnings: string[];
  metrics?: MetricItem[];
  /** Optional long-form narrative blocks (used by GoM and similar deep case studies). */
  narrative?: NarrativeSection[];
  closing?: string;
}

export type CaseStudyExtras = Pick<
  Project,
  | "impact"
  | "client"
  | "timeline"
  | "team"
  | "tools"
  | "liveUrl"
  | "context"
  | "goals"
  | "research"
  | "insights"
  | "solutions"
  | "learnings"
  | "metrics"
  | "narrative"
  | "closing"
> & {
  overview?: string;
  challenge?: string;
  process?: ProcessPhase[];
  deliverables?: string[];
  outcomes?: string[];
  gallery?: ProjectMedia[];
  image?: string;
  figmaUrl?: string;
  secondaryFigmaUrl?: string;
  secondaryFigmaLabel?: string;
  embedFigmaUrl?: string;
  secondaryEmbedFigmaUrl?: string;
  embedFigmaLabel?: string;
};
