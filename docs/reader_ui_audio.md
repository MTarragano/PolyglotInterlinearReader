# Interlinear Reader and Audio UI

This document specifies the interactive reader layout, audio player behavior, row selection, and per-language display settings.

## Design Goal

The reader is a sustained reading workspace. It should maximize target text and interlinear reading area while keeping audio, navigation, settings, and inspection tools close at hand.

Primary design principles:

- Minimize wasted space.
- Avoid wide sidebars by default.
- Avoid traditional HTML tables.
- Avoid horizontal scrolling for normal text.
- Let interlinear token groups wrap naturally across the page.
- Keep the original target-language script visually primary.
- Let users choose which interlinear rows are visible.
- Support different per-language typography needs.
- Keep audio controls compact and always reachable.

## Reader Layout

Default desktop layout:

```text
Top compact toolbar
  document title | language | row preset | settings | search

Scrollable reading area
  sentence block
  sentence block
  sentence block

Bottom compact audio bar
  play | back | forward | speed | loop | current sentence | record
```

The main reading area should take nearly all vertical and horizontal space. Toolbars should be slim and sticky only when useful. Entity details should open as a popover, bottom sheet, or optional side inspector, not as permanent layout that narrows the text by default.

## Sentence Block

Each sentence block should support:

- Optional translation above or below the target text.
- Target-language sentence as the primary line.
- Interlinear token groups below the target words.
- Optional sentence-level controls on hover or focus.
- Audio highlighting for the active sentence.

Sentence blocks should have enough breathing room for reading, but should not look like separate large cards. Use subtle separators or vertical rhythm rather than boxed panels.

## Token Flow Model

Use a flexbox-style flow where each token is an inline block containing stacked annotation rows:

```text
[target word]
[translit]
[morphs]
[gloss]
[lemma]

[next word]
[translit]
[morphs]
[gloss]
[lemma]
```

Conceptual layout:

```css
.sentence-tokens {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.token-stack {
  display: flex;
  flex-direction: column;
}
```

This allows natural line turns between token stacks. The browser may wrap after any token group. Rows stay aligned within a token group without forcing the whole sentence into a rigid table.

## Alignment Rules

The target-language word or script segment is the anchor for its token stack.

Each visible annotation row aligns under that token:

- Surface form
- Transliteration
- Morphological segmentation
- Gloss
- Lemma
- Root
- Part of speech
- Grammar features
- User note marker
- Known or learning state marker

Morpheme-level rows may either appear as:

- Segmented inline text within the token stack.
- Mini flex row under the token where each morpheme is clickable.
- Expanded detail popover when the token is selected.

The default should stay compact. Dense morpheme detail should be revealable without making every sentence tall.

## Row Selection

Users should be able to choose visible rows globally and per language.

Built-in row presets:

- Reading: original, translation, audio highlighting.
- Interlinear: original, transliteration, gloss, translation.
- Morphology: original, morphs, gloss, lemma, root, POS, features.
- Minimal: original only, with click-to-inspect.
- Listening: original, translation optional, large active sentence highlight.
- Cloze: configurable hidden rows or hidden target tokens.

The row selector should be compact, probably a dropdown or popover with checkboxes:

- Translation
- Original
- Transliteration
- Morphological segmentation
- Gloss
- Lemma
- Root
- Part of speech
- Grammar features
- Notes
- Known state

Row selection should update immediately without re-parsing.

## Per-Language Reader Settings

Each language should have its own accessible settings page or panel.

Settings should include:

- Target script font family.
- Target script font size.
- Translation font size.
- Transliteration font size.
- Gloss font size.
- Morphology row font size.
- Lemma/root row font size.
- Grammar feature font size.
- Line height.
- Token gap.
- Row gap inside each token stack.
- Sentence gap.
- Max reading width.
- Text direction: LTR, RTL, or auto.
- Original script color.
- Transliteration color.
- Gloss color.
- Lemma/root color.
- Grammar feature color.
- Active audio highlight color.
- Known word color or underline style.
- Unknown word color or underline style.
- Current cloze color.
- Whether translation appears above or below original.
- Whether punctuation attaches to previous token or stands alone.
- Whether morphemes are always visible or collapsed by default.

Settings should support reset-to-default per language.

## Accessibility Requirements

Reader settings must be reachable without relying on drag gestures or hidden keyboard shortcuts.

Accessibility requirements:

- Keyboard navigation across tokens.
- Focus styles for tokens, morphemes, grammar features, and audio controls.
- Screen-reader labels for clickable linguistic entities.
- Avoid color-only distinctions for known/unknown/current audio state.
- Respect browser zoom.
- Respect reduced-motion settings.
- Provide high-contrast row color presets.

## Audio Player

The audio player should be compact and persistent.

Core controls:

- Play or pause.
- Previous sentence.
- Next sentence.
- Rewind short interval.
- Forward short interval.
- Playback speed.
- Loop sentence.
- Loop passage.
- Record attempt.
- Stop recording.
- Compare recording when available.

Optional controls:

- Auto-pause after sentence.
- Repeat each sentence N times.
- Delay before next sentence.
- Show or hide translation during playback.
- Show or hide transliteration during playback.

The player should not occupy a large media panel unless the user enters a focused listening or speaking-practice mode.

## Audio Synchronization

When alignment data is available:

- Highlight active sentence.
- Highlight active token.
- Optionally highlight active morpheme or timed span.
- Scroll current sentence into view gently when needed.
- Keep manual scrolling respected; do not fight the user.

When alignment data is not available:

- Highlight sentence-level audio if sentence audio is playing.
- Use approximate progress only if clearly marked as approximate.

## Interaction Model

Clicks or taps:

- Token click opens compact token inspector.
- Lemma click opens lemma page or inspector link.
- Root click opens root page or inspector link.
- Morpheme click opens morpheme page or inspector link.
- Grammar feature click opens feature page or inspector link.
- Sentence click or margin control opens sentence actions.

Common quick actions:

- Mark known.
- Mark learning.
- Add note.
- Create cloze.
- Play token or sentence audio.
- Generate examples.
- Open full entity page.

The first click should not unexpectedly navigate away from reading if a lightweight inspector can satisfy the immediate need. Full pages should remain one explicit click away.

## Inspector Behavior

The inspector should be compact and non-disruptive.

Desktop:

- Popover near selected token for quick facts.
- Optional right inspector can be pinned by user.

Mobile:

- Bottom sheet.

Inspector content:

- Surface form.
- Lemma.
- Root.
- POS.
- Features.
- Morphemes.
- Gloss.
- Translation.
- Audio button.
- Known state.
- Note field.
- Links to entity pages.

## Mobile Layout

Mobile should preserve the same token-stack concept, but with simpler controls:

- Top bar collapses to document title and menu.
- Audio bar remains bottom sticky.
- Row selector appears as bottom sheet.
- Settings page uses grouped controls.
- Token inspector opens as bottom sheet.
- Text area stays primary.

Avoid cramming side-by-side panes on mobile.

## Density Controls

Users should be able to choose density:

- Comfortable: larger type, bigger token and sentence gaps.
- Standard: balanced reading view.
- Compact: smaller annotation rows and tighter gaps.
- Ultra compact: original plus selected one or two rows.

Density is a preset over per-language settings, not a replacement for them.

## Data Needed From Backend

Reader data should include:

- Document metadata.
- Language metadata.
- Sentence order.
- Sentence text direction.
- Available row types.
- Token stack data.
- Entity references for every clickable item.
- User knowledge state.
- Audio asset references.
- Audio alignment references.
- Parser confidence and ambiguity metadata.

The frontend should not infer morphology or language-specific behavior from text strings.

## Open Planning Questions

These choices should be settled during early UI prototyping:

- Should translation default above or below original for each language?
- Should RTL languages keep annotation rows LTR for glosses or inherit RTL per row?
- Should morpheme segmentation be visible by default in reading mode?
- Should the audio bar live at top, bottom, or user choice?
- Should clicking a token first select it, or immediately open the inspector?
- Should row settings be global with per-language overrides, or per-language only?

## Phase Plan

Phase 1:

- Flexbox token-stack reader.
- Row visibility selector.
- Compact audio player.
- Sentence-level audio highlighting.
- Per-language font size and row gap settings.

Phase 2:

- Token inspector.
- Morpheme and grammar feature click targets.
- Density presets.
- Per-language color settings.
- RTL-specific tuning.

Phase 3:

- Token-level audio alignment.
- Speaking-practice controls.
- Cloze row visibility modes.
- Pinned inspector.

Phase 4:

- Advanced row presets.
- User-created row presets.
- Exportable/importable reader display profiles.
