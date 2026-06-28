# Parser

Every language parser must return a common format. Parser output is the contract that keeps the UI and learning system language-independent.

## Three-Layer Parser Strategy

Parsing should be separated into three layers:

1. Universal parser layer for broad coverage.
2. Language-specific morphology layer where high-quality analyzers exist.
3. Dictionary and lexicon layer for explanations, roots, glosses, examples, and corpus-derived knowledge.

This gives broad language coverage without flattening languages that need specialized morphology, such as Turkish, Arabic, Hebrew, Russian, Polish, Latin, or Ladino.

## Universal Foundation

Use Universal Dependencies as the internal normalization standard. Regardless of analyzer source, parser output should preserve:

- Lemma
- UPOS
- XPOS when available
- Morphological features
- Dependency head
- Dependency relation

Stanza is the preferred universal parser foundation because it supports tokenization, lemmatization, POS tagging, dependency parsing, and Universal Dependencies output across many languages.

UDPipe is the preferred lightweight fallback where Stanza is unavailable, too heavy, or insufficient for a deployment target.

## Hierarchy

```text
Document
  Sentence
    Token
      Morpheme
```

## Document Output

A parsed document should include:

- Document ID
- Language
- Source metadata
- Sentences

## Sentence Output

A parsed sentence should include:

- Surface text
- Translation when available
- Sentence-level transliteration when available
- Tokens
- Grammar features when relevant

## Token Output

A token should include:

- Surface form
- Normalized form
- Transliteration
- Lemma
- Root
- Part of speech
- Features
- Morphemes
- Translation or gloss when available
- Character offsets

## Morpheme Output

A morpheme should include:

- Surface
- Normalized form
- Transliteration
- Gloss
- Function
- Morpheme type, such as prefix, suffix, clitic, stem, root-pattern template, derivational affix, or inflectional ending
- Grammar features
- Grammar patterns or constructions when the parser identifies them
- Character offsets within token when available

## Feature Output

Grammar features should be normalized into stable records, such as:

- `Number=Plur`
- `Case=Abl`
- `Tense=Past`
- `Voice=Pass`
- `Participle=Passive`

The display label may be language-specific, but the feature identity should be stable and linkable.

## Pattern and Type Output

Parsers should emit stable IDs or codes for morphological types, grammar patterns, and constructions whenever available. These records allow the reader to link a visible prefix, suffix, clitic, root-pattern template, case marker, derived form, binyan, participial construction, or other parser-recognized pattern to a dedicated page.

Pattern/type output should include:

- Stable code
- Display label
- Explanation or parser-provided description when available
- Related morpheme, feature, lemma, root, or construction IDs
- Confidence or ambiguity metadata when available

## Parser Interface

Each parser implementation should expose:

- Supported language code
- Parser name and version
- Capability metadata
- Parse document method
- Parse sentence method when supported
- Normalization method when needed
- Transliteration method when needed

## Analyzer Selection

| Language | Primary Analyzer |
| --- | --- |
| English | Stanza, spaCy optional |
| French | Stanza, spaCy optional |
| German | Stanza, spaCy optional |
| Dutch | Stanza, spaCy optional |
| Spanish | Stanza |
| Russian | pymorphy3 plus Stanza |
| Polish | Morfeusz 2 plus Stanza |
| Modern Greek | Stanza |
| Latin | CLTK |
| Ancient Greek | CLTK |
| Hebrew | YAP before Stanza |
| Arabic | CAMeL Tools before Stanza |
| Turkish | Zemberek before Stanza |
| Persian/Farsi | Hazm plus Stanza |
| Chinese | pkuseg or Jieba, then Stanza where useful |
| Ladino | Spanish model plus custom lexicon |

## Language Notes

English:

- Morphology is relatively simple.
- Stanza or spaCy is usually sufficient.
- Preserve analyses such as lemma `walk`, UPOS `VERB`, and features like `Tense=Pres` and `VerbForm=Part`.

French:

- Stanza and spaCy both have useful support.
- Preserve gender, number, tense, mood, person, and agreement features when available.

German:

- Stanza and spaCy are useful.
- German morphology is richer than English and French, so preserve case, number, gender, and agreement features.

Dutch:

- Stanza and spaCy are useful.
- Prefer UD-compatible output for consistency.

Spanish:

- Stanza is the preferred default.
- Preserve verb tense, mood, person, gender, and number features.

Russian:

- Use pymorphy3 for morphology and combine with Stanza for sentence-level structure.
- Preserve lemma, gender, number, case, animacy, aspect, and dependency features.

Polish:

- Use Morfeusz 2 for morphology and combine with Stanza.
- Preserve rich inflectional features and ambiguity metadata.

Modern Greek:

- Use Stanza initially.
- Specialized morphology can be added later if needed.

Latin:

- Use CLTK.
- Latin should be treated as a special case with substantial morphology and lemmatization needs.

Ancient Greek:

- Use CLTK.
- Preserve morphology, lemma, and dependency metadata where available.

Persian/Farsi:

- Use Hazm for normalization, lemmatization, and POS tagging.
- Combine with Stanza where useful.

Chinese:

- Use pkuseg or Jieba for segmentation.
- Feed segmented text into Stanza where useful.
- Chinese analysis should focus more on word segmentation, characters, and compounds than suffixal morphology.

Ladino:

- Latin-script Ladino should start with Spanish Stanza models plus a custom Ladino dictionary.
- Hebrew-script Ladino should transliterate first, then run Spanish-like analysis and custom lexicon lookup.
- Long term, the project corpus and custom lexicon may become more valuable than existing NLP tools for Ladino.

## Phase 1 Parser Notes

Turkish:

- Agglutinative morphology requires morpheme segmentation.
- Prefer Zemberek as the first dedicated morphology service.
- Suffixes such as plural, possessive, case, tense, person, and voice should be clickable.
- Example: `ev-ler-imiz-den` should link token, lemma, root, suffix morphemes, and grammar features.

Arabic:

- Root and pattern analysis are essential.
- Prefer CAMeL Tools as the first dedicated morphology service.
- Support roots, lemmas, forms, patterns, stems, clitics, and vocalization metadata when available.
- Grammar pattern pages are important for derived forms and participles.

Hebrew:

- Root and binyan/pattern analysis are essential.
- Prefer YAP as the first dedicated morphology service.
- Support roots, lemmas, prefixes, suffixes, construct state, gender, number, and verb patterns.

Fallback:

- Use Stanza or UDPipe where a dedicated morphology service is unavailable or incomplete.
- Fallback analyses must still be normalized into the common parser output format.

## Lexical Knowledge Base

For this project, parsers are most important at ingestion time. Over time, the corpus-derived lexical knowledge base becomes more valuable than the original analyzer.

As users import texts, the system should accumulate:

- Lemma database
- Root database
- Morpheme database
- Translations
- Glosses
- Examples
- Audio
- User notes
- AI explanations

When a user clicks a word, morpheme, grammar feature, or pattern, most value should eventually come from this growing knowledge graph and example repository. The parser's long-term role is to populate, update, and reconcile the linguistic graph.

## Parser Rule

If parser confidence is incomplete, preserve partial analysis rather than hiding uncertainty. The reader should be able to show unknown or ambiguous analyses as data.
