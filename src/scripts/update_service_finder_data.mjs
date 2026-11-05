//@ts-check

// API Reference
// https://airtable.com/developers/web/api/list-records
// Token Creation
// https://airtable.com/create/tokens

import path from "node:path";
import dotenv from "dotenv";
import { fetchAllRecords, writeJson } from "./lib/airtable.mjs";

dotenv.config({ quiet: true });

const outputBasePath = "src/_data/service_finder";

/**
 * @typedef {import("./lib/airtable.mjs").TableConfig} TableConfig
 */

/** @type {TableConfig[]} */
const TABLES = [
  {
    tableId: "tbl5wfeJJ4F7FZ837",
    name: "categories",
    fields: ["name"],
    sort: ["fldLGhp1pSqhC8J35"], //sort
    fieldMapping: {
      name: "fldxNZIXYjgY1WAC3"
    }
  },
  {
    tableId: "tbl6JAo9evMInWiKC",
    name: "topics",
    fields: ["topicId", "category", "name", "caption"],
    sort: ["fldpGDExgeMe4EKXW", "fldP1fFOFExZxExi5"], //category, sort
    fieldMapping: {
      name: "fld7M2nfLHMr0QKMx",
      caption: "fldtbJV9XVYXI2yre",
      category: "fldpGDExgeMe4EKXW",
      topicId: "fldH5rtK0bKJLPAs5"
    }
  },
  {
    tableId: "tblSOXHg0SEUMrnHv",
    name: "subtopics",
    fields: ["subtopicId", "name", "topic"],
    sort: ["fldyJgF4eUXCp4cIs", "fldTElWehFTps2yJp"], //topic, sort
    fieldMapping: {
      name: "fldzSlHGqVTQDZArF",
      subtopicId: "fldOB4zddd8wX5TLE",
      topic: "fldyJgF4eUXCp4cIs"
    }
  },
  {
    tableId: "tblS8RYo4FSqmONyu",
    name: "services",
    fields: ["serviceId", "shortDescription", "subtopics"],
    sort: ["fldUE83DR6inhTAbn"], //Service Name
    fieldMapping: {
      serviceId: "fldTefBeQ2PJgm4N4",
      shortDescription: "fldHdf0nl9lOefgQX",
      subtopics: "fld1vrzODVrv4Ah05"
    },
    filterByFormula: "NOT({fldUE83DR6inhTAbn} = '')" // Only include records where the Service Name is not empty
  }
];

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
        console.log(`📄 Fetching table for: ${tableConfig.name}`);

        const records = await fetchAllRecords(tableConfig, apiKey);

        const flattenedRecords = records.map(record => {
          const flattened = /** @type {{id: string, [key: string]: any}} */ ({
            id: record.id
          });

          // Copy all of the record.fields into flattened
          Object.assign(flattened, record.fields);

          // Use the field mapping to rename fields
          for (const [key, airtableFieldId] of Object.entries(
            tableConfig.fieldMapping ?? {}
          ))
            if (flattened[airtableFieldId] !== undefined) {
              flattened[key] = flattened[airtableFieldId];
              delete flattened[airtableFieldId];
            }

          return flattened;
        });

        const outputPath = path.resolve(
          `${outputBasePath}/${tableConfig.name}.json`
        );
        writeJson(outputPath, flattenedRecords);
      })
    );
  } catch (err) {
    console.error("❌ Error fetching Airtable data:");
    console.error(err);
    //process.exit(1);
  }
}

updateServiceFinderData();
