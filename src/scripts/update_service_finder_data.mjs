//@ts-check

import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import { fetchAllRecords, writeJson } from "./lib/airtable.mjs";
import serviceFinderData from "../airTable/load_data.cjs";

dotenv.config({ quiet: true });

/** @type {import("./lib/airtable.mjs").TableConfig[]} */
const tables = [
  {
    tableId: "tbl5wfeJJ4F7FZ837",
    name: "categories",
    fields: ["Category ID", "Name"],
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
  await Promise.all(
    tables.map(async table => {
      console.info(`Fetching service finder ${table.name}`);
      const records = await fetchAllRecords(table, apiKey);
      snapshots[table.name] = records.map(record =>
        Object.fromEntries(
          Object.entries({ ...record.fields, id: record.id }).sort(([a], [b]) =>
            a.localeCompare(b)
          )
        )
      );
    })
  );

  /**
   * @param {string} table
   * @param {string} field
   */
  const recordIds = (table, field) =>
    new Map(snapshots[table].map(row => [row.id, row[field]]));

  const relationships = [
    {
      table: "topics",
      field: "Category",
      ids: recordIds("categories", "Category ID")
    },
    {
      table: "subtopics",
      field: "Topic",
      ids: recordIds("topics", "Topic ID")
    },
    {
      table: "services",
      field: "Service Subtopics",
      ids: recordIds("subtopics", "Subtopic ID")
    }
  ];
  for (const { table, field, ids } of relationships)
    for (const row of snapshots[table]) {
      const links = row[field];
      if (links === undefined) continue;
      if (!Array.isArray(links))
        throw new Error(`Service finder ${row.id} has invalid ${field} links.`);
      row[field] = links.map(id => {
        const numericId = ids.get(id);
        if (typeof numericId !== "number" || !Number.isInteger(numericId))
          throw new Error(
            `Service finder ${row.id} has an unresolved ${field} link: ${id}.`
          );
        return numericId;
      });
    }

  for (const rows of Object.values(snapshots))
    for (const row of rows) delete row.id;

  for (const [table, field, key] of [
    ["topics", "Category", "Topic ID"],
    ["subtopics", "Topic", "Subtopic ID"]
  ])
    for (const row of snapshots[table]) {
      const links = row[field];
      if (!Array.isArray(links) || links.length !== 1)
        throw new Error(
          `Service finder ${table} record ${row[key]} must link to exactly one ${field}.`
        );
      row[field] = links[0];
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
