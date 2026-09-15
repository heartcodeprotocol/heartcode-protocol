import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const sha256 = text => createHash("sha256").update(text).digest("hex");
const canonical = value => {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === "object") return Object.fromEntries(
    Object.keys(value).sort().map(key => [key, canonical(value[key])]));
  assert(value === null || ["string", "boolean"].includes(typeof value) ||
    (typeof value === "number" && Number.isFinite(value)), "Non-JSON value");
  return value;
};
export const hash = value => sha256(JSON.stringify(canonical(value)));
export function verifyRecords(fixtures, expected) {
  assert.equal(fixtures.length, 8, "Expected eight fixtures");
  assert.equal(expected.length, fixtures.length);
  assert.equal(new Set(fixtures.map(row => row.case_id)).size, fixtures.length, "Duplicate fixtures");
  assert.equal(new Set(expected.map(row => row.case_id)).size, expected.length, "Duplicate outputs");
  const expectedById = new Map(expected.map(row => [row.case_id, row]));
  for (const row of fixtures) {
    assert.equal(row.schema_version, "action-fixture.v0.1");
    assert.equal(row.synthetic, true);
    assert.equal(row.input_sha256, hash(row.input), "Input hash mismatch");
    const output = expectedById.get(row.case_id);
    assert(output, "Missing output");
    assert.equal(output.input_sha256, row.input_sha256);
    const { artifactSha256, ...payload } = output.evidence;
    assert.equal(artifactSha256, hash(payload), "Evidence hash mismatch");
    assert.equal(payload.schemaVersion, "experimental-action-evidence.v0.1");
    assert.equal(payload.policy, "experimental-action-boundary.v0.1");
    assert.deepEqual(payload.proposal, row.input.proposal);
    assert.equal(payload.observedAt, row.input.now);
    assert(["allow", "block"].includes(payload.decision));
    if (payload.decision === "block") {
      assert.equal(output.environment_calls, 0);
      assert.equal(payload.execution, "not_attempted");
      assert.equal(payload.receiptId, null);
      assert.equal(payload.submissionsReserved, 0);
      assert.notEqual(payload.reason, "permitted");
    } else {
      assert.equal(payload.reason, "permitted");
      assert.equal(output.environment_calls, 1);
      assert.equal(payload.submissionsReserved, 1);
      assert.equal(payload.execution, "succeeded");
      assert.equal(typeof payload.receiptId, "string");
    }
  }
}
export function verifyBundle(directory = fileURLToPath(new URL(".", import.meta.url))) {
  const manifest = JSON.parse(readFileSync(resolve(directory, "manifest.json"), "utf8"));
  assert.equal(manifest.release, "action-evidence-v0.1");
  const files = [".gitattributes", "LICENSE", "README.md", "expected.jsonl", "fixtures.jsonl", "verify.mjs", "verify.test.mjs"];
  assert.deepEqual(Object.keys(manifest.files).sort(), files);
  for (const name of files) assert.equal(sha256(readFileSync(resolve(directory, name))), manifest.files[name], name);
  const rows = name => readFileSync(resolve(directory, name), "utf8").trim().split("\n").map(line => JSON.parse(line));
  verifyRecords(rows("fixtures.jsonl"), rows("expected.jsonl"));
  return "Verified 8 synthetic fixtures, expected evidence and file hashes.";
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) console.log(verifyBundle());
