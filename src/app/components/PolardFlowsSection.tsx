import { useState } from "react";
import { assetPath } from "../lib/assetPath";
import { ImageLightboxGallery } from "./ImageLightboxGallery";
import type { PolardVariant } from "./PolardResearchSection";

type TabId = "flows" | "examples" | "content" | "accessibility" | "testing";

type Point = { title: string; body: string };
type Narrative = { name: string; detail?: string; parts: string[] };

type FlowContent = {
  intro: string;
  flowsLead: string;
  flowSteps: string[];
  narratives: Narrative[];
  /** Images in /projects/polard/flows/. The "Flow examples" tab only shows when there are some. */
  examples: { file: string; title: string; note?: string; wide?: boolean }[];
  examplesLead: string;
  contentLead: string;
  contentPoints: Point[];
  accessibilityLead: string;
  accessibilityPoints: Point[];
  testingLead: string;
  testingPoints: Point[];
};

const CONTENT: Record<PolardVariant, FlowContent> = {
  portal: {
    intro:
      "Before any screen, I mapped the Business Portal as one connected flow: a home page that branches into each gaming area, with reporting, legal and downloads always one step away. Then I shaped the content, accessibility and testing around it.",
    flowsLead:
      "Every gaming area follows the same pattern, so users learn the portal once. The process was the same for each area:",
    flowSteps: [
      "Start from the home page: a side navigation for every gaming area and cards that lead into each one.",
      "Give each area the same structure: an overview, a 'Read more' for detail, and its own Forms/Reports.",
      "Let users select several forms or reports at once, then download them together or clear the selection.",
      "Design the mobile version of every screen, with area tabs on top and stacked content, so the flow works on any device.",
    ],
    narratives: [
      {
        name: "Home",
        parts: ["Hero carousel", "Gaming area side nav", "iGaming & Sports Wagering cards", "Forms/Reports download"],
      },
      {
        name: "iGaming & Sports Wagering",
        parts: ["Program overview", "Read more modal", "Complaint guidance", "Forms/Reports"],
      },
      {
        name: "Secured Portal Reporting",
        parts: ["Year, from & to filters", "County, city & date", "Search & clear all", "Results table"],
      },
      {
        name: "Table Games",
        parts: ["Overview", "Table games contracts", "Occupational licensing", "Licence list"],
      },
      {
        name: "Racetrack Video Lottery",
        parts: ["Overview", "Forms/Reports checklist", "Select & download"],
      },
      {
        name: "Traditional Lottery",
        parts: ["Overview", "Traditional licence FAQ", "Retailer application"],
      },
      {
        name: "Legal",
        detail: "FOIA",
        parts: ["Legal (FOIA) selector", "Laws & policies", "Statutes", "Policy statements & rules"],
      },
      {
        name: "Mobile",
        detail: "Every screen",
        parts: ["Area tabs", "Carousel", "Stacked Forms/Reports", "Filters & search"],
      },
    ],
    examples: [
      {
        file: "01-portal-flow.png",
        title: "Business Portal flow",
        note: "Home to gaming areas, reporting, legal & mobile",
        wide: true,
      },
    ],
    examplesLead:
      "The Business Portal flow mapped end to end: from the home page and its gaming area cards into iGaming and Sports Wagering details, secure portal reporting, table games, racetrack video lottery, traditional lottery and legal pages, plus the mobile versions of the same screens. Click the flow to open it larger.",
    contentLead:
      "Business portals are full of rules and legal language, so I worked to keep labels, help text and statuses clear and consistent.",
    contentPoints: [
      { title: "Plain business language", body: "Labels and help text written for retailers and licensees, not internal department names." },
      { title: "Overview first, detail on demand", body: "Each area opens with a short overview, and 'Read more' reveals the full legal and program detail only when people need it." },
      { title: "Grouped by gaming area", body: "Forms, reports and documents live inside the area they belong to: iGaming, table games, racetrack video lottery, traditional lottery or legal." },
      { title: "Messages inside the flow", body: "Errors, empty states and confirmations written together with each flow, not added at the end." },
    ],
    accessibilityLead:
      "A public lottery portal serves everyone, so accessibility was built into every flow and component.",
    accessibilityPoints: [
      { title: "Accessible from the start", body: "Contrast, type sizes, focus states and keyboard use were designed into the components." },
      { title: "Tables people can read", body: "Clear headers, sorting and filtering so data-dense tables stay readable for everyone." },
      { title: "Forms everyone can complete", body: "Clear labels, logical order and inline errors for licensing and application forms." },
      { title: "Modals and navigation", body: "'Read more' modals with focus handling and a clear close, plus side navigation that shows which area you are in." },
    ],
    testingLead:
      "Flows and designs were validated with the client and checked again during development.",
    testingPoints: [
      { title: "Flow walkthroughs", body: "High-level flows and prototypes were walked through with the client before visual design, catching gaps early." },
      { title: "Task-based reviews", body: "Key tasks like downloading a set of forms, running a secured report and finding a statute were reviewed step by step." },
      { title: "Iterate on findings", body: "Feedback was prioritised and fed back into the flows, content and components." },
      { title: "Design QA in build", body: "Reviewed builds with developers against the designs, including states and accessibility." },
    ],
  },
  app: {
    intro:
      "Before any screen, I mapped a high-level flow for each part of the Player App, then shaped the content, accessibility and testing around them.",
    flowsLead:
      "Each player moment has its own needs, so each got its own high-level flow. The process was the same every time:",
    flowSteps: [
      "Start from the player's goal: check a jackpot, play a game, scan a ticket or manage money.",
      "Map guest and signed-in players separately, since they see different things.",
      "Add every touchpoint: games, PlayON, rewards, account, funds, confirmations and errors.",
      "Walk the flow with the client and developers, then lock it as the blueprint for screens and stories.",
    ],
    narratives: [
      { name: "Home", detail: "Guest & signed in", parts: ["Jackpots", "Buy Now", "Instant games", "Promotions"] },
      { name: "Games", parts: ["Instant games", "Draw games", "Next draws", "How to play"] },
      { name: "PlayON", parts: ["Scan tickets", "Enter promo code", "Invite friends", "Earn points"] },
      { name: "Rewards & second chance", parts: ["Rewards", "Coupons", "Digital games", "Second-chance draws"] },
      { name: "Account", parts: ["Balance", "Points", "Activity", "Settings"] },
      { name: "Add funds", parts: ["Amount", "Payment method", "Confirm", "Updated balance"] },
      { name: "Errors & help", parts: ["Something went wrong", "Helpful links", "Contact us"] },
    ],
    examples: [],
    examplesLead: "",
    contentLead:
      "Players move fast, so copy had to be short, friendly and clear, especially around money and rules.",
    contentPoints: [
      { title: "Short and friendly", body: "Copy written for quick moments: jackpots, prizes and next steps in a few words." },
      { title: "Clear about money", body: "Add funds and confirmations say exactly what will happen before money moves." },
      { title: "Rules without fine print", body: "How to play and reward rules explained in simple steps." },
      { title: "Honest errors", body: "Error screens explain what happened and what to do next, with helpful links." },
    ],
    accessibilityLead:
      "A lottery app is used by a wide range of players, so accessibility was a requirement in every flow.",
    accessibilityPoints: [
      { title: "Readable and tappable", body: "Contrast, type sizes and large touch targets across games, rewards and account." },
      { title: "Native patterns", body: "iOS and Android patterns so the app works with each platform's accessibility features." },
      { title: "Forms everyone can complete", body: "Clear labels and inline errors for sign-in, promo codes and adding funds." },
      { title: "Not only colour", body: "Status and prizes shown with text and icons, not colour alone." },
    ],
    testingLead:
      "Flows and designs were validated with the client and checked again during development.",
    testingPoints: [
      { title: "Flow walkthroughs", body: "Flows and prototypes were walked through with the client before visual design, catching gaps early." },
      { title: "Task-based reviews", body: "Key tasks like buying, scanning a ticket, redeeming a reward and adding funds were reviewed step by step." },
      { title: "Iterate on findings", body: "Feedback was prioritised and fed back into the flows, content and components." },
      { title: "Design QA in build", body: "Reviewed builds with developers against the designs, including states and accessibility." },
    ],
  },
};

function PointGrid({ points }: { points: Point[] }) {
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

/** Lottery Portal only: high-level flow section per project (business portal or player app). */
export function PolardFlowsSection({ variant }: { variant: PolardVariant }) {
  const [tab, setTab] = useState<TabId>("flows");
  const c = CONTENT[variant];

  const tabs: { id: TabId; label: string }[] = [
    { id: "flows", label: "High-level flows" },
    ...(c.examples.length > 0 ? [{ id: "examples" as const, label: "Flow examples" }] : []),
    { id: "content", label: "Content process" },
    { id: "accessibility", label: "Accessibility" },
    { id: "testing", label: "Testing" },
  ];

  return (
    <section
      aria-labelledby="polard-flows-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          High-level flow
        </p>
        <h2
          id="polard-flows-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          Mapping every narrative
          <span className="text-muted"> before </span>
          designing screens
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">{c.intro}</p>
      </div>

      <div
        role="tablist"
        aria-label="High-level flow sections"
        className="mb-8 flex flex-wrap gap-2 border-b border-border pb-3"
      >
        {tabs.map((item) => {
          const active = tab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`polard-flows-panel-${item.id}`}
              id={`polard-flows-tab-${item.id}`}
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

      <div role="tabpanel" id={`polard-flows-panel-${tab}`} aria-labelledby={`polard-flows-tab-${tab}`}>
        {tab === "flows" && (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-16">
            <div className="max-w-md">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                One flow per narrative
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">{c.flowsLead}</p>
              <ol className="mt-6 m-0 list-none space-y-4 p-0">
                {c.flowSteps.map((step, index) => (
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
              {c.narratives.map((item) => (
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

        {tab === "examples" && c.examples.length > 0 && (
          <>
            <div className="mb-8 max-w-2xl">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                Flow examples
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">{c.examplesLead}</p>
            </div>
            <ImageLightboxGallery
              label="flow"
              items={c.examples.map((item) => ({
                src: assetPath(`/projects/polard/flows/${item.file}`),
                title: item.title,
                note: item.note,
                wide: item.wide,
              }))}
            />
          </>
        )}

        {tab === "content" && (
          <Panel title="Content process" lead={c.contentLead}>
            <PointGrid points={c.contentPoints} />
          </Panel>
        )}

        {tab === "accessibility" && (
          <Panel title="Accessibility" lead={c.accessibilityLead}>
            <PointGrid points={c.accessibilityPoints} />
          </Panel>
        )}

        {tab === "testing" && (
          <Panel title="Testing" lead={c.testingLead}>
            <PointGrid points={c.testingPoints} />
          </Panel>
        )}
      </div>
    </section>
  );
}
