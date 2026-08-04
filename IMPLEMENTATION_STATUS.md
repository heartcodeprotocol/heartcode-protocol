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

Validator Master v0.1.0 implements:

- deterministic Heartcode evaluation
- the eight Heartcode Protocol v0.1 rules
- versioned request and response contracts
- provider-independent response evaluation
- OpenAI-backed public demonstration flows
- rule-level verdicts and evidence
- request identifiers and evaluator metadata
- a bounded improvement demonstration

## Public Demonstration

The current public demonstration is available at:

https://magnificent-product-914030.framer.app/live-demo

The demonstration sends non-sensitive prompts to the configured provider, evaluates the returned response, and displays canonical backend evidence.

## Current Boundaries

The current implementation:

- evaluates response text only
- does not certify an AI system
- does not prove universal correctness, completeness, or safety
- does not expose private provider credentials
- does not publish the private Validator Master source repository
- does not claim that one model is universally better than another

## Synchronization Policy

Public protocol documents should remain stable, versioned, and reviewable.

Validator Master may evolve faster than the public protocol. A private implementation change does not automatically change the public Heartcode standard.

Changes to public rules, terminology, scoring semantics, or protocol versions must be documented in this repository through a public pull request.

## Next Milestone

Heartcode Arena MVP will compare responses from multiple providers using:

- the same submitted prompt
- the same Heartcode protocol version
- the same evaluator version
- the same evaluation scope
- side-by-side canonical evidence

The Arena will not declare a universal winner or create popularity rankings in its MVP.
