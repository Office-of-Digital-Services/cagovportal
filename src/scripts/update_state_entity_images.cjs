//@ts-check

const sharp = require("sharp");
const fs = require("node:fs");

const remoteImagesBaseUrl = "https://stateentityprofile.ca.gov/Uploads/";
const localImagesBasePath = "./src/images/sep/";

//const imagesFolder = "./src/images/sep/";
const config = require("./update_state_entity_images.config.json");

const devFileLimit = 3000;

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

    const res = await fetch(`${remoteImagesBaseUrl}${file}`);
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
  updateConfig();

  /** @type {Promise<any>[]} */
  let threadingTasks = [];

  let fileCount = 0;

  config.Agencies.forEach(agency => {
    if (fileCount++ >= devFileLimit) return;

    if (agency.LogoUrl) {
      threadingTasks.push(
        fetchAndProcessImage(agency.LogoUrl, agencyResizeOptions)
      );
    }
    agency.Services?.forEach(service => {
      if (service.ImageUrl) {
        threadingTasks.push(
          fetchAndProcessImage(service.ImageUrl, serviceResizeOptions)
        );
      }
    });
  });

  await Promise.all(threadingTasks);
};

const updateConfig = () => {
  agencyData.forEach(agency => {
    // Check if agency is in config, if not, add it
    let agencyConfig = config.Agencies.find(
      a => a.AgencyID === agency.AgencyId
    );
    if (!agencyConfig) {
      agencyConfig = { AgencyID: agency.AgencyId, LogoUrl: null };
      config.Agencies.push(agencyConfig);
    }
    agencyConfig.LogoUrl = agency.LogoUrl;
  });

  // Sort config agencies by AgencyID
  config.Agencies.sort((a, b) => a.AgencyID - b.AgencyID);

  // Remove agencies from config that are no longer in agencyData
  // Filter configAgencies to only include agencies present in agencyData
  const agencyIds = new Set(agencyData.map(a => a.AgencyId));
  config.Agencies = config.Agencies.filter(a => agencyIds.has(a.AgencyID));

  // add services as children to their parent agencies
  config.Agencies.forEach(agencyConfig => {
    const filteredServices = serviceData.filter(
      s => s.AgencyId === agencyConfig.AgencyID
    );

    let agencyConfigServices = agencyConfig.Services || [];

    filteredServices.forEach(service => {
      // Check if service is in config, if not, add it
      let selectedService = agencyConfigServices.find(
        s => s.ServiceId === service.ServiceId
      );

      if (!selectedService) {
        selectedService = { ServiceId: service.ServiceId, ImageUrl: null };
        agencyConfigServices.push(selectedService);
      }

      selectedService.ImageUrl = service.ImageUrl;
    });

    // Sort config agencies by AgencyID
    agencyConfigServices.sort((a, b) => a.ServiceId - b.ServiceId);

    // Remove services from config that are no longer in agencyData
    const serviceIds = new Set(agencyConfigServices.map(a => a.ServiceId));
    agencyConfigServices = agencyConfigServices.filter(s =>
      serviceIds.has(s.ServiceId)
    );

    if (agencyConfigServices.length === 0) {
      delete agencyConfig.Services;
    } else {
      agencyConfig.Services = agencyConfigServices;
    }
  });

  // resave the config file
  fs.writeFileSync(
    "./src/scripts/update_state_entity_images.config.json",
    JSON.stringify(config, null, 2)
  );
};

(async () => {
  console.log("Processing images...");
  console.time("Done");
  await processImages();
  console.timeEnd("Done");
})();
