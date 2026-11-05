# Agent guide

## Project structure

- This is the ca.gov portal, built with Eleventy. See [README.md](README.md)
  for project links and prebuild documentation.
- Page templates and content live in `pages/`. Shared data, includes, layouts,
  scripts, and assets live in `src/`.
- `_site/` is generated output. Change source files rather than editing it.
- [eleventy.config.cjs](eleventy.config.cjs) defines the build, asset processing,
  and passthrough copies. Check it before changing how assets are built.

## Commands and validation

- Use `npm ci` to install dependencies from the lockfile.
- `npm start` starts the Eleventy development server.
- `npm run build` runs prebuild tasks followed by Eleventy.
- `npm run prebuild` runs only the prebuild tasks; `npm start` does not run them.
- There is no npm test script. Validate changes with the smallest relevant
  checks, and run a build for changes affecting site generation.
- Use the existing ESLint, Prettier, and Stylelint configurations. For example,
  `npx eslint <changed-js-files>` and `npx prettier --check <changed-files>`.
  Use the installed tools rather than downloading new tooling for validation.

## Prebuild and external data

- [src/scripts/prebuild.mjs](src/scripts/prebuild.mjs) is the prebuild entry
  point. Data syncs in `AirtableDataScripts` run concurrently; subsequent tasks in
  `otherScripts` run sequentially after both syncs succeed. Each module exports a
  default async function; only `AirtableDataScripts` receive the API key.
  Paths are relative to the entry point; rejected tasks stop the build.
- Each sync fetches its tables with `Promise.all` before validation and writing.
  Pagination stays sequential within each table. Concurrent requests can hit
  Airtable's base-wide rate limit; the API helper retries a 429 once after 30
  seconds.
- `update_service_finder_data.mjs` syncs categories, topics, subtopics, and
  services by field name into `src/airTable/data/service_finder_*.json`, with
  alphabetical JSON keys. Topics read the `Category ID` lookup and subtopics read
  the `Topic ID` lookup directly. Services read the numeric `Subtopic IDs`
  lookup directly; no internal record-ID translation or storage is needed.
- Each service finder topic must link to exactly one category, and each subtopic
  to exactly one topic. Saved and template-facing `categoryID`/`topicID` are
  single numeric IDs. Missing, multiple, or invalid links
  fail sync/build rather than being silently accepted.
- `src/_data/service_finder.cjs` loads these snapshots once per Eleventy build
  through `src/airTable/load_data.cjs`. Template-facing numeric ID fields use
  `categoryID`, `topicID`, `subtopicID`, and `serviceID`; numeric ID lists use
  `subtopicIDs`. Service finder snapshots already use these final property names;
  Airtable field-name mappings live only in `update_service_finder_data.mjs`,
  whose API field lists are derived from that mapping. The loader validates
  without renaming fields. SEP snapshots retain Airtable field names.
  The results helper lives in
  `src/airTable/service_finder_helpers.mjs`.
- Prebuild loads `.env` and checks `AIRTABLE_API_KEY` once. Without it, one
  message skips both Airtable syncs and SEP image processing; Eleventy still
  loads and validates checked-in snapshots. Task modules do not load `.env`,
  check credentials, or execute on import; run them through `npm run prebuild`.
  Keep Airtable field names stable; no field-ID mapping is used.
- `update_sep_data.mjs` syncs SEP departments, services, and FAQs by field name
  from their configured default views into `src/airTable/data/`. Keep these
  snapshots checked in so builds work without an Airtable token.
- The `fields` lists in `update_sep_data.mjs` limit Airtable API responses to
  fields needed by templates, structured data, filtering, image processing, and
  relationship validation. Update these lists when adding field consumers;
  snapshots omit Airtable record metadata.
- `state_entity.cjs` reads the snapshots through `src/airTable/load_data.cjs`
  once per build, not through the SEP API. The loader normalizes omitted text
  fields and unchecked FAQ checkboxes, validates IDs and relationships, and
  restores AgencyName ordering independently of Airtable view order.
- Both datasets share snapshot reading in `load_data.cjs`, with separate
  normalizers for their schemas. Load only the requested dataset; do not cache
  mutable normalized records across Eleventy builds.
- JSON Schemas in `src/airTable/schemas/` validate snapshot shapes, types, and
  allowed fields during sync and loading. Ajv validators compile once per
  process; ID uniqueness and cross-table relationships remain code checks.
  Update the matching schema when adding saved fields. VS Code associates each
  snapshot with its schema through `.vscode/settings.json`, preserving array
  roots without adding `$schema` properties to records.
- `npm run validate:airtable` checks all saved snapshots without credentials or
  network access and reports validation time. It does not refresh data or images.
- Fetch or validation failures stop prebuild before replacing that sync's
  snapshots. Missing or invalid snapshots fail the build; there is no fallback
  to the SEP API.
- SEP images still come from `stateentityprofile.ca.gov/Uploads/` when missing
  locally. Avoid live data refreshes for unrelated changes, and review generated
  data diffs before including them.
- Keep credentials in the environment or an ignored `.env` file, never in
  committed source.

## Change conventions

- Follow nearby naming and module conventions; build scripts use both `.mjs`
  and `.cjs`, so preserve the appropriate module format.
- Keep changes focused, preserve unrelated working-tree edits, and update
  directly affected documentation.
