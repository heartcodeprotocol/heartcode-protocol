import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { verifyBundle, verifyRecords } from "./verify.mjs";
const rows = name => readFileSync(new URL(name, import.meta.url), "utf8").trim().split("\n").map(JSON.parse);
test("bundle passes offline verification", () => assert.match(verifyBundle(), /Verified 8/));
test("modified input is rejected", () => {
  const fixtures = rows("fixtures.jsonl");
  fixtures[0].input.proposal.action = "CHANGED";
  assert.throws(() => verifyRecords(fixtures, rows("expected.jsonl")), /Input hash mismatch/);
});
test("modified decision is rejected", () => {
  const expected = rows("expected.jsonl");
  expected[0].evidence.decision = "block";
  assert.throws(() => verifyRecords(rows("fixtures.jsonl"), expected), /Evidence hash mismatch/);
});
test("missing or duplicate output is rejected", () => {
  const expected = rows("expected.jsonl");
  expected[1] = expected[0];
  assert.throws(() => verifyRecords(rows("fixtures.jsonl"), expected), /Duplicate outputs/);
});
