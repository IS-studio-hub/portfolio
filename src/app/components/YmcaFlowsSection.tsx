import { useState } from "react";
import { assetPath } from "../lib/assetPath";
import { ImageLightboxGallery } from "./ImageLightboxGallery";

type TabId = "flows" | "examples" | "content" | "accessibility" | "testing";

const TABS: { id: TabId; label: string }[] = [
  { id: "flows", label: "High-level flows" },
  { id: "examples", label: "Flow examples" },
  { id: "content", label: "Content process" },
  { id: "accessibility", label: "Accessibility" },
  { id: "testing", label: "Testing" },
];

const flowSteps = [
  "Start from the member's goal: what they want to do and where the journey begins and returns.",
  "Map each member type separately: new members, existing members and families.",
  "Add every touchpoint: sign-up, profile, payment, scan, calendar, notifications and in-app moments.",
  "Walk the flow with stakeholders and BAs, then lock it as the blueprint for screens and stories.",
];

const narratives: { name: string; detail?: string; parts: string[] }[] = [
  { name: "Onboarding", parts: ["Intro screens", "Value messages", "Get started"] },
  {
    name: "Sign-up & existing members",
    parts: ["Public sign-up", "Existing member", "Guest / new user", "Membership upgrade"],
  },
  { name: "Family accounts", parts: ["Setup profile", "Add a member", "Address", "Payment details"] },
  { name: "Home", parts: ["Greeting", "Hours & location", "Drop-in classes", "Recommendations", "Articles & tips"] },
  { name: "Scan & membership", parts: ["QR check-in", "Membership card", "One-time pass", "Wallet"] },
  { name: "Calendar & booking", parts: ["Book activity", "Calendar", "Family member select"] },
  { name: "Profile & settings", parts: ["Profile", "Our plans", "Privacy policy", "Help", "Logout"] },
  { name: "Notifications", parts: ["Reminders", "System", "Workout updates"] },
  { name: "Member moments", parts: ["Happy birthday", "30 days streak", "Impressive progress", "Membership changes"] },
];

const flowExamples = [
  { file: "01-full-flow.png", title: "Full app flow", note: "All member types" },
  { file: "02-family-existing.png", title: "Family existing member", note: "Profile, add member, payment" },
  { file: "03-onboarding-home.png", title: "Onboarding to home", note: "Home, scan, calendar, profile" },
  { file: "04-moments.png", title: "Member moments", note: "Milestones & membership change" },
].map((item) => ({ ...item, src: assetPath(`/projects/ymca/flows/${item.file}`) }));

const contentPoints = [
  { title: "Written for members", body: "Copy speaks the member's language, short, friendly and task-first, instead of internal program or department names." },
  { title: "Content inside the flows", body: "Labels, helper text, errors, notifications and celebration messages were written together with each flow, not added at the end." },
  { title: "Marketing meets utility", body: "Worked with marketing so offers and messages had a clear place in the app without getting in the way of member tasks." },
  { title: "One product voice", body: "As solo UX/UI and content designer, I kept one consistent voice across onboarding, home, scan, calendar and notifications." },
];

const accessibilityPoints = [
  { title: "Accessible from the start", body: "Contrast, type sizes, touch targets and focus states were designed into the system, not checked at the end." },
  { title: "Forms everyone can complete", body: "Clear labels, logical order and inline errors for sign-up, family member and payment forms." },
  { title: "Glanceable at the door", body: "Scan and membership screens designed to be fast and readable at the facility entrance, in any lighting." },
  { title: "Native patterns", body: "iOS and Android patterns and states so the app works with each platform's accessibility features." },
];

const testingPoints = [
  { title: "Flow walkthroughs", body: "High-level flows and prototypes were walked through with stakeholders and BAs before visual design, catching gaps early." },
  { title: "Task-based testing", body: "Key tasks like signing up, adding a family member, booking an activity and scanning in were tested to find where people hesitate." },
  { title: "Iterate on findings", body: "Findings were prioritised and fed straight back into the flows, content and components." },
  { title: "Design QA in build", body: "Reviewed builds with developers against the designs, including states and accessibility, so design was part of the build." },
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

/** YMCA only: high-level flows plus examples, content, accessibility and testing tabs. */
export function YmcaFlowsSection() {
  const [tab, setTab] = useState<TabId>("flows");

  return (
    <section
      aria-labelledby="ymca-flows-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          High-level flow
        </p>
        <h2
          id="ymca-flows-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          Mapping every narrative
          <span className="text-muted"> before </span>
          designing screens
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
          Before any screen, I mapped a high-level flow for each part of the member app, then
          shaped the content, accessibility and testing around them.
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
              aria-controls={`ymca-flows-panel-${item.id}`}
              id={`ymca-flows-tab-${item.id}`}
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

      <div role="tabpanel" id={`ymca-flows-panel-${tab}`} aria-labelledby={`ymca-flows-tab-${tab}`}>
        {tab === "flows" && (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-16">
            <div className="max-w-md">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                One flow per narrative
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                Each member type and journey had its own needs, so each got its own high-level
                flow. The process was the same every time:
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
                Examples of the high-level flows: the full app map across member types, the family
                sign-up and payment flow, onboarding into home, scan, calendar and profile, and the
                in-app member moments. Click any flow to open it larger.
              </p>
            </div>
            <ImageLightboxGallery label="flow" items={flowExamples} />
          </>
        )}

        {tab === "content" && (
          <Panel
            title="Content process"
            lead="As the solo content designer, I wrote the product language alongside the flows so every screen spoke to members the same way."
          >
            <PointGrid points={contentPoints} />
          </Panel>
        )}

        {tab === "accessibility" && (
          <Panel
            title="Accessibility"
            lead="A community organization serves everyone, so accessibility was a requirement in every flow and component."
          >
            <PointGrid points={accessibilityPoints} />
          </Panel>
        )}

        {tab === "testing" && (
          <Panel
            title="Testing"
            lead="Flows and designs were validated with stakeholders and members, then checked again during development."
          >
            <PointGrid points={testingPoints} />
          </Panel>
        )}
      </div>
    </section>
  );
}
