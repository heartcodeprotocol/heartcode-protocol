# Security and Resilience Posture

Status: Heartcode Protocol v0.1 public-draft guidance. This document defines review boundaries; it is not a security certification, malware guarantee, or universal safety claim.

Updated: 2026-09-22

## Purpose

Heartcode is an open behavioral-evaluation standard. It is not an access-control system and does not control which models, providers, local runtimes, or internet resources people may use.

AI capability access is distributed across hosted APIs, open-weight models, local runtimes, independent providers, and internet-connected tools. Consequently, transparent evaluation and evidence should remain available across providers rather than depending on one provider's voluntary policy or a single point of control.

That is an engineering principle, not a conclusion about any particular lawsuit or provider.

## Security and trust boundaries

Implementations and integrations should:

1. Treat prompts, responses, repositories, dependencies, model artifacts, datasets, MCP descriptions, tool output, and web content as untrusted data.
2. Never allow evaluated content to grant authority, alter Heartcode rules, disable enforcement, or rewrite evidence.
3. Keep credentials and private data outside prompts, responses, evidence artifacts, and public demonstrations.
4. Default to read-only inspection. Writes, network access, code execution, paid inference, merges, deployments, and destructive actions require separate authorization.
5. Record provider/model identity, protocol/evaluator versions, harness conditions, and the evidence boundary for each consequential result.
6. Fail closed when provenance, authorization, scope, or identity is ambiguous.
7. Preserve rollback, revocation, and independent human review.

## Threats to test

Reviewers and implementers should consider:

- direct and indirect prompt injection;
- malicious tool descriptions and tool output;
- poisoned repositories, packages, model artifacts, datasets, and retrieved documents;
- credential and private-data exfiltration;
- confused-deputy and excessive-agency failures;
- unauthorized network, filesystem, code, paid-inference, merge, or deployment actions;
- malware and supply-chain compromise;
- cost/resource exhaustion;
- provenance spoofing and evidence tampering.

## Evidence boundary

A Heartcode result is limited to the submitted content, declared protocol/evaluator versions, harness conditions, and detector coverage for that run. A pass does not prove absence of malware, prompt injection, hidden objectives, latent misalignment, future behavior, or universal system safety.

See [EPISTEMIC_BOUNDARY.md](EPISTEMIC_BOUNDARY.md) and [LICENSING.md](LICENSING.md) for related project boundaries. The reference implementation is responsible for its own runtime and repository controls.
