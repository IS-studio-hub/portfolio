import { useState } from "react";
import { assetPath } from "../lib/assetPath";
import { ImageLightboxGallery } from "./ImageLightboxGallery";

type TabId = "requirements" | "competitors" | "audience";

const TABS: { id: TabId; label: string }[] = [
  { id: "requirements", label: "Requirement meetings" },
  { id: "competitors", label: "Competitors" },
  { id: "audience", label: "Target audience" },
];

const requirementPoints = [
  {
    title: "From start-up to Walmart",
    body: "Requirements started at Zeekit, with fashion brands like ASOS, Tommy Hilfiger, Adidas and Farfetch, and continued at Walmart with US fashion, merchandising and Walmart Global Technology teams.",
  },
  {
    title: "Two interfaces, not one",
    body: "After several months of work we split the feature in two: Switch model, a simple button brands add to their PDP, and the Fitting room, a standalone virtual dressing room experience.",
  },
  {
    title: "Image size and quality",
    body: "We aligned early on what size the generated images come out of the system, and what size we display them in the interface, so results look sharp without slowing the PDP.",
  },
  {
    title: "Questions before the wow",
    body: "Together with product we defined how many questions to ask before the reveal, onboarding or one page, so shoppers stay curious instead of dropping off.",
  },
];

const competitors = [
  {
    name: "Lalaland.ai",
    focus: "AI-generated fashion models",
    note: "Set model appearance with skin tone, body size, hair style and body shape, a strong reference for model selection controls.",
    url: "https://lalaland.ai/",
  },
  {
    name: "The Tech Fashionista",
    focus: "Fashion tech research",
    note: "A source for fitting room and avatar patterns, entry points and how brands present virtual try-on.",
    url: "https://thetechfashionista.com/",
  },
  {
    name: "PICTOFiT",
    focus: "Virtual try-on platform",
    note: "Web and mobile try-on with avatars and outfit building for fashion brands and retailers.",
    url: "https://www.pictofit.com/",
  },
  {
    name: "Wanna Kicks & SneakerKit",
    focus: "AR footwear try-on",
    note: "Show how AR and deep learning can let shoppers see sneakers on their own feet.",
    url: "https://wanna.fashion/",
  },
];

const audienceNeeds = [
  { title: "Will it look right on me?", body: "See the garment on a model that matches their height, body shape, size and skin tone." },
  { title: "Be my own model", body: "Upload or take a photo and see the product on themselves, with clear guidance and privacy." },
  { title: "Stay in the buying flow", body: "Change the model right on the product image, without leaving the PDP or losing Add to cart." },
  { title: "Realistic results", body: "Dressing looks more realistic on a background with a floor than on an empty background." },
  { title: "Keep exploring", body: "Try more items on the same model, so the experience feels like a fitting room, not a one-off gimmick." },
  { title: "Brands that plug it in", body: "Fashion e-commerce teams need a simple, white-label button they can add to their own product pages." },
];

/** Walmart only: research section with requirement meetings, competitors and target audience tabs. */
export function WalmartResearchSection() {
  const [tab, setTab] = useState<TabId>("requirements");

  return (
    <section
      aria-labelledby="walmart-research-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Research</p>
        <h2
          id="walmart-research-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          Understanding the client,
          <span className="text-muted"> the field and </span>
          the shoppers
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
          Research for virtual try-on came from three places: requirements from fashion brands and
          Walmart, other try-on and AR products, and what shoppers need to feel confident buying.
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
              aria-controls={`walmart-research-panel-${item.id}`}
              id={`walmart-research-tab-${item.id}`}
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
        id={`walmart-research-panel-${tab}`}
        aria-labelledby={`walmart-research-tab-${tab}`}
      >
        {tab === "requirements" && (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-16">
            <div className="max-w-md">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                From white-label start-up to Walmart
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                As the solo designer at Zeekit and later UX Lead for AI and AR features at Walmart, I
                worked directly with brands, product and engineering to turn a new technology into
                a clear shopping experience.
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
                Other virtual try-on experiences
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                I reviewed AI model generators, virtual fitting rooms, AR try-on apps and 3D commerce
                platforms to learn how they handle model selection, realism and entry points.
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
        {tab === "competitors" && (
          <div className="mt-12">
            <ImageLightboxGallery
              label="competitor research"
              items={[
                { src: assetPath("/projects/walmart/research/01-lalaland.png"), title: "Lalaland.ai", note: "Set model appearance" },
                { src: assetPath("/projects/walmart/research/02-fitting-room-board.png"), title: "Fitting room research board", note: "Questions, background & entry points" },
                { src: assetPath("/projects/walmart/research/03-web-try-on.png"), title: "Web try-on", note: "Lalaland.ai & PICTOFiT" },
                { src: assetPath("/projects/walmart/research/04-mobile-try-on.png"), title: "Mobile try-on apps", note: "Avatars, AR & outfits" },
                { src: assetPath("/projects/walmart/research/05-ar-platforms.png"), title: "AR & 3D commerce platforms", note: "Try-on & contextual shopping" },
                { src: assetPath("/projects/walmart/research/06-ar-footwear-returns.png"), title: "AR footwear & returns", note: "Wanna Kicks, SneakerKit & fitting demos" },
              ]}
            />
          </div>
        )}

        {tab === "audience" && (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-16">
            <div className="max-w-md">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                Shoppers want confidence, not a gimmick
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                Shoppers ask one practical question before they buy: will this look right on someone
                like me? Default catalog models answer that for only a few bodies.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                So the experience had to feel realistic, stay inside the buying flow, and work both for
                shoppers who want a closer model and those who want to see themselves.
              </p>
            </div>
            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-text">
                What shoppers need
              </p>
              <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
                {audienceNeeds.map((item) => (
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
