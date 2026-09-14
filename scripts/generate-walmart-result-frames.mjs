#!/usr/bin/env node
/**
 * Frame Walmart concept + live recording result screens into portfolio mockups.
 * Concept = early idea mockups we designed.
 * Result = real Choose my model flow from the user's screen recording.
 */
import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "public/projects/walmart");
const TMP = path.join(__dirname, ".walmart-result-tmp");
fs.mkdirSync(TMP, { recursive: true });

function deviceCss(accent = "rgba(0,113,220,0.12)") {
  return `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1600px; height: 1000px;
      display: flex; align-items: center; justify-content: center;
      background:
        radial-gradient(ellipse 70% 55% at 50% 45%, ${accent} 0%, transparent 65%),
        linear-gradient(165deg, #0a0a0a 0%, #050505 50%, #0f0f0f 100%);
      overflow: hidden;
      font-family: system-ui, sans-serif;
    }
    .glow {
      position: absolute; width: 60%; height: 40%; bottom: 10%; left: 20%;
      background: ${accent}; filter: blur(80px); border-radius: 50%;
    }
    .tag {
      position: absolute; top: 48px; left: 64px; z-index: 2;
      font: 600 12px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
      letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.7);
      border: 1px solid rgba(255,255,255,0.18); border-radius: 999px; padding: 8px 14px;
      background: rgba(0,0,0,0.35);
    }
    .laptop { position: relative; z-index: 1; width: 1120px; filter: drop-shadow(0 32px 64px rgba(0,0,0,0.6)); }
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
    .duo { display: flex; align-items: flex-end; gap: 36px; position: relative; z-index: 1; }
    .duo .laptop { width: 900px; }
    .side {
      width: 280px; border-radius: 18px; overflow: hidden; border: 1px solid #333;
      background: #111; filter: drop-shadow(0 24px 48px rgba(0,0,0,0.5));
      margin-bottom: 28px;
    }
    .side img { width: 100%; display: block; }
  `;
}

function frameLaptop(src, tag) {
  return `<!DOCTYPE html><html><head><style>${deviceCss()}</style></head><body>
    <div class="glow"></div>
    ${tag ? `<div class="tag">${tag}</div>` : ""}
    <div class="laptop"><div class="laptop__screen"><div class="laptop__display">
      <img src="file://${src}" alt="" /></div></div><div class="laptop__base"></div></div>
  </body></html>`;
}

function frameDuo(left, right, tag) {
  return `<!DOCTYPE html><html><head><style>${deviceCss()}</style></head><body>
    <div class="glow"></div>
    ${tag ? `<div class="tag">${tag}</div>` : ""}
    <div class="duo">
      <div class="laptop"><div class="laptop__screen"><div class="laptop__display">
        <img src="file://${left}" alt="" /></div></div><div class="laptop__base"></div></div>
      <div class="side"><img src="file://${right}" alt="" /></div>
    </div>
  </body></html>`;
}

const concept = (...p) => path.join(OUT, "concept", ...p);
const result = (...p) => path.join(OUT, "result", ...p);

const jobs = [
  // Keep early idea as hero / first impression
  { name: "01-hero.png", html: frameLaptop(concept("01-pdp-idea.png"), "Concept · first idea"), w: 1600, h: 1000 },
  { name: "02-detail.png", html: frameLaptop(concept("02-choose-idea.png"), "Concept · model choice"), w: 1600, h: 1000 },
  { name: "03-detail.png", html: frameLaptop(concept("03-self-idea.png"), "Concept · be your own model"), w: 1600, h: 1000 },

  // Results from live recording
  { name: "04-detail.png", html: frameLaptop(result("01-pdp-button.jpg"), "Result · live Walmart PDP"), w: 1600, h: 1000 },
  { name: "05-detail.png", html: frameLaptop(result("02-measurements.jpg"), "Result · choose my measurements"), w: 1600, h: 1000 },
  { name: "06-detail.png", html: frameLaptop(result("03-model-carousel.jpg"), "Result · choose my model"), w: 1600, h: 1000 },
  { name: "07-detail.png", html: frameLaptop(result("06-pdp-applied.jpg"), "Result · model applied on PDP"), w: 1600, h: 1000 },
  {
    name: "08-detail.png",
    html: frameDuo(result("04-measurements-selected.jpg"), result("05-choose-model.jpg"), "Result · measurement → model"),
    w: 1600,
    h: 1000,
  },

  // Solutions use result screens
  { name: "solution-1.png", html: frameLaptop(result("01-pdp-button.jpg"), "Result"), w: 1600, h: 1000 },
  { name: "solution-2.png", html: frameLaptop(result("02-measurements.jpg"), "Result"), w: 1600, h: 1000 },
  { name: "solution-3.png", html: frameLaptop(result("03-model-carousel.jpg"), "Result"), w: 1600, h: 1000 },
  { name: "solution-4.png", html: frameLaptop(result("06-pdp-applied.jpg"), "Result"), w: 1600, h: 1000 },
  { name: "solution-5.png", html: frameLaptop(concept("05-entry-idea.png"), "Concept"), w: 1600, h: 1000 },
  { name: "solution-6.png", html: frameDuo(result("05-choose-model.jpg"), concept("raw-pdp.png"), "Concept → Result"), w: 1600, h: 1000 },
  {
    name: "card.png",
    html: frameDuo(result("01-pdp-button.jpg"), concept("raw-pdp.png"), "Walmart · Choose my model"),
    w: 1600,
    h: 1000,
  },
];

const browser = await chromium.launch();
const context = await browser.newContext({ deviceScaleFactor: 2 });
const page = await context.newPage();

for (const job of jobs) {
  const htmlPath = path.join(TMP, job.name + ".html");
  fs.writeFileSync(htmlPath, job.html);
  await page.setViewportSize({ width: job.w, height: job.h });
  await page.goto(`file://${htmlPath}`, { waitUntil: "load" });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(OUT, job.name) });
  console.log("OK", job.name);
}

fs.copyFileSync(path.join(OUT, "01-hero.png"), path.join(OUT, "hero.png"));
await browser.close();
console.log("Walmart concept + result mockups ready");
