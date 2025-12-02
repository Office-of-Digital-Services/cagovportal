//@ts-check

const sharp = require("sharp");
const fs = require("node:fs");

const remoteImagesBaseUrl = "https://stateentityprofile.ca.gov/Uploads/";
const localImagesBasePath = "./src/images/sep/";

//const imagesFolder = "./src/images/sep/";
const config = require("./update_state_entity_images.config.json");

const agencyData =
  require("../../.cache/eleventy-fetch-214800724b89a699fb81d3366f424c.json").Data;
const serviceData =
  require("../../.cache/eleventy-fetch-e4eda45ed3541c71e73bc83a531e83.json").Data;

const processImages = async () => {
  updateConfig();

  /** @type {Promise<any>[]} */
  let threadingTasks = [];

  config.Agencies.forEach(agency => {
    if (agency.LogoUrl) {
      const fullLogoUrl = `${remoteImagesBaseUrl}${agency.LogoUrl}`;
      const outputPath = `${localImagesBasePath}${agency.AgencyID}/${agency.LogoUrl}`;

      // Ensure output directory exists
      fs.mkdirSync(`${localImagesBasePath}${agency.AgencyID}`, {
        recursive: true
      });

      threadingTasks.push(
        fetch(fullLogoUrl)
          .then(res => {
            if (!res.ok)
              throw new Error(`Failed to fetch image: ${res.statusText}`);
            return res.arrayBuffer();
          })
          .then(buffer =>
            sharp(Buffer.from(buffer)).resize(270).toFile(outputPath)
          )
          .catch(err => {
            console.error(
              `Error processing image for AgencyID ${agency.AgencyID}:`,
              err
            );
          })
      );
    }
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
