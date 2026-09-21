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

export interface Competitor {
  name: string;
  /** Short category / positioning label */
  focus: string;
  /** Why they sit in this competitive set */
  note: string;
  url?: string;
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
  /** Competitive set shown above the media grid on project pages. */
  competitors?: Competitor[];
  /** Optional framing line for the competitors section. */
  competitorsIntro?: string;
  /** Visual atmosphere board shown above the media grid. */
  moodBoard?: {
    note: string;
    colors: { hex: string; label: string }[];
    words: string[];
    fonts: { name: string; role: string; sample: string; stack: string }[];
    assets: {
      type: "image" | "video" | "model";
      label: string;
      note: string;
      src?: string;
      poster?: string;
    }[];
    references: { name: string; note: string; url?: string }[];
    textures?: ("grain" | "lines" | "dots" | "mesh" | "wash")[];
  };
  /** Research conclusions synthesized from competitors + mood board. */
  researchConclusions?: {
    lead: string;
    competitive: string[];
    atmosphere: string[];
    bridge: string;
  };
  /** Optional 8-cell image/video grid shown after metrics on project pages. */
  mediaGrid?: ProjectMedia[];
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
  | "competitors"
  | "competitorsIntro"
  | "moodBoard"
  | "researchConclusions"
  | "mediaGrid"
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
