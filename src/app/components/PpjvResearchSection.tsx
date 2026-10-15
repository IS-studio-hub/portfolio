import { useState } from "react";
import { assetPath } from "../lib/assetPath";
import { ImageLightboxGallery } from "./ImageLightboxGallery";

type TabId = "requirements" | "competitors" | "audience" | "ui";

const TABS: { id: TabId; label: string }[] = [
  { id: "requirements", label: "Requirement meetings" },
  { id: "competitors", label: "Competitors" },
  { id: "audience", label: "Target audience" },
  { id: "ui", label: "UI research" },
];

const requirementPoints = [
  {
    title: "Direct line to the business",
    body: "I worked directly with PPJV stakeholders and Business Analysts, hearing the business rules, permissions and operational needs first-hand instead of through hand-offs.",
  },
  {
    title: "Rules into experience",
    body: "Enterprise financial logic, required fields, states and edge cases were turned into flows that show conditions, available actions, failures and recovery, not just happy paths.",
  },
  {
    title: "Aligning a large team",
    body: "With two UX designers supporting a 58-person delivery team, I facilitated requirement sessions, captured decisions and played them back visually so everyone agreed on what to build.",
  },
  {
    title: "Fast, visual feedback loops",
    body: "Flows and prototypes were walked through in meetings, so feedback was concrete and changes came back in the next session.",
  },
];

const competitors = [
  {
    name: "Backbase",
    focus: "Digital banking suite",
    note: "Composable engagement banking that sets expectations for modular, consistent banking UX.",
    url: "https://www.backbase.com/",
  },
  {
    name: "Temenos",
    focus: "Core banking",
    note: "Enterprise core systems that shape how internal operational tools look and behave.",
    url: "https://www.temenos.com/",
  },
  {
    name: "Thought Machine",
    focus: "Cloud core banking",
    note: "Modern core alternatives influencing cleaner product surfaces for operations teams.",
    url: "https://www.thoughtmachine.net/",
  },
  {
    name: "FIS",
    focus: "Banking technology",
    note: "Large-scale banking software across channels and operations, a benchmark for density and scale.",
    url: "https://www.fisglobal.com/",
  },
];

const audienceNeeds = [
  { title: "PPJV staff", body: "Manage credit unions, originators, access controls and system communication like alerts, bulletins and holidays." },
  { title: "CU staff", body: "Manage businesses and originators, upload transfer files and review transactions for their credit union." },
  { title: "CU members", body: "Business members who schedule transfers, upload files and track the status of their payments." },
  { title: "Status at a glance", body: "Every user needs to see what is pending, released or failed without reading every row." },
  { title: "Recover from errors", body: "File, field and security errors must explain what happened and what to do next." },
  { title: "Consistent patterns", body: "Professionals repeat the same tasks daily, so actions and layouts must stay predictable." },
];

const uiResearch = [
  { file: "ui-01-colour-palette.png", title: "Colour palette", note: "Login customization options" },
  { file: "ui-02-typography.png", title: "Typography", note: "Login customization options" },
  { file: "ui-03-logo-background-border.png", title: "Logo, background & borders", note: "Widget & page settings" },
  { file: "ui-04-cu-logos.png", title: "Credit union logos", note: "Mocked logos & logo specs" },
].map((item) => ({ ...item, src: assetPath(`/projects/ppjv/research/${item.file}`) }));

/** PPJV only: research section with requirements, competitors, audience and UI research tabs. */
export function PpjvResearchSection() {
  const [tab, setTab] = useState<TabId>("requirements");

  return (
    <section
      aria-labelledby="ppjv-research-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Research</p>
        <h2
          id="ppjv-research-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          Understanding the client,
          <span className="text-muted"> the field and </span>
          the users
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
          Research for the CAFT banking platform came from stakeholder requirements, comparable
          banking products, the three user groups, and UI research for the white-label login.
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
              aria-controls={`ppjv-research-panel-${item.id}`}
              id={`ppjv-research-tab-${item.id}`}
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
        id={`ppjv-research-panel-${tab}`}
        aria-labelledby={`ppjv-research-tab-${tab}`}
      >
        {tab === "requirements" && (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-16">
            <div className="max-w-md">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                Communicating directly with PPJV
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                As Senior UX/UI and Content Designer and Design System Lead on a 58-person team, I
                was a direct design contact for stakeholders and BAs, so clear communication shaped
                the product as much as the screens did.
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
                Other banking platforms
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                I reviewed digital banking suites and core banking platforms to understand the
                patterns financial professionals already know, and where CAFT could be clearer.
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
        {tab === "audience" && (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-16">
            <div className="max-w-md">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                Three user groups, one platform
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                CAFT serves PPJV staff, credit union staff and credit union business members. Each
                group sees different data and permissions, but they share the same system.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                Internal tools are used differently: professionals learn patterns and repeat them,
                so consistency and clear status mattered more than novelty.
              </p>
            </div>
            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-text">
                Who uses CAFT and what they need
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
        {tab === "ui" && (
          <>
            <div className="mb-8 max-w-2xl">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                UI research for a white-label login
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                CAFT is used by many credit unions, so the sign-in experience had to carry each
                credit union's brand. I researched the login customization options (colours,
                typography, logo, page background and borders) and defined logo specs using real
                credit union logos. Click any image to open it larger.
              </p>
            </div>
            <ImageLightboxGallery label="UI research" items={uiResearch} />
          </>
        )}
      </div>
    </section>
  );
}
