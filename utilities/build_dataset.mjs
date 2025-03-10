//@ts-check
import fs from "node:fs";
import path from "node:path";
import fetch from "node-fetch";

const requiredFields = [
  // "ABOVE_MODERATE_INCOME_PCT",
  // "BEHAVIORAL_HEALTH_PLAN",
  "CARE_COURT",
  "CITIES_OUT_OF_COMPLIANCE",
  "COC_CHANGE_IN_BED_PCT",
  "COC_COMPARE_TO_DATE",
  "COC_DATA_DATE",
  "COC_LOCAL_PLAN_LINK",
  "COC_NAME",
  //"COC_NAME_URL",
  "COC_PIT_CHANGE_PCT",
  "COC_PPL_EXP_HOMELESSNESS_CT",
  "COC_PPL_UNSHELTERED_CT",
  "COC_SHELTER_BEDS_CT",
  // "COC_UNSHELTERED_PIT_CHANGE_PCT",
  "CONSERVATORSHIP",
  "COUNTY_BOARD_SUP_LINK",
  "COUNTY_COMPLIANCE",
  // "COUNTY_COMPLIANCE_LINK",
  "COUNTY_NAME",
  "COUNTY_POPULATION",
  "CREATE_TIME",
  // "ERF_COUNTY_FUND_ALLOCATED",
  // "ERF_COUNTY_FUND_SPENT",
  // "ERF_END_DATE",
  // "ERF_FUND_AWARDED",
  // "ERF_START_DATE",
  // "ERF_TO_COUNTY_DIRECT",
  "FSP_CT",
  "HHAP_FUND_AWARDED",
  "HHAP_FUND_END_DATE",
  "HHAP_FUND_START_DATE",
  // "HHAP_HOUSE_CT",
  // "HHAP_SERVE_CT",
  "HHAP_SERVE_HOUSE_END_DATE",
  "HHAP_SERVE_HOUSE_START_DATE",
  "HOUSING_END_DATE",
  "HOUSING_START_DATE",
  "LAST_MODIFIED",
  "LOW_INCOME_PCT",
  // "MODERATE_INCOME_PCT",
  "REGION_NAME",
  "RHNA_CYCLE_PCT",
  "UNITS_CONSTRUCTED",
  "UNITS_PERMITTED",
  "VERY_LOW_INCOME_PCT",
  "WEB_USE_LAST_UPDATE_DT",
  "YEAR_QUARTER"
];
const process_name = import.meta.url.split("/").pop();
const envFilePath = path.resolve(process.cwd(), ".env");
const targetJsonPath = path.resolve(process.cwd(), "src/_data/airTable.json");
const countyListPath = path.resolve(process.cwd(), "src/_data/counties.json");
const API_URL =
  "https://api.airtable.com/v0/appOU5EZ5UfjGji8X/tbl7LqPhrmIMrOWTe?sort[0][field]=COUNTY_NAME";

const requireError = (
  /** @type {{}} */ o,
  /** @type {string[]} */ fieldNames
) => {
  fieldNames.forEach(f => {
    if (o[f] === undefined) {
      throw new Error(`${f} is required in ${o["COUNTY_NAME"]}`);
    }
  });
};

const doWork = async () => {
  if (!fs.existsSync(envFilePath)) {
    showApiKeyMessage();
    return;
  }

  const envFileContent = fs.readFileSync(envFilePath, "utf-8");

  const envJson = JSON.parse(envFileContent);

  const AirTablePat = envJson.AirTablePat;
  if (!AirTablePat) {
    showApiKeyMessage();
    return;
  }

  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${AirTablePat}`,
      "Content-Type": "application/json"
    }
  });

  if (!response) throw new Error(`Error: ${response}`);

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const responseJson = await response.json();

  if (!responseJson) throw new Error(`Error: ${responseJson}`);

  /** @type {*[]} */
  const result = responseJson["records"];

  // Hide Fields
  result.forEach(x => {
    delete x.fields.CREATE_BY;
    delete x.fields.LAST_MODIFIED_BY;
    delete x.fields.AIRTABLE_ID;
  });

  // custom changes
  result.forEach(x => {
    // Default values
    // if (!x.fields.FSP_CT) x.fields.FSP_CT = 0;

    // Required Fields
    requireError(x.fields, requiredFields);
  });

  //Required field checks

  const sorted = sortFieldsInObjects(result);

  const jsonString = JSON.stringify(sorted, null, 2);

  console.log(`Writing -> ${targetJsonPath}`);
  fs.writeFileSync(targetJsonPath, jsonString);

  const counties = sorted.map(x => ({
    name: x.fields["COUNTY_NAME"],
    slug: x.fields["COUNTY_NAME"].replace(/ /g, "-").toLowerCase()
  }));

  console.log(`Writing -> ${countyListPath}`);
  fs.writeFileSync(countyListPath, JSON.stringify(counties, null, 2));
};

const showApiKeyMessage = () => {
  console.error(
    `Get a Personal Access Token from\n\nhttps://airtable.com/create/tokens\n\nPlease create this file...\n\n${envFilePath}\n\nwith the structure...\n\n{\n  "AirTablePat": "[Api Key Value]"\n}`
  );
};

// Function to sort fields in an object recursively
/**
 * @param {{ [x: string]: any; }} obj
 */
function sortFieldsRecursively(obj) {
  const sortedKeys = Object.keys(obj).sort();
  const sortedObj = {};

  sortedKeys.forEach(
    key =>
      (sortedObj[key] =
        typeof obj[key] === "object" && !Array.isArray(obj[key])
          ? sortFieldsRecursively(obj[key])
          : obj[key])
  );

  return sortedObj;
}

// Function to sort fields in each object in an array
/**
 * @param {any[]} arr
 */
function sortFieldsInObjects(arr) {
  return arr.map((/** @type {any} */ obj) => sortFieldsRecursively(obj));
}

(async () => {
  console.time(process_name);

  await doWork();

  console.timeEnd(process_name);
  process.exit();
})();
