# API

The backend exposes a versioned REST API using FastAPI and OpenAPI documentation.

## Requirements

- All endpoints must live under a versioned prefix, such as `/api/v1`.
- OpenAPI docs must be enabled for development.
- Request and response models must be typed.
- Long-running operations should return job IDs and status endpoints.
- API models should not leak ORM internals.
- Language-specific behavior should be selected through language IDs, parser IDs, or service configuration, not frontend conditionals.

## Core Endpoint Groups

Corpus:

- `POST /api/v1/documents`
- `GET /api/v1/documents`
- `GET /api/v1/documents/{document_id}`
- `GET /api/v1/documents/{document_id}/reader`
- `GET /api/v1/documents/{document_id}/sentences`
- `GET /api/v1/sentences/{sentence_id}`

Input and import:

- `POST /api/v1/imports/text`
- `POST /api/v1/imports/files`
- `POST /api/v1/imports/spreadsheets`
- `POST /api/v1/imports/documents`
- `GET /api/v1/imports/{import_job_id}`
- `POST /api/v1/imports/{import_job_id}/confirm`
- `POST /api/v1/imports/{import_job_id}/cancel`

Editing and export:

- `PATCH /api/v1/documents/{document_id}`
- `PATCH /api/v1/sentences/{sentence_id}`
- `PATCH /api/v1/tokens/{token_id}/annotations`
- `POST /api/v1/exports`
- `GET /api/v1/exports/{export_job_id}`
- `GET /api/v1/exports/{export_job_id}/download`

Parsing:

- `POST /api/v1/documents/{document_id}/parse`
- `GET /api/v1/parse-jobs/{job_id}`
- `GET /api/v1/languages/{language_id}/parser-capabilities`

Entities:

- `GET /api/v1/lemmas/{lemma_id}`
- `GET /api/v1/roots/{root_id}`
- `GET /api/v1/morphemes/{morpheme_id}`
- `GET /api/v1/morpheme-types/{type_id}`
- `GET /api/v1/grammar-features/{feature_id}`
- `GET /api/v1/grammar-patterns/{pattern_id}`
- `GET /api/v1/constructions/{construction_id}`
- `GET /api/v1/sentences/{sentence_id}`
- `GET /api/v1/documents/{document_id}`

Dictionaries:

- `GET /api/v1/dictionaries`
- `POST /api/v1/dictionaries/imports`
- `GET /api/v1/dictionaries/imports/{import_job_id}`
- `GET /api/v1/dictionary-entries/{entry_id}`
- `GET /api/v1/lemmas/{lemma_id}/dictionary`
- `POST /api/v1/lemmas/{lemma_id}/dictionary-links`
- `POST /api/v1/dictionary-entries/{entry_id}/examples`

Search:

- `GET /api/v1/search`

Audio:

- `POST /api/v1/audio`
- `GET /api/v1/audio/{audio_id}`
- `POST /api/v1/audio-alignments`
- `GET /api/v1/audio-alignments/{alignment_id}`
- `POST /api/v1/recordings`
- `POST /api/v1/transcriptions`

Practice:

- `POST /api/v1/practice-sessions`
- `GET /api/v1/practice-sessions/{session_id}`
- `POST /api/v1/practice-attempts`
- `GET /api/v1/me/practice-history`
- `GET /api/v1/me/practice-schedule`
- `POST /api/v1/cloze-attempts`

AI generation:

- `POST /api/v1/generation/examples`
- `POST /api/v1/generation/dialogues`
- `POST /api/v1/generation/exercises`
- `POST /api/v1/generation/study-packs`
- `POST /api/v1/generation/save-as-document`
- `GET /api/v1/generation/jobs/{job_id}`

User knowledge:

- `GET /api/v1/me/vocabulary`
- `PUT /api/v1/me/vocabulary/{entity_id}`
- `GET /api/v1/me/reading-history`
- `POST /api/v1/me/notes`
- `GET /api/v1/me/reviews/due`
- `POST /api/v1/me/reviews/{review_item_id}`

## Reader Response Shape

The document reader endpoint should return dynamic rows and token data, not fixed UI assumptions:

```json
{
  "document_id": "uuid",
  "language_code": "tr",
  "sentences": [
    {
      "sentence_id": "uuid",
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
  ]
}
```

The frontend may choose how to render available rows, but the backend decides which rows exist for the sentence and language.

Reader responses may include audio alignment metadata when available so the frontend can highlight the current sentence, token, morpheme, or timed span during playback and speaking practice.

## Entity Page Responses

Entity page endpoints should return enough data for UI rendering without hardcoded language logic:

- Entity identity
- Language
- Meaning or description
- Morphological type, grammar feature, grammar pattern, or construction metadata when applicable
- Frequency
- Audio assets
- Corpus examples
- Generated examples
- Related entities
- User notes
- Review history
- Available actions

Entity examples must support both direct containment, such as sentences containing a lemma or morpheme, and pattern matching, such as sentences containing any prefix, suffix, clitic, case marker, derived form, binyan, or construction of the same type.

## Generation Requests

Generation endpoints should accept a target entity reference:

```json
{
  "target_entity_type": "grammar_pattern",
  "target_entity_id": "uuid",
  "language_id": "uuid",
  "content_type": "examples",
  "save_as_document": true
}
```

Generated output may remain a draft or be saved as a new corpus document. When saved, it must be parsed, indexed, linked to the target entity, and returned in reader-compatible form.

## Practice Requests

Practice sessions should target a document, sentence, dialogue turn, passage, lemma, morpheme, grammar feature, grammar pattern, or generated drill.

Practice attempts should record:

- Target entity or passage
- Practice mode, such as speak-along, repeat-after, cloze, or grammar-pattern drill
- Hint mode, such as original script, transliteration, gloss, translation, or grammar label
- Optional user recording or transcription
- Success, score, or completion metadata
- Scheduling metadata for future review

## Error Handling

Use consistent error responses with:

- Error code
- Human-readable message
- Optional details
- Request ID where available
