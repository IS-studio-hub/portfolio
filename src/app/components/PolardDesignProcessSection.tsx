import { useState } from "react";
import { assetPath } from "../lib/assetPath";
import { ImageLightboxGallery, type LightboxItem } from "./ImageLightboxGallery";
import type { PolardVariant } from "./PolardResearchSection";

type TabId = "atoms" | "components" | "pages" | "desktop" | "tablet" | "mobile" | "vqa";
type DeviceTab = {
  id: "desktop" | "tablet" | "mobile" | "vqa";
  label: string;
  title?: string;
  lead: string;
  points?: Point[];
  images: Img[];
};
type Point = { title: string; body: string };
type Img = { file: string; title: string; note?: string; wide?: boolean };

const TABS: { id: TabId; label: string }[] = [
  { id: "atoms", label: "Atoms design" },
  { id: "components", label: "Component design" },
  { id: "pages", label: "Page design" },
];

type DesignContent = {
  intro: string;
  atomsLead: string;
  atomPoints: Point[];
  atomImages: Img[];
  componentsLabel: string;
  componentsFolder: string;
  componentsLead: string;
  componentPoints: Point[];
  componentImages: Img[];
  pagesLead: string;
  /** When set, Page design is split into one tab per device. Desktop uses the project screens if it has no images of its own. */
  deviceTabs?: DeviceTab[];
};

const CONTENT: Record<PolardVariant, DesignContent> = {
  portal: {
    intro:
      "I built the Business Portal step by step: small reusable atoms first, then wireframes to agree on structure with the client, then complete pages for every gaming area.",
    atomsLead:
      "The smallest building blocks of the portal, defined once so every page stays consistent, readable and accessible.",
    atomPoints: [
      { title: "Colour & type", body: "A palette and type scale built from the lottery brand, checked for contrast and sized for long legal text on desktop and mobile." },
      { title: "Controls", body: "Checkboxes, download icons, selects, inputs and a multi-select with checkboxes, the base of every Forms/Reports and reporting filter." },
      { title: "Navigation states", body: "The side navigation button with selected, default, disabled and focus states, so users always know which gaming area they are in." },
      { title: "Cards, accordions & pills", body: "Card, accordion and legal link pill building blocks in desktop and mobile sizes, reused across every area." },
    ],
    atomImages: [
      { file: "01-accordion.png", title: "Accordion", note: "Closed, open & sizes" },
      { file: "02-cards.png", title: "Cards", note: "Title, downloads & actions" },
      { file: "03-checkbox-download.png", title: "Checkbox & download", note: "Base controls" },
      { file: "04-table-filters.png", title: "Table & filters", note: "Results & empty state" },
      { file: "05-side-nav-button.png", title: "Side navigation button", note: "Selected, default, disabled & focus" },
      { file: "06-legal-pills.png", title: "Legal link pills", note: "Desktop & mobile" },
      { file: "07-form-fields.png", title: "Form fields", note: "Select, input & multi-select" },
    ],
    componentsLabel: "Wireframes",
    componentsFolder: "wireframes",
    componentsLead:
      "Before visual design, I wireframed the portal's key screens to agree on structure with the client: the side navigation for every gaming area, the guest and signed-in home, and how each area presents its content.",
    componentPoints: [
      { title: "Side navigation first", body: "A persistent side navigation for Let's Start, iGaming, Sports Wagering, Limited Video Lottery, Meeting Notices and more, so every area is one click away." },
      { title: "Guest vs signed in", body: "Guests see a 'Let's Start' welcome with Sign In / Sign Up. Signed-in businesses get a personal greeting, suggestions and the last pages they visited." },
      { title: "Account at a glance", body: "A profile menu from the header shows the business name and email without leaving the page." },
      { title: "Area content patterns", body: "Each gaming area opens with a title and short intro, then cards with key values and a carousel to browse more." },
    ],
    componentImages: [
      { file: "01-lets-start-guest.png", title: "Let's Start", note: "Guest home" },
      { file: "02-signed-in-home.png", title: "Signed-in home", note: "Suggestions & recent pages" },
      { file: "03-profile-menu.png", title: "Profile menu", note: "Business account" },
      { file: "04-igaming-cards.png", title: "iGaming", note: "Cards carousel" },
      { file: "05-sports-wagering.png", title: "Sports Wagering", note: "Area intro" },
    ],
    pagesLead:
      "Components assembled into complete pages for each gaming area: home, retailer resources, licensing, secured reporting and about. Click any page to see it in full.",
    deviceTabs: [
      {
        id: "desktop",
        label: "Desktop",
        lead: "Complete desktop pages: the home page with every gaming area, table games, legal, secured portal reporting and lottery leadership, all built on the same side navigation and components. Click any page to see it in full.",
        images: [
          { file: "01-home-igaming.png", title: "Home", note: "iGaming & Sports Wagering" },
          { file: "02-home-lvl-traditional.png", title: "Home", note: "LVL & Traditional Lottery" },
          { file: "03-table-games.png", title: "Table Games", note: "Contracts & licensing" },
          { file: "04-legal.png", title: "Legal", note: "FOIA, statutes & policies" },
          { file: "05-secured-reporting.png", title: "Secured Portal Reporting", note: "Empty state" },
          { file: "06-lottery-leadership.png", title: "About Us", note: "Lottery leadership" },
        ],
      },
      {
        id: "mobile",
        label: "Mobile",
        lead: "Mobile versions with area tabs on top and stacked content, so every gaming area works on a phone.",
        images: [
          { file: "01-igaming.png", title: "iGaming", note: "Area tabs & intro" },
          { file: "02-policy-forms.png", title: "Policy Statements & Forms", note: "Downloads" },
          { file: "03-limited-video-lottery.png", title: "Limited Video Lottery" },
          { file: "04-lvl-downloads.png", title: "LVL downloads" },
          { file: "05-rvl-downloads.png", title: "RVL downloads" },
          { file: "06-table-games-licensing.png", title: "Table Games", note: "Licensing contacts" },
          { file: "07-limited-gaming-facility.png", title: "Limited Gaming Facility", note: "Licensing & FOIA" },
          { file: "08-legal-statutes.png", title: "Legal", note: "Statutes & policies" },
        ],
      },
      {
        id: "vqa",
        label: "VQA",
        title: "Visual QA",
        lead: "Design didn't stop at handoff. I reviewed every build against the designs, on desktop, tablet and mobile, and worked with developers until the live portal matched.",
        points: [
          { title: "Layout & behaviour", body: "Removed an unneeded banner, and made the side menu keep its selection and follow the page anchors while scrolling." },
          { title: "Spacing & sizing", body: "Asked for a consistent 32px bottom margin and shorter side menu buttons, matching the design spacing scale." },
          { title: "Shadows & overflow", body: "Fixed card shadows being cut off by overflow:hidden, and toned down shadows that were too strong." },
          { title: "States & breakpoints", body: "Fixed a height jump when selecting checkboxes in the dropdown, and overlapping content between 900 and 1050px." },
        ],
        images: [
          { file: "01-banner-side-menu.png", title: "Banner, side menu & spacing", note: "Notes 1–3", wide: true },
          { file: "02-card-shadows.png", title: "Cut-off card shadows", note: "Note 8", wide: true },
          { file: "03-dropdown-height.png", title: "Dropdown height jump", note: "Note 9", wide: true },
          { file: "04-shadow-strength.png", title: "Shadow too strong", note: "Note 10", wide: true },
          { file: "05-breakpoint-overlap.png", title: "Overlap at 900–1050px", note: "Note 11", wide: true },
        ],
      },
    ],
  },
  app: {
    intro:
      "I built the Player App bottom-up: small reusable atoms first, then components made from them, then complete screens for every player moment.",
    atomsLead:
      "The smallest building blocks of the app, defined once so every screen feels consistent and easy to use.",
    atomPoints: [
      { title: "Colour & brand", body: "The lottery brand translated to mobile, with clear colours for actions, prizes, balances and status." },
      { title: "Typography", body: "A mobile type scale that makes jackpots and prizes stand out while keeping rules and details readable." },
      { title: "Spacing & touch", body: "A spacing scale and large touch targets designed for one-handed use." },
      { title: "Icons & states", body: "Navigation icons, loading, selected, disabled and error states defined once and reused everywhere." },
    ],
    atomImages: [],
    componentsLabel: "Component design",
    componentsFolder: "raw",
    componentsLead:
      "Atoms combined into reusable components that cover games, rewards, account and money flows.",
    componentPoints: [
      { title: "Jackpot & game cards", body: "Jackpot banners, instant game cards with top prize, and draw game cards with the next draw." },
      { title: "Reward cards", body: "Reward, coupon and second-chance cards showing points, status and the next action." },
      { title: "Sheets & confirmations", body: "Bottom sheets for add funds and rewards, with clear confirmation dialogs before money moves." },
      { title: "Navigation & messages", body: "Bottom navigation (Home, Games, Scan, PlayON, More), balance header and friendly error screens." },
    ],
    componentImages: [],
    pagesLead:
      "Components assembled into complete screens: home for guests and signed-in players, games, how to play, PlayON, rewards, account, add funds and errors. Click any screen to see it in full.",
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

const toItems = (folder: string, images: Img[]): LightboxItem[] =>
  images.map((image) => ({
    src: assetPath(`/projects/polard/${folder}/${image.file}`),
    title: image.title,
    note: image.note,
    wide: image.wide,
  }));

/** Lottery Portal only: design process (atoms, components, pages) per project. */
export function PolardDesignProcessSection({
  variant,
  pages,
}: {
  variant: PolardVariant;
  pages: LightboxItem[];
}) {
  const [tab, setTab] = useState<TabId>("atoms");
  const c = CONTENT[variant];
  const tabs: { id: TabId; label: string }[] = c.deviceTabs
    ? [...TABS.filter((t) => t.id !== "pages"), ...c.deviceTabs.map((d) => ({ id: d.id, label: d.label }))]
    : TABS;
  const device = c.deviceTabs?.find((d) => d.id === tab);
  const deviceItems =
    device && device.images.length > 0
      ? toItems(device.id, device.images)
      : device?.id === "desktop"
        ? pages
        : [];

  return (
    <section
      aria-labelledby="polard-design-process-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Design process
        </p>
        <h2
          id="polard-design-process-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          From atoms
          <span className="text-muted"> to {c.componentsLabel.toLowerCase()} to </span>
          full pages
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">{c.intro}</p>
      </div>

      <div
        role="tablist"
        aria-label="Design process sections"
        className="mb-8 flex flex-wrap gap-2 border-b border-border pb-3"
      >
        {tabs.map((item) => {
          const label = item.id === "components" ? c.componentsLabel : item.label;
          const active = tab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`polard-design-panel-${item.id}`}
              id={`polard-design-tab-${item.id}`}
              onClick={() => setTab(item.id)}
              className={`rounded-sm px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                active
                  ? "bg-text text-bg"
                  : "border border-border text-muted hover:border-text/40 hover:text-text"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div role="tabpanel" id={`polard-design-panel-${tab}`} aria-labelledby={`polard-design-tab-${tab}`}>
        {tab === "atoms" && (
          <>
            <Panel title="Atoms design" lead={c.atomsLead}>
              <PointGrid points={c.atomPoints} />
            </Panel>
            {c.atomImages.length > 0 && (
              <div className="mt-12">
                <ImageLightboxGallery
          columns={5} label="atoms" items={toItems("atoms", c.atomImages)} />
              </div>
            )}
          </>
        )}

        {tab === "components" && (
          <>
            <Panel title={c.componentsLabel} lead={c.componentsLead}>
              <PointGrid points={c.componentPoints} />
            </Panel>
            {c.componentImages.length > 0 && (
              <div className="mt-12">
                <ImageLightboxGallery
          columns={5} label={c.componentsLabel.toLowerCase()} items={toItems(c.componentsFolder, c.componentImages)} />
              </div>
            )}
          </>
        )}

        {device && (
          <>
            <div className="mb-8 max-w-2xl">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                {device.title ?? `${device.label} design`}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">{device.lead}</p>
            </div>
            {device.points && (
              <div className="mb-12">
                <PointGrid points={device.points} />
              </div>
            )}
            {deviceItems.length > 0 ? (
              <ImageLightboxGallery
                columns={5}
                key={`pages-${variant}-${device.id}`}
                label={`${device.id} page`}
                crop={!(device.images.length > 0)}
                items={deviceItems}
              />
            ) : device.points ? null : (
              <div className="flex min-h-48 items-center justify-center rounded-2xl border border-dashed border-border bg-surface p-8 text-center">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {device.label} designs coming soon
                </p>
              </div>
            )}
          </>
        )}

        {tab === "pages" && (
          <>
            <div className="mb-8 max-w-2xl">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                Page design
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">{c.pagesLead}</p>
            </div>
            <ImageLightboxGallery
          columns={5} key={`pages-${variant}`} label="page" crop items={pages} />
          </>
        )}
      </div>
    </section>
  );
}
