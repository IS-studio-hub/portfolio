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
  {
    title: "Colour tokens",
    body: "A government-grade palette built from the Manitoba brand, with semantic tokens for actions, links, status and surfaces, all checked for contrast.",
  },
  {
    title: "Typography",
    body: "A clear type scale for headings, body copy, labels and legal text, sized for long forms and readability on every device.",
  },
  {
    title: "Spacing & grid",
    body: "A consistent spacing scale and responsive grid so every page, from the homepage to checkout, lines up the same way.",
  },
  {
    title: "Icons & states",
    body: "Icons, focus rings, hover, disabled and error states defined once at the atom level and reused everywhere.",
  },
];

const atomImages = [
  { file: "01-colours.png", title: "Colours", note: "Primitive & semantic tokens" },
  { file: "02-logos.png", title: "Logos", note: "Logo guide" },
  { file: "03-typography.png", title: "Typography", note: "Responsive type scale" },
  { file: "04-alerts.png", title: "Alerts", note: "Global, in-page & toasts" },
  { file: "05-cards.png", title: "Cards", note: "Content, document & profile" },
  { file: "06-form-fields.png", title: "Form fields", note: "Inputs, selects & search" },
  { file: "07-navigation.png", title: "Navigation", note: "On this page & services" },
  { file: "08-buttons-controls.png", title: "Buttons & controls", note: "Buttons, toggles, pagination & checks" },
  { file: "09-breakpoints.jpg", title: "Breakpoints", note: "XS to XXL", wide: true },
].map((item) => ({ ...item, src: assetPath(`/projects/gom/atoms/${item.file}`) }));

const componentImages = [
  { file: "01-header.png", title: "Header", note: "Mobile & desktop states", wide: true },
  { file: "02-hero-banners.png", title: "Hero banners", note: "Responsive carousel", wide: true },
  { file: "03-accordion.png", title: "Accordion", note: "States" },
  { file: "04-permit-cards.png", title: "Permit cards", note: "Vehicle / bus toggle" },
  { file: "05-printed-permit.png", title: "Printed permit", note: "Bilingual licence" },
  { file: "06-vendor-form.jpg", title: "Vendor application form", note: "All form states", wide: true },
].map((item) => ({ ...item, src: assetPath(`/projects/gom/components/${item.file}`) }));

const componentPoints = [
  {
    title: "Form fields",
    body: "Inputs, selects, date pickers and checkboxes with labels, helper text and inline validation, the core of every licence application.",
  },
  {
    title: "Licence cards & lists",
    body: "Reusable cards and rows for licences, permits and draws, showing price, season, eligibility and the next action.",
  },
  {
    title: "Cart & checkout",
    body: "Order summary, line items, donation module and payment details, shared across every purchase narrative.",
  },
  {
    title: "Navigation & messages",
    body: "Header, menus, breadcrumbs, alerts, modals and status chips so users always know where they are and what happened.",
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

/** GOM only: design process from atoms to components to full pages. */
export function GomDesignProcessSection({ pages }: { pages: ProjectMedia[] }) {
  const [tab, setTab] = useState<TabId>("atoms");

  return (
    <section
      aria-labelledby="gom-design-process-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Design process
        </p>
        <h2
          id="gom-design-process-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          From atoms
          <span className="text-muted"> to components to </span>
          full pages
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
          I built the new e-licensing experience bottom-up: small reusable atoms first, then
          components made from them, then complete pages for every flow.
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
              aria-controls={`gom-design-panel-${item.id}`}
              id={`gom-design-tab-${item.id}`}
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

      <div role="tabpanel" id={`gom-design-panel-${tab}`} aria-labelledby={`gom-design-tab-${tab}`}>
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
            lead="Atoms combined into reusable components that cover every licence, permit and purchase narrative."
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
                Components assembled into complete pages for each flow, from the customer portal
                home to licence discovery, account, forms, cart and checkout. Click any page to
                open it larger.
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
