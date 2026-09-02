#!/usr/bin/env node
/**
 * Capture frames from Figma files listed in figma-urls.json.
 * Requires FIGMA_TOKEN env var OR a logged-in browser session via Playwright.
 *
 * Usage:
 *   FIGMA_TOKEN=xxx node scripts/capture-figma-frames.mjs
 *   node scripts/capture-figma-frames.mjs --browser   # Playwright fallback
 */

import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const URLS_PATH = path.join(ROOT, "figma-urls.json");
const OUT_ROOT = path.join(ROOT, "public/projects");

const urls = JSON.parse(fs.readFileSync(URLS_PATH, "utf8"));

function parseFileKey(figmaUrl) {
  const match = figmaUrl.match(/figma\.com\/(?:design|file)\/([a-zA-Z0-9]+)/);
  return match?.[1];
}

async function exportViaApi(slug, figmaUrl, token) {
  const fileKey = parseFileKey(figmaUrl);
  if (!fileKey) return false;

  const fileRes = await fetch(`https://api.figma.com/v1/files/${fileKey}?depth=1`, {
    headers: { "X-Figma-Token": token },
  });
  if (!fileRes.ok) return false;

  const fileJson = await fileRes.json();
  const page = fileJson.document?.children?.[0];
  const frames = page?.children?.filter((n) => n.type === "FRAME").slice(0, 5) ?? [];
  if (!frames.length) return false;

  const ids = frames.map((f) => f.id).join(",");
  const imgRes = await fetch(
    `https://api.figma.com/v1/images/${fileKey}?ids=${encodeURIComponent(ids)}&format=png&scale=2`,
    { headers: { "X-Figma-Token": token } },
  );
  if (!imgRes.ok) return false;

  const { images } = await imgRes.json();
  const rawDir = path.join(OUT_ROOT, slug, "raw");
  fs.mkdirSync(rawDir, { recursive: true });

  let i = 1;
  for (const [nodeId, imageUrl] of Object.entries(images)) {
    if (!imageUrl) continue;
    const buf = await fetch(imageUrl).then((r) => r.arrayBuffer());
    const name = `${String(i).padStart(2, "0")}-frame.png`;
    fs.writeFileSync(path.join(rawDir, name), Buffer.from(buf));
    console.log("API", slug, name, nodeId);
    i++;
  }
  return i > 1;
}

async function exportViaBrowser(slug, figmaUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(figmaUrl, { waitUntil: "networkidle", timeout: 120000 });
  await page.waitForTimeout(5000);

  const rawDir = path.join(OUT_ROOT, slug, "raw");
  fs.mkdirSync(rawDir, { recursive: true });
  await page.screenshot({ path: path.join(rawDir, "01-frame.png"), fullPage: false });
  console.log("browser", slug, "01-frame.png");
  await browser.close();
  return true;
}

const useBrowser = process.argv.includes("--browser");
const token = process.env.FIGMA_TOKEN;

for (const [slug, entry] of Object.entries(urls)) {
  if (slug.startsWith("_")) continue;
  const figmaUrl = entry.primary || entry.secondary;
  if (!figmaUrl) {
    console.log("skip", slug, "(no URL — add to figma-urls.json)");
    continue;
  }

  try {
    let ok = false;
    if (token && !useBrowser) {
      ok = await exportViaApi(slug, figmaUrl, token);
    }
    if (!ok) {
      await exportViaBrowser(slug, figmaUrl);
    }
  } catch (e) {
    console.log("FAIL", slug, e.message);
  }
}

console.log("Done. Run: node scripts/generate-project-mockups.mjs");
