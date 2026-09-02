import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SITE } from "../data/projects";

interface NavProps {
  variant?: "home" | "project";
}

export function Nav({ variant = "home" }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`animate-nav-slide fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="page-gutter flex items-center justify-between py-5">
        <Link
          to="/"
          className="font-display text-lg font-semibold tracking-tight text-text md:text-xl"
          data-cursor="Home"
        >
          {variant === "project" ? (
            <span className="flex items-center gap-2">
              <span className="text-muted">←</span> {SITE.name}
            </span>
          ) : (
            SITE.name
          )}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {variant === "home" ? (
            <>
              <button
                type="button"
                onClick={() => scrollTo("work")}
                className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-text"
                data-cursor="Work"
              >
                Work
              </button>
              <button
                type="button"
                onClick={() => scrollTo("about")}
                className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-text"
                data-cursor="About"
              >
                About
              </button>
            </>
          ) : (
            <>
              <Link
                to="/#work"
                className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-text"
                data-cursor="Work"
              >
                Work
              </Link>
              <Link
                to="/#about"
                className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-text"
                data-cursor="About"
              >
                About
              </Link>
            </>
          )}
        </nav>

        <a
          href={`mailto:${SITE.email}`}
          className="rounded-full bg-accent px-4 py-2 font-mono text-xs font-medium uppercase tracking-wider text-black transition-transform hover:scale-105 md:px-5"
          data-cursor="Say hi"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
