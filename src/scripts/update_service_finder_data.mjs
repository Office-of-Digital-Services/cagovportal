//@ts-check

import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config({ quiet: true }); // Load environment variables from .env file

// Airtable configuration (hardcoded)
const AIRTABLE_BASE = "appqN4fe2lK8xlNqp"; // replace with your base ID
const AIRTABLE_TABLE = "tblS8RYo4FSqmONyu"; // replace with your table name

// Output location for Eleventy
const OUTPUT_PATH = path.resolve("_data/service_finder_data.json");

async function updateServiceFinderData() {
  const apiKey = process.env.AIRTABLE_API_KEY;

  if (!apiKey) {
    console.warn(
      "⚠️ AIRTABLE_API_KEY missing — skipping Airtable fetch and using existing dataset."
    );
    return;
  }

  console.log("🔎 Fetching Airtable Service Finder data…");

  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });

    if (!response.ok) {
      throw new Error(
        `Airtable request failed: ${response.status} ${response.statusText}`
      );
    }

    const json = await response.json();

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(json, null, 2));
    console.log(`✅ Service Finder data updated → ${OUTPUT_PATH}`);
  } catch (err) {
    console.error("❌ Error fetching Airtable data:");
    console.error(err);
    process.exit(1); // Real error — fail the build
  }
}

updateServiceFinderData();
