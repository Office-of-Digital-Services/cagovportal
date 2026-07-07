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

const TABLES = [
  {
    tableId: "tbl5wfeJJ4F7FZ837",
    outFile: "categories.json",
    fields: ["fldxNZIXYjgY1WAC3"]
  },
  {
    tableId: "tbl6JAo9evMInWiKC",
    outFile: "topics.json",
    fields: [
      "fldH5rtK0bKJLPAs5",
      "fldpGDExgeMe4EKXW",
      "fld7M2nfLHMr0QKMx",
      "fldtbJV9XVYXI2yre"
    ]
  },
  {
    tableId: "tblSOXHg0SEUMrnHv",
    outFile: "subtopics.json",
    fields: [
      "fldOB4zddd8wX5TLE",
      "fldzSlHGqVTQDZArF",
      "fldyfIW0A6dIYCq9f",
      "fldyJgF4eUXCp4cIs"
    ]
  },
  {
    tableId: "tblS8RYo4FSqmONyu",
    outFile: "services.json",
    fields: ["fldOFxDkMWsQIjA1S", "fldTefBeQ2PJgm4N4"]
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
 * @param {string} tableId
 * @param {string} apiKey
 * @param {string[]} [fields]
 */
async function fetchAllRecords(tableId, apiKey, fields = []) {
  /** @type {AirtableRecord[]} */
  let all = [];

  /** @type {string | undefined} */
  let offset = undefined;

  do {
    const url = new URL(
      `https://api.airtable.com/v0/${AIRTABLE_BASE}/${tableId}`
    );

    url.searchParams.set("returnFieldsByFieldId", "true");
    url.searchParams.set("pageSize", "100");

    // Add field filters if provided
    for (const f of fields) {
      url.searchParams.append("fields[]", f);
    }

    if (offset) url.searchParams.set("offset", offset);

    const response = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${apiKey}` }
    });

    if (!response.ok) {
      throw new Error(
        `Airtable request failed (${tableId}): ${response.status} ${response.statusText}`
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
      TABLES.map(async ({ tableId, outFile, fields }) => {
        console.log(`📄 Fetching table for: ${outFile}`);

        const records = await fetchAllRecords(tableId, apiKey, fields || []);

        const flattenedRecords = records.map(record => {
          const flattened = /** @type {{id: string, [key: string]: any}} */ ({
            id: record.id
          });

          for (const fieldId of fields) {
            flattened[fieldId] = record.fields[fieldId] || null;
          }

          return flattened;
        });

        const outputPath = path.resolve(`src/_data/service_finder/${outFile}`);
        writeJson(outputPath, flattenedRecords);
      })
    );
  } catch (err) {
    console.error("❌ Error fetching Airtable data:");
    console.error(err);
  }
}

updateServiceFinderData();
