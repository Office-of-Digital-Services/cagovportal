//@ts-check

/* global base */
// `base` is the global provided by the Airtable scripting environment.
// Code published here...
// https://airtable.com/appqN4fe2lK8xlNqp/automations
// Code source: https://github.com/Office-of-Digital-Services/cagovportal/tree/main/src/airTable

const table = base.getTable("tblUY0BdXSYNUCPVt");
const keyField = "Id";
const nameField = "Question";
const apiPath =
  "https://api.stateentityprofile.ca.gov/GetFaqsByServiceIds?lang=en";

// --------------------
// FETCH API
// --------------------

const response = await fetch(apiPath, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: "[]"
});

const apiData = /** @type {{ [x: string]: any; }[]} */ (await response.json());

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

    newRecord[field] = value;
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
    let existingValue = existingRecord.getCellValue(field);

    let fieldObject = table.getField(field);
    if (fieldObject.type === "checkbox" && existingValue === null)
      existingValue = false;

    if (JSON.stringify(existingValue) !== JSON.stringify(newRecord[field])) {
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
