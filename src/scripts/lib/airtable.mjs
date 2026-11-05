//@ts-check

import fs from "node:fs";
import path from "node:path";
import { setTimeout } from "node:timers/promises";

/**
 * @typedef {object} TableConfig
 * @property {string} tableId
 * @property {string} name
 * @property {string[]} [fields]
 * @property {string[]} [sort]
 * @property {Record<string, string>} [fieldMapping]
 * @property {string} [filterByFormula]
 * @property {string} [view]
 */

/**
 * @typedef {object} AirtableRecord
 * @property {string} id
 * @property {Record<string, unknown>} fields
 */

/**
 * @param {TableConfig} tableConfig
 * @param {string} apiKey
 * @returns {Promise<AirtableRecord[]>}
 */
export async function fetchAllRecords(tableConfig, apiKey) {
  /** @type {AirtableRecord[]} */
  const records = [];
  /** @type {string | undefined} */
  let offset;

  do {
    const url = new URL(
      `https://api.airtable.com/v0/appqN4fe2lK8xlNqp/${tableConfig.tableId}`
    );
    if (tableConfig.fieldMapping)
      url.searchParams.set("returnFieldsByFieldId", "true");
    if (tableConfig.view) url.searchParams.set("view", tableConfig.view);
    if (tableConfig.filterByFormula)
      url.searchParams.set("filterByFormula", tableConfig.filterByFormula);
    for (const field of tableConfig.fields ?? [])
      url.searchParams.append(
        "fields[]",
        tableConfig.fieldMapping?.[field] ?? field
      );
    (tableConfig.sort ?? []).forEach((field, index) => {
      url.searchParams.append(`sort[${index}][field]`, field);
      url.searchParams.append(`sort[${index}][direction]`, "asc");
    });
    if (offset) url.searchParams.set("offset", offset);

    const options = {
      headers: { Authorization: `Bearer ${apiKey}` }
    };
    let response = await fetch(url, options);
    if (response.status === 429) {
      console.warn(
        `Airtable rate limit (${tableConfig.name}) - retrying in 30 seconds.`
      );
      await setTimeout(30_000);
      response = await fetch(url, options);
    }
    if (!response.ok)
      throw new Error(
        `Airtable request failed (${tableConfig.name}): ${response.status} ${response.statusText}`
      );

    const json = /** @type {{records: AirtableRecord[], offset?: string}} */ (
      await response.json()
    );
    if (
      !json ||
      !Array.isArray(json.records) ||
      json.records.some(
        record =>
          !record ||
          typeof record.id !== "string" ||
          !record.fields ||
          typeof record.fields !== "object" ||
          Array.isArray(record.fields)
      ) ||
      (json.offset !== undefined &&
        (typeof json.offset !== "string" || !json.offset))
    )
      throw new Error(`Invalid Airtable response (${tableConfig.name})`);

    records.push(...json.records);
    offset = json.offset;
  } while (offset);

  return records;
}

/**
 * @param {string} filePath
 * @param {unknown} data
 */
export function writeJson(filePath, data) {
  const content = JSON.stringify(data, null, 2);
  if (fs.existsSync(filePath) && fs.readFileSync(filePath, "utf8") === content)
    return;

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
  console.info(`Saved -> ${filePath}`);
}
