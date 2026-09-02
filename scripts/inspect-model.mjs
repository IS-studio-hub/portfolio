import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = `<!DOCTYPE html><html><body><script type="importmap">{"imports":{"three":"https://unpkg.com/three@0.174/build/three.module.js","three/addons/":"https://unpkg.com/three@0.174/examples/jsm/"}}</script><script type="module">
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Box3, Vector3 } from 'three';
const loader = new GLTFLoader();
loader.load('${`file://${path.join(__dirname, "../public/models/manitoba-parks.glb")}`}', (gltf) => {
  const meshes = [];
  gltf.scene.traverse((o) => { if (o.isMesh) meshes.push({ name: o.name, mat: o.material?.name }); });
  const box = new Box3().setFromObject(gltf.scene);
  const size = new Vector3(); box.getSize(size);
  const center = new Vector3(); box.getCenter(center);
  document.body.textContent = JSON.stringify({ meshes, size, center }, null, 2);
}, undefined, (e) => { document.body.textContent = 'ERR ' + e.message; });
</script></body></html>`;

const htmlPath = path.join(__dirname, ".inspect-model.html");
fs.writeFileSync(htmlPath, html);

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`file://${htmlPath}`);
await page.waitForTimeout(8000);
console.log(await page.textContent("body"));
await browser.close();
