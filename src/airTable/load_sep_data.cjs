//@ts-check

const fs = require("node:fs");
const path = require("node:path");

/**
 * @typedef {Record<string, unknown>} SepRecord
 */

/**
 * @param {Record<string, SepRecord[]>} snapshots
 */
function normalizeSepData(snapshots) {
  const keys = {
    departments: "AgencyId",
    services: "ServiceId",
    faqs: "Id"
  };
  /** @type {Record<string, string[]>} */
  const requiredText = {
    departments: ["AgencyName", "FriendlyName", "Updated"],
    services: ["ServiceName", "Updated"],
    faqs: ["Question", "Answer"]
  };
  for (const [table, key] of Object.entries(keys)) {
    const rows = snapshots[table];
    if (!Array.isArray(rows) || !rows.length)
      throw new Error(`SEP ${table} snapshot must be a nonempty array.`);

    const ids = new Set();
    for (const row of rows) {
      if (
        !row ||
        typeof row !== "object" ||
        Array.isArray(row) ||
        typeof row[key] !== "number" ||
        !Number.isInteger(row[key]) ||
        ids.has(row[key])
      )
        throw new Error(`SEP ${table} has an invalid or duplicate ${key}.`);
      ids.add(row[key]);
      for (const field of requiredText[table])
        if (typeof row[field] !== "string" || !row[field].trim())
          throw new Error(
            `SEP ${table} record ${row[key]} is missing ${field}.`
          );
    }
  }

  /** @type {SepRecord[]} */
  const agencies = snapshots.departments.map(row => ({
    AgencyTags: "",
    Keywords: "",
    ...row
  }));
  /** @type {SepRecord[]} */
  const services = snapshots.services.map(row => ({
    AgencyTags: "",
    Keywords: "",
    ...row
  }));
  /** @type {SepRecord[]} */
  const qa = snapshots.faqs.map(row => ({ Featured: false, ...row }));

  for (const [table, rows] of Object.entries({ agencies, services }))
    for (const row of rows)
      for (const field of ["AgencyTags", "Keywords"])
        if (typeof row[field] !== "string")
          throw new Error(`SEP ${table} field ${field} must be a string.`);
  for (const row of [...services, ...qa])
    if (typeof row.SortOrder !== "number" || !Number.isFinite(row.SortOrder))
      throw new Error(`SEP record ${row.id} is missing a numeric SortOrder.`);
  for (const row of qa)
    if (typeof row.Featured !== "boolean")
      throw new Error(`SEP FAQ ${row.Id} field Featured must be a boolean.`);

  const agencyIds = new Set(agencies.map(row => row.AgencyId));
  const serviceIds = new Set(services.map(row => row.ServiceId));
  for (const row of services)
    if (!agencyIds.has(row.AgencyId))
      throw new Error(
        `SEP service ${row.ServiceId} references missing department ${row.AgencyId}.`
      );
  for (const row of qa)
    if (!serviceIds.has(row.AgencyServiceId))
      throw new Error(
        `SEP FAQ ${row.Id} references missing service ${row.AgencyServiceId}.`
      );

  // SEP orders agencies by AgencyName; the Airtable view may use another sort.
  agencies.sort((a, b) =>
    String(a.AgencyName).localeCompare(String(b.AgencyName))
  );
  return { agencies, services, qa };
}

function loadSepData() {
  /** @type {Record<string, SepRecord[]>} */
  const snapshots = {};
  for (const table of ["departments", "services", "faqs"]) {
    const file = path.join(__dirname, "data", `${table}.json`);
    if (!fs.existsSync(file))
      throw new Error(
        `Missing SEP snapshot ${file}. Run npm run prebuild with AIRTABLE_API_KEY configured.`
      );
    snapshots[table] = JSON.parse(fs.readFileSync(file, "utf8"));
  }
  return normalizeSepData(snapshots);
}

module.exports = { loadSepData, normalizeSepData };
