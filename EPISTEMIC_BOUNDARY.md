# Epistemic Boundary for Heartcode Behavioral Evidence

**Status:** v0.1 methodology boundary

Heartcode Protocol and its Validator Master reference implementation evaluate observable conversational behavior under specified evaluation conditions. Their evidence does not establish latent properties of a model or prove universal system safety.

## Three evidence layers

### 1. Observed

A reviewable evidence record can preserve what was observable in the evaluated interaction, including the submitted prompt, returned response text, provider/model identity reported by the runtime, timestamps, version metadata, evaluation conditions, and cryptographic integrity fields where supported.

An observed record supports claims of the form:

> Under these recorded conditions, this system produced this observable response.

It does not establish why the model produced the response or what internal representation, objective, policy, or reasoning process caused it.

### 2. Evaluated

A versioned Heartcode evaluator applies its implemented detectors to the declared evaluation surface and returns rule-level verdicts, findings, evidence spans, scores, and evaluator/protocol versions.

An evaluated record supports claims of the form:

> Under these recorded conditions, this observable response received this result from this specific Heartcode evaluator version.

A pass means that the implemented detectors did not identify a failing pattern within the evaluated surface. It is not proof that no relevant failure exists outside that detector coverage or outside the tested interaction.

### 3. Not established

Heartcode behavioral evidence does not by itself establish:

- absence of hidden objectives, deceptive alignment, evaluation awareness, or latent misalignment;
- properties of model weights, internal representations, chain-of-thought, or unobserved reasoning;
- future behavior under materially different prompts, tools, contexts, system instructions, sampling conditions, or deployment environments;
- universal safety, correctness, robustness, reliability, or fitness for a high-stakes decision;
- factual truth or groundedness unless a separate evidence method explicitly evaluates those properties;
- legal, regulatory, standards, security, medical, or compliance certification;
- equivalence between one successful behavioral evaluation and system-level assurance.

## Reproducibility boundary

Deterministic evaluation improves the reproducibility of the evaluator's judgment over preserved evidence. It does not make provider generation deterministic and does not convert behavioral observations into proof of latent model properties.

Where an evidence artifact preserves exact prompt/response text, versions, conditions, and integrity metadata, an independent reviewer can verify the artifact and replay the deterministic evaluation. That strengthens the auditability of the behavioral claim while leaving the underlying epistemic boundary unchanged.

## Claim discipline

Public, pilot, research, and review materials should distinguish these statements:

- **Observed:** what the system actually produced in the recorded interaction.
- **Evaluated:** what a named, versioned Heartcode evaluator concluded about that observable behavior.
- **Not established:** stronger claims that the evidence cannot support.

Avoid using `safe`, `aligned`, `certified`, `compliant`, or equivalent system-level language as a conclusion from a Heartcode pass unless a separate, explicitly scoped evidence process supports that claim.

Preferred wording:

> Validator Master produces reproducible evidence about observable conversational behavior under specified evaluation conditions. It does not establish the absence of hidden objectives, latent misalignment, or universally safe behavior.

## Architectural consequence

This boundary is structural. New detectors, dimensions, providers, benchmarks, or visualizations must not silently broaden the claim supported by an evaluation result. If future Heartcode work evaluates factual grounding, agent trajectories, tool behavior, model internals, or other assurance surfaces, those capabilities should use explicit evidence contracts and scope labels rather than being inferred from the existing Heartcode behavioral score.
