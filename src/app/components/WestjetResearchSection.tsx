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
    body: "As Creative Director and Proposal Lead Designer, I worked directly with WestJet stakeholders and their product, business and technical teams, from the first conversations through detailed app pages.",
  },
  {
    title: "Two journeys in the same room",
    body: "Requirements came from both sides of the airline: what passengers experience, and what ticketing, baggage, ground ops and maintenance teams need behind the scenes.",
  },
  {
    title: "Vision before screens",
    body: "Meetings started with the story (challenge, opportunity, vision, experience) so stakeholders agreed on why the product should exist before we debated where buttons go.",
  },
  {
    title: "Fast, visual feedback loops",
    body: "FigJam journeys and early native concepts were walked through live, so feedback was concrete and decisions came back as tangible screens in the next session.",
  },
];

const competitors = [
  {
    name: "Air Canada",
    focus: "National carrier",
    note: "The main Canadian peer for booking, trip management, check-in and status updates.",
    url: "https://www.aircanada.com/",
  },
  {
    name: "Porter Airlines",
    focus: "Regional / premium leisure",
    note: "A Canadian competitor with a distinctive brand voice and a calm, guest-first tone.",
    url: "https://www.flyporter.com/",
  },
  {
    name: "Flair Airlines",
    focus: "Ultra-low-cost",
    note: "Price-led booking flows that put pressure on ancillary and add-on UX.",
    url: "https://flyflair.com/",
  },
  {
    name: "Delta",
    focus: "Global digital airline",
    note: "The benchmark for polished trip apps, bag tracking and disruption communication.",
    url: "https://www.delta.com/",
  },
];

const audienceNeeds = [
  { title: "Planning the trip", body: "Relaxed browsing and booking, with clear fares, travellers and what is included." },
  { title: "Getting ready to fly", body: "Check-in, seats and bags with visible progress, so people know what is done and what is left." },
  { title: "At the airport", body: "Gate, boarding time and zone first, readable in seconds and usable with one hand." },
  { title: "Where is my bag", body: "Baggage status in passenger language that reassures, not internal system jargon." },
  { title: "When plans change", body: "Delays and gate changes that say what happened, whether it affects me and what to do next." },
  { title: "Operations teams", body: "Ground, baggage and maintenance staff who need dense, reliable information to keep the journey moving." },
];

/** WestJet only: research section with requirement meetings, competitors and target audience tabs. */
export function WestjetResearchSection() {
  const [tab, setTab] = useState<TabId>("requirements");

  return (
    <section
      aria-labelledby="westjet-research-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Research</p>
        <h2
          id="westjet-research-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          Understanding the client,
          <span className="text-muted"> the field and </span>
          the passengers
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
          Research for the WestJet proposal came from three places: stakeholder requirements,
          comparable airline products, and how passengers actually move through a trip.
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
              aria-controls={`westjet-research-panel-${item.id}`}
              id={`westjet-research-tab-${item.id}`}
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
        id={`westjet-research-panel-${tab}`}
        aria-labelledby={`westjet-research-tab-${tab}`}
      >
        {tab === "requirements" && (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-16">
            <div className="max-w-md">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                Communicating directly with the WestJet team
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                Leading creative direction on a five-person proposal team, I was the stakeholders'
                direct design contact, so a clear story shaped the proposal as much as the screens did.
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

        {tab === "requirements" && (
          <div className="mt-12">
            <ImageLightboxGallery
              label="requirements journey"
              items={[
                {
                  src: assetPath("/projects/westjet/research/05-customer-journey.jpg"),
                  title: "Passenger journey from requirements",
                  note: "From pre-travel planning to post-travel, with opportunities mapped at each stage",
                  wide: true,
                },
              ]}
            />
          </div>
        )}

        {tab === "competitors" && (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-16">
            <div className="max-w-md">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                Other airline experiences
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                I reviewed national, low-cost and global carriers to understand the patterns
                travellers already expect, and where WestJet could feel calmer and more connected.
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
              label="competitor research"
              items={[
                {
                  src: assetPath("/projects/westjet/research/02-ticketing.png"),
                  title: "Ticketing benchmark",
                  note: "Booking flows across airline and travel apps",
                  wide: true,
                },
                {
                  src: assetPath("/projects/westjet/research/01-air-canada-flow.png"),
                  title: "Air Canada end-to-end flow",
                  note: "Booking, payment, check-in and day-of-travel screens",
                },
                {
                  src: assetPath("/projects/westjet/research/03-check-in.png"),
                  title: "Check-in benchmark",
                  note: "Trips, retrieve booking and sign-in: Air Canada vs Porter",
                },
                {
                  src: assetPath("/projects/westjet/research/04-reviews.png"),
                  title: "Reputation research",
                  note: "Google and Tripadvisor reviews: WestJet, Porter, JustFly, Air Canada",
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
                Passengers see one trip, not departments
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                To the airline, ticketing, check-in, baggage and operations live in different
                systems. Passengers see none of those boundaries, they see one trip.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                So I organized the experience around the moments of the journey, and what
                people need in each one as departure gets closer.
              </p>
            </div>
            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-text">
                What travellers need
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
