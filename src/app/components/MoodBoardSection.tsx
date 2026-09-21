import { useState } from "react";
import type {
  MoodAsset,
  MoodBoard,
  MoodTexture,
} from "../data/moodBoardData";
import { assetPath } from "../lib/assetPath";

type MoodTab = "palette" | "type" | "assets" | "references";

type MoodBoardSectionProps = {
  productName: string;
  mood: MoodBoard;
};

const TABS: { id: MoodTab; label: string }[] = [
  { id: "palette", label: "Palette" },
  { id: "type", label: "Type" },
  { id: "assets", label: "Assets" },
  { id: "references", label: "References" },
];

function TexturePanel({ kind }: { kind: MoodTexture }) {
  const patterns: Record<MoodTexture, string> = {
    grain:
      "repeating-radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08) 0 0.5px, transparent 1px 4px)",
    lines:
      "repeating-linear-gradient(-18deg, rgba(255,255,255,0.1) 0 1px, transparent 1px 7px)",
    dots: "radial-gradient(rgba(255,255,255,0.18) 0.9px, transparent 1px)",
    mesh: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
    wash: "linear-gradient(145deg, rgba(255,255,255,0.14), transparent 55%, rgba(0,0,0,0.25))",
  };

  const sizes: Record<MoodTexture, string> = {
    grain: "auto",
    lines: "auto",
    dots: "10px 10px",
    mesh: "14px 14px",
    wash: "auto",
  };

  return (
    <div
      aria-hidden="true"
      className="h-full min-h-[88px] w-full rounded-sm border border-white/10"
      style={{
        backgroundColor: "rgba(255,255,255,0.03)",
        backgroundImage: patterns[kind],
        backgroundSize: sizes[kind],
      }}
    />
  );
}

function AssetTypeBadge({ type }: { type: MoodAsset["type"] }) {
  const label = type === "model" ? "3D" : type === "video" ? "Video" : "Image";
  return (
    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/70">
      {label}
    </span>
  );
}

function AssetCard({ asset, fallBackHex }: { asset: MoodAsset; fallBackHex: string }) {
  const src = asset.src ? assetPath(`/${asset.src.replace(/^\//, "")}`) : undefined;
  const poster = asset.poster
    ? assetPath(`/${asset.poster.replace(/^\//, "")}`)
    : undefined;

  return (
    <figure className="group flex flex-col overflow-hidden rounded-sm border border-white/10 bg-white/[0.03]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0c0c0c]">
        {src && asset.type === "video" ? (
          <video
            className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            autoPlay
          />
        ) : src ? (
          <img
            src={src}
            alt={asset.label}
            className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-start justify-end p-4"
            style={{
              background: `linear-gradient(160deg, ${fallBackHex}55, #0a0a0a 70%)`,
            }}
          >
            <AssetTypeBadge type={asset.type} />
            <p className="mt-2 font-display text-xl font-semibold text-white/90">{asset.label}</p>
          </div>
        )}
        <div className="pointer-events-none absolute left-2 top-2 rounded-sm border border-white/15 bg-black/45 px-2 py-1 backdrop-blur-sm">
          <AssetTypeBadge type={asset.type} />
        </div>
      </div>
      <figcaption className="space-y-1 border-t border-white/10 px-3 py-3">
        <p className="text-sm font-medium text-text">{asset.label}</p>
        <p className="text-xs leading-relaxed text-muted">{asset.note}</p>
      </figcaption>
    </figure>
  );
}

/**
 * Tabbed mood board — palette, type, separate assets and references.
 * Avoids full-screen UI screenshots in favor of discrete visual assets.
 */
export function MoodBoardSection({ productName, mood }: MoodBoardSectionProps) {
  const [tab, setTab] = useState<MoodTab>("palette");
  const textures = mood.textures ?? ["grain", "lines", "dots"];
  const lead = mood.colors[0]?.hex ?? "#111111";

  return (
    <section
      aria-labelledby="moodboard-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Atmosphere
          </p>
          <h2
            id="moodboard-heading"
            className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
          >
            Mood for {productName}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">{mood.note}</p>
        </div>
      </div>

      <div
        role="tablist"
        aria-label="Mood board sections"
        className="mb-6 flex flex-wrap gap-2 border-b border-border pb-3"
      >
        {TABS.map((item) => {
          const active = tab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              id={`mood-tab-${item.id}`}
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
        aria-labelledby={`mood-tab-${tab}`}
        className="relative overflow-hidden rounded-[1.25rem] border border-border bg-[#090909] p-4 md:p-6"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 top-6 select-none font-display text-[18vw] font-semibold leading-none text-white/[0.03] md:text-[9rem]"
        >
          {productName.slice(0, 6)}
        </span>

        {tab === "palette" && (
          <div className="relative grid grid-cols-12 gap-3 md:gap-4">
            <div className="col-span-12 grid grid-cols-5 gap-2 sm:col-span-7 md:gap-3">
              {mood.colors.map((swatch, i) => (
                <div
                  key={swatch.hex}
                  className={`group relative overflow-hidden rounded-sm border border-white/10 ${
                    i === 0
                      ? "col-span-3 row-span-2 min-h-[140px] md:min-h-[200px]"
                      : "min-h-[64px] md:min-h-[88px]"
                  }`}
                  style={{ backgroundColor: swatch.hex }}
                >
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-2 md:p-3">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-white/90 md:text-[10px]">
                      {swatch.label}
                    </p>
                    <p className="mt-0.5 font-mono text-[9px] text-white/60">{swatch.hex}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-span-12 flex flex-wrap content-start items-start gap-2 sm:col-span-5 md:gap-3">
              {mood.words.map((word, index) => (
                <span
                  key={word}
                  className={`inline-flex border border-white/15 bg-white/[0.04] px-3 py-2 font-display text-lg font-semibold tracking-tight text-text md:px-4 md:text-xl ${
                    index % 3 === 1 ? "-rotate-2" : index % 3 === 2 ? "rotate-1" : "rotate-0"
                  }`}
                >
                  {word}
                </span>
              ))}
              <div className="mt-2 grid w-full grid-cols-3 gap-2">
                {textures.slice(0, 3).map((kind) => (
                  <TexturePanel key={kind} kind={kind} />
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "type" && (
          <div className="relative grid gap-4 md:grid-cols-3">
            {mood.fonts.map((font) => (
              <article
                key={font.name}
                className="flex flex-col justify-between rounded-sm border border-white/10 bg-white/[0.03] p-4 md:min-h-[220px] md:p-5"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    {font.role}
                  </p>
                  <h3 className="mt-2 text-base font-medium text-text">{font.name}</h3>
                </div>
                <p
                  className="mt-8 text-[1.65rem] leading-tight tracking-tight text-text md:text-[2rem]"
                  style={{ fontFamily: font.stack }}
                >
                  {font.sample}
                </p>
                <p className="mt-6 truncate font-mono text-[9px] uppercase tracking-wider text-white/35">
                  {font.stack.split(",")[0].replace(/"/g, "")}
                </p>
              </article>
            ))}
          </div>
        )}

        {tab === "assets" && (
          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mood.assets.map((asset) => (
              <AssetCard key={`${asset.type}-${asset.label}`} asset={asset} fallBackHex={lead} />
            ))}
          </div>
        )}

        {tab === "references" && (
          <ul className="relative grid gap-3 md:grid-cols-3">
            {mood.references.map((ref) => (
              <li
                key={ref.name}
                className="rounded-sm border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/25"
              >
                {ref.url ? (
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                  >
                    <p className="text-base font-medium text-text group-hover:text-accent">
                      {ref.name}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted">{ref.note}</p>
                    <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                      Open reference ↗
                    </p>
                  </a>
                ) : (
                  <div>
                    <p className="text-base font-medium text-text">{ref.name}</p>
                    <p className="mt-2 text-xs leading-relaxed text-muted">{ref.note}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
