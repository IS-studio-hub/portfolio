import { useState } from "react";
import { ImageLightboxGallery } from "./ImageLightboxGallery";
import { assetPath } from "../lib/assetPath";

type TabId = "requirements" | "competitors" | "audience" | "sitemap";

const TABS: { id: TabId; label: string }[] = [
  { id: "requirements", label: "Requirement meetings" },
  { id: "competitors", label: "Competitors" },
  { id: "audience", label: "Target audience" },
  { id: "sitemap", label: "Current sitemap" },
];

const requirementPoints = [
  {
    title: "Direct line to the client",
    body: "I worked directly with the Government of Manitoba team in requirement meetings, not through layers of hand-offs. That let me hear the policy, licensing and operational needs first-hand and ask the follow-up questions in the room.",
  },
  {
    title: "Translating policy into product",
    body: "Licensing rules, eligibility and regulations are complex. I turned them into plain flows, screens and decisions the client could react to, so every meeting ended with a shared understanding instead of open questions.",
  },
  {
    title: "Aligning many stakeholders",
    body: "Meetings brought together program owners, IT and support staff with different priorities. I facilitated the conversation, captured decisions, and played them back visually so everyone could confirm we were building the right thing.",
  },
  {
    title: "Fast feedback loops",
    body: "Because I communicated directly with the client, design changes moved quickly: walk through a flow, collect feedback, iterate and come back with an updated version in the next session.",
  },
];

const competitors = [
  {
    name: "Alberta Government e-Licensing",
    focus: "Provincial outdoor licensing",
    note: "The closest Canadian peer: hunting and fishing licences, draws and account management for residents and non-residents.",
    url: "https://www.albertarelm.com/",
  },
  {
    name: "Government of Canada website",
    focus: "Federal design standard",
    note: "Canada.ca sets the bar for clear, accessible government content, consistent patterns and plain-language service journeys.",
    url: "https://www.canada.ca/",
  },
  {
    name: "BC Government e-Licensing",
    focus: "Provincial hunting & fishing licensing",
    note: "A neighbouring province's licensing service, useful for comparing purchase flows, licence types and how rules are explained.",
    url: "https://www2.gov.bc.ca/gov/content/sports-culture/recreation/fishing-hunting",
  },
];

const insights = [
  { title: "User behavior", body: "How people actually move through the site, where they click and what they skip." },
  { title: "User journeys", body: "The real paths from landing to purchasing or renewing a licence." },
  { title: "Engagement", body: "Which pages and features hold attention and which are ignored." },
  { title: "Friction and funnels", body: "Where users drop off in multi-step purchase and registration flows." },
  { title: "Performance", body: "Load times and errors that slow users down or break tasks." },
  { title: "Usability", body: "Signals of confusion: repeated attempts, back-tracking and support-driven issues." },
  { title: "Accessibility", body: "Gaps that block people using assistive technology or different devices." },
  { title: "Conversion", body: "How many visitors complete a licence purchase, and what moves that number." },
];

const sitemap = [
  { file: "01-guest.png", title: "Guest", note: "Mobile / desktop", wide: false },
  { file: "02-purchasing-user-types.png", title: "Purchasing licences", note: "User types", wide: false },
  { file: "03-purchase-special-licence.png", title: "Purchase special licence", note: "By residency", wide: false },
  { file: "04-fisheries-applications.jpg", title: "Fisheries applications", note: "Special licences", wide: true },
  { file: "05-wildlife-applications.jpg", title: "Wildlife applications", note: "Special licences", wide: true },
  { file: "06-forestry-applications.jpg", title: "Forestry applications", note: "Special licences", wide: true },
];

const sitemapSrc = (file: string) => assetPath(`/projects/gom/sitemap/${file}`);

function SitemapGallery() {
  return (
    <>
      <div className="mb-8 max-w-2xl">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
          Mapping the current e-licensing site
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
          Before redesigning, I mapped the existing site page by page: guest entry points,
          purchasing paths for each residency type, and every special licence application across
          fisheries, wildlife and forestry. Click any map to open it larger.
        </p>
      </div>
      <ImageLightboxGallery
        label="sitemap"
        items={sitemap.map((item) => ({ ...item, src: sitemapSrc(item.file) }))}
      />
    </>
  );
}

/** GOM only: research section with requirement meetings, competitors and target audience tabs. */
export function GomResearchSection() {
  const [tab, setTab] = useState<TabId>("requirements");

  return (
    <section
      aria-labelledby="gom-research-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Research</p>
        <h2
          id="gom-research-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          Understanding the client,
          <span className="text-muted"> the field and </span>
          the people
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
          Research for the Government of Manitoba e-licensing redesign came from three places: the
          client's own requirements, comparable government services, and real data about how
          people used the old site.
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
              aria-controls={`gom-research-panel-${item.id}`}
              id={`gom-research-tab-${item.id}`}
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
        id={`gom-research-panel-${tab}`}
        aria-labelledby={`gom-research-tab-${tab}`}
      >
        {tab === "requirements" && (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-16">
            <div className="max-w-md">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                Communicating directly with the Government of Manitoba
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                Requirement meetings were where the project took shape. I was the client's direct
                design contact, so clear communication was as important as the screens themselves.
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
                Other government services
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                I reviewed comparable government websites and e-licensing services to understand
                the patterns citizens already know, and where Manitoba could do better.
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
                Learning from the old e-licensing site
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                The target audience was already using the Government of Manitoba's existing
                e-licensing site, so the old site was our best source of truth about who they are
                and where they struggle.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                I worked with the client's analytics team in a continuous loop: I brought questions
                and hypotheses from the UX side, they pulled the data from the live site, and
                together we turned the findings into design priorities.
              </p>
            </div>
            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-text">
                What the analytics team provided
              </p>
              <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
                {insights.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-xl border border-border bg-surface p-4 md:p-5"
                  >
                    <h4 className="font-display text-base font-semibold text-text">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {tab === "sitemap" && <SitemapGallery />}
      </div>
    </section>
  );
}
