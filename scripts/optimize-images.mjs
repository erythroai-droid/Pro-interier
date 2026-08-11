import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const imgDir = path.join(process.cwd(), "public", "img");

async function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDir(fullPath);
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      const ext = path.extname(entry.name);
      const baseName = path.basename(entry.name, ext);
      const webpPath = path.join(dir, `${baseName}.webp`);

      try {
        const stats = fs.statSync(fullPath);
        const image = sharp(fullPath);
        const metadata = await image.metadata();

        let pipeline = sharp(fullPath);
        // If image is huge (> 1920 width), resize down
        if (metadata.width && metadata.width > 1920) {
          pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
        }

        await pipeline.webp({ quality: 80, effort: 6 }).toFile(webpPath);

        const newStats = fs.statSync(webpPath);
        const savedPercent = Math.round((1 - newStats.size / stats.size) * 100);
        console.log(
          `Converted: ${path.relative(imgDir, fullPath)} (${(stats.size / 1024).toFixed(1)} KB) -> ${path.relative(
            imgDir,
            webpPath
          )} (${(newStats.size / 1024).toFixed(1)} KB) [-${savedPercent}%]`
        );
      } catch (err) {
        console.error(`Error processing ${fullPath}:`, err.message);
      }
    }
  }
}

console.log("Optimizing images in public/img to WebP...");
await processDir(imgDir);
console.log("Done!");
