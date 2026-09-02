import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "../components/Nav";
import { Seo } from "../components/Seo";
import { SITE, corporateProjects, startupProjects, projects, type Project } from "../data/projects";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { assetPath } from "../lib/assetPath";

const CYCLE_WORDS = ["interfaces", "experiences", "products", "systems"];

function HeroWordCycle() {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % CYCLE_WORDS.length);
      setKey((k) => k + 1);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="word-cycle text-accent">
      <span key={key} className="word-cycle-inner">
        {CYCLE_WORDS[index]}
      </span>
    </span>
  );
}

function StatBlock({ value, label, delay }: { value: number | string; label: string; delay: number }) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transitionDelay: `${delay}s` }}
    >
      <p className="font-display text-4xl font-semibold text-text md:text-5xl">{value}</p>
      <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted">{label}</p>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="reveal h-full min-h-0"
      style={{ transitionDelay: `${Math.min(index, 8) * 0.06}s` }}
    >
      <Link
        to={`/project/${project.slug}`}
        className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
        data-cursor="View"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-bg">
          <img
            src={assetPath(`/projects/${project.slug}/card.png`)}
            alt={project.title}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            onError={(event) => {
              const img = event.currentTarget;
              if (img.dataset.fallback === "1") return;
              img.dataset.fallback = "1";
              img.src = project.image;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
          <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-bg/50 backdrop-blur transition-transform duration-300 group-hover:rotate-45">
            <span className="text-lg">↗</span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-6 md:p-7">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">{project.year}</p>
            <h3 className="mt-1 font-display text-xl font-semibold text-text md:text-2xl">
              {project.shortTitle}
            </h3>
          </div>
          <p className="line-clamp-3 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted transition-colors"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLSpanElement).style.color = project.accent;
                  (e.currentTarget as HTMLSpanElement).style.borderColor = project.accent;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLSpanElement).style.color = "";
                  (e.currentTarget as HTMLSpanElement).style.borderColor = "";
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

export function Home() {
  const workRef = useScrollReveal<HTMLDivElement>();
  const aboutRef = useScrollReveal<HTMLElement>();
  const contactRef = useScrollReveal<HTMLElement>();
  const heroRef = useRef<HTMLElement>(null);

  const jsonLd = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: `${SITE.name} Portfolio`,
        url: SITE.url,
        description: SITE.seoDescription,
        inLanguage: "en-CA",
        author: {
          "@type": "Person",
          name: SITE.name,
          jobTitle: SITE.title,
          email: SITE.email,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Toronto",
            addressCountry: "CA",
          },
          url: SITE.url,
          sameAs: Object.values(SITE.social).filter(Boolean),
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Selected case studies",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${SITE.url}/project/${project.slug}`,
          name: project.title,
          description: project.description,
        })),
      },
    ],
    [],
  );

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "work" || hash === "about") {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Seo
        title={`${SITE.name} | ${SITE.title}`}
        description={SITE.seoDescription}
        path="/"
        image="/og-image.png"
        type="website"
        jsonLd={jsonLd}
      />
      <Nav variant="home" />

      <main>
        {/* Hero */}
        <section
          ref={heroRef}
          className="page-gutter relative flex min-h-screen flex-col justify-end pb-20 pt-32 md:pb-28"
        >
          <div className="w-full">
            <div className="mb-8 flex items-center gap-3 animate-fade-up">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Available for new projects
              </span>
            </div>

            <h1
              className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-text animate-fade-up md:text-7xl lg:text-8xl"
              style={{ animationDelay: "0.1s" }}
            >
              I design digital{" "}
              <HeroWordCycle />
              <br />
              that feel{" "}
              <span className="italic text-muted">invisible.</span>
            </h1>

            <p
              className="mt-8 max-w-xl text-base leading-relaxed text-muted animate-fade-up md:text-lg"
              style={{ animationDelay: "0.2s" }}
            >
              {SITE.title} based in {SITE.location}. I help teams ship products people actually
              want to use.
            </p>

            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4 md:max-w-2xl">
              <StatBlock value={corporateProjects.length} label="Corporates" delay={0.3} />
              <StatBlock value={startupProjects.length} label="Startups" delay={0.35} />
              <StatBlock value={SITE.stats.years} label="Years" delay={0.4} />
              <StatBlock value={SITE.stats.clients} label="Clients" delay={0.5} />
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="page-gutter py-24 md:py-32">
          <div className="w-full">
            <div ref={workRef} className="reveal mb-12 flex items-end justify-between gap-6 md:mb-16">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-accent">Selected work</p>
                <h2 className="mt-2 font-display text-4xl font-semibold text-text md:text-5xl">
                  Case studies
                </h2>
              </div>
              <p className="hidden max-w-xs text-right text-sm text-muted md:block">
                {corporateProjects.length} corporates · {startupProjects.length} startups
              </p>
            </div>

            <div className="space-y-16 md:space-y-20">
              <div>
                <h3 className="mb-8 font-display text-2xl font-semibold text-text md:mb-10 md:text-3xl">
                  Corporates
                </h3>
                <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8">
                  {corporateProjects.map((project, i) => (
                    <ProjectCard key={project.slug} project={project} index={i} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-8 font-display text-2xl font-semibold text-text md:mb-10 md:text-3xl">
                  Startups
                </h3>
                <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8">
                  {startupProjects.map((project, i) => (
                    <ProjectCard key={project.slug} project={project} index={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" ref={aboutRef} className="page-gutter reveal border-t border-border py-24 md:py-32">
          <div className="w-full">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">About</p>
            <div className="mt-10 flex flex-col gap-12 md:mt-12 md:flex-row md:items-start md:gap-16">
              <div className="relative shrink-0 overflow-hidden rounded-2xl md:w-72 lg:w-80">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&h=800&fit=crop&q=80"
                  alt={SITE.name}
                  className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>

              <div className="flex-1">
                <h2 className="font-display text-3xl font-semibold leading-snug text-text md:text-4xl lg:text-5xl">
                  Good design disappears.{" "}
                  <span className="animate-pulse-soft text-accent">invisible.</span>
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                  {SITE.bio}
                </p>

                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {[
                    "Product Design",
                    "Design Systems",
                    "UX Research",
                    "Prototyping",
                    "Workshop Facilitation",
                    "Design Ops",
                    "Accessibility",
                    "Figma",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="rounded-xl border border-border px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-muted transition-colors hover:border-accent/40 hover:text-text"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" ref={contactRef} className="page-gutter reveal py-24 md:py-32">
          <div className="w-full">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">Contact</p>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-tight text-text md:text-7xl lg:text-8xl">
              Let&apos;s build
              <br />
              something great.
            </h2>

            <a
              href={`mailto:${SITE.email}`}
              className="group mt-10 inline-flex items-center gap-4 font-display text-2xl text-accent transition-all hover:gap-6 md:text-4xl"
              data-cursor="Say hi"
            >
              {SITE.email}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>

            <div className="mt-12 flex flex-wrap gap-4">
              {Object.entries(SITE.social).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-muted transition-all hover:-translate-y-1 hover:border-accent hover:text-accent"
                  data-cursor="Explore"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="page-gutter border-t border-border py-8">
        <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {SITE.name}. Designed & built with care.
          </p>
          <p className="font-mono text-xs text-muted">{SITE.location}</p>
        </div>
      </footer>
    </>
  );
}
