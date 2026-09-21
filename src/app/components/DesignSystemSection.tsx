import type { DesignSystemBoard } from "../data/designSystemData";

type DesignSystemSectionProps = {
  productName: string;
  board: DesignSystemBoard;
};

const PHASE_LABELS: Record<string, string> = {
  create: "01 · Create",
  maintain: "02 · Maintain",
  manage: "03 · Manage",
  implement: "04 · Implement",
};

/**
 * Design system process — for corporate case studies.
 * Vertical spine + foundation strip + component ledger. Not a card grid.
 */
export function DesignSystemSection({ productName, board }: DesignSystemSectionProps) {
  return (
    <section
      aria-labelledby="design-system-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-10 max-w-2xl md:mb-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Design system
        </p>
        <h2
          id="design-system-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          {board.systemName}
          <span className="text-muted"> for </span>
          {productName}
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-muted md:text-[15px]">{board.note}</p>
      </div>

      {/* Foundations + components strip */}
      <div className="mb-12 grid gap-10 border border-border bg-[#090909] p-5 md:mb-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] md:gap-12 md:p-8">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Foundations</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {board.foundations.map((item) => (
              <li
                key={item}
                className="border border-white/15 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-text"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            Core components
          </p>
          <ol className="mt-4 columns-1 gap-x-8 sm:columns-2">
            {board.components.map((item, index) => (
              <li
                key={item}
                className="mb-2 flex break-inside-avoid items-baseline gap-3 border-b border-white/10 py-2"
              >
                <span className="font-mono text-[10px] tabular-nums text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-text">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Process spine */}
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.4fr)] lg:gap-16">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            How I ran it
          </p>
          <p className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight text-text md:text-3xl">
            Create, maintain, manage — then ship it with engineering.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            A design system only works when it stays alive in Figma, in code and in the ways teams
            ask for change.
          </p>
        </aside>

        <ol className="relative m-0 list-none p-0">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-4 left-[11px] top-4 w-px bg-gradient-to-b from-accent/80 via-border to-border md:left-[15px]"
          />

          {board.phases.map((phase, index) => (
            <li
              key={phase.id}
              className="relative grid grid-cols-[28px_minmax(0,1fr)] gap-4 border-b border-border/70 py-7 first:pt-0 last:border-b-0 md:grid-cols-[36px_minmax(0,1fr)] md:gap-6 md:py-8"
            >
              <div className="relative flex justify-center pt-1.5">
                <span
                  aria-hidden="true"
                  className="relative z-[1] flex h-5 w-5 items-center justify-center rounded-full border border-border bg-bg font-mono text-[9px] text-muted md:h-6 md:w-6 md:text-[10px]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  {PHASE_LABELS[phase.id] ?? phase.title}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-text md:text-2xl">
                  {phase.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-[15px]">
                  {phase.summary}
                </p>
                <ul className="mt-4 space-y-2">
                  {phase.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-text/85 md:text-[15px]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
