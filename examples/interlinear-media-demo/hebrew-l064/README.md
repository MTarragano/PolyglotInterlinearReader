# Hebrew Lesson 64 staged ingestion trial

This directory treats media creation as an export from a Reader document, not
as the primary store of the text or its linguistic annotations.

## Stages

1. `01-extraction.json` preserves source files, checksums, audio metadata, and
   the complete extracted lesson text. Nothing in this file is silently
   corrected.
2. `02-processed-reader-document.json` contains normalized undotted Hebrew,
   translations, token analyses, roots, morphology, glosses, and review flags.
   It is provisional linguistic data, not parser ground truth.
3. `03-library-import.json` is a persistence manifest mapping the processed
   package to the planned PostgreSQL corpus, annotation, provenance, and media
   entities. Its status is `staged`; there is not yet a live backend migration
   into which it can be committed.
4. `04-mp4-export-profile.json` records display choices only. It does not own
   Hebrew strings, roots, translations, or audio alignment facts.
5. The MP4 is deliberately not rendered yet. Timing and linguistic review
   should happen before export.

## Important distinctions

- The pointed source is retained, although the Reader/MP4 preset displays
  undotted Hebrew.
- Canonical Latin transliteration is stored LTR. Reverse-mirrored presentation
  is a reversible display transform.
- A grammatical gloss is not the same field as an ordinary English word
  translation.
- Parser, dictionary, imported LWT, inferred, and human-reviewed values require
  separate provenance and confidence.
- The MP3 is a media attachment. A generated MP4 will be an export artifact
  derived from this document and MP3, not a replacement for original source
  attribution.

