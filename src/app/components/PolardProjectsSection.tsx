import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { assetPath } from "../lib/assetPath";
import { PolardCommunicationSection } from "./PolardCommunicationSection";
import { PolardDesignProcessSection } from "./PolardDesignProcessSection";
import { PolardFlowsSection } from "./PolardFlowsSection";
import { PolardResearchSection, type PolardVariant } from "./PolardResearchSection";

type ProjectInfo = {
  id: PolardVariant;
  platform: string;
  title: string;
  summary: string;
  figmaUrl: string;
  screensTitle: string;
  screensLead: string;
  screens: { file: string; title: string; note?: string }[];
};

const PROJECTS: ProjectInfo[] = [
  {
    id: "portal",
    platform: "Web · Business portal",
    title: "Business Portal",
    summary:
      "A web portal for retailers, licensees and partners: resources, licensing, secure reporting and applications in one predictable place.",
    figmaUrl: "https://www.figma.com/design/pYHsJIZqaLrJgRSzlU28fI/-WV--Web-Business-Portal",
    screensTitle: "Portal screens and components",
    screensLead:
      "Home, retailer resources, licensing and secure reporting, plus the table, accordion and button components behind them. Click any screen to see the full page.",
    screens: [
      { file: "01-home-viewport.png", title: "Home", note: "Gaming areas" },
      { file: "02-home-full.png", title: "Home, full page" },
      { file: "04-retailer-resources.png", title: "Retailer resources" },
      { file: "06-licensing.png", title: "Licensing", note: "Apply & status" },
      { file: "05-create-table.png", title: "Secure portal reporting" },
      { file: "07-about.png", title: "About" },
    ],
  },
  {
    id: "app",
    platform: "Native mobile · Player app",
    title: "Player App",
    summary:
      "A native mobile app for players: jackpots, instant and draw games, PlayON rewards, second chance, account and funds.",
    figmaUrl: "https://www.figma.com/design/aK8AKRHXkJHUWJuoEf8PMI/-KS--Mobile-App",
    screensTitle: "App screens",
    screensLead:
      "From the home screen and games to rewards, account, adding funds and error states. Click any screen to see the full flow.",
    screens: [
      { file: "20-ks-home.png", title: "Home", note: "Guest" },
      { file: "31-ks-nav-home.png", title: "Home", note: "Signed in" },
      { file: "21-ks-home-auth.png", title: "Home, full page" },
      { file: "22-ks-games.png", title: "Games" },
      { file: "23-ks-draw-games.png", title: "Draw games" },
      { file: "24-ks-how-to-play.png", title: "How to play" },
      { file: "25-ks-playon.png", title: "PlayON", note: "Scan & earn" },
      { file: "26-ks-rewards.png", title: "Rewards" },
      { file: "32-ks-second-chance.png", title: "Earn", note: "Second chance" },
      { file: "27-ks-account.png", title: "Account" },
      { file: "28-ks-add-funds.png", title: "Add funds" },
      { file: "29-ks-add-funds-confirm.png", title: "Add funds", note: "Confirm" },
      { file: "30-ks-error.png", title: "Error state" },
    ],
  },
];

/**
 * Lottery Portal only: switches between the two projects (web portal and player app).
 * Everything rendered here, below the switcher, changes with the selected project.
 * The selection is kept in the URL (?project=app) so it can be shared.
 */
export function PolardProjectsSection() {
  const [params, setParams] = useSearchParams();
  const selected: PolardVariant = params.get("project") === "app" ? "app" : "portal";
  const current = PROJECTS.find((p) => p.id === selected)!;
  const other = PROJECTS.find((p) => p.id !== selected)!;
  const switcherRef = useRef<HTMLDivElement>(null);

  const select = (id: PolardVariant, scroll = false) => {
    const next = new URLSearchParams(params);
    if (id === "portal") next.delete("project");
    else next.set("project", id);
    setParams(next, { replace: true, preventScrollReset: true });
    if (scroll) switcherRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section
        ref={switcherRef}
        aria-labelledby="polard-projects-heading"
        className="page-gutter scroll-mt-24 border-b border-border py-16 md:py-24"
      >
        <div className="mb-8 max-w-2xl md:mb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Two projects
          </p>
          <h2
            id="polard-projects-heading"
            className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
          >
            One lottery ecosystem,
            <span className="text-muted"> two </span>
            products
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
            I designed two connected products for this lottery work: a web business portal and a
            native player app. Choose a project to see its research and screens below.
          </p>
        </div>

        <div role="tablist" aria-label="Projects" className="grid gap-4 md:grid-cols-2 md:gap-6">
          {PROJECTS.map((project, index) => {
            const active = project.id === selected;
            return (
              <button
                key={project.id}
                type="button"
                role="tab"
                id={`polard-project-tab-${project.id}`}
                aria-selected={active}
                aria-controls="polard-project-panel"
                onClick={() => select(project.id)}
                className={`group rounded-2xl border p-5 text-left transition-colors md:p-6 ${
                  active
                    ? "border-accent bg-surface"
                    : "border-border hover:border-text/40"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    {String(index + 1).padStart(2, "0")} · {project.platform}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest ${
                      active ? "bg-accent text-bg" : "border border-border text-muted"
                    }`}
                  >
                    {active ? "Viewing" : "View"}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-text">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted md:text-[15px]">
                  {project.summary}
                </p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted">
                  {project.screens.length} screens
                </p>
              </button>
            );
          })}
        </div>
      </section>

      <div id="polard-project-panel" role="tabpanel" aria-labelledby={`polard-project-tab-${selected}`}>
        <PolardResearchSection key={`research-${selected}`} variant={selected} />
        <PolardFlowsSection key={`flows-${selected}`} variant={selected} />
        <PolardDesignProcessSection
          key={`design-${selected}`}
          variant={selected}
          pages={current.screens.map((screen) => ({
            src: assetPath(`/projects/polard/raw/${screen.file}`),
            title: screen.title,
            note: screen.note,
          }))}
        />
        <PolardCommunicationSection key={`comm-${selected}`} variant={selected} />

        <section className="page-gutter border-b border-border py-10 md:py-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <p className="text-sm text-muted">
                You're viewing <span className="text-text">{current.title}</span>
              </p>
              <a
                href={current.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-text transition-colors hover:border-accent hover:text-accent"
              >
                Open in Figma ↗
              </a>
            </div>
            <button
              type="button"
              onClick={() => select(other.id, true)}
              className="rounded-full bg-text px-5 py-2.5 font-mono text-[11px] uppercase tracking-widest text-bg transition-opacity hover:opacity-80"
            >
              View {other.title} →
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
