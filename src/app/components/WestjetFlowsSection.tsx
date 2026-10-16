import { useState } from "react";
import { assetPath } from "../lib/assetPath";
import { ImageLightboxGallery } from "./ImageLightboxGallery";

type TabId = "flows" | "examples" | "content" | "accessibility" | "testing";

const TABS: { id: TabId; label: string }[] = [
  { id: "flows", label: "High-level flows" },
  { id: "examples", label: "Flow examples" },
  { id: "content", label: "Content process" },
  { id: "accessibility", label: "Accessibility" },
  { id: "testing", label: "Validation" },
];

const flowSteps = [
  "Start from the passenger's goal: what they want to do, and where they are in the trip when they need it.",
  "Map the current WestJet app first, so the proposal builds on real screens, not assumptions.",
  "Add every touchpoint: booking, trips, check-in, bags, boarding, flight status and travel info.",
  "Connect each passenger step to the operational system behind it: ticketing, baggage, ground ops and maintenance.",
];

const narratives: { name: string; detail?: string; parts: string[] }[] = [
  { name: "Book a flight", parts: ["Round trip / one way / multi-city", "Airports", "Dates", "Passengers", "Promo code"] },
  { name: "Trips", parts: ["Add a trip", "Add a trip & check in", "WestJet Vacations bookings"] },
  { name: "Check-in", parts: ["Passengers", "Seats", "Bags", "Progress", "Boarding pass"] },
  { name: "Baggage", parts: ["Checked", "Loaded", "Arrived", "Bag status in passenger language"] },
  { name: "Boarding", parts: ["Gate", "Boarding time", "Zone", "Boarding pass"] },
  { name: "Flight status", parts: ["Flight number", "Route", "Nearby airports", "Arrivals & departures"] },
  { name: "Be travel ready", parts: ["Baggage info", "Changes & refunds", "Destination requirements", "Prepare for your journey"] },
  { name: "Operations & maintenance", parts: ["Ground ops", "Aircraft status", "Maintenance concepts"] },
];

const flowExamples = [
  { file: "01-current-app-flows.png", title: "Current WestJet app flows", note: "Book, trips, flight status and travel ready" },
].map((item) => ({ ...item, src: assetPath(`/projects/westjet/flows/${item.file}`) }));

const contentPoints = [
  { title: "Written for passengers", body: "Copy speaks travellers' language, short and calm, instead of internal ticketing, baggage or operations terms." },
  { title: "What happened, what to do", body: "Status and notification copy always answers what happened, whether it affects me and what to do next." },
  { title: "Content that changes with time", body: "Messages and hierarchy shift as departure gets closer, from planning details to gate and boarding information." },
  { title: "One voice across the journey", body: "Booking, check-in, bags and boarding were written as one story, so the trip feels connected end to end." },
];

const accessibilityPoints = [
  { title: "Readable under pressure", body: "Gate, time and boarding pass information designed for fast scanning in busy, bright or dark airports." },
  { title: "One-handed use", body: "Key actions within thumb reach for passengers carrying bags, tickets and children." },
  { title: "Forms everyone can complete", body: "Clear labels, logical order and inline errors for booking, passenger details and check-in." },
  { title: "Native patterns", body: "iOS and Android patterns and states so the app works with each platform's accessibility features." },
];

const testingPoints = [
  { title: "Current app review", body: "Walked through the existing WestJet app flows to find where passengers lose context between booking, trips and check-in." },
  { title: "Benchmark against peers", body: "Compared flows with Air Canada, Porter and other travel apps to see which patterns travellers already expect." },
  { title: "Stakeholder walkthroughs", body: "Flows and concepts were walked through with WestJet stakeholders, so feedback shaped the proposal early." },
  { title: "Proof with real screens", body: "High-fidelity native pages turned the flows into something stakeholders could hold and evaluate." },
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

function Panel({
  title,
  lead,
  children,
}: {
  title: string;
  lead: string;
  children: React.ReactNode;
}) {
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

/** WestJet only: high-level flows plus examples, content, accessibility and validation tabs. */
export function WestjetFlowsSection() {
  const [tab, setTab] = useState<TabId>("flows");

  return (
    <section
      aria-labelledby="westjet-flows-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          High-level flow
        </p>
        <h2
          id="westjet-flows-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          Mapping every narrative
          <span className="text-muted"> before </span>
          designing screens
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
          Before any new screen, I mapped the current app and a high-level flow for each part of
          the trip, then shaped the content, accessibility and validation around them.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="High-level flow sections"
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
              aria-controls={`westjet-flows-panel-${item.id}`}
              id={`westjet-flows-tab-${item.id}`}
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

      <div role="tabpanel" id={`westjet-flows-panel-${tab}`} aria-labelledby={`westjet-flows-tab-${tab}`}>
        {tab === "flows" && (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-16">
            <div className="max-w-md">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                One flow per narrative
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                Each moment of the trip has its own needs, so each got its own high-level flow.
                The process was the same every time:
              </p>
              <ol className="mt-6 m-0 list-none space-y-4 p-0">
                {flowSteps.map((step, index) => (
                  <li key={step} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3">
                    <span className="font-mono text-[11px] tabular-nums text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed text-muted md:text-[15px]">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
            <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
              {narratives.map((item) => (
                <li key={item.name} className="rounded-xl border border-border bg-surface p-4 md:p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="font-display text-base font-semibold text-text">{item.name}</h4>
                    {item.detail && (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                        {item.detail}
                      </span>
                    )}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.parts.map((part) => (
                      <span
                        key={part}
                        className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted"
                      >
                        {part}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {tab === "examples" && (
          <>
            <div className="mb-8 max-w-2xl">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                Flow examples
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                The current WestJet app mapped end to end: booking a flight, trips and check-in,
                flight status and the travel-ready information pages. This was the starting point
                for the proposal. Click the flow to open it larger.
              </p>
            </div>
            <ImageLightboxGallery label="flow" items={flowExamples} />
          </>
        )}

        {tab === "content" && (
          <Panel
            title="Content process"
            lead="I shaped the product language alongside the flows, so every moment of the trip spoke to passengers the same way."
          >
            <PointGrid points={contentPoints} />
          </Panel>
        )}

        {tab === "accessibility" && (
          <Panel
            title="Accessibility"
            lead="Airports are stressful, crowded places, so accessibility was a requirement in every flow and concept."
          >
            <PointGrid points={accessibilityPoints} />
          </Panel>
        )}

        {tab === "testing" && (
          <Panel
            title="Validation"
            lead="As a proposal, the flows were validated against the current app, competitors and WestJet stakeholders."
          >
            <PointGrid points={testingPoints} />
          </Panel>
        )}
      </div>
    </section>
  );
}
