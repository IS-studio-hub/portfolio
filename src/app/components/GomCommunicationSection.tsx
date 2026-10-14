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
    title: "Presenting to the client",
    body: "I presented each flow directly to the Government of Manitoba team, walking them through the user's story step by step and explaining the reasoning behind every design decision.",
  },
  {
    title: "Interactive prototypes",
    body: "Instead of static screens, I built clickable Figma prototypes for each narrative, PVP, angling and hunting licences, so the client could experience the real journey from homepage to receipt.",
  },
  {
    title: "Covering every path",
    body: "Prototypes were wired for the happy path and the alternatives: residency choices, sign-in and account creation, errors, cart and multiple checkout states.",
  },
  {
    title: "Decisions in the room",
    body: "Seeing the flow working made feedback concrete. The client could point to the exact screen and moment, and we could agree on changes in the same session.",
  },
];

const fixingPoints = [
  {
    title: "Capture every comment",
    body: "After each presentation I collected all feedback from the client and stakeholders and turned it into a clear, prioritised list of fixes.",
  },
  {
    title: "Fix and re-share fast",
    body: "Fixes were applied to the designs and prototypes quickly, then shared back with the client to confirm each point was resolved.",
  },
  {
    title: "Keep the system consistent",
    body: "Changes were made at the component level whenever possible, so a fix in one flow updated every flow that used the same pattern.",
  },
  {
    title: "Sign-off before build",
    body: "Each flow went through fixing sessions until the client signed off, so development started from approved, stable designs.",
  },
];

const storyPoints = [
  {
    title: "Partnering with the BA",
    body: "I worked closely with the business analyst to translate approved designs into user stories the development team could build from.",
  },
  {
    title: "Design as acceptance criteria",
    body: "Each story linked to the exact screens and prototype, with behaviour, validation rules, error messages and edge cases written as acceptance criteria.",
  },
  {
    title: "One story, one outcome",
    body: "Flows were broken into small, testable stories, such as sign-in, add a licence to cart or apply for a draw, so dev could estimate and deliver in sprints.",
  },
  {
    title: "Support during development",
    body: "I stayed available to the developers and BA for questions, reviewed builds against the designs, and updated stories when details changed.",
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

/** GOM only: communication with client, fixing sessions and dev user stories. */
export function GomCommunicationSection() {
  const [tab, setTab] = useState<TabId>("presentation");

  return (
    <section
      aria-labelledby="gom-communication-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Communication
        </p>
        <h2
          id="gom-communication-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          From client presentation
          <span className="text-muted"> to </span>
          dev-ready stories
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
          Great design only ships when everyone understands it. I presented the work to the client,
          ran fixing sessions on their feedback, and worked with the BA to hand development clear
          user stories.
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
              aria-controls={`gom-comm-panel-${item.id}`}
              id={`gom-comm-tab-${item.id}`}
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

      <div role="tabpanel" id={`gom-comm-panel-${tab}`} aria-labelledby={`gom-comm-tab-${tab}`}>
        {tab === "presentation" && (
          <>
            <Panel
              title="Client presentation"
              lead="Presentation and prototyping went hand in hand: I told the story of each flow and let the client click through it."
            >
              <PointGrid points={presentationPoints} />
            </Panel>
            <div className="mt-12">
              <ImageLightboxGallery
                label="prototype"
                items={[
                  {
                    src: assetPath("/projects/gom/communication/prototype-flows.png"),
                    title: "Figma prototype wiring",
                    note: "PVP, angling and hunting flows",
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
            lead="After every presentation, feedback turned into focused fixing sessions until each flow was approved."
          >
            <PointGrid points={fixingPoints} />
          </Panel>
        )}

        {tab === "stories" && (
          <Panel
            title="Dev user stories"
            lead="Approved designs became user stories, written together with the business analyst so developers knew exactly what to build."
          >
            <PointGrid points={storyPoints} />
          </Panel>
        )}
      </div>
    </section>
  );
}
