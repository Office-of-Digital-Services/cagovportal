//@ts-check

/* global base */
// `base` is the global provided by the Airtable scripting environment.
// Code published here...
// https://airtable.com/appqN4fe2lK8xlNqp/wflPLCCqKM2wsv8lV/waclFhHp8lKE3tlLZ

const table = base.getTable("tblZwLzCmz3ulSEII");
const keyField = "ServiceId";
const nameField = "ServiceName";
const apiPath =
  "https://api.stateentityprofile.ca.gov/api/Services/Get?page=0&pageSize=0&lang=en";

// --------------------
// FETCH API
// --------------------

const response = await fetch(apiPath, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
});

const apiData = /** @type {{ [x: string]: any; }[]} */ (
  (await response.json()).Data
);

// --------------------
// FIELD CHECK
// --------------------

const airtableFields = new Set(table.fields.map(f => f.name));

const apiFields = new Set();

for (const row of apiData)
  Object.keys(row).forEach(field => apiFields.add(field));

const missingFields = [...apiFields].filter(
  field => !airtableFields.has(field)
);

if (missingFields.length)
  throw new Error(`Missing Airtable fields: ${missingFields.join(", ")}`);

// --------------------
// LOAD EXISTING RECORDS
// --------------------

const query = await table.selectRecordsAsync();

const existingMap = new Map();

for (const record of query.records)
  existingMap.set(record.getCellValue(keyField), record);

// --------------------
// DELETE STALE RECORDS
// --------------------

const apiIds = new Set(apiData.map(item => item[keyField]).filter(Boolean));

const recordsToDelete = query.records.filter(record => {
  const keyValue = record.getCellValue(keyField);
  return keyValue && !apiIds.has(keyValue);
});

for (const record of recordsToDelete) {
  console.log(
    `DELETE: ${record.getCellValue(nameField)} (${record.getCellValue(keyField)})`
  );

  await table.deleteRecordAsync(record.id);
}

// --------------------
// NORMALIZATION
// --------------------

/**
 * @param {null | undefined} value
 */
function normalize(value) {
  if (value === undefined || value === null) return null;

  if (Array.isArray(value))
    return [...value].sort((a, b) =>
      JSON.stringify(a).localeCompare(JSON.stringify(b))
    );

  if (typeof value === "object") return JSON.parse(JSON.stringify(value));

  return value;
}

// --------------------
// SYNC
// --------------------

for (const item of apiData) {
  const keyValue = item[keyField];
  const nameValue = item[nameField];

  const existingRecord = existingMap.get(keyValue);

  // Build Airtable payload
  const newRecord = /** @type {Record<string, any>} */ ({});

  for (const [field, value] of Object.entries(item)) {
    // Ignore fields that don't exist yet
    if (!airtableFields.has(field)) continue;

    newRecord[field] = value || "";
  }

  // INSERT
  if (!existingRecord) {
    console.log(`ADD: ${nameValue}`);

    await table.createRecordAsync(newRecord);

    continue;
  }

  // COMPARE
  let changed = false;

  for (const field of Object.keys(newRecord)) {
    let existingValue = existingRecord.getCellValue(field) || "";

    if (
      JSON.stringify(normalize(existingValue)) !==
      JSON.stringify(normalize(newRecord[field]))
    ) {
      changed = true;

      console.log(`CHANGE: ${nameValue} | ${field}`);

      break;
    }
  }

  // UPDATE
  if (changed) {
    console.log(`UPDATE: ${nameValue}`);

    await table.updateRecordAsync(existingRecord.id, newRecord);
  }
}
