import EleventyFetch from "@11ty/eleventy-fetch";
import { API_KEY } from "../../config.js"; // ✅ Corrected path

const API_URL =
  "https://api.airtable.com/v0/app6t1QEuuPs8NUhg/tblMX0nRW5yTbr5Y6";

console.log("Checking API Key:", API_KEY ? "Loaded successfully" : "MISSING!");

export default async function () {
  try {
    if (!API_KEY) {
      throw new Error(
        "Missing API Key. Make sure your `config.js` file contains `API_KEY`."
      );
    }

    const response = await EleventyFetch(API_URL, {
      duration: "1h",
      type: "json",
      fetchOptions: {
        headers: {
          Authorization: `Bearer ${API_KEY}`
        }
      }
    });

    const records = response.records.map(record => ({
      ID: record.fields.ID,
      Audience: record.fields.Audience,
      Type_of_Service: record.fields.Type_of_Service,
      Category: record.fields.Category,
      Service_name: record.fields.Service_name,
      Entity_type: record.fields.Entity_type,
      Entity: record.fields.Entity,
      Entity_acronym: record.fields.Entity_acronym,
      Description: record.fields.Description,
      Info_link: record.fields.Info_link,
      Service_link: record.fields.Service_link,
      In_person_kiosk_: record.fields.In_person_kiosk,
      Phone: record.fields.Phone,
      Fax: record.fields.Fax,
      In_Person_Office: record.fields.In_Person_Office,
      PDF: record.fields.PDF,
      Required_Form: record.fields.Required_Form,
      Email: record.fields.Email,
      Mail: record.fields.Mail,
      Source: record.fields.Source
    }));

    return {
      recovery_services_finder: records
    };
  } catch (error) {
    console.error("Error fetching Airtable data:", error);
    return { recovery_services_finder: [] };
  }
}
