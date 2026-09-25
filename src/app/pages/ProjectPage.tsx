import { useMemo, type MouseEvent } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { CompetitorsSection } from "../components/CompetitorsSection";
import { MoodBoardSection } from "../components/MoodBoardSection";
import { ResearchConclusionsSection } from "../components/ResearchConclusionsSection";
import { WireframesSection } from "../components/WireframesSection";
import { DesignSystemSection } from "../components/DesignSystemSection";
import { Nav } from "../components/Nav";
import { Seo } from "../components/Seo";
import { SITE, getAdjacentProjects, getProject } from "../data/projects";
import type { ProjectMedia } from "../data/projects";
import type { WireframesBoard } from "../data/wireframesData";
import type { DesignSystemBoard } from "../data/designSystemData";
import { assetPath } from "../lib/assetPath";

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

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{label}</p>
      <p className="mt-1 text-sm text-text">{value}</p>
    </div>
  );
}

function MediaGridCell({ item }: { item?: ProjectMedia }) {
  if (!item) {
    return (
      <div
        className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface"
        aria-hidden="true"
      />
    );
  }

  return (
    <figure className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface p-8 md:p-12">
      {item.type === "video" ? (
        <video
          src={item.src}
          poster={item.poster}
          className="max-h-[65%] max-w-[65%] rounded-lg object-contain"
          controls
          playsInline
          preload="metadata"
        />
      ) : (
        <img
          src={item.src}
          alt={item.caption}
          className="max-h-[65%] max-w-[65%] rounded-lg object-contain"
        />
      )}
    </figure>
  );
}

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;
  const { prev, next } = slug ? getAdjacentProjects(slug) : { prev: null, next: null };

  const projectPath = project ? `/project/${project.slug}` : "/";
  const projectImage = project
    ? assetPath(`/projects/${project.slug}/card.png`)
    : "/og-image.png";
  const heroMedia = useMemo(() => {
    if (!project) return null;

    const fromGrid = project.mediaGrid ?? [];
    const fromGallery = project.gallery ?? [];
    const pool = [...fromGrid, ...fromGallery];

    const video = pool.find((item) => item.type === "video");
    if (video) {
      return {
        type: "video" as const,
        src: video.src,
        poster: video.poster,
        alt: video.caption || project.title,
      };
    }

    const image = fromGrid.find((item) => item.type === "image")
      ?? fromGallery.find((item) => item.type === "image");
    if (image) {
      return {
        type: "image" as const,
        src: image.src,
        alt: image.caption || project.title,
      };
    }

    return null;
  }, [project]);

  const wireframeSources = useMemo(() => {
    if (!project) return [];
    const fromGrid =
      project.mediaGrid
        ?.filter((item) => item.type === "image")
        .slice(0, 3)
        .map((item) => ({ src: item.src, caption: item.caption })) ?? [];
    if (fromGrid.length >= 3) return fromGrid;
    const fromGallery = project.gallery
      .filter((item) => item.type === "image")
      .slice(0, 3)
      .map((item) => ({ src: item.src, caption: item.caption }));
    return fromGrid.length > 0 ? fromGrid : fromGallery;
  }, [project]);

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

            <div className="relative h-[48vh] min-h-[340px] overflow-hidden rounded-2xl border border-border bg-surface lg:h-[64vh] lg:min-h-[460px]">
              {heroMedia?.type === "video" ? (
                <video
                  src={heroMedia.src}
                  poster={heroMedia.poster}
                  className="h-full w-full object-cover object-center"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={heroMedia.alt}
                />
              ) : heroMedia ? (
                <img
                  src={heroMedia.src}
                  alt={heroMedia.alt}
                  className="h-full w-full object-cover object-center"
                />
              ) : null}
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

        {/* Competitors — above media grid */}
        {project.competitors && project.competitors.length > 0 && (
          <CompetitorsSection
            productName={project.shortTitle}
            intro={project.competitorsIntro}
            competitors={project.competitors}
          />
        )}

        {/* Mood board — above media grid */}
        {project.moodBoard && (
          <MoodBoardSection
            productName={project.shortTitle}
            mood={project.moodBoard}
          />
        )}

        {/* Research conclusions — synthesis from competitors + mood, above results */}
        {project.researchConclusions && (
          <ResearchConclusionsSection
            productName={project.shortTitle}
            conclusions={project.researchConclusions}
          />
        )}

        {/* Design system (corporates) or wireframes (websites / startups) */}
        {project.designSystem ? (
          <DesignSystemSection
            productName={project.shortTitle}
            board={project.designSystem as DesignSystemBoard}
          />
        ) : (
          project.wireframes && (
            <WireframesSection
              productName={project.shortTitle}
              board={project.wireframes as WireframesBoard}
              sources={wireframeSources}
            />
          )
        )}

        {/* Media grid — images/videos when provided, otherwise empty placeholders */}
        <section className="page-gutter border-b border-border py-16 md:py-24">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {(project.slug === "sewer-squad"
              ? (project.mediaGrid ?? [])
              : Array.from({ length: 8 }, (_, index) => project.mediaGrid?.[index])
            ).map((item, index) => (
              <MediaGridCell key={index} item={item} />
            ))}
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
