import type { Competitor } from "../data/types";

type CompetitorsSectionProps = {
  productName: string;
  intro?: string;
  competitors: Competitor[];
};

/**
 * Competitive field — typographic ledger with a vertical spine.
 * Intentionally not a card grid: one continuous comparison strip.
 */
export function CompetitorsSection({
  productName,
  intro,
  competitors,
}: CompetitorsSectionProps) {
  if (!competitors.length) return null;

  return (
    <section
      aria-labelledby="competitors-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-16 xl:gap-24">
        <header className="max-w-md lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Competitive field
          </p>
          <h2
            id="competitors-heading"
            className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-text md:text-4xl"
          >
            Who else plays
            <span className="text-muted"> near </span>
            {productName}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted md:text-[15px]">
            {intro ??
              "A focused set of peers and concept-adjacent products that shape expectations for this experience."}
          </p>
          <div className="mt-8 flex items-baseline gap-3 border-t border-border pt-6">
            <span className="font-display text-4xl font-semibold tabular-nums text-text">
              {String(competitors.length).padStart(2, "0")}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
              mapped competitors
            </span>
          </div>
        </header>

        <ol className="relative m-0 list-none p-0">
          {/* Spine */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-3 left-[11px] top-3 w-px bg-gradient-to-b from-accent/80 via-border to-border md:left-[15px]"
          />

          {competitors.map((competitor, index) => {
            const rank = String(index + 1).padStart(2, "0");

            return (
              <li
                key={`${competitor.name}-${index}`}
                className="group relative grid grid-cols-[28px_minmax(0,1fr)] gap-4 border-b border-border/70 py-6 first:pt-0 last:border-b-0 md:grid-cols-[36px_minmax(0,1fr)] md:gap-6 md:py-7"
              >
                <div className="relative flex justify-center pt-1.5">
                  <span
                    aria-hidden="true"
                    className="relative z-[1] flex h-5 w-5 items-center justify-center rounded-full border border-border bg-bg font-mono text-[9px] text-muted transition-colors group-hover:border-accent group-hover:text-accent md:h-6 md:w-6 md:text-[10px]"
                  >
                    {rank}
                  </span>
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                    {competitor.url ? (
                      <a
                        href={competitor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-xl font-semibold tracking-tight text-text transition-colors hover:text-accent group-hover:text-accent md:text-2xl"
                        data-cursor="Visit"
                      >
                        {competitor.name}
                        <span
                          aria-hidden="true"
                          className="ml-1.5 inline-block text-sm text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        >
                          ↗
                        </span>
                      </a>
                    ) : (
                      <span className="font-display text-xl font-semibold tracking-tight text-text transition-colors group-hover:text-accent md:text-2xl">
                        {competitor.name}
                      </span>
                    )}
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      {competitor.focus}
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-[15px]">
                    {competitor.note}
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-4 block h-px w-0 bg-accent transition-all duration-500 group-hover:w-16"
                  />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
