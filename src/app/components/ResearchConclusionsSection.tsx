import type { ResearchConclusions } from "../data/researchConclusionsData";

type ResearchConclusionsSectionProps = {
  productName: string;
  conclusions: ResearchConclusions;
};

/**
 * Synthesis step between competitive/mood research and the media results.
 * Shows conclusions only — not the full build process.
 */
export function ResearchConclusionsSection({
  productName,
  conclusions,
}: ResearchConclusionsSectionProps) {
  return (
    <section
      aria-labelledby="research-conclusions-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-10 max-w-2xl md:mb-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Research conclusions
        </p>
        <h2
          id="research-conclusions-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          What the field taught me
          <span className="text-muted"> about </span>
          {productName}
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-muted md:text-[15px]">
          {conclusions.lead}
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="mb-5 flex items-baseline justify-between gap-4 border-b border-border pb-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-text">
              From competitors
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Field
            </span>
          </div>
          <ol className="m-0 list-none space-y-5 p-0">
            {conclusions.competitive.map((item, index) => (
              <li
                key={`comp-${index}`}
                className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3"
              >
                <span className="font-mono text-[11px] tabular-nums text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-muted md:text-[15px]">{item}</p>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <div className="mb-5 flex items-baseline justify-between gap-4 border-b border-border pb-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-text">
              From mood board
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Atmosphere
            </span>
          </div>
          <ol className="m-0 list-none space-y-5 p-0">
            {conclusions.atmosphere.map((item, index) => (
              <li
                key={`mood-${index}`}
                className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3"
              >
                <span className="font-mono text-[11px] tabular-nums text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-muted md:text-[15px]">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <p className="mt-12 max-w-2xl border-l-2 border-accent/60 pl-5 text-sm leading-relaxed text-text md:mt-14 md:text-[15px]">
        {conclusions.bridge}
      </p>
    </section>
  );
}
