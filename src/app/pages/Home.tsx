import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "../components/Nav";
import { Seo } from "../components/Seo";
import { SITE, corporateProjects, startupProjects, websiteProjects, projects, type Project } from "../data/projects";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { assetPath } from "../lib/assetPath";

const SECTION_NAV = [
  { id: "about-intro", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "websites", label: "Websites" },
  { id: "startups", label: "Startups" },
  { id: "corporates", label: "Corporates" },
] as const;

function StatBlock({ value, label }: { value: number | string; label: string }) {
  return (
    <div className="min-w-0 shrink">
      <p className="font-display text-xl font-semibold leading-none text-text md:text-2xl">{value}</p>
      <p className="mt-0.5 font-mono text-[9px] uppercase tracking-widest text-muted sm:text-[10px]">
        {label}
      </p>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transitionDelay: `${Math.min(index, 8) * 0.05}s` }}
    >
      <Link
        to={`/project/${project.slug}`}
        className="group grid grid-cols-1 items-start gap-5 sm:grid-cols-[minmax(140px,220px)_minmax(0,1fr)] sm:gap-8"
        data-cursor="View"
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface">
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
        </div>

        <div className="min-w-0 pt-0.5">
          <div className="flex items-start gap-2">
            <h3 className="font-sans text-lg font-semibold leading-snug text-text transition-colors group-hover:text-accent md:text-xl">
              {project.shortTitle}
            </h3>
            <span
              aria-hidden="true"
              className="mt-1 shrink-0 text-sm text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            >
              ↗
            </span>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-[15px]">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
              {project.year}
            </span>
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] uppercase tracking-widest text-muted/80"
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

function ProjectGroup({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: Project[];
}) {
  if (items.length === 0) return null;

  return (
    <div id={id} className="scroll-mt-28">
      <h3 className="mb-8 font-mono text-xs uppercase tracking-widest text-accent">{title}</h3>
      <div className="space-y-10 md:space-y-12">
        {items.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}

type ExperienceItem = {
  dates: string;
  title: string;
  company: string;
  url?: string;
  previousTitles?: string[];
  description: string;
  tags: string[];
};

const EXPERIENCE: ExperienceItem[] = [
  {
    dates: "2024 — Present",
    title: "Senior Consultant, UX Lead",
    company: "CGI",
    url: "https://www.cgi.com",
    description:
      "Lead UX and product design engagements by aligning user needs, business objectives and delivery constraints. Plan and synthesize research, define journeys and product flows, and develop prototypes that clarify product direction. Guide stakeholder collaboration, accessibility decisions and design-to-development handoff across remote teams.",
    tags: ["UX Leadership", "Product Design", "Research", "Prototyping", "Accessibility"],
  },
  {
    dates: "2023 — Present",
    title: "Product and AI Interfaces",
    company: "IS Studio",
    url: "https://is-studio-hub.github.io/portfolio/",
    description:
      "Lead end-to-end design and development of websites, landing pages, applications and AI tools for business clients. Translate business goals into product direction, user flows, prototypes, interface systems and functional digital products across UX research, web design, development and content strategy.",
    tags: ["Product Design", "AI Interfaces", "Web Design", "Development", "Design Systems"],
  },
  {
    dates: "2022 — 2024",
    title: "Product and AI Interface Designer",
    company: "Canadian Tire Corporation",
    url: "https://www.canadiantire.ca",
    description:
      "Designed product and AI interfaces for retail experiences, translating customer and business needs into clear product flows and scalable UI. Led UX research, product design, prototyping and testing from discovery through iteration while partnering with product, engineering and business teams.",
    tags: ["AI Interfaces", "Retail UX", "Product Design", "Prototyping", "Research"],
  },
  {
    dates: "2020 — 2022",
    title: "User Experience Lead",
    company: "CSC Generation",
    url: "https://www.cscgeneration.com",
    description:
      "Led UX strategy, user experience testing and product development for e-commerce brands. Created a master design system and brand-specific systems for One Kings Lane, Sur La Table and Z Gallerie, enabling consistent work across design and development teams.",
    tags: ["Design Systems", "E-commerce", "UX Leadership", "Components", "Documentation"],
  },
  {
    dates: "2017 — 2020",
    title: "AI/AR Design Lead & UX Researcher",
    company: "Walmart",
    url: "https://www.walmart.com",
    description:
      "Contributed to AI/AR dress-up features for Walmart Tech’s fashion customers as a B2B2C initiative. Took the experience from in-depth research through UX/UI design, collaborating with content, accessibility, development and product teams on virtual model-switching and dress-up interactions.",
    tags: ["AI/AR", "Fashion UX", "Research", "Prototyping", "E-commerce"],
  },
];

function SectionNav({ activeId }: { activeId: string }) {
  return (
    <nav aria-label="Page sections" className="mt-12 hidden lg:block">
      <ul className="space-y-4">
        {SECTION_NAV.map((item) => {
          const active = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`group flex items-center gap-3 font-mono text-xs uppercase tracking-widest transition-colors ${
                  active ? "text-text" : "text-muted hover:text-text"
                }`}
                data-cursor="Jump"
                onClick={(event) => {
                  event.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  window.history.replaceState(null, "", `#${item.id}`);
                }}
              >
                <span
                  className={`h-px transition-all duration-300 ${
                    active ? "w-12 bg-text" : "w-6 bg-muted group-hover:w-12 group-hover:bg-text"
                  }`}
                  aria-hidden="true"
                />
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function ExperienceList() {
  return (
    <div id="experience" className="scroll-mt-28">
      <h3 className="mb-8 font-mono text-xs uppercase tracking-widest text-accent">Experience</h3>
      <ol className="space-y-4">
        {EXPERIENCE.map((item) => (
          <li key={`${item.company}-${item.dates}`}>
            <div className="group relative grid gap-2 rounded-xl p-4 transition-colors hover:bg-surface sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-6 md:p-5 lg:grid-cols-[160px_minmax(0,1fr)]">
              <p className="pt-1 font-mono text-[11px] uppercase tracking-widest text-muted">
                {item.dates}
              </p>
              <div className="min-w-0">
                <h4 className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-base font-semibold text-text transition-colors group-hover:text-accent md:text-lg">
                  <span>
                    {item.title} ·{" "}
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 transition-colors hover:text-accent"
                        data-cursor="Visit"
                        onClick={(event) => event.stopPropagation()}
                      >
                        {item.company}
                        <span aria-hidden="true" className="text-sm">
                          ↗
                        </span>
                      </a>
                    ) : (
                      item.company
                    )}
                  </span>
                </h4>
                {item.previousTitles && item.previousTitles.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {item.previousTitles.map((title) => (
                      <li key={title} className="text-sm text-muted">
                        {title}
                      </li>
                    ))}
                  </ul>
                )}
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-[15px]">
                  {item.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-bg/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted transition-colors group-hover:border-accent/30 group-hover:text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Home() {
  const aboutRef = useScrollReveal<HTMLElement>();
  const contactRef = useScrollReveal<HTMLElement>();
  const [activeSection, setActiveSection] = useState<string>(SECTION_NAV[0].id);

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
    if (hash === "work" || hash === "about" || SECTION_NAV.some((item) => item.id === hash)) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const ids = SECTION_NAV.map((item) => item.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
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
        {/* Work — sticky intro left, project list right */}
        <section id="work" className="page-gutter pb-24 pt-28 md:pb-32 md:pt-32">
          <div className="grid w-full gap-14 lg:grid-cols-[minmax(280px,0.95fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16 xl:gap-20">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="mb-8 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  Available for new projects
                </span>
              </div>

              <h1 className="max-w-xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-text md:text-5xl xl:text-6xl">
                Itamar <span className="text-accent">Shamrik</span>
              </h1>

              <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
                I design and build accessible, pixel-perfect experiences for the web.
              </p>

              <SectionNav activeId={activeSection} />

              <div className="mt-12 flex flex-nowrap items-start gap-4 sm:gap-5">
                <StatBlock value={websiteProjects.length} label="Websites" />
                <StatBlock value={startupProjects.length} label="Startups" />
                <StatBlock value={corporateProjects.length} label="Corporates" />
                <StatBlock value={SITE.stats.years} label="Years" />
                <StatBlock value={SITE.stats.clients} label="Clients" />
              </div>
            </aside>

            <div className="min-w-0 space-y-16 md:space-y-20">
              <div
                id="about-intro"
                className="max-w-2xl scroll-mt-28 space-y-5 text-base leading-relaxed text-muted md:text-[17px]"
              >
                <p>
                  Hi there! I’m Itamar Shamrik, but most people call me IS, and I like building
                  things. I’m an interface designer and developer with a background in product
                  design, UX, AI interfaces and design systems. I like taking an idea, figuring out
                  how it should work, and turning it into something clear, useful and real. I care a
                  lot about the small details, but also about the bigger picture, like the business
                  goal, the user experience and how the product will actually be built.
                </p>
                <p>
                  Currently, I’m a Senior Consultant and UX Lead at CGI, where I work across
                  research, product flows, prototypes, accessibility and design delivery. I work
                  closely with developers, product teams and stakeholders, and I like being involved
                  from the first idea all the way to launch.
                </p>
                <p>
                  Before that, I worked on product and AI interfaces at Canadian Tire, led UX work
                  across ecommerce brands like One Kings Lane, Sur La Table and Z Gallerie, and
                  worked on AI and AR shopping experiences at Walmart. Most of the work I enjoy sits
                  somewhere between design and technology, where I can design the experience and also
                  understand how it becomes a real product.
                </p>
              </div>

              <ExperienceList />

              <ProjectGroup id="websites" title="Website" items={websiteProjects} />
              <ProjectGroup id="startups" title="Startups" items={startupProjects} />
              <ProjectGroup id="corporates" title="Corporates" items={corporateProjects} />
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
                  src={assetPath("/about.jpg")}
                  alt={SITE.name}
                  className="aspect-[4/5] w-full object-cover object-top grayscale transition-all duration-700 hover:grayscale-0"
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
                    "Frontend Developer",
                    "Vibe Coder",
                    "Strategy",
                    "Leadership",
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
