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
    view: "viwz0z4qokjvja8VU",
    fields: [
      "AgencyId",
      "AgencyName",
      "FriendlyName",
      "Acronym",
      "Description",
      "AgencyTags",
      "Keywords",
      "Updated",
      "LogoUrl",
      "WebsiteURL",
      "ContactURL",
      "ContactEmail",
      "ContactPhone",
      "ContactPhoneDigits",
      "ContactPhoneDisplay",
      "Facebook",
      "TwitterAccount",
      "YouTube",
      "GooglePlayStoreUrl",
      "AppleAppStoreUrl"
    ]
  },
  {
    name: "services",
    tableId: "tblZwLzCmz3ulSEII",
    view: "viwuyNtp20RQDOLAO",
    fields: [
      "ServiceId",
      "AgencyId",
      "AgencyName",
      "FriendlyName",
      "ServiceName",
      "Description",
      "ServiceType",
      "ServiceUrl",
      "ContactUrl",
      "ContactPhone",
      "ContactPhoneDigits",
      "ContactPhoneDisplay",
      "AgencyTags",
      "Keywords",
      "RelatedSearchTerms",
      "Updated",
      "SortOrder",
      "ImageUrl",
      "AltText"
    ]
  },
  {
    name: "faqs",
    tableId: "tblUY0BdXSYNUCPVt",
    view: "viwSIT2P1rCRYcEW2",
    sort: ["AgencyServiceId", "SortOrder"],
    fields: [
      "Id",
      "AgencyServiceId",
      "Question",
      "Answer",
      "Featured",
      "SortOrder",
      "Updated"
    ]
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
    snapshots[table.name] = records.map(record => record.fields);
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
