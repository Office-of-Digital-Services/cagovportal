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

/**
 * @typedef TableConfig
 * @property {string} tableId
 * @property {string} outFile
 * @property {string[]} fields
 * @property {string} sort
 */

/** @type {TableConfig[]} */
const TABLES = [
  {
    tableId: "tbl5wfeJJ4F7FZ837",
    outFile: "categories.json",
    fields: ["fldxNZIXYjgY1WAC3"],
    sort: "fldLGhp1pSqhC8J35"
  },
  {
    tableId: "tbl6JAo9evMInWiKC",
    outFile: "topics.json",
    fields: [
      "fldH5rtK0bKJLPAs5",
      "fldpGDExgeMe4EKXW",
      "fld7M2nfLHMr0QKMx",
      "fldtbJV9XVYXI2yre"
    ],
    sort: "fldP1fFOFExZxExi5"
  },
  {
    tableId: "tblSOXHg0SEUMrnHv",
    outFile: "subtopics.json",
    fields: [
      "fldOB4zddd8wX5TLE",
      "fldzSlHGqVTQDZArF",
      "fldyfIW0A6dIYCq9f",
      "fldyJgF4eUXCp4cIs"
    ],
    sort: "fldTElWehFTps2yJp"
  },
  {
    tableId: "tblS8RYo4FSqmONyu",
    outFile: "services.json",
    fields: ["fldOFxDkMWsQIjA1S", "fldTefBeQ2PJgm4N4"],
    sort: "fldaKZyhD3cAgqfj6"
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
    url.searchParams.set("pageSize", "100");

    // Add field filters if provided
    for (const f of tableConfig.fields) {
      url.searchParams.append("fields[]", f);
    }

    // Add sort if provided
    if (tableConfig.sort) {
      url.searchParams.append("sort[0][field]", tableConfig.sort);
      url.searchParams.append("sort[0][direction]", "asc");
    }

    if (offset) url.searchParams.set("offset", offset);

    const response = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${apiKey}` }
    });

    if (!response.ok) {
      throw new Error(
        `Airtable request failed (${tableConfig.tableId}): ${response.status} ${response.statusText}`
      );
    }

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
        console.log(`📄 Fetching table for: ${tableConfig.outFile}`);

        const records = await fetchAllRecords(tableConfig, apiKey);

        const flattenedRecords = records.map(record => {
          const flattened = /** @type {{id: string, [key: string]: any}} */ ({
            id: record.id
          });

          // Copy all of the record.fields into flattened
          Object.assign(flattened, record.fields);

          return flattened;
        });

        const outputPath = path.resolve(
          `src/_data/service_finder/${tableConfig.outFile}`
        );
        writeJson(outputPath, flattenedRecords);
      })
    );
  } catch (err) {
    console.error("❌ Error fetching Airtable data:");
    console.error(err);
  }
}

updateServiceFinderData();
