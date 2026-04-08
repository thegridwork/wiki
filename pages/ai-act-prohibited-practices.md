# AI Act Prohibited Practices

> Article 5 of the EU AI Act bans eight categories of AI systems deemed to pose unacceptable risk to fundamental rights, with narrow exceptions for law enforcement biometric identification under strict conditions.

## Key Points
- Eight categories of AI systems are outright prohibited
- Applied from **2 February 2025** -- the earliest enforcement date in the Act
- Violations carry the highest penalty tier: EUR 35 million or 7% of worldwide annual turnover (Article 99)
- Real-time remote biometric identification in public spaces has narrow law enforcement exceptions (Article 5(1)(h))
- The prohibited categories defined in Article 5(1)(e) (facial image scraping) and 5(1)(g) (biometric categorisation of sensitive attributes) have limited exceptions for law enforcement use of labelled datasets

## Detail

### Category (a): Subliminal, Manipulative, or Deceptive Techniques

AI systems that deploy subliminal techniques beyond a person's consciousness, or purposely manipulative or deceptive techniques, with the objective or effect of materially distorting the behaviour of a person or group, causing or likely to cause significant harm.

This covers AI systems designed to influence behaviour through techniques the subject cannot perceive or resist, such as subliminal messaging, dark patterns that exploit cognitive biases at scale, or deceptive AI-generated content designed to manipulate specific decisions.

### Category (b): Exploitation of Vulnerabilities

AI systems that exploit vulnerabilities of a person or group due to their age, disability, or specific social or economic situation, with the objective or effect of materially distorting their behaviour, causing or likely to cause significant harm.

This targets AI systems that specifically take advantage of characteristics like cognitive decline in elderly users, learning disabilities, financial desperation, or limited digital literacy to influence decisions against the person's interest.

### Category (c): Social Scoring

AI systems used by or on behalf of public authorities for evaluating or classifying natural persons over a period of time based on their social behaviour or personal characteristics, where the resulting social score leads to detrimental or unfavourable treatment that is unjustified or disproportionate.

This prohibition targets government-administered social credit systems. The ban applies when the scoring leads to treatment in social contexts unrelated to the context in which the data was originally generated, or when the treatment is disproportionate to the social behaviour.

### Category (d): Predictive Policing Based Solely on Profiling

AI systems that perform individual risk assessments of natural persons to predict the commission or reoccurrence of criminal offences, based solely on profiling or on the assessment of personality traits and characteristics.

This does not prohibit AI systems that support human assessment of criminal involvement based on objective and verifiable facts directly linked to criminal activity. The ban targets systems that predict criminality from personal characteristics alone.

### Category (e): Untargeted Facial Image Scraping

AI systems that create or expand facial recognition databases through the untargeted scraping of facial images from the internet or CCTV footage.

This bans the practice of building facial recognition reference databases by mass-collecting images without consent or legal basis -- a practice associated with companies like Clearview AI.

### Category (f): Emotion Recognition in Workplace and Education

AI systems intended for emotion recognition in the workplace and educational institutions, except where the AI system is intended to be put into service or placed on the market for medical or safety reasons.

The medical/safety exception allows emotion recognition for purposes such as monitoring a patient's pain levels, detecting driver drowsiness, or assessing the emotional state of a pilot for flight safety. Routine workplace productivity monitoring or student engagement assessment via emotion detection is prohibited.

Note: Emotion recognition for **law enforcement, border management, and administration of justice** is not prohibited here but is classified as **high-risk** under Annex III, Area 1(c).

### Category (g): Biometric Categorisation of Sensitive Attributes

AI systems that categorise natural persons individually based on their biometric data to infer race, political opinions, trade union membership, religious or philosophical beliefs, sex life, or sexual orientation.

An exception exists for law enforcement use of labelled datasets in the context of lawful criminal investigations. This exception allows, for example, searching a lawfully obtained image set by characteristics for investigative purposes, but does not permit building surveillance systems that categorise people by protected attributes in public spaces.

### Category (h): Real-Time Remote Biometric Identification in Public Spaces

AI systems used for real-time remote biometric identification of natural persons in publicly accessible spaces for the purpose of law enforcement, except under three strictly defined circumstances:

1. **Targeted search for specific victims** -- searching for victims of abduction, trafficking, or sexual exploitation, or searching for missing persons
2. **Prevention of imminent terrorist threat** -- specific, substantial, and imminent threat to life or physical safety, or a genuine and present or foreseeable threat of a terrorist attack
3. **Locating or identifying suspects** -- of specific serious criminal offences listed in Annex II (terrorism, trafficking, murder, sexual exploitation, drug trafficking, cybercrime, and other offences punishable by at least 4 years' custody)

Each use under these exceptions requires prior judicial or independent administrative authorisation (with urgent exception allowing police to act and seek authorisation within 24 hours). Use must be strictly necessary, proportionate, and limited in time and geography.

### Relationship to Other Risk Tiers

Several AI capabilities that are prohibited in certain contexts appear as high-risk in others:
- Emotion recognition is prohibited in workplace/education (Art 5(1)(f)) but high-risk for law enforcement/border/justice (Annex III, Area 1(c))
- Biometric categorisation of sensitive attributes is prohibited generally (Art 5(1)(g)) but biometric categorisation more broadly is high-risk (Annex III, Area 1(b))
- Real-time biometric identification is prohibited in public spaces for law enforcement except under strict conditions (Art 5(1)(h)) but remote biometric identification generally is high-risk (Annex III, Area 1(a))

## Product Relevance
- **aiact-mcp**: The classifier must detect prohibited practices as the first step in risk classification -- any match against Article 5 categories should flag the system as "unacceptable risk" before evaluating lower tiers. Detection patterns for emotion recognition, biometric systems, and social scoring systems are directly relevant. The product must also understand the exception conditions to avoid false positives (e.g., medical emotion recognition is permitted).

## Cross-References
- [[ai-act-overview]]
- [[ai-act-risk-classification]]
- [[ai-act-high-risk-annex-iii]]
- [[ai-act-transparency]]

## Sources
- raw/regulations/eu-ai-act-full-text.md
