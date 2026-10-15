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
  "Start from the business rule with BAs and stakeholders: who can do it, when, and what changes.",
  "Map each user group separately: PPJV staff, CU staff and CU members.",
  "Add every state: validation, file and field errors, security scans, confirmations and success.",
  "Walk the flow with stakeholders and BAs, then lock it as the blueprint for screens and stories.",
];

const narratives: { name: string; detail?: string; parts: string[] }[] = [
  { name: "Sign-in & password", parts: ["White-label login", "Create password", "Validation rules"] },
  { name: "Dashboard", parts: ["Transfer status", "Bulletins", "Alerts"] },
  { name: "Schedule transfer · upload file", parts: ["Select originator", "Attach file", "Security scan", "File & field errors", "Summary"] },
  { name: "Transactions", parts: ["View transactions", "Filters", "Recall / error correction", "Transaction details"] },
  { name: "Manage originators", parts: ["Search", "Add originator", "Details", "Status"] },
  { name: "Reports", parts: ["Search reports", "Access controls report", "Export"] },
  { name: "Access & permissions", parts: ["Roles", "Permission types", "User status"] },
  { name: "Manage settings", parts: ["Alerts", "Bulletins", "Holidays", "Create, read, update, delete"] },
  { name: "Notifications", parts: ["Requests", "Approvals", "Blocked / unblocked"] },
];

const flowExamples = [
  { file: "01-upload-cu-staff.jpg", title: "Schedule transfer · upload file", note: "CU staff" },
  { file: "02-upload-cu-member.jpg", title: "Schedule transfer · upload file", note: "CU member" },
].map((item) => ({ ...item, wide: true, src: assetPath(`/projects/ppjv/flows/${item.file}`) }));

const contentPoints = [
  { title: "Errors that explain", body: "Every error answers what happened, why it matters and what to do next, from file format errors to field-level issues." },
  { title: "One status language", body: "Status labels like pending, released, blocked or rejected use consistent words, colours and placement across the platform." },
  { title: "Content inside the flows", body: "Labels, helper text, confirmations, bulletins and notifications were written together with each flow, not added at the end." },
  { title: "Reviewed with the business", body: "Content was reviewed with BAs and stakeholders to make sure it was accurate for financial rules and consistent for every user group." },
];

const accessibilityPoints = [
  { title: "Status beyond colour", body: "States never rely on colour alone, using text, icons and placement so everyone can read them." },
  { title: "Dense but readable", body: "Tables and forms balance density with clear type, spacing and contrast for long working sessions." },
  { title: "Keyboard-friendly forms", body: "Clear labels, logical order and inline errors so complex forms work for keyboard and screen reader users." },
  { title: "Built into Aurora", body: "Accessibility states were defined in the Aurora design system, so every component shipped with them." },
];

const testingPoints = [
  { title: "Flow walkthroughs", body: "High-level flows and prototypes were walked through with stakeholders and BAs before visual design, catching rule gaps early." },
  { title: "Edge cases first", body: "File upload, security scan and validation flows were reviewed for edge cases and failure paths, not just the happy path." },
  { title: "Iterate on findings", body: "Findings were prioritised and fed straight back into the flows, content and Aurora components." },
  { title: "Design QA with QA", body: "Reviewed builds with developers and QA against the designs, including states and accessibility." },
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

/** PPJV only: high-level flows plus examples, content, accessibility and testing tabs. */
export function PpjvFlowsSection() {
  const [tab, setTab] = useState<TabId>("flows");

  return (
    <section
      aria-labelledby="ppjv-flows-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          High-level flow
        </p>
        <h2
          id="ppjv-flows-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          Mapping every narrative
          <span className="text-muted"> before </span>
          designing screens
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
          Before any screen, I mapped a high-level flow for each part of the CAFT platform, then
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
              aria-controls={`ppjv-flows-panel-${item.id}`}
              id={`ppjv-flows-tab-${item.id}`}
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

      <div role="tabpanel" id={`ppjv-flows-panel-${tab}`} aria-labelledby={`ppjv-flows-tab-${tab}`}>
        {tab === "flows" && (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-16">
            <div className="max-w-md">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                One flow per narrative
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                Each workflow and user group had its own rules, so each got its own high-level
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
                Examples of the high-level flows: the schedule transfer and file upload flow for CU
                staff and for CU members, covering selection, file errors, security scans, upload
                summaries, the transaction list and confirmation. Click any flow to open it larger.
              </p>
            </div>
            <ImageLightboxGallery label="flow" items={flowExamples} />
          </>
        )}

        {tab === "content" && (
          <Panel
            title="Content process"
            lead="In financial operations, words carry risk. Content was designed alongside the flows so every state was clear and actionable."
          >
            <PointGrid points={contentPoints} />
          </Panel>
        )}

        {tab === "accessibility" && (
          <Panel
            title="Accessibility"
            lead="Professionals spend full days in CAFT, so accessibility and readability were requirements in every flow and component."
          >
            <PointGrid points={accessibilityPoints} />
          </Panel>
        )}

        {tab === "testing" && (
          <Panel
            title="Testing"
            lead="Flows and designs were validated with stakeholders and BAs, then checked again during development."
          >
            <PointGrid points={testingPoints} />
          </Panel>
        )}
      </div>
    </section>
  );
}
