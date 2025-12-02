//@ts-check

//const sharp = require("sharp");
const fs = require("node:fs");

//const imagesFolder = "./src/images/sep/";
const config = require("./update_state_entity_images.config.json");

const agencyData =
  require("../../.cache/eleventy-fetch-214800724b89a699fb81d3366f424c.json").Data;
const serviceData =
  require("../../.cache/eleventy-fetch-e4eda45ed3541c71e73bc83a531e83.json").Data;

const processImages = async () => {
  agencyData.forEach(agency => {
    // Check if agency is in config, if not, add it
    const agencyConfig = config.Agencies.find(
      a => a.AgencyID === agency.AgencyId
    );
    if (!agencyConfig) {
      config.Agencies.push({
        AgencyID: agency.AgencyId,
        LogoUrl: agency.LogoUrl || null,
        Services: []
      });
    }
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

    console.log(
      filteredServices.length +
        " services found for agency " +
        agencyConfig.AgencyID
    );

    agencyConfig.Services = []; // reset services to avoid duplicates

    filteredServices.forEach(service => {
      // Check if service is in config, if not, add it
      //if (!agencyConfig.Services.find(s => s.ServiceId === service.ServiceId)) {
      agencyConfig.Services.push({
        ServiceID: service.ServiceId,
        ImageUrl: service.ImageUrl || null
      });
      //}
    });

    // Sort config agencies by AgencyID
    agencyConfig.Services.sort((a, b) => a.ServiceID - b.ServiceID);
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
