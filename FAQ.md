# Frequently Asked Questions

This FAQ explains the current Heartcode Protocol v0.1 public draft and Validator Master reference implementation. The versioned protocol remains canonical where a conceptual definition is concerned.

## What is Heartcode Protocol?

Heartcode Protocol is a public, evolving framework for evaluating observable conversational AI behavior through explicit, versioned behavioral dimensions and evidence.

## What is Validator Master?

Validator Master is the private reference implementation of Heartcode Protocol. It provides the deterministic evaluator, provider-neutral runtime, versioned contracts, evidence, and public demonstration endpoints.

## Is Validator Master another AI assistant?

No. Validator Master is an evaluation layer. Users can bring an AI response for direct evaluation or use a provider-backed convenience flow to generate a candidate response and evaluate it separately.

## Why use Validator Master if I already have ChatGPT, Claude, Gemini, Grok, or another AI?

The originating AI generates an answer. Validator Master separately evaluates selected observable behaviors in that answer under a versioned Heartcode evaluator. The value is additional evidence and inspectability, not another general-purpose chatbot response.

## Which providers does the production public-evaluation runtime support?

As of August 21, 2026, the production single-provider runtime supports OpenAI, Anthropic, Google Gemini, xAI Grok, and NVIDIA. Provider and model labels for a specific run should be read from runtime evidence.

Backend support does not automatically mean every provider is already exposed on every public UI surface. Live Validator and Arena availability are verified separately.

## Are those providers part of Heartcode or Validator Master?

No. A provider supplies a candidate AI response. Validator Master conducts the Heartcode evaluation. No provider sponsorship, participation, endorsement, certification, or approval of Heartcode methodology is claimed.

## Why are there eight Heartcode behavioral dimensions?

Heartcode Protocol v0.1 currently defines eight versioned behavioral dimensions:

1. Emotional Safety Before Performance
2. Consent Before Depth
3. Truth Before Comfort
4. No Manipulation or Dependency
5. Clear Refusal Under Coercion
6. Scoped Memory
7. No False Certainty
8. Dignity Protection

The project does not claim that these eight dimensions are a complete or scientifically exhaustive taxonomy of conversational AI risk. They are the current v0.1 evaluation surface and may evolve through versioned revisions informed by evidence, criticism, testing, and public review.

## Were the eight dimensions derived from a completed peer-reviewed taxonomy?

No. The project should not claim that the current dimensions were originally derived from a completed systematic literature review or validated external taxonomy.

External research, standards, and governance frameworks may converge with individual dimensions. That external convergence should be distinguished from the historical origin of the current protocol definitions and from validation of the current detectors.

## Can Validator Master create or change Heartcode dimensions by itself?

No. Heartcode dimensions are human-governed protocol definitions. Validator Master operationalizes a versioned protocol through deterministic evaluation logic and tests. Protocol changes require explicit human review and versioned documentation.

## What does “consent” mean in Consent Before Depth?

Heartcode v0.1 says that a system should not push a conversation into emotionally intimate, psychologically interpretive, or highly personal territory without adequate user consent.

The current protocol does not yet define a complete formal consent-state model, and the ordinary response-text-only evaluator does not reconstruct hidden conversational consent state from context it was not given.

## How does Validator Master decide whether a response passes or fails?

Validator Master runs the encoded, versioned Heartcode evaluator against the evaluated content. Deterministic detectors produce findings and evidence spans where applicable, and versioned scoring logic produces dimension-level and overall results.

The result applies only to the evaluated content, protocol version, evaluator version, evaluation scope, and detectors used for that run.

## What does a score of 100 mean?

A score of 100 means the applicable deterministic detectors produced no encoded penalty for the evaluated response under the stated protocol and evaluator versions.

It does not prove that the response is factually correct, complete, universally safe, legally compliant, medically appropriate, certified, or free from behaviors the current detectors do not cover.

## Does Validator Master fact-check every statement?

No. The ordinary Heartcode `response_text_only` evaluation is not general factual verification. It evaluates encoded behavioral criteria visible in the evaluated response. Separate grounding-aware extensions must remain explicitly distinguished from ordinary response-text evaluation.

## Why does Live Validator use one provider while Arena compares several?

They serve different purposes. Live Validator evaluates one response at a time and, in its provider-backed convenience flow, selects exactly one provider per run. Heartcode Arena is the multi-provider same-prompt comparison surface.

## Does Arena rank providers or choose a winner?

No. Arena returns comparable evidence and preserves provider results/failures. It does not declare a universal winner or convert Heartcode evidence into a general model ranking.

## What is Arena evidence export?

The reference implementation can produce a canonical evidence artifact for an evidence-enabled Arena run. The artifact contains the exact prompt and provider response text needed for integrity verification and offline replay.

The public UI should obtain that artifact from the server as part of the same evidence-enabled run, keep it ephemeral, and download it only after an explicit user action. Because it contains exact prompt and response text, users should review it before sharing.

## Are prompts and responses stored?

Validator Master does not persist raw prompts or raw AI responses in application storage by default. Inputs are still processed by Validator Master infrastructure and, when provider generation is used, by the selected provider and supporting infrastructure, which may retain data under their applicable terms and configured account controls.

Do not submit personal, medical, legal, confidential, proprietary, identifying, or otherwise sensitive information to the public demonstration.

## Can Heartcode be used as certification?

Not at this stage. Heartcode/Validator Master results are behavioral evaluation evidence, not legal advice, legal-compliance certification, factual certification, regulatory approval, or a guarantee of universal safety or correctness.

## Can researchers challenge a dimension, detector, or result?

Yes. Reproducible false positives, false negatives, counterexamples, missing failure modes, provenance concerns, or disagreements are useful evidence. Open a public issue with the smallest reproducible example, observed result, expected result, and supporting reasoning. Do not include sensitive information or credentials.
