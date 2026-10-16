import { assetPath } from "../lib/assetPath";
import { useState } from "react";
import { ImageLightboxGallery } from "./ImageLightboxGallery";
import type { PolardVariant } from "./PolardResearchSection";

type TabId = "presentation" | "fixing" | "stories";
type Point = { title: string; body: string };

const TABS: { id: TabId; label: string }[] = [
  { id: "presentation", label: "Client presentation" },
  { id: "fixing", label: "Fixing sessions" },
  { id: "stories", label: "Dev user stories" },
];

type CommContent = {
  intro: string;
  presentationLead: string;
  presentationPoints: Point[];
  /** Optional images in /projects/polard/communication/. */
  presentationImages: { file: string; title: string; note?: string; wide?: boolean }[];
  fixingLead: string;
  fixingPoints: Point[];
  storiesLead: string;
  storyPoints: Point[];
};

const CONTENT: Record<PolardVariant, CommContent> = {
  portal: {
    intro:
      "Great design only ships when everyone understands it. I presented the Business Portal to the client, ran fixing sessions on their feedback and VQA findings, and worked with the BA to hand development clear user stories.",
    presentationLead:
      "Presentation and prototyping went hand in hand: I walked the client through each gaming area and let them click through the portal.",
    presentationPoints: [
      { title: "Presenting to the client", body: "I presented each area of the portal directly to the lottery team, walking through the business user's task and the reasoning behind every design decision." },
      { title: "Interactive prototypes", body: "Clickable Figma prototypes showed the real journey: from the home page and side navigation into each gaming area, downloads, reporting and legal." },
      { title: "Covering every path", body: "Prototypes included guest and signed-in views, 'Read more' modals, Forms/Reports selection and the empty and results states of secured reporting." },
      { title: "Decisions in the room", body: "Seeing the portal working made feedback concrete. The client could point to the exact screen, and we agreed on changes in the same session." },
    ],
    presentationImages: [],
    fixingLead:
      "After every presentation and VQA round, feedback turned into focused fixing sessions until each area was approved.",
    fixingPoints: [
      { title: "Capture every comment", body: "I collected feedback from the client, stakeholders and VQA reviews and turned it into a clear, prioritised list of fixes." },
      { title: "Fix and re-share fast", body: "Fixes were applied to the designs and prototypes quickly, then shared back with the client to confirm each point was resolved." },
      { title: "Keep the system consistent", body: "Changes were made at the atom or component level whenever possible, so a fix in one area updated every area using the same pattern." },
      { title: "Sign-off before build", body: "Each area went through fixing sessions until the client signed off, so development started from approved, stable designs." },
    ],
    storiesLead:
      "Approved designs became user stories, written together with the business analyst so developers knew exactly what to build.",
    storyPoints: [
      { title: "Partnering with the BA", body: "I worked closely with the business analyst to translate approved designs into user stories the development team could build from." },
      { title: "Design as acceptance criteria", body: "Each story linked to the exact screens and states, with behaviour, filters, validation, empty states and breakpoints written as acceptance criteria." },
      { title: "One story, one outcome", body: "Areas were broken into small, testable stories, such as download selected forms, filter a secured report or open a statute, so dev could deliver in sprints." },
      { title: "Support during development", body: "I stayed available to developers and the BA, reviewed builds in VQA and updated stories when details changed." },
    ],
  },
  app: {
    intro:
      "Great design only ships when everyone understands it. I presented the Player App to the client, ran fixing sessions on their feedback, and worked with the BA to hand development clear user stories.",
    presentationLead:
      "Presentation and prototyping went hand in hand: I told the story of each player moment and let the client tap through it.",
    presentationPoints: [
      { title: "Presenting to the client", body: "I presented each flow directly to the lottery team, from the guest home to games, PlayON, rewards, account and adding funds." },
      { title: "Interactive prototypes", body: "Clickable mobile prototypes let the client experience the app as a player, including bottom navigation, sheets and confirmations." },
      { title: "Covering every path", body: "Prototypes covered guest and signed-in players, rewards and second chance, add funds confirmations and error states." },
      { title: "Decisions in the room", body: "Seeing the app on a phone made feedback concrete, and we could agree on changes in the same session." },
    ],
    presentationImages: [],
    fixingLead:
      "After every presentation, feedback turned into focused fixing sessions until each flow was approved.",
    fixingPoints: [
      { title: "Capture every comment", body: "I collected feedback from the client and stakeholders and turned it into a clear, prioritised list of fixes." },
      { title: "Fix and re-share fast", body: "Fixes were applied to the designs and prototypes quickly, then shared back to confirm each point was resolved." },
      { title: "Keep the system consistent", body: "Changes were made at the component level whenever possible, so a fix in one flow updated every screen using it." },
      { title: "Sign-off before build", body: "Each flow went through fixing sessions until the client signed off, so development started from approved designs." },
    ],
    storiesLead:
      "Approved designs became user stories, written together with the business analyst so developers knew exactly what to build.",
    storyPoints: [
      { title: "Partnering with the BA", body: "I worked closely with the business analyst to turn approved screens into user stories for the native app team." },
      { title: "Design as acceptance criteria", body: "Each story linked to the exact screens, with behaviour, money rules, confirmations, errors and edge cases written as acceptance criteria." },
      { title: "One story, one outcome", body: "Flows were broken into small, testable stories, such as add funds, scan a ticket or redeem a reward, so dev could deliver in sprints." },
      { title: "Support during development", body: "I stayed available to developers and the BA, reviewed builds against the designs and updated stories when details changed." },
    ],
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

/** Lottery Portal only: communication (client presentation, fixing sessions, dev user stories) per project. */
export function PolardCommunicationSection({ variant }: { variant: PolardVariant }) {
  const [tab, setTab] = useState<TabId>("presentation");
  const c = CONTENT[variant];

  return (
    <section
      aria-labelledby="polard-communication-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Communication
        </p>
        <h2
          id="polard-communication-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          From client presentation
          <span className="text-muted"> to </span>
          dev-ready stories
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">{c.intro}</p>
      </div>

      <div
        role="tablist"
        aria-label="Communication sections"
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
              aria-controls={`polard-comm-panel-${item.id}`}
              id={`polard-comm-tab-${item.id}`}
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

      <div role="tabpanel" id={`polard-comm-panel-${tab}`} aria-labelledby={`polard-comm-tab-${tab}`}>
        {tab === "presentation" && (
          <>
            <Panel title="Client presentation" lead={c.presentationLead}>
              <PointGrid points={c.presentationPoints} />
            </Panel>
            {c.presentationImages.length > 0 && (
              <div className="mt-12">
                <ImageLightboxGallery
                  label="presentation"
                  items={c.presentationImages.map((image) => ({
                    src: assetPath(`/projects/polard/communication/${image.file}`),
                    title: image.title,
                    note: image.note,
                    wide: image.wide,
                  }))}
                />
              </div>
            )}
          </>
        )}

        {tab === "fixing" && (
          <Panel title="Fixing sessions" lead={c.fixingLead}>
            <PointGrid points={c.fixingPoints} />
          </Panel>
        )}

        {tab === "stories" && (
          <Panel title="Dev user stories" lead={c.storiesLead}>
            <PointGrid points={c.storyPoints} />
          </Panel>
        )}
      </div>
    </section>
  );
}
