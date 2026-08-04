import sharp from "sharp";

const INPUT = "public/cns-logo.png";
const OUTPUT_MARK = "public/cns-logo-mark.png";
const OUTPUT_FULL = "public/cns-logo-full.png";

function isBackgroundPixel(r, g, b, a) {
  if (a < 12) return true;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const saturation = max - min;
  return max > 205 && saturation < 28;
}

/** Flood-fill edge-connected background pixels to transparent */
function removeBackground(data, width, height) {
  const visited = new Uint8Array(width * height);
  const queue = [];

  const pushIfBackground = (x, y) => {
    const index = y * width + x;
    if (visited[index]) return;
    const offset = index * 4;
    if (!isBackgroundPixel(data[offset], data[offset + 1], data[offset + 2], data[offset + 3])) {
      return;
    }
    visited[index] = 1;
    queue.push(index);
  };

  for (let x = 0; x < width; x += 1) {
    pushIfBackground(x, 0);
    pushIfBackground(x, height - 1);
  }
  for (let y = 0; y < height; y += 1) {
    pushIfBackground(0, y);
    pushIfBackground(width - 1, y);
  }

  while (queue.length > 0) {
    const index = queue.pop();
    const x = index % width;
    const y = (index - x) / width;
    const offset = index * 4;
    data[offset + 3] = 0;

    if (x > 0) pushIfBackground(x - 1, y);
    if (x < width - 1) pushIfBackground(x + 1, y);
    if (y > 0) pushIfBackground(x, y - 1);
    if (y < height - 1) pushIfBackground(x, y + 1);
  }

  for (let index = 0; index < width * height; index += 1) {
    const offset = index * 4;
    const r = data[offset];
    const g = data[offset + 1];
    const b = data[offset + 2];
    const a = data[offset + 3];
    if (a > 0 && isBackgroundPixel(r, g, b, a)) {
      data[offset + 3] = 0;
    }
  }
}

/** Crop to the CNS lettermark only (exclude tagline) for navbar use */
function findMarkBottom(data, width, height) {
  for (let y = height - 1; y >= 0; y -= 1) {
    let colorful = 0;
    for (let x = 0; x < width; x += 1) {
      const offset = (y * width + x) * 4;
      const r = data[offset];
      const g = data[offset + 1];
      const b = data[offset + 2];
      const a = data[offset + 3];
      if (a < 40) continue;
      if (b > 120 && b > r + 8) colorful += 1;
      if (g > 110 && g > r + 4) colorful += 1;
    }
    if (colorful > 24) {
      return Math.min(height, y + 8);
    }
  }
  return Math.round(height * 0.72);
}

async function writePng(data, width, height, output) {
  await sharp(data, {
    raw: { width, height, channels: 4 },
  })
    .png({ compressionLevel: 9 })
    .toFile(output);
}

async function processLogo() {
  const trimmed = sharp(INPUT).trim({ threshold: 24 }).ensureAlpha();
  const { data, info } = await trimmed.raw().toBuffer({ resolveWithObject: true });

  removeBackground(data, info.width, info.height);

  await writePng(data, info.width, info.height, OUTPUT_FULL);

  const markBottom = findMarkBottom(data, info.width, info.height);
  const markHeight = markBottom;
  const markData = Buffer.alloc(info.width * markHeight * 4);
  data.copy(markData, 0, 0, markData.length);

  await writePng(markData, info.width, markHeight, OUTPUT_MARK);

  const fullMeta = await sharp(OUTPUT_FULL).metadata();
  const markMeta = await sharp(OUTPUT_MARK).metadata();
  console.log(`Wrote ${OUTPUT_FULL} (${fullMeta.width}x${fullMeta.height})`);
  console.log(`Wrote ${OUTPUT_MARK} (${markMeta.width}x${markMeta.height})`);
}

processLogo().catch((error) => {
  console.error(error);
  process.exit(1);
});
