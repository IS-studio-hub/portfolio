import { useEffect, useRef, useState } from "react";

const LABELS: Record<string, string> = {
  a: "View",
  button: "Explore",
  "data-cursor": "",
};

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor]");
      const ringEl = ringRef.current;
      const labelEl = labelRef.current;
      if (!ringEl || !labelEl) return;

      if (interactive) {
        ringEl.style.width = "64px";
        ringEl.style.height = "64px";
        const cursorLabel = interactive.getAttribute("data-cursor");
        const tag = interactive.tagName.toLowerCase();
        const label = cursorLabel || LABELS[tag] || "Explore";
        labelEl.textContent = label;
        labelEl.style.opacity = label ? "1" : "0";
      } else {
        ringEl.style.width = "28px";
        ringEl.style.height = "28px";
        labelEl.style.opacity = "0";
      }
    };

    const tick = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.35;
      ring.current.y += (pos.current.y - ring.current.y) * 0.35;
      dot.current.x += (pos.current.x - dot.current.x) * 0.12;
      dot.current.y += (pos.current.y - dot.current.y) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dot.current.x}px, ${dot.current.y}px) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.body.addEventListener("mouseleave", onLeave);
    document.body.addEventListener("mouseenter", onEnter);
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.body.removeEventListener("mouseleave", onLeave);
      document.body.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf.current);
    };
  }, [visible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <div
      className="custom-cursor pointer-events-none fixed inset-0 z-[9999]"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-3 w-3 rounded-full bg-accent/30 blur-sm will-change-transform"
      />
      <div
        ref={ringRef}
        className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full border border-accent will-change-transform transition-[width,height] duration-300"
      >
        <span
          ref={labelRef}
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-widest text-accent opacity-0 transition-opacity"
        />
      </div>
    </div>
  );
}
