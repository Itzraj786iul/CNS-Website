import sharp from "sharp";

const INPUT = "public/cns-logo.png";
const OUTPUT = "public/cns-logo-nav.png";

/** Trim borders and knock out near-white pixels for transparent nav logo */
async function processLogo() {
  const trimmed = sharp(INPUT).trim({ threshold: 20 }).ensureAlpha();
  const { data, info } = await trimmed.raw().toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r > 232 && g > 232 && b > 232) {
      data[i + 3] = 0;
    }
  }

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png({ compressionLevel: 9 })
    .toFile(OUTPUT);

  const meta = await sharp(OUTPUT).metadata();
  console.log(`Wrote ${OUTPUT} (${meta.width}x${meta.height})`);
}

processLogo().catch((error) => {
  console.error(error);
  process.exit(1);
});
