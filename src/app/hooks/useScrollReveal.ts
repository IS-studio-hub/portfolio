import { useEffect, useRef, type RefObject } from "react";

export function useScrollReveal<T extends HTMLElement>(): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let done = false;
    let observer: IntersectionObserver | null = null;

    const cleanup = () => {
      observer?.disconnect();
      observer = null;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onScroll);
    };

    const show = () => {
      if (done) return;
      done = true;
      el.classList.add("is-revealed");
      cleanup();
    };

    const inView = () => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight * 1.2 && rect.bottom > -100;
    };

    const onScroll = () => {
      if (inView()) show();
    };

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) show();
      },
      { threshold: 0, rootMargin: "25% 0px 25% 0px" },
    );

    observer.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("hashchange", onScroll);

    requestAnimationFrame(onScroll);
    const t1 = window.setTimeout(onScroll, 80);
    const t2 = window.setTimeout(onScroll, 400);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      cleanup();
    };
  }, []);

  return ref;
}
