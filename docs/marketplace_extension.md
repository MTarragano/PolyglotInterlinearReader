# Sharing and Marketplace Extension

This extension adds shareable and commercially tradable learning packages without creating a separate content model. A purchased, imported, or shared lesson should become normal corpus content after validation, parsing, indexing, and rights checks.

## Product Idea

Users should be able to create, import, share, sell, buy, review, and study prepared language-learning materials:

- Interlinear text lessons
- Audio-led lessons
- Video-led lessons
- Timed subtitle packages
- Multi-line subtitle packages with original text, translation, transliteration, and word-for-word glosses
- Study packs targeting lemmas, roots, morphemes, grammar features, grammar patterns, or constructions

The extension has two modes:

- Sharing: free or private distribution between users, classrooms, tutors, schools, or study groups.
- Marketplace: paid distribution with creator profiles, listings, licenses, purchases, refunds, revenue accounting, and moderation.

The same package format should support both modes.

## Core Principle

Marketplace content is not a different kind of lesson inside the reader. It is a distributable wrapper around corpus documents, media assets, annotation layers, entity links, and learning metadata.

```text
Package import
        |
Manifest validation
        |
Rights and license checks
        |
Virus/media/transcode checks
        |
Corpus document creation
        |
Parser and alignment pipeline
        |
Search index
        |
Reader, audio/video player, reviews, entity pages
```

## Package Types

### Interlinear Text Lesson

Prepared text with optional sentence translations, token translations, transliteration, morpheme glosses, notes, entity links, exercises, and audio.

Useful for:

- Graded readers
- Grammar-focused examples
- Poetry, scripture, literature, news excerpts, or dialogues where rights allow
- Tutor-created lessons

### Timed Audio Subtitle Lesson

Audio plus timed subtitle cues. Each cue may contain multiple annotation layers:

- Original language transcript
- Translation
- Transliteration
- Token-level segmentation
- Morpheme glosses
- Notes

Useful for:

- Listening comprehension
- Dictation
- Shadowing
- Sentence replay
- Audio-aligned cloze cards

### Timed Video Subtitle Lesson

Video plus the same timed subtitle model. Video may be hosted externally or stored as a managed asset depending on rights, storage cost, and moderation policy.

Useful for:

- Film or lecture excerpts where rights allow
- Creator-recorded lessons
- Signed or visual language material
- Context-heavy listening practice

### Study Pack

A curated set of documents, cues, exercises, clozes, audio snippets, and review targets centered on one or more linguistic entities.

Useful for:

- A Turkish ablative suffix pack
- Arabic Form II verbs
- Hebrew binyan practice
- A graded vocabulary list
- A course unit

## Package Format

Use a zip-based package with a JSON manifest. The package should be portable, inspectable, and versioned.

```text
lesson.polyglot.zip
  manifest.json
  documents/
    lesson.md
    lesson.json
  subtitles/
    lesson.webvtt
    lesson.layers.json
  media/
    audio.mp3
    video.mp4
  assets/
    cover.jpg
  exercises/
    clozes.json
  provenance/
    sources.json
    licenses.json
```

The manifest should include:

- Package schema version
- Package type
- Title, subtitle, description, cover image
- Language and optional dialect/script
- Creator identity
- License terms
- Rights metadata
- Price metadata when sold through a marketplace
- Included documents and media assets
- Subtitle tracks and annotation layers
- Entity targets, if the lesson is word-focused or pattern-focused
- Minimum app version or feature requirements
- Integrity hashes for package files

## Timed Subtitle Layer Model

Do not treat subtitles as plain text only. Model timed cues as sentence-like corpus units that can carry dynamic annotation layers.

Suggested cue shape:

```json
{
  "start_ms": 12400,
  "end_ms": 16800,
  "language_code": "tr",
  "layers": [
    {
      "type": "surface",
      "text": "Evlerimizden ayrildik."
    },
    {
      "type": "translation",
      "text": "We left our houses."
    },
    {
      "type": "gloss",
      "text": "house-PL-1PL.POSS-ABL leave-PST-1PL"
    },
    {
      "type": "transliteration",
      "text": "Evlerimizden ayrildik."
    }
  ],
  "tokens": []
}
```

On import, each cue should be linked to a document-level media timeline. Cues can become sentences or media-cue records linked to sentences. The reader and media player should use the same annotation layer vocabulary already defined for interlinear reading.

## Database Additions

Add sharing and marketplace records around the existing corpus model.

Content packaging:

- `content_packages`
- `content_package_versions`
- `content_package_assets`
- `content_package_documents`
- `content_package_entity_targets`
- `content_package_imports`

Media timing:

- `media_assets`
- `media_tracks`
- `media_cues`
- `media_cue_annotations`
- `media_cue_sentences`

Creators and distribution:

- `creator_profiles`
- `creator_payout_accounts`
- `marketplace_listings`
- `marketplace_listing_versions`
- `marketplace_purchases`
- `marketplace_entitlements`
- `marketplace_reviews`
- `marketplace_collections`

Licensing and provenance:

- `content_licenses`
- `content_provenance_sources`
- `rights_assertions`
- `takedown_requests`

Moderation and quality:

- `content_reports`
- `moderation_reviews`
- `package_validation_results`
- `quality_scores`

Important relationships:

- A package version may contain many corpus documents.
- A package version may contain many media assets.
- A media cue may link to one sentence.
- A sentence may link back to the package version that supplied it.
- A listing points to an approved package version, not a mutable package draft.
- A purchase grants an entitlement to one user or organization.

## Existing Table Extensions

Extend `documents` with optional fields:

- `package_version_id`
- `license_id`
- `rights_status`
- `visibility`
- `canonical_source_url`
- `creator_user_id`

Extend `sentences` with optional fields:

- `media_cue_id`
- `start_ms`
- `end_ms`
- `alignment_confidence`

Extend `audio_files` or replace it with a more general `media_assets` abstraction that supports audio and video while preserving word, sentence, and document audio relations.

## API Additions

Package authoring:

- `POST /api/v1/packages`
- `GET /api/v1/packages/{package_id}`
- `POST /api/v1/packages/{package_id}/versions`
- `POST /api/v1/package-versions/{version_id}/validate`
- `POST /api/v1/package-versions/{version_id}/publish`
- `POST /api/v1/package-versions/{version_id}/import`

Marketplace:

- `GET /api/v1/marketplace/listings`
- `GET /api/v1/marketplace/listings/{listing_id}`
- `POST /api/v1/marketplace/listings`
- `POST /api/v1/marketplace/listings/{listing_id}/purchase`
- `GET /api/v1/me/entitlements`
- `POST /api/v1/marketplace/listings/{listing_id}/reviews`

Media reader:

- `GET /api/v1/documents/{document_id}/media-reader`
- `GET /api/v1/media-assets/{asset_id}`
- `GET /api/v1/media-assets/{asset_id}/cues`

Creator analytics:

- `GET /api/v1/creator/sales`
- `GET /api/v1/creator/packages`
- `GET /api/v1/creator/listings`
- `GET /api/v1/creator/payouts`

All paid operations should be abstracted behind a billing provider interface. The domain model should store purchases, entitlements, refunds, and payout state without assuming a specific vendor in core code.

## Import Pipeline

Package import should be asynchronous.

```text
Upload package
        |
Validate manifest schema
        |
Verify file hashes
        |
Inspect media and estimate duration
        |
Validate declared rights and license fields
        |
Create package draft/version
        |
Create documents, media assets, cues, and annotation layers
        |
Run parser where token data is missing or stale
        |
Align parser tokens with supplied subtitles/glosses
        |
Index text, glosses, translations, and metadata
        |
Generate review targets where requested
        |
Return import report
```

The import report should preserve warnings instead of silently discarding useful content. Examples:

- Subtitle cue has translation but no original text.
- Supplied token segmentation disagrees with parser output.
- Gloss layer exists but no morpheme boundaries were supplied.
- Media duration and final subtitle timestamp differ.
- Package targets an unsupported parser feature.

## Authoring Workflow

Creators need a dedicated authoring surface, not only raw upload.

Minimum authoring tools:

- Create a lesson from uploaded text
- Add or edit sentence translations
- Add or edit transliteration layers
- Add or edit word-for-word glosses
- Attach audio or video
- Import WebVTT, SRT, or JSON subtitles
- Split, merge, and retime cues
- Preview the learner reader exactly as buyers will see it
- Run validation before publishing
- Export a package file

Later authoring tools:

- AI-assisted gloss suggestions
- AI-assisted translation suggestions
- Forced alignment between transcript and audio
- Bulk correction UI for parser/token alignment
- Course/unit builder
- Creator analytics

## Marketplace Workflow

Creator:

1. Create or import package.
2. Validate package.
3. Preview learner experience.
4. Submit package version for moderation.
5. Create listing with price, license, languages, levels, and tags.
6. Publish listing after approval.
7. Track sales, reviews, refunds, and update versions.

Learner:

1. Browse or search listings.
2. Inspect sample cues, sample interlinear view, creator, license, level, and reviews.
3. Purchase or import free package.
4. Receive entitlement.
5. Import package into personal corpus.
6. Study through the normal reader, media player, entity pages, clozes, and review system.

## Search and Discovery

Marketplace search should support:

- Source language
- Interface/translation language
- Level
- Dialect or script
- Lesson type
- Media type
- Target grammar feature or pattern
- Target lemma/root/morpheme
- Duration
- Creator
- License type
- Price/free
- Rating
- Text/audio/video availability

Listings should expose sample content, but samples must honor package license and creator settings.

## Trust, Rights, and Safety

This feature touches copyright, payments, and user-generated content. Treat rights metadata as first-class product data.

Requirements:

- Every listing must declare source, license, and creator rights.
- Public-domain and permissively licensed source texts should include provenance.
- Derivative works should record the underlying source and transformation.
- Paid listings should require creator identity and payout onboarding.
- Takedown flow must disable listings and entitlements according to policy while preserving audit records.
- Moderation should review rights claims, harmful content reports, malware scans, and deceptive listings.
- Buyer access after takedown, refund handling, and creator penalties require explicit product/legal policy before launch.

Avoid launching paid resale of third-party media until rights review and moderation workflows exist.

## Quality Signals

Imported and marketplace packages should surface quality metadata:

- Parser coverage
- Token alignment coverage
- Cue timing quality
- Translation completeness
- Gloss completeness
- Audio/video duration
- Review target count
- Validation warnings
- Human-reviewed status
- Buyer ratings

These signals protect learners from polished-looking but weak material.

## Integration With Learning System

Package content should participate in:

- Known/unknown word tracking
- Encounter counts
- Reading events
- Audio replay events
- Video replay events
- Cloze creation
- Review scheduling
- Entity examples
- Search results

Package authors may include suggested clozes and exercises, but user-specific review state remains private to the learner.

## Minimal Viable Version

Start with free sharing before paid commerce.

MVP scope:

- Package manifest schema
- Zip import/export
- Interlinear text packages
- Audio plus timed subtitle packages
- Dynamic subtitle annotation layers
- Package validation report
- Private share links or local package import
- Imported package content becomes normal corpus content
- Basic creator/source/license metadata

Do not include in MVP:

- Payments
- Payouts
- Public marketplace rankings
- Creator analytics
- Video hosting at scale
- Automated takedown workflows

## Commercial Marketplace Phase

Add after the MVP import/export system is stable:

- Creator profiles
- Public listings
- Paid purchases
- Entitlements
- Refund state
- Ratings and reviews
- Moderation queue
- Rights/takedown workflow
- Payout reporting
- Marketplace search and collections

The commercial layer should depend on package versions and entitlements. It should not fork the reader, parser, media, review, or corpus models.

## Open Questions

- Should video be stored by the platform, externally hosted, or both?
- Should packages be encrypted for paid distribution, or should access rely on authenticated import and entitlements?
- Can a user resell a modified package, or only publish original/authorized packages?
- How should schools and tutors share private paid materials with cohorts?
- Which licenses should be supported in the UI as structured choices?
- Should marketplace purchases import a private copy into the learner corpus or reference a shared immutable package version?
- How much of package validation must be human-reviewed before public listing?

## Recommended Roadmap Placement

Add this extension after Phase 3 audio begins and before a full paid marketplace:

1. Phase 3A: Generalize media assets for audio and video.
2. Phase 3B: Add timed cue and subtitle-layer support.
3. Phase 5A: Add package import/export for generated and authored lessons.
4. Phase 5B: Add private sharing and free package discovery.
5. Phase 7: Add commercial marketplace, entitlements, moderation, and creator economy tools.

This order lets the project learn from real lesson packages before adding payment, payout, and marketplace trust complexity.
