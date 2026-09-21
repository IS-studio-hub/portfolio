import type { WireframeFrame, WireframeLayout, WireframesBoard } from "../data/wireframesData";

export type WireframeSource = {
  src: string;
  caption: string;
};

type WireframesSectionProps = {
  productName: string;
  board: WireframesBoard;
  /** Final media-grid images to echo as wireframes (usually the first 3 stills). */
  sources?: WireframeSource[];
};

/** Fallback line skeleton when a final still is missing. */
function WireframeArt({ layout }: { layout: WireframeLayout }) {
  const common = {
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 160 110" className="h-full w-full text-[#1a1a1a]" aria-hidden="true">
      <rect x="8" y="8" width="144" height="94" rx="2" {...common} />
      {layout === "mobile" ? (
        <>
          <rect x="52" y="14" width="56" height="82" rx="6" {...common} />
          <rect x="60" y="28" width="40" height="48" rx="1" {...common} />
        </>
      ) : (
        <>
          <line x1="8" y1="22" x2="152" y2="22" {...common} />
          <rect x="14" y="30" width="80" height="28" rx="1" {...common} />
          <rect x="102" y="30" width="40" height="10" rx="1" {...common} />
          <rect x="14" y="66" width="40" height="28" rx="1" {...common} />
          <rect x="60" y="66" width="40" height="28" rx="1" {...common} />
          <rect x="106" y="66" width="40" height="28" rx="1" {...common} />
        </>
      )}
    </svg>
  );
}

function CropMarks() {
  return (
    <>
      <span className="absolute -left-1 -top-1 h-3 w-3 border-l border-t border-[#2a2a2a]" />
      <span className="absolute -right-1 -top-1 h-3 w-3 border-r border-t border-[#2a2a2a]" />
      <span className="absolute -bottom-1 -left-1 h-3 w-3 border-b border-l border-[#2a2a2a]" />
      <span className="absolute -bottom-1 -right-1 h-3 w-3 border-b border-r border-[#2a2a2a]" />
    </>
  );
}

/**
 * Turns a final UI still into a wireframe: edge-like contrast on tracing paper,
 * with a faint structural grid so it still reads as low-fi drafting.
 */
function WireframeStill({
  src,
  alt,
  layout,
  filterId,
}: {
  src?: string;
  alt: string;
  layout: WireframeLayout;
  filterId: string;
}) {
  if (!src) {
    return (
      <div className="absolute inset-x-3 bottom-3 top-8">
        <WireframeArt layout={layout} />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-top opacity-90"
        style={{
          filter: `url(#${filterId}) contrast(1.35) brightness(1.08)`,
          mixBlendMode: "multiply",
        }}
      />

      {/* Tracing-paper wash so it stays drafty, not photo-real */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(232,226,212,0.35), rgba(232,226,212,0.12) 40%, rgba(232,226,212,0.45))",
          mixBlendMode: "screen",
        }}
      />

      {/* Structural draft grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(42,42,42,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(42,42,42,0.12) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 border border-[#2a2a2a]/25"
      />
    </div>
  );
}

function WireframeSheet({
  frame,
  index,
  source,
  filterId,
}: {
  frame: WireframeFrame;
  index: number;
  source?: WireframeSource;
  filterId: string;
}) {
  const tilt = index === 0 ? "-rotate-1" : index === 2 ? "rotate-1" : "rotate-0";
  const offset = index === 0 ? "md:translate-y-3" : index === 2 ? "md:-translate-y-2" : "";
  const caption = source?.caption || frame.note;

  return (
    <figure
      className={`relative flex flex-col ${tilt} ${offset} transition-transform duration-500 hover:rotate-0 hover:translate-y-0`}
    >
      <div className="relative">
        <CropMarks />
        <div
          className="relative aspect-[16/11] overflow-hidden border border-[#2a2a2a]/40"
          style={{ backgroundColor: "#E8E2D4" }}
        >
          <span className="absolute left-2 top-2 z-10 font-mono text-[9px] uppercase tracking-[0.2em] text-[#2a2a2a]/55">
            WF-{String(index + 1).padStart(2, "0")}
          </span>
          <span
            aria-hidden="true"
            className="absolute right-3 top-3 z-10 h-2 w-2 rounded-full"
            style={{ backgroundColor: "#C45A3C" }}
          />
          <WireframeStill
            src={source?.src}
            alt={caption}
            layout={frame.layout}
            filterId={filterId}
          />
        </div>
      </div>
      <figcaption className="mt-4 flex items-baseline justify-between gap-3 border-t border-dashed border-white/15 pt-3">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-text">{frame.label}</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">{caption}</p>
        </div>
        <span className="font-mono text-[10px] tabular-nums text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * Drafting-board wireframes — three low-fi echoes of the final screens below.
 * Uses the real media stills with a line/posterize treatment, not generic boxes.
 */
export function WireframesSection({
  productName,
  board,
  sources = [],
}: WireframesSectionProps) {
  const filterId = `wf-line-${productName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <section
      aria-labelledby="wireframes-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true">
        <filter id={filterId} colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0.33 0.33 0.33 0 0
                    0.33 0.33 0.33 0 0
                    0.33 0.33 0.33 0 0
                    0    0    0    1 0"
          />
          <feComponentTransfer>
            <feFuncR type="discrete" tableValues="0 0.55 1" />
            <feFuncG type="discrete" tableValues="0 0.55 1" />
            <feFuncB type="discrete" tableValues="0 0.55 1" />
          </feComponentTransfer>
          <feComponentTransfer>
            <feFuncR type="linear" slope="2.2" intercept="-0.35" />
            <feFuncG type="linear" slope="2.2" intercept="-0.35" />
            <feFuncB type="linear" slope="2.2" intercept="-0.35" />
          </feComponentTransfer>
        </filter>
      </svg>

      <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Structure first
          </p>
          <h2
            id="wireframes-heading"
            className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
          >
            Wireframes for {productName}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">{board.note}</p>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Low-fi · From the finals
        </p>
      </div>

      <div
        className="relative overflow-hidden rounded-[1.25rem] border border-border px-4 py-8 md:px-8 md:py-10"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(200,255,0,0.04), transparent 45%), #0a0a0a",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 top-5 hidden items-center gap-3 md:flex"
        >
          <span className="h-px flex-1 bg-white/10" />
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/25">
            Draft · {productName}
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <div className="relative grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          {board.frames.map((frame, index) => (
            <WireframeSheet
              key={frame.label}
              frame={frame}
              index={index}
              source={sources[index]}
              filterId={filterId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
