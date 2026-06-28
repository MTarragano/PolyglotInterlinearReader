# Architecture

The system is a full-stack web application with a typed frontend, Python API backend, PostgreSQL database, background workers, local filesystem storage, and language service integrations.

## Stack

Frontend:

- Next.js
- React
- TypeScript

Backend:

- Python
- FastAPI
- SQLAlchemy
- Alembic migrations

Database:

- PostgreSQL
- UUID primary keys
- PostgreSQL Full Text Search

Background workers:

- Celery
- Redis or another Celery-compatible broker
- RQ is acceptable as a fallback, but Celery is the preferred default

Storage:

- Local filesystem for uploads, generated audio, user recordings, and derived artifacts
- S3-compatible storage may be added later behind the same storage interface

AI:

- OpenAI-compatible API for examples, dialogues, exercises, explanations, and study packs

Audio:

- Piper for TTS
- Whisper for speech recognition

Morphology services:

- Universal foundation: Stanza and Universal Dependencies
- Universal fallback: UDPipe
- English, French, German, Dutch, Spanish, Greek: Stanza, with spaCy usable where helpful
- Russian: pymorphy3 plus Stanza
- Polish: Morfeusz 2 plus Stanza
- Latin, Ancient Greek, Sanskrit: CLTK
- Turkish: Zemberek
- Arabic: CAMeL Tools
- Hebrew: YAP
- Persian/Farsi: Hazm plus Stanza
- Chinese: pkuseg or Jieba for segmentation, then Stanza where useful
- Ladino: Spanish models plus a custom Ladino lexicon; Hebrew-script Ladino needs transliteration first
- Fallback and future languages: Stanza or UDPipe where suitable

## Application Boundaries

The application should be organized around language-independent domains:

- Corpus
- Parsing
- Linguistic entities
- Search
- Audio
- Audio alignment
- Speaking practice
- AI generation
- User knowledge
- Reviews
- Clozes

Language-specific implementations must sit behind interfaces. The generic application should call a parser registry or language service abstraction rather than branching on Turkish, Arabic, Hebrew, or any future language in UI or application code.

## Recommended Repository Shape

```text
apps/
  web/
    src/
services/
  api/
    app/
      api/
      core/
      db/
      domains/
      parsers/
      workers/
      tests/
docs/
```

This structure may evolve, but the separation of frontend, backend, docs, and language services should remain clear.

## Backend Layers

- API routers expose versioned REST endpoints.
- Application services coordinate use cases.
- Domain models express corpus, parser, entity, review, and audio concepts.
- Repositories isolate database access.
- Parser interfaces isolate language-specific parsing.
- Worker tasks handle long-running parsing, indexing, TTS, ASR, and AI generation.

## Background Jobs

Use workers for:

- Document parsing
- Corpus indexing
- Audio generation
- Audio/text alignment
- Speech recognition
- Speaking-practice scoring and transcription
- AI content generation
- AI gloss suggestions
- AI translation suggestions
- AI grammar explanations
- Re-parsing generated content
- Review scheduling maintenance
- Practice scheduling maintenance

API requests should enqueue long-running work and return job state where appropriate.

## Language Independence Rule

The UI may receive language metadata and render it, but must not contain hardcoded language-specific morphology, grammar, transliteration, or parser logic. A Turkish suffix, Arabic pattern, Hebrew binyan, or Russian case feature should all arrive as data from the backend.
