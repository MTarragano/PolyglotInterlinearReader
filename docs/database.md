# Database

PostgreSQL is the source of truth. All primary keys must be UUIDs. Schema changes must be managed through migrations.

## Core Principles

- Store uploaded and generated content in the same corpus model.
- Store generated content metadata, but do not isolate it from normal search, parsing, audio, or review workflows.
- Model linguistic entities as a graph of linked records, not only as nested document content.
- Keep language-independent tables generic and use metadata fields for language-specific details where needed.
- Track user knowledge separately from linguistic facts.

## Core Entities

Corpus hierarchy:

- Document
- Sentence
- Token
- Morpheme

Linguistic graph:

- Lemma
- Root
- Morpheme
- Morphological Type
- Grammar Feature
- Grammar Pattern
- Construction
- Part of Speech
- Translation

Learning system:

- User Vocabulary State
- Encounter Count
- Reading History
- Speaking Practice Session
- Practice Attempt
- Notes
- Cloze
- Cloze Attempt
- Review Item
- Review Event

Audio:

- Word Audio
- Sentence Audio
- Document Audio
- Audio Alignment
- User Recording

Generated content:

- Generated Document
- Generated Sentence
- Generated Exercise
- Generated Dialogue
- Generated Example Set

## Suggested Tables

Initial schema should include, at minimum:

- `users`
- `languages`
- `documents`
- `sentences`
- `tokens`
- `morphemes`
- `morpheme_dictionary`
- `dictionary_sources`
- `dictionary_entries`
- `dictionary_senses`
- `dictionary_forms`
- `dictionary_examples`
- `dictionary_import_jobs`
- `lemmas`
- `roots`
- `grammar_features`
- `grammar_patterns`
- `morpheme_types`
- `constructions`
- `entity_relations`
- `annotation_types`
- `token_annotations`
- `token_features`
- `morpheme_features`
- `translations`
- `audio_files`
- `audio_alignments`
- `sentence_audio`
- `lemma_audio`
- `user_recordings`
- `practice_sessions`
- `practice_attempts`
- `user_lemmas`
- `user_entity_notes`
- `user_notes`
- `reading_events`
- `word_encounters`
- `cloze_cards`
- `cloze_attempts`
- `review_state`
- `review_events`
- `reviews`
- `generated_content`
- `generation_requests`
- `search_index`
- `import_jobs`
- `import_sources`
- `import_rows`
- `import_field_mappings`
- `document_revisions`
- `annotation_revisions`
- `export_jobs`
- `export_artifacts`

The exact migration may refine these names, but the conceptual coverage should remain.

## Dictionaries and Lexical Knowledge

Dictionaries should be modeled as source-backed lexical knowledge, not as a single definition field on `lemmas`.

Minimum dictionary tables:

- `dictionary_sources`: source name, language, license, attribution, import metadata, priority, trust level
- `dictionary_entries`: headword, normalized headword, language, transliteration, pronunciation, source, linked lemma/root when resolved
- `dictionary_senses`: entry, sense number, part of speech, definition, glosses, usage labels, domain labels, register, confidence
- `dictionary_forms`: entry or lemma, inflected form, normalized form, features, parser source
- `dictionary_examples`: sense or entry, source text, translation, linked corpus sentence when available
- `dictionary_import_jobs`: source file, status, mapping, validation, imported counts

The lemma page should synthesize dictionary senses, corpus examples, parser data, user notes, AI explanations, and review history. Do not treat any single external dictionary as authoritative when parser and corpus evidence disagree.

## Input, Import, Editing, and Export

Import jobs should preserve provenance and mapping decisions. Uploaded text, pasted text, spreadsheets, documents, and future package imports should all produce normal corpus documents after confirmation.

Minimum import/export tables:

- `import_jobs`: user, source type, status, language, parser options, validation summary, timestamps
- `import_sources`: original filename, media type, file path, checksum, source metadata
- `import_rows`: normalized preview rows from spreadsheets or structured documents before confirmation
- `import_field_mappings`: user-confirmed mappings from external columns or sections to document, sentence, translation, note, tag, audio, or annotation fields
- `document_revisions`: edit history for document and sentence text changes
- `annotation_revisions`: edit history for token, morpheme, gloss, lemma, root, feature, and translation corrections
- `export_jobs`: requested format, filters, status, timestamps
- `export_artifacts`: generated file path, media type, checksum, and download metadata

All confirmed imports should enter the same parsing and indexing pipeline as manually pasted text.

## Generated Content

Generated content must be saved with metadata such as:

```json
{
  "source": "ai",
  "generator": "openai-compatible",
  "target_entity_type": "grammar_feature",
  "target_entity_id": "uuid",
  "prompt_version": "string"
}
```

The `target_entity_type` should support lemmas, roots, morphemes, morpheme types, grammar features, grammar patterns, constructions, sentences, and documents. This allows generated examples or dialogues to be saved as reusable word-focused or pattern-focused corpus texts.

After generation, content must pass through the same pipeline as uploaded text:

```text
Generated text -> Parser -> Sentences -> Tokens -> Morphemes -> Search index -> Reader -> Review system
```

## Search

Search must support:

- Word
- Lemma
- Root
- Translation
- Gloss
- Morpheme
- Morphological Type
- Grammar Feature
- Grammar Pattern
- Construction

Use PostgreSQL Full Text Search for text fields, combined with structured indexes for entity IDs, language IDs, and feature codes.

## Annotation Layers

Every row displayed in the interlinear reader should be representable as an annotation layer. This lets the system add rows such as transliteration, gloss, lemma, root, part of speech, notes, dependency relation, or future language-specific annotations without changing the reader layout.

Minimum annotation tables:

- `annotation_types`
- `token_annotations`

Common annotation type names:

- `surface`
- `translation`
- `transliteration`
- `morphs`
- `gloss`
- `lemma`
- `root`
- `pos`
- `notes`

## Suggested Core SQL Shape

The first migration should be based on these concepts, using SQLAlchemy models and Alembic migrations rather than hand-maintained SQL files:

- `documents`: language code, title, source, description, uploader, timestamps
- `sentences`: document, sentence number, original text, translation text, audio reference, timestamp
- `tokens`: sentence, token number, surface form, normalized form, lemma, root, UPOS, XPOS, dependency head, dependency relation
- `morphemes`: token, sequence number, surface form, transliteration, gloss, grammatical function, morpheme type
- `morpheme_types`: language code, type code, display label, explanation
- `lemmas`: language code, lemma, transliteration, definition, IPA, frequency
- `roots`: language code, root, transliteration, meaning
- `morpheme_dictionary`: language code, morpheme, gloss, explanation
- `grammar_patterns`: language code, pattern code, display label, explanation, parser metadata
- `constructions`: language code, construction code, display label, explanation, parser metadata
- `entity_relations`: source entity type/id, relation type, target entity type/id
- `audio_files`: language code, file path, duration, timestamp
- `audio_alignments`: audio, document or sentence, alignment granularity, timed spans, source, confidence
- `user_lemmas`: user, lemma, status, familiarity score, first seen, last seen
- `practice_sessions`: user, target entity or passage, practice mode, scheduled date, started at, completed at
- `practice_attempts`: practice session, optional recording, optional transcription, score, success flag, attempt metadata, timestamp
- `reading_events`: user, sentence, timestamp
- `word_encounters`: user, lemma, sentence, timestamp
- `user_notes`: user, target entity, note, timestamp
- `cloze_cards`: user, sentence, target entity, cloze text, answer
- `cloze_attempts`: cloze card, user, hint mode, response, score, success flag, timestamp
- `review_state`: user, target entity, interval days, ease factor, due date
- `reviews`: user, target entity, review date, score

## Spaced Repetition

Review items must store:

- Interval
- Ease factor
- Due date
- Review type
- Target entity or cloze
- Review history

Review events should be immutable records.

Practice scheduling should use the same review-state principles for words, sentences, passages, clozes, and grammar patterns, while keeping detailed attempt records immutable.
