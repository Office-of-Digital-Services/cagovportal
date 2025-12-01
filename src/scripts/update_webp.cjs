//@ts-check

const sharp = require("sharp");
const fs = require("node:fs");

const imagesFolder = "./src/images/";

const processImages = async () => {
  const files = fs
    .readdirSync(imagesFolder)
    .filter(file => file.toLowerCase().endsWith(".png"));

  // Map each file to a promise
  const tasks = files.map(file => {
    const filePath = imagesFolder + file;
    const outputFilePath = filePath.replace(/\.png$/i, ".webp");

    /** @type {sharp.WebpOptions} */
    const options = {
      quality: 75,
      effort: 5,
      lossless: false,
      nearLossless: false,
      smartSubsample: false,
      force: true
    };

    return sharp(filePath)
      .webp(options)
      .toFile(outputFilePath)
      .then(() => console.log(`Converted: ${file}`));
  });

  // Run them all in parallel
  await Promise.all(tasks);

  // run them sequentially instead (uncomment to use this approach)
  //for (const task of tasks) {
  //  await task;
  //}
};

(async () => {
  console.log("Processing images...");
  console.time("Done");
  await processImages();
  console.timeEnd("Done");
})();
