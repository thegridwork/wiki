# AI Act Transparency Obligations

> Article 50 of the EU AI Act imposes specific transparency requirements on limited-risk AI systems, covering chatbots, deepfake generators, emotion recognition systems, and biometric categorisation systems, with distinct obligations for providers and deployers.

## Key Points
- Article 50 defines four transparency obligations targeting specific AI system types
- These are the defining requirements for the "limited risk" tier in the Act's classification framework
- Obligations are split between providers (design-time requirements) and deployers (use-time requirements)
- Chatbot disclosure: persons must be informed they are interacting with AI (Article 50(1))
- Synthetic content marking: outputs must be labelled as AI-generated in machine-readable format (Article 50(2))
- Emotion recognition and biometric categorisation: exposed persons must be informed (Article 50(3))
- Deepfake disclosure: deployers must disclose artificial generation or manipulation (Article 50(4))
- Some of these obligations also apply to high-risk systems in addition to their full compliance requirements

## Detail

### Article 50(1): AI Interaction Disclosure

**Who**: Providers of AI systems intended to interact directly with natural persons.

**Obligation**: Design the system so that the natural person is informed they are interacting with an AI system, unless this is obvious from the circumstances and context of use.

**Scope**: This covers chatbots, virtual assistants, AI customer service agents, and any AI system that communicates directly with users in a way that could be mistaken for human interaction. It does not apply where the AI nature is self-evident from context -- for example, a clearly labelled automated phone menu.

**Practical implication**: AI-powered chat interfaces must include a disclosure notice. The obligation is on the provider at design time -- the system itself must be built to inform users, rather than relying on deployers to add notices.

### Article 50(2): Synthetic Content Marking

**Who**: Providers of AI systems that generate synthetic audio, image, video, or text content.

**Obligation**: Ensure that outputs are marked in a machine-readable format as artificially generated or manipulated. The technical solution must be effective, interoperable, robust, and reliable, taking into account the specificities of the content, implementation costs, and the generally acknowledged state of the art.

**Scope**: This covers all generative AI systems that produce content, including text generators (LLMs), image generators (DALL-E, Midjourney, Stable Diffusion), video generators, voice synthesis, and music generation tools. The marking must be machine-readable -- watermarking, metadata embedding, or other technical means that allow automated detection of AI-generated content.

**Practical implication**: Providers of generative AI must embed provenance signals in outputs. This applies to the model/system provider, not to every end user who generates content.

### Article 50(3): Emotion Recognition and Biometric Categorisation Disclosure

**Who**: Deployers of emotion recognition systems or biometric categorisation systems.

**Obligation**: Inform natural persons exposed to the system about its operation and process personal data in accordance with applicable Union law (GDPR, Law Enforcement Directive).

**Scope**: Covers any deployment of emotion recognition (detecting emotional states from biometric data) or biometric categorisation (assigning persons to categories based on biometric data) where persons are exposed to the system. Note that this obligation exists independently of the high-risk classification -- even a biometric system that falls under the Article 6(3) exception still carries this transparency obligation.

**Relationship to Article 5**: Emotion recognition in the workplace and education is prohibited under Article 5(1)(f) except for medical/safety reasons. Emotion recognition for law enforcement, border management, and justice is classified as high-risk under Annex III Area 1(c). Article 50(3) applies to all remaining lawful deployments.

### Article 50(4): Deepfake Disclosure

**Who**: Deployers of AI systems that generate or manipulate image, audio, or video content constituting a deep fake.

**Obligation**: Disclose that the content has been artificially generated or manipulated.

**Scope**: A "deep fake" is defined as AI-generated or manipulated image, audio, or video content that falsely appears to be authentic (Article 3). This obligation falls on deployers (those who use the system to create and distribute the content), not on the system providers. It requires human-readable disclosure -- the audience must be able to know the content is synthetic.

**Exceptions**: The disclosure obligation does not apply where the use is authorised by law for law enforcement purposes, or where the content is part of an obviously artistic, creative, satirical, or fictional work, provided there are appropriate safeguards for third-party rights.

### Interaction with Other Risk Tiers

Transparency obligations under Article 50 can apply concurrently with obligations from other risk tiers:

- A **high-risk** emotion recognition system under Annex III Area 1(c) must comply with both the full high-risk requirements (Articles 8-15) and the transparency obligation of Article 50(3)
- A **high-risk** AI system that also interacts with persons must comply with Article 50(1) in addition to its high-risk obligations
- **GPAI** systems that generate content must comply with Article 50(2) synthetic content marking in addition to their GPAI obligations under Articles 52-53
- **Prohibited** systems are banned regardless of transparency -- Article 50 is irrelevant to Article 5 systems

### Deployer Obligations for AI-Generated Content (Article 28)

Beyond Article 50, deployers of emotion recognition or biometric categorisation systems have additional obligations under Article 28 to inform natural persons exposed to such systems. This reinforces the Article 50(3) requirement from the deployer side.

## Product Relevance
- **aiact-mcp**: The transparency obligations inform the "limited risk" classification output. When aiact-mcp detects an AI system (chatbot, generative AI, emotion recognition), it should flag applicable Article 50 obligations in the compliance gap analysis. For systems detected as chatbots or virtual assistants, Article 50(1) disclosure applies. For detected generative AI integrations, Article 50(2) synthetic content marking applies. These obligations are lighter than high-risk requirements but still legally binding with potential penalties.

## Cross-References
- [[ai-act-risk-classification]]
- [[ai-act-overview]]
- [[ai-act-prohibited-practices]]
- [[ai-act-high-risk-annex-iii]]
- [[ai-act-gpai]]

## Sources
- raw/regulations/eu-ai-act-full-text.md
