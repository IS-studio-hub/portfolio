#!/usr/bin/env node
/**
 * Tel Aviv homepage card — same desktop + phone mockup language as other website cards.
 */
import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "public/projects/telaviv/card.png");
const HERO = path.join(ROOT, "public/projects/telaviv/01-hero.png");
const TMP = path.join(__dirname, ".telaviv-card-tmp");
fs.mkdirSync(TMP, { recursive: true });

const LIVE = "https://is-studio-hub.github.io/TelAviv/";
const DESK = path.join(TMP, "desktop.png");
const PHONE = path.join(TMP, "phone.png");

async function dismissStart(page) {
  await page.waitForTimeout(2500);
  // Click START if present
  const start = page.getByText("START", { exact: true });
  if (await start.isVisible({ timeout: 8000 }).catch(() => false)) {
    await start.click({ timeout: 3000 }).catch(() => {});
    await page.waitForTimeout(4000);
  } else {
    await page.mouse.click(720, 450).catch(() => {});
    await page.waitForTimeout(3500);
  }
}

const captureBrowser = await chromium.launch({ headless: true });

const deskContext = await captureBrowser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const deskPage = await deskContext.newPage();
await deskPage.goto(LIVE, { waitUntil: "commit", timeout: 90000 });
await deskPage.waitForLoadState("domcontentloaded").catch(() => {});
await dismissStart(deskPage);
await deskPage.screenshot({ path: DESK, type: "png" });
await deskContext.close();

const phoneContext = await captureBrowser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});
const phonePage = await phoneContext.newPage();
await phonePage.goto(LIVE, { waitUntil: "commit", timeout: 90000 });
await phonePage.waitForLoadState("domcontentloaded").catch(() => {});
await dismissStart(phonePage);
await phonePage.screenshot({ path: PHONE, type: "png" });
await phoneContext.close();
await captureBrowser.close();

const deskSrc = fs.existsSync(DESK) ? DESK : path.join(ROOT, "public/projects/telaviv/grid/02-street.png");
const phoneSrc = fs.existsSync(PHONE) ? PHONE : path.join(ROOT, "public/projects/telaviv/grid/01-start.png");

const html = `<!DOCTYPE html>
<html>
<head>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1600px;
    height: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background:
      radial-gradient(ellipse 70% 55% at 48% 42%, rgba(125,211,252,0.12) 0%, transparent 62%),
      radial-gradient(ellipse 50% 40% at 72% 72%, rgba(251,191,36,0.05) 0%, transparent 55%),
      linear-gradient(165deg, #0b0b0b 0%, #050505 50%, #101010 100%);
  }
  .stage {
    position: relative;
    width: 1380px;
    height: 820px;
  }
  .laptop {
    position: absolute;
    left: 20px;
    top: 40px;
    width: 1080px;
    filter: drop-shadow(0 36px 70px rgba(0,0,0,0.55));
  }
  .laptop__chrome {
    background: #1c1c1c;
    border: 2px solid #2c2c2c;
    border-radius: 16px 16px 0 0;
    padding: 10px 12px 8px;
  }
  .dots {
    display: flex;
    gap: 6px;
    margin-bottom: 8px;
  }
  .dots span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #3a3a3a;
  }
  .laptop__display {
    border-radius: 6px;
    overflow: hidden;
    background: #0a0f1a;
    aspect-ratio: 16 / 10.1;
  }
  .laptop__display img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    display: block;
  }
  .laptop__base {
    height: 14px;
    margin: 0 42px;
    border-radius: 0 0 10px 10px;
    background: linear-gradient(180deg, #333, #1f1f1f);
  }
  .phone {
    position: absolute;
    right: 36px;
    bottom: 18px;
    width: 300px;
    background: #0f0f0f;
    border: 2px solid #333;
    border-radius: 42px;
    padding: 12px;
    filter: drop-shadow(0 28px 56px rgba(0,0,0,0.6));
  }
  .phone__notch {
    width: 96px;
    height: 18px;
    margin: 2px auto 10px;
    border-radius: 999px;
    background: #1a1a1a;
  }
  .phone__display {
    border-radius: 30px;
    overflow: hidden;
    background: #0a0f1a;
    aspect-ratio: 9 / 19.2;
  }
  .phone__display img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    display: block;
  }
</style>
</head>
<body>
  <div class="stage">
    <div class="laptop">
      <div class="laptop__chrome">
        <div class="dots"><span></span><span></span><span></span></div>
        <div class="laptop__display">
          <img src="file://${deskSrc}" alt="" />
        </div>
      </div>
      <div class="laptop__base"></div>
    </div>
    <div class="phone">
      <div class="phone__notch"></div>
      <div class="phone__display">
        <img src="file://${phoneSrc}" alt="" />
      </div>
    </div>
  </div>
</body>
</html>`;

const htmlPath = path.join(TMP, "card.html");
fs.writeFileSync(htmlPath, html);

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1600, height: 1000 },
  deviceScaleFactor: 2,
});
await page.goto(`file://${htmlPath}`, { waitUntil: "load" });
await page.waitForTimeout(600);
await page.screenshot({ path: OUT, type: "png" });
await browser.close();

// Keep hero in sync for project page fallbacks
fs.copyFileSync(OUT, HERO);
console.log("Wrote", OUT);
console.log("desk", deskSrc);
console.log("phone", phoneSrc);
