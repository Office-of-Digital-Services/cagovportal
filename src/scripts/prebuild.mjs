//@ts-check

import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const dataScripts = [
  "./update_service_finder_data.mjs",
  "./update_sep_data.mjs"
];

const scripts = ["./update_sep_images.mjs"];

/**
 * @param {string} script
 * @returns {Promise<void>}
 */
function runScript(script) {
  return new Promise((resolve, reject) => {
    const child = spawn(
      process.execPath,
      [fileURLToPath(new URL(script, import.meta.url))],
      { stdio: "inherit" }
    );
    child.once("error", reject);
    child.once("exit", (code, signal) => {
      if (code === 0) resolve();
      else
        reject(
          new Error(`Prebuild task ${script} failed (${signal ?? code}).`)
        );
    });
  });
}

await Promise.all(dataScripts.map(runScript));
for (const script of scripts) await runScript(script);
