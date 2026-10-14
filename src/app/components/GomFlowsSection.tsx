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
  "Map the narrative end to end with the client: who starts it, what they need, and where it ends.",
  "Break it into stages and decisions, including eligibility rules and alternate paths.",
  "Add every system touchpoint: forms, validation, errors and messages, emails and printed outputs.",
  "Review the flow with the client and analytics team, then lock it as the blueprint for wireframes.",
];

const narratives = [
  {
    name: "PVP",
    detail: "Park vehicle permit",
    parts: ["Personal info", "Forms", "Errors & messages", "Printed licence", "Emails", "And more"],
  },
  {
    name: "Angling licence",
    parts: ["Personal info", "Forms", "Errors & messages", "Printed licence", "Emails", "And more"],
  },
  {
    name: "Hunting licence",
    parts: ["Personal info", "Forms", "Errors & messages", "Printed licence", "Emails", "And more"],
  },
  {
    name: "Draws",
    parts: ["Application process", "Add a member", "Printed licences", "And more"],
  },
  { name: "Special licences", parts: ["Eligibility", "Forms", "Approvals", "And more"] },
  {
    name: "Purchase",
    parts: ["Cart", "Checkout", "Receipt", "Licences", "And more"],
  },
  { name: "Homepage", parts: ["Entry points", "Licence discovery", "Announcements"] },
  { name: "Account page", parts: ["Profile", "My licences", "History", "Settings"] },
  { name: "Login / sign-up", parts: ["Sign in with Microsoft", "Account creation", "Recovery"] },
];

const flowExamples = [
  { file: "01-purchase-flow.jpg", title: "Licence purchase", note: "Sign-in to receipt" },
  { file: "02-purchase-flow-forms.jpg", title: "Licence purchase", note: "With licence forms" },
  { file: "03-angling-licence.jpg", title: "Angling licence", note: "Purchase flow" },
  { file: "04-park-vehicle-permit.jpg", title: "Park vehicle permit", note: "Purchase flow" },
].map((item) => ({ ...item, wide: true, src: assetPath(`/projects/gom/flows/${item.file}`) }));

const contentPoints = [
  {
    title: "Plain language first",
    body: "Licensing rules and regulations were rewritten into short, plain-language copy so residents can understand what they need without reading policy documents.",
  },
  {
    title: "Content inside the flows",
    body: "Every flow carried its own content: labels, help text, error and success messages, email copy and printed licence text, written and reviewed together with the screens.",
  },
  {
    title: "Client review loop",
    body: "Content was reviewed with the Government of Manitoba program owners to make sure it was accurate, legally correct and consistent across licences.",
  },
  {
    title: "Consistent voice",
    body: "A shared set of terms and message patterns kept the voice the same from the homepage to the receipt, in every licence type.",
  },
];

const accessibilityPoints = [
  {
    title: "Built to WCAG guidelines",
    body: "Colour contrast, type sizes, focus states and touch targets were designed to meet government accessibility requirements from the start.",
  },
  {
    title: "Forms everyone can complete",
    body: "Clear labels, logical order, helpful errors next to the field and no reliance on colour alone, so forms work for keyboard and screen reader users.",
  },
  {
    title: "Analytics informed",
    body: "Accessibility gaps surfaced by the client's analytics team on the old site became specific fixes in the new design.",
  },
  {
    title: "Every device",
    body: "Responsive layouts so residents can buy and show their licence on a phone, tablet or desktop.",
  },
];

const testingPoints = [
  {
    title: "Flow walkthroughs",
    body: "High-level flows and wireframes were walked through with the client before visual design, catching gaps in rules and edge cases early.",
  },
  {
    title: "Usability testing",
    body: "Key tasks like buying a licence, applying for a draw and adding a member were tested with users to find where people hesitate or get stuck.",
  },
  {
    title: "Iterate on findings",
    body: "Findings were prioritised with the client and fed straight back into the flows, content and screens.",
  },
  {
    title: "Measure after launch",
    body: "Funnels, friction and conversion from the analytics team were used to confirm improvements against the old site.",
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

/** GOM only: high-level flows plus content, accessibility and testing tabs. */
export function GomFlowsSection() {
  const [tab, setTab] = useState<TabId>("flows");

  return (
    <section
      aria-labelledby="gom-flows-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          High-level flow
        </p>
        <h2
          id="gom-flows-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          Mapping every narrative
          <span className="text-muted"> before </span>
          designing screens
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
          Before any wireframe, I created a high-level flow for each narrative of the e-licensing
          system, then shaped the content, accessibility and testing around them.
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
              aria-controls={`gom-flows-panel-${item.id}`}
              id={`gom-flows-tab-${item.id}`}
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

      <div role="tabpanel" id={`gom-flows-panel-${tab}`} aria-labelledby={`gom-flows-tab-${tab}`}>
        {tab === "flows" && (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-16">
            <div className="max-w-md">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                One flow per narrative
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                Each licence and service had its own rules, so each got its own high-level flow.
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
                Examples of the high-level flows: from the homepage and Microsoft sign-in, through
                licence selection, forms, cart and checkout, to payment, the confirmation email,
                the account page and the printed licence. Click any flow to open it larger.
              </p>
            </div>
            <ImageLightboxGallery label="flow" items={flowExamples} />
          </>
        )}

        {tab === "content" && (
          <Panel
            title="Content process"
            lead="Government licensing lives or dies on its words. Content was designed alongside the flows, not added at the end."
          >
            <PointGrid points={contentPoints} />
          </Panel>
        )}

        {tab === "accessibility" && (
          <Panel
            title="Accessibility"
            lead="A public service has to work for every resident of Manitoba, so accessibility was a requirement in every flow and component."
          >
            <PointGrid points={accessibilityPoints} />
          </Panel>
        )}

        {tab === "testing" && (
          <Panel
            title="Testing"
            lead="Flows and designs were validated with the client and with users before and after build."
          >
            <PointGrid points={testingPoints} />
          </Panel>
        )}
      </div>
    </section>
  );
}
