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
