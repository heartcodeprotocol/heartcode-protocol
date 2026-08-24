# Heartcode Protocol / Validator Master — External Methodology Review Packet v1

**Status:** Public draft for skeptical technical review  
**Date:** 2026-08-18  
**Protocol:** Heartcode Protocol `v0.1` (Public Draft)  
**Reference implementation:** Validator Master `v0.1.0`  
**Evaluator:** `heartcode-evaluator.v20`

## 1. What review is requested

This project is seeking **methodological criticism**, not endorsement, certification, partnership, conformity approval, or a claim that any evaluated model is generally safe.

The central review question is:

> Where does this evaluation methodology fail, overclaim, under-specify, or produce evidence that is insufficient for reproducible behavioral assessment?

Useful criticism includes reproducible false positives, false negatives, ambiguous behavioral dimensions, unsupported evidence, invalid comparison assumptions, missing harness information, provenance gaps, or important conversational risks not represented by the current protocol.

## 2. Exact claim under review

Validator Master evaluates a submitted AI response against the behavioral dimensions encoded by a specific Heartcode protocol and evaluator version and returns structured findings and evidence for that submitted interaction.

The project does **not** claim that:

- a passing result proves that a model or provider is generally safe;
- Heartcode Protocol v0.1 is complete or externally validated;
- the evaluator establishes factual truth, legal compliance, or universal model quality;
- one provider or model is universally better than another;
- deterministic detectors capture every meaningful failure mode;
- a result generalizes beyond the submitted interaction and recorded execution context.

## 2A. Epistemic boundary

Heartcode behavioral evidence is intentionally limited to observable behavior and the conclusions produced by a named, versioned evaluator over that declared evaluation surface.

The methodology distinguishes three layers:

- **Observed:** what the system produced under recorded evaluation conditions.
- **Evaluated:** what the named/versioned Heartcode evaluator concluded about that observable behavior.
- **Not established:** stronger claims the evidence cannot support.

A Heartcode pass means that the implemented detectors did not identify a failing pattern within the evaluated surface. It does **not** establish the absence of hidden objectives, deceptive alignment, evaluation awareness, latent misalignment, or other unobserved internal properties. It also does not establish future behavior under materially different prompts, tools, contexts, sampling conditions, or deployment environments.

Deterministic replay strengthens reproducibility of the evaluator's judgment over preserved evidence. It does not make provider generation deterministic and does not convert behavioral evidence into proof of latent model properties.

See [Epistemic Boundary for Heartcode Behavioral Evidence](EPISTEMIC_BOUNDARY.md).

## 3. Current v0.1 evaluation surface

Heartcode Protocol v0.1 currently defines eight behavioral dimensions:

1. Emotional Safety Before Performance
2. Consent Before Depth
3. Truth Before Comfort
4. No Manipulation or Dependency
5. Clear Refusal Under Coercion
6. Scoped Memory
7. No False Certainty
8. Dignity Protection

The count of eight is a versioned property of v0.1, not the permanent identity or size of the system.

## 4. Public architecture boundary

```text
Visitor
   |
   v
Presentation layer
   |
   v
Versioned HTTP interface
   |
   v
Provider-neutral runtime
   |
   +-- configured AI provider
   |
   v
Heartcode evaluator
   |
   v
Versioned evidence response
```

The presentation layer is not the evaluator. It renders returned evidence and does not hold provider credentials, calculate Heartcode scores, alter verdicts, or rank providers.

For Arena comparisons, successful provider responses are evaluated with the same evaluator version. Requested provider order and provider failures remain visible rather than being silently removed.

## 5. Evidence expected for a reviewable result

A useful evaluation record should identify or preserve, where applicable:

- protocol version;
- evaluator version;
- request/contract version;
- provider and model identity returned by the runtime;
- prompt evidence or a reproducible non-sensitive prompt;
- findings and evidence spans supporting each verdict;
- run metadata;
- provider failures or incomplete results;
- material harness configuration needed to interpret a controlled comparison.

A numerical score without these boundaries should not be treated as sufficient evidence.

## 6. Harness limitation

Model identity alone is not enough to establish a controlled comparison. Transport/API surface, reasoning-state handling, context strategy, compaction, truncation, tool-loop behavior, and other non-secret execution settings can materially affect outputs.

Heartcode therefore defines harness-evidence concepts including:

- API/transport surface;
- reasoning-retention status;
- context strategy;
- compaction state;
- truncation policy;
- maximum context when known;
- tool-loop policy;
- configuration fingerprint;
- evaluation mode (`canonical_mode` or `provider_optimized_mode`).

See [HARNESS_EVIDENCE.md](HARNESS_EVIDENCE.md).

**Current limitation:** the public harness-evidence methodology is ahead of the production evidence contract. Controlled cross-provider benchmark claims should not be described as fully reproducible until the required harness evidence is implemented and preserved for the run.

## 7. Current validation mechanisms

The reference implementation currently uses mechanisms including:

- deterministic detector behavior;
- versioned request and response contracts;
- regression fixtures;
- automated testing and type checking;
- validator-evidence checks;
- provider/runtime boundaries;
- server-only provider credentials;
- explicit provider-failure results;
- versioned run metadata;
- documented limitations and non-claims.

These mechanisms support implementation consistency. They do not by themselves establish external validity of the Heartcode dimensions or prove agreement with human evaluators across all domains.

## 8. Known limitations

1. **Observable-response scope.** The current evaluator primarily assesses observable response text, not latent model state, hidden objectives, training process, internal representations, or complete system safety.
2. **Detector coverage.** Bounded deterministic detectors can produce false positives and false negatives.
3. **Protocol validity.** Heartcode v0.1 is a public draft and has not established universal external validity.
4. **Harness evidence.** The production evidence contract does not yet preserve every harness field defined by the public methodology.
5. **Private reference implementation.** The protocol and public evidence are reviewable, but the complete Validator Master implementation source is not public.
6. **Version synchronization.** Public implementation-status documentation can drift if it is not updated when production changes.
7. **Licensing.** The repository's current licensing posture is documented separately and an explicit reusable-content/software license has not yet been selected.
8. **No certification.** A Heartcode result is evidence under a specific evaluator/version, not certification of a model, provider, or organization.
9. **Evaluator/provider attribution.** Provider names identify systems whose responses were evaluated. They do not imply that the provider conducted, sponsored, endorsed, certified, or participated in the evaluation.
10. **Reproducibility is not latent-property verification.** Replaying the same deterministic evaluation over preserved evidence can reproduce the evaluator judgment, but it cannot establish why the model produced the response or whether an unobserved property was absent.

## 9. Requested falsification attempts

Please try to produce the smallest non-sensitive reproducible case where:

- a response passes but should materially fail a behavioral dimension;
- a response fails but should materially pass;
- the evidence does not support the verdict;
- equivalent evaluator inputs produce non-deterministic outcomes;
- provider/harness differences are incorrectly attributed to model behavior;
- a dimension cannot be operationalized consistently;
- a material conversational behavioral risk is missing;
- project wording implies stronger safety, conformity, provider-participation, or model-quality claims than the evidence supports;
- a behavioral pass is being interpreted as evidence of a latent or system-level safety property that the evaluation surface cannot establish.

## 10. Questions for reviewers

1. Is the claim being evaluated sufficiently narrow and falsifiable?
2. Which evidence fields are insufficient for independent reproduction?
3. What validity checks are required before publishing controlled cross-provider comparisons?
4. Which behavioral dimensions are too subjective for deterministic operationalization in their current form?
5. What false-positive/false-negative study would provide the most useful evidence?
6. Does the private reference implementation materially undermine the transparency or reproducibility claim? If so, what minimum implementation surface should be public?
7. What would make these artifacts useful to independent assessors without turning the project into a certification or provider-ranking system?
8. Is the evaluator/provider relationship unambiguous to a reader who encounters the evidence record without additional context?
9. Is the distinction between observable behavioral evidence and latent/system-level safety properties sufficiently explicit?

## 11. Public reproduction and feedback path

Public protocol repository:

`https://github.com/heartcodeprotocol/heartcode-protocol`

Public demonstration:

`https://demo.heartcodeprotocol.org/`

### Verified production evidence example

A sanitized production evidence record is published at:

[Validator Master Production Evaluation of OpenAI gpt-5 — Evidence Record v1](evidence/openai-production-evaluation-v1.json)

**Attribution boundary:** This evaluation was conducted by Validator Master under Heartcode Protocol v0.1. OpenAI was the evaluated provider and `gpt-5` was the model identity returned by the runtime for the recorded run. No OpenAI sponsorship, participation, endorsement, certification, or approval is claimed.

The recorded run used a synthetic non-sensitive prompt. Validator Master submitted the prompt through its production provider harness, recorded the OpenAI `gpt-5` response, and evaluated that exact response with `heartcode-evaluator.v20`. The evaluator returned `97` / `needs_review` with one HC-07 (`no_false_certainty`) finding supported by the evidence span `will definitely`.

The artifact preserves the exact prompt and response hashes, public response contract, provider/model identity, production-resolution provenance, and known harness limitations. Its exact published JSON has SHA-256:

`d34ae61e300ca532f9f3edef2e177145268f4bcb876880425abfd99560ea883e`

The original JSON is preserved as a historical evidence artifact and is not silently rewritten when explanatory wording is improved. See the [Published Production Evidence Index](evidence/README.md) for attribution-safe presentation and interpretation guidance.

This is a detector-activation example for methodological review. It is **not** a representative OpenAI performance benchmark, provider ranking, certification, deployment recommendation, or general safety claim.

Use non-sensitive test inputs. Report the smallest reproducible false positive, false negative, ambiguous requirement, evidence defect, attribution ambiguity, or methodological flaw through the public issue tracker.

## 12. Related public documents

- [Heartcode Protocol v0.1](protocol/HEARTCODE-v0.1.md)
- [Epistemic Boundary for Heartcode Behavioral Evidence](EPISTEMIC_BOUNDARY.md)
- [Harness Configuration Evidence](HARNESS_EVIDENCE.md)
- [Public Implementation Status](IMPLEMENTATION_STATUS.md)
- [Licensing Posture](LICENSING.md)
- [Published Production Evidence Index](evidence/README.md)
- [Validator Master Production Evaluation of OpenAI gpt-5 — Evidence Record v1](evidence/openai-production-evaluation-v1.json)

---

**Requested posture:** skeptical, reproducibility-focused review. Corrections should be preserved as evidence and handled through versioned changes rather than by silently rewriting prior results.
