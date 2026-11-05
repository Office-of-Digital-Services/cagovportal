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
      throw new Error(
        `SEP record ${row.ServiceId ?? row.Id} is missing a numeric SortOrder.`
      );
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

/**
 * @param {string[]} tables
 * @param {string} [prefix]
 */
function loadSnapshots(tables, prefix = "") {
  /** @type {Record<string, SepRecord[]>} */
  const snapshots = {};
  for (const table of tables) {
    const file = path.join(__dirname, "data", `${prefix}${table}.json`);
    if (!fs.existsSync(file))
      throw new Error(
        `Missing Airtable snapshot ${file}. Run npm run prebuild with AIRTABLE_API_KEY configured.`
      );
    snapshots[table] = JSON.parse(fs.readFileSync(file, "utf8"));
  }
  return snapshots;
}

function loadSepData() {
  return normalizeSepData(loadSnapshots(["departments", "services", "faqs"]));
}

/**
 * @param {Record<string, Record<string, unknown>[]>} snapshots
 */
function normalizeServiceFinderData(snapshots) {
  const keys = {
    categories: "Category ID",
    topics: "Topic ID",
    subtopics: "Subtopic ID",
    services: "ServiceId"
  };
  for (const [table, key] of Object.entries(keys)) {
    const rows = snapshots[table];
    if (!Array.isArray(rows) || !rows.length)
      throw new Error(
        `Service finder ${table} snapshot must be a nonempty array.`
      );
    const ids = new Set();
    for (const row of rows) {
      if (
        !row ||
        typeof row[key] !== "number" ||
        !Number.isInteger(row[key]) ||
        ids.has(row[key])
      )
        throw new Error(
          `Service finder ${table} has an invalid or duplicate ${key}.`
        );
      ids.add(row[key]);
    }
  }

  /** @param {Record<string, unknown>} row */
  const recordId = row =>
    row["Category ID"] ??
    row["Topic ID"] ??
    row["Subtopic ID"] ??
    row.ServiceId;

  /**
   * @param {Record<string, unknown>} row
   * @param {string} field
   */
  const text = (row, field) => {
    const value = row[field];
    if (typeof value !== "string" || !value.trim())
      throw new Error(`Service finder ${recordId(row)} is missing ${field}.`);
    return value;
  };

  /**
   * @param {Record<string, unknown>} row
   * @param {string} field
   */
  const number = (row, field) => {
    const value = row[field];
    if (typeof value !== "number" || !Number.isInteger(value))
      throw new Error(
        `Service finder ${recordId(row)} has an invalid ${field}.`
      );
    return value;
  };

  /**
   * @param {Record<string, unknown>} row
   * @param {string} field
   * @param {Set<unknown>} targetIds
   * @param {boolean} [required]
   * @returns {number[]}
   */
  const links = (row, field, targetIds, required = true) => {
    const value = row[field] ?? [];
    if (
      !Array.isArray(value) ||
      (required && !value.length) ||
      value.some(id => typeof id !== "number" || !targetIds.has(id))
    )
      throw new Error(
        `Service finder ${recordId(row)} has invalid ${field} links.`
      );
    return value;
  };

  const categoryIds = new Set(
    snapshots.categories.map(row => row["Category ID"])
  );
  const topicIds = new Set(snapshots.topics.map(row => row["Topic ID"]));
  const subtopicIds = new Set(
    snapshots.subtopics.map(row => row["Subtopic ID"])
  );

  return {
    categories: snapshots.categories.map(row => ({
      categoryID: number(row, "Category ID"),
      name: text(row, "Name")
    })),
    topics: snapshots.topics.map(row => {
      const category = number(row, "Category");
      if (!categoryIds.has(category))
        throw new Error(
          `Service finder topic ${row["Topic ID"]} references missing Category ${category}.`
        );
      return {
        topicID: number(row, "Topic ID"),
        categoryID: category,
        name: text(row, "Name"),
        caption: text(row, "Caption")
      };
    }),
    subtopics: snapshots.subtopics.map(row => {
      const topic = number(row, "Topic");
      if (!topicIds.has(topic))
        throw new Error(
          `Service finder subtopic ${row["Subtopic ID"]} references missing Topic ${topic}.`
        );
      return {
        subtopicID: number(row, "Subtopic ID"),
        name: text(row, "Name"),
        topicID: topic
      };
    }),
    services: snapshots.services.map(row => {
      if (
        row["Short description"] !== undefined &&
        typeof row["Short description"] !== "string"
      )
        throw new Error(
          `Service finder ${recordId(row)} has an invalid Short description.`
        );
      return {
        serviceID: number(row, "ServiceId"),
        ...(row["Short description"] !== undefined
          ? { shortDescription: row["Short description"] }
          : {}),
        ...(row["Service Subtopics"] !== undefined
          ? { subtopicIDs: links(row, "Service Subtopics", subtopicIds, false) }
          : {})
      };
    })
  };
}

function loadServiceFinderData() {
  return normalizeServiceFinderData(
    loadSnapshots(
      ["categories", "topics", "subtopics", "services"],
      "service_finder_"
    )
  );
}

module.exports = {
  loadSepData,
  normalizeSepData,
  loadServiceFinderData,
  normalizeServiceFinderData
};
