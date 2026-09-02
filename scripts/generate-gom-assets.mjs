import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "../public/projects/gom");
const TMP = path.join(__dirname, ".gom-tmp");

fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(TMP, { recursive: true });

const designSystemFoundations = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8" />
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1600px; height: 1000px;
    background: #0f1419;
    color: #e8eaed;
    font-family: "DM Sans", Inter, system-ui, sans-serif;
    padding: 56px 64px;
  }
  .eyebrow { font: 600 11px/1 "DM Mono", monospace; letter-spacing: .14em; text-transform: uppercase; color: #4ade80; }
  h1 { font: 600 42px/1.1 Fraunces, Georgia, serif; margin: 12px 0 40px; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
  .panel { background: #171c22; border: 1px solid #2a3139; border-radius: 20px; padding: 28px; }
  .panel h2 { font: 600 13px/1 "DM Mono", monospace; letter-spacing: .08em; text-transform: uppercase; color: #9aa3ad; margin-bottom: 20px; }
  .swatches { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
  .swatch { border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,.06); }
  .swatch__color { height: 72px; }
  .swatch__meta { padding: 10px 12px; background: #11161b; font: 500 11px/1.4 "DM Mono", monospace; color: #c5ccd3; }
  .type-stack { display: grid; gap: 14px; }
  .type-row { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; border-bottom: 1px solid #242b33; padding-bottom: 12px; }
  .type-sample { color: #f3f4f6; }
  .type-meta { font: 500 10px/1.4 "DM Mono", monospace; color: #7b8794; text-align: right; white-space: nowrap; }
  .spacing { display: flex; align-items: flex-end; gap: 10px; height: 120px; }
  .space { background: linear-gradient(180deg, #4ade80, #22c55e); border-radius: 6px; width: 28px; }
  .space span { display: block; margin-top: 8px; font: 500 10px/1 "DM Mono", monospace; color: #9aa3ad; text-align: center; }
  .logo-row { display: flex; align-items: center; gap: 16px; margin-top: 8px; }
  .badge { background: #1f3a2e; color: #d7f5e4; border: 1px solid #2f5a47; border-radius: 999px; padding: 8px 14px; font: 600 12px/1 Inter, sans-serif; }
</style></head><body>
  <p class="eyebrow">GOM Design Library</p>
  <h1>Foundations — colour, type & spacing</h1>
  <div class="grid">
    <div class="panel">
      <h2>Semantic colour tokens</h2>
      <div class="swatches">
        <div class="swatch"><div class="swatch__color" style="background:#1f3a2e"></div><div class="swatch__meta">brand/forest<br/>#1F3A2E</div></div>
        <div class="swatch"><div class="swatch__color" style="background:#F7E491"></div><div class="swatch__meta">brand/gold<br/>#F7E491</div></div>
        <div class="swatch"><div class="swatch__color" style="background:#CE4127"></div><div class="swatch__meta">action/primary<br/>#CE4127</div></div>
        <div class="swatch"><div class="swatch__color" style="background:#0f5f38"></div><div class="swatch__meta">status/success<br/>#0F5F38</div></div>
        <div class="swatch"><div class="swatch__color" style="background:#1d4ed8"></div><div class="swatch__meta">link/default<br/>#1D4ED8</div></div>
        <div class="swatch"><div class="swatch__color" style="background:#f8fafc"></div><div class="swatch__meta">surface/base<br/>#F8FAFC</div></div>
        <div class="swatch"><div class="swatch__color" style="background:#334155"></div><div class="swatch__meta">text/secondary<br/>#334155</div></div>
        <div class="swatch"><div class="swatch__color" style="background:#111827"></div><div class="swatch__meta">text/primary<br/>#111827</div></div>
      </div>
      <div class="logo-row">
        <span class="badge">Government of Manitoba</span>
        <span class="badge" style="background:#fff;color:#1f3a2e">e-Licensing</span>
      </div>
    </div>
    <div class="panel">
      <h2>Typography scale</h2>
      <div class="type-stack">
        <div class="type-row"><span class="type-sample" style="font:600 36px/1.1 Fraunces,serif">Display / H1</span><span class="type-meta">Fraunces 36/44</span></div>
        <div class="type-row"><span class="type-sample" style="font:600 24px/1.2 Fraunces,serif">Heading / H2</span><span class="type-meta">Fraunces 24/32</span></div>
        <div class="type-row"><span class="type-sample" style="font:600 18px/1.3 Inter,sans-serif">Title / H3</span><span class="type-meta">Inter 18/24 Semibold</span></div>
        <div class="type-row"><span class="type-sample" style="font:400 16px/1.5 Inter,sans-serif">Body / default copy for forms and guidance text.</span><span class="type-meta">Inter 16/24</span></div>
        <div class="type-row"><span class="type-sample" style="font:500 12px/1.4 DM Mono,monospace;letter-spacing:.08em;text-transform:uppercase">Label / meta</span><span class="type-meta">DM Mono 12</span></div>
      </div>
    </div>
    <div class="panel" style="grid-column: span 2">
      <h2>Spacing scale (4px base)</h2>
      <div class="spacing">
        ${[4, 8, 12, 16, 24, 32, 48, 64]
          .map(
            (n) =>
              `<div><div class="space" style="height:${n * 2}px"></div><span>${n}</span></div>`,
          )
          .join("")}
      </div>
    </div>
  </div>
</body></html>`;

const designSystemComponents = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8" />
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1600px; height: 1000px;
    background: #f4f6f8;
    color: #111827;
    font-family: Inter, system-ui, sans-serif;
    padding: 48px 56px;
  }
  .eyebrow { font: 600 11px/1 "DM Mono", monospace; letter-spacing: .14em; text-transform: uppercase; color: #0f5f38; }
  h1 { font: 600 38px/1.1 Fraunces, Georgia, serif; margin: 10px 0 28px; color: #1f3a2e; }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .card { background: #fff; border: 1px solid #dbe2ea; border-radius: 16px; padding: 22px; box-shadow: 0 8px 24px rgba(31,58,46,.06); }
  .card h2 { font: 600 11px/1 "DM Mono", monospace; letter-spacing: .08em; text-transform: uppercase; color: #64748b; margin-bottom: 16px; }
  .btn-row { display: flex; flex-wrap: wrap; gap: 10px; }
  .btn { border-radius: 999px; padding: 10px 18px; font: 600 13px/1 Inter, sans-serif; border: 1px solid transparent; }
  .btn-primary { background: #CE4127; color: #fff; }
  .btn-secondary { background: #fff; color: #1f3a2e; border-color: #1f3a2e; }
  .btn-ghost { background: #eef6f1; color: #0f5f38; }
  .field { display: grid; gap: 6px; margin-bottom: 12px; }
  .field label { font: 600 11px/1 "DM Mono", monospace; letter-spacing: .06em; text-transform: uppercase; color: #475569; }
  .field input, .field select { height: 42px; border: 1px solid #cbd5e1; border-radius: 10px; padding: 0 12px; font: 400 14px/1 Inter, sans-serif; }
  .field input:focus { outline: 2px solid #4ade80; border-color: #4ade80; }
  .nav { display: flex; gap: 8px; flex-wrap: wrap; }
  .nav a { text-decoration: none; color: #1f3a2e; font: 600 12px/1 Inter, sans-serif; padding: 8px 12px; border-radius: 999px; background: #f8fafc; border: 1px solid #e2e8f0; }
  .nav a.active { background: #1f3a2e; color: #fff; border-color: #1f3a2e; }
  .licence { border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; }
  .licence__img { height: 88px; background: linear-gradient(135deg,#1f3a2e,#2d6a4f); }
  .licence__body { padding: 12px; }
  .licence__title { font: 600 14px/1.2 Inter, sans-serif; }
  .licence__meta { font: 500 11px/1.4 "DM Mono", monospace; color: #64748b; margin-top: 4px; }
  table { width: 100%; border-collapse: collapse; font-size: 12px; }
  th, td { text-align: left; padding: 8px 6px; border-bottom: 1px solid #e2e8f0; }
  th { font: 600 10px/1 "DM Mono", monospace; letter-spacing: .06em; text-transform: uppercase; color: #64748b; }
  .tag { display: inline-block; background: #ecfdf3; color: #0f5f38; border-radius: 999px; padding: 4px 8px; font: 600 10px/1 Inter, sans-serif; }
</style></head><body>
  <p class="eyebrow">GOM Design Library</p>
  <h1>Components — patterns for public services</h1>
  <div class="grid">
    <div class="card">
      <h2>Buttons</h2>
      <div class="btn-row">
        <button class="btn btn-primary">Purchase licence</button>
        <button class="btn btn-secondary">View details</button>
        <button class="btn btn-ghost">Sign in</button>
      </div>
    </div>
    <div class="card">
      <h2>Navigation</h2>
      <div class="nav">
        <a class="active" href="#">Home</a>
        <a href="#">Licences</a>
        <a href="#">Draws</a>
        <a href="#">Issuers</a>
        <a href="#">FAQ</a>
      </div>
    </div>
    <div class="card">
      <h2>Licence card</h2>
      <div class="licence">
        <div class="licence__img"></div>
        <div class="licence__body">
          <div class="licence__title">Conservation Angling Licence</div>
          <div class="licence__meta">Resident · Season 2026</div>
        </div>
      </div>
    </div>
    <div class="card" style="grid-column: span 2">
      <h2>Form fields</h2>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
        <div class="field"><label>Email address</label><input value="citizen@email.com" /></div>
        <div class="field"><label>Licence type</label><select><option>Angling — Conservation</option></select></div>
        <div class="field"><label>Verification code</label><input value="482910" /></div>
        <div class="field"><label>Account type</label><select><option>Individual</option></select></div>
      </div>
    </div>
    <div class="card">
      <h2>Status</h2>
      <p style="margin-bottom:10px"><span class="tag">Active</span></p>
      <p style="font-size:13px;color:#475569">Accessible labels, helper text, and inline validation for every input state.</p>
    </div>
    <div class="card" style="grid-column: span 3">
      <h2>Data table</h2>
      <table>
        <thead><tr><th>Licence</th><th>Season</th><th>Status</th><th>Total</th></tr></thead>
        <tbody>
          <tr><td>Angling — Conservation</td><td>2026</td><td><span class="tag">Purchased</span></td><td>$10.50</td></tr>
          <tr><td>Big Game Draw</td><td>2026</td><td>Pending</td><td>$6.00</td></tr>
          <tr><td>Park Vehicle Permit</td><td>2026</td><td><span class="tag">Active</span></td><td>$44.50</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</body></html>`;

async function dismissModal(page) {
  const close = page.getByRole("button", { name: "Close" });
  if (await close.count()) {
    try {
      await close.first().click({ timeout: 2000 });
      await page.waitForTimeout(400);
    } catch {
      /* ignore */
    }
  }
}

async function capturePortalScreenshots(browser) {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  const shots = [
    { file: "portal-home.png", url: "https://www.manitobaelicensing.ca/public/home", scrollY: 0 },
    {
      file: "portal-licence-listing.png",
      url: "https://www.manitobaelicensing.ca/public/product-listings?p=angling-licences",
      scrollY: 0,
    },
    {
      file: "portal-sign-in.png",
      url: "https://www.manitobaelicensing.ca/public/home",
      clickSignIn: true,
    },
  ];

  for (const shot of shots) {
    try {
      await page.goto(shot.url, { waitUntil: "networkidle", timeout: 90000 });
      await page.waitForTimeout(2500);
      await dismissModal(page);
      if (shot.clickSignIn) {
        const signIn = page
          .getByRole("link", { name: /sign in/i })
          .or(page.getByRole("button", { name: /sign in/i }));
        if (await signIn.count()) {
          await signIn.first().click();
          await page.waitForTimeout(2500);
        }
      }
      if (shot.scrollY) {
        await page.evaluate((y) => window.scrollTo(0, y), shot.scrollY);
        await page.waitForTimeout(500);
      }
      await page.screenshot({ path: path.join(OUT, shot.file) });
      console.log("screenshot", shot.file);
    } catch (e) {
      console.log("screenshot FAIL", shot.file, e.message);
    }
  }

  // Responsive duo
  try {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("https://www.manitobaelicensing.ca/public/home", {
      waitUntil: "networkidle",
      timeout: 90000,
    });
    await page.waitForTimeout(2000);
    await dismissModal(page);
    const desktop = await page.screenshot();

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("https://www.manitobaelicensing.ca/public/home", {
      waitUntil: "networkidle",
      timeout: 90000,
    });
    await page.waitForTimeout(2000);
    await dismissModal(page);
    const mobile = await page.screenshot();

    const duoHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
      body { margin:0; width:1600px; height:1000px; display:flex; align-items:center; justify-content:center; gap:40px;
        background: radial-gradient(ellipse 80% 70% at 50% 40%, #fff6c8 0%, #F7E491 45%, #edd56e 100%); }
      .desk, .mob { border-radius:16px; overflow:hidden; box-shadow:0 24px 60px rgba(31,58,46,.18); background:#fff; }
      .desk { width:980px; } .desk img { width:100%; display:block; }
      .mob { width:280px; border:10px solid #111; border-radius:28px; } .mob img { width:100%; display:block; }
    </style></head><body>
      <div class="desk"><img src="data:image/png;base64,${desktop.toString("base64")}" /></div>
      <div class="mob"><img src="data:image/png;base64,${mobile.toString("base64")}" /></div>
    </body></html>`;
    const duoPath = path.join(TMP, "responsive-duo.html");
    fs.writeFileSync(duoPath, duoHtml);
    const duoPage = await context.newPage();
    await duoPage.setViewportSize({ width: 1600, height: 1000 });
    await duoPage.goto(`file://${duoPath}`);
    await duoPage.waitForTimeout(300);
    await duoPage.screenshot({ path: path.join(OUT, "portal-responsive.png") });
    await duoPage.close();
    console.log("screenshot portal-responsive.png");
  } catch (e) {
    console.log("responsive FAIL", e.message);
  }

  await context.close();
}

async function renderHtmlMockups(browser) {
  const jobs = [
    { name: "design-system-foundations.png", html: designSystemFoundations, w: 1600, h: 1000 },
    { name: "design-system-components.png", html: designSystemComponents, w: 1600, h: 1000 },
  ];

  const context = await browser.newContext({ deviceScaleFactor: 2 });
  for (const job of jobs) {
    const htmlPath = path.join(TMP, job.name.replace(".png", ".html"));
    fs.writeFileSync(htmlPath, job.html);
    const page = await context.newPage();
    await page.setViewportSize({ width: job.w, height: job.h });
    await page.goto(`file://${htmlPath}`);
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(OUT, job.name) });
    await page.close();
    console.log("mockup", job.name);
  }
  await context.close();
}

async function recordWalkthrough(browser) {
  const videoDir = TMP;
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    recordVideo: { dir: videoDir, size: { width: 1280, height: 720 } },
  });
  const page = await context.newPage();

  try {
    await page.goto("https://www.manitobaelicensing.ca/public/home", {
      waitUntil: "networkidle",
      timeout: 90000,
    });
    await page.waitForTimeout(2000);
    await dismissModal(page);
    await page.waitForTimeout(1500);
    await page.evaluate(() => window.scrollTo({ top: 900, behavior: "smooth" }));
    await page.waitForTimeout(2200);
    await page.evaluate(() => window.scrollTo({ top: 1800, behavior: "smooth" }));
    await page.waitForTimeout(2200);
    await page.goto("https://www.manitobaelicensing.ca/public/product-listings?p=angling-licences", {
      waitUntil: "networkidle",
      timeout: 90000,
    });
    await page.waitForTimeout(2500);
    await page.goto("https://www.manitobaelicensing.ca/public/sign-in", {
      waitUntil: "networkidle",
      timeout: 90000,
    });
    await page.waitForTimeout(2000);
  } catch (e) {
    console.log("video capture partial", e.message);
  }

  const video = page.video();
  await page.close();
  await context.close();

  if (video) {
    const webmPath = await video.path();
    const outWebm = path.join(OUT, "portal-walkthrough.webm");
    fs.copyFileSync(webmPath, outWebm);

    try {
      const { execSync } = await import("child_process");
      execSync(
        `ffmpeg -y -i "${outWebm}" -c:v libx264 -pix_fmt yuv420p -movflags +faststart "${path.join(OUT, "portal-walkthrough.mp4")}"`,
        { stdio: "ignore" },
      );
      console.log("video portal-walkthrough.mp4");
    } catch {
      fs.copyFileSync(outWebm, path.join(OUT, "portal-walkthrough.mp4"));
      console.log("video saved as webm (ffmpeg unavailable)");
    }
  }
}

function createHero() {
  const home = path.join(OUT, "portal-home.png");
  const hero = path.join(OUT, "hero-portal.png");
  if (fs.existsSync(home)) {
    fs.copyFileSync(home, hero);
    console.log("hero-portal.png");
  }
}

const browser = await chromium.launch();
await renderHtmlMockups(browser);
await capturePortalScreenshots(browser);
await recordWalkthrough(browser);
createHero();
await browser.close();

console.log("Done:", OUT);
