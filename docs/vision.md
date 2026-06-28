# Vision

Polyglot Interlinear Reader is a multilingual corpus reader and language-learning system built around one core idea:

Every linguistic object displayed to the learner should be clickable, explorable, searchable, reviewable, and reusable.

The product is not only a reader. It is a language-independent learning environment combining an interlinear corpus reader, morphology explorer, dictionary, audio-synchronized speaking practice platform, AI content generator, spaced repetition system, and personal knowledge tracker.

The main learning promise is easy, direct language acquisition by simply speaking along with real dialogues, interesting texts, stories, articles, educational lessons, and grammar-pattern repetition drills while seeing clear interlinear explanations.

## Product Goals

- Let users upload texts in a chosen language.
- Parse texts into documents, sentences, tokens, and morphemes.
- Display parsed texts as dynamic interlinear reading views.
- Support audio-synchronized speaking practice over real or generated texts.
- Let learners repeat dialogues, lessons, stories, articles, and grammar-pattern drills with synchronized original script, transliteration, translation, glosses, and grammar hints.
- Make tokens, morphemes, morpheme types, lemmas, roots, grammar features, grammar patterns, constructions, sentences, and documents first-class entities.
- Track user knowledge, reading and speaking history, review history, encounter counts, cloze attempts, success rates, and notes.
- Generate examples, dialogues, exercises, and cloze material with an OpenAI-compatible API.
- Save generated content as normal corpus content.
- Parse, index, search, play, and review generated content exactly like uploaded content.
- Support word, sentence, document, and user-recorded audio.

## Primary Languages

Phase 1 languages:

- Turkish
- Arabic
- Hebrew

Phase 2 languages:

- English
- French
- German
- Spanish
- Russian

The architecture must stay language-independent. Language-specific behavior belongs in parser, morphology, transliteration, audio, and language service modules, never in generic UI components.

## Core Learning Loop

The ideal learner journey is cyclical:

1. Read or listen to a dialogue, text, story, article, lesson, or grammar drill.
2. Click an unknown word, morpheme, morphological type, root, grammar feature, pattern, or construction.
3. Explore explanations, usage rules, and corpus examples for that entity.
4. Generate additional examples, dialogues, or exercises when needed.
5. Save generated word or pattern material into the corpus.
6. Practise synchronized speaking with audio while viewing interlinear explanation.
7. Repeat with cloze hints for original script, transliteration, translation, glosses, or grammar labels.
8. Track scheduled practice and progressive success rates.
9. Return to reading and speaking with improved comprehension.

The system should allow a learner to start from a word, morpheme, morphological type, grammar feature, grammar pattern, construction, sentence, generated dialogue, or review card and move naturally through the same underlying linguistic graph.

## Non-Negotiables

- Use a real codebase, not a no-code builder.
- Use Next.js, React, TypeScript, FastAPI, PostgreSQL, SQLAlchemy, Celery, local filesystem storage, PostgreSQL Full Text Search, Piper, Whisper, and an OpenAI-compatible API.
- Use UUID primary keys.
- Use migrations.
- Use strong typing.
- Use clean architecture and dependency injection.
- Add unit and integration tests as implementation begins.
- Do not hardcode language logic in the UI.
- Do not use traditional HTML tables for the interlinear reader.
