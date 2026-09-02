import { useEffect, useMemo } from "react";
import { SITE } from "../data/projects";

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  jsonLd?: JsonLd;
  noIndex?: boolean;
};

const ensureMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
};

const ensureCanonical = (href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
};

const ensureLlmsAlternate = (href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="alternate"][type="text/plain"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "alternate";
    el.type = "text/plain";
    el.title = "LLM brief";
    document.head.appendChild(el);
  }
  el.href = href;
};

const setJsonLd = (data?: JsonLd) => {
  const id = "seo-jsonld";
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!data) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
};

export function Seo({
  title,
  description,
  path = "/",
  image = "/og-image.png",
  type = "website",
  jsonLd,
  noIndex = false,
}: SeoProps) {
  const jsonLdKey = useMemo(() => (jsonLd ? JSON.stringify(jsonLd) : ""), [jsonLd]);

  useEffect(() => {
    const url = new URL(path, SITE.url).toString();
    const imageUrl = image.startsWith("http") ? image : new URL(image, SITE.url).toString();
    const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;

    document.title = fullTitle;
    document.documentElement.lang = "en";

    ensureMeta("name", "description", description);
    ensureMeta("name", "author", SITE.name);
    ensureMeta(
      "name",
      "robots",
      noIndex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );
    ensureMeta("name", "googlebot", noIndex ? "noindex, nofollow" : "index, follow");
    ensureMeta("name", "bingbot", noIndex ? "noindex, nofollow" : "index, follow");
    ensureMeta("name", "ai-content", "human-authored portfolio case studies");

    ensureCanonical(url);
    ensureLlmsAlternate(new URL("/llms.txt", SITE.url).toString());

    ensureMeta("property", "og:type", type);
    ensureMeta("property", "og:site_name", `${SITE.name} Portfolio`);
    ensureMeta("property", "og:title", fullTitle);
    ensureMeta("property", "og:description", description);
    ensureMeta("property", "og:url", url);
    ensureMeta("property", "og:locale", "en_CA");
    ensureMeta("property", "og:image", imageUrl);

    ensureMeta("name", "twitter:card", "summary_large_image");
    ensureMeta("name", "twitter:title", fullTitle);
    ensureMeta("name", "twitter:description", description);
    ensureMeta("name", "twitter:image", imageUrl);

    setJsonLd(jsonLdKey ? (JSON.parse(jsonLdKey) as JsonLd) : undefined);
  }, [title, description, path, image, type, jsonLdKey, noIndex]);

  return null;
}
