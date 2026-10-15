import { useState } from "react";
import { assetPath } from "../lib/assetPath";
import { ImageLightboxGallery } from "./ImageLightboxGallery";

type TabId = "requirements" | "competitors" | "audience";

const TABS: { id: TabId; label: string }[] = [
  { id: "requirements", label: "Requirement meetings" },
  { id: "competitors", label: "Competitors" },
  { id: "audience", label: "Target audience" },
];

const requirementPoints = [
  {
    title: "Direct line to stakeholders",
    body: "I worked directly with YMCA client stakeholders, marketing teams and Business Analysts, hearing the business goals, programs and rules first-hand instead of through hand-offs.",
  },
  {
    title: "Architecture as the shared language",
    body: "Instead of debating individual screens, I brought the product architecture to the table: what belongs together, what is global, and what is secondary, so every requirement had a clear home.",
  },
  {
    title: "Balancing marketing and utility",
    body: "Marketing needed to communicate offers and value, while members needed to complete tasks. I helped stakeholders find the balance so the app stayed useful, not promotional.",
  },
  {
    title: "Fast, visual feedback loops",
    body: "Flows and prototypes were walked through in meetings, so feedback was concrete, decisions were made in the room and changes came back in the next session.",
  },
];

const competitors = [
  {
    name: "GoodLife Fitness",
    focus: "Canadian gym chain",
    note: "National membership competitor that sets expectations for schedules, check-in and membership management.",
    url: "https://www.goodlifefitness.com/",
  },
  {
    name: "ClassPass",
    focus: "Class marketplace",
    note: "Raises the bar for class discovery and booking clarity across many studios.",
    url: "https://classpass.com/",
  },
  {
    name: "Mindbody",
    focus: "Studio booking platform",
    note: "Scheduling and discovery patterns that members already know from other fitness businesses.",
    url: "https://www.mindbodyonline.com/",
  },
  {
    name: "Anytime Fitness",
    focus: "24/7 club network",
    note: "Convenience-led memberships with fast digital access and check-in patterns.",
    url: "https://www.anytimefitness.com/",
  },
];

const audienceNeeds = [
  { title: "I want to work out", body: "Quick check-in, facility access and what is open right now." },
  { title: "I want to find something", body: "Classes, programs and facilities, without knowing which department runs them." },
  { title: "I want to manage my activity", body: "Bookings, calendar and membership details in one predictable place." },
  { title: "What is happening today", body: "A home screen that answers what matters now, not a directory of every feature." },
  { title: "New members", body: "Discovery that starts broad, then narrows to the right location, membership and plan." },
  { title: "Returning members", body: "Frequent actions that need less rediscovery every time they open the app." },
];

/** YMCA only: research section with requirement meetings, competitors and target audience tabs. */
export function YmcaResearchSection() {
  const [tab, setTab] = useState<TabId>("requirements");

  return (
    <section
      aria-labelledby="ymca-research-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Research</p>
        <h2
          id="ymca-research-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          Understanding the client,
          <span className="text-muted"> the field and </span>
          the members
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
          Research for the YMCA member app came from three places: stakeholder requirements,
          comparable fitness products, and how members actually think about their YMCA.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Research sections"
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
              aria-controls={`ymca-research-panel-${item.id}`}
              id={`ymca-research-tab-${item.id}`}
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

      <div
        role="tabpanel"
        id={`ymca-research-panel-${tab}`}
        aria-labelledby={`ymca-research-tab-${tab}`}
      >
        {tab === "requirements" && (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-16">
            <div className="max-w-md">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                Communicating directly with the YMCA team
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                As the solo UX/UI, content and product architecture designer on a 15-person team,
                I was the stakeholders' direct design contact, so clear communication shaped the
                product as much as the screens did.
              </p>
            </div>
            <ol className="m-0 grid list-none gap-6 p-0 sm:grid-cols-2">
              {requirementPoints.map((point, index) => (
                <li key={point.title} className="border-t border-border pt-5">
                  <span className="font-mono text-[11px] tabular-nums text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-2 font-display text-lg font-semibold text-text">
                    {point.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted md:text-[15px]">
                    {point.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        )}

        {tab === "competitors" && (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-16">
            <div className="max-w-md">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                Other fitness experiences
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                I reviewed gym chains, class marketplaces and booking platforms to understand the
                patterns members already expect, and where a community-first YMCA could stand out.
              </p>
            </div>
            <ol className="m-0 list-none p-0">
              {competitors.map((item, index) => (
                <li
                  key={item.name}
                  className="group grid grid-cols-[36px_minmax(0,1fr)] gap-4 border-b border-border/70 py-6 first:pt-0 last:border-b-0"
                >
                  <span className="pt-1.5 font-mono text-[11px] tabular-nums text-muted group-hover:text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-xl font-semibold tracking-tight text-text transition-colors hover:text-accent md:text-2xl"
                        data-cursor="Visit"
                      >
                        {item.name}
                        <span aria-hidden="true" className="ml-1.5 text-sm text-muted">
                          ↗
                        </span>
                      </a>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                        {item.focus}
                      </span>
                    </div>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-[15px]">
                      {item.note}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}
        {tab === "competitors" && (
          <div className="mt-12">
            <ImageLightboxGallery
              label="research board"
              items={[
                {
                  src: assetPath("/projects/ymca/research/competitor-board.png"),
                  title: "Competitive research board",
                  note: "Fitness, booking & onboarding patterns",
                  wide: true,
                },
              ]}
            />
          </div>
        )}

        {tab === "audience" && (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-16">
            <div className="max-w-md">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                Members think in tasks, not departments
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                The YMCA is organized around services, programs and teams. Members see none of
                those boundaries, they see one YMCA.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                So I organized the information architecture around the intentions members
                actually have, for both new and returning members.
              </p>
            </div>
            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-text">
                What members need
              </p>
              <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
                {audienceNeeds.map((item) => (
                  <li key={item.title} className="rounded-xl border border-border bg-surface p-4 md:p-5">
                    <h4 className="font-display text-base font-semibold text-text">{item.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
