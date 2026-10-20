//@ts-check

/* global base */
// `base` is the global provided by the Airtable scripting environment.
// Code published here...
// https://airtable.com/appqN4fe2lK8xlNqp/automations
// Code source: https://github.com/Office-of-Digital-Services/cagovportal/tree/main/src/airTable

// Target table - SEP Services
const table = base.getTable("tblae7LalCPR33qFY");

// SEP Services fields
const fldServiceId = "fldXHbEnFFLemh3wj";
const fldServiceName = "fldLO3oAvulD2gPE1";
const fldAgencyTags = "fldwBlCzHnI3491yw";
const fldServices = "fld7yHApOwqJMHMuL";
const fldAgencyId = "fldn1R2AFuLyIbFzX";
const fldDescription = "fldZ6Bw2MOW31DzFP";

const services = base.getTable("tblS8RYo4FSqmONyu");
const fldServicesServiceId = "fldTefBeQ2PJgm4N4"; // ServiceId in Services table

// Load Services table once
let servicesQuery = await services.selectRecordsAsync();

// Build O(1) lookup: ServiceId → recordId
let servicesMap = new Map();
for (let service of servicesQuery.records) {
  let serviceId = service.getCellValue(fldServicesServiceId);
  if (serviceId) servicesMap.set(serviceId, service.id);
}

// Multi-select field definition
const tagsField = table.getField(fldAgencyTags);
if (!tagsField?.options?.choices)
  throw new Error("Agency Tags field not found");

// Build a map of existing multi-select choices: name → id
const choiceMap = new Map();
for (let choice of tagsField.options.choices)
  choiceMap.set(choice.name.trim(), choice.id);

// Fetch API
let response = await fetch(
  "https://api.stateentityprofile.ca.gov/api/Services/Get?page=0&pageSize=0&lang=en",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" }
  }
);

let apiData = /** @type {{ [x: string]: any; }[]} */ (
  (await response.json()).Data
);

// Build a set of API ServiceIds
let apiIds = new Set(apiData.map(item => item.ServiceId));

// Load existing Airtable records
let existing = await table.selectRecordsAsync();

// STEP 1 — Delete records not in API
let toDelete = existing.records.filter(
  r => !apiIds.has(r.getCellValue(fldServiceId))
);

for (let record of toDelete) {
  console.log("delete", record.id);
  await table.deleteRecordAsync(record.id);
}

// STEP 2 — Build lookup of existing records by ServiceId
let existingMap = new Map();
for (let record of existing.records)
  existingMap.set(record.getCellValue(fldServiceId), record);

// STEP 3 — Insert or update
for (let item of apiData) {
  // Normalize API fields
  let serviceId = item.ServiceId;
  let serviceName = item.ServiceName || "";

  // Parse tags from API
  let rawTags = item.AgencyTags || "";
  let tagNames = rawTags
    .split("|")
    .map(t => t.trim())
    .filter(t => t.length > 0);

  // Convert tag names → Airtable choice IDs
  let tagIds = tagNames
    .map(tagName => choiceMap.get(tagName))
    .filter(Boolean)
    .map(id => ({ id }));

  // Sort tag IDs for stable diffing
  tagIds.sort((a, b) => a.id.localeCompare(b.id));

  // Resolve linked Services record
  let linkedServiceId = servicesMap.get(serviceId);

  // If service is not there, add it
  if (!linkedServiceId) {
    linkedServiceId = await services.createRecordAsync({
      [fldServicesServiceId]: serviceId
    });

    console.log(`Adding row to Services tab`);
  }

  let linkedServices = linkedServiceId ? [{ id: linkedServiceId }] : [];

  // Build new record object
  const newRecord = {
    [fldServiceName]: serviceName,
    [fldAgencyTags]: tagIds,
    [fldServices]: linkedServices,
    [fldDescription]: item.Description || ""
  };

  let existingRecord = existingMap.get(serviceId);

  if (!existingRecord) {
    // INSERT new record
    newRecord[fldServiceId] = serviceId;
    newRecord[fldAgencyId] = item.AgencyId;

    console.log(`Adding "${serviceName}"`);
    await table.createRecordAsync(newRecord);
  } else {
    // Build stable existing JSON for diffing
    const existingJson = {
      [fldServiceName]: existingRecord.getCellValue(fldServiceName) || "",
      [fldAgencyTags]: (existingRecord.getCellValue(fldAgencyTags) || [])
        .map(x => ({ id: x.id }))
        .sort((a, b) => a.id.localeCompare(b.id)),
      [fldServices]: (existingRecord.getCellValue(fldServices) || []).map(
        x => ({ id: x.id })
      ),
      [fldDescription]: existingRecord.getCellValue(fldDescription) || ""
    };

    // Only update if something changed
    if (JSON.stringify(newRecord) !== JSON.stringify(existingJson)) {
      console.log(`Updating "${serviceName}"`);
      await table.updateRecordAsync(existingRecord.id, newRecord);
    }
  }
}
