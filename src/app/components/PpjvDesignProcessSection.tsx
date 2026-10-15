import { useState } from "react";
import type { ProjectMedia } from "../data/projects";
import { assetPath } from "../lib/assetPath";
import { ImageLightboxGallery } from "./ImageLightboxGallery";

type TabId = "atoms" | "components" | "pages";

const TABS: { id: TabId; label: string }[] = [
  { id: "atoms", label: "Atoms design" },
  { id: "components", label: "Component design" },
  { id: "pages", label: "Page design" },
];

const atomPoints = [
  { title: "Colour tokens", body: "Aurora colour foundations with semantic tokens for actions, links, status and surfaces, checked for contrast in dense UI." },
  { title: "Typography", body: "A type scale built for data: headings, table text, labels and helper text that stay readable in long working sessions." },
  { title: "Buttons & states", body: "Button families with primary, secondary, text and icon variants, each with hover, focus, disabled and loading states." },
  { title: "Fields", body: "Inputs, selects and date pickers with labels, helper text and validation states defined once and reused everywhere." },
];

const atomImages = [
  { file: "18-aurora-colours.png", title: "Colours", note: "Aurora foundations" },
  { file: "19-aurora-buttons.png", title: "Buttons", note: "Variants & states" },
  { file: "22-aurora-fields.png", title: "Fields", note: "Inputs & validation" },
].map((item) => ({ ...item, src: assetPath(`/projects/ppjv/figma/${item.file}`) }));

const componentImages = [
  { file: "20-aurora-table.png", title: "Data table", note: "Sort, filter & status" },
  { file: "21-aurora-nav.png", title: "Navigation", note: "Header & dashboard" },
  { file: "23-aurora-sidenav.png", title: "Side navigation", note: "States", wide: true },
].map((item) => ({ ...item, src: assetPath(`/projects/ppjv/figma/${item.file}`) }));

const componentPoints = [
  { title: "Data tables", body: "Tables as interaction systems: scan, sort, filter, select, compare, act and recover, with consistent status chips." },
  { title: "Navigation", body: "Side navigation, header and breadcrumbs that keep context visible across dashboards, transfers, originators and reports." },
  { title: "Forms & validation", body: "Complex forms from empty through validation to confirmation, with errors next to the field and a summary at the top." },
  { title: "Feedback & messages", body: "Alerts, bulletins, snackbars, modals and notifications that tell users what happened and what to do next." },
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

/** PPJV only: design process from Aurora atoms to components to full pages. */
export function PpjvDesignProcessSection({ pages }: { pages: ProjectMedia[] }) {
  const [tab, setTab] = useState<TabId>("atoms");

  return (
    <section
      aria-labelledby="ppjv-design-process-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Design process
        </p>
        <h2
          id="ppjv-design-process-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          From atoms
          <span className="text-muted"> to components to </span>
          full pages
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
          As Aurora design system lead, I built CAFT bottom-up: small reusable atoms first, then
          components made from them, then complete pages for every workflow.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Design process sections"
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
              aria-controls={`ppjv-design-panel-${item.id}`}
              id={`ppjv-design-tab-${item.id}`}
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

      <div role="tabpanel" id={`ppjv-design-panel-${tab}`} aria-labelledby={`ppjv-design-tab-${tab}`}>
        {tab === "atoms" && (
          <Panel
            title="Atoms design"
            lead="The smallest building blocks of the system, defined once so every screen stays consistent and accessible."
          >
            <PointGrid points={atomPoints} />
          </Panel>
        )}
        {tab === "atoms" && (
          <div className="mt-12">
            <ImageLightboxGallery label="atoms" items={atomImages} />
          </div>
        )}

        {tab === "components" && (
          <Panel
            title="Component design"
            lead="Atoms combined into reusable Aurora components that cover every workflow, from dashboards to transfers and reports."
          >
            <PointGrid points={componentPoints} />
          </Panel>
        )}
        {tab === "components" && (
          <div className="mt-12">
            <ImageLightboxGallery label="component" items={componentImages} />
          </div>
        )}

        {tab === "pages" && (
          <>
            <div className="mb-8 max-w-2xl">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                Page design
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                Components assembled into complete pages for each workflow, from password creation
                and originators to notifications, transactions, filters and reports. Click any page
                to open it larger.
              </p>
            </div>
            <ImageLightboxGallery
              label="page"
              items={pages.map((item) => ({
                src: item.src,
                title: item.caption,
                type: item.type,
                poster: item.poster,
              }))}
            />
          </>
        )}
      </div>
    </section>
  );
}
