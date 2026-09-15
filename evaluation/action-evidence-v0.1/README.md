---
license: mit
language:
- en
task_categories:
- other
tags:
- evaluation
- synthetic
- governance
- reproducibility
pretty_name: Heartcode Experimental Action Evidence v0.1
configs:
- config_name: fixtures
  data_files: fixtures.jsonl
- config_name: expected
  data_files: expected.jsonl
---

# Heartcode Experimental Action Evidence v0.1

Eight original synthetic fixtures for an experimental action-submission boundary.
GitHub is canonical: [release directory](https://github.com/heartcodeprotocol/heartcode-protocol/tree/main/evaluation/action-evidence-v0.1).
Hugging Face is a distribution copy of these exact files.

## What this measures

A host-owned test grant allows exactly one bound RESET proposal. Missing, expired,
revoked, stale, mismatched or unverifiable authority blocks submission to a fake
environment. Expected records include deterministic decisions, reason codes,
execution outcomes and integrity hashes. These are software regression outcomes,
not independent human labels or the eight conversational Heartcode rule verdicts.

The ARC-shaped fixture names a synthetic session for ls20. No upstream ARC agent,
game, model, provider or live scorecard was run. No ARC endorsement, conformance,
task-performance improvement or general safety conclusion is established.

## Files and schema

- fixtures.jsonl: eight rows with case_id, schema_version, synthetic, input and input_sha256.
  Input contains the proposal, separate trustedTestAuthority, fixed time and host
  bindings. The test host provides authority; copying this JSON grants no permission.
- expected.jsonl: case_id, input_sha256, environment_calls and evidence.
  Evidence contains schemaVersion, policy, observedAt, proposal, grant, decision,
  reason, execution, receiptId, submissionsReserved and artifactSha256.
- manifest.json: release identity, generation source revision and SHA-256 of each
  listed file's exact UTF-8 bytes (excluding the manifest itself).
- verify.mjs and verify.test.mjs: standalone integrity/consistency verifier and tests.
- LICENSE: MIT terms scoped to this directory's newly authored material.

A grant may be null in evidence if host binding checks fail before authority is
resolved. Expected decisions are for policy experimental-action-boundary.v0.1,
not an open-ended authorization policy.

## Verify offline

Requires Node.js 22 or newer; no package installation, network, model or GPU.

```sh
node verify.mjs
node --test verify.test.mjs
```

The verifier checks the file manifest, record identity, input/evidence hashes and
declared call/outcome consistency. It does not independently re-run the private
evaluator or authenticate the issuer. Full regeneration uses the pinned
Validator Master generation source recorded in the manifest and requires access
to that implementation. Hashes are unkeyed integrity checks, not signatures.

## Provenance, license and privacy

All rows were newly authored with Codex for Heartcode Protocol on 2026-09-15.
Identifiers, authority, receipts and timestamps are synthetic. There are no user
conversations, provider responses, credentials, payment data or imported ARC game
assets. The MIT license covers this directory only; it does not relicense the
protocol specification, trademarks, third-party artifacts or Validator Master.

## Limitations and intended use

Use for regression testing evidence importers and studying fail-closed semantics.
Eight hand-designed cases provide narrow coverage. There is no independent
annotation, measured benchmark accuracy, multilingual coverage, durable authority
store or production authentication system. The in-memory implementation's replay
state is process-local and must not be treated as durable security enforcement.

## Version and sync policy

Submit corrections to the public GitHub repository first. Publish a new version
when fixtures, policy or expected outputs change; preserve old releases. HF copies
must match the manifest. Verify downloads after upload and retain the HF revision.
No paid inference service or duplicated Validator Master application is needed.
