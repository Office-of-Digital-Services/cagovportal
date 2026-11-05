//@ts-check

import dotenv from "dotenv";

dotenv.config({ quiet: true });

const AirtableDataScripts = [
  "./update_service_finder_data.mjs",
  "./update_sep_data.mjs"
];

const otherScripts = ["./update_sep_images.mjs"];

/**
 * @param {string} script
 * @param {string} [apiKey]
 * @returns {Promise<void>}
 */
async function runScript(script, apiKey) {
  const { default: run } = await import(new URL(script, import.meta.url).href);
  if (apiKey === undefined) await run();
  else await run(apiKey);
}

const apiKey = process.env.AIRTABLE_API_KEY;
if (!apiKey)
  console.warn(
    "AIRTABLE_API_KEY missing - skipping Airtable sync and SEP image processing."
  );
else {
  await Promise.all(
    AirtableDataScripts.map(script => runScript(script, apiKey))
  );
  for (const script of otherScripts) await runScript(script);
}
