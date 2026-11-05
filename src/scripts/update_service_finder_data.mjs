//@ts-check

import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import { fetchAllRecords, writeJson } from "./lib/airtable.mjs";
import serviceFinderData from "../airTable/load_service_finder_data.cjs";

dotenv.config({ quiet: true });

/** @type {import("./lib/airtable.mjs").TableConfig[]} */
const tables = [
  {
    tableId: "tbl5wfeJJ4F7FZ837",
    name: "categories",
    fields: ["Name"],
    sort: ["Sort"]
  },
  {
    tableId: "tbl6JAo9evMInWiKC",
    name: "topics",
    fields: ["Topic ID", "Category", "Name", "Caption"],
    sort: ["Category", "Sort"]
  },
  {
    tableId: "tblSOXHg0SEUMrnHv",
    name: "subtopics",
    fields: ["Subtopic ID", "Name", "Topic"],
    sort: ["Topic", "Sort"]
  },
  {
    tableId: "tblS8RYo4FSqmONyu",
    name: "services",
    fields: ["ServiceId", "Short description", "Service Subtopics"],
    sort: ["Service Name"],
    filterByFormula: "NOT({Service Name} = '')"
  }
];

const apiKey = process.env.AIRTABLE_API_KEY;
if (!apiKey) {
  console.warn(
    "AIRTABLE_API_KEY missing - using checked-in service finder Airtable snapshots."
  );
  serviceFinderData.loadServiceFinderData();
} else {
  /** @type {Record<string, Record<string, unknown>[]>} */
  const snapshots = {};
  for (const table of tables) {
    console.info(`Fetching service finder ${table.name}`);
    const records = await fetchAllRecords(table, apiKey);
    snapshots[table.name] = records.map(record =>
      Object.fromEntries(
        Object.entries({ ...record.fields, id: record.id }).sort(([a], [b]) =>
          a.localeCompare(b)
        )
      )
    );
  }

  serviceFinderData.normalizeServiceFinderData(snapshots);
  for (const table of tables)
    writeJson(
      fileURLToPath(
        new URL(
          `../airTable/data/service_finder_${table.name}.json`,
          import.meta.url
        )
      ),
      snapshots[table.name]
    );
}
