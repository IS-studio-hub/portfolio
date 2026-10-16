import { useCallback, useEffect, useState } from "react";

export type LightboxItem = {
  src: string;
  title: string;
  note?: string;
  /** Span the full row (for very wide images). */
  wide?: boolean;
  /** Videos play inline in the grid and are skipped by the lightbox. */
  type?: "image" | "video";
  poster?: string;
};

/**
 * Gallery that keeps each image's original ratio and opens a full-screen
 * lightbox on click (click image to zoom, arrows to navigate, Esc to close).
 */
export function ImageLightboxGallery({
  items,
  label,
  crop = false,
  columns = 3,
}: {
  items: LightboxItem[];
  label: string;
  /** Show uniform, top-aligned thumbnails (for very tall full-page screens). The lightbox still shows the full image. */
  crop?: boolean;
  /** Images per row on desktop: 3 (default) or 5. */
  columns?: 3 | 5;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const images = items.filter((item) => item.type !== "video");
  const [zoomed, setZoomed] = useState(false);

  const close = useCallback(() => {
    setOpen(null);
    setZoomed(false);
  }, []);
  const step = useCallback(
    (dir: number) => {
      setZoomed(false);
      setOpen((i) => (i === null ? i : (i + dir + images.length) % images.length));
    },
    [images.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const current = open === null ? null : images[open];

  return (
    <>
      <div
        className={`grid items-start gap-4 md:gap-6 ${
          columns === 5 ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-5" : "md:grid-cols-3"
        }`}
      >
        {items.map((item) => (
          <figure key={item.src} className={`m-0 ${item.wide ? "col-span-full" : ""}`}>
            {item.type === "video" ? (
              <video
                src={item.src}
                poster={item.poster}
                controls
                playsInline
                preload="metadata"
                className="block h-auto w-full overflow-hidden rounded-2xl border border-border bg-surface"
                aria-label={item.title}
              />
            ) : (
            <button
              type="button"
              onClick={() => setOpen(images.indexOf(item))}
              className="block w-full overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent"
              aria-label={`Open ${item.title} ${label}`}
              data-cursor="View"
            >
              <img
                src={item.src}
                alt={`${item.title} ${label}`}
                loading="lazy"
                className={crop ? "block aspect-[4/5] w-full object-cover object-top" : "block h-auto w-full"}
              />
            </button>
            )}
            <figcaption className="mt-2 flex items-baseline justify-between gap-3">
              <span className="text-sm text-text">{item.title}</span>
              {item.note && (
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  {item.note}
                </span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>

      {current && open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} ${label}`}
          className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="flex items-center justify-between gap-4 px-4 py-3 md:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="min-w-0">
              <p className="truncate text-sm text-white">{current.title}</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                {open + 1} / {images.length} · {zoomed ? "Click image to fit" : "Click image to zoom"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    className="rounded-full border border-white/20 px-3 py-1.5 text-sm text-white hover:border-white/60"
                    aria-label="Previous"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    className="rounded-full border border-white/20 px-3 py-1.5 text-sm text-white hover:border-white/60"
                    aria-label="Next"
                  >
                    →
                  </button>
                </>
              )}
              <button
                type="button"
                onClick={close}
                className="rounded-full border border-white/20 px-3 py-1.5 text-sm text-white hover:border-white/60"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>
          <div
            className={`flex-1 overflow-auto px-4 pb-6 md:px-6 ${zoomed ? "" : "flex items-center justify-center"}`}
          >
            <img
              src={current.src}
              alt={`${current.title} ${label}`}
              onClick={(e) => {
                e.stopPropagation();
                setZoomed((z) => !z);
              }}
              className={
                zoomed
                  ? "block h-auto max-w-none cursor-zoom-out rounded-lg"
                  : "block max-h-full max-w-full cursor-zoom-in rounded-lg object-contain"
              }
            />
          </div>
        </div>
      )}
    </>
  );
}
