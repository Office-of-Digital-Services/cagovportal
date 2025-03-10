const EleventyFetch = require("@11ty/eleventy-fetch");

const API_URL =
  "https://api.airtable.com/v0/app6t1QEuuPs8NUhg/tblMX0nRW5yTbr5Y6";
const API_KEY = process.env.AIRTABLE_API_KEY; // Store securely in an env variable

module.exports = async function () {
  try {
    console.log("Fetching Airtable data...");

    // Use EleventyFetch to cache data and prevent rate limits
    const response = await EleventyFetch(API_URL, {
      duration: "1h", // Cache for 1 hour
      type: "json",
      fetchOptions: {
        headers: {
          Authorization: `Bearer ${API_KEY}`
        }
      }
    });

    return response.records.map(record => record.fields); // Extract just the fields
  } catch (error) {
    console.error("Error fetching Airtable data:", error);
    return [];
  }
};
