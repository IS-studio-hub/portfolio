#!/usr/bin/env node
/**
 * Capture Dooogs screenshots + generate website-style card mockup.
 */
import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public/projects/dooogs");
const GRID = path.join(OUT_DIR, "grid");
const TMP = path.join(__dirname, ".dooogs-card-tmp");
const LIVE = "https://is-studio-hub.github.io/dooogs/en";

fs.mkdirSync(GRID, { recursive: true });
fs.mkdirSync(TMP, { recursive: true });

async function waitPastPreloader(page) {
  await page.waitForTimeout(1500);
  await page
    .waitForFunction(() => {
      const el = document.querySelector(".c-preloader");
      if (!el) return true;
      const style = getComputedStyle(el);
      return style.display === "none" || style.opacity === "0" || el.getAttribute("aria-hidden") === "true";
    }, { timeout: 20000 })
    .catch(() => {});
  await page.waitForTimeout(1200);
}

async function clickChoice(page, label) {
  const btn = page.getByRole("button", { name: label }).first();
  if (await btn.isVisible({ timeout: 4000 }).catch(() => false)) {
    await btn.click();
    await page.waitForTimeout(2500);
    return true;
  }
  return false;
}

const browser = await chromium.launch({ headless: true });

// --- Desktop captures for grid ---
{
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  await page.goto(LIVE, { waitUntil: "networkidle", timeout: 90000 }).catch(async () => {
    await page.goto(LIVE, { waitUntil: "domcontentloaded", timeout: 60000 });
  });
  await waitPastPreloader(page);

  await page.screenshot({ path: path.join(GRID, "01-hero.png"), type: "png" });
  console.log("grid 01-hero");

  // Expand sheet if handle exists
  const handle = page.locator(".c-lisa_sheet-handle");
  if (await handle.isVisible({ timeout: 2000 }).catch(() => false)) {
    await handle.click().catch(() => {});
    await page.waitForTimeout(1200);
  }

  await page.screenshot({ path: path.join(GRID, "02-intro.png"), type: "png" });
  console.log("grid 02-intro");

  // Advance to chat if possible
  await page.keyboard.press("Enter").catch(() => {});
  await page.waitForTimeout(1500);
  await page.mouse.click(720, 700).catch(() => {});
  await page.waitForTimeout(1500);

  // Try clicking through intro / next
  for (const sel of [
    'button:has-text("Next")',
    'button:has-text("Continue")',
    ".c-lisa_step",
    "main",
  ]) {
    try {
      await page.locator(sel).first().click({ timeout: 1500 });
      await page.waitForTimeout(1000);
    } catch {
      /* ignore */
    }
  }

  await page.screenshot({ path: path.join(GRID, "03-chat.png"), type: "png" });
  console.log("grid 03-chat");

  await clickChoice(page, "Tell me about Poodles");
  await page.screenshot({ path: path.join(GRID, "04-poodles.png"), type: "png" });
  console.log("grid 04-poodles");

  // Go back / start new by reload for variety
  await page.goto(LIVE, { waitUntil: "domcontentloaded", timeout: 60000 });
  await waitPastPreloader(page);
  await page.waitForTimeout(2000);
  await clickChoice(page, "Help me choose a breed");
  await page.screenshot({ path: path.join(GRID, "05-choose.png"), type: "png" });
  console.log("grid 05-choose");

  await page.goto(LIVE, { waitUntil: "domcontentloaded", timeout: 60000 });
  await waitPastPreloader(page);
  await page.waitForTimeout(2000);
  await clickChoice(page, "Foods dogs must never eat");
  await page.screenshot({ path: path.join(GRID, "06-food.png"), type: "png" });
  console.log("grid 06-food");

  await page.goto(LIVE, { waitUntil: "domcontentloaded", timeout: 60000 });
  await waitPastPreloader(page);
  await page.waitForTimeout(2000);
  await clickChoice(page, "German Shepherd deep dive");
  await page.screenshot({ path: path.join(GRID, "07-shepherd.png"), type: "png" });
  console.log("grid 07-shepherd");

  // Card desktop frame source
  await page.goto(LIVE, { waitUntil: "domcontentloaded", timeout: 60000 });
  await waitPastPreloader(page);
  await page.waitForTimeout(2500);
  await page.screenshot({ path: path.join(TMP, "desktop.png"), type: "png" });
  await context.close();
}

// --- Mobile for card ---
{
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  const page = await context.newPage();
  await page.goto(LIVE, { waitUntil: "domcontentloaded", timeout: 60000 });
  await waitPastPreloader(page);
  await page.waitForTimeout(2500);
  await page.screenshot({ path: path.join(TMP, "phone.png"), type: "png" });
  await context.close();
}

await browser.close();

const DESK = path.join(TMP, "desktop.png");
const PHONE = path.join(TMP, "phone.png");
const OUT = path.join(OUT_DIR, "card.png");
const HERO = path.join(OUT_DIR, "01-hero.png");

const html = `<!DOCTYPE html>
<html>
<head>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1600px; height: 1000px;
    display: flex; align-items: center; justify-content: center;
    overflow: hidden;
    background:
      radial-gradient(ellipse 70% 55% at 48% 42%, rgba(251,146,60,0.14) 0%, transparent 62%),
      radial-gradient(ellipse 50% 40% at 70% 70%, rgba(253,224,71,0.08) 0%, transparent 55%),
      linear-gradient(165deg, #0b0b0b 0%, #050505 50%, #101010 100%);
  }
  .stage { position: relative; width: 1380px; height: 820px; }
  .laptop {
    position: absolute; left: 20px; top: 40px; width: 1080px;
    filter: drop-shadow(0 36px 70px rgba(0,0,0,0.55));
  }
  .laptop__chrome {
    background: #1c1c1c; border: 2px solid #2c2c2c;
    border-radius: 16px 16px 0 0; padding: 10px 12px 8px;
  }
  .dots { display: flex; gap: 6px; margin-bottom: 8px; }
  .dots span { width: 8px; height: 8px; border-radius: 50%; background: #3a3a3a; }
  .laptop__display {
    border-radius: 6px; overflow: hidden; background: #111; aspect-ratio: 16 / 10.1;
  }
  .laptop__display img {
    width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block;
  }
  .laptop__base {
    height: 14px; margin: 0 42px; border-radius: 0 0 10px 10px;
    background: linear-gradient(180deg, #333, #1f1f1f);
  }
  .phone {
    position: absolute; right: 36px; bottom: 18px; width: 300px;
    background: #0f0f0f; border: 2px solid #333; border-radius: 42px; padding: 12px;
    filter: drop-shadow(0 28px 56px rgba(0,0,0,0.6));
  }
  .phone__notch {
    width: 96px; height: 18px; margin: 2px auto 10px; border-radius: 999px; background: #1a1a1a;
  }
  .phone__display {
    border-radius: 30px; overflow: hidden; background: #fff; aspect-ratio: 9 / 19.2;
  }
  .phone__display img {
    width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block;
  }
</style>
</head>
<body>
  <div class="stage">
    <div class="laptop">
      <div class="laptop__chrome">
        <div class="dots"><span></span><span></span><span></span></div>
        <div class="laptop__display"><img src="file://${DESK}" alt="" /></div>
      </div>
      <div class="laptop__base"></div>
    </div>
    <div class="phone">
      <div class="phone__notch"></div>
      <div class="phone__display"><img src="file://${PHONE}" alt="" /></div>
    </div>
  </div>
</body>
</html>`;

const htmlPath = path.join(TMP, "card.html");
fs.writeFileSync(htmlPath, html);

const compose = await chromium.launch();
const page = await compose.newPage({
  viewport: { width: 1600, height: 1000 },
  deviceScaleFactor: 2,
});
await page.goto(`file://${htmlPath}`, { waitUntil: "load" });
await page.waitForTimeout(500);
await page.screenshot({ path: OUT, type: "png" });
await compose.close();

fs.copyFileSync(path.join(GRID, "01-hero.png"), HERO);
console.log("Wrote", OUT);
console.log("Hero", HERO);
console.log("Grid", fs.readdirSync(GRID).join(", "));
