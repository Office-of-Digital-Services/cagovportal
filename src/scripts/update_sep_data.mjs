//@ts-check

import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import { fetchAllRecords, writeJson } from "./lib/airtable.mjs";
import sepData from "../airTable/load_sep_data.cjs";

dotenv.config({ quiet: true });

/** @type {import("./lib/airtable.mjs").TableConfig[]} */
const tables = [
  {
    name: "departments",
    tableId: "tblp4lLpdJJ6ov9DR",
    view: "viwz0z4qokjvja8VU"
  },
  {
    name: "services",
    tableId: "tblZwLzCmz3ulSEII",
    view: "viwuyNtp20RQDOLAO"
  },
  {
    name: "faqs",
    tableId: "tblUY0BdXSYNUCPVt",
    view: "viwSIT2P1rCRYcEW2"
  }
];

const apiKey = process.env.AIRTABLE_API_KEY;
if (!apiKey) {
  console.warn(
    "AIRTABLE_API_KEY missing - using checked-in SEP Airtable snapshots."
  );
  sepData.loadSepData();
} else {
  /** @type {Record<string, Record<string, unknown>[]>} */
  const snapshots = {};
  for (const table of tables) {
    console.info(`Fetching SEP ${table.name}`);
    const records = await fetchAllRecords(table, apiKey);
    snapshots[table.name] = records.map(record => ({
      ...record.fields,
      id: record.id
    }));
  }

  // Validate the complete dataset before replacing any existing snapshots.
  sepData.normalizeSepData(snapshots);
  for (const table of tables)
    writeJson(
      fileURLToPath(
        new URL(`../airTable/data/${table.name}.json`, import.meta.url)
      ),
      snapshots[table.name]
    );
}
