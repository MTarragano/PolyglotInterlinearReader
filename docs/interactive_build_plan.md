# Interactive Build Plan

This plan turns the roadmap into a feedback-driven web app build sequence. The goal is to keep the project easy to review while the architecture is still forming: draft a usable web surface, gather feedback, then harden the data model and backend around the flows that work.

Current draft UI feedback and next-iteration notes live in `docs/draft_ui_feedback_notes.md`.

## Working Method

Build in short UI-first loops:

1. Draft a screen or workflow in the web app.
2. Review it interactively in the browser.
3. Adjust layout, terminology, controls, and learner flow.
4. Connect the workflow to local mock data.
5. Promote stable data shapes into API and database contracts.
6. Add persistence, tests, import/export, and background jobs.

The draft UI is not throwaway design work. It should use the same language-independent concepts that the production app will use: documents, sentences, tokens, morphemes, annotation rows, entities, dictionary sources, review events, audio spans, and import jobs.

## Step 1: App Shell and Index Pages

Create a compact app shell with first-pass navigation for:

- Library
- Import
- Reader
- Dictionary
- Progress
- Settings

The first screen should be the working library, not a marketing page. Users should be able to see texts, languages, import state, reading progress, and next practice actions.

Feedback questions:

- Can a learner tell where to start?
- Does the app feel like a reading workspace rather than a document archive?
- Are language, progress, and import status visible without clutter?

## Step 2: Text Library

Build a library view for texts and collections.

Initial features:

- Text list with title, language, source, sentence count, parse state, audio state, and progress.
- Collection filters.
- Search by title, source, tag, and language.
- Continue reading action.
- Import text action.

Later features:

- Generated content collections.
- Study packs.
- Shared or imported package metadata.
- License and provenance indicators.

## Step 3: Import and Export Workflow

Build import screens before the full backend is ready, using local mock previews.

Initial import modes:

- Paste or type text.
- Upload plain text.
- Import sentence rows from CSV or TSV.
- Manual language, title, source, and tag fields.

The workflow should follow preview-confirm:

1. User provides content.
2. App shows extracted document and sentence preview.
3. User maps or confirms fields.
4. App validates required values.
5. User confirms import.
6. Imported content appears in the library.

Export should start with:

- Corpus spreadsheet.
- Interlinear handout.
- Vocabulary list.
- JSON or JSONL research export.

## Step 4: Interlinear Reader

Make the reader the core product surface.

Required reader behavior:

- Dynamic interlinear rows.
- No traditional HTML tables.
- Natural token wrapping with CSS Grid or Flexbox.
- Clickable tokens, morphemes, lemmas, roots, POS labels, grammar features, and patterns.
- RTL and LTR support.
- Compact toolbar.
- Compact persistent audio bar.
- Inspector panel or bottom sheet for selected linguistic items.

Reader row presets:

- Reading.
- Interlinear.
- Morphology.
- Listening.
- Cloze.
- Minimal.

Feedback questions:

- Is the original script visually primary?
- Does the page remain comfortable for long reading?
- Are annotations useful without overwhelming the text?
- Do token clicks feel immediate and explainable?

## Step 5: Audio, TTS, and Speaking Practice

Add audio in layers.

First pass:

- Browser or placeholder sentence playback.
- Sentence navigation.
- Playback speed.
- Sentence loop.
- Active sentence highlighting.

Second pass:

- Piper TTS integration.
- Word, sentence, and document audio assets.
- Audio span storage.
- Token or sentence synchronized highlighting.

Speaking practice:

- Record attempt.
- Replay user recording.
- Compare with source audio when available.
- Store speaking-practice attempts.
- Show simple progress and success history.

The default practice loop should stay simple: play, speak, repeat, reveal hints, continue.

## Step 6: Cloze Testing and Learning Progress

Build cloze testing on top of selected reader entities.

Initial cloze types:

- Hide target word.
- Hide transliteration.
- Hide gloss.
- Hide lemma.
- Hide morpheme or grammar label.

Tracking:

- Attempt count.
- Correct or revealed state.
- Success rate.
- Last practiced timestamp.
- Known, learning, and unknown word state.
- Encounter counts from reading.

Progress views should summarize:

- Reading progress by document.
- Known words by language.
- Cloze success rate.
- Speaking-practice attempts.
- Due review items later.

## Step 7: Dictionary and Entity Pages

Build dictionary pages as entity knowledge pages, not simple lookup results.

Initial pages:

- Lemma.
- Root.
- Morpheme.
- Morphological type.
- Grammar feature.
- Grammar pattern.
- Sentence.
- Document.

Each page should combine:

- Dictionary source data.
- Corpus examples.
- Frequency.
- User notes.
- Audio.
- Known or learning state.
- Review history when available.

The UI should distinguish imported dictionary facts, corpus-derived facts, AI-generated material, and user notes.

## Step 8: Analysis and Annotation

Keep lightweight annotation inside the app and heavier editing available through import/export.

Inside the app:

- Token notes.
- Manual lemma/root correction.
- Grammar feature correction.
- Cloze creation.
- Tags.
- User confidence or reviewed state.

Outside the app:

- Export sentence lists for translation correction.
- Export token annotations for spreadsheet editing.
- Export morpheme annotations for segmentation and gloss correction.
- Re-import corrections with revision history.

## Step 9: Backend Hardening

Once the UI flows settle, promote the stable concepts into backend contracts:

- FastAPI endpoints.
- PostgreSQL tables.
- Alembic migrations.
- Parser interfaces.
- Import jobs.
- Export jobs.
- Audio jobs.
- Review and cloze records.

Long-running work should move to workers:

- Parsing.
- TTS.
- Audio alignment.
- Whisper transcription.
- AI generation.
- Search indexing.

## Step 10: AI Content and Study Packs

Add generation after the corpus, dictionary, reader, and review loops are coherent.

Generation targets:

- Lemmas.
- Morphemes.
- Roots.
- Grammar features.
- Grammar patterns.
- Constructions.

Generated outputs:

- Examples.
- Dialogues.
- Exercises.
- Pattern drills.
- Clozes.
- Speaking-practice lessons.
- Study packs.

Generated content must be saveable as normal corpus content, then parsed, indexed, read, played, and reviewed like imported material.

## Immediate Next Prototype

The next useful draft-web milestone is a clickable prototype with:

- Library screen.
- Import preview screen.
- Reader screen using current sample texts.
- Dictionary/entity preview panel.
- Progress screen with mock reading, cloze, and speaking scores.

That prototype should become the main feedback surface before the full Next.js, FastAPI, and PostgreSQL implementation begins.
