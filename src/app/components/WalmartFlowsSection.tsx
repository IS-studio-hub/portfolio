import { useState } from "react";
import { assetPath } from "../lib/assetPath";
import { ImageLightboxGallery } from "./ImageLightboxGallery";

type TabId = "flows" | "examples" | "content" | "accessibility" | "testing";

const TABS: { id: TabId; label: string }[] = [
  { id: "flows", label: "High-level flows" },
  { id: "examples", label: "Flow examples" },
  { id: "content", label: "Content process" },
  { id: "accessibility", label: "Accessibility" },
  { id: "testing", label: "Testing" },
];

const flowSteps = [
  "Start from the shopper's question on the product page: will this look right on someone like me?",
  "Map the two paths separately: Choose my model and Be your own model, each with its own steps and promises.",
  "Add every touchpoint: entry on the product image, questions, model selection, photo upload, result, closet and back to the PDP.",
  "Walk the flow with product, engineering and brands, then lock it as the blueprint for screens and stories.",
];

const narratives: { name: string; detail?: string; parts: string[] }[] = [
  { name: "Entry point", detail: "PDP", parts: ["Try it on / Switch model", "On the product image", "Keeps Add to cart"] },
  { name: "Questions", detail: "Onboarding", parts: ["Your size", "Your height", "Skin tone", "One-sheet version"] },
  { name: "Choose my model", parts: ["Matching models", "Model carousel", "Select model", "Model measurements"] },
  { name: "Be your own model", parts: ["Upload or take a photo", "Lighting & framing tips", "Privacy", "Processing"] },
  { name: "Result", parts: ["Product on the model", "Realistic background", "Back on the PDP"] },
  { name: "Closet", parts: ["Try more items", "Same model", "Mix & match"] },
  { name: "Fitting room", detail: "Standalone", parts: ["Pick a model", "Browse clothing", "Ready-made looks", "Buy"] },
  { name: "White-label", detail: "Brands", parts: ["Simple PDP button", "Brand styling", "Retailer integration"] },
];

const contentPoints = [
  { title: "Clear promises", body: "Choose my model and Be your own model are different promises, so labels and copy keep them clearly apart." },
  { title: "Few, friendly questions", body: "Size, height and skin tone asked in short, friendly steps, so shoppers reach the wow moment quickly." },
  { title: "Guidance for photos", body: "Simple tips for lighting, framing and pose, plus clear privacy copy before shoppers share a photo." },
  { title: "Inclusive language", body: "Body and skin tone options described in respectful, recognisable terms that shoppers can relate to." },
];

const accessibilityPoints = [
  { title: "Inclusive by design", body: "Model options cover a wide range of heights, body shapes, sizes and skin tones, so more shoppers see themselves." },
  { title: "Not only visual", body: "Selections and results are labelled with text, not only shown as images or colours." },
  { title: "Keyboard & screen readers", body: "The entry point, steps and model grid work with keyboard and assistive technology on web." },
  { title: "Native patterns", body: "The same flow follows iOS and Android patterns in the Walmart app, so it works with platform accessibility features." },
];

const testingPoints = [
  { title: "Flow walkthroughs", body: "Flows and prototypes were walked through with product, engineering and brand partners before visual design." },
  { title: "Usability testing", body: "Shoppers were tested on finding the entry point, choosing a model and using their own photo, to see where they hesitate." },
  { title: "Iterate on findings", body: "Findings like splitting Switch model from the Fitting room fed straight back into the flows and screens." },
  { title: "Design QA in build", body: "Reviewed builds with developers against the designs, including image quality, states and responsive layouts." },
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

function Panel({
  title,
  lead,
  children,
}: {
  title: string;
  lead: string;
  children: React.ReactNode;
}) {
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

/** Walmart only: high-level flows plus examples, content, accessibility and testing tabs. */
export function WalmartFlowsSection() {
  const [tab, setTab] = useState<TabId>("flows");

  return (
    <section
      aria-labelledby="walmart-flows-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          High-level flow
        </p>
        <h2
          id="walmart-flows-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          Mapping every narrative
          <span className="text-muted"> before </span>
          designing screens
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
          Before any screen, I mapped a high-level flow for each part of virtual try-on, from the
          product page to the fitting room, then shaped the content, accessibility and testing
          around them.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="High-level flow sections"
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
              aria-controls={`walmart-flows-panel-${item.id}`}
              id={`walmart-flows-tab-${item.id}`}
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

      <div role="tabpanel" id={`walmart-flows-panel-${tab}`} aria-labelledby={`walmart-flows-tab-${tab}`}>
        {tab === "flows" && (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-16">
            <div className="max-w-md">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                One flow per narrative
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                Each path into virtual try-on had its own needs, so each got its own high-level
                flow. The process was the same every time:
              </p>
              <ol className="mt-6 m-0 list-none space-y-4 p-0">
                {flowSteps.map((step, index) => (
                  <li key={step} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3">
                    <span className="font-mono text-[11px] tabular-nums text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed text-muted md:text-[15px]">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
            <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
              {narratives.map((item) => (
                <li key={item.name} className="rounded-xl border border-border bg-surface p-4 md:p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="font-display text-base font-semibold text-text">{item.name}</h4>
                    {item.detail && (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                        {item.detail}
                      </span>
                    )}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.parts.map((part) => (
                      <span
                        key={part}
                        className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted"
                      >
                        {part}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {tab === "examples" && (
          <>
            <div className="mb-8 max-w-2xl">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                Flow examples
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                How the work flowed in two very different settings. At Zeekit, the start-up process
                ran from monthly brainstorms and founder reviews to KPIs, discovery, an MVP, user
                testing, UI and dev, with quick correction loops at every step. At Walmart, the
                corporate process added KPI and kick-off meetings, research and analytics teams,
                user testing, a UX Lead review, usability tests, a handoff file and VQA with
                development. Click the flow to open it larger.
              </p>
            </div>
            <ImageLightboxGallery
              label="flow"
              items={[
                {
                  src: assetPath("/projects/walmart/flows/01-zeekit-walmart-process.png"),
                  title: "Zeekit start-up vs Walmart corporate process",
                  note: "Design process flows",
                  wide: true,
                },
              ]}
            />
          </>
        )}

        {tab === "content" && (
          <Panel
            title="Content process"
            lead="I wrote the product language alongside the flows, so every step of try-on spoke to shoppers the same way."
          >
            <PointGrid points={contentPoints} />
          </Panel>
        )}

        {tab === "accessibility" && (
          <Panel
            title="Accessibility"
            lead="Virtual try-on is about representation, so inclusion and accessibility were requirements in every flow."
          >
            <PointGrid points={accessibilityPoints} />
          </Panel>
        )}

        {tab === "testing" && (
          <Panel
            title="Testing"
            lead="Flows and designs were validated with partners and shoppers, then checked again during development."
          >
            <PointGrid points={testingPoints} />
          </Panel>
        )}
      </div>
    </section>
  );
}
