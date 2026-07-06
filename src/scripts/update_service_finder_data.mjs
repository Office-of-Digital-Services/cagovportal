//@ts-check

import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

/**
 * Airtable base ID
 * @type {string}
 */
const AIRTABLE_BASE = "appqN4fe2lK8xlNqp";

/**
 * Airtable table IDs
 * @type {string}
 */
const TABLE_CATEGORY = "tbl5wfeJJ4F7FZ837";
const TABLE_TOPIC = "tbl6JAo9evMInWiKC";
const TABLE_SUBTOPIC = "tblSOXHg0SEUMrnHv";
const TABLE_SERVICES = "tblS8RYo4FSqmONyu";

/**
 * Output locations
 * @type {string}
 */
const OUT_HIERARCHY = path.resolve("src/_data/service_finder_hierarchy.json");
const OUT_SERVICES = path.resolve("src/_data/service_finder_services.json");

/**
 * @typedef AirtableRecord
 * @property {string} id
 * @property {string} createdTime
 * @property {{[key: string]: any}} fields
 */

/**
 * Fetch a table from Airtable
 * @param {string} tableId
 * @param {string} apiKey
 */
async function fetchTable(tableId, apiKey) {
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE}/${tableId}`;

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${apiKey}` }
  });

  if (!response.ok) {
    throw new Error(
      `Airtable request failed (${tableId}): ${response.status} ${response.statusText}`
    );
  }

  return /** @type {{records: AirtableRecord[]}} */ (await response.json());
}

/**
 * Build sorted hierarchy:
 * Category → Topic → Subtopic
 * @param {{records: AirtableRecord[]}} categories
 * @param {{records: AirtableRecord[]}} topics
 * @param {{records: AirtableRecord[]}} subtopics
 */
function buildHierarchy(categories, topics, subtopics) {
  const topicMap = new Map();
  const subtopicMap = new Map();

  // Index topics
  topics.records.forEach(t => {
    topicMap.set(t.id, {
      id: t.id,
      name: t.fields.Name,
      caption: t.fields.Caption,
      sort: t.fields.Sort || 0,
      topicId: t.fields["Topic ID"],
      subtopics: t.fields["Service Subtopic"] || []
    });
  });

  // Index subtopics
  subtopics.records.forEach(s => {
    subtopicMap.set(s.id, {
      id: s.id,
      name: s.fields.Name,
      sort: s.fields.Sort || 0,
      subtopicId: s.fields["Subtopic ID"],
      services: s.fields.Services || []
    });
  });

  // Build final hierarchy
  const hierarchy = categories.records.map(cat => {
    const catTopics = /** @type {string[]} */ (
      cat.fields["Service Topics"] || []
    )
      .map(topicId => {
        const topic = topicMap.get(topicId);
        if (!topic) return null;

        const topicSubtopics = /** @type {string[]} */ (topic.subtopics || [])
          .map(subId => subtopicMap.get(subId) || null)
          .filter(Boolean)
          .sort((a, b) => a.sort - b.sort);

        return {
          id: topic.id,
          name: topic.name,
          caption: topic.caption,
          sort: topic.sort,
          topicId: topic.topicId,
          subtopics: topicSubtopics
        };
      })
      .filter(Boolean)
      .sort((a, b) => a?.sort - b?.sort);

    return {
      id: cat.id,
      name: cat.fields.Name,
      sort: cat.fields.Sort || 0,
      topics: catTopics
    };
  });

  // Sort categories
  hierarchy.sort((a, b) => a.sort - b.sort);

  return hierarchy;
}

/**
 * Main update function
 * Fetches 4 tables and writes 2 output files
 */
async function updateServiceFinderData() {
  const apiKey = process.env.AIRTABLE_API_KEY;

  if (!apiKey) {
    console.warn("⚠️ AIRTABLE_API_KEY missing — skipping Airtable fetch.");
    return;
  }

  console.log("🔎 Fetching Airtable tables…");

  try {
    const [categories, topics, subtopics, services] = await Promise.all([
      fetchTable(TABLE_CATEGORY, apiKey),
      fetchTable(TABLE_TOPIC, apiKey),
      fetchTable(TABLE_SUBTOPIC, apiKey),
      fetchTable(TABLE_SERVICES, apiKey)
    ]);

    console.log("🔧 Building sorted hierarchy…");
    const hierarchy = buildHierarchy(categories, topics, subtopics);

    fs.writeFileSync(OUT_HIERARCHY, JSON.stringify(hierarchy, null, 2));
    fs.writeFileSync(OUT_SERVICES, JSON.stringify(services.records, null, 2));

    console.log(`✅ Hierarchy saved → ${OUT_HIERARCHY}`);
    console.log(`✅ Services saved → ${OUT_SERVICES}`);
  } catch (err) {
    console.error("❌ Error fetching Airtable data:");
    console.error(err);
    process.exit(1);
  }
}

updateServiceFinderData();
