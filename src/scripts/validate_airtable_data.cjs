//@ts-check

const {
  loadSepData,
  loadServiceFinderData
} = require("../airTable/load_data.cjs");

console.time("Airtable validation");
loadSepData();
loadServiceFinderData();
console.timeEnd("Airtable validation");
console.info(
  "All seven Airtable snapshots passed schema and relationship validation."
);
