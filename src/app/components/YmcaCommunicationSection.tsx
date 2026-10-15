import { useState } from "react";
import { assetPath } from "../lib/assetPath";
import { ImageLightboxGallery } from "./ImageLightboxGallery";

type TabId = "presentation" | "fixing" | "stories";

const TABS: { id: TabId; label: string }[] = [
  { id: "presentation", label: "Client presentation" },
  { id: "fixing", label: "Fixing sessions" },
  { id: "stories", label: "Dev user stories" },
];

const presentationPoints = [
  {
    title: "Presenting to stakeholders",
    body: "I presented each journey directly to YMCA stakeholders, marketing and BAs, walking through the member's story step by step and the reasoning behind each decision.",
  },
  {
    title: "Interactive prototypes",
    body: "I built clickable Figma prototypes for all three journeys, single existing, family existing and guest new user, so stakeholders could experience the app from splash screen to home.",
  },
  {
    title: "Shared screens, connected journeys",
    body: "The prototype wired the three journeys back to shared screens like login, home, scan and profile, showing how one system served every member type.",
  },
  {
    title: "Decisions in the room",
    body: "Seeing the app working made feedback concrete. Stakeholders could point to the exact screen and moment, and we agreed on changes in the same session.",
  },
];

const fixingPoints = [
  {
    title: "Capture every comment",
    body: "After each presentation I collected feedback from stakeholders, marketing and BAs and turned it into a clear, prioritised list of fixes.",
  },
  {
    title: "Fix and re-share fast",
    body: "Fixes were applied to the designs and prototypes quickly, then shared back to confirm each point was resolved.",
  },
  {
    title: "Fix once in the system",
    body: "Changes were made at the component level whenever possible, so a fix in one journey updated every journey that used the same pattern.",
  },
  {
    title: "Sign-off before build",
    body: "Each journey went through fixing sessions until it was approved, so development started from stable, agreed designs.",
  },
];

const storyPoints = [
  {
    title: "Partnering with the BAs",
    body: "I worked closely with the Business Analysts to turn approved designs into user stories the iOS, Android and backend developers could build from.",
  },
  {
    title: "Design as acceptance criteria",
    body: "Each story linked to the exact screens and prototype, with states, validation, error messages and accessibility written as acceptance criteria.",
  },
  {
    title: "Small, testable stories",
    body: "Journeys were broken into stories such as sign-up, add a family member, book an activity or scan in, so the team could estimate and deliver in sprints.",
  },
  {
    title: "Design QA during build",
    body: "I stayed close to developers and QA, reviewed builds against the designs and updated stories when details changed.",
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

/** YMCA only: communication with stakeholders, fixing sessions and dev user stories. */
export function YmcaCommunicationSection() {
  const [tab, setTab] = useState<TabId>("presentation");

  return (
    <section
      aria-labelledby="ymca-communication-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Communication
        </p>
        <h2
          id="ymca-communication-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          From stakeholder presentation
          <span className="text-muted"> to </span>
          dev-ready stories
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
          Great design only ships when everyone understands it. I presented the work to YMCA
          stakeholders, ran fixing sessions on their feedback, and worked with the BAs to hand
          development clear user stories.
        </p>
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
              aria-controls={`ymca-comm-panel-${item.id}`}
              id={`ymca-comm-tab-${item.id}`}
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

      <div role="tabpanel" id={`ymca-comm-panel-${tab}`} aria-labelledby={`ymca-comm-tab-${tab}`}>
        {tab === "presentation" && (
          <>
            <Panel
              title="Client presentation"
              lead="Presentation and prototyping went hand in hand: I told the story of each member journey and let stakeholders click through it."
            >
              <PointGrid points={presentationPoints} />
            </Panel>
            <div className="mt-12">
              <ImageLightboxGallery
                label="prototype"
                items={[
                  {
                    src: assetPath("/projects/ymca/communication/prototype-flows.png"),
                    title: "Figma prototype wiring",
                    note: "Single, family and guest journeys",
                    wide: true,
                  },
                ]}
              />
            </div>
          </>
        )}

        {tab === "fixing" && (
          <Panel
            title="Fixing sessions"
            lead="After every presentation, feedback turned into focused fixing sessions until each journey was approved."
          >
            <PointGrid points={fixingPoints} />
          </Panel>
        )}

        {tab === "stories" && (
          <Panel
            title="Dev user stories"
            lead="Approved designs became user stories, written together with the BAs so developers knew exactly what to build."
          >
            <PointGrid points={storyPoints} />
          </Panel>
        )}
      </div>
    </section>
  );
}
