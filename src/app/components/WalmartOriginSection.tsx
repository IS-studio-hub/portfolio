import { assetPath } from "../lib/assetPath";

const z = (file: string) => assetPath(`/projects/walmart/zeekit/${file}`);

const milestones = [
  {
    step: "01",
    title: "Solo designer at a start-up",
    body: "I joined Zeekit as the only product designer and owned the virtual fitting room end to end: flows, UI, interaction and the visual language.",
  },
  {
    step: "02",
    title: "A white-label product for fashion",
    body: "We built it as a white-label layer that plugged into fashion e-commerce sites like ASOS, Tommy Hilfiger, Adidas and Farfetch, so each brand could let shoppers switch the model on its own product pages.",
  },
  {
    step: "03",
    title: "Acquired by Walmart",
    body: "Walmart acquired the company for about $90 million. I moved over as UX Lead for the AI and AR features on Walmart.com, which grew into Choose my model.",
  },
];

const screens = [
  { file: "01-pdp-switch-model.png", caption: "Switch model on the product image" },
  { file: "02-welcome.png", caption: "Fitting room welcome" },
  { file: "03-intro.png", caption: "Explaining the digitally dressed models" },
  { file: "04-size-select.png", caption: "Step 1 · your size" },
  { file: "05-size-select-illustrated.png", caption: "Step 1 · illustrated variant" },
  { file: "06-height-input.png", caption: "Step 2 · your height" },
  { file: "07-height-input-illustrated.png", caption: "Step 2 · illustrated variant" },
  { file: "08-skin-tone.png", caption: "Step 3 · skin tone" },
  { file: "09-skin-tone-illustrated.png", caption: "Step 3 · illustrated variant" },
  { file: "10-describe-compact.png", caption: "Compact one-sheet version on the PDP" },
  { file: "11-model-grid.png", caption: "Browsing matching models" },
  { file: "12-model-grid-selected.png", caption: "Model selected" },
  { file: "13-select-model.png", caption: "Model carousel" },
  { file: "14-model-result.png", caption: "Product on the chosen model" },
  { file: "15-closet.png", caption: "Closet: try more items on the same model" },
  { file: "16-pdp-applied.png", caption: "Chosen model back on the PDP" },
  { file: "17-pdp-measurements.png", caption: "Model measurements overlay" },
];

/** Walmart-only: the Zeekit start-up story before the Walmart acquisition. */
export function WalmartOriginSection() {
  return (
    <section
      aria-labelledby="walmart-origin-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-10 max-w-2xl md:mb-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Where it started
        </p>
        <h2
          id="walmart-origin-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          From a start-up fitting room
          <span className="text-muted"> to </span>
          Walmart
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-muted md:text-[15px]">
          Before Choose my model lived on Walmart.com, it was a small start-up product. I designed it
          from the first screen as a solo designer, and stayed on to lead it after the acquisition.
        </p>
      </div>

      <ol className="m-0 grid list-none gap-8 p-0 md:grid-cols-3 md:gap-10">
        {milestones.map((item) => (
          <li key={item.step} className="border-t border-border pt-5">
            <span className="font-mono text-[11px] tabular-nums text-accent">{item.step}</span>
            <h3 className="mt-2 font-display text-xl font-semibold text-text">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-[15px]">{item.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-20 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
        {screens.map((screen) => (
          <figure key={screen.file} className="m-0">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <img
                src={z(screen.file)}
                alt={screen.caption}
                loading="lazy"
                className="block h-auto w-full"
              />
            </div>
            <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted">
              {screen.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
