import { assetPath } from "../lib/assetPath";

const c = (file: string) => assetPath(`/projects/anova/components/${file}`);

const components = [
  { file: "01-step-card-media.png", name: "Step card", note: "With media" },
  { file: "02-step-card-preheat.png", name: "Step card", note: "Oven settings + action" },
  { file: "03-finishing-step.png", name: "Finishing step", note: "Settings + primary CTA" },
  { file: "04-doneness-selector.png", name: "Doneness selector", note: "Carousel" },
  { file: "05-start-preheating-cta.png", name: "Start preheating", note: "Probe and timer variants" },
  { file: "06-buttons.png", name: "Buttons", note: "Secondary, primary, disabled" },
  { file: "07-category-cards.png", name: "Category cards", note: "Default and selected" },
  { file: "08-tab-bar.png", name: "Tab bar", note: "Navigation" },
  { file: "09-icon-heat.png", name: "Heat icon", note: "Sizes, states, label" },
  { file: "10-icon-sous-vide.png", name: "Sous vide icon", note: "Sizes, states, label" },
  { file: "11-icon-home.png", name: "Home icon", note: "Outline and filled" },
  { file: "12-icon-bookmark.png", name: "Bookmark icon", note: "Outline and filled" },
];

/** Anova only: example components from the design system. */
export function AnovaComponentsSection() {
  return (
    <section
      aria-labelledby="anova-components-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-10 max-w-2xl md:mb-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Components
        </p>
        <h2
          id="anova-components-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          Example design system
          <span className="text-muted"> components</span>
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-muted md:text-[15px]">
          A sample of the building blocks behind the guided cooking flow: step cards, oven-setting
          rows, preheat actions, selectors, navigation and the icon set, each with its states.
        </p>
      </div>

      <div className="columns-1 gap-4 sm:columns-2 md:gap-6 lg:columns-3">
        {components.map((item) => (
          <figure key={item.file} className="m-0 mb-4 break-inside-avoid md:mb-6">
            <div className="flex items-center justify-center rounded-2xl border border-border bg-white p-6 md:p-8">
              <img
                src={c(item.file)}
                alt={`${item.name}, ${item.note}`}
                loading="lazy"
                className="block h-auto max-w-full"
              />
            </div>
            <figcaption className="mt-2 flex items-baseline justify-between gap-3">
              <span className="text-sm text-text">{item.name}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                {item.note}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
