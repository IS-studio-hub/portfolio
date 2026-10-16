import { useState } from "react";

type TabId = "presentation" | "feedback" | "story";

const TABS: { id: TabId; label: string }[] = [
  { id: "presentation", label: "Client presentation" },
  { id: "feedback", label: "Feedback sessions" },
  { id: "story", label: "Proposal story" },
];

const presentationPoints = [
  {
    title: "Presenting to WestJet",
    body: "I presented the proposal directly to WestJet stakeholders and their product, business and technical teams, walking them through the passenger journey step by step.",
  },
  {
    title: "Interactive prototypes",
    body: "Instead of static slides only, key moments like booking, check-in and baggage were shown as clickable native prototypes, so stakeholders could feel the experience.",
  },
  {
    title: "Passenger and operations together",
    body: "Each part of the story showed both the passenger screen and the operational system behind it, so business and technical teams saw their part of the vision.",
  },
  {
    title: "Screens they could hold",
    body: "High-fidelity screens turned the vision into something concrete that stakeholders could point to, question and believe in.",
  },
];

const feedbackPoints = [
  {
    title: "Capture every comment",
    body: "After each session I collected feedback from stakeholders and the team and turned it into a clear, prioritised list of changes.",
  },
  {
    title: "Iterate fast",
    body: "Changes were applied to the flows and screens quickly and shared back, so the proposal kept improving between meetings.",
  },
  {
    title: "Keep the system consistent",
    body: "Changes were made at the pattern level whenever possible, so a fix in one moment of the trip updated every screen that used it.",
  },
  {
    title: "Align the team",
    body: "As Creative Director, I kept the five-person team aligned on direction, tone and priorities so every deliverable told the same story.",
  },
];

const storyPoints = [
  {
    title: "Challenge, opportunity, vision",
    body: "The proposal followed a clear arc: the problem of a fragmented journey, the opportunity to connect it, and the vision of one connected trip.",
  },
  {
    title: "The right things in the right order",
    body: "Strong proposals show the right things, not everything. I chose which problems deserved attention and which screens proved the idea.",
  },
  {
    title: "From board to high fidelity",
    body: "FigJam journeys and opportunity framing led into polished native pages, so the screens were evidence of structured thinking, not decoration.",
  },
  {
    title: "Calm interface, complex operation",
    body: "The creative direction kept the interface calm and focused, while the story showed the operational intelligence underneath.",
  },
];

function PointGrid({ points }: { points: { title: string; body: string }[] }) {
  return (
    <ol className="m-0 grid list-none gap-6 p-0 sm:grid-cols-2">
      {points.map((point, index) => (
        <li key={point.title} className="border-t border-border pt-5">
          <span className="font-mono text-[11px] tabular-nums text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h4 className="mt-2 font-display text-lg font-semibold text-text">{point.title}</h4>
          <p className="mt-2 text-sm leading-relaxed text-muted md:text-[15px]">{point.body}</p>
        </li>
      ))}
    </ol>
  );
}

function Panel({ title, lead, children }: { title: string; lead: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-16">
      <div className="max-w-md">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-text">{title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">{lead}</p>
      </div>
      <div>{children}</div>
    </div>
  );
}

/** WestJet only: client presentation, feedback sessions and proposal story. */
export function WestjetCommunicationSection() {
  const [tab, setTab] = useState<TabId>("presentation");

  return (
    <section
      aria-labelledby="westjet-communication-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Communication
        </p>
        <h2
          id="westjet-communication-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          Telling the story
          <span className="text-muted"> stakeholders could </span>
          believe in
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
          A proposal only works when everyone understands the vision. I presented the work to
          WestJet, ran feedback sessions with stakeholders and the team, and shaped the proposal
          into one clear story.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Communication sections"
        className="mb-8 flex flex-wrap gap-2 border-b border-border pb-3"
      >
        {TABS.map((item) => {
          const active = tab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`westjet-comm-panel-${item.id}`}
              id={`westjet-comm-tab-${item.id}`}
              onClick={() => setTab(item.id)}
              className={`rounded-sm px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                active
                  ? "bg-text text-bg"
                  : "border border-border text-muted hover:border-text/40 hover:text-text"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div role="tabpanel" id={`westjet-comm-panel-${tab}`} aria-labelledby={`westjet-comm-tab-${tab}`}>
        {tab === "presentation" && (
          <>
            <Panel
              title="Client presentation"
              lead="Presentation and prototyping went hand in hand: I told the story of the journey and let stakeholders click through it."
            >
              <PointGrid points={presentationPoints} />
            </Panel>
          </>
        )}

        {tab === "feedback" && (
          <Panel
            title="Feedback sessions"
            lead="After every presentation, feedback turned into focused iteration until the direction was agreed."
          >
            <PointGrid points={feedbackPoints} />
          </Panel>
        )}

        {tab === "story" && (
          <Panel
            title="Proposal story"
            lead="Before button placement, the team needed a compelling story of what the experience could become."
          >
            <PointGrid points={storyPoints} />
          </Panel>
        )}
      </div>
    </section>
  );
}
