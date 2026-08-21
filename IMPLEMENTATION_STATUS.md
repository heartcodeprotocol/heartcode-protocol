# Public Implementation Status

## Purpose

This document explains how the public Heartcode Protocol repository relates to Validator Master, the private reference implementation.

## Repository Roles

### heartcode-protocol

Public repository for:

- the Heartcode Protocol specification
- public behavioral dimensions and terminology
- public roadmap and release notes
- public implementation status
- public benchmark and evidence artifacts when approved for release

### Validator Master

Private engineering repository for:

- evaluator implementation
- versioned contracts
- provider adapters
- runtime orchestration
- API endpoints
- browser integration clients
- deployment and operational configuration
- internal engineering history

The private repository is not required for someone to read, discuss, critique, or independently implement the Heartcode Protocol.

## Current Reference Implementation

Validator Master v0.1.0 and subsequent Mission 2 work implement:

- deterministic Heartcode evaluation
- the eight Heartcode Protocol v0.1 behavioral dimensions
- versioned request and response contracts
- provider-independent response evaluation
- production public-evaluation runtimes for OpenAI, Anthropic, Google Gemini, xAI Grok, and NVIDIA
- dimension-level verdicts and evidence
- request and Arena run metadata
- a bounded improvement demonstration
- the Heartcode Arena MVP
- provider-order preservation
- partial-provider-failure handling
- canonical Arena evidence export and offline replay support in the reference implementation

Provider and model identity should be read from the runtime evidence returned for a specific run rather than inferred from this document.

## Public Demonstration

The public website is available at:

https://demo.heartcodeprotocol.org/

It includes:

- Heartcode Validator — single-response evaluation
- Heartcode Improvement Demonstration — bounded before/after evaluation
- Heartcode Arena — same-prompt multi-provider comparison

The production public-evaluation runtime supports OpenAI, Anthropic, Google Gemini, xAI Grok, and NVIDIA. All five single-provider `/api/evaluate` paths were production-smoke verified on August 21, 2026 with matching provider identity and `heartcode-evaluator.v20`.

This backend/runtime status is separate from public Framer UI availability. A provider is not considered publicly exposed on a particular UI surface until that surface is previewed, published, and smoke-tested. Provider failures must remain visible rather than being silently removed.

## Current Boundaries

The current implementation:

- evaluates response text under the current ordinary `response_text_only` scope unless a separately versioned extension is explicitly used
- does not certify an AI system
- does not prove universal correctness, completeness, or safety
- does not expose private provider credentials
- does not publish the private Validator Master source repository
- does not claim that one model is universally better than another
- does not calculate scores or evaluate responses inside Framer
- does not hide provider failures in the Arena
- does not treat provider-generated citations or grounding as automatic Heartcode factual certification

## Current Mission Status

- Mission 1 — Live Validator: complete at the reference-implementation/runtime layer
- Mission 2 — Heartcode Arena MVP: complete
- Mission 2.1 — Stabilization and adoption: active

The immediate public UI milestone is to synchronize the Framer Live Validator with the verified five-provider runtime and expose canonical same-run Arena evidence download without moving evidence construction into the browser.

## Synchronization Policy

Public protocol documents should remain stable, versioned, and reviewable.

Validator Master may evolve faster than the public protocol. A private implementation change does not automatically change the public Heartcode standard.

Changes to public behavioral dimensions, terminology, scoring semantics, or protocol versions must be documented in this repository through a public pull request.

Provider-runtime changes are implementation status, not protocol-definition changes. Public documentation should report them with surface-specific claim boundaries.

## Next Milestone

Mission 2.1 focuses on:

- stabilizing the public demonstrations
- keeping website and repository terminology synchronized
- completing five-provider Live Validator public UI verification
- exposing same-run canonical Arena evidence export in the public demo
- improving contributor onboarding
- collecting and triaging real feedback
- fixing verified defects without expanding scope unnecessarily

Mission 3 focuses on production multi-provider hardening, including provider-account data controls, operational safeguards, cross-provider resilience evidence, and expanded evidence/report workflows.
