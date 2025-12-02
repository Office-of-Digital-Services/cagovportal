//@ts-check

//const sharp = require("sharp");
const fs = require("node:fs");

//const imagesFolder = "./src/images/sep/";
const config = require("./update_state_entity_images.config.json");
const configAgencies = config.agencies;

const agencyData =
  require("../../.cache/eleventy-fetch-214800724b89a699fb81d3366f424c.json").Data;
const serviceData =
  require("../../.cache/eleventy-fetch-e4eda45ed3541c71e73bc83a531e83.json").Data;

const processImages = async () => {
  agencyData.forEach(agency => {
    // Check if agency is in config, if not, add it
    const agencyConfig = configAgencies.find(
      a => a.AgencyID === agency.AgencyId
    );
    if (!agencyConfig) {
      configAgencies.push({
        AgencyID: agency.AgencyId,
        LogoUrl: agency.LogoUrl || null
      });
    }
  });

  // Sort config agencies by AgencyID
  configAgencies.sort((a, b) => a.AgencyID - b.AgencyID);

  // Remove agencies from config that are no longer in agencyData
  // Filter configAgencies to only include agencies present in agencyData
  const agencyIds = new Set(agencyData.map(a => a.AgencyId));
  config.agencies = configAgencies.filter(a => agencyIds.has(a.AgencyID));

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
