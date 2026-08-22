# Heartcode Protocol ↔ NIST TEVV-Athlon Crosswalk v0.1

**Status:** Provisional public mapping  
**Heartcode basis:** Heartcode Protocol v0.1 (Public Draft)  
**Reference implementation:** Validator Master v0.1.x / Arena contract 1.0.0  
**NIST basis:** NIST AI 200-2 ipd, *The TEVV-Athlon Framework for Evaluating AI Systems* (Initial Public Draft, August 2026)

## Purpose

This document maps existing Heartcode Protocol and Validator Master concepts to the terminology and four-stage process described in the initial public draft of NIST AI 200-2.

The purpose is interoperability and methodological clarity. It is **not** a statement of NIST approval, endorsement, certification, conformance, or compliance. NIST AI 200-2 is an initial public draft and may change. This crosswalk must therefore be treated as provisional and versioned.

Heartcode and TEVV-Athlon operate at different levels:

- **Heartcode Protocol** defines a versioned behavioral evaluation surface for conversational AI.
- **Validator Master** implements that surface and emits structured, reproducible evaluation evidence.
- **TEVV-Athlon** is a broader methodology for designing customized AI assessments from organizational goals through measurement and synthesis.

Accordingly, this is a mapping of compatible concepts, not an assertion that the two frameworks are equivalent.

## Source

NIST AI 200-2 ipd defines four stages:

1. **Articulate & Organize** — state the assessment goal, stakeholders, scope, system attributes or trustworthiness characteristics, lifecycle context, resources, and constraints.
2. **Define & Construct** — translate those goals into **Metrology Blocks**, the concepts or metrics the evaluation aims to assess, including the evidence required for each Block.
3. **Apply & Measure** — define **Events** that produce evidence for each Block and select the **Toolbox** of methods and instruments used to elicit, collect, and analyze that evidence.
4. **Synthesize & Interrogate** — analyze collected evidence, relate Events back to Blocks and assessment goals, identify limitations, and use the results to inform organizational decisions.

Reference: https://doi.org/10.6028/NIST.AI.200-2.ipd

## Crosswalk summary

| NIST TEVV-Athlon concept | Heartcode / Validator Master analogue | Mapping strength | Notes |
| --- | --- | --- | --- |
| Organizational / assessment goal | Evaluation purpose, protocol scope, benchmark or Arena test objective | Partial | Heartcode defines what its evaluator measures but does not yet require a complete organization-specific decision objective for every run. |
| System attribute / trustworthiness characteristic | Heartcode behavioral dimension or broader evaluation target | Strong conceptual mapping | Heartcode v0.1 exposes eight behavioral dimensions. These are narrower than the full range of possible AI attributes or trustworthiness characteristics. |
| Metrology Block | Versioned behavioral criterion, detector target, scoring dimension, or benchmark construct | Strong | A Heartcode dimension becomes TEVV-like only when its evidence requirements and measurement interpretation are explicitly defined. |
| Evidence definition for a Block | Finding schema, evidence span, verdict, score contribution, versioned evaluator behavior | Strong | Validator Master already records structured findings and version identifiers. |
| Event | Submitted prompt/response evaluation, Arena run, benchmark case, conversation evaluation, future agent trajectory test | Strong | Each execution context can be modeled as an Event when its purpose and conditions are defined. |
| Toolbox | Deterministic evaluator, benchmark corpus, provider harness, Arena runtime, replay/integrity utilities, human review process where applicable | Strong | The Toolbox should include both elicitation and measurement instrumentation, not only the evaluator. |
| Collected evidence | Prompt/response evidence, hashes, provider/model identity, findings, evidence spans, timestamps, run ID, harness/configuration metadata | Strong | Same-run Arena evidence export is a concrete implementation of this layer. |
| Measurement conditions | Harness configuration evidence, evaluation mode, provider settings, context/truncation/tool-loop policy | Strong but still evolving | Heartcode already states that model identity alone is insufficient for controlled comparison. Evaluation-condition coverage should continue to expand. |
| Synthesis | Cross-run reports, benchmark summaries, comparison analysis, limitations, reviewer interpretation | Partial | Validator Master currently excels at run-level evidence; organization-level synthesis remains less formalized. |
| Decision / risk-management use | Human or organizational interpretation of evaluation evidence | Gap / external responsibility | Heartcode intentionally does not convert a score into a universal deployment, procurement, safety, or certification decision. |

## Stage 1 — Articulate & Organize

### NIST intent

The TEVV-Athlon process begins by stating why the assessment exists, who will use the result, what system attributes or characteristics matter, the operational context, lifecycle stage, expected resources, and major challenges.

### Existing Heartcode mapping

Heartcode already supplies several inputs to this stage:

- a defined purpose: evidence-based evaluation of conversational AI behavior;
- an explicit protocol version and evaluation scope;
- eight current behavioral dimensions;
- public boundaries stating that results apply only to the submitted content and recorded evaluation context;
- separate public demonstration surfaces such as the Validator and Arena;
- explicit distinction between `canonical_mode` and `provider_optimized_mode` for controlled comparisons.

### Gap

A normal Heartcode run does **not yet require a formal assessment-goal manifest** containing, for example:

- the organizational question being answered;
- intended decision use;
- affected stakeholders;
- deployment or operational environment;
- lifecycle stage;
- expected cost/time/resource envelope;
- known assessment challenges.

### Recommended interoperability field group

A future optional assessment manifest could contain:

```text
assessmentGoal
intendedUse
stakeholders
systemUnderTest
operationalContext
lifecycleStage
constraints
knownLimitations
```

This should remain separate from the Heartcode behavioral verdict contract so that organizational context does not silently change detector results.

## Stage 2 — Define & Construct

### NIST intent

NIST AI 200-2 calls the concrete concepts or metrics selected for assessment **Metrology Blocks**. Each Block should have a precise definition and specify the information required as evidence.

### Existing Heartcode mapping

The closest Heartcode analogue is the versioned behavioral dimension and its implemented measurement logic.

For Heartcode Protocol v0.1, the current evaluation surface is:

1. Emotional Safety Before Performance
2. Consent Before Depth
3. Truth Before Comfort
4. No Manipulation or Dependency
5. Clear Refusal Under Coercion
6. Scoped Memory
7. No False Certainty
8. Dignity Protection

Validator Master then operationalizes these concepts through deterministic evaluation logic and structured findings.

### Mapping rule

For crosswalk purposes:

> A Heartcode behavioral dimension may function as a TEVV-Athlon Metrology Block, or may contain multiple Blocks, depending on how narrowly the evidence requirement is defined.

For example, **No False Certainty** is a high-level behavioral dimension. Individual detector targets such as unsupported guarantees, unsupported certainty language, or grounding-gap regressions may be better understood as narrower Blocks or measurement constructs underneath that dimension.

### Gap

Heartcode should avoid claiming that a dimension name alone constitutes a complete metrological definition. A stronger future protocol version should make explicit, for each measured construct:

- construct definition;
- inclusion and exclusion boundaries;
- required evidence;
- measurement method;
- known failure modes;
- validity limitations;
- aggregation rules, if any.

## Stage 3 — Apply & Measure

### NIST intent

NIST separates the activity that produces evidence (**Event**) from the methods and instruments used to collect and analyze it (**Toolbox**).

### Existing Heartcode mapping

This distinction maps particularly well to Validator Master.

Possible Heartcode / Validator Master **Events** include:

- one direct response evaluation;
- one provider-backed prompt/response evaluation;
- one multi-provider Arena run;
- one versioned benchmark case;
- one multi-turn conversation evaluation;
- a future bounded agent-trajectory evaluation.

The current **Toolbox** includes or can include:

- deterministic Heartcode evaluator;
- versioned evaluation contracts;
- provider-neutral Arena runtime;
- provider adapters;
- benchmark prompts and fixtures;
- evidence-span extraction;
- cryptographic SHA-256 hashing;
- artifact integrity verification;
- offline replay;
- harness configuration evidence;
- CI regression tests;
- external human review where explicitly part of an assessment design.

### Same-run evidence

Validator Master now supports the important requirement that an Arena evidence artifact be generated from the same completed Arena response rather than reconstructed from a later execution. The artifact can preserve:

- `arenaRunId`;
- prompt evidence and SHA-256;
- provider/model result evidence;
- response SHA-256;
- Heartcode protocol version;
- evaluator version;
- evaluation scope;
- findings and evidence;
- completion metadata;
- artifact integrity hash.

This is a strong implementation-level analogue to collecting evidence from an Event using a defined Toolbox.

### Measurement-condition gap

Controlled AI evaluation also depends on generation conditions. Heartcode already requires harness configuration evidence for controlled model comparisons, including API surface, reasoning retention, context strategy, compaction, truncation, maximum context, tool-loop policy, and a non-secret configuration fingerprint.

A future version should expand this into a more general **evaluation-conditions manifest**, especially for capability and agentic evaluations. Candidate fields include:

```text
testTimeBudget.totalTokens
allocationMode: serial | parallel | mixed
aggregationPolicy
attemptCount
turnLimit
durationLimit
toolPolicy
networkPolicy
```

These fields should be versioned and should not be retroactively inferred for historical evidence.

## Stage 4 — Synthesize & Interrogate

### NIST intent

The final TEVV-Athlon stage connects collected evidence back through Events and Blocks to the original assessment goals, then asks how the results should influence organizational decisions.

### Existing Heartcode mapping

Validator Master currently provides several useful inputs to synthesis:

- explicit provider/model attribution;
- protocol and evaluator versioning;
- structured findings and evidence spans;
- deterministic scores within the implemented evaluation surface;
- same-run evidence artifacts;
- benchmark and regression fixtures;
- preserved failure evidence;
- known-limitations language;
- public external-review workflow.

### Gap

Heartcode currently does **not** define a universal policy that converts a run score into an organizational decision. That is intentional and should remain so.

A score such as `100/100` means only that the evaluated content did not trigger violations under the implemented, versioned Heartcode evaluation surface for that run. It does not establish that the model is safe, suitable for deployment, compliant with law, appropriate for a high-stakes use, or certified by Heartcode, NIST, or any other body.

The missing synthesis layer is therefore not simply another score. A future report format should support:

- assessment goal;
- summarized Event results;
- Block-level evidence;
- measurement and validity limitations;
- conflicting or inconclusive evidence;
- comparison boundaries;
- reviewer interpretation;
- decision owner;
- decision or action taken outside the evaluator.

## Relationship to the NIST AI RMF

NIST AI 200-2 describes the TEVV-Athlon as complementary to the NIST AI RMF:

- **GOVERN / MAP** provide organizational goals, governance context, and operating environment as inputs;
- the TEVV-Athlon primarily performs a **MEASURE** role;
- synthesized results inform **MANAGE** decisions.

Heartcode and Validator Master currently fit most naturally inside the **measurement evidence** portion of that flow. They should not be represented as replacements for organizational governance, context mapping, risk acceptance, legal analysis, or management decisions.

## Important non-equivalence boundaries

This crosswalk does **not** mean:

- Heartcode is a NIST standard;
- Validator Master is NIST-approved;
- a Heartcode evaluation is automatically a complete TEVV-Athlon;
- a Heartcode dimension is automatically a validated metrological construct;
- a passing Heartcode score proves safety, compliance, deployment readiness, or trustworthiness;
- NIST has reviewed or endorsed this mapping.

## Gaps revealed by the crosswalk

The most important gaps for future Heartcode / Validator Master work are:

1. **Assessment-goal manifest** — explicit purpose, stakeholders, intended decision use, operational context, and lifecycle stage.
2. **Construct validity documentation** — stronger definitions and validity boundaries for each measured behavioral construct.
3. **Event registry / benchmark specification** — explicit mapping from benchmark cases or evaluation runs to the construct they are intended to probe.
4. **Evaluation-conditions contract** — broader recording of test-time compute, attempts, turns, duration, allocation strategy, tool/network permissions, and related conditions when relevant.
5. **Synthesis report contract** — a versioned report that distinguishes measurement results from interpretation, limitations, and downstream decisions.
6. **Independent review evidence** — clearer representation of human or third-party review where an assessment relies on it.

These are roadmap candidates, not claims that the current v0.1 implementation is deficient for its stated scope.

## Recommended architecture boundary

The crosswalk supports keeping four layers separate:

```text
Assessment intent
      ↓
Evaluation design
      ↓
Measurement execution + evidence
      ↓
Synthesis / decision use
```

For Heartcode / Validator Master this corresponds approximately to:

```text
Assessment manifest (future)
      ↓
Protocol + benchmark / Event definition
      ↓
Validator Master runtime + evidence artifact
      ↓
Report / reviewer / organizational decision (future)
```

This separation prevents organizational decisions from being encoded implicitly into a detector score and preserves reproducibility at the measurement layer.

## Versioning policy

This crosswalk is tied to:

- Heartcode Protocol v0.1;
- current Validator Master evidence architecture as of August 2026;
- NIST AI 200-2 **Initial Public Draft**.

If NIST changes the terminology, stages, definitions, or guidance in a later draft or final publication, this crosswalk should receive a new version rather than silently changing the meaning of v0.1.

## Public-comment opportunity

NIST states that the public-comment period for NIST AI 200-2 ipd runs from **August 7, 2026 through October 6, 2026** and invites input from organizations conducting AI evaluations and users of evaluation reports.

After this crosswalk receives public review, Heartcode contributors may use the identified interoperability questions and gaps to prepare a focused public comment. Any submission should describe concrete evaluation experience and methodological observations without implying NIST affiliation or endorsement.
