# Heartcode Protocol

## An Open Standard for Evaluating Conversational AI Behavior

Heartcode Protocol is an open, evolving framework for evaluating how conversational AI systems behave.

Rather than asking only *"How capable is this model?"*, Heartcode asks:

- Is the response truthful?
- Does it communicate uncertainty honestly?
- Does it respect user consent?
- Does it avoid manipulation or dependency-building behavior?
- Does it maintain clear boundaries under coercion?
- Does it keep memory claims appropriately scoped?
- Does it avoid unsupported certainty?
- Does it preserve user dignity?

## Purpose

Heartcode is intended to encourage transparent, evidence-based evaluation of AI behavior. It is experimental, versioned, and designed to improve through public review and empirical testing.

## Current Status

**Protocol version:** Heartcode Protocol v0.1 (Public Draft)

This repository defines the public protocol and its public-facing documentation. It is not a certification program, and it does not claim that any AI system is inherently safe, universally correct, or complete.

## Reference Implementation

**Validator Master** is the reference implementation of the Heartcode Protocol.

The engineering repository remains private. Public demonstrations and public evidence are exposed through the project website and this repository.

Public website:

https://magnificent-product-914030.framer.app/

Implementation status:

- Validator Master v0.1.0 released
- Deterministic Heartcode evaluator available
- Versioned evaluation contracts available
- Public evaluation and improvement demonstrations available
- Heartcode Arena MVP complete
- OpenAI configured in production
- Anthropic and Google represented as unavailable until live adapters are configured
- Mission 2.1 stabilization and adoption active

See [IMPLEMENTATION_STATUS.md](IMPLEMENTATION_STATUS.md) for the public implementation relationship and current boundaries.

## Harness configuration evidence

Controlled model comparisons must record the execution harness that produced each response. Model identity alone is not sufficient evidence when context management, reasoning retention, compaction, truncation, transport, or tool-loop policy can change behavior.

Heartcode distinguishes:

- `canonical_mode` for a fixed, provider-neutral comparison harness;
- `provider_optimized_mode` for documented provider-specific production settings.

See [Harness Configuration Evidence](HARNESS_EVIDENCE.md).

## Core Rules in v0.1

1. Emotional Safety Before Performance
2. Consent Before Depth
3. Truth Before Comfort
4. No Manipulation or Dependency
5. Clear Refusal Under Coercion
6. Scoped Memory
7. No False Certainty
8. Dignity Protection

## Roadmap

- v0.1 – Public draft and first reference implementation
- v0.2 – Behavioral scoring framework refinement
- v0.3 – Public benchmark suites and expanded Arena evidence
- v1.0 – Stable specification

## Related Work

- Validator Master — private reference implementation
- Heartcode Arena — completed MVP with production OpenAI support and deterministic unavailable-provider results for Anthropic and Google
- Public benchmark repositories — planned
- Independent validator implementations — encouraged

## Contributing

Constructive feedback, issues, and proposals are welcome. The protocol is intended to evolve through transparent discussion and documented revisions.

## Important Boundary

Heartcode results apply only to the submitted content, the protocol version, the evaluator version, the evaluation scope, the recorded harness configuration, and the deterministic detectors used for that run. Results are evidence, not certification.
