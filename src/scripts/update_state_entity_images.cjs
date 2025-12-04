//@ts-check

const sharp = require("sharp");
const fs = require("node:fs");

const remoteImagesBaseUrl = "https://stateentityprofile.ca.gov/Uploads/";
const localImagesBasePath = "./src/images/sep/";

const agencyData =
  require("../../.cache/eleventy-fetch-214800724b89a699fb81d3366f424c.json").Data;
const serviceData =
  require("../../.cache/eleventy-fetch-e4eda45ed3541c71e73bc83a531e83.json").Data;

// Good quality WebP for web
/** @type {sharp.WebpOptions} */
const webpoptions = {
  quality: 50, // 0 (lowest) to 100 (highest)
  effort: 6, // 0 (fastest) to 6 (slowest)
  alphaQuality: 50, // 0 (lowest) to 100 (highest),
  lossless: false,
  nearLossless: false,
  smartSubsample: false,
  force: true
};

/** @type {sharp.ResizeOptions} */
const serviceResizeOptions = {
  // center and crop to square
  width: 300,
  height: 300,
  withoutEnlargement: true // Don't add pixels to small images
};

/** @type {sharp.ResizeOptions} */
const agencyResizeOptions = {
  // unlimited height, max width 270
  width: 270,
  withoutEnlargement: true // Don't add pixels to small images
};

const fetchAndProcessImage = async (
  /** @type {string} */ file,
  /** @type {sharp.ResizeOptions} */ resizeOptions
) => {
  const outputPath = `${localImagesBasePath}/${file}`.replace(
    /\.(png|jpg|jpeg|gif)$/i,
    ".webp"
  );
  try {
    // skip if file already exists
    if (fs.existsSync(outputPath)) {
      return;
    }

    const res = await fetch(remoteImagesBaseUrl + file);
    if (!res.ok) throw new Error(`Failed to fetch image: ${res.statusText}`);
    console.log(`Processing image: ${file}`);
    const buffer = await res.arrayBuffer();
    return await sharp(Buffer.from(buffer))
      .webp(webpoptions)
      .resize(resizeOptions)
      .toFile(outputPath);
  } catch (err) {
    console.error(`Error processing image`, err);
  }
};

const processImages = async () => {
  /** @type {Promise<any>[]} */
  const threadingTasks = [];

  agencyData.forEach(agency => {
    if (agency.LogoUrl) {
      threadingTasks.push(
        fetchAndProcessImage(agency.LogoUrl, agencyResizeOptions)
      );
    }
  });

  serviceData.forEach(service => {
    if (service.ImageUrl) {
      threadingTasks.push(
        fetchAndProcessImage(service.ImageUrl, serviceResizeOptions)
      );
    }
  });

  await Promise.all(threadingTasks);
};

(async () => {
  console.log("Processing images...");
  console.time("Done");
  await processImages();
  console.timeEnd("Done");
})();
