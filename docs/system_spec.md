# System Specification

This is the compact implementation specification for AI-assisted coding. Read it before creating migrations, APIs, parser modules, or UI components.

## Core Workflow

```text
User uploads text
        |
Select language
        |
Parser analyzes text
        |
Results stored
        |
Interlinear reader generated
        |
User reads/listens/speaks along
        |
Audio-synchronized interlinear practice
        |
User clicks words, morphemes, types, patterns, or features
        |
Entity page explains usage and shows corpus examples
        |
Generated examples/dialogues may be saved as corpus texts
        |
Unknown words tracked
        |
Cloze cards generated
        |
Speaking, cloze, and spaced repetition reviews
        |
Progress stored
```

## Stack

- Frontend: React, Next.js, TypeScript
- Backend API: FastAPI
- Workers: Celery preferred, RQ acceptable fallback
- Database: PostgreSQL
- ORM and migrations: SQLAlchemy and Alembic
- Search: PostgreSQL Full Text Search, possible later Elasticsearch
- Storage: local filesystem, possible later S3-compatible storage
- Universal parser foundation: Stanza and Universal Dependencies
- Universal parser fallback: UDPipe
- English, French, German, Dutch, Spanish, Greek: Stanza, with spaCy optional where useful
- Russian morphology: pymorphy3 plus Stanza
- Polish morphology: Morfeusz 2 plus Stanza
- Latin, Ancient Greek, Sanskrit: CLTK
- Turkish morphology: Zemberek
- Arabic morphology: CAMeL Tools
- Hebrew morphology: YAP
- Persian/Farsi morphology: Hazm plus Stanza
- Chinese segmentation: pkuseg or Jieba, then Stanza where useful
- Ladino: Spanish model plus custom lexicon; Hebrew-script Ladino needs transliteration first
- Fallback morphology: Stanza or UDPipe
- TTS: Piper
- Speech recognition: Whisper
- AI layer: OpenAI-compatible API

## Parser Strategy

Separate parser tooling into three layers:

1. Universal parser layer for broad tokenization, lemmatization, POS tagging, features, and dependencies.
2. Language-specific morphology layer where high-quality tools exist.
3. Dictionary and lexicon layer for explanations, roots, glosses, corpus examples, generated examples, and user notes.

Universal Dependencies is the internal standard. Store lemma, UPOS, features, and dependencies regardless of source analyzer.

## Database Shape

All primary keys use UUIDs. The first schema should cover these tables or direct equivalents:

- `users`
- `languages`
- `documents`
- `sentences`
- `tokens`
- `morphemes`
- `lemmas`
- `roots`
- `morpheme_dictionary`
- `morpheme_types`
- `grammar_features`
- `grammar_patterns`
- `constructions`
- `annotation_types`
- `token_annotations`
- `audio_files`
- `audio_alignments`
- `practice_sessions`
- `practice_attempts`
- `sentence_audio`
- `lemma_audio`
- `user_recordings`
- `user_lemmas`
- `reading_events`
- `word_encounters`
- `user_notes`
- `cloze_cards`
- `cloze_attempts`
- `review_state`
- `reviews`
- `generated_content`
- `generation_requests`
- `import_jobs`
- `import_sources`
- `import_rows`
- `import_field_mappings`
- `document_revisions`
- `annotation_revisions`
- `export_jobs`
- `export_artifacts`

## Corpus Tables

`documents` stores language code, title, source, description, uploader, created timestamp, and updated timestamp.

`sentences` stores document ID, sentence number, original text, translation text, optional audio reference, and creation timestamp.

`tokens` stores sentence ID, token number, surface form, normalized form, lemma ID, root ID, UPOS, XPOS, dependency head, and dependency relation.

`morphemes` stores token ID, sequence number, surface form, transliteration, gloss, grammatical function, and morpheme type.

## Dictionary Tables

`lemmas` stores language code, lemma text, transliteration, definition, IPA, and frequency.

`roots` stores language code, root, transliteration, and meaning. This is especially important for Arabic and Hebrew.

`morpheme_dictionary` stores language code, morpheme surface, gloss, and explanation.

`grammar_features`, `grammar_patterns`, and morpheme type records store stable language-scoped identities for clickable grammar objects such as `Case=Abl`, plural suffixes, prefix/suffix classes, Arabic forms, Hebrew binyanim, participial constructions, and other parser-emitted patterns.

Over time, the lexical knowledge base should become the primary source of value. The parser helps populate and reconcile lemmas, roots, morphemes, glosses, examples, audio, user notes, and AI explanations, but entity pages should increasingly draw from the project's own corpus-derived data.

## Annotation Layer

Every row shown in the interlinear display is an annotation layer. The reader must not assume a fixed row count.

Core tables:

- `annotation_types`
- `token_annotations`

Typical annotation types:

- `surface`
- `translation`
- `transliteration`
- `morphs`
- `gloss`
- `lemma`
- `root`
- `pos`
- `notes`

## Reader Model

The backend should return dynamic row metadata plus token data:

```json
{
  "translation": "...",
  "rows": [
    "surface",
    "transliteration",
    "morphs",
    "gloss",
    "lemma",
    "root",
    "pos"
  ],
  "tokens": []
}
```

The frontend renders this with CSS Grid or Flexbox. Never use traditional HTML tables for the interlinear reader.

Every displayed token, lemma, root, morpheme, morpheme type, grammar feature, grammar pattern, construction, sentence, and document should carry enough entity metadata for navigation to a canonical entity page.

The reader should prioritize text area over chrome. Interlinear token groups should flow naturally across the page using flexbox-like wrapping, with user-selectable rows aligned under target-language words and sentences. Per-language settings should control row visibility, font sizes, colors, token gaps, row gaps, script direction, and audio highlighting behavior. Detailed UI rules live in `docs/reader_ui_audio.md`.

## Entity Pages

Entity pages are required for words or lemmas, roots, morphemes, morphological types, grammar features, grammar patterns, constructions, sentences, and documents.

Each entity page should support:

- Explanation or definition
- Usage rules when applicable
- Corpus examples containing the word or matching the type or pattern
- Related entities in the linguistic graph
- User notes and review state
- AI-generated examples, dialogues, exercises, or study packs
- Saving generated material as a new word-focused or pattern-focused text in the corpus

## User Knowledge

Track:

- Known, unknown, learning, mastered, and ignored lemmas
- Familiarity score
- First seen and last seen timestamps
- Reading events
- Speaking practice sessions
- Speaking attempt recordings and scores
- Word encounters
- User notes
- Cloze cards
- Cloze attempt success rates
- Review state
- Review history

## Audio

Audio records live in `audio_files` and are linked to sentences and lemmas through relation tables.

Support:

- Word audio
- Sentence audio
- Document audio
- Dialogue and lesson audio
- Audio/text alignment for sentence, token, or smaller-span highlighting
- Synchronized speaking practice while viewing interlinear rows
- User recordings
- Piper generation when audio is missing
- Whisper transcription for recordings
- Optional comparison between source audio and user recording when feasible

## Practice and Clozes

Speaking practice should support real dialogues, interesting texts, stories, articles, educational lessons, and grammar-pattern repetition drills.

Practice modes include:

- Listen and read with synchronized highlighting
- Speak along with source audio
- Repeat after sentence, dialogue turn, passage, or grammar pattern
- Record and transcribe user attempts
- Cloze original script, transliteration, gloss, translation, or grammar labels
- Reveal hints progressively
- Track attempt outcomes and success rates over time
- Schedule future practice based on review state, recent attempts, and target entities

## AI Layer

AI may generate:

- Missing gloss suggestions
- Sentence translations
- Grammar explanations
- Usage examples
- Related forms
- Dialogues
- Exercises
- Study packs

Generation requests must target a first-class entity such as a lemma, root, morpheme, morpheme type, grammar feature, grammar pattern, construction, sentence, or document.

Generated content must be saveable as a new corpus document, including word-focused texts and pattern-focused texts. Saved generated content must be parsed, indexed, linked back to its target entity, and made available in the reader like uploaded content.

## Search

Search indexes must cover:

- Lemma
- Root
- Translation
- Gloss
- Surface form
- Morpheme
- Morpheme type
- Grammar feature
- Grammar pattern
- Construction

PostgreSQL Full Text Search is the Phase 1 search engine. Elasticsearch can be considered later only if PostgreSQL search becomes insufficient.

## API Surface

All routes should be versioned under `/api/v1`.

Minimum implementation endpoints:

- `POST /api/v1/documents`
- `POST /api/v1/documents/{id}/parse`
- `GET /api/v1/documents/{id}/reader`
- `GET /api/v1/lemmas/{id}`
- `GET /api/v1/morphemes/{id}`
- `GET /api/v1/morpheme-types/{id}`
- `GET /api/v1/grammar-features/{id}`
- `GET /api/v1/grammar-patterns/{id}`
- `GET /api/v1/constructions/{id}`
- `POST /api/v1/notes`
- `POST /api/v1/reviews`
- `POST /api/v1/practice-sessions`
- `POST /api/v1/practice-attempts`
- `POST /api/v1/cloze-attempts`

The fuller API contract lives in `docs/api.md`.

## Input, Import, Editing, and Export

Users must be able to create corpus documents by typing or pasting text, uploading plain text, importing spreadsheets, importing word-processing documents, importing subtitle-like structured text, and later importing packaged lessons.

Imports should use a preview-confirm pipeline:

1. Upload or paste source content.
2. Detect source type, language hints, structure, and candidate fields.
3. Show a preview with validation warnings.
4. Let the user map columns or document sections to corpus fields.
5. Confirm import.
6. Create normal corpus documents.
7. Parse, index, and make the result available in the reader.

Edited external data should be exportable back to common formats, including CSV, TSV, XLSX, DOCX, Markdown, JSON, and package formats. Import/export details live in `docs/input_import_export.md`.

## Development Phases

1. Corpus reader: upload, parse, store, display.
2. Dictionary: lemma pages, root pages, search.
3. Audio and speaking: TTS, word audio, sentence audio, audio alignment, synchronized speaking practice, and recordings.
4. Learning: notes, known words, cloze cards, cloze attempts, speaking attempts, success rates, scheduled practice, and reviews.
5. AI: automatic glosses, translations, grammar explanations, generated examples, dialogues, grammar-pattern drills, speaking-practice lessons, and exercises.
6. Advanced linguistics: dependency trees, alignment, parallel texts, multiple translations, etymology, semantic domains.
