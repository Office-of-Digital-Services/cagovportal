//@ts-check

const fs = require("node:fs");
const path = require("node:path");
const { Ajv } = require("ajv");

const ajv = new Ajv({ allErrors: true, strict: true });
/** @type {Map<string, import("ajv").ValidateFunction>} */
const validators = new Map();

/**
 * @typedef {Record<string, unknown>} SepRecord
 */

/**
 * @param {Record<string, SepRecord[]>} snapshots
 * @param {Record<string, string>} keys
 * @param {string} [prefix]
 */
function validateSnapshots(snapshots, keys, prefix = "") {
  for (const [table, key] of Object.entries(keys)) {
    const name = `${prefix}${table}`;
    let validate = validators.get(name);
    if (!validate) {
      const schema = JSON.parse(
        fs.readFileSync(
          path.join(__dirname, "schemas", `${name}.schema.json`),
          "utf8"
        )
      );
      validate = ajv.compile(schema);
      validators.set(name, validate);
    }
    const rows = snapshots[table];
    if (!validate(rows))
      throw new Error(
        `Invalid Airtable snapshot ${name}.json: ${ajv.errorsText(validate.errors, { dataVar: name, separator: "; " })}`
      );

    // Schema validation cannot enforce uniqueness of a specific ID property.
    const ids = new Set();
    for (const row of rows) {
      if (ids.has(row[key]))
        throw new Error(
          `Airtable snapshot ${name}.json has duplicate ${key}: ${row[key]}.`
        );
      ids.add(row[key]);
    }
  }
}

/**
 * @param {Record<string, SepRecord[]>} snapshots
 */
function normalizeSepData(snapshots) {
  validateSnapshots(snapshots, {
    departments: "AgencyId",
    services: "ServiceId",
    faqs: "Id"
  });

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
  validateSnapshots(
    snapshots,
    {
      categories: "categoryId",
      topics: "topicId",
      subtopics: "subtopicId",
      services: "serviceID"
    },
    "service_finder_"
  );

  const categoryIds = new Set(snapshots.categories.map(row => row.categoryId));
  const topicIds = new Set(snapshots.topics.map(row => row.topicId));
  const subtopicIds = new Set(snapshots.subtopics.map(row => row.subtopicId));

  for (const row of snapshots.topics) {
    const categoryId = row.categoryId;
    if (!categoryIds.has(categoryId))
      throw new Error(
        `Service finder topic ${row.topicId} references missing categoryId ${categoryId}.`
      );
  }
  for (const row of snapshots.subtopics) {
    const topicId = row.topicId;
    if (!topicIds.has(topicId))
      throw new Error(
        `Service finder subtopic ${row.subtopicId} references missing topicId ${topicId}.`
      );
  }
  for (const row of snapshots.services) {
    const linkedSubtopicIds = /** @type {number[]} */ (row.subtopicIds ?? []);
    for (const subtopicId of linkedSubtopicIds)
      if (!subtopicIds.has(subtopicId))
        throw new Error(
          `Service finder ${row.serviceID} references missing subtopicId ${subtopicId}.`
        );
  }
  return {
    categories: snapshots.categories,
    topics: snapshots.topics,
    subtopics: snapshots.subtopics,
    services: snapshots.services
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
