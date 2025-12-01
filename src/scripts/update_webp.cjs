//@ts-check

const sharp = require("sharp");
const fs = require("node:fs");

console.log(`Processing images...`);
console.time("Done");

const imagesFolder = "./src/images/";

const processImages = async () => {
  // get all files in imagesFolder
  const files = fs
    .readdirSync(imagesFolder)
    .filter(file => file.toLowerCase().endsWith(".png"));

  for (const file of files) {
    const filePath = imagesFolder + file;
    const outputFilePath = filePath.replace(/\.png$/i, ".webp");

    await sharp(filePath)
      .webp({ quality: 75 }) // adjust quality as needed
      .toFile(outputFilePath);

    console.log(`Converted: ${file} → ${outputFilePath}`);
  }
};

(async () => {
  await processImages();

  console.timeEnd("Done");
  process.exit();
})();
