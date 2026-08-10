# Comparison MTnotLWT-PIR July 2026

## Sources reviewed

The comparison is based on the following files from the read-only `MTarragano/MTnotLWT` `dev-april-22` branch:

- [`DIDACTIC_TRANSLITERATION.md`](https://github.com/MTarragano/MTnotLWT/blob/dev-april-22/DIDACTIC_TRANSLITERATION.md)
- [`TRANSLITERATION_PLAN.md`](https://github.com/MTarragano/MTnotLWT/blob/dev-april-22/TRANSLITERATION_PLAN.md)

`TRANSLITERATION_PLAN.md` was used as the matching file for the requested `transliteration.md`.

## Overall conclusion

The central ideas are strongly aligned with Polyglot Interlinear Reader, but Polyglot's intended architecture is broader and safer. `MTnotLWT` should be treated as a useful feature prototype, not copied literally.

| Area | MTnotLWT | Polyglot Interlinear Reader |
|---|---|---|
| Core goal | Morphology-aware learner transliteration with emphasized roots and separated affixes | The same idea, generalized into configurable annotation and presentation layers |
| Canonical transliteration | AI or character maps produce a phonetic Latin string | Canonical transliteration is stored LTR, independently from visual presentation |
| Root emphasis | `root_indices` identify characters to capitalize | The current prototype heuristically finds Hebrew radicals inside the Latin transliteration |
| RTL display | Reverses segment order and characters within segments | Reverses Latin grapheme clusters at display time; source Hebrew or Arabic is never reversed |
| Morphology | Stored as choices inside `morphology_json` | Intended as token and morpheme entities with offsets, provenance, confidence, and relations |
| Character maps | Database table mapping individual characters | Named and versioned schemes, grapheme maps, contextual rules, exceptions, and per-language profiles |
| AI role | One Gemini request produces transliteration, morphology, roots, and indices | Parser, dictionary, imported, AI, and human-reviewed values remain separately attributed |
| Scope | PHP implementation centered on the `new_terms` dictionary | Language-independent reader architecture covering documents, tokens, annotations, audio, parsers, and learning |
| Maturity | Substantial working PHP implementation | Architecture plus an active browser prototype; backend persistence is not implemented yet |

## Key findings

- Both projects agree that canonical transliteration and didactic presentation must be different concepts. Polyglot states this particularly clearly: normal LTR transliteration is retained while reverse-mirrored output is a reversible display transform. See [`reader_ui_audio.md`](reader_ui_audio.md) and the [Hebrew trial notes](../examples/interlinear-media-demo/hebrew-l064/README.md).

- The present Polyglot prototype already implements much of the MTnotLWT behavior: Hebrew root capitalization, thin-space boundaries, RTL reversal, and separate source-script and Latin roots. See [`apps/web/app.js`](../apps/web/app.js).

- Polyglot's grapheme-aware reversal is preferable to MTnotLWT's stated character reversal. It keeps combining diacritics attached to their base letter. However, it remains explicitly experimental and needs Hebrew and Arabic testing.

- `MTnotLWT`'s explicit `root_indices` are more dependable than Polyglot's current heuristic root matching. The heuristic can mistake vowels or affixes for radicals and struggles with weak or non-surfacing root letters.

- A comma-separated `root_indices` string should not be carried over directly. Polyglot should model radical alignment as grapheme-aware spans or structured mappings, including non-surfacing radicals and confidence or provenance.

- Polyglot's eventual model is more capable than `new_language_char_maps`. Transliteration is not always character substitution: contextual sounds, digraphs, vowels, assimilation, and tradition-specific conventions require rules and exceptions. This broader model is already specified in [`reader_ui_audio.md`](reader_ui_audio.md).

- Polyglot currently violates its own target architecture by hardcoding Hebrew transliteration mappings in browser code. The design requires language-specific behavior to live behind language-service interfaces, not in generic UI code; see [`architecture.md`](architecture.md).

## Recommended unified interpretation

1. Store normal LTR canonical transliteration with its scheme, version, source, and confidence.
2. Store transliteration and source offsets per morpheme.
3. Store structured radical/source/transliteration alignments, not CSV indices.
4. Offer normal LTR, segment-aligned RTL, and grapheme-reversed didactic display modes.
5. Make capitalization, separators, weight, and colour presentation preferences.
6. Preserve AI output as provisional until parser, dictionary, or human review confirms it.
7. Move the current hardcoded Hebrew logic out of `app.js` when the real language-service layer is built.

## Current implementation note

This comparison reflects the Polyglot Interlinear Reader working tree and documentation as inspected in 2026, including the active browser prototype and staged Hebrew ingestion examples. It does not imply that the planned backend, persistence model, or language-service layer is already implemented.
