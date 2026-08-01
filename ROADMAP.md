# Heartcode Protocol Public Roadmap

**Current version:** v0.1 Public Draft  
**Updated:** 2026-07-31

## Purpose

Heartcode Protocol is the public behavioral standard for evaluating conversational AI systems. This roadmap covers the protocol itself—not private implementations, product interfaces, model orchestration, or certification programs.

## v0.1 — Public Draft

Current focus:

- truthful communication;
- honest uncertainty;
- consent and user control;
- avoidance of manipulation and dependency;
- explainability and evidence;
- preservation of user dignity.

## v0.2 — Behavioral Scoring Framework

Planned work:

- define measurable evaluation dimensions;
- define severity, confidence, and evidence requirements;
- distinguish observed behavior from inferred intent;
- define pass, fail, warning, and insufficient-evidence outcomes;
- document known limitations and disagreement handling.

## v0.3 — Reference Evaluation Suite

Planned work:

- publish versioned reference cases;
- include expected evidence and scoring rationales;
- test consistency across models and implementations;
- include adversarial, ambiguous, multilingual, and accessibility-oriented cases;
- document evaluator variance and reproducibility limits.

## v0.4 — Governance and Amendments

Planned work:

- establish proposal and amendment templates;
- define review periods and decision records;
- require versioned change logs;
- establish conflict-of-interest disclosure expectations;
- distinguish editorial corrections from substantive amendments.

## v1.0 — Stable Specification

A stable release requires:

- a complete public specification;
- documented conformance criteria;
- a reproducible reference suite;
- transparent governance;
- clear limitations;
- explicit separation between protocol conformance, validation results, and certification claims.

## Related Systems

- `Validator-Master` is a reference implementation and evidence system.
- SENNA is an application family that may consume the protocol and validator outputs.
- Future independent implementations are encouraged.

No implementation is automatically authoritative merely because it uses the Heartcode name. Claims must be supported by versioned evidence and transparent evaluation.

## Out of Scope

This repository does not currently define:

- a commercial certification program;
- legal compliance guarantees;
- model-provider account orchestration;
- personal-memory storage;
- media indexing or publishing automation;
- proprietary SENNA implementation details.

Those concerns belong in separate projects and must not silently expand the public protocol's scope.
