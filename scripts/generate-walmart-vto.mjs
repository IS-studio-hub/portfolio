#!/usr/bin/env node
/**
 * Generate Walmart Choose My Model / Be Your Own Model case-study mockups.
 * Creates in-product UI screens, then frames them in device mockups.
 */
import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "public/projects/walmart");
const RAW = path.join(OUT, "raw");
const TMP = path.join(__dirname, ".walmart-tmp");

fs.mkdirSync(RAW, { recursive: true });
fs.mkdirSync(TMP, { recursive: true });
fs.mkdirSync(OUT, { recursive: true });

const BLUE = "#0071DC";
const YELLOW = "#FFC220";

const MODELS = [
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=560&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=560&fit=crop&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=560&fit=crop&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=560&fit=crop&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=560&fit=crop&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=560&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=560&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=560&fit=crop&q=80",
];

const PRODUCT =
  "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=900&h=1100&fit=crop&q=80";
const PRODUCT_ALT =
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&h=1100&fit=crop&q=80";
const SELF =
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=700&h=900&fit=crop&q=80";

function baseCss() {
  return `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      background: #fff;
      color: #2e2f32;
      -webkit-font-smoothing: antialiased;
    }
    .spark {
      width: 28px; height: 28px; border-radius: 50%;
      background: radial-gradient(circle at 50% 50%, ${YELLOW} 0 28%, transparent 29%),
        conic-gradient(from 20deg, ${YELLOW}, ${YELLOW});
      position: relative;
    }
    .spark::before {
      content: ""; position: absolute; inset: 6px;
      background: #fff; border-radius: 50%;
    }
    .btn-primary {
      background: ${BLUE}; color: #fff; border: 0; border-radius: 999px;
      padding: 12px 22px; font-weight: 700; font-size: 14px; cursor: pointer;
    }
    .btn-ghost {
      background: #fff; color: #2e2f32; border: 1px solid #ccc;
      border-radius: 999px; padding: 10px 18px; font-weight: 600; font-size: 13px;
    }
    .chip {
      display: inline-flex; align-items: center; gap: 6px;
      border: 1px solid #ccc; border-radius: 999px; padding: 8px 12px;
      font-size: 12px; background: #fff;
    }
    .chip.active { border-color: ${BLUE}; color: ${BLUE}; background: #e6f1fc; }
    .try-btn {
      position: absolute; left: 16px; top: 78%; bottom: auto; z-index: 5;
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(255,255,255,0.98); border: 1px solid #c6d5e5;
      border-radius: 999px; padding: 12px 16px; font-size: 14px; font-weight: 700;
      box-shadow: 0 10px 28px rgba(0,0,0,0.22);
    }
    .try-btn span.icon {
      width: 18px; height: 18px; border-radius: 50%; background: ${BLUE};
      display: inline-grid; place-items: center; color: #fff; font-size: 10px;
    }
  `;
}

function headerHtml() {
  return `
    <header style="display:flex;align-items:center;gap:16px;padding:14px 24px;border-bottom:1px solid #e3e4e5;flex:0 0 auto;">
      <div class="spark"></div>
      <div style="flex:1;background:#f2f8fd;border:1px solid #c6d5e5;border-radius:999px;padding:10px 16px;color:#74767c;font-size:14px;">
        Search Walmart
      </div>
      <div style="font-size:13px;font-weight:600;">Account</div>
      <div style="font-size:13px;font-weight:600;">Cart</div>
    </header>
  `;
}

function pdpScreen({ modelSrc = PRODUCT, showSheet = false, mode = "default" }) {
  const sheet =
    mode === "choose"
      ? `
      <aside style="position:absolute;inset:0 0 0 auto;width:420px;background:#fff;border-left:1px solid #e3e4e5;box-shadow:-16px 0 40px rgba(0,0,0,0.08);padding:20px;overflow:auto;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <h2 style="font-size:22px;font-weight:700;">Choose My Model</h2>
          <span style="font-size:20px;color:#74767c;">×</span>
        </div>
        <p style="font-size:13px;color:#74767c;margin-bottom:16px;line-height:1.45;">
          Pick a model closer to your height, body shape and skin tone to see how this item looks on someone like you.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;">
          <span class="chip active">Height</span>
          <span class="chip">Body shape</span>
          <span class="chip">Skin tone</span>
          <span class="chip">Size XS–XXXL</span>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          ${MODELS.map(
            (src, i) => `
            <div style="border:${i === 1 ? `2px solid ${BLUE}` : "1px solid #e3e4e5"};border-radius:12px;overflow:hidden;background:#f8f8f8;">
              <img src="${src}" style="width:100%;height:170px;object-fit:cover;display:block;" />
              <div style="padding:8px 10px;font-size:11px;color:#74767c;">${["5'4 · S", "5'7 · M", "5'9 · L", "5'5 · XL", "5'8 · M", "5'10 · L", "5'3 · XS", "5'6 · XXL"][i]}</div>
            </div>`,
          ).join("")}
        </div>
        <button class="btn-primary" style="width:100%;margin-top:16px;">Apply model</button>
      </aside>`
      : mode === "self"
        ? `
      <aside style="position:absolute;inset:0 0 0 auto;width:420px;background:#fff;border-left:1px solid #e3e4e5;box-shadow:-16px 0 40px rgba(0,0,0,0.08);padding:20px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <h2 style="font-size:22px;font-weight:700;">Be Your Own Model</h2>
          <span style="font-size:20px;color:#74767c;">×</span>
        </div>
        <p style="font-size:13px;color:#74767c;margin-bottom:16px;line-height:1.45;">
          Use your own photo to see fabric drape, length and fit on your body in seconds.
        </p>
        <div style="border:1px dashed #9bb7d4;border-radius:16px;background:#f2f8fd;padding:18px;text-align:center;margin-bottom:14px;">
          <img src="${SELF}" style="width:180px;height:240px;object-fit:cover;border-radius:12px;margin:0 auto 12px;display:block;" />
          <div style="font-size:13px;font-weight:700;margin-bottom:4px;">Full-body photo ready</div>
          <div style="font-size:12px;color:#74767c;">Height set to 5'6 · saved to account</div>
        </div>
        <div style="display:grid;gap:8px;margin-bottom:16px;">
          <div class="chip" style="justify-content:flex-start;">Wear fitted clothing</div>
          <div class="chip" style="justify-content:flex-start;">Stand in bright light</div>
          <div class="chip" style="justify-content:flex-start;">Capture head to toe</div>
        </div>
        <button class="btn-primary" style="width:100%;">Try this item on me</button>
      </aside>`
        : "";

  return `<!DOCTYPE html><html><head><style>${baseCss()}
    html, body { width: 1440px; height: 900px; overflow: hidden; }
    .shell { width: 1440px; height: 900px; display: flex; flex-direction: column; overflow: hidden; }
    .main { position: relative; height: 843px; flex: 0 0 843px; }
    .layout { display:grid; grid-template-columns: 1.05fr 0.95fr; height: 100%; }
    .gallery { position:relative; background:#f5f5f5; overflow:hidden; height: 100%; }
    .gallery img { width:100%; height:100%; object-fit:cover; display:block; }
    .info { padding:28px 32px 40px; overflow:auto; }
    .price { font-size:28px; font-weight:800; margin:12px 0 18px; }
    .swatches { display:flex; gap:8px; margin:12px 0 20px; }
    .swatch { width:28px; height:28px; border-radius:50%; border:2px solid #fff; box-shadow:0 0 0 1px #bbb; }
  </style></head><body>
    <div class="shell">
    ${headerHtml()}
    <div class="main">
      <div class="layout">
        <div class="gallery">
          <img src="${modelSrc}" alt="Product on model" />
          <div class="try-btn"><span class="icon">⇄</span> Try It On</div>
        </div>
        <div class="info">
          <div style="font-size:12px;color:#74767c;margin-bottom:8px;">Free Assembly</div>
          <h1 style="font-size:28px;line-height:1.2;font-weight:700;max-width:420px;">
            Soft Rib Midi Dress · Virtual try-on enabled
          </h1>
          <div class="price">$24.98</div>
          <div style="font-size:13px;margin-bottom:8px;"><strong>Color:</strong> Soft Black</div>
          <div class="swatches">
            <div class="swatch" style="background:#1d1d1d;"></div>
            <div class="swatch" style="background:#c45c4a;"></div>
            <div class="swatch" style="background:#d8d2c8;"></div>
            <div class="swatch" style="background:#2f5d8c;"></div>
          </div>
          <div style="font-size:13px;margin-bottom:8px;"><strong>Size:</strong> M</div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:22px;">
            ${["XS", "S", "M", "L", "XL", "XXL"].map((s) => `<span class="chip ${s === "M" ? "active" : ""}">${s}</span>`).join("")}
          </div>
          <div style="display:flex;gap:10px;margin-bottom:18px;">
            <button class="btn-primary" style="flex:1;">Add to cart</button>
            <button class="btn-ghost">Save</button>
          </div>
          <div style="border:1px solid #e3e4e5;border-radius:12px;padding:14px;">
            <div style="font-size:13px;font-weight:700;margin-bottom:6px;">See it on someone like you</div>
            <div style="font-size:13px;color:#74767c;line-height:1.45;">
              Tap <strong>Try It On</strong> on the product image to Choose My Model or Be Your Own Model.
            </div>
          </div>
        </div>
      </div>
      ${showSheet || mode !== "default" ? sheet : ""}
    </div>
    </div>
  </body></html>`;
}

function tryOnEntryScreen() {
  return `<!DOCTYPE html><html><head><style>${baseCss()}
    body { background:#111; display:grid; place-items:center; min-height:900px; }
    .card { width:520px; background:#fff; border-radius:24px; padding:28px; }
  </style></head><body>
    <div class="card">
      <div class="spark" style="margin-bottom:16px;"></div>
      <h1 style="font-size:28px;font-weight:800;margin-bottom:10px;">How do you want to try it on?</h1>
      <p style="font-size:14px;color:#74767c;line-height:1.5;margin-bottom:20px;">
        Fashion products with virtual try-on show a button on the image so shoppers can change the model to someone they recognize more with, or become the model themselves.
      </p>
      <button class="btn-primary" style="width:100%;margin-bottom:10px;">Choose My Model</button>
      <button class="btn-ghost" style="width:100%;">Be Your Own Model</button>
    </div>
  </body></html>`;
}

function mobilePdp() {
  return `<!DOCTYPE html><html><head><style>${baseCss()}
    body { width:390px; background:#fff; }
    html, body { width:390px; height:844px; overflow:hidden; }
    .hero { position:relative; }
    .hero img { width:100%; height:520px; object-fit:cover; display:block; }
  </style></head><body>
    <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 14px;">
      <div class="spark"></div>
      <div style="font-size:13px;font-weight:700;">Fashion</div>
      <div style="font-size:13px;">Cart</div>
    </div>
    <div class="hero">
      <img src="${PRODUCT_ALT}" alt="" />
      <div class="try-btn"><span class="icon">⇄</span> Try It On</div>
    </div>
    <div style="padding:16px;">
      <div style="font-size:12px;color:#74767c;">Time and Tru</div>
      <h1 style="font-size:20px;font-weight:700;margin:6px 0 8px;">Linen Blend Shirt Dress</h1>
      <div style="font-size:22px;font-weight:800;margin-bottom:12px;">$19.98</div>
      <button class="btn-primary" style="width:100%;">Add to cart</button>
    </div>
  </body></html>`;
}

function mobileChooser() {
  return `<!DOCTYPE html><html><head><style>${baseCss()}
    body { width:390px; background:#fff; }
  </style></head><body>
    <div style="padding:16px;">
      <div style="font-size:12px;color:#74767c;margin-bottom:6px;">Virtual try-on</div>
      <h1 style="font-size:24px;font-weight:800;margin-bottom:8px;">Choose My Model</h1>
      <p style="font-size:13px;color:#74767c;line-height:1.45;margin-bottom:14px;">
        Filter by height, body shape and skin tone, then apply a model you recognize more with.
      </p>
      <div style="display:flex;gap:8px;overflow:auto;margin-bottom:14px;">
        <span class="chip active">5'2–5'6</span>
        <span class="chip">5'7–6'0</span>
        <span class="chip">Plus</span>
        <span class="chip">Petite</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        ${MODELS.slice(0, 6)
          .map(
            (src, i) => `
          <div style="border:${i === 0 ? `2px solid ${BLUE}` : "1px solid #e3e4e5"};border-radius:14px;overflow:hidden;">
            <img src="${src}" style="width:100%;height:160px;object-fit:cover;display:block;" />
          </div>`,
          )
          .join("")}
      </div>
      <button class="btn-primary" style="width:100%;margin-top:14px;">Use this model</button>
    </div>
  </body></html>`;
}

function selfResultScreen() {
  return pdpScreen({ modelSrc: SELF, mode: "default" }).replace(
    "Soft Rib Midi Dress · Virtual try-on enabled",
    "Soft Rib Midi Dress · Showing on your photo",
  );
}

function deviceCss() {
  return `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1600px; height: 1000px;
      display: flex; align-items: center; justify-content: center;
      background:
        radial-gradient(ellipse 70% 55% at 50% 45%, rgba(0,113,220,0.12) 0%, transparent 65%),
        linear-gradient(165deg, #0a0a0a 0%, #050505 50%, #0f0f0f 100%);
      overflow: hidden;
    }
    .glow {
      position: absolute; width: 60%; height: 40%; bottom: 10%; left: 20%;
      background: rgba(0,113,220,0.08); filter: blur(80px); border-radius: 50%;
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
  `;
}

function frameLaptop(src) {
  return `<!DOCTYPE html><html><head><style>${deviceCss()}</style></head><body>
    <div class="glow"></div>
    <div class="laptop"><div class="laptop__screen"><div class="laptop__display">
      <img src="file://${src}" alt="" /></div></div><div class="laptop__base"></div></div>
  </body></html>`;
}

function framePhone(src) {
  return `<!DOCTYPE html><html><head><style>${deviceCss()}</style></head><body>
    <div class="glow"></div>
    <div class="phone"><div class="phone__display"><img src="file://${src}" alt="" /></div></div>
  </body></html>`;
}

function frameDuo(desktopSrc, phoneSrc) {
  return `<!DOCTYPE html><html><head><style>${deviceCss()}</style></head><body>
    <div class="glow"></div>
    <div class="duo">
      <div class="laptop"><div class="laptop__screen"><div class="laptop__display">
        <img src="file://${desktopSrc}" alt="" /></div></div><div class="laptop__base"></div></div>
      <div class="phone"><div class="phone__display"><img src="file://${phoneSrc}" alt="" /></div></div>
    </div>
  </body></html>`;
}

async function shot(page, html, outPath, w, h) {
  const htmlPath = path.join(TMP, `${path.basename(outPath)}.html`);
  fs.writeFileSync(htmlPath, html);
  await page.setViewportSize({ width: w, height: h });
  await page.goto(`file://${htmlPath}`, { waitUntil: "load", timeout: 120000 });
  await page.waitForTimeout(800);
  // Prefer clipping to the designed artboard when the page shell exists.
  const shell = page.locator(".shell");
  if ((await shell.count()) > 0) {
    const box = await shell.boundingBox();
    if (box) {
      await page.screenshot({
        path: outPath,
        clip: { x: 0, y: 0, width: Math.min(w, box.width), height: Math.min(h, box.height) },
      });
      console.log("OK", path.relative(ROOT, outPath), "shell", Math.round(box.height));
      return;
    }
  }
  await page.screenshot({ path: outPath });
  console.log("OK", path.relative(ROOT, outPath));
}

const browser = await chromium.launch();
const context = await browser.newContext({ deviceScaleFactor: 2 });
const page = await context.newPage();

const rawJobs = [
  { name: "01-pdp.png", html: pdpScreen({ mode: "default" }), w: 1440, h: 900 },
  { name: "02-choose.png", html: pdpScreen({ mode: "choose", modelSrc: MODELS[1] }), w: 1440, h: 900 },
  { name: "03-self.png", html: pdpScreen({ mode: "self", modelSrc: PRODUCT }), w: 1440, h: 900 },
  { name: "04-self-result.png", html: selfResultScreen(), w: 1440, h: 900 },
  { name: "05-entry.png", html: tryOnEntryScreen(), w: 1440, h: 900 },
  { name: "06-mobile-pdp.png", html: mobilePdp(), w: 390, h: 844 },
  { name: "07-mobile-choose.png", html: mobileChooser(), w: 390, h: 844 },
];

for (const job of rawJobs) {
  await shot(page, job.html, path.join(RAW, job.name), job.w, job.h);
}

const framed = [
  { name: "01-hero.png", html: frameLaptop(path.join(RAW, "01-pdp.png")), w: 1600, h: 1000 },
  { name: "02-detail.png", html: framePhone(path.join(RAW, "06-mobile-pdp.png")), w: 900, h: 1100 },
  {
    name: "03-detail.png",
    html: frameDuo(path.join(RAW, "02-choose.png"), path.join(RAW, "07-mobile-choose.png")),
    w: 1600,
    h: 1000,
  },
  { name: "04-detail.png", html: frameLaptop(path.join(RAW, "03-self.png")), w: 1600, h: 1000 },
  { name: "05-detail.png", html: frameLaptop(path.join(RAW, "04-self-result.png")), w: 1600, h: 1000 },
  { name: "06-detail.png", html: frameLaptop(path.join(RAW, "05-entry.png")), w: 1600, h: 1000 },
  { name: "07-detail.png", html: framePhone(path.join(RAW, "07-mobile-choose.png")), w: 900, h: 1100 },
  { name: "08-detail.png", html: frameDuo(path.join(RAW, "04-self-result.png"), path.join(RAW, "06-mobile-pdp.png")), w: 1600, h: 1000 },
  { name: "solution-1.png", html: frameLaptop(path.join(RAW, "01-pdp.png")), w: 1600, h: 1000 },
  { name: "solution-2.png", html: frameDuo(path.join(RAW, "02-choose.png"), path.join(RAW, "07-mobile-choose.png")), w: 1600, h: 1000 },
  { name: "solution-3.png", html: frameLaptop(path.join(RAW, "03-self.png")), w: 1600, h: 1000 },
  { name: "solution-4.png", html: frameLaptop(path.join(RAW, "04-self-result.png")), w: 1600, h: 1000 },
  { name: "solution-5.png", html: frameLaptop(path.join(RAW, "05-entry.png")), w: 1600, h: 1000 },
  { name: "solution-6.png", html: framePhone(path.join(RAW, "06-mobile-pdp.png")), w: 900, h: 1100 },
  {
    name: "card.png",
    html: frameDuo(path.join(RAW, "01-pdp.png"), path.join(RAW, "06-mobile-pdp.png")),
    w: 1600,
    h: 1000,
  },
];

for (const job of framed) {
  await shot(page, job.html, path.join(OUT, job.name), job.w, job.h);
}

fs.copyFileSync(path.join(OUT, "01-hero.png"), path.join(OUT, "hero.png"));
await browser.close();
console.log("Walmart VTO mockups ready");
