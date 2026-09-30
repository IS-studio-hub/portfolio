import { useState } from "react";
import type { FigmaFile, FigmaShowcase } from "../data/figmaFilesData";

type FigmaSectionProps = {
  productName: string;
  showcase: FigmaShowcase;
};

const isDivider = (name: string) => /^-+$/.test(name.trim());
// Figma page names often carry leading spaces for visual nesting; match on the collapsed name.
const pageKey = (name: string) => name.replace(/\s+/g, " ").trim();

function FrameGlyph() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12" className="h-3 w-3 shrink-0 text-white/40">
      <path
        d="M3.5 0.5v11M8.5 0.5v11M0.5 3.5h11M0.5 8.5h11"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

function FileCard({
  file,
  index,
  active,
  wide,
  onSelect,
}: {
  file: FigmaFile;
  index: number;
  active: boolean;
  wide: boolean;
  onSelect: () => void;
}) {
  return (
    <li className="min-w-0">
      <button
        type="button"
        onClick={onSelect}
        aria-pressed={active}
        data-cursor="Open"
        className={`group flex h-full w-full flex-col overflow-hidden rounded-2xl border text-left transition-colors ${
          wide ? "md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]" : ""
        } ${active ? "border-accent/70 bg-white/[0.03]" : "border-border hover:border-white/25"}`}
      >
        <div
          className={`aspect-[31/16] w-full overflow-hidden border-b border-border bg-[#1e1e1e] ${
            wide ? "md:border-b-0 md:border-r" : ""
          }`}
        >
          <img
            src={file.cover}
            alt={`${file.name} cover frame`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
            {String(index + 1).padStart(2, "0")} · {file.kind}
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-text">
            {file.name}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{file.summary}</p>
          <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4">
            {file.stats.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-semibold leading-none text-text">
                  {stat.value}
                </dd>
                <dd className="mt-1 font-mono text-[9px] uppercase tracking-widest text-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </button>
    </li>
  );
}

/**
 * Figma proof — real frames exported from the project's Figma files,
 * shown in a viewer laid out like the Figma editor (pages · canvas · inspector).
 */
export function FigmaSection({ productName, showcase }: FigmaSectionProps) {
  const [fileIndex, setFileIndex] = useState(0);
  const [viewIndex, setViewIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const file = showcase.files[fileIndex];
  const view = file.views[viewIndex];
  const single = showcase.files.length === 1;
  const viewsByPage = new Map<string, number[]>();
  file.views.forEach((item, index) => {
    const key = pageKey(item.page);
    viewsByPage.set(key, [...(viewsByPage.get(key) ?? []), index]);
  });
  const pageCount = file.pages.filter((page) => !isDivider(page)).length;
  // Wide boards scroll sideways, tall frames scroll down, everything else zooms both ways.
  const aspect = view.width / view.height;
  const zoomWidth = aspect >= 1.6 ? "260%" : aspect <= 0.8 ? "100%" : "180%";

  const showView = (index: number) => {
    setViewIndex(index);
    setZoomed(false);
  };

  const showFile = (index: number, scroll = false) => {
    setFileIndex(index);
    showView(0);
    if (scroll) {
      document.getElementById("figma-viewer")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const step = (delta: number) => {
    showView((viewIndex + delta + file.views.length) % file.views.length);
  };

  return (
    <section
      aria-labelledby="figma-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-10 max-w-2xl md:mb-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Figma</p>
        <h2
          id="figma-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          Inside the Figma {single ? "file" : "files"}
          <span className="text-muted"> for </span>
          {productName}
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-muted md:text-[15px]">{showcase.note}</p>
      </div>

      <ol className={`grid gap-4 md:gap-5 ${single ? "" : "md:grid-cols-3"}`}>
        {showcase.files.map((item, index) => (
          <FileCard
            key={item.id}
            file={item}
            index={index}
            active={index === fileIndex}
            wide={single}
            onSelect={() => showFile(index, true)}
          />
        ))}
      </ol>

      {/* Editor-style viewer */}
      <div
        id="figma-viewer"
        className="mt-10 scroll-mt-28 overflow-hidden rounded-xl border border-white/10 bg-[#2c2c2c] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] md:mt-14"
      >
        {/* Toolbar */}
        <div className="flex items-center gap-2 border-b border-black/50 px-2 py-1.5">
          <div role="tablist" aria-label="Figma files" className="flex min-w-0 flex-1 gap-1 overflow-x-auto">
            {showcase.files.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={index === fileIndex}
                onClick={() => showFile(index)}
                className={`shrink-0 rounded-md px-3 py-1.5 text-xs transition-colors ${
                  index === fileIndex
                    ? "bg-[#1e1e1e] text-white"
                    : "text-white/55 hover:bg-white/5 hover:text-white/85"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous frame"
              className="rounded-md px-2 py-1.5 text-xs text-white/60 hover:bg-white/5 hover:text-white"
            >
              ←
            </button>
            <span className="min-w-[3.25rem] text-center font-mono text-[10px] tabular-nums text-white/45">
              {viewIndex + 1} / {file.views.length}
            </span>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next frame"
              className="rounded-md px-2 py-1.5 text-xs text-white/60 hover:bg-white/5 hover:text-white"
            >
              →
            </button>
            <button
              type="button"
              onClick={() => setZoomed((value) => !value)}
              aria-pressed={zoomed}
              className="ml-1 hidden rounded-md border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white/70 hover:border-white/25 hover:text-white sm:block"
            >
              {zoomed ? "Fit" : "Zoom"}
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-[220px_minmax(0,1fr)_250px]">
          {/* Pages panel */}
          <nav
            aria-label={`${file.name} pages`}
            className="hidden max-h-[640px] overflow-y-auto border-r border-black/50 py-3 lg:block"
          >
            <p className="flex items-baseline justify-between px-4 pb-2 text-[11px] font-medium text-white/85">
              Pages
              <span className="font-mono text-[10px] font-normal text-white/40">{pageCount}</span>
            </p>
            <ul>
              {file.pages.map((page, index) => {
                if (isDivider(page)) {
                  return <li key={`divider-${index}`} role="separator" className="mx-4 my-1.5 h-px bg-white/10" />;
                }
                const targets = viewsByPage.get(pageKey(page));
                if (!targets) {
                  return (
                    <li key={page} className="truncate whitespace-pre px-4 py-1 text-[11px] text-white/35">
                      {page}
                    </li>
                  );
                }
                const active = pageKey(view.page) === pageKey(page);
                return (
                  <li key={page}>
                    <button
                      type="button"
                      onClick={() => showView(targets[0])}
                      aria-current={active ? "page" : undefined}
                      className={`block w-full truncate whitespace-pre px-4 py-1 text-left text-[11px] transition-colors ${
                        active ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/5"
                      }`}
                    >
                      {page}
                    </button>
                    {active &&
                      targets.map((target) => (
                        <button
                          key={target}
                          type="button"
                          onClick={() => showView(target)}
                          className={`flex w-full items-center gap-1.5 py-1 pl-7 pr-4 text-left text-[11px] ${
                            target === viewIndex ? "text-white" : "text-white/50 hover:text-white/80"
                          }`}
                        >
                          <FrameGlyph />
                          <span className="truncate">
                            {file.views[target].frame}
                            {file.views[target].label && (
                              <span className="text-white/40"> · {file.views[target].label}</span>
                            )}
                          </span>
                        </button>
                      ))}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile page picker */}
          <div className="flex gap-1.5 overflow-x-auto border-b border-black/50 px-2 py-2 lg:hidden">
            {file.views.map((item, index) => (
              <button
                key={`${item.page}-${item.frame}`}
                type="button"
                onClick={() => showView(index)}
                aria-current={index === viewIndex ? "page" : undefined}
                className={`shrink-0 rounded-md px-2.5 py-1 text-[11px] ${
                  index === viewIndex ? "bg-white/10 text-white" : "text-white/60"
                }`}
              >
                {item.label ??
                  ((viewsByPage.get(pageKey(item.page))?.length ?? 0) > 1 ? item.frame : pageKey(item.page))}
              </button>
            ))}
          </div>

          {/* Canvas */}
          <div
            className="relative h-[420px] overflow-auto bg-[#1e1e1e] [background-image:radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:18px_18px] md:h-[560px] lg:h-[640px]"
          >
            <p className="pointer-events-none sticky left-0 top-0 z-[1] flex items-center gap-1.5 px-4 pt-3 text-[11px] text-white/55">
              <FrameGlyph />
              <span className="truncate">{view.frame}</span>
            </p>
            <button
              type="button"
              onClick={() => setZoomed((value) => !value)}
              data-cursor={zoomed ? "Fit" : "Zoom"}
              aria-label={zoomed ? "Fit frame to canvas" : "Zoom into frame"}
              className={
                zoomed
                  ? "block p-6 pt-3 md:p-10 md:pt-4"
                  : "absolute inset-0 flex items-center justify-center p-6 pt-10 md:p-10 md:pt-12"
              }
              style={zoomed ? { width: zoomWidth } : undefined}
            >
              <img
                key={view.src}
                src={view.src}
                alt={`${view.label ?? view.frame}, on the “${pageKey(view.page)}” page of ${file.name}`}
                decoding="async"
                className={
                  zoomed
                    ? "h-auto w-full rounded-sm shadow-[0_8px_40px_rgba(0,0,0,0.55)]"
                    : "max-h-full max-w-full rounded-sm object-contain shadow-[0_8px_40px_rgba(0,0,0,0.55)]"
                }
              />
            </button>
          </div>

          {/* Inspector */}
          <aside className="border-t border-black/50 p-4 text-[11px] text-white/70 lg:max-h-[640px] lg:overflow-y-auto lg:border-l lg:border-t-0">
            <p className="font-medium text-white/85">Frame</p>
            <p className="mt-2 break-words text-white">{view.frame}</p>
            {view.label && <p className="mt-1 text-white/50">{view.label}</p>}
            <dl className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded bg-white/5 px-2 py-1.5">
                <dt className="inline text-white/40">W </dt>
                <dd className="inline font-mono tabular-nums text-white/85">{view.width.toLocaleString("en-CA")}</dd>
              </div>
              <div className="rounded bg-white/5 px-2 py-1.5">
                <dt className="inline text-white/40">H </dt>
                <dd className="inline font-mono tabular-nums text-white/85">{view.height.toLocaleString("en-CA")}</dd>
              </div>
            </dl>
            <p className="mt-5 font-medium text-white/85">Page</p>
            <p className="mt-2 text-white/80">{pageKey(view.page)}</p>
            <div className="mt-5 border-t border-white/10 pt-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">What it shows</p>
              <p className="mt-2 text-[13px] leading-relaxed text-white/80">{view.note}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
