import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
const SRC = "/home/saemediacom/public_html/wp-content/uploads/";
const files = JSON.parse(fs.readFileSync("scripts/manifest.json", "utf8"));
const map = {};
let ok = 0, missing = [];
for (const rel of files) {
  const src = SRC + rel;
  if (!fs.existsSync(src)) { missing.push(rel); continue; }
  const out = rel.replace(/\.(png|jpe?g|webp|gif)$/i, ".webp");
  const dest = path.join("public/media", out);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  try {
    const img = sharp(src);
    const { width } = await img.metadata();
    await img.resize({ width: Math.min(width ?? 1600, 1600), withoutEnlargement: true }).webp({ quality: 78 }).toFile(dest);
    const m = await sharp(dest).metadata();
    map[rel] = { src: "/media/" + out, w: m.width, h: m.height };
    ok++;
  } catch (e) { missing.push(rel + " (" + e.message + ")"); }
}
fs.writeFileSync("lib/media-map.json", JSON.stringify(map));
console.log("optimized", ok, "missing", missing.length);
if (missing.length) console.log(missing.join("\n"));
