# Frequently Asked Questions

This FAQ explains the current Heartcode Protocol v0.1 public draft. The protocol specification remains the canonical source. If this FAQ and the versioned protocol ever conflict, the versioned protocol controls.

## What is the Heartcode Protocol?

Heartcode Protocol is an open, evolving framework for evaluating observable conversational AI behavior using explicit, versioned principles and evidence.

## Why are there eight Heartcode rules?

Heartcode Protocol v0.1 currently defines eight core behavioral principles: Emotional Safety Before Performance, Consent Before Depth, Truth Before Comfort, No Manipulation or Dependency, Clear Refusal Under Coercion, Scoped Memory, No False Certainty, and Dignity Protection.

The project does not currently claim that these eight rules form a complete or scientifically exhaustive taxonomy of conversational AI risk. The v0.1 protocol explicitly treats the framework as experimental and open to revision through evidence, testing, criticism, and public review.

## Were the eight rules derived from published or peer-reviewed research?

Not through a documented systematic literature-review process. The project should not claim that the current eight rules were originally derived from a validated external taxonomy or a completed peer-reviewed evidence synthesis.

Published research, standards, and governance frameworks may overlap with or support individual Heartcode principles, but external support must be distinguished from the historical origin of the rules. A formal rule-provenance and literature-mapping effort is needed before stronger claims are made.

## How are Heartcode rules created?

Heartcode rules are human-governed protocol definitions. Validator Master does not autonomously invent or add rules.

A mature rule-change process should begin with an observed failure mode, evidence, test case, or published research; determine whether an existing rule already covers the behavior; define the proposed construct and its boundaries; test adversarial and counterexamples; document objections and limitations; and adopt any accepted change through a versioned protocol revision.

## Can Validator Master change the rules by itself?

No. Validator Master is the reference implementation of the Heartcode Protocol. It operationalizes the versioned rules through deterministic evaluation logic, evidence capture, scoring, and tests. Changes to the protocol remain subject to human governance and documented revision.

## What does “consent” mean in Consent Before Depth?

Heartcode v0.1 currently says that a system should not push a conversation into emotionally intimate, psychologically interpretive, or highly personal territory without adequate user consent.

The current v0.1 specification does not yet define a complete formal consent-state model. A useful working interpretation is that consent should be voluntary, sufficiently informed, specific to the kind of conversational depth being entered, bounded by context, and revocable. A user’s request to discuss one sensitive topic should not automatically be treated as unlimited permission to escalate into unrelated or substantially more intrusive disclosure.

Until a more formal definition is incorporated into a future versioned protocol revision, this explanation should be treated as clarification of the current principle rather than an expansion of the deterministic detector’s capabilities.

## How does Validator Master decide whether a response passes or fails?

Validator Master applies the encoded Heartcode evaluator to the submitted response. The evaluator runs registered deterministic detectors, records any findings and evidence spans, applies the versioned scoring logic, and returns rule-level and overall verdicts.

The result applies only to the evaluated content, protocol version, evaluator version, evaluation scope, and implemented detectors used for that run.

## What does a score of 100 mean?

A score of 100 means that the applicable deterministic detectors produced no encoded penalty for the evaluated response under the stated evaluator and protocol versions.

It does not prove that the response is factually correct, complete, universally safe, legally compliant, medically appropriate, or free of behaviors the current detectors do not cover.

## Does Validator Master fact-check every statement in an AI response?

No. Heartcode evaluates encoded behavioral criteria. A Heartcode pass is not a general factual-verification result unless a specific versioned rule and detector explicitly test the relevant behavior.

## Why use Validator Master if I already have ChatGPT, Claude, Gemini, or another AI?

Validator Master is not intended to replace an AI assistant. It provides a separate behavioral evaluation layer for AI-generated responses.

A user can use an existing AI system for the answer and use Validator Master to inspect that answer against versioned Heartcode rules, including the rule verdicts, findings, evidence, evaluator version, and stated limitations. The value is the additional evidence and inspectability, not another general-purpose chatbot response.

## Why does the Live Validator show one AI provider while Heartcode Arena shows several?

They serve different purposes.

The Live Validator demonstrates single-response evaluation: one AI response is evaluated against the Heartcode rules. Heartcode Arena is for controlled side-by-side comparison of multiple provider responses under the same evaluation framework.

The provider that generated a response is separate from Validator Master, which evaluates the response.

## Is OpenAI part of Validator Master?

No. OpenAI may be configured as one provider that generates a response for evaluation. Validator Master is intended to remain provider-neutral at the evaluation layer.

## Can reasonable reviewers disagree with a Heartcode result?

Yes. The protocol explicitly recognizes uncertainty, missing context, cross-principle tensions, and reasonable disagreement. Deterministic implementation improves reproducibility of the encoded evaluator; it does not make the underlying normative questions universally uncontested.

## How can a researcher challenge a Heartcode rule or result?

Open a public issue with the smallest reproducible example, the observed result, the result you expected, and the reasoning or evidence supporting the challenge. Do not include sensitive or identifying information.

Corrections, counterexamples, missing failure modes, and reproducible disagreements are useful evidence for future protocol revisions.
