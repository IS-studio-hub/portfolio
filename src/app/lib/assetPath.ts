/**
 * Prefix public asset paths with Vite's base URL (required on GitHub Pages).
 */
export function assetPath(path: string): string {
  if (!path || /^(https?:|data:|blob:)/i.test(path)) return path;
  const base = import.meta.env.BASE_URL || "/";
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${normalized}`;
}
