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

## Licensing Status

This repository does not currently contain an explicit open-source or open-content license. The term **open standard** here refers to the public, versioned specification and public review process; it should not be interpreted as an unstated grant of legal reuse rights.

See [LICENSING.md](LICENSING.md) for the current project posture and the licensing decision that remains open.

## Reference Implementation

**Validator Master** is the reference implementation of the Heartcode Protocol.

The engineering repository remains private. Public demonstrations and public evidence are exposed through the project website and this repository.

Public website:

https://demo.heartcodeprotocol.org/

Public Heartcode Improvement Demonstration:

https://demo.heartcodeprotocol.org/heartcode-improvement-demonstration

Implementation status:

- Validator Master v0.1.0 released
- Deterministic Heartcode evaluator available
- Versioned evaluation contracts available
- Public evaluation and improvement demonstrations available
- Heartcode Arena MVP complete
- OpenAI, Anthropic, and Google Gemini configured in production
- Mission 2.1 stabilization and adoption active

Provider and model identity should be read from the runtime evidence returned for a specific run rather than inferred from this document.

See [IMPLEMENTATION_STATUS.md](IMPLEMENTATION_STATUS.md) for the public implementation relationship and current boundaries.

## Try to Break It

If you work on LLM evaluation, AI red teaming, GenAI security, responsible AI, model risk, or AI governance, external criticism is useful.

Try the public demonstration with non-sensitive prompts and look for a reproducible case where:

- Heartcode passes a response you think should fail;
- Heartcode fails a response you think should pass;
- the Improvement Demo revises a response in a way you think is worse or misleading;
- the displayed evidence or provenance is unclear; or
- an important behavioral failure mode is not represented by the current protocol.

If you find one, open a public issue with the smallest reproducible example, the observed result, the result you expected, and why. Do not include personal, medical, legal, confidential, proprietary, identifying, or otherwise sensitive information.

[Open an issue](https://github.com/heartcodeprotocol/heartcode-protocol/issues/new)

For a structured description of the exact claim, evidence boundary, known limitations, and requested falsification attempts, see the [External Methodology Review Packet v1](EXTERNAL_REVIEW_PACKET_V1.md).

## Harness configuration evidence

Controlled model comparisons must record the execution harness that produced each response. Model identity alone is not sufficient evidence when context management, reasoning retention, compaction, truncation, transport, or tool-loop policy can change behavior.

Heartcode distinguishes:

- `canonical_mode` for a fixed, provider-neutral comparison harness;
- `provider_optimized_mode` for documented provider-specific production settings.

See [Harness Configuration Evidence](HARNESS_EVIDENCE.md).

## Behavioral Dimensions in v0.1

1. Emotional Safety Before Performance
2. Consent Before Depth
3. Truth Before Comfort
4. No Manipulation or Dependency
5. Clear Refusal Under Coercion
6. Scoped Memory
7. No False Certainty
8. Dignity Protection

These eight dimensions are the current versioned evaluation surface of Heartcode Protocol v0.1, not the permanent identity or size of the system.

## Roadmap

- v0.1 – Public draft and first reference implementation
- v0.2 – Behavioral scoring framework refinement
- v0.3 – Public benchmark suites and expanded Arena evidence
- v1.0 – Stable specification

## Related Work

- Validator Master — private reference implementation
- Heartcode Arena — completed MVP with production OpenAI, Anthropic, and Google Gemini support
- Public benchmark repositories — planned
- Independent validator implementations — encouraged

## Contributing

Constructive feedback, issues, and proposals are welcome. The protocol is intended to evolve through transparent discussion and documented revisions.

## Important Boundary

Heartcode results apply only to the submitted content, the protocol version, the evaluator version, the evaluation scope, the recorded harness configuration, and the deterministic detectors used for that run. Results are evidence, not certification.
