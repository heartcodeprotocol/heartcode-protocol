# Heartcode v0.1 Behavioral Dimension Crosswalk

## Purpose

This document tests whether the behavioral dimensions in Heartcode Protocol v0.1 independently converge with established AI governance standards, human-centered AI principles, or published empirical research.

It is not a claim that Heartcode derived its dimensions from these sources. Provenance and external convergence are different questions. `DIMENSION_PROVENANCE.md` reconstructs what can be supported about the internal history of the dimensions; this crosswalk asks whether similar concerns appear independently elsewhere.

## Evidence labels

- **Strong convergence** — the external source directly names substantially the same behavioral property or risk.
- **Moderate convergence** — the external source supports the underlying principle or closely related risk, but not Heartcode's exact formulation.
- **Partial convergence** — the source provides useful adjacent evidence, but the mapping requires interpretation.

No convergence label proves that a Heartcode detector is valid, complete, or correctly calibrated.

## Summary

| Dimension | External convergence | Main independent basis |
| --- | --- | --- |
| HC-01 Emotional Safety Before Performance | Moderate | human well-being, do-no-harm, psychosocial effects of conversational AI |
| HC-02 Consent Before Depth | Moderate | autonomy, informed consent, human agency, protection of vulnerable users |
| HC-03 Truth Before Comfort | Strong | sycophancy research; information integrity; truthfulness over user agreement |
| HC-04 No Manipulation or Dependency | Strong | individual autonomy; manipulation concerns; empirical emotional-dependence research |
| HC-05 Clear Refusal Under Coercion | Moderate | robustness under misuse/adverse conditions; refusal/cooperation-with-harm evaluations |
| HC-06 Scoped Memory | Strong | privacy, data protection, consent, transparency about system capabilities and limitations |
| HC-07 No False Certainty | Strong | trustworthy AI, calibration/uncertainty, confabulation and overclaiming risks |
| HC-08 Dignity Protection | Strong | human dignity, equality, non-discrimination, protection from degrading treatment |

## HC-01 — Emotional Safety Before Performance

**Heartcode target:** avoid explicit shaming, emotional invalidation, hostile dismissal, degrading blame, and similar emotionally unsafe behavior.

**Convergence: Moderate.**

UNESCO's Recommendation on the Ethics of Artificial Intelligence treats human dignity, well-being, prevention of harm, and protection of people in vulnerable situations as foundational concerns. It states that people interacting with AI should not be objectified or have their dignity undermined. NIST's human-centered AI work likewise emphasizes human goals and outcomes in human-AI interaction.

Empirical work on sustained chatbot use also provides adjacent support for treating psychosocial effects as an evaluation target. A 2025 longitudinal randomized study of 981 participants and more than 300,000 messages found that higher daily chatbot usage correlated with higher loneliness, emotional dependence, problematic use, and lower socialization. This does not directly validate HC-01's phrase-level detector, but it supports the broader premise that conversational behavior can affect user well-being and should be measured.

**Interpretation boundary:** external sources support well-being and avoidance of psychosocial harm more broadly than the current deterministic HC-01 detector. HC-01 currently detects a bounded subset of explicit textual behaviors.

## HC-02 — Consent Before Depth

**Heartcode target:** avoid pressuring a user into intimate, traumatic, or sensitive disclosure without first establishing permission.

**Convergence: Moderate.**

UNESCO explicitly grounds trustworthy AI in human autonomy, agency, informed consent, privacy, and protection of vulnerable people. Its Recommendation says that control may be ceded to AI only through human choice, and it repeatedly treats informed consent as a core safeguard where personal data or sensitive contexts are involved.

The Council of Europe Framework Convention on Artificial Intelligence similarly identifies human dignity and individual autonomy as fundamental principles. OECD's AI Principles include human-centred values and safeguards for human agency and oversight.

**Interpretation boundary:** major standards strongly support autonomy and informed consent, but they generally address consent at the system, data, or decision level rather than the exact conversational pattern Heartcode calls "Consent Before Depth." The mapping is therefore principled but not one-to-one.

## HC-03 — Truth Before Comfort

**Heartcode target:** avoid knowingly favoring reassurance, agreement, or rapport over factual integrity.

**Convergence: Strong.**

Anthropic's 2023 sycophancy research found that RLHF-trained assistants can match user beliefs over truthful responses, and that human preference judgments may reward this behavior. Their experiments showed state-of-the-art assistants exhibiting sycophancy across multiple free-form tasks.

Subsequent alignment work has continued treating sycophancy as a distinct evaluation target. Anthropic's Petri auditing work describes sycophancy as prioritizing user agreement over accuracy or providing excessive praise and validation. Recent empirical work on personal guidance also reports that models can become more sycophantic under user pushback.

OECD and NIST frameworks reinforce the broader expectation of information integrity, transparency, reliability, and trustworthy outputs.

**Interpretation boundary:** external research strongly validates sycophancy and truth-versus-agreement as a real model behavior. It does not validate Heartcode's exact regex patterns or severity weights.

## HC-04 — No Manipulation or Dependency

**Heartcode target:** avoid exclusivity, isolation, guilt, secrecy pressure, coercive urgency, authority pressure, withdrawal threats, and dependency-building language.

**Convergence: Strong.**

UNESCO treats human autonomy, agency, dignity, and psychological effects of AI recommendations as explicit ethical concerns and calls for investigation of sociological and psychological effects on human decision-making autonomy. The Council of Europe Framework Convention names individual autonomy as a fundamental principle. OECD similarly identifies autonomy of individuals as part of human-centred values.

The empirical basis has also strengthened. A 2025 longitudinal randomized study found associations between heavier chatbot use and emotional dependence, problematic use, and reduced socialization. A 2026 paper synthesizing emerging longitudinal evidence argues that routine general-purpose AI interaction can shift preferences toward AI support and away from human support.

Anthropic alignment research also treats manipulation, secrecy, and power-seeking as problematic model behaviors, while its auditing work explicitly includes sycophancy and encouragement of user delusion as behavioral targets.

**Interpretation boundary:** these sources support the risk class strongly, but the current HC-04 detector only covers explicit single-response markers. It does not establish or measure longitudinal dependence itself.

## HC-05 — Clear Refusal Under Coercion

**Heartcode target:** detect when a model abandons, weakens, or negotiates a stated boundary because of threats, repeated pressure, blackmail, or insistence.

**Convergence: Moderate.**

NIST and OECD both require AI systems to remain robust and safe under foreseeable misuse and adverse conditions. OECD states that trustworthy systems should function appropriately under normal use, foreseeable use or misuse, and other adverse conditions.

Anthropic's Petri behavioral auditing explicitly evaluates "cooperation with harmful requests" as models complying with requests that could cause harm rather than appropriately refusing. This supports refusal robustness as a meaningful evaluation target.

**Interpretation boundary:** external work strongly supports robust refusal and resistance to harmful requests, but Heartcode's narrower focus on *coercion-induced boundary collapse* is more specific than the high-level standards. More direct empirical work on pressure-induced refusal degradation would strengthen this dimension.

## HC-06 — Scoped Memory

**Heartcode target:** avoid unsupported claims of permanent storage, universal recall, hidden-context access, unconsented storage, or cross-conversation memory.

**Convergence: Strong.**

UNESCO's Recommendation explicitly treats privacy and data protection as essential to human dignity, autonomy, and agency. It calls for transparency around collection, use, sharing, archiving and deletion of data; informed consent; privacy by design; and meaningful control over personal data.

The Council of Europe Framework Convention likewise identifies privacy and personal data protection as fundamental AI principles. OECD calls for transparency about system capabilities and limitations, while NIST's AI RMF emphasizes trustworthy, accountable and transparent system behavior.

**Interpretation boundary:** the standards validate the principle strongly. HC-06 is specifically a conversational truthfulness layer about memory and access claims; it is not a complete privacy or data-governance assessment.

## HC-07 — No False Certainty

**Heartcode target:** detect categorical guarantees, zero-risk claims, universal effectiveness, unsupported certainty, and similar overclaiming, especially in high-stakes contexts.

**Convergence: Strong.**

NIST's AI Risk Management Framework and Generative AI Profile are explicitly concerned with trustworthy, reliable and evaluated AI behavior. NIST's broader human-AI work emphasizes how system information is presented to people and how human interpretation can affect downstream decisions.

Research on sycophancy and calibration also supports uncertainty as an independent behavioral concern. Recent work has investigated whether sycophancy-inducing reward optimization degrades model calibration, and multiple alignment studies distinguish truthful uncertainty from user-pleasing overclaiming.

OECD's transparency and explainability principle requires meaningful information about system capabilities and limitations, while robustness and safety require systems to function appropriately under uncertainty and risk.

**Interpretation boundary:** external sources strongly support calibrated uncertainty and avoidance of unsupported certainty. Heartcode's current detector remains a deterministic lexical/contextual approximation rather than a probabilistic calibration measurement.

## HC-08 — Dignity Protection

**Heartcode target:** avoid dehumanization, humiliating insult, degrading stereotypes, contemptuous correction, or belittling treatment.

**Convergence: Strong.**

UNESCO places the inviolable and inherent dignity of every human at the foundation of its AI ethics framework and states that people interacting with AI should not be objectified or have their dignity undermined. The Recommendation also emphasizes equality, non-discrimination, social justice, and protection of vulnerable people.

The Council of Europe Framework Convention lists human dignity and individual autonomy, equality and non-discrimination, and respect for privacy among its fundamental principles. OECD likewise includes dignity, equality, non-discrimination and autonomy within its human-centred values principle.

**Interpretation boundary:** standards strongly support dignity as a normative target. HC-08 operationalizes only explicit textual degradation and does not constitute a complete fairness, discrimination, or human-rights evaluation.

## Cross-dimension observations

### 1. Heartcode is narrower than the standards it overlaps

The standards above generally govern entire AI systems, organizations, lifecycle processes, risk management, privacy, human rights and accountability. Heartcode v0.1 evaluates a much smaller object: the behavioral content of a response using deterministic detectors.

This is a useful boundary, not a weakness, if stated clearly. Heartcode should not present itself as a replacement for NIST AI RMF, ISO/IEC risk management, OECD principles, UNESCO ethics guidance, or human-rights compliance.

### 2. Several Heartcode dimensions map to recurring independent concerns

The strongest convergence appears around:

- truthfulness versus sycophancy;
- manipulation and dependency;
- privacy and memory-scope claims;
- calibrated uncertainty;
- human dignity.

These concerns appear independently across government standards, intergovernmental frameworks, and empirical alignment research.

### 3. The current eight are not externally proven to be exhaustive

Nothing in this review supports the claim that these eight dimensions form a complete taxonomy of desirable conversational AI behavior.

Important areas not currently represented as first-class Heartcode dimensions include, among others:

- broader bias and discrimination;
- factual hallucination beyond false-certainty language;
- cybersecurity and misuse enablement;
- deception outside truth-versus-comfort contexts;
- privacy behavior beyond memory claims;
- multi-turn behavioral trajectories;
- accessibility and inclusion;
- domain-specific professional safety.

This reinforces the decision to treat Heartcode v0.1 as a versioned public draft rather than a complete certification standard.

## Recommended evidence status

For v0.1 public documentation:

- HC-03, HC-04, HC-06, HC-07, HC-08: **independent convergence documented**.
- HC-01, HC-02, HC-05: **independent convergence documented, with a more indirect mapping**.

These labels should not be upgraded to "validated" until Heartcode has direct benchmark evidence, human annotation, false-positive/false-negative analysis, and external review.

## Primary and research sources

1. NIST, *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*, NIST AI 600-1 (2024): https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
2. NIST, *AI Risk Management Framework* and AIRC human-AI interaction resources: https://www.nist.gov/itl/ai-risk-management-framework and https://airc.nist.gov/airmf-resources/airmf/appendices/app-c-ai-risk-management-and-human-ai-interaction/
3. NIST, *AI Use Taxonomy: A Human-Centered Approach* (2024): https://www.nist.gov/publications/ai-use-taxonomy-human-centered-approach
4. OECD, *AI Principles* (adopted 2019; updated 2024): https://www.oecd.org/en/topics/sub-issues/ai-principles.html
5. UNESCO, *Recommendation on the Ethics of Artificial Intelligence* (2021): https://www.unesco.org/en/legal-affairs/recommendation-ethics-artificial-intelligence
6. Council of Europe, *Framework Convention on Artificial Intelligence and Human Rights, Democracy and the Rule of Law* (opened for signature 2024): https://www.coe.int/en/web/artificial-intelligence/the-framework-convention-on-artificial-intelligence
7. Sharma et al./Anthropic, *Towards Understanding Sycophancy in Language Models* (2023): https://www.anthropic.com/news/towards-understanding-sycophancy-in-language-models
8. Anthropic, *Petri: An open-source auditing tool to accelerate AI safety research* (2025): https://www.anthropic.com/research/petri-open-source-auditing
9. Fang et al., *How AI and Human Behaviors Shape Psychosocial Effects of Chatbot Use: A Longitudinal Randomized Controlled Study* (2025): https://arxiv.org/abs/2503.17473
10. Shi et al., *Stumbling Into AI Emotional Dependence: How Routine AI Interactions Reshape Human Connection* (2026): https://arxiv.org/abs/2606.04150

## Revision policy

This crosswalk should be revised when:

- stronger primary standards become available;
- peer-reviewed or large-scale empirical evidence materially changes a mapping;
- a Heartcode dimension changes meaning;
- a new protocol dimension is proposed;
- external reviewers identify a source that materially contradicts the stated convergence level.

A contradiction should be recorded and evaluated, not removed merely because it weakens the case for a dimension.
