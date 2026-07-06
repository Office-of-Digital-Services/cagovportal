//@ts-check

import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

const AIRTABLE_BASE = "appqN4fe2lK8xlNqp";

const TABLES = [
  {
    tableId: "tbl5wfeJJ4F7FZ837",
    outFile: "categories.json"
  },
  {
    tableId: "tbl6JAo9evMInWiKC",
    outFile: "topics.json"
  },
  {
    tableId: "tblSOXHg0SEUMrnHv",
    outFile: "subtopics.json"
  },
  {
    tableId: "tblS8RYo4FSqmONyu",
    outFile: "services.json"
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
 */
async function fetchAllRecords(tableId, apiKey) {
  /** @type {AirtableRecord[]} */
  let all = [];

  /** @type {string | undefined} */
  let offset = undefined;

  do {
    const url = new URL(
      `https://api.airtable.com/v0/${AIRTABLE_BASE}/${tableId}`
    );
    url.searchParams.set("pageSize", "100");
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
 * Write JSON to disk
 * @param {string} filePath
 * @param {any} data
 */
function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`✅ Saved → ${filePath}`);
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

  console.log("🔎 Fetching Airtable tables with pagination…");

  try {
    for (const { tableId, outFile } of TABLES) {
      console.log(`📄 Fetching table for: ${outFile}`);

      const records = await fetchAllRecords(tableId, apiKey);

      const outputPath = path.resolve(`src/_data/service_finder/${outFile}`);
      writeJson(outputPath, records);
    }
  } catch (err) {
    console.error("❌ Error fetching Airtable data:");
    console.error(err);
    process.exit(1);
  }
}

updateServiceFinderData();
