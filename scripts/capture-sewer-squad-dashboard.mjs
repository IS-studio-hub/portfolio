#!/usr/bin/env node
/** Capture Sewer Squad dashboard frames with the built-in demo records. */
import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GRID = path.join(__dirname, "../public/projects/sewer-squad/grid");
const LIVE = "https://is-studio-hub.github.io/theplumber/en";

fs.mkdirSync(GRID, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const page = await context.newPage();

await page.goto(`${LIVE}/dashboard`, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(800);
const cookies = page.getByRole("button", { name: "Accept Necessary" });
if (await cookies.isVisible({ timeout: 2500 }).catch(() => false)) {
  await cookies.click();
  await page.waitForTimeout(400);
}
await page.getByRole("heading", { name: "AVA Dashboard" }).waitFor({ timeout: 15000 });
await page.waitForTimeout(600);
await page.screenshot({ path: path.join(GRID, "05-pipeline.png"), type: "png" });
console.log("05 pipeline");

const bookings = page.getByRole("button", { name: "Bookings" });
await bookings.click();
await page.waitForTimeout(400);
await page.screenshot({ path: path.join(GRID, "06-bookings.png"), type: "png" });
console.log("06 bookings");

const leads = page.getByRole("button", { name: "Leads" });
await leads.click();
await page.waitForTimeout(400);
await page.screenshot({ path: path.join(GRID, "07-leads.png"), type: "png" });
console.log("07 leads");

await page.getByRole("button", { name: "All" }).click();
await page.waitForTimeout(300);
const row = page.getByText("Louiedelle").first();
await row.click();
await page.waitForTimeout(800);
await page.screenshot({ path: path.join(GRID, "08-file.png"), type: "png" });
console.log("08 file");

await browser.close();
console.log("done");
