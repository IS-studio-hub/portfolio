#!/usr/bin/env node
/**
 * Generate studio-production mockups for all portfolio projects.
 * Sources: public/projects/{slug}/raw/*.png OR fallback Unsplash URLs.
 * Outputs: 01-hero.png … 05-detail.png, solution-1..3.png, updates hero image.
 */

import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT_ROOT = path.join(ROOT, "public/projects");

const SLUGS = [
  "gom",
  "nmbr",
  "weebo",
  "csc",
  "gigz",
  "obs",
  "ctc",
  "walmart",
  "anova",
  "ymca",
  "ppjv",
  "first-principles",
  "westjet",
  "polard",
  "marks",
];

const FALLBACK_SRC = {
  gom: "/projects/gom/portal-home.png",
  nmbr: "https://images.unsplash.com/photo-1563986768609?w=1400&h=900&fit=crop&q=80",
  weebo: "https://images.unsplash.com/photo-1677442136019?w=1400&h=900&fit=crop&q=80",
  csc: "https://images.unsplash.com/photo-1504307651644?w=1400&h=900&fit=crop&q=80",
  gigz: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&h=900&fit=crop&q=80",
  obs: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1400&h=900&fit=crop&q=80",
  ctc: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1400&h=900&fit=crop&q=80",
  walmart: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&h=900&fit=crop&q=80",
  anova: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1400&h=900&fit=crop&q=80",
  ymca: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1400&h=900&fit=crop&q=80",
  ppjv: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&h=900&fit=crop&q=80",
  "first-principles": "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1400&h=900&fit=crop&q=80",
  westjet: "https://images.unsplash.com/photo-1436491865332-7a61a3dc8fc0?w=1400&h=900&fit=crop&q=80",
  polard: "https://images.unsplash.com/photo-1460925895917?w=1400&h=900&fit=crop&q=80",
  marks: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1400&h=900&fit=crop&q=80",
};

const DARK_BG = `
  background:
    radial-gradient(ellipse 70% 55% at 50% 45%, rgba(200, 255, 0, 0.06) 0%, transparent 65%),
    radial-gradient(ellipse 90% 70% at 50% 100%, rgba(255,255,255,0.03) 0%, transparent 50%),
    linear-gradient(165deg, #0a0a0a 0%, #050505 50%, #0f0f0f 100%);
`;

function deviceStyles() {
  return `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1600px; height: 1000px;
      display: flex; align-items: center; justify-content: center;
      ${DARK_BG}
      font-family: system-ui, sans-serif;
      overflow: hidden;
    }
    .glow {
      position: absolute; width: 60%; height: 40%; bottom: 10%; left: 20%;
      background: rgba(200, 255, 0, 0.05); filter: blur(80px); border-radius: 50%;
    }
    .laptop { position: relative; z-index: 1; width: 1000px; filter: drop-shadow(0 32px 64px rgba(0,0,0,0.6)); }
    .laptop__screen {
      background: #1a1a1a; border-radius: 16px 16px 0 0; padding: 12px 12px 8px;
      border: 2px solid #2a2a2a;
    }
    .laptop__display { border-radius: 6px; overflow: hidden; background: #111; }
    .laptop__display img { width: 100%; display: block; }
    .laptop__base {
      height: 14px; background: linear-gradient(180deg, #333, #222);
      border-radius: 0 0 10px 10px; margin: 0 40px;
    }
    .phone {
      position: relative; z-index: 1; width: 300px;
      background: #111; border-radius: 40px; padding: 12px; border: 2px solid #333;
      filter: drop-shadow(0 28px 56px rgba(0,0,0,0.55));
    }
    .phone__display { border-radius: 30px; overflow: hidden; }
    .phone__display img { width: 100%; display: block; }
    .duo { display: flex; align-items: flex-end; gap: 40px; position: relative; z-index: 1; }
    .duo .laptop { width: 820px; }
    .duo .phone { width: 260px; margin-bottom: 24px; }
    .tablet {
      position: relative; z-index: 1; width: 680px;
      background: #1a1a1a; border-radius: 24px; padding: 16px; border: 2px solid #333;
      filter: drop-shadow(0 28px 56px rgba(0,0,0,0.55));
    }
    .tablet__display { border-radius: 12px; overflow: hidden; }
    .tablet__display img { width: 100%; display: block; }
  `;
}

function resolveSource(slug) {
  const rawDir = path.join(OUT_ROOT, slug, "raw");
  if (fs.existsSync(rawDir)) {
    const files = fs.readdirSync(rawDir).filter((f) => f.endsWith(".png"));
    if (files.length) return path.join(rawDir, files[0]);
  }
  const fallback = FALLBACK_SRC[slug];
  if (fallback?.startsWith("/")) {
    const local = path.join(ROOT, "public", fallback);
    if (fs.existsSync(local)) return local;
  }
  return fallback;
}

function imgSrc(filePath) {
  if (filePath.startsWith("http")) return filePath;
  return `file://${filePath}`;
}

function laptopHtml(src) {
  return `<!DOCTYPE html><html><head><style>${deviceStyles()}</style></head><body>
    <div class="glow"></div>
    <div class="laptop"><div class="laptop__screen"><div class="laptop__display">
      <img src="${imgSrc(src)}" alt="" /></div></div><div class="laptop__base"></div></div>
  </body></html>`;
}

function phoneHtml(src) {
  return `<!DOCTYPE html><html><head><style>${deviceStyles()}</style></head><body>
    <div class="glow"></div>
    <div class="phone"><div class="phone__display"><img src="${imgSrc(src)}" alt="" /></div></div>
  </body></html>`;
}

function duoHtml(src) {
  return `<!DOCTYPE html><html><head><style>${deviceStyles()}</style></head><body>
    <div class="glow"></div>
    <div class="duo">
      <div class="laptop"><div class="laptop__screen"><div class="laptop__display">
        <img src="${imgSrc(src)}" alt="" /></div></div><div class="laptop__base"></div></div>
      <div class="phone"><div class="phone__display"><img src="${imgSrc(src)}" alt="" /></div></div>
    </div>
  </body></html>`;
}

function tabletHtml(src) {
  return `<!DOCTYPE html><html><head><style>${deviceStyles()}</style></head><body>
    <div class="glow"></div>
    <div class="tablet"><div class="tablet__display"><img src="${imgSrc(src)}" alt="" /></div></div>
  </body></html>`;
}

const TMP = path.join(__dirname, ".mockup-tmp");
fs.mkdirSync(TMP, { recursive: true });

const onlySlug = process.argv.find((a) => a.startsWith("--slug="))?.split("=")[1];
const solutionsOnly = process.argv.includes("--solutions-only");
const targetSlugs = onlySlug ? [onlySlug] : SLUGS;

const browser = await chromium.launch();
const context = await browser.newContext({ deviceScaleFactor: 2 });

for (const slug of targetSlugs) {
  if (slug === "gom" && !onlySlug) {
    console.log("skip gom (preserving existing assets)");
    continue;
  }

  const src = resolveSource(slug);
  if (!src) {
    console.log("skip", slug, "no source");
    continue;
  }

  const outDir = path.join(OUT_ROOT, slug);
  fs.mkdirSync(outDir, { recursive: true });

  const allJobs = [
    { name: "01-hero.png", html: laptopHtml(src), w: 1600, h: 1000 },
    { name: "02-detail.png", html: phoneHtml(src), w: 900, h: 1100 },
    { name: "03-detail.png", html: duoHtml(src), w: 1600, h: 1000 },
    { name: "04-detail.png", html: tabletHtml(src), w: 1200, h: 1000 },
    { name: "05-detail.png", html: laptopHtml(src), w: 1600, h: 1000 },
    { name: "solution-1.png", html: laptopHtml(src), w: 1600, h: 1000 },
    { name: "solution-2.png", html: duoHtml(src), w: 1600, h: 1000 },
    { name: "solution-3.png", html: phoneHtml(src), w: 900, h: 1100 },
  ];
  const jobs = solutionsOnly
    ? allJobs.filter((j) => j.name.startsWith("solution-"))
    : allJobs;

  for (const job of jobs) {
    const htmlPath = path.join(TMP, `${slug}-${job.name}.html`);
    fs.writeFileSync(htmlPath, job.html);
    const page = await context.newPage();
    await page.setViewportSize({ width: job.w, height: job.h });
    await page.goto(`file://${htmlPath}`, { waitUntil: "load" });
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(outDir, job.name) });
    await page.close();
    console.log("OK", slug, job.name);
  }

  const heroCopy = path.join(outDir, "01-hero.png");
  if (fs.existsSync(heroCopy) && slug !== "gom") {
    fs.copyFileSync(heroCopy, path.join(outDir, "hero.png"));
  }
}

await browser.close();
console.log("Done:", OUT_ROOT);
