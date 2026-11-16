//@ts-check

import { fileURLToPath } from "node:url";
import { readFile } from "node:fs/promises";
import { fetchAllRecords, writeJson } from "./lib/airtable.mjs";
import sepData from "../airTable/load_data.cjs";

/** @type {import("./lib/airtable.mjs").TableConfig[]} */
const tables = [
  {
    name: "departments",
    tableId: "tblp4lLpdJJ6ov9DR",
    view: "viwz0z4qokjvja8VU",
    sort: ["AgencyName"]
  },
  {
    name: "services",
    tableId: "tblZwLzCmz3ulSEII",
    view: "viwuyNtp20RQDOLAO",
    sort: ["AgencyName", "ServiceName"]
  },
  {
    name: "faqs",
    tableId: "tblUY0BdXSYNUCPVt",
    view: "viwSIT2P1rCRYcEW2",
    sort: ["AgencyServiceId", "SortOrder"]
  }
];

/** @param {string} apiKey */
export default async function updateSepData(apiKey) {
  /** @type {Record<string, Record<string, unknown>[]>} */
  const snapshots = {};
  await Promise.all(
    tables.map(async table => {
      console.info(`Fetching SEP ${table.name}`);
      // Use schema property names as Airtable fields so the field list has one source of truth.
      const schema = JSON.parse(
        await readFile(
          new URL(
            `../airTable/schemas/${table.name}.schema.json`,
            import.meta.url
          ),
          "utf8"
        )
      );
      const records = await fetchAllRecords(
        { ...table, fields: Object.keys(schema.items.properties) },
        apiKey
      );
      snapshots[table.name] = records.map(record =>
        Object.fromEntries(
          Object.entries(record.fields).sort(([a], [b]) => a.localeCompare(b))
        )
      );
    })
  );

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
