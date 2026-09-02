const REPO_MEDIA =
  "https://media.githubusercontent.com/media/IS-studio-hub/portfolio/main/public";

/**
 * Prefix public asset paths with Vite's base URL (required on GitHub Pages).
 * .glb files use GitHub's media CDN because Pages cannot serve Git LFS binaries.
 */
export function assetPath(path: string): string {
  if (!path || /^(https?:|data:|blob:)/i.test(path)) return path;
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || "/";

  if (normalized.endsWith(".glb") && base !== "/") {
    return `${REPO_MEDIA}/${normalized}`;
  }

  return `${base}${normalized}`;
}
