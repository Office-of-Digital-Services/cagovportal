import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createRequire, syncBuiltinESMExports } from "node:module";
import { afterEach, mock, test } from "node:test";
import timers from "node:timers/promises";
import { fileURLToPath } from "node:url";
import { fetchAllRecords, writeJson } from "./lib/airtable.mjs";
import sepData from "../airTable/load_sep_data.cjs";

const require = createRequire(import.meta.url);
const repository = fileURLToPath(new URL("../../", import.meta.url));
const temporaryDirectories = [];

afterEach(() => {
  mock.restoreAll();
  syncBuiltinESMExports();
  for (const directory of temporaryDirectories.splice(0))
    fs.rmSync(directory, { recursive: true, force: true });
});

function snapshots() {
  return {
    departments: [
      {
        AgencyId: 2,
        AgencyName: "Zulu",
        FriendlyName: "Zulu department",
        Acronym: "Z",
        Updated: "2026-01-02T00:00:00Z"
      },
      {
        AgencyId: 1,
        AgencyName: "Alpha",
        FriendlyName: "Alpha department",
        Acronym: "A",
        Updated: "2026-01-01T00:00:00Z"
      }
    ],
    services: [
      {
        ServiceId: 10,
        AgencyId: 1,
        ServiceName: "Test service",
        SortOrder: 1,
        Updated: "2026-01-01T00:00:00Z"
      }
    ],
    faqs: [
      {
        Id: 20,
        AgencyServiceId: 10,
        SortOrder: 1,
        Question: "Test question?",
        Answer: "Test answer",
        Updated: "2026-01-01T00:00:00Z"
      }
    ]
  };
}

function fixture() {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "cagov-sep-"));
  temporaryDirectories.push(directory);
  for (const file of [
    "src/scripts/lib/airtable.mjs",
    "src/scripts/update_sep_data.mjs",
    "src/scripts/update_service_finder_data.mjs",
    "src/scripts/prebuild.mjs",
    "src/airTable/load_sep_data.cjs",
    "src/_data/state_entity.cjs"
  ]) {
    const target = path.join(directory, file);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(path.join(repository, file), target);
  }
  fs.symlinkSync(
    path.join(repository, "node_modules"),
    path.join(directory, "node_modules"),
    "dir"
  );
  fs.mkdirSync(path.join(directory, "src/images/sep"), { recursive: true });
  fs.mkdirSync(path.join(directory, "src/airTable/data"), { recursive: true });
  for (const [table, records] of Object.entries(snapshots()))
    fs.writeFileSync(
      path.join(directory, `src/airTable/data/${table}.json`),
      JSON.stringify(records, null, 2)
    );
  return directory;
}

function run(directory, args, env = {}) {
  return spawnSync(process.execPath, args, {
    cwd: directory,
    encoding: "utf8",
    env: { ...process.env, AIRTABLE_API_KEY: "", ...env }
  });
}

test("Airtable pagination keeps named fields and the selected view", async () => {
  const urls = [];
  mock.method(globalThis, "fetch", async (input, options) => {
    const url = new URL(input);
    urls.push(url);
    assert.equal(options.headers.Authorization, "Bearer test-token");
    return Response.json({
      records: [
        {
          id: url.searchParams.has("offset") ? "rec2" : "rec1",
          fields: { ServiceId: urls.length }
        }
      ],
      ...(urls.length === 1 ? { offset: "next page" } : {})
    });
  });
  const records = await fetchAllRecords(
    { tableId: "tblTest", name: "test", view: "viwDefault" },
    "test-token"
  );
  assert.equal(records.length, 2);
  assert.equal(urls[1].searchParams.get("offset"), "next page");
  for (const url of urls) {
    assert.equal(url.searchParams.get("view"), "viwDefault");
    assert.equal(url.searchParams.has("returnFieldsByFieldId"), false);
    assert.equal(url.searchParams.has("sort[0][field]"), false);
  }
});

test("existing service finder field IDs, filters, and sorting are preserved", async () => {
  mock.method(globalThis, "fetch", async input => {
    const url = new URL(input);
    assert.equal(url.searchParams.get("returnFieldsByFieldId"), "true");
    assert.equal(url.searchParams.get("fields[]"), "fldName");
    assert.equal(url.searchParams.get("sort[0][field]"), "fldSort");
    assert.equal(url.searchParams.get("sort[0][direction]"), "asc");
    assert.equal(url.searchParams.get("filterByFormula"), "NOT({Name} = '')");
    return Response.json({ records: [] });
  });
  await fetchAllRecords(
    {
      tableId: "tblTest",
      name: "test",
      fields: ["name"],
      fieldMapping: { name: "fldName" },
      sort: ["fldSort"],
      filterByFormula: "NOT({Name} = '')"
    },
    "test-token"
  );
});

test("Airtable errors and malformed responses reject instead of returning partial data", async () => {
  for (const response of [
    new Response("Forbidden", { status: 403 }),
    Response.json({ records: null }),
    Response.json({ records: [{ id: "rec1", fields: [] }] }),
    Response.json({ records: [], offset: 1 })
  ]) {
    mock.method(globalThis, "fetch", async () => response);
    await assert.rejects(
      fetchAllRecords({ tableId: "tblTest", name: "test" }, "test-token"),
      /Airtable/
    );
    mock.restoreAll();
  }
});

test("Airtable rate limits wait 30 seconds and retry only once", async () => {
  const delays = [];
  mock.method(timers, "setTimeout", async delay => {
    delays.push(delay);
  });
  syncBuiltinESMExports();
  let requests = 0;
  mock.method(globalThis, "fetch", async () => {
    requests++;
    return requests === 1
      ? new Response("Rate limited", { status: 429 })
      : Response.json({ records: [] });
  });
  await fetchAllRecords({ tableId: "tblTest", name: "test" }, "test-token");
  assert.equal(requests, 2);
  assert.deepEqual(delays, [30_000]);

  requests = 0;
  mock.method(globalThis, "fetch", async () => {
    requests++;
    return new Response("Rate limited", { status: 429 });
  });
  await assert.rejects(
    fetchAllRecords({ tableId: "tblTest", name: "test" }, "test-token"),
    /429/
  );
  assert.equal(requests, 2);
});

test("normalization restores agency order and omitted fields without mutating snapshots", () => {
  const raw = snapshots();
  const original = structuredClone(raw);
  const result = sepData.normalizeSepData(raw);
  assert.deepEqual(
    result.agencies.map(row => row.AgencyId),
    [1, 2]
  );
  assert.equal(result.agencies[0].AgencyTags, "");
  assert.equal(result.services[0].Keywords, "");
  assert.equal(result.qa[0].Featured, false);
  assert.deepEqual(raw, original);
});

test("invalid IDs, missing relationships, and invalid field types are rejected", () => {
  const cases = [
    data => data.departments.push({ ...data.departments[0] }),
    data => {
      data.services[0].AgencyId = 999;
    },
    data => {
      data.faqs[0].AgencyServiceId = 999;
    },
    data => {
      data.services[0].ServiceId = "10";
    },
    data => {
      data.departments = [];
    },
    data => {
      data.faqs[0].Featured = "false";
    },
    data => {
      data.services[0].AgencyTags = ["tag"];
    },
    data => {
      delete data.services[0].SortOrder;
    },
    data => {
      delete data.services[0].ServiceName;
    },
    data => {
      data.faqs[0].Question = "";
    }
  ];
  for (const mutate of cases) {
    const data = snapshots();
    mutate(data);
    assert.throws(() => sepData.normalizeSepData(data), /SEP/);
  }
});

test("snapshots are reloaded rather than retained in Node's require cache", () => {
  const directory = fixture();
  const loader = require(
    path.join(directory, "src/airTable/load_sep_data.cjs")
  );
  const first = loader.loadSepData();
  first.services[0].ServiceName = "Mutated during build";
  assert.equal(loader.loadSepData().services[0].ServiceName, "Test service");
  fs.writeFileSync(
    path.join(directory, "src/airTable/data/services.json"),
    JSON.stringify([{ ...snapshots().services[0], ServiceName: "Next build" }])
  );
  assert.equal(loader.loadSepData().services[0].ServiceName, "Next build");
});

test("JSON writes create directories and leave unchanged files untouched", () => {
  const directory = fixture();
  const file = path.join(directory, "new/data.json");
  writeJson(file, { value: 1 });
  const modified = fs.statSync(file).mtimeMs;
  writeJson(file, { value: 1 });
  assert.equal(fs.statSync(file).mtimeMs, modified);
  assert.deepEqual(JSON.parse(fs.readFileSync(file, "utf8")), { value: 1 });
});

test("prebuild works without credentials but fails when a required snapshot is missing", () => {
  const directory = fixture();
  let result = run(directory, ["src/scripts/prebuild.mjs"]);
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stderr, /using checked-in SEP Airtable snapshots/);
  fs.unlinkSync(path.join(directory, "src/airTable/data/services.json"));
  result = run(directory, ["src/scripts/prebuild.mjs"]);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Missing SEP snapshot/);
});

test("sync uses the three configured views and preserves all snapshots if a fetch fails", () => {
  const directory = fixture();
  const mockFile = path.join(directory, "mock-fetch.mjs");
  fs.writeFileSync(
    mockFile,
    `
    import assert from "node:assert/strict";
    const data = JSON.parse(process.env.SEP_TEST_DATA);
    const tables = {
      tblp4lLpdJJ6ov9DR: ["departments", "viwz0z4qokjvja8VU"],
      tblZwLzCmz3ulSEII: ["services", "viwuyNtp20RQDOLAO"],
      tblUY0BdXSYNUCPVt: ["faqs", "viwSIT2P1rCRYcEW2"]
    };
    globalThis.fetch = async input => {
      const url = new URL(input);
      assert.equal(url.hostname, "api.airtable.com");
      const [name, view] = tables[url.pathname.split("/").pop()];
      assert.equal(url.searchParams.get("view"), view);
      assert.equal(url.searchParams.has("returnFieldsByFieldId"), false);
      if (process.env.SEP_TEST_FAIL === name)
        return new Response("Unavailable", { status: 503 });
      return Response.json({
        records: data[name].map((fields, i) => ({ id: name + i, fields }))
      });
    };
  `
  );
  const args = ["--import", mockFile, "src/scripts/update_sep_data.mjs"];
  const changed = snapshots();
  changed.services[0].ServiceName = "Refreshed";
  const env = {
    AIRTABLE_API_KEY: "test-token",
    SEP_TEST_DATA: JSON.stringify(changed)
  };
  const before = fs.readFileSync(
    path.join(directory, "src/airTable/data/departments.json"),
    "utf8"
  );
  let result = run(directory, args, { ...env, SEP_TEST_FAIL: "faqs" });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /503/);
  assert.equal(
    fs.readFileSync(
      path.join(directory, "src/airTable/data/departments.json"),
      "utf8"
    ),
    before
  );
  const invalid = structuredClone(changed);
  invalid.faqs[0].AgencyServiceId = 999;
  result = run(directory, args, {
    ...env,
    SEP_TEST_DATA: JSON.stringify(invalid)
  });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /references missing service/);
  assert.equal(
    fs.readFileSync(
      path.join(directory, "src/airTable/data/departments.json"),
      "utf8"
    ),
    before
  );
  result = run(directory, args, env);
  assert.equal(result.status, 0, result.stderr);
  const services = JSON.parse(
    fs.readFileSync(
      path.join(directory, "src/airTable/data/services.json"),
      "utf8"
    )
  );
  assert.equal(services[0].ServiceName, "Refreshed");
  assert.equal(services[0].id, "services0");
});

test("state_entity reads each snapshot once per build and preserves derived data without network calls", () => {
  const directory = fixture();
  const result = run(directory, [
    "-e",
    `
    const assert = require("node:assert/strict");
    const fs = require("node:fs");
    const readFileSync = fs.readFileSync;
    let reads = 0;
    fs.readFileSync = function(file, ...args) {
      if (/airTable[/\\\\]data[/\\\\].+\\.json$/.test(String(file))) reads++;
      return readFileSync.call(this, file, ...args);
    };
    globalThis.fetch = async () => { throw new Error("Unexpected network request"); };
    for (const protocol of ["node:http", "node:https"])
      require(protocol).request = () => { throw new Error("Unexpected HTTP request"); };
    const stateEntity = require("./src/_data/state_entity.cjs");
    (async () => {
      const data = await stateEntity();
      assert.equal(reads, 3);
      assert.equal(data.agencies[0].AgencyFullName, "Alpha department (A)");
      assert.equal(data.services[0].AgencySortOrder, 1);
      assert.equal(data.services[0].QA[0].Id, 20);
      assert.equal(data.qa[0].Featured, false);
      assert.equal(data.services[0].structuredData.provider.name, "Alpha department (A)");
      assert.equal(data.services[0].structuredData_FAQPage.mainEntity[0].acceptedAnswer.dateModified, "2026-01-01T00:00:00Z");
      assert.equal(data.state_entity_client_filter.service[0].ServiceId, 10);
      await stateEntity();
      assert.equal(reads, 6);
    })().catch(error => { console.error(error); process.exitCode = 1; });
  `
  ]);
  assert.equal(result.status, 0, result.stderr);
});
