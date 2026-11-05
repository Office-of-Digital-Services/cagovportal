//@ts-check

import { fileURLToPath } from "node:url";
import { fetchAllRecords, writeJson } from "./lib/airtable.mjs";
import serviceFinderData from "../airTable/load_data.cjs";

/** @type {(Omit<import("./lib/airtable.mjs").TableConfig, "fields"> & { fields: Record<string, string> })[]} */
const tables = [
  {
    tableId: "tbl5wfeJJ4F7FZ837",
    name: "categories",
    fields: { CategoryId: "Category ID", Name: "Name" },
    sort: ["Sort"]
  },
  {
    tableId: "tbl6JAo9evMInWiKC",
    name: "topics",
    fields: {
      TopicId: "Topic ID",
      CategoryId: "Category ID",
      Name: "Name",
      Caption: "Caption"
    },
    sort: ["Category", "Sort"]
  },
  {
    tableId: "tblSOXHg0SEUMrnHv",
    name: "subtopics",
    fields: { SubtopicId: "Subtopic ID", Name: "Name", TopicId: "Topic ID" },
    sort: ["Topic", "Sort"]
  },
  {
    tableId: "tblS8RYo4FSqmONyu",
    name: "services",
    fields: {
      ServiceId: "ServiceId",
      ShortDescription: "Short description",
      SubtopicIds: "Subtopic IDs"
    },
    sort: ["Service Name"],
    filterByFormula: "NOT({Service Name} = '')"
  }
];

/** @param {string} apiKey */
export default async function updateServiceFinderData(apiKey) {
  /** @type {Record<string, Record<string, unknown>[]>} */
  const snapshots = {};
  // Fetch tables concurrently and map Airtable field names to saved properties.
  await Promise.all(
    tables.map(async table => {
      console.info(`Fetching service finder ${table.name}`);
      const records = await fetchAllRecords(
        {
          ...table,
          fields: Object.values(table.fields),
          sort: table.sort?.map(field => table.fields[field] ?? field)
        },
        apiKey
      );
      snapshots[table.name] = records.map(record =>
        Object.fromEntries(
          Object.entries(table.fields)
            .filter(([, field]) => record.fields[field] !== undefined)
            .map(([name, field]) => [name, record.fields[field]])
        )
      );
    })
  );

  // Airtable lookups return arrays; require one parent before storing a scalar ID.
  for (const [table, field, key] of [
    ["topics", "CategoryId", "TopicId"],
    ["subtopics", "TopicId", "SubtopicId"]
  ])
    for (const row of snapshots[table]) {
      const links = row[field];
      if (!Array.isArray(links) || links.length !== 1)
        throw new Error(
          `Service finder ${table} record ${row[key]} must link to exactly one ${field}.`
        );
      row[field] = links[0];
    }

  // Stable key ordering keeps snapshot diffs independent of API field order.
  for (const table of tables)
    snapshots[table.name] = snapshots[table.name].map(row =>
      Object.fromEntries(
        Object.entries(row).sort(([a], [b]) => a.localeCompare(b))
      )
    );

  serviceFinderData.normalizeServiceFinderData(snapshots);
  // Replace snapshots only after the entire dataset passes relationship validation.
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
