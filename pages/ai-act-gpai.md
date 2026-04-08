# AI Act General-Purpose AI Rules

> Chapter V of the EU AI Act (Articles 51-56) establishes obligations for providers of general-purpose AI models, with additional requirements for models classified as having systemic risk based on a threshold of 10^25 FLOPs cumulative training compute.

## Key Points
- GPAI obligations apply from **2 August 2025**
- All GPAI model providers must maintain technical documentation, provide information to downstream providers, comply with copyright law, and publish training content summaries
- Systemic risk is presumed when cumulative training compute meets or exceeds **10^25 FLOPs** (Article 51(2))
- The Commission may update the FLOPs threshold via delegated acts
- Systemic risk models carry additional obligations: model evaluation, adversarial testing, serious incident reporting, and cybersecurity protections
- The AI Office (not national authorities) oversees and enforces GPAI compliance (Article 56)
- Codes of practice facilitate practical implementation of GPAI obligations (Article 55)

## Detail

### What Is a General-Purpose AI Model (Article 3)

A general-purpose AI model is defined as an AI model -- including one trained using a large amount of data via self-supervision at scale -- that displays significant generality and is capable of competently performing a wide range of distinct tasks. A general-purpose AI system is an AI system based on such a model, capable of serving a variety of purposes.

This definition covers foundation models and large language models (e.g., GPT-4, Claude, Gemini, Llama, Mistral) as well as multi-modal models capable of processing and generating text, images, audio, video, or code.

### Systemic Risk Classification (Article 51)

A GPAI model is classified as having systemic risk if it:
- Has **high-impact capabilities** evaluated on the basis of appropriate technical tools and methodologies (including evaluation by the scientific panel under Article 59); OR
- Has a **cumulative training compute exceeding 10^25 FLOPs** -- this creates a presumption of systemic risk

The Commission may update the 10^25 FLOPs threshold via delegated acts, and the scientific panel of independent experts may alert the AI Office when a model may have reached systemic risk level.

**Systemic risk** is defined as a risk specific to the high-impact capabilities of GPAI models, having a significant effect on the Union market due to reach, or having actual or reasonably foreseeable negative effects on public health, safety, security, fundamental rights, or society as a whole (Article 3).

### Obligations for All GPAI Model Providers (Article 52)

All providers of general-purpose AI models, regardless of systemic risk classification, must:

1. **Maintain technical documentation** (detailed in Annex XI) including:
   - Model name, version, release date
   - Architecture description, number of parameters, modality, input/output format
   - Training process description (methodologies, data sources, data curation, volume, computational resources, training compute in FLOPs)
   - Intended purpose and foreseeable downstream use cases
   - Capabilities and limitations (languages, benchmarks, known biases)
   - Model card or equivalent documentation
   - Evaluation procedures and results

2. **Provide information to downstream providers** -- supply sufficient information and documentation to enable downstream AI system providers to understand the model's capabilities and limitations and comply with their own obligations under the Act

3. **Implement a copyright law compliance policy** -- put in place a policy to comply with Union copyright law, in particular to identify and comply with reservations of rights expressed by rightholders pursuant to Article 4(3) of Directive (EU) 2019/790

4. **Publish a training content summary** -- make publicly available a sufficiently detailed summary of the content used for training the GPAI model, following a template provided by the AI Office

### Additional Obligations for Systemic Risk Models (Article 53)

Providers of GPAI models classified with systemic risk must additionally:

1. **Perform model evaluation** including standardised protocols and state-of-the-art tools for evaluating model capabilities, including adversarial testing to identify and mitigate systemic risks

2. **Assess and mitigate systemic risks** -- identify, assess, and take appropriate mitigation measures for systemic risks at Union level, including their sources, and document the assessment

3. **Track and report serious incidents** -- keep track of, document, and report to the AI Office and relevant national authorities any serious incidents and possible corrective measures to address them, without undue delay

4. **Ensure adequate cybersecurity protections** -- ensure an adequate level of cybersecurity protection for the GPAI model and the physical infrastructure of the model

### Transparency for Systemic Risk Models (Annex XII)

Beyond Annex XI documentation, systemic risk models require additional transparency information:
- Description of model evaluation methodology, including adversarial testing
- Description of assessed systemic risks and mitigation measures
- Description of serious incidents and measures taken
- Description of energy consumption during training and inference (where measured)
- Description of computational resources used for training

### Classification Criteria (Annex XIII)

The scientific panel and AI Office evaluate GPAI models against ten criteria:
1. Number of parameters
2. Quality and size of training dataset
3. Cumulative training compute (FLOPs) -- presumption of systemic risk at 10^25
4. Number of registered users
5. Input/output modalities (text, image, video, audio, code)
6. Benchmark performance
7. Number of downstream integrations
8. Degree of autonomy in decision-making
9. Accessibility (open-source vs. restricted)
10. Whether the model generates content difficult to distinguish from human-generated content

### Authorised Representatives (Article 54)

GPAI providers established outside the Union must appoint an authorised representative in the Union before placing their model on the market or putting it into service. This mirrors the requirement for high-risk AI system providers under Article 22.

### Codes of Practice (Article 55)

The AI Office facilitates the drawing up of codes of practice for GPAI obligations. These codes may address:
- Copyright compliance procedures
- Training content summary format and detail level
- Systemic risk identification and mitigation approaches
- Adversarial testing methodologies

Compliance with codes of practice may demonstrate compliance with the corresponding regulatory obligations.

### Enforcement (Article 56)

The AI Office -- not national market surveillance authorities -- monitors and enforces GPAI provider compliance. The AI Office may:
- Request documentation from providers
- Conduct evaluations of GPAI models
- Take enforcement action for non-compliance
- Fine GPAI providers up to EUR 15 million or 3% of global turnover (Article 101), or EUR 7.5 million or 1% for incorrect information

### Registration (Annex VIII, Section B)

GPAI model providers must register in the EU database with:
- Provider name and contact information
- Model name
- Description (architecture, training compute)
- Whether classified with systemic risk
- Date of market placement

## Product Relevance
- **aiact-mcp**: The GPAI rules are relevant when aiact-mcp detects foundation models or large language models integrated into AI systems. The product's 45+ provider detection patterns include major GPAI providers (OpenAI, Anthropic, Google, Meta, Mistral, etc.). When these are detected, aiact-mcp can flag that the downstream system may inherit obligations from its GPAI model provider and that the GPAI provider itself has independent obligations under Articles 52-53. The 10^25 FLOPs threshold is a key data point for systemic risk classification.

## Cross-References
- [[ai-act-overview]]
- [[ai-act-risk-classification]]
- [[ai-act-compliance-requirements]]
- [[ai-act-transparency]]
- [[ai-act-timeline]]

## Sources
- raw/regulations/eu-ai-act-full-text.md
