//@ts-check

import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

const AIRTABLE_BASE = "appqN4fe2lK8xlNqp";

const TABLE_CATEGORY = "tbl5wfeJJ4F7FZ837";
const TABLE_TOPIC = "tbl6JAo9evMInWiKC";
const TABLE_SUBTOPIC = "tblSOXHg0SEUMrnHv";
const TABLE_SERVICES = "tblS8RYo4FSqmONyu";

const OUT_CATEGORY = path.resolve("src/_data/service_finder/categories.json");
const OUT_TOPICS = path.resolve("src/_data/service_finder/topics.json");
const OUT_SUBTOPICS = path.resolve("src/_data/service_finder/subtopics.json");
const OUT_SERVICES = path.resolve("src/_data/service_finder/services.json");

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
    const [categories, topics, subtopics, services] = await Promise.all([
      fetchAllRecords(TABLE_CATEGORY, apiKey),
      fetchAllRecords(TABLE_TOPIC, apiKey),
      fetchAllRecords(TABLE_SUBTOPIC, apiKey),
      fetchAllRecords(TABLE_SERVICES, apiKey)
    ]);

    writeJson(OUT_CATEGORY, categories);
    writeJson(OUT_TOPICS, topics);
    writeJson(OUT_SUBTOPICS, subtopics);
    writeJson(OUT_SERVICES, services);
  } catch (err) {
    console.error("❌ Error fetching Airtable data:");
    console.error(err);
    process.exit(1);
  }
}

updateServiceFinderData();
