//@ts-check

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import sepData from "../airTable/load_data.cjs";

const remoteImagesBaseUrl = "https://stateentityprofile.ca.gov/Uploads/";
const imagesDirectory = fileURLToPath(
  new URL("../images/sep/", import.meta.url)
);
const { agencies, services } = sepData.loadSepData();

/** @type {import("sharp").WebpOptions} */
const webpOptions = {
  quality: 50,
  effort: 6,
  alphaQuality: 50,
  lossless: false,
  nearLossless: false,
  smartSubsample: false,
  force: true
};

/** @type {import("sharp").ResizeOptions} */
const agencyResizeOptions = { width: 270, withoutEnlargement: true };
/** @type {import("sharp").ResizeOptions} */
const serviceResizeOptions = {
  width: 300,
  height: 300,
  withoutEnlargement: true
};

const images = [
  ...agencies.map(agency => ({
    filename: agency.LogoUrl,
    resizeOptions: agencyResizeOptions
  })),
  ...services.map(service => ({
    filename: service.ImageUrl,
    resizeOptions: serviceResizeOptions
  }))
]
  .filter(image => image.filename)
  .map(image => {
    const { filename } = image;
    if (
      typeof filename !== "string" ||
      filename === "." ||
      filename === ".." ||
      /[/\\]/.test(filename)
    )
      throw new Error(`Invalid SEP image filename: ${filename}`);

    return {
      filename,
      resizeOptions: image.resizeOptions,
      outputFilename: filename.replace(/\.(png|jpg|jpeg|gif)$/i, ".webp")
    };
  });

fs.mkdirSync(imagesDirectory, { recursive: true });
const existingImages = new Set(
  fs
    .readdirSync(imagesDirectory, { withFileTypes: true })
    .filter(entry => entry.isFile())
    .map(entry => entry.name)
);
const expectedImages = new Set(images.map(image => image.outputFilename));
let processedCount = 0;

for (const image of images) {
  if (existingImages.has(image.outputFilename)) continue;

  console.info(`Adding SEP image: ${image.filename}`);
  const response = await fetch(remoteImagesBaseUrl + image.filename);
  if (!response.ok)
    throw new Error(
      `Failed to fetch SEP image ${image.filename}: ${response.status} ${response.statusText}`
    );

  const buffer = await response.arrayBuffer();
  const converted = await sharp(Buffer.from(buffer))
    .webp(webpOptions)
    .resize(image.resizeOptions)
    .toBuffer();
  fs.writeFileSync(path.join(imagesDirectory, image.outputFilename), converted);
  existingImages.add(image.outputFilename);
  processedCount++;
}

for (const filename of existingImages)
  if (!expectedImages.has(filename)) {
    console.info(`Deleting extra SEP image: ${filename}`);
    fs.unlinkSync(path.join(imagesDirectory, filename));
  }

console.info(`Added ${processedCount} missing SEP images.`);
