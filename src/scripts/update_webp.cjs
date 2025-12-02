//@ts-check

const sharp = require("sharp");
const fs = require("node:fs");

const imagesFolder = "./src/images/";
const config = require("./update_webp.config.json");

const shouldExclude = (/** @type {string} */ file) => {
  return config.exclude.some(pattern => file.includes(pattern));
};

const processImages = async () => {
  const files = fs
    .readdirSync(imagesFolder)
    .filter(file => file.toLowerCase().endsWith(".png"))
    .filter(file => !shouldExclude(file)); // apply exclusion

  // Map each file to a promise
  const tasks = files.map(async file => {
    const filePath = imagesFolder + file;
    const outputFilePath = filePath.replace(/\.png$/i, ".webp");

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

    await sharp(filePath).webp(webpoptions).toFile(outputFilePath);
    return console.log(`Converted: ${file}`);
  });

  // Run them all in parallel
  await Promise.all(tasks);

  // run them sequentially
  // for (const task of tasks) {
  //   await task;
  // }

  console.log(`${files.length} images processed.`);
};

(async () => {
  console.log("Processing images...");
  console.time("Done");
  await processImages();
  console.timeEnd("Done");
})();
