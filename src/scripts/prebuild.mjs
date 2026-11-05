//@ts-check

import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const scripts = ["./update_service_finder_data.mjs"];

for (const script of scripts)
  execFileSync(
    process.execPath,
    [fileURLToPath(new URL(script, import.meta.url))],
    { stdio: "inherit" }
  );
