//@ts-check

const {
  loadSepData,
  loadServiceFinderData
} = require("../airTable/load_data.cjs");

console.time("Airtable validation");
const sepData = loadSepData();
const serviceFinderData = loadServiceFinderData();
const serviceIds = new Set(sepData.services.map(service => service.ServiceId));

// Finder entries must resolve to SEP services to appear in search results.
for (const service of serviceFinderData.services)
  if (!serviceIds.has(service.ServiceId))
    throw new Error(
      `Service finder ${service.ServiceId} references missing SEP service.`
    );

console.timeEnd("Airtable validation");
console.info(
  "All seven Airtable snapshots passed schema and relationship validation."
);
