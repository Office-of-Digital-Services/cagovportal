const EleventyFetch = require("@11ty/eleventy-fetch");

const API_URL =
  "https://api.airtable.com/v0/app6t1QEuuPs8NUhg/tblMX0nRW5yTbr5Y6";
const API_KEY = process.env.AIRTABLE_API_KEY;

module.exports = async function () {
  try {
    console.log("Fetching Airtable data...");

    const response = await EleventyFetch(API_URL, {
      duration: "1h", // Cache data for 1 hour
      type: "json",
      fetchOptions: {
        headers: {
          Authorization: `Bearer ${API_KEY}`
        }
      }
    });

    const records = response.records.map(record => record.fields);

    return {
      recovery_services_finder: records // Matches expected variable name
    };
  } catch (error) {
    console.error("Error fetching Airtable data:", error);
    return { recovery_services_finder: [] }; // Return empty array on error
  }
};
