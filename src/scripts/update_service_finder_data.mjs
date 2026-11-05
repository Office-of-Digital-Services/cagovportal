//@ts-check

import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import { fetchAllRecords, writeJson } from "./lib/airtable.mjs";
import serviceFinderData from "../airTable/load_data.cjs";

dotenv.config({ quiet: true });

/** @type {(Omit<import("./lib/airtable.mjs").TableConfig, "fields"> & { fields: Record<string, string> })[]} */
const tables = [
  {
    tableId: "tbl5wfeJJ4F7FZ837",
    name: "categories",
    fields: { categoryID: "Category ID", name: "Name" },
    sort: ["Sort"]
  },
  {
    tableId: "tbl6JAo9evMInWiKC",
    name: "topics",
    fields: {
      topicID: "Topic ID",
      categoryID: "Category ID",
      name: "Name",
      caption: "Caption"
    },
    sort: ["Category", "Sort"]
  },
  {
    tableId: "tblSOXHg0SEUMrnHv",
    name: "subtopics",
    fields: { subtopicID: "Subtopic ID", name: "Name", topicID: "Topic ID" },
    sort: ["Topic", "Sort"]
  },
  {
    tableId: "tblS8RYo4FSqmONyu",
    name: "services",
    fields: {
      serviceID: "ServiceId",
      shortDescription: "Short description",
      subtopicIDs: "Service Subtopics"
    },
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
      const records = await fetchAllRecords(
        {
          ...table,
          fields: Object.values(table.fields),
          sort: table.sort?.map(field => table.fields[field] ?? field)
        },
        apiKey
      );
      snapshots[table.name] = records.map(record => ({
        id: record.id,
        ...Object.fromEntries(
          Object.entries(table.fields)
            .filter(([, field]) => record.fields[field] !== undefined)
            .map(([name, field]) => [name, record.fields[field]])
        )
      }));
    })
  );

  const subtopicIDs = new Map(
    snapshots.subtopics.map(row => [row.id, row.subtopicID])
  );
  for (const row of snapshots.services) {
    const links = row.subtopicIDs;
    if (links === undefined) continue;
    if (!Array.isArray(links))
      throw new Error(
        `Service finder ${row.serviceID} has invalid subtopicIDs links.`
      );
    row.subtopicIDs = links.map(id => {
      const numericID = subtopicIDs.get(id);
      if (typeof numericID !== "number" || !Number.isInteger(numericID))
        throw new Error(
          `Service finder ${row.serviceID} has an unresolved subtopicIDs link: ${id}.`
        );
      return numericID;
    });
  }

  for (const rows of Object.values(snapshots))
    for (const row of rows) delete row.id;

  for (const [table, field, key] of [
    ["topics", "categoryID", "topicID"],
    ["subtopics", "topicID", "subtopicID"]
  ])
    for (const row of snapshots[table]) {
      const links = row[field];
      if (!Array.isArray(links) || links.length !== 1)
        throw new Error(
          `Service finder ${table} record ${row[key]} must link to exactly one ${field}.`
        );
      row[field] = links[0];
    }

  for (const table of tables)
    snapshots[table.name] = snapshots[table.name].map(row =>
      Object.fromEntries(
        Object.entries(row).sort(([a], [b]) => a.localeCompare(b))
      )
    );

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
