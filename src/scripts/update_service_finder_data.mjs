//@ts-check

// API Reference
// https://airtable.com/developers/web/api/list-records
// Token Creation
// https://airtable.com/create/tokens

import fs from "node:fs";
import path from "node:path";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

const AIRTABLE_BASE = "appqN4fe2lK8xlNqp";
const baseUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE}`;
const outputBasePath = "src/_data/service_finder";

/**
 * @typedef TableConfig
 * @property {string} tableId
 * @property {string} name
 * @property {string[]} fields
 * @property {string[]} sort
 * @property {{[key: string]: string}} fieldMapping
 */

/** @type {TableConfig[]} */
const TABLES = [
  {
    tableId: "tbl5wfeJJ4F7FZ837",
    name: "categories",
    fields: ["name"],
    sort: ["fldLGhp1pSqhC8J35"], //sort
    fieldMapping: {
      name: "fldxNZIXYjgY1WAC3"
    }
  },
  {
    tableId: "tbl6JAo9evMInWiKC",
    name: "topics",
    fields: ["topicId", "category", "name", "caption"],
    sort: ["fldpGDExgeMe4EKXW", "fldP1fFOFExZxExi5"], //category, sort
    fieldMapping: {
      name: "fld7M2nfLHMr0QKMx",
      caption: "fldtbJV9XVYXI2yre",
      category: "fldpGDExgeMe4EKXW",
      topicId: "fldH5rtK0bKJLPAs5"
    }
  },
  {
    tableId: "tblSOXHg0SEUMrnHv",
    name: "subtopics",
    fields: ["subtopicId", "name", "services", "topic"],
    sort: ["fldyJgF4eUXCp4cIs", "fldTElWehFTps2yJp"], //topic, sort
    fieldMapping: {
      name: "fldzSlHGqVTQDZArF",
      services: "fldyfIW0A6dIYCq9f",
      subtopicId: "fldOB4zddd8wX5TLE",
      topic: "fldyJgF4eUXCp4cIs"
    }
  },
  {
    tableId: "tblS8RYo4FSqmONyu",
    name: "services",
    fields: ["serviceId"],
    sort: ["fldaKZyhD3cAgqfj6"], //sort
    fieldMapping: {
      serviceId: "fldTefBeQ2PJgm4N4"
    }
  }
];

/**
 * @typedef AirtableRecord
 * @property {string} id
 * @property {string} createdTime
 * @property {{[key: string]: any}} fields
 */

/**
 * Fetch ALL records from an Airtable table using pagination.
 * @param {TableConfig} tableConfig
 * @param {string} apiKey
 */
async function fetchAllRecords(tableConfig, apiKey) {
  /** @type {AirtableRecord[]} */
  let all = [];

  /** @type {string | undefined} */
  let offset = undefined;

  do {
    const url = new URL(`${baseUrl}/${tableConfig.tableId}`);

    url.searchParams.set("returnFieldsByFieldId", "true");

    // Add field filters if provided
    tableConfig.fields.forEach(f => {
      url.searchParams.append("fields[]", tableConfig.fieldMapping[f]);
    });

    // Add sort if provided
    tableConfig.sort.forEach((sortField, index) => {
      url.searchParams.append(`sort[${index}][field]`, sortField);
      url.searchParams.append(`sort[${index}][direction]`, "asc");
    });

    if (offset) url.searchParams.set("offset", offset);

    const response = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${apiKey}` }
    });

    if (!response.ok)
      throw new Error(
        `Airtable request failed (${tableConfig.tableId}): ${response.status} ${response.statusText}`
      );

    const json = /** @type {{records: AirtableRecord[], offset?: string}} */ (
      await response.json()
    );

    all = all.concat(json.records);
    offset = json.offset;
  } while (offset);

  return all;
}

/**
 * Write JSON to disk only if content has changed
 * @param {string} filePath
 * @param {any} data
 */
function writeJson(filePath, data) {
  const newContent = JSON.stringify(data, null, 2);

  if (fs.existsSync(filePath)) {
    const existingContent = fs.readFileSync(filePath, "utf-8");
    if (existingContent === newContent) return;
  }

  fs.writeFileSync(filePath, newContent);
  console.info(`✅ Saved → ${filePath}`);
}

/**
 * Main update function
 */
async function updateServiceFinderData() {
  const apiKey = process.env.AIRTABLE_API_KEY;
  if (!apiKey) {
    console.warn("⚠️ AIRTABLE_API_KEY missing — skipping Airtable fetch.");
    return;
  }

  try {
    await Promise.all(
      TABLES.map(async tableConfig => {
        console.log(`📄 Fetching table for: ${tableConfig.name}`);

        const records = await fetchAllRecords(tableConfig, apiKey);

        const flattenedRecords = records.map(record => {
          const flattened = /** @type {{id: string, [key: string]: any}} */ ({
            id: record.id
          });

          // Copy all of the record.fields into flattened
          Object.assign(flattened, record.fields);

          // Use the field mapping to rename fields
          for (const [key, airtableFieldId] of Object.entries(
            tableConfig.fieldMapping
          ))
            if (flattened[airtableFieldId] !== undefined) {
              flattened[key] = flattened[airtableFieldId];
              delete flattened[airtableFieldId];
            }

          return flattened;
        });

        const outputPath = path.resolve(
          `${outputBasePath}/${tableConfig.name}.json`
        );
        writeJson(outputPath, flattenedRecords);
      })
    );
  } catch (err) {
    console.error("❌ Error fetching Airtable data:");
    console.error(err);
    //process.exit(1);
  }
}

updateServiceFinderData();
