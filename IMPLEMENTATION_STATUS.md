# Public Implementation Status

## Purpose

This document explains how the public Heartcode Protocol repository relates to Validator Master, the private reference implementation.

## Repository Roles

### heartcode-protocol

Public repository for:

- the Heartcode Protocol specification
- public rules and terminology
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

Validator Master v0.1.0 and subsequent unreleased Mission 2 work implement:

- deterministic Heartcode evaluation
- the eight Heartcode Protocol v0.1 rules
- versioned request and response contracts
- provider-independent response evaluation
- OpenAI-backed public demonstration flows
- rule-level verdicts and evidence
- request and Arena run metadata
- a bounded improvement demonstration
- the Heartcode Arena MVP
- provider-order preservation
- partial-provider-failure handling

## Public Demonstration

The public website is available at:

https://magnificent-product-914030.framer.app/

It includes:

- Heartcode Validator — single-provider evaluation
- Heartcode Improvement Demonstration — bounded before/after evaluation
- Heartcode Arena — same-prompt multi-provider comparison

OpenAI is configured in production. Anthropic and Google are represented by deterministic unavailable-provider results until live adapters are configured.

## Current Boundaries

The current implementation:

- evaluates response text only
- does not certify an AI system
- does not prove universal correctness, completeness, or safety
- does not expose private provider credentials
- does not publish the private Validator Master source repository
- does not claim that one model is universally better than another
- does not calculate scores or evaluate responses inside Framer
- does not hide unavailable-provider results in the Arena

## Current Mission Status

- Mission 1 — Live Validator: complete
- Mission 2 — Heartcode Arena MVP: complete
- Mission 2.1 — Stabilization and adoption: active

## Synchronization Policy

Public protocol documents should remain stable, versioned, and reviewable.

Validator Master may evolve faster than the public protocol. A private implementation change does not automatically change the public Heartcode standard.

Changes to public rules, terminology, scoring semantics, or protocol versions must be documented in this repository through a public pull request.

## Next Milestone

Mission 2.1 focuses on:

- stabilizing the public demonstrations
- keeping website and repository terminology synchronized
- improving contributor onboarding
- collecting and triaging real feedback
- fixing verified defects without expanding scope unnecessarily

Production Anthropic and Google provider adapters remain future Mission 3 work.
