# UI

The frontend must be language-independent and data-driven. It receives parsed linguistic data and renders it without hardcoded language rules.

## Interlinear Reader

The reader must use CSS Grid or Flexbox.

Never use traditional HTML tables.

Rows are dynamic and may include:

- Translation
- Original
- Words
- Transliteration
- Morphological segmentation
- Gloss
- Lemma
- Root
- Part of speech
- Grammar features

Rows must wrap naturally. The reader should avoid horizontal scrolling for normal content.

The reader should maximize reading area and minimize persistent chrome. Audio controls, row selectors, settings, and entity inspectors should be compact, collapsible, or docked without forcing the text into a narrow column.

The detailed reader and audio layout plan lives in `docs/reader_ui_audio.md`.

Every token must be clickable.

Every morpheme must be clickable.

Every displayed morpheme type, such as prefix, suffix, clitic, stem, root-pattern template, or inflectional ending, must be clickable when parser data identifies it.

Every grammar feature must be clickable.

## Reader Behavior

The reader should support:

- Document view
- Sentence focus view
- Token inspection
- Morpheme inspection
- Morphological type inspection
- Grammar feature inspection
- Grammar pattern inspection
- Construction inspection
- Audio playback
- Audio-synchronized speaking practice
- Timed text highlighting during playback and recording
- Known and unknown state marking
- Note creation
- Cloze creation
- Per-language reader settings for font sizes, row visibility, row gaps, token gaps, colors, script direction, and preferred annotation rows

Clicks should navigate to entity pages or open lightweight inspection panels depending on context, but every displayed linguistic entity must have a canonical dedicated page. This includes surface words, lemmas, roots, morphemes, morphological types, grammar features, grammar patterns, constructions, sentences, and documents.

## Entity Pages

Dedicated pages are required for:

- Lemma
- Root
- Morpheme
- Morphological Type
- Grammar Feature
- Grammar Pattern
- Construction
- Sentence
- Document

## Lemma Page

Must show:

- Meaning
- Dictionary senses grouped by source and part of speech
- Frequency
- Audio
- Examples from corpus
- Related words
- User notes
- Review history
- Source attribution and confidence when definitions come from imported dictionaries or AI

## Morpheme Page

Must show:

- Description
- Grammar explanation
- Corpus examples
- Related morphemes
- Generated examples

The detailed dictionary and lexical knowledge plan lives in `docs/dictionaries.md`.

## Morphological Type Page

Examples include prefix, suffix, clitic, stem, reduplication, root-pattern template, derivational affix, and inflectional ending.

Must show:

- Description
- Usage rules
- Corpus examples of that type
- Related morphemes and grammar features
- Generated examples
- Dialogues using multiple examples of that type

## Grammar Feature Page

Examples include plural, ablative, past tense, and passive participle.

Must show:

- Description
- Usage rules
- Corpus examples
- Generated examples
- Exercises
- Dialogues

## Grammar Pattern Page

Examples include Turkish possessive-case sequences, Arabic derived verb forms, Hebrew binyanim, participial constructions, and language-specific templates emitted by parser services.

Must show:

- Description
- Usage rules
- Paradigm or pattern shape when available
- Corpus examples matching the pattern
- Related morphemes, roots, lemmas, and grammar features
- Generated examples
- Generated dialogues
- Exercises

## Generated Content Actions

Users can request:

- Generate examples
- Generate dialogues
- Generate exercises
- Create study pack

Generation actions must accept a target entity such as a lemma, morpheme, morphological type, root, grammar feature, grammar pattern, or construction.

Generated content must be saveable as a new word-focused or pattern-focused text. Saved generated content must be parsed, indexed, and displayed as normal corpus content in the interlinear reader.

## Speaking Practice

Speaking practice is a primary workflow, not a secondary audio feature. The learner should be able to practise with real dialogues, interesting texts, stories, articles, educational lessons, and grammar-pattern repetition drills.

Practice views must support:

- Audio-synchronized highlighting for sentences, tokens, or smaller aligned spans when available
- Speaking along with playback
- Recording the learner's attempt
- Repeating the same sentence, passage, dialogue turn, or pattern drill
- Original script, transliteration, translation, gloss, and grammar hint visibility controls
- Cloze modes that hide selected words, morphemes, transliteration, glosses, or grammar labels
- Success-rate display for cloze attempts and speaking-practice attempts
- Scheduled review prompts for texts, sentences, words, morphemes, and grammar patterns

The default experience should make speaking feel simple: play, speak along, repeat, reveal hints when needed, and continue.

## UI Quality Rules

- No hardcoded language logic in generic components.
- No traditional tables for interlinear rendering.
- Avoid horizontal scrolling in the reader.
- Use accessible buttons and links for clickable linguistic entities.
- Keep layouts responsive from mobile to desktop.
- Design dense learning screens for repeated use, not marketing-style pages.
