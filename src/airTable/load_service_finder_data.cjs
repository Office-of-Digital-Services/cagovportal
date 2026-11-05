//@ts-check

const fs = require("node:fs");
const path = require("node:path");

/**
 * @param {Record<string, Record<string, unknown>[]>} snapshots
 */
function normalizeServiceFinderData(snapshots) {
  for (const table of ["categories", "topics", "subtopics", "services"]) {
    const rows = snapshots[table];
    if (!Array.isArray(rows) || !rows.length)
      throw new Error(
        `Service finder ${table} snapshot must be a nonempty array.`
      );
    const ids = new Set();
    for (const row of rows) {
      if (!row || typeof row.id !== "string" || !row.id || ids.has(row.id))
        throw new Error(
          `Service finder ${table} has an invalid or duplicate record ID.`
        );
      ids.add(row.id);
    }
  }

  /**
   * @param {Record<string, unknown>} row
   * @param {string} field
   */
  const text = (row, field) => {
    const value = row[field];
    if (typeof value !== "string" || !value.trim())
      throw new Error(`Service finder ${row.id} is missing ${field}.`);
    return value;
  };

  /**
   * @param {Record<string, unknown>} row
   * @param {string} field
   */
  const number = (row, field) => {
    const value = row[field];
    if (typeof value !== "number" || !Number.isInteger(value))
      throw new Error(`Service finder ${row.id} has an invalid ${field}.`);
    return value;
  };

  /**
   * @param {Record<string, unknown>} row
   * @param {string} field
   * @param {Set<unknown>} targetIds
   * @param {boolean} [required]
   * @returns {string[]}
   */
  const links = (row, field, targetIds, required = true) => {
    const value = row[field] ?? [];
    if (
      !Array.isArray(value) ||
      (required && !value.length) ||
      value.some(id => typeof id !== "string" || !targetIds.has(id))
    )
      throw new Error(`Service finder ${row.id} has invalid ${field} links.`);
    return value;
  };

  const categoryIds = new Set(snapshots.categories.map(row => row.id));
  const topicIds = new Set(snapshots.topics.map(row => row.id));
  const subtopicIds = new Set(snapshots.subtopics.map(row => row.id));

  return {
    categories: snapshots.categories.map(row => ({
      id: row.id,
      name: text(row, "Name")
    })),
    topics: snapshots.topics.map(row => ({
      id: row.id,
      topicId: number(row, "Topic ID"),
      category: links(row, "Category", categoryIds),
      name: text(row, "Name"),
      caption: text(row, "Caption")
    })),
    subtopics: snapshots.subtopics.map(row => ({
      id: row.id,
      subtopicId: number(row, "Subtopic ID"),
      name: text(row, "Name"),
      topic: links(row, "Topic", topicIds)
    })),
    services: snapshots.services.map(row => {
      if (
        row["Short description"] !== undefined &&
        typeof row["Short description"] !== "string"
      )
        throw new Error(
          `Service finder ${row.id} has an invalid Short description.`
        );
      return {
        id: row.id,
        serviceId: number(row, "ServiceId"),
        ...(row["Short description"] !== undefined
          ? { shortDescription: row["Short description"] }
          : {}),
        ...(row["Service Subtopics"] !== undefined
          ? { subtopics: links(row, "Service Subtopics", subtopicIds, false) }
          : {})
      };
    })
  };
}

function loadServiceFinderData() {
  /** @type {Record<string, Record<string, unknown>[]>} */
  const snapshots = {};
  for (const table of ["categories", "topics", "subtopics", "services"]) {
    const file = path.join(__dirname, "data", `service_finder_${table}.json`);
    if (!fs.existsSync(file))
      throw new Error(
        `Missing service finder snapshot ${file}. Run npm run prebuild with AIRTABLE_API_KEY configured.`
      );
    snapshots[table] = JSON.parse(fs.readFileSync(file, "utf8"));
  }
  return normalizeServiceFinderData(snapshots);
}

module.exports = { loadServiceFinderData, normalizeServiceFinderData };
