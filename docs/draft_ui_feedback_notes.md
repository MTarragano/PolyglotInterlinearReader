# Draft UI Feedback Notes

These notes capture product feedback on the current draft web UI. They should guide the next iteration before the prototype is hardened into production frontend and backend contracts.

## Preservation Note

The current draft UI version was saved before these notes were added. It includes the Library, Import, Reader, Dictionary, and Progress draft surfaces.

## Library

Current draft:

- Text cards for the existing sample languages.
- Progress-style metrics.
- Open-reader actions.

Feedback and next improvements:

- Add a tabular row display for larger libraries with many texts, lessons, dialogues, and study packs.
- Support sorting and grouping by language.
- Add sorting by progress, recent activity, due scheduling, imported date, and lesson/text type.
- Keep card view useful for small libraries, but provide a dense table/list mode for frequent users.
- Language filtering should focus on the user's chosen learning languages and languages already present in imported texts, not a global country/language catalogue.

## Import

Current draft:

- Preview-confirm mock workflow.
- Metadata fields.
- Sentence candidate extraction.

Feedback and next improvements:

- Ask for optional audio file during import.
- Ask for original source URL.
- Ask for record date or recording date when the text/audio came from a real source.
- Preserve source/provenance metadata through import, parsing, export, and re-import.
- Keep the preview-confirm workflow, but expand validation to include media, URL, date, language, and source fields.

## Reader

Current draft:

- Existing interlinear reader preserved behind the Reader tab.
- Row labels and controls are visible.
- Inspector panel supports selected tokens and linguistic entities.
- Keyboard navigation supports tab and arrow movement through words.

Feedback and next improvements:

- Make interlinear row labels, control labels, row colors, row order, and inspector terminology consistent so users can build a stable mental model.
- Add hover descriptions or lightweight tooltips for row labels, controls, and inspector fields.
- Reconsider language controls for learners studying more than four languages. Visible language tabs consume too much space at scale.
- Replace always-visible language tabs with a compact selector or list when many languages exist.
- Language selector should show only chosen learning languages and languages found in imported texts.
- Word list should offer an interlinear version similar to the reader, with rows, cloze behavior, and progress data.
- Word list should support cloze practice directly.
- Word list should show richer progress information, such as score, attempts, last seen, due date, and encounter count.
- Up and down arrows should allow users to mark positive or negative knowledge of the current word.
- Up and down knowledge scoring should also work during cloze modes.
- Cloze answers should unhide after a scoring action so users can see whether they were right.
- Users should be able to adjust score down again after revealing an answer.

### Interlinear Row-Label Columns

Product requirement recorded 2026-08-04. Implemented in the local draft on
2026-08-04 for user evaluation; responsive wrapping and final presentation
remain subject to feedback.

- Replace the toolbar's long row-checkbox strip with a compact **Row Labels**
  control or heading.
- Give every sentence or other Reader unit a narrow row-label column alongside
  its token stacks.
- Put this label column on the right of every RTL sentence/unit block and on
  the left of every LTR sentence/unit block.
- Include the applicable row name and checkbox in this first visual column,
  including Original, Transliteration, Morphs, Grammar gloss, Word meanings,
  Lemma, Root, POS, and Features.
- Treat Translation as a sentence-level row rather than pretending it is a
  token annotation.
- Align each row label, checkbox, and corresponding token annotation on shared
  row tracks with the same height and baseline across the sentence.
- A row checkbox changes visibility consistently for that sentence/document;
  it must not hide the row for only one token.
- Account for wrapped token groups and missing annotation values without
  allowing later rows to drift out of alignment.
- Never use horizontal scrolling as the normal presentation for long Reader
  sentences. Token stacks must wrap onto further visual lines while retaining
  aligned annotation rows; RTL row labels remain at the right of the sentence
  block.

## Feedback-to-Codex Handoff

Product requirement recorded 2026-08-04; implement this as a separate product
workflow rather than coupling it to the Hebrew import/media trial.

- Let the user send one locally saved feedback note, a selected set, or all
  unsent notes to a Codex prompt.
- Include enough local context to identify the view and targeted element, while
  making clear exactly what information will be passed to Codex.
- Codex must first restate its interpretation and discuss relevant suggestions
  or likely code changes.
- Require confirmation of mutual understanding before Codex edits code in
  response to the feedback.
- Keep collecting/saving feedback distinct from implementing feedback: sending
  a note must not silently trigger code changes.
- Preserve feedback status and its relationship to later Codex work so the UI
  can distinguish recorded, sent, understood/confirmed, implemented, and
  verified feedback.

## Dictionary

Current draft:

- Entity list/detail view for lemma, root, and grammar feature pages.

Feedback and next improvements:

- Add a table-oriented dictionary view for recent words, text-specific words, target lexicon items, and whole-dictionary browsing.
- Support filters by root, morphology, morpheme type, grammar feature, POS, source text, language, known status, review status, and target-list membership.
- Include views for recent words from the current text and learner target lexicon.
- Allow editing of dictionary/entity information where appropriate.
- Define editing permissions and provenance later: which users can edit which fields, which edits are personal, and which edits affect shared/teacher-controlled data.

## Progress

Current draft:

- Mock reading, known-word, cloze, and speaking-practice score cards.

Feedback and next improvements:

- Scores should be per language and per user.
- Scores may also need per-text and per-lesson breakdowns.
- Progress metrics should consider target lexicons built from frequency data, user-supplied target lists, teacher-supplied target lists, and vocabulary extracted from imported texts.
- Progress should connect directly to user scheduling.
- Scores should work as incentives for learners.
- Progress summaries should support teacher monitoring.
- Future optional mode: allow learners to compare or compete on progress with other users.

## User Scheduling

Add a scheduling surface or integrate scheduling into Progress and Library.

Scheduling should support suggestions from:

- Teacher.
- Maven or expert curator.
- Default system recommendations.
- Text libraries.
- Target lexicons.
- Grammar patterns.
- Spaced repetition.
- Active recall and retrieval practice.
- Review scheduling.
- Vocabulary distillation.

Scheduling should help answer:

- What should the user read next?
- What should the user review today?
- Which vocabulary is most useful now?
- Which grammar patterns need more examples?
- Which imported texts best match the user's current target lexicon and progress?

## Design Direction

The next draft should keep the current UI interactive but make the information architecture more scalable:

- Cards for small sets and overview.
- Tables/lists for large libraries and dictionary browsing.
- Compact selectors instead of long visible tab rows when user data grows.
- Consistent row labels, colors, and inspector vocabulary.
- Tooltips for concepts that need explanation.
- Progress and scheduling connected as one learning loop.
