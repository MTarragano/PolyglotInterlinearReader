# Roadmap

The roadmap is phased to keep the project buildable while preserving the final architecture.

## Phase 1: Corpus Reader

Goal: Read uploaded texts with language-independent interlinear rendering.

Scope:

- Project scaffolding
- FastAPI backend
- Next.js frontend
- PostgreSQL setup
- Migrations
- Document upload
- Paste, type, and batch text input
- Spreadsheet and document import previews
- Import field mapping and validation
- Language selection
- Parser interface
- Initial parser stubs for Turkish, Arabic, and Hebrew
- Document, sentence, token, and morpheme storage
- Annotation layer storage for dynamic reader rows
- Interlinear reader using CSS Grid or Flexbox
- Clickable token, morpheme, and grammar feature links
- Clickable morphological type and grammar pattern links when parser data is available
- Basic entity pages
- Basic export of parsed documents and annotation layers

## Phase 2: Dictionary

Goal: Turn parsed corpus data into explorable linguistic entity pages.

Scope:

- Lemma pages
- Root pages
- Morpheme pages
- Morphological type pages
- Grammar feature pages
- Grammar pattern pages
- Construction pages
- Corpus examples
- Pattern-matched corpus examples
- Frequency counts
- Related entities
- User notes
- PostgreSQL Full Text Search

## Phase 3: Audio and Synchronized Speaking

Goal: Add listening, pronunciation, recording, and easy speak-along workflows.

Scope:

- Piper TTS integration
- Word audio
- Sentence audio
- Document audio
- Dialogue and lesson audio
- Audio asset storage
- Audio/text alignment for sentence and token highlighting
- User recordings
- Whisper transcription
- Audio playback in reader and entity pages
- Synchronized speaking practice in the interlinear reader
- Repeat sentence, passage, dialogue turn, or pattern drill controls

## Phase 4: Learning System

Goal: Track user knowledge, speaking practice, cloze success, and scheduled review.

Scope:

- Known and unknown word states
- Encounter counts
- Reading history
- Speaking practice history
- Review items
- Review events
- Interval, ease factor, and due date storage
- Word clozes
- Morphology clozes
- Grammar clozes
- Cloze hints for original script, transliteration, gloss, translation, and grammar labels
- Practice attempts and success-rate tracking
- Scheduled speaking and cloze practice

## Phase 5: AI Content Generation

Goal: Generate reusable learning material that becomes corpus content.

Scope:

- OpenAI-compatible API integration
- Generated examples
- Generated dialogues
- Generated exercises
- Generated grammar-pattern repetition drills
- Generated speaking-practice lessons
- Study packs
- Generation request history
- Save generated word-focused and pattern-focused texts as corpus documents
- Parse and index generated content
- Link generated content to target lemmas, morphemes, morpheme types, roots, grammar features, grammar patterns, and constructions

## Phase 6: Advanced Linguistics

Goal: Deepen language-specific morphology and grammar exploration without breaking the generic architecture.

Scope:

- Better Turkish morphological parsing
- Arabic roots and patterns
- Hebrew roots and binyanim
- Cross-language grammar feature mapping
- Pattern pages
- Construction pages
- Corpus query tools
- Advanced search filters
- Learner analytics
- Dependency trees
- Alignment
- Parallel texts
- Multiple translations
- Etymology
- Semantic domains

## Future Extension: Sharing and Marketplace

Goal: Let users import, export, share, and eventually sell prepared interlinear text, audio, video, and timed-subtitle lessons.

Scope should begin with free/private package sharing before paid commerce:

- Package manifest schema
- Interlinear lesson import/export
- Audio/video media assets
- Timed subtitle cues with dynamic annotation layers
- Package validation reports
- Source, provenance, and license metadata
- Private sharing or local package import
- Later marketplace listings, purchases, entitlements, moderation, and creator payout records

The full extension plan lives in `docs/marketplace_extension.md`.

## Interactive Build Plan

The feedback-driven web app build sequence lives in `docs/interactive_build_plan.md`.

## Build Discipline

Before each phase:

- Re-read `docs/vision.md`.
- Re-read the relevant technical docs.
- Update docs when architectural decisions change.
- Keep implementation language-independent.
- Add tests for new domain behavior.
