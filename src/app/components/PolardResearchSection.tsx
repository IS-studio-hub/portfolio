import { useState } from "react";
import { assetPath } from "../lib/assetPath";
import { ImageLightboxGallery } from "./ImageLightboxGallery";

type TabId = "requirements" | "competitors" | "audience";

const TABS: { id: TabId; label: string }[] = [
  { id: "requirements", label: "Requirement meetings" },
  { id: "competitors", label: "Competitors" },
  { id: "audience", label: "Target audience" },
];

export type PolardVariant = "portal" | "app";

type Point = { title: string; body: string };
type Competitor = { name: string; focus: string; note: string; url: string };

type VariantContent = {
  intro: string;
  competitorsTab: string;
  requirementsTitle: string;
  requirementsLead: string;
  requirementPoints: Point[];
  competitorsTitle: string;
  competitorsLead: string;
  competitors: Competitor[];
  competitorImages?: { file: string; title: string; note?: string }[];
  audienceTitle: string;
  audienceLead: string[];
  audienceLabel: string;
  audienceNeeds: Point[];
};

const REQ_PORTAL: Point[] = [
  {
    title: "Direct line to stakeholders",
    body: "As Senior UX/UI Designer on a five-person team, I worked directly with the lottery's stakeholders, product teams and developers, from early discussions to implementation.",
  },
  {
    title: "Operations as the starting point",
    body: "Requirements came from real business work: retailer resources, licensing, secure reporting, applications, payments and related documents.",
  },
  {
    title: "Architecture as the shared language",
    body: "Instead of debating single pages, we agreed on structure first: where users begin, what belongs together and which actions are global or record-specific.",
  },
  {
    title: "Fast, visual feedback loops",
    body: "Flows and prototypes were walked through in meetings, so feedback was concrete and decisions came back as updated designs in the next session.",
  },
];

const CONTENT: Record<PolardVariant, VariantContent> = {
  portal: {
    intro:
      "Research for the Business Portal came from three places: stakeholder requirements, other state lottery websites, and how retailers and licensees actually do their work.",
    competitorsTab: "Competitors",
    requirementsTitle: "Communicating directly with the client team",
    requirementsLead:
      "Business portals carry a lot of operational detail, so clear communication with the client and developers shaped the product as much as the screens did.",
    requirementPoints: REQ_PORTAL,
    competitorsTitle: "Other state lottery websites",
    competitorsLead:
      "I reviewed other U.S. state lottery websites across mobile, tablet and desktop, marking the patterns worth learning from: how they lead with jackpots, organize games, promote second chance and show winners.",
    competitors: [
      {
        name: "New York Lottery",
        focus: "State lottery",
        note: "Strong jackpot cards up top, plus clear second-chance and recent-winners modules.",
        url: "https://nylottery.ny.gov/",
      },
      {
        name: "Texas Lottery",
        focus: "State lottery",
        note: "Dense game and results cards, with a grid of service tiles for apps, retailers and programs.",
        url: "https://www.texaslottery.com/",
      },
      {
        name: "California Lottery",
        focus: "State lottery",
        note: "A friendly, story-led second-chance area and helpful 'how to claim' guidance.",
        url: "https://www.calottery.com/",
      },
      {
        name: "Florida Lottery",
        focus: "State lottery",
        note: "Clear winning numbers, featured games and promotion bands with strong visual hierarchy.",
        url: "https://www.floridalottery.com/",
      },
      {
        name: "Illinois Lottery",
        focus: "State lottery",
        note: "A retailer-facing resources page with side navigation and tiles for key business tasks.",
        url: "https://www.illinoislottery.com/",
      },
    ],
    competitorImages: [
      { file: "01-new-york.png", title: "New York Lottery", note: "Mobile → desktop" },
      { file: "02-texas.png", title: "Texas Lottery", note: "Mobile → desktop" },
      { file: "03-california.png", title: "California Lottery", note: "Mobile → desktop" },
      { file: "04-florida.png", title: "Florida Lottery", note: "Mobile → desktop" },
      { file: "05-illinois.png", title: "Illinois Lottery", note: "Retailer resources" },
    ],
    audienceTitle: "Business users are there to get work done",
    audienceLead: [
      "Portal users are retailers, licensees and partners. They are not visiting casually; they return to the same workflows and learn where things live.",
      "So consistency and predictability mattered more than exploration.",
    ],
    audienceLabel: "What business users need",
    audienceNeeds: [
      { title: "Find resources fast", body: "Retailer resources, forms and documents grouped by area, like iGaming, table games or sports wagering." },
      { title: "Apply for a licence", body: "Clear steps to apply, check the status of a licence and verify it." },
      { title: "Secure reporting", body: "Filter by county, city and date, then read results in a clear table." },
      { title: "Understand status first", body: "Status language that shows where things stand before people act." },
      { title: "Learn once, use everywhere", body: "Tables, accordions and buttons that behave the same on every page." },
      { title: "Recover from problems", body: "Empty, loading and error states that keep the work understandable." },
    ],
  },
  app: {
    intro:
      "Research for the Player App came from three places: stakeholder requirements, comparable lottery apps, and how players actually check, play and get rewarded.",
    competitorsTab: "Competitors",
    requirementsTitle: "Communicating directly with the client team",
    requirementsLead:
      "A player app mixes marketing, games, money and rules, so close work with the client and developers kept every screen clear and compliant.",
    requirementPoints: [
      {
        title: "Direct line to stakeholders",
        body: "I worked directly with the lottery's stakeholders, marketing and product teams, and the developers building the native app.",
      },
      {
        title: "Games, rewards and money",
        body: "Requirements covered jackpots, instant and draw games, how to play, PlayON rewards, second chance, account and adding funds.",
      },
      {
        title: "Responsible and clear",
        body: "Money flows like adding funds needed clear confirmations and honest error messages, so players always know what happened.",
      },
      {
        title: "Fast, visual feedback loops",
        body: "Flows and prototypes were reviewed in meetings, so feedback was concrete and changes came back in the next session.",
      },
    ],
    competitorsTitle: "Other lottery experiences",
    competitorsLead:
      "I reviewed provincial, national and mobile-first lottery products to understand the patterns players already expect for jackpots, games, tickets and accounts.",
    competitors: [
      {
        name: "OLG",
        focus: "Provincial lottery",
        note: "A Canadian lottery peer for games, results and accounts.",
        url: "https://www.olg.ca/",
      },
      {
        name: "Loto-Québec",
        focus: "Provincial lottery",
        note: "Strong digital lottery patterns across tickets, draws and account management.",
        url: "https://www.espacejeux.com/",
      },
      {
        name: "The National Lottery (UK)",
        focus: "National lottery digital",
        note: "A mature online experience for tickets, results and clear status communication.",
        url: "https://www.national-lottery.co.uk/",
      },
      {
        name: "Jackpocket",
        focus: "Lottery app",
        note: "A mobile-first lottery experience that sets expectations for speed and clarity.",
        url: "https://jackpocket.com/",
      },
    ],
    audienceTitle: "Players want the next moment of play",
    audienceLead: [
      "Players open the app for quick moments: checking a jackpot, buying a ticket, scanning a ticket or redeeming rewards.",
      "So the app leads with what is happening now and keeps money and account details one tap away.",
    ],
    audienceLabel: "What players need",
    audienceNeeds: [
      { title: "What is the jackpot", body: "Current jackpots and a clear Buy Now action on the home screen." },
      { title: "Find a game", body: "Instant and draw games with prizes, next draws and how to play." },
      { title: "Scan and earn", body: "PlayON: scan retail tickets to earn points, enter promo codes and invite friends." },
      { title: "Rewards and second chance", body: "Redeem points for rewards and enter second-chance draws." },
      { title: "Manage my money", body: "Balance, add funds and clear confirmations before money moves." },
      { title: "Know when something fails", body: "Friendly error screens that explain the problem and offer helpful links." },
    ],
  },
};

/** Lottery Portal only: research section per project (business portal or player app). */
export function PolardResearchSection({ variant }: { variant: PolardVariant }) {
  const [tab, setTab] = useState<TabId>("requirements");
  const c = CONTENT[variant];
  const [selectedCompetitor, setSelectedCompetitor] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="polard-research-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Research</p>
        <h2
          id="polard-research-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          Understanding the client,
          <span className="text-muted"> the field and </span>
          the users
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">{c.intro}</p>
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
              aria-controls={`polard-research-panel-${item.id}`}
              id={`polard-research-tab-${item.id}`}
              onClick={() => setTab(item.id)}
              className={`rounded-sm px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                active
                  ? "bg-text text-bg"
                  : "border border-border text-muted hover:border-text/40 hover:text-text"
              }`}
            >
              {item.id === "competitors" ? c.competitorsTab : item.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`polard-research-panel-${tab}`}
        aria-labelledby={`polard-research-tab-${tab}`}
      >
        {tab === "requirements" && (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-16">
            <div className="max-w-md">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                {c.requirementsTitle}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                {c.requirementsLead}
              </p>
            </div>
            <ol className="m-0 grid list-none gap-6 p-0 sm:grid-cols-2">
              {c.requirementPoints.map((point, index) => (
                <li key={point.title} className="border-t border-border pt-5">
                  <span className="font-mono text-[11px] tabular-nums text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-2 font-display text-lg font-semibold text-text">{point.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted md:text-[15px]">{point.body}</p>
                </li>
              ))}
            </ol>
          </div>
        )}

        {tab === "competitors" && (
          <>
            <div className="mb-10 max-w-2xl">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                {c.competitorsTitle}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                {c.competitorsLead}
              </p>
            </div>
            <div
              className={`grid items-start gap-10 lg:gap-14 ${
                c.competitorImages ? "lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]" : ""
              }`}
            >
              <ol className="m-0 list-none p-0">
                {c.competitors.map((item, index) => {
                  const image = c.competitorImages?.[index];
                  const active = image !== undefined && selectedCompetitor === index;
                  return (
                    <li
                      key={item.name}
                      className={`group grid grid-cols-[36px_minmax(0,1fr)] gap-4 border-b border-border/70 py-5 first:pt-0 last:border-b-0 ${
                        image ? "cursor-pointer" : ""
                      }`}
                      onClick={image ? () => setSelectedCompetitor(index) : undefined}
                    >
                      <span
                        className={`pt-1.5 font-mono text-[11px] tabular-nums group-hover:text-accent ${
                          active ? "text-accent" : "text-muted"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                          {image ? (
                            <button
                              type="button"
                              aria-pressed={active}
                              aria-controls="polard-competitor-board"
                              className={`text-left font-display text-xl font-semibold tracking-tight transition-colors hover:text-accent md:text-2xl ${
                                active ? "text-accent" : "text-text"
                              }`}
                            >
                              {item.name}
                            </button>
                          ) : (
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
                          )}
                          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                            {item.focus}
                          </span>
                          {image && (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted underline-offset-4 hover:text-accent hover:underline"
                            >
                              Visit site ↗
                            </a>
                          )}
                        </div>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-[15px]">
                          {item.note}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>

              {c.competitorImages && (
                <div id="polard-competitor-board" className="mx-auto w-full max-w-sm lg:sticky lg:top-24">
                  {selectedCompetitor !== null && c.competitorImages[selectedCompetitor] ? (
                    <ImageLightboxGallery
                      key={selectedCompetitor}
                      label="research board"
                      items={[
                        {
                          src: assetPath(
                            `/projects/polard/research/${c.competitorImages[selectedCompetitor].file}`,
                          ),
                          title: c.competitorImages[selectedCompetitor].title,
                          note: c.competitorImages[selectedCompetitor].note,
                          wide: true,
                        },
                      ]}
                    />
                  ) : (
                    <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-border bg-surface p-8 text-center">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                        Select a competitor to see its research board
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        )}

        {tab === "audience" && (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-16">
            <div className="max-w-md">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                {c.audienceTitle}
              </h3>
              {c.audienceLead.map((line) => (
                <p key={line} className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                  {line}
                </p>
              ))}
            </div>
            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-text">
                {c.audienceLabel}
              </p>
              <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
                {c.audienceNeeds.map((item) => (
                  <li key={item.title} className="rounded-xl border border-border bg-surface p-4 md:p-5">
                    <h4 className="font-display text-base font-semibold text-text">{item.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
