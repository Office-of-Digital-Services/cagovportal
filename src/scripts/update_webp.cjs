//@ts-check

const sharp = require("sharp");
const fs = require("node:fs");

const imagesFolder = "./src/images/";
const config = require("./update_webp.config.json");
const pngBackupSuffix = ".backup.png";

const shouldExclude = (/** @type {string} */ file) => {
  return config.exclude.some(pattern => file.includes(pattern));
};

const processImages = async () => {
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

  // Low quality PNG for backup
  /** @type {sharp.PngOptions} */
  const pngoptions = {
    quality: 1, // 0 (lowest) to 100 (highest)
    effort: 10, // 1-10, default 7
    compressionLevel: 9, // 0 (fastest) to 9 (smallest)
    adaptiveFiltering: false, // true or false
    dither: 0, // 0.0 (none) to 1.0 (full)
    force: true // always convert to png
  };

  const files = fs
    .readdirSync(imagesFolder)
    .filter(
      file =>
        file.toLowerCase().endsWith(".png") ||
        file.toLowerCase().endsWith(".jpg")
    )
    .filter(file => !file.toLowerCase().endsWith(pngBackupSuffix)) // skip backup files
    .filter(file => !shouldExclude(file)); // apply exclusion

  // Map each file to a promise
  const tasks = files.map(async file => {
    const filePath = imagesFolder + file;
    const outputFilePath = filePath.replace(/\.(png|jpg)$/i, ".webp");

    const sharpInstance = sharp(filePath);

    await sharpInstance.webp(webpoptions).toFile(outputFilePath);
    await sharpInstance
      .png(pngoptions)
      .toFile(outputFilePath.replace(/\.webp$/i, pngBackupSuffix));
    //fs.rmSync(filePath);
    return console.log(`Converted: ${file}`);
  });

  if (tasks.length === 0) {
    console.log("No new images to process.");
    return;
  } else {
    console.log(`Processing ${tasks.length} images...`);
  }

  // Run them all in parallel
  await Promise.all(tasks);

  // run them sequentially
  // for (const task of tasks) {
  //   await task;
  // }

  console.log(`${files.length} images processed.`);
};

(async () => {
  console.time("Done");
  await processImages();
  console.timeEnd("Done");
})();
