// Import required modules
import fs from "node:fs";
import path from "node:path";

// Load environment variables
const envFilePath = path.resolve(process.cwd(), ".env");

if (!fs.existsSync(envFilePath)) {
  console.error(`Missing .env file. Please create one with the structure:
  
  {
    "AirTablePat": "your_airtable_api_key"
  }
  
  `);
  process.exit(1);
}

// Read API Key
const envFileContent = fs.readFileSync(envFilePath, "utf-8");
const { AirTablePat } = JSON.parse(envFileContent);

if (!AirTablePat) {
  console.error("Missing Airtable API key in .env file.");
  process.exit(1);
}

// Airtable API URL (Replace with your base and table ID)
const API_URL =
  "https://api.airtable.com/v0/app6t1QEuuPs8NUhg/tblMX0nRW5yTbr5Y6";

// Function to fetch data from Airtable
const fetchAirtableData = async () => {
  try {
    console.log("Fetching data from Airtable...");

    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${AirTablePat}`,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(
        `Airtable API error: ${response.status} ${response.statusText}`
      );
    }

    const responseJson = await response.json();
    const records = responseJson.records.map(record => record.fields); // Extract only field data

    console.log("✅ Successfully retrieved data from Airtable.");

    // Save data as a CSV file (optional)
    const csvPath = path.resolve(process.cwd(), "src/_data/airtable_data.csv");
    saveAsCSV(records, csvPath);

    return records; // Return data for further use
  } catch (error) {
    console.error("Error fetching Airtable data:", error.message);
  }
};

// Function to save JSON data as CSV
const saveAsCSV = (data, filePath) => {
  if (!data.length) return;

  const headers = Object.keys(data[0]).join(",");
  const rows = data.map(row => Object.values(row).join(",")).join("\n");
  const csvContent = `${headers}\n${rows}`;

  fs.writeFileSync(filePath, csvContent);
  console.log(`✅ Data saved to ${filePath}`);
};

// Execute fetch function
fetchAirtableData();
