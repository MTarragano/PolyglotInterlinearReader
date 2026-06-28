# Input, Import, Editing, and Export

This document specifies how users get text and structured linguistic data into the system, how they edit it, and how they export it for external analysis or reuse.

## Goals

- Support fast manual text entry.
- Support uploaded files from real learner and researcher workflows.
- Support spreadsheet-based corpus preparation and correction.
- Support document-based reading, annotation, and editing.
- Preserve provenance and revision history.
- Convert every confirmed import into normal corpus documents.
- Export corpus, annotation, vocabulary, review, and generated content in useful external formats.

## Input Modes

The application should support these input modes:

- Type text directly.
- Paste text from clipboard.
- Upload plain text files.
- Upload subtitle-like files, such as SRT, VTT, or TSV dialogue scripts.
- Upload spreadsheets, such as CSV, TSV, XLSX, or Google Sheets export files.
- Upload word-processing documents, such as DOCX, ODT, RTF, Markdown, or HTML.
- Import generated AI content as corpus documents.
- Later: import packaged interlinear lessons with media and metadata.

## Text Entry Facility

The text entry screen should include:

- Language selector.
- Title field.
- Source and attribution fields.
- Optional description.
- Main text editor.
- Optional translation editor.
- Optional tags or collection selector.
- Parse immediately toggle.
- Save draft button.
- Import and parse button.

Text entry should support long texts, but very large inputs should be handled as background jobs.

## Import Pipeline

All imports should follow a preview-confirm pipeline:

1. User uploads or pastes source content.
2. Backend creates an import job.
3. Source file is stored with checksum and metadata.
4. Importer extracts candidate documents, sentences, translations, notes, tags, and metadata.
5. System shows a preview.
6. User confirms language and field mappings.
7. System validates required fields.
8. Confirmed import creates normal corpus documents and sentences.
9. Parser job is queued.
10. Search index, entity links, audio tasks, and review-related encounter data are updated.

Unconfirmed imports should not pollute the corpus.

## Spreadsheet Import

Spreadsheet import is important for external analysis, correction, and bulk corpus preparation.

Supported formats:

- CSV
- TSV
- XLSX
- Google Sheets export files

Common spreadsheet columns:

- `document_title`
- `language_code`
- `sentence_number`
- `original_text`
- `translation_text`
- `transliteration`
- `token`
- `lemma`
- `root`
- `upos`
- `features`
- `morpheme_segmentation`
- `gloss`
- `notes`
- `source`
- `tags`
- `audio_file`

The import UI should allow users to map arbitrary column names to internal fields. It should also support saving reusable mapping presets.

Spreadsheet import modes:

- Sentence list: one sentence per row.
- Parallel text: original and translation columns.
- Token annotation sheet: one token per row.
- Morpheme annotation sheet: one morpheme per row.
- Vocabulary list: lemma/root/gloss/definition rows.
- Review deck import: cloze, answer, target entity, and due-state rows.

Validation should report:

- Missing required fields.
- Unknown language codes.
- Duplicate sentence numbers.
- Invalid UUID references.
- Unparseable feature strings.
- Ambiguous field mappings.

## Document Import

Document import should preserve readable structure where possible.

Supported formats:

- TXT
- Markdown
- DOCX
- ODT
- RTF
- HTML
- PDF as a later OCR/text-extraction workflow

Importers should extract:

- Title
- Headings
- Paragraphs
- Sentence candidates
- Footnotes or endnotes when available
- Inline emphasis when useful
- Source metadata

Document imports should allow users to choose:

- Treat whole file as one document.
- Split by heading into multiple documents.
- Split paragraphs into sentence candidates.
- Pair alternating paragraphs as original and translation.
- Ignore footnotes or import them as notes.

## External Analysis and Editing

Users should be able to export data to spreadsheets or documents, edit externally, and re-import corrections.

Supported editing workflows:

- Export sentence list, edit translations, re-import.
- Export token annotations, correct lemmas or POS tags, re-import.
- Export morpheme annotations, correct segmentation or glosses, re-import.
- Export vocabulary list, add definitions or notes, re-import.
- Export grammar feature examples for teaching material editing.
- Export generated AI material to DOCX or Markdown for human review, then re-import accepted edits.

Re-imported corrections should create revision records, not overwrite silently.

## Export Formats

Export should support:

- CSV
- TSV
- XLSX
- JSON
- JSONL
- Markdown
- DOCX
- HTML
- SRT
- VTT
- Interlinear package ZIP in a later phase

Export targets:

- Documents
- Sentences
- Reader rows
- Tokens
- Morphemes
- Lemmas
- Roots
- Grammar features
- Grammar patterns
- Search results
- User notes
- Vocabulary status
- Cloze cards
- Review history
- Generated content

## Export Profiles

Useful export profiles:

- Corpus spreadsheet: sentence, translation, language, source, tags.
- Annotation spreadsheet: token, lemma, root, POS, features, morphemes, glosses.
- Vocabulary list: lemma, root, definition, frequency, known status, example sentence.
- Interlinear handout: original, transliteration, gloss, translation.
- Teaching packet: examples, dialogues, exercises, answers.
- SRS backup: cloze, answer, target entity, scheduling state.
- Research JSONL: one sentence with nested tokens and morphemes per line.
- Reader package: document, annotations, audio references, provenance, and license.

## Revision and Provenance

Imports and edits must preserve:

- Original source file metadata.
- File checksum.
- Import user.
- Import timestamp.
- Field mapping used.
- Parser version used.
- Human correction history.
- AI generation metadata where applicable.
- Export timestamp and filters.

Corrections should be attributable to a user or system process.

## API Requirements

Input and import endpoints:

- `POST /api/v1/imports/text`
- `POST /api/v1/imports/files`
- `POST /api/v1/imports/spreadsheets`
- `POST /api/v1/imports/documents`
- `GET /api/v1/imports/{import_job_id}`
- `POST /api/v1/imports/{import_job_id}/confirm`
- `POST /api/v1/imports/{import_job_id}/cancel`

Editing endpoints:

- `PATCH /api/v1/documents/{document_id}`
- `PATCH /api/v1/sentences/{sentence_id}`
- `PATCH /api/v1/tokens/{token_id}/annotations`
- `PATCH /api/v1/morphemes/{morpheme_id}`

Export endpoints:

- `POST /api/v1/exports`
- `GET /api/v1/exports/{export_job_id}`
- `GET /api/v1/exports/{export_job_id}/download`

Large imports and exports should run as background jobs.

## UI Requirements

The import UI should include:

- Source selector.
- Drag-and-drop upload area.
- Paste/type editor.
- Language selector.
- Field mapping panel for structured imports.
- Preview table or document preview.
- Validation warnings.
- Confirm import button.
- Save mapping preset action.

The export UI should include:

- Format selector.
- Entity scope selector.
- Field selector.
- Filters for language, collection, source, date, known status, and target entity.
- Preview count.
- Export button.
- Download link when ready.

Spreadsheet previews may use grid-like UI components, but the interlinear reader itself must still avoid traditional HTML tables.

## Phase Plan

Phase 1:

- Typed/pasted text input.
- TXT, CSV, TSV import.
- Basic language selector and title/source metadata.
- Import preview and confirmation.
- Basic JSON and CSV export.

Phase 2:

- XLSX import/export.
- Mapping presets.
- Sentence and token annotation correction imports.
- Revision history.

Phase 3:

- DOCX, Markdown, HTML import/export.
- Interlinear handout export.
- Vocabulary and SRS backup export.

Phase 4:

- SRT/VTT import/export.
- Audio alignment import/export.
- External speaking-practice and subtitle workflows.

Phase 5:

- Package ZIP import/export.
- Shared lesson bundles.
- Marketplace-ready provenance, license, and validation metadata.
