# Current UI Feedback and Proposed Next Draft

These notes preserve the product discussion for continuing work in Codex on the web. They supplement `docs/draft_ui_feedback_notes.md` and describe the state of the current draft as of 10 July 2026.

## What the Current Draft Already Incorporated

The earlier feedback was recorded in `docs/draft_ui_feedback_notes.md` and then partially implemented in commit `80573e8` (`Improve draft UI from feedback notes`). The resulting prototype added:

- A tabular Library view alongside cards.
- Library language filtering and language/progress/recent/due sorting controls.
- Import fields for an audio file, original URL, record date, and import purpose.
- Coloured interlinear row controls with basic hover descriptions.
- A compact language selector, although the old language buttons were mistakenly retained too.
- Interlinear and cloze Word List views with mock progress information.
- Up/down keyboard actions for increasing or decreasing knowledge and revealing cloze answers.
- A tabular Dictionary mock with scope and entity-type controls.
- Per-language Progress cards and a mock User Scheduling section.

These remain frontend demonstrations backed by small embedded sample data. Import confirmation, persistence, parsing corrections, dictionary editing, scheduling, and meaningful learning metrics are not implemented.

## Newly Confirmed Product Direction

### Language controls

Remove the duplicated French/Hebrew/Arabic/Turkish button row. Use one compact language control only where the page needs it:

- Library: its own filter, with `All active languages` available.
- Import: a required import-language selector.
- Reader: language normally follows the open text; use a compact text/language switcher if needed.
- Dictionary: exactly one active language by default.
- Progress: a language filter, optionally with an all-language summary.

Language choices should be limited to the learner's selected languages and languages represented by imported texts, rather than a country-based catalogue.

### Importing a new language

The Import language selector must offer `Add a new language...`. A new language should be usable even when no specialised parser exists. Initial setup should request only practical defaults:

- Language name and optional ISO code.
- Writing direction (LTR or RTL).
- Script/font preference.
- Generic or available language-specific tokenizer/parser.
- Transliteration convention.
- Default interlinear rows.

### Import review workflow

Turn Import into a three-stage review workspace:

1. Source: text, audio, URL, date, and metadata.
2. Structure review: paragraphs and sentence candidates with split, merge, and reorder controls.
3. Annotation review: editable sentence translations, tokens, transliterations, glosses, lemmas, and morphology beside an interlinear preview.

The final review should keep editable import data and the resulting reader visible together. Actions should include Back to source, Re-run parsing, Save draft, Confirm import, and Open in Reader.

### Knowledge and review state

Replace the single `Known` action and premature arbitrary 0-100 knowledge score with understandable stages:

`New -> Learning -> Acquainted -> Well known`

- Up arrow moves one stage higher.
- Down arrow moves one stage lower.
- Inspector and interlinear token must always refer to the same word and stage.
- Either scoring action reveals a cloze answer.
- The user can immediately reverse an action.
- Record review events, encounters, recall outcome, last-reviewed time, and stage separately.

Do not select or imply a final spaced-repetition algorithm yet. Preserving the underlying review-event history will allow a later scheduling method to be adopted without losing evidence.

### Dictionary

Dictionary should be language-first and word-first for ordinary learners:

- Exactly one language selected by default.
- Words/lemmas as the default content.
- Recent words as the default scope.
- Suggested primary columns: Word, Meaning, Learning stage, Frequency, Last seen, Next review, and Source text.

Roots, morphemes, grammar features, and structural entities should sit behind an `Advanced linguistic structure` view, especially for teachers and administrators.

Editing should eventually distinguish:

- Personal fields such as learner notes, preferred glosses, and learning stage.
- Text-specific token, lemma, translation, and gloss corrections.
- Shared dictionary fields requiring permissions and provenance.

### Representative real data

The next draft should use a representative subset of real supplied language data rather than relying only on embedded toy samples. A backend is not required for this evaluation stage; normalised fixture files are sufficient.

A useful initial subset would contain:

- Two or three languages, including at least one RTL language.
- Two to five texts per language.
- Approximately 10-30 sentences per text.
- Available sentence translations, tokens, transliterations, lemmas, glosses, and morphology.
- Source and provenance metadata.

Missing information should remain visibly absent rather than being replaced with invented progress, recency, due-date, or annotation values. Source material can initially arrive as JSON, CSV/TSV, spreadsheets, or structured documents and be normalised for the prototype.

## Confirmed Review Defects to Fix

Before relying on functional testing, fix these issues in `apps/web/app.js`:

1. The `Known` action can update a different token from the word currently shown in the Inspector.
2. Cloze answers remain globally revealed when the user selects the next token with the mouse.
3. The Dictionary scope selector rerenders but does not filter anything.
4. Filtering the Library changes mock recent-activity labels because recency is assigned after filtering.
5. Due-date sorting uses alphabetical labels rather than chronological priority.

Several of these controls will be redesigned by the product changes above, but their replacement interactions must still avoid the same state-management errors.

## Recommended Next-Draft Scope

1. Fix the incorrect knowledge/cloze state behaviour.
2. Remove duplicated language buttons.
3. Replace `Known` and numeric knowledge with four learning stages.
4. Make Dictionary language-first and word-first.
5. Add the new-language import path.
6. Build the split import/review workspace.
7. Replace embedded toy data with representative fixture data.
8. Make all visible scope, filter, and sorting controls truthful and functional.

Defer the final spaced-repetition algorithm, backend persistence, teacher permissions, competitive progress, and final scoring formulas until the core workflows and terminology are agreed.

## Decisions Still Open for Discussion

- Whether the four proposed learning-stage labels are correct.
- Whether Reader should switch by language, by text, or primarily by Library navigation.
- The exact layout of the side-by-side import correction and reader preview.
- Which sample files should form the first representative fixture set.
- Which Dictionary fields learners, teachers, and administrators may edit.
