import EleventyFetch from "@11ty/eleventy-fetch";
import { API_KEY } from "../../config.mjs"; // Ensure this file exists

const API_URL =
  "https://api.airtable.com/v0/app6t1QEuuPs8NUhg/tblMX0nRW5yTbr5Y6?view=viwInn4NqAYYmXTox";

console.log("Checking API Key:", API_KEY ? "Loaded successfully" : "MISSING!");

export default async function () {
  try {
    if (!API_KEY) {
      throw new Error(
        "Missing API Key. Make sure `config.mjs` contains `API_KEY`."
      );
    }

    console.log("✅ API Key Loaded Successfully! Fetching from Airtable...");

    const json = await EleventyFetch(API_URL, {
      duration: "1h", // Cache for 1 hour
      type: "json",
      fetchOptions: {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    });

    console.log("📌 RAW Airtable Response:", JSON.stringify(json, null, 2));

    if (!json.records || json.records.length === 0) {
      console.error("❌ ERROR: Response from Airtable contains no records.");
      return { recovery_services_finder: [] };
    }

    const records = json.records.map(record => record.fields);
    console.log("✅ Final Processed Data:", JSON.stringify(records, null, 2));

    return { recovery_services_finder: records };
  } catch (error) {
    console.error("❌ ERROR: Fetching Airtable Data Failed:", error);
    return { recovery_services_finder: [] };
  }
}

// Ensure the function runs immediately when the script is executed
(async () => {
  const data = await (await import("./airtable.mjs")).default();
  console.log("🔹 Airtable Data Retrieved:", JSON.stringify(data, null, 2));
})();
