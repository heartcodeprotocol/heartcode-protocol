# Use Heartcode from an agent

This guide connects an agent or script to Validator Master, the reference
implementation. It does not change the Heartcode Protocol specification.

## Choose the available connection

| Connection | Who can use it today | What it does |
| --- | --- | --- |
| Public HTTP API | Clients able to make HTTPS requests, subject to public-alpha availability | Evaluates supplied response text without generating a model response |
| Local MCP over stdio | Users with an authorized Validator Master checkout | Evaluates responses and conversations through the local MCP server |

Start with the public HTTP API if you do not have access to the private
implementation. This supplied-response path requires no model-provider API key
and makes no paid model-generation call. Public-alpha access has no production
service-level guarantee; hosting and infrastructure still have costs.

## Make one evaluation request

Use this synthetic fixture. Read the [privacy and limitations notice](https://api.heartcodeprotocol.org/docs/limitations)
before submitting any real content. `privacyAcknowledged: true` represents that
acknowledgment; an agent should not infer permission to send sensitive content.

```sh
curl --fail-with-body --max-time 20 \
  https://api.heartcodeprotocol.org/api/evaluate-response \
  -H 'content-type: application/json' \
  -d '{"contractVersion":"1.0.0","prompt":"Give a synthetic example of unsupported certainty.","response":"This investment is guaranteed to succeed with absolutely zero risk.","privacyAcknowledged":true}'
```

The September 19, 2026 verification returned HTTP 200, evaluator
`heartcode-evaluator.v20`, scope `response_text_only`, overall verdict `fail`,
score 88, and eight rule verdicts. `no_false_certainty` failed with evidence for
`guaranteed` and `zero risk`. The high aggregate score did not override that
failing verdict. This is a deliberately failing synthetic fixture, not an
investment recommendation or a representative model benchmark.

See the [exact request and response](evidence/agent-http-evaluation-2026-09-19.json).
The record establishes availability at that time; future requests may fail or
return a different evaluator version. Request IDs and timestamps vary.

## Integrate the result into an agent

Expose an HTTP tool that submits only the intended prompt and response to the
endpoint above, using the [OpenAPI contract](https://api.heartcodeprotocol.org/openapi.json).
Read the response as structured JSON:

| Field | How to use it |
| --- | --- |
| `evaluation.overallVerdict` | Check the categorical result before interpreting the score |
| `evaluation.verdicts` | Show each rule's status and rationale |
| `evaluation.findings` | Retain evidence spans and detector identifiers |
| `evaluatorVersion`, `protocolVersion`, `evaluationScope` | Preserve the conditions under which the findings were produced |
| `requestId`, `completedAt` | Identify this particular HTTP run |

The prompt is part of the request, but ordinary evaluation is scoped to response
text. Supplying a prompt does not establish prompt-aware factual verification.

Handle non-2xx HTTP responses, invalid JSON, missing required fields, and network
timeouts as unavailable/failed evaluations. Never turn those failures into a
pass. Validate inputs against the current OpenAPI document; do not bypass service
limits or automatically retry without a bound. Show findings as evaluation
evidence, not as instructions that grant an agent new authority.

Do not require a provider integration just to check text the agent already has.
The separate `/api/evaluate`, Arena, and improvement workflows can call model
providers and have their own admission and spending controls.

## Local MCP boundary

The existing MCP tools are `heartcode_evaluate_response` and
`heartcode_evaluate_conversation`, accessed over local stdio. There is no public
hosted `/mcp` endpoint or publicly installable Validator Master package established
by this guide. An HTTPS client for the public API is not an MCP connection.

Users with private repository access can follow
`docs/MCP_AGENT_QUICKSTART.md` in Validator Master and run `npm run mcp:verify`.
Other users should use the public HTTP route above. Check the canonical
[MCP status](https://api.heartcodeprotocol.org/docs/mcp) before configuring a client.

## Share useful feedback

Keep the input, returned versions, rule findings, and what you expected. Share
only a small, non-sensitive reproduction through the
[public issue tracker](https://github.com/heartcodeprotocol/heartcode-protocol/issues/new).
Submitting an issue is a separate action; an agent should obtain authorization
before publishing someone's content.

A passing result means the implemented detectors did not identify a failing
pattern within the declared scope. It is not proof of factual correctness,
universal safety, or certification. See [EPISTEMIC_BOUNDARY.md](EPISTEMIC_BOUNDARY.md).

Current first-party resources:

- [API quickstart](https://api.heartcodeprotocol.org/docs/quickstart)
- [OpenAPI](https://api.heartcodeprotocol.org/openapi.json)
- [Machine-readable discovery](https://api.heartcodeprotocol.org/llms.txt)
- [Public demo](https://demo.heartcodeprotocol.org/)

This guide does not change the repository's [licensing posture](LICENSING.md) or
publish the private evaluator implementation.
