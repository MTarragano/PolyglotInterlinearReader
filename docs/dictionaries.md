# Dictionaries and Lexical Knowledge

This document specifies dictionary strategy for the multilingual reader.

## Core Recommendation

Do not build the dictionary as a simple lookup table.

Build it as a lexical knowledge base that combines:

- External dictionary imports.
- Parser-produced lemmas, roots, forms, features, and morphology.
- Corpus-derived examples and frequencies.
- User notes and corrections.
- AI-generated explanations.
- Audio and pronunciation data.
- Review and encounter history.

The dictionary should become more valuable as the user's corpus grows.

## Dictionary Layers

Use three layers:

1. External sources: imported dictionaries, word lists, lexicons, glossaries, and public datasets.
2. Corpus-derived data: frequency, examples, collocations, forms, morphemes, roots, patterns, translations, and user corrections.
3. User and AI enrichment: notes, generated explanations, study examples, dialogues, clozes, and custom definitions.

The UI should show these layers clearly. A learner should be able to see what came from a source dictionary, what came from their corpus, and what was added by AI or by a human.

## Source Types

Support dictionary imports from:

- CSV, TSV, and XLSX word lists.
- JSON and JSONL lexical datasets.
- TEI/XML lexicons where useful.
- Simple bilingual glossaries.
- Morphological analyzer lexicons.
- User-created vocabulary lists.
- Exported Anki-like decks where license and structure allow.
- Project package dictionaries in a later phase.

Potential source categories:

- General bilingual dictionaries.
- Monolingual dictionaries.
- Learner dictionaries.
- Root dictionaries.
- Morpheme dictionaries.
- Grammar glossaries.
- Domain glossaries.
- Proper noun lists.
- Frequency lists.

## Data Model

Recommended tables:

- `dictionary_sources`
- `dictionary_entries`
- `dictionary_senses`
- `dictionary_forms`
- `dictionary_examples`
- `dictionary_import_jobs`
- `dictionary_entry_links`
- `sense_relations`

`dictionary_sources` should store:

- Name.
- Language.
- Source URL or citation.
- License.
- Attribution text.
- Import date.
- Trust level.
- Priority.
- Source type.

`dictionary_entries` should store:

- Headword.
- Normalized headword.
- Language.
- Transliteration.
- Pronunciation or IPA.
- Source.
- Linked lemma when resolved.
- Linked root when resolved.

`dictionary_senses` should store:

- Sense number.
- Part of speech.
- Definition.
- Short gloss.
- Usage labels.
- Domain labels.
- Register.
- Dialect or variant.
- Confidence.
- Source attribution.

`dictionary_forms` should store:

- Inflected form.
- Normalized form.
- Lemma or entry link.
- Morphological features.
- Source analyzer.
- Confidence.

`dictionary_examples` should store:

- Example sentence.
- Translation.
- Source.
- Linked corpus sentence if available.
- Sense or entry link.

## Lemma Page Behavior

The lemma page should be the main learner-facing dictionary page.

It should show:

- Headword.
- Transliteration.
- Pronunciation or IPA.
- Audio.
- Short learner-friendly meaning.
- Dictionary senses grouped by part of speech and source.
- Corpus frequency.
- Inflected forms seen in the corpus.
- Roots, morphemes, patterns, and grammar features.
- Corpus examples.
- Generated examples.
- Related words.
- User notes.
- Known or learning state.
- Review history.
- Source attribution.

The first screen should be compact: meaning, audio, known state, and a few examples. Deeper dictionary detail can be expandable.

## Sense Handling

Multiple senses are essential.

The system should support:

- One lemma with multiple dictionary senses.
- One surface form linking to multiple possible lemmas.
- Parser ambiguity before user or corpus disambiguation.
- Sense-specific examples.
- User-selected sense for a token in a sentence.
- AI-suggested sense labels that require review or confidence metadata.

Tokens in the corpus may link to:

- A lemma.
- A root.
- A dictionary entry.
- A specific sense when known.

Sense linking can start manual or AI-assisted and become smarter later.

## Root and Morpheme Dictionaries

For Arabic and Hebrew, root dictionaries are first-class.

Root pages should show:

- Root.
- Transliteration.
- Core meaning.
- Derived lemmas.
- Patterns or binyanim.
- Corpus examples.
- Related roots.
- Dictionary source entries.

Morpheme dictionaries should show:

- Surface form.
- Allomorphs.
- Gloss.
- Grammatical function.
- Usage explanation.
- Examples.
- Related grammar features.
- Source attribution.

For Turkish, suffix entries such as plural, case, possession, person, tense, evidentiality, and voice should be linked to grammar feature pages and corpus examples.

## Import Workflow

Dictionary import should use the same preview-confirm pattern as corpus import:

1. Upload source file.
2. Detect format and language.
3. Preview entries and senses.
4. Map fields.
5. Validate required fields.
6. Confirm import.
7. Normalize headwords and forms.
8. Attempt automatic links to lemmas, roots, morphemes, and grammar features.
9. Report unresolved entries.

Supported import formats:

- CSV
- TSV
- XLSX
- JSON
- JSONL
- XML or TEI later

## Conflict Resolution

Different dictionaries will disagree.

The system should preserve source-specific claims rather than overwriting them. Conflict resolution should use:

- Source priority.
- Parser evidence.
- Corpus frequency.
- User correction history.
- AI suggestions with confidence metadata.
- Manual review.

The UI can show a synthesized learner meaning while preserving all source senses underneath.

## Dictionary Search

Dictionary search should support:

- Surface form.
- Normalized form.
- Lemma.
- Root.
- Transliteration.
- Definition.
- Gloss.
- Morpheme.
- Grammar feature.
- Example sentence.
- Fuzzy matching.
- Prefix and suffix lookup.

Search results should show whether a result is from:

- Corpus.
- External dictionary.
- User note.
- AI-generated content.

## Language-Specific Notes

Turkish:

- Strong morpheme and suffix dictionary support matters.
- Link suffix entries to grammar feature pages.
- Store allomorphs, such as vowel harmony variants.

Arabic:

- Root dictionary and pattern dictionary are central.
- Entries should connect lemma, root, pattern, form, stem, clitics, and vocalization.

Hebrew:

- Root and binyan dictionaries are central.
- Support script, transliteration, vocalized and unvocalized forms.

Ladino:

- Custom lexicon support is crucial.
- Support Latin-script and Hebrew-script forms linked to the same entry where possible.

Chinese:

- Dictionary should handle characters, words, compounds, pinyin, and examples.
- Segmentation alternatives may link to different entries.

Latin and Ancient Greek:

- Lemma, principal parts, inflected forms, morphology, and citations matter.
- CLTK-derived forms should be linkable to dictionary entries.

## AI Use

AI can help with:

- Draft learner-friendly explanations.
- Sense disambiguation suggestions.
- Example generation.
- Related word suggestions.
- Register and usage notes.
- Filling gaps when no source dictionary exists.

AI output must be labeled as AI-generated and should not silently replace sourced dictionary data.

## Export

Dictionary export should support:

- CSV or TSV vocabulary lists.
- XLSX dictionary sheets.
- JSONL lexical records.
- Markdown learner handouts.
- Anki-style cloze or vocabulary exports.
- Package dictionaries for shared lessons later.

## Phase Plan

Phase 1:

- Lemma table and basic definitions.
- Corpus-derived frequency and examples.
- CSV/TSV vocabulary import.
- Lemma page with audio, examples, notes, and review state.

Phase 2:

- Dictionary sources, entries, senses, and forms.
- XLSX and JSONL imports.
- Source attribution.
- Dictionary search.

Phase 3:

- Root and morpheme dictionaries.
- Sense linking on tokens.
- Conflict resolution UI.
- Dictionary export.

Phase 4:

- TEI/XML import where useful.
- AI-assisted sense disambiguation.
- Language-specific dictionary enrichments.
- Shared package dictionaries.
