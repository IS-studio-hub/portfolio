import { lazy, Suspense, useMemo, type MouseEvent } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Nav } from "../components/Nav";
import { Seo } from "../components/Seo";
import { SITE, getAdjacentProjects, getProject } from "../data/projects";
import type { ProjectMedia } from "../data/projects";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { assetPath } from "../lib/assetPath";

const ProjectHero3D = lazy(() =>
  import("../components/ProjectHero3D").then((m) => ({ default: m.ProjectHero3D })),
);

function LiveSiteButton({ href, label = "View live site" }: { href: string; label?: string }) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) return;
    event.preventDefault();
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-black transition-transform hover:scale-105"
      data-cursor="Live"
    >
      {label}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function MediaBlock({ item, className }: { item: ProjectMedia; className?: string }) {
  if (item.type === "video") {
    return (
      <video
        src={item.src}
        poster={item.poster}
        className={className}
        controls
        playsInline
        preload="metadata"
      />
    );
  }

  return <img src={item.src} alt={item.caption} className={className} />;
}

function BulletList({ items, muted = false }: { items: string[]; muted?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-start gap-3 text-base ${muted ? "text-muted" : "text-text"}`}
        >
          <span className="mt-1 text-accent">+</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{label}</p>
      <p className="mt-1 text-sm text-text">{value}</p>
    </div>
  );
}

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;
  const { prev, next } = slug ? getAdjacentProjects(slug) : { prev: null, next: null };

  const contextRef = useScrollReveal<HTMLElement>();
  const researchRef = useScrollReveal<HTMLElement>();
  const processRef = useScrollReveal<HTMLElement>();
  const solutionRef = useScrollReveal<HTMLElement>();
  const outcomesRef = useScrollReveal<HTMLElement>();

  const projectPath = project ? `/project/${project.slug}` : "/";
  const projectImage = project
    ? assetPath(`/projects/${project.slug}/card.png`)
    : "/og-image.png";
  const jsonLd = useMemo(() => {
    if (!project) return undefined;
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      headline: project.subtitle,
      description: project.description,
      url: `${SITE.url}${projectPath}`,
      image: `${SITE.url}${projectImage}`,
      dateCreated: project.year,
      author: {
        "@type": "Person",
        name: SITE.name,
        jobTitle: project.role,
      },
      about: project.tags,
      keywords: project.tags.join(", "),
      inLanguage: "en-CA",
      isPartOf: {
        "@type": "WebSite",
        name: `${SITE.name} Portfolio`,
        url: SITE.url,
      },
    };
  }, [project, projectPath, projectImage]);

  if (slug === "obs") {
    return <Navigate to="/project/CHaPPie" replace />;
  }

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Seo
        title={project.title}
        description={project.description}
        path={projectPath}
        image={projectImage}
        type="article"
        jsonLd={jsonLd}
      />
      <Nav variant="project" />

      <main>
        <article>
        {/* Hero */}
        <section className="relative border-b border-border">
          <div className="page-gutter grid w-full items-center gap-8 pb-12 pt-32 md:pb-16 md:pt-36 lg:grid-cols-[1fr_1.1fr] lg:gap-4">
            <div className="flex flex-col justify-end">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                {project.role}, {project.year}
              </p>
              {project.narrative ? (
                <>
                  <p className="mt-3 font-mono text-sm uppercase tracking-widest text-muted">
                    {project.shortTitle}
                  </p>
                  <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-text md:text-5xl lg:text-6xl">
                    {project.title}
                  </h1>
                </>
              ) : (
                <h1 className="mt-3 font-display text-5xl font-semibold leading-none text-text md:text-7xl lg:text-8xl">
                  {project.shortTitle}
                </h1>
              )}
              <p className="mt-4 max-w-2xl text-lg text-text/80 md:text-xl">{project.subtitle}</p>
              <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-accent">
                {project.impact}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-text/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.liveUrl && (
                <LiveSiteButton
                  href={project.liveUrl}
                  label={`View ${project.title} live`}
                />
              )}
            </div>

            <div className="relative h-[48vh] min-h-[340px] lg:h-[64vh] lg:min-h-[460px]">
              <Suspense
                fallback={
                  <div className="flex h-full items-center justify-center font-mono text-xs uppercase tracking-widest text-muted">
                    Loading 3D preview…
                  </div>
                }
              >
                <ProjectHero3D
                  {...(project.slug === "gigz"
                    ? {
                        modelPath: assetPath("/models/violet-bloom.glb"),
                        glowColor: "rgba(255,138,101,0.1)",
                        scale: 0.92,
                      }
                    : project.slug === "weebo"
                      ? {
                          modelPath: assetPath("/models/sleek-desk.glb"),
                          glowColor: "rgba(129,140,248,0.12)",
                          scale: 0.9,
                        }
                      : project.slug === "csc"
                        ? {
                            modelPath: assetPath("/models/sleek-desk-all-in-one.glb"),
                            glowColor: "rgba(196,165,116,0.14)",
                            scale: 0.9,
                          }
                        : project.slug === "slt"
                          ? {
                              modelPath: assetPath("/models/sleek-desk-slt.glb"),
                              glowColor: "rgba(196,90,60,0.14)",
                              scale: 0.9,
                            }
                          : project.slug === "zg"
                            ? {
                                modelPath: assetPath("/models/sleek-desk-zg.glb"),
                                glowColor: "rgba(167,139,250,0.14)",
                                scale: 0.9,
                              }
                            : project.slug === "ctc"
                              ? {
                                  modelPath: assetPath("/models/sleek-desk-ctc.glb"),
                                  glowColor: "rgba(220,38,38,0.14)",
                                  scale: 0.9,
                                }
                              : project.slug === "sportchek"
                                ? {
                                    modelPath: assetPath("/models/sleek-desk-sportchek.glb"),
                                    glowColor: "rgba(225,29,46,0.14)",
                                    scale: 0.9,
                                  }
                                : project.slug === "partycity"
                                  ? {
                                      modelPath: assetPath("/models/sleek-desk-partycity.glb"),
                                      glowColor: "rgba(124,58,237,0.14)",
                                      scale: 0.9,
                                    }
                                  : project.slug === "marks"
                                    ? {
                                        modelPath: assetPath("/models/sleek-desk-marks.glb"),
                                        glowColor: "rgba(251,146,60,0.14)",
                                        scale: 0.9,
                                      }
                                    : project.slug === "anova"
                                      ? {
                                          modelPath: assetPath("/models/violet-bloom-anova.glb"),
                                          glowColor: "rgba(249,115,22,0.14)",
                                          scale: 0.92,
                                        }
                                      : project.slug === "ymca"
                                        ? {
                                            modelPath: assetPath("/models/violet-bloom-ymca.glb"),
                                            glowColor: "rgba(200,16,46,0.14)",
                                            scale: 0.92,
                                          }
                                        : project.slug === "ppjv"
                                          ? {
                                              modelPath: assetPath("/models/sleek-desk-ppjv.glb"),
                                              glowColor: "rgba(37,99,235,0.14)",
                                              scale: 0.9,
                                            }
                                            : project.slug === "first-principles"
                                              ? {
                                                  modelPath: assetPath("/models/sleek-desk-saence.glb"),
                                                  glowColor: "rgba(37,99,235,0.14)",
                                                  scale: 0.9,
                                                }
                                            : project.slug === "ava"
                                              ? {
                                                  modelPath: assetPath("/models/sleek-desk-ava.glb"),
                                                  glowColor: "rgba(244,114,182,0.14)",
                                                  scale: 0.9,
                                                }
                                            : project.slug === "50nny"
                                              ? {
                                                  modelPath: assetPath("/models/sleek-desk-50nny.glb"),
                                                  glowColor: "rgba(251,191,36,0.14)",
                                                  scale: 0.9,
                                                }
                                            : project.slug === "westjet"
                                            ? {
                                                modelPath: assetPath("/models/violet-bloom-westjet.glb"),
                                                glowColor: "rgba(14,165,168,0.14)",
                                                scale: 0.92,
                                              }
                                            : project.slug === "polard"
                                              ? {
                                                  modelPath: assetPath("/models/sleek-desk-polard.glb"),
                                                  glowColor: "rgba(124,58,237,0.14)",
                                                  scale: 0.86,
                                                  secondaryModelPath: assetPath("/models/violet-bloom-polard.glb"),
                                                  secondaryScale: 0.28,
                                                  secondaryPosition: [0.72, -0.22, 0.75] as [
                                                    number,
                                                    number,
                                                    number,
                                                  ],
                                                }
                                              : {})}
                />
              </Suspense>
            </div>
          </div>
        </section>

        {/* Meta strip */}
        <section className="page-gutter border-b border-border py-8">
          <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-4">
            <MetaItem label="Role" value={project.role} />
            <MetaItem label="Client" value={project.client} />
            <MetaItem label="Timeline" value={project.timeline} />
            <MetaItem label="Team" value={project.team} />
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
              >
                {tool}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:border-accent hover:text-accent"
                data-cursor="Live"
              >
                Live site ↗
              </a>
            )}
            {project.figmaUrl && (
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:border-accent hover:text-accent"
                data-cursor="Figma"
              >
                Open in Figma ↗
              </a>
            )}
            {project.secondaryFigmaUrl && (
              <a
                href={project.secondaryFigmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:border-accent hover:text-accent"
                data-cursor="Figma"
              >
                {project.secondaryFigmaLabel} ↗
              </a>
            )}
          </div>
        </section>

        {/* Impact metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="page-gutter border-b border-border py-12">
            <div className="grid gap-8 md:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="font-display text-3xl font-semibold text-text md:text-4xl">
                    {metric.value}
                  </p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Context + Overview + Challenge */}
        <section ref={contextRef} className="page-gutter reveal py-16 md:py-24">
          <div className="w-full">
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-accent">Context</p>
                <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                  {project.context}
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-accent">Overview</p>
                <p className="mt-4 text-lg leading-relaxed text-text md:text-xl">
                  {project.overview}
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted">Challenge</p>
                <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                  {project.challenge}
                </p>
              </div>
            </div>

            {project.gallery[0] && (
              <div className="mt-16 overflow-hidden rounded-2xl">
                <MediaBlock item={project.gallery[0]} className="w-full object-cover" />
                <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted">
                  {project.gallery[0].caption}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Goals */}
        <section className="page-gutter border-t border-border py-16 md:py-20">
          <div className="w-full">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              {project.narrative ? "Scope" : "Goals"}
            </p>
            <div className="mt-8 max-w-3xl">
              <BulletList items={project.goals} />
            </div>
          </div>
        </section>

        {/* Research & insights */}
        <section ref={researchRef} className="page-gutter reveal border-t border-border py-16 md:py-24">
          <div className="w-full">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-accent">Research</p>
                <div className="mt-8 space-y-8">
                  {project.research.map((item) => (
                    <div key={item.title}>
                      <h3 className="font-display text-xl font-semibold text-text">{item.title}</h3>
                      <p className="mt-2 text-base leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-accent">Key insights</p>
                <div className="mt-8">
                  <BulletList items={project.insights} muted />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section ref={processRef} className="page-gutter reveal border-t border-border py-16 md:py-24">
          <div className="w-full">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">Process</p>
            <div className="mt-10 space-y-12">
              {project.process.map((step) => (
                <div
                  key={step.phase}
                  className="grid gap-4 border-b border-border pb-12 last:border-0 md:grid-cols-[80px_1fr_2fr] md:gap-8"
                >
                  <p className="font-mono text-sm text-accent">{step.phase}</p>
                  <h3 className="font-display text-xl font-semibold text-text md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section ref={solutionRef} className="page-gutter reveal border-t border-border py-16 md:py-24">
          <div className="w-full">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              {project.slug === "gom"
                ? "Four connected experiences"
                : project.narrative
                  ? "System in practice"
                  : "Solution & key decisions"}
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {project.solutions.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold text-text">{item.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Long-form narrative (GoM and similar) */}
        {project.narrative?.map((section) => (
          <section
            key={section.title}
            className="page-gutter border-t border-border py-16 md:py-24"
          >
            <div className="w-full">
              {section.eyebrow && (
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  {section.eyebrow}
                </p>
              )}
              <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold text-text md:text-4xl">
                {section.title}
              </h2>
              <div className="mt-6 max-w-3xl space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="text-base leading-relaxed text-muted md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.bullets && section.bullets.length > 0 && (
                <div className="mt-8 max-w-3xl">
                  <BulletList items={section.bullets} muted />
                </div>
              )}
              {section.image && (
                <figure className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface">
                  <img
                    src={section.image}
                    alt={section.caption || section.title}
                    className="w-full object-cover"
                  />
                  {section.caption && (
                    <figcaption className="border-t border-border px-6 py-4 font-mono text-xs uppercase tracking-widest text-muted">
                      {section.caption}
                    </figcaption>
                  )}
                </figure>
              )}
              {section.cards && section.cards.length > 0 && (
                <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                  {section.cards.map((card) => (
                    <div
                      key={card.title}
                      className="overflow-hidden rounded-2xl border border-border bg-surface"
                    >
                      {card.image && (
                        <img
                          src={card.image}
                          alt={card.title}
                          className="aspect-[16/10] w-full object-cover object-top"
                        />
                      )}
                      <div className="p-6">
                        <h3 className="font-display text-xl font-semibold text-text">
                          {card.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}

        {/* Gallery */}
        {project.gallery.length > 1 && (
          <section className="page-gutter py-16 md:py-24">
            <div className="w-full">
              <p className="mb-10 font-mono text-xs uppercase tracking-widest text-accent">
                Gallery
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {project.gallery.slice(1).map((item) => (
                  <figure
                    key={item.src}
                    className={`group relative overflow-hidden rounded-2xl ${
                      item.type === "video" ? "md:col-span-2" : ""
                    }`}
                  >
                    <MediaBlock
                      item={item}
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] ${
                        item.type === "video" ? "aspect-video bg-surface" : "aspect-[4/3]"
                      }`}
                    />
                    <figcaption className="absolute bottom-0 left-0 right-0 translate-y-full bg-bg/90 px-4 py-3 font-mono text-xs uppercase tracking-wider text-muted transition-transform duration-300 group-hover:translate-y-0">
                      {item.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Deliverables & Outcomes */}
        <section ref={outcomesRef} className="page-gutter reveal border-t border-border py-16 md:py-24">
          <div className="w-full">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  Deliverables
                </p>
                <div className="mt-6">
                  <BulletList items={project.deliverables} />
                </div>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-accent">Outcomes</p>
                <div className="mt-6">
                  <BulletList items={project.outcomes} muted />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learnings */}
        <section className="page-gutter border-t border-border py-16 md:py-20">
          <div className="w-full max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">Learnings</p>
            <div className="mt-8">
              <BulletList items={project.learnings} muted />
            </div>
            {project.closing && (
              <p className="mt-12 text-lg leading-relaxed text-text md:text-xl">{project.closing}</p>
            )}
          </div>
        </section>
        </article>

        {/* Prev / Next */}
        <nav aria-label="Adjacent case studies" className="page-gutter border-t border-border py-12">
          <div className="grid w-full gap-6 md:grid-cols-2">
            {prev ? (
              <Link
                to={`/project/${prev.slug}`}
                className="group rounded-2xl border border-border p-6 transition-colors hover:border-white/20"
                data-cursor="View"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-muted">Previous</p>
                <p className="mt-2 font-display text-xl font-semibold text-text group-hover:text-accent">
                  {prev.shortTitle}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                to={`/project/${next.slug}`}
                className="group rounded-2xl border border-border p-6 text-right transition-colors hover:border-white/20 md:col-start-2"
                data-cursor="View"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-muted">Next</p>
                <p className="mt-2 font-display text-xl font-semibold text-text group-hover:text-accent">
                  {next.shortTitle}
                </p>
              </Link>
            ) : null}
          </div>
        </nav>
      </main>
    </>
  );
}
