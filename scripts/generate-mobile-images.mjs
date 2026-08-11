import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const imgDir = path.join(process.cwd(), "public", "img");

async function generateMobileSliderImages() {
  const sliderDir = path.join(imgDir, "slider");
  const entries = fs.readdirSync(sliderDir);
  for (const file of entries) {
    if (file.endsWith(".jpg") || file.endsWith(".webp")) {
      const base = file.replace(/\.(jpg|webp)$/, "");
      if (!base.includes("-mobile")) {
        const src = path.join(sliderDir, `${base}.webp`);
        const target = path.join(sliderDir, `${base}-mobile.webp`);
        if (fs.existsSync(src)) {
          await sharp(src)
            .resize({ width: 750, withoutEnlargement: true })
            .webp({ quality: 80, effort: 6 })
            .toFile(target);
          const stats = fs.statSync(target);
          console.log(`Generated mobile slider image: ${base}-mobile.webp (${(stats.size / 1024).toFixed(1)} KB)`);
        }
      }
    }
  }
}

await generateMobileSliderImages();
