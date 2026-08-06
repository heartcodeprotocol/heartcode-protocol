# Harness Configuration Evidence

## Purpose

Heartcode evaluations must record the execution harness that produced the evaluated response. Model identity alone is not sufficient for reproducible or fair comparison because API surface, context management, truncation, reasoning retention, and tool-loop behavior can materially affect output.

Harness metadata is evidence about how a response was generated. It does not change the Heartcode rule verdicts by itself and does not certify a provider or model.

## Required evidence fields

A harness evidence record should contain:

- `apiSurface` — provider API or transport surface used for generation.
- `reasoningRetention` — whether provider-supported reasoning state was retained across turns, disabled, unavailable, or unknown.
- `contextStrategy` — the context-management strategy applied before and during generation.
- `compactionEnabled` — whether context compaction was enabled, disabled, unavailable, or unknown.
- `truncationPolicy` — deterministic description or identifier for truncation behavior.
- `maximumContext` — configured maximum context capacity when known.
- `toolLoopPolicy` — deterministic description or identifier for tool-loop limits and continuation behavior.
- `configurationFingerprint` — cryptographic fingerprint of the normalized, non-secret provider and harness settings that materially affect generation.

Unknown or unsupported values must be represented explicitly rather than inferred from provider defaults.

## Evaluation modes

### `canonical_mode`

A fixed, documented, provider-neutral harness intended for reproducible cross-provider comparison.

A canonical-mode record must identify the canonical configuration version. Results from different canonical configuration versions must not be presented as directly equivalent without qualification.

### `provider_optimized_mode`

A provider-specific harness that follows documented provider recommendations or production-oriented settings to measure the model near its intended operating capability.

A provider-optimized result must record the provider-specific configuration provenance and must not be represented as a canonical-mode result.

## Comparison rules

Two evaluations should be described as directly reproducible only when the material evidence matches, including:

- model and provider identity;
- prompt or conversation evidence;
- protocol and evaluator versions;
- evaluation scope;
- evaluation mode;
- harness configuration version;
- configuration fingerprint.

When harness evidence differs, the difference must be visible in the evidence report. A score difference must not be attributed solely to model capability when harness configuration may have contributed.

## Configuration fingerprint

The fingerprint must be computed from a normalized representation of non-secret settings that materially affect generation. It must exclude credentials, access tokens, raw secrets, and unrelated deployment metadata.

The normalization and hash algorithm must be versioned. Implementations should use a stable cryptographic hash such as SHA-256.

## Backward compatibility

Existing evidence records without harness metadata remain valid historical records but are not sufficient for controlled cross-provider comparison.

Adding harness evidence to an implementation should use an explicitly versioned, backward-compatible contract transition. Implementations must not silently reinterpret an older contract as containing configuration evidence that was never recorded.

## Current implementation status

This document defines the public methodological requirement. Validator Master will add harness evidence through a versioned implementation contract before publishing controlled cross-provider benchmark claims.
