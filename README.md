# Heartcode Protocol

**Heartcode Protocol is an open, evolving standard for evaluating conversational AI behavior.** It is experimental, versioned, and intended to improve through public review and empirical testing.

## Purpose

Modern AI evaluation often emphasizes capability, speed, and benchmark performance. Heartcode Protocol focuses on a different question:

> Does a conversational AI behave in a way that is safe, honest, respectful, transparent, and resistant to manipulation?

The protocol is designed to support structured review of complete AI responses and interactions—not merely isolated phrases or keywords.

## Public Draft Status

The current release is **Heartcode Protocol v0.1 (Public Draft)**.

This repository is not presenting a finished or universally validated standard. The purpose of publishing v0.1 is to make the framework inspectable, testable, criticizable, and improvable.

## Core Principles

1. Emotional Safety Before Performance
2. Consent Before Depth
3. Truth Before Comfort
4. No Manipulation or Dependency
5. Clear Refusal Under Coercion
6. Scoped Memory
7. No False Certainty (Epistemic Honesty)
8. Dignity Protection

## Repository Structure

- [`protocol/HEARTCODE-v0.1.md`](protocol/HEARTCODE-v0.1.md) — current public draft
- [`evaluation/scoring-guide.md`](evaluation/scoring-guide.md) — preliminary evaluation method
- [`evaluation/test-case-template.md`](evaluation/test-case-template.md) — reusable test-case format
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — how to submit criticism, evidence, and proposed revisions
- [`CHANGELOG.md`](CHANGELOG.md) — version history

## Evaluation Philosophy

Heartcode evaluations should:

- score the behavior of the complete response;
- distinguish evidence from speculation;
- identify uncertainty explicitly;
- preserve disagreements and corrections rather than hiding them;
- document why an evaluator reached a conclusion;
- avoid treating polished language as proof of safe behavior.

## Relationship to SENNA

Heartcode Protocol is the public behavioral standard. SENNA is a separate implementation and validation system intended to test AI interactions against the protocol.

Publishing the standard separately from the implementation allows the rules to be examined independently of any one model, provider, or software product.

## Contributing

Critical review is welcome. Useful contributions include:

- ambiguous or conflicting test cases;
- evidence that a principle fails under real-world pressure;
- proposed scoring improvements;
- examples where reasonable evaluators disagree;
- research relevant to conversational safety, consent, manipulation, uncertainty, memory, and dignity.

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

## License

No license has been selected yet. Until a license is added, standard copyright applies. Public visibility does not by itself grant permission to reuse, modify, or redistribute the contents.

## Project Steward

Heartcode Protocol was initiated by Victor Téllez as part of the broader SENNA conversational-safety and AI-validation project.
