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
  point. Add future Node.js tasks to its `scripts` array, with paths relative to
  that file. Tasks run sequentially in separate processes; nonzero exits stop
  the build.
- Preserve the service finder updater's behavior when adding tasks. It skips
  Airtable fetching when `AIRTABLE_API_KEY` is missing.
- `update_sep_data.mjs` syncs SEP departments, services, and FAQs by field name
  from their configured default views into `src/airTable/data/`. Keep these
  snapshots checked in so builds work without an Airtable token.
- The `fields` lists in `update_sep_data.mjs` limit Airtable API responses to
  fields needed by templates, structured data, filtering, image processing, and
  relationship validation. Update these lists when adding field consumers;
  snapshots omit Airtable record metadata.
- `state_entity.cjs` reads the snapshots through `src/airTable/load_sep_data.cjs`
  once per build, not through the SEP API. The loader normalizes omitted text
  fields and unchecked FAQ checkboxes, validates IDs and relationships, and
  restores AgencyName ordering independently of Airtable view order.
- SEP fetch or validation failures stop prebuild before replacing snapshots.
  Missing or invalid snapshots fail the build; there is no fallback to the SEP
  API.
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
