import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const SITES = [
  { slug: "csc", url: "https://www.onekingslane.com/" },
  { slug: "slt", url: "https://www.surlatable.com/" },
  { slug: "zg", url: "https://www.zgallerie.com/" },
  { slug: "CHaPPie", url: "https://chappie-production.up.railway.app/" },
  { slug: "ctc", url: "https://www.canadiantire.ca/en.html" },
  {
    slug: "walmart",
    url: "https://www.walmart.com/browse/clothing/virtual-try-on/5438_4879497",
  },
  { slug: "first-principles", url: "https://research.firstprinciples.org" },
  { slug: "marks", url: "https://www.marks.com/en.html" },
  { slug: "sportchek", url: "https://www.sportchek.ca/en.html" },
  { slug: "partycity", url: "https://www.partycity.ca/en.html" },
  { slug: "ava", url: "https://is-studio-hub.github.io/ava/index.html" },
  { slug: "50nny", url: "https://web-production-afb24.up.railway.app/" },
];

const NAMES = [
  "01-hero.png",
  "02-detail.png",
  "03-detail.png",
  "04-detail.png",
  "05-detail.png",
  "06-detail.png",
  "07-detail.png",
];

async function dismissOverlays(page) {
  const selectors = [
    'button:has-text("Accept")',
    'button:has-text("Accept All")',
    'button:has-text("Accept all")',
    'button:has-text("I Agree")',
    'button:has-text("I agree")',
    'button:has-text("Got it")',
    'button:has-text("Close")',
    'button:has-text("No thanks")',
    'button:has-text("Reject")',
    'button:has-text("Reject All")',
    'button:has-text("Decline")',
    '[aria-label="Close"]',
    '[aria-label="close"]',
    "#onetrust-accept-btn-handler",
    ".osano-cm-accept-all",
  ];
  for (const sel of selectors) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 800 })) {
        await el.click({ timeout: 1000 }).catch(() => {});
        await page.waitForTimeout(400);
      }
    } catch {
      /* ignore */
    }
  }
}

async function collectInSiteLinks(page, origin) {
  const hrefs = await page.evaluate((originUrl) => {
    const originHost = new URL(originUrl).host;
    const out = [];
    for (const a of document.querySelectorAll("a[href]")) {
      try {
        const u = new URL(a.href, originUrl);
        if (u.host !== originHost) continue;
        if (u.hash && u.pathname === new URL(originUrl).pathname) continue;
        if (/mailto:|tel:|javascript:/i.test(a.href)) continue;
        const text = (a.textContent || "").trim().toLowerCase();
        if (/cart|bag|checkout|sign.?in|log.?in|account|privacy|terms|cookie|ccpa|order.?status|refund|acceptable.?use/i.test(text + " " + u.pathname))
          continue;
        out.push(u.href.split("#")[0]);
      } catch {
        /* ignore */
      }
    }
    return [...new Set(out)].slice(0, 20);
  }, origin);
  return hrefs;
}

async function shot(page, filePath) {
  await page.screenshot({ path: filePath, fullPage: false, type: "png" });
}

async function captureSite(browser, { slug, url }) {
  const outDir = path.join(root, "public/projects", slug, "grid");
  fs.mkdirSync(outDir, { recursive: true });
  for (const name of NAMES) {
    const p = path.join(outDir, name);
    if (fs.existsSync(p)) fs.unlinkSync(p);
  }

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  });
  const page = await context.newPage();
  page.setDefaultTimeout(25000);

  console.log(`\n=== ${slug} ← ${url}`);
  try {
    await page.goto(url, { waitUntil: "commit", timeout: 90000 });
    await page.waitForLoadState("domcontentloaded", { timeout: 30000 }).catch(() => {});
    await page.waitForTimeout(3500);
    await dismissOverlays(page);
    await page.waitForTimeout(800);

    await shot(page, path.join(outDir, NAMES[0]));
    console.log("  saved", NAMES[0]);

    // Scroll captures on home
    for (let i = 1; i <= 2; i++) {
      await page.evaluate(() => window.scrollBy(0, Math.floor(window.innerHeight * 0.85)));
      await page.waitForTimeout(900);
      await dismissOverlays(page);
      await shot(page, path.join(outDir, NAMES[i]));
      console.log("  saved", NAMES[i]);
    }

    const links = await collectInSiteLinks(page, url);
    let linkIdx = 0;
    for (let i = 3; i < 7; i++) {
      let captured = false;
      while (linkIdx < links.length && !captured) {
        const href = links[linkIdx++];
        try {
          await page.goto(href, { waitUntil: "commit", timeout: 45000 });
          await page.waitForLoadState("domcontentloaded", { timeout: 20000 }).catch(() => {});
          await page.waitForTimeout(1800);
          await dismissOverlays(page);
          await shot(page, path.join(outDir, NAMES[i]));
          console.log("  saved", NAMES[i], "←", href.slice(0, 80));
          captured = true;
        } catch (err) {
          console.log("  skip link", href.slice(0, 60), err.message?.slice(0, 60));
        }
      }
      if (!captured) {
        await page.goto(url, { waitUntil: "commit", timeout: 60000 }).catch(() => {});
        await page.waitForTimeout(1200);
        await page.evaluate((n) => {
          window.scrollTo(0, Math.floor(document.body.scrollHeight * (n / 8)));
        }, i);
        await page.waitForTimeout(800);
        await shot(page, path.join(outDir, NAMES[i]));
        console.log("  saved", NAMES[i], "(scroll fallback)");
      }
    }

    const missing = NAMES.filter((n) => !fs.existsSync(path.join(outDir, n)));
    if (missing.length) throw new Error(`Missing files: ${missing.join(", ")}`);
    console.log(`  OK ${slug}`);
    return true;
  } catch (err) {
    console.error(`  FAIL ${slug}:`, err.message);
    return false;
  } finally {
    await context.close();
  }
}

const only = process.argv.slice(2);
const targets = only.length
  ? SITES.filter((s) => only.includes(s.slug))
  : SITES;

const browser = await chromium.launch({ headless: true });
const results = [];
for (const site of targets) {
  results.push({ slug: site.slug, ok: await captureSite(browser, site) });
}
await browser.close();

console.log("\nSummary:");
for (const r of results) console.log(`  ${r.ok ? "✓" : "✗"} ${r.slug}`);
const failed = results.filter((r) => !r.ok);
process.exit(failed.length ? 1 : 0);
