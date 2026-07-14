const samples = {
  french: {
    title: "French baseline: Le petit prince",
    languageName: "French",
    direction: "ltr",
    defaultSettings: {
      targetSize: 27,
      annotationSize: 13,
      tokenGap: 18,
      rowGap: 4,
      originalColor: "#13201b",
      glossColor: "#42526b",
      featureColor: "#315b9d",
    },
    sentences: [
      {
        translation: "The little prince looks at the stars.",
        tokens: [
          t("Le", "lə", "le", "the", "le", "DET", ["Definite", "Masc", "Sing"]),
          t("petit", "pə.ti", "petit", "small", "petit", "ADJ", ["Masc", "Sing"]),
          t("prince", "pʁɛ̃s", "prince", "prince", "prince", "NOUN", ["Masc", "Sing"]),
          t("regarde", "ʁə.ɡaʁd", "regard-e", "look-3SG", "regarder", "VERB", ["Pres", "3SG"]),
          t("les", "le", "le-s", "the-PL", "le", "DET", ["Definite", "Plur"]),
          t("étoiles", "e.twal", "étoile-s", "star-PL", "étoile", "NOUN", ["Fem", "Plur"]),
          t(".", "", ".", ".", ".", "PUNCT", []),
        ],
      },
      {
        translation: "He asks a question to the pilot.",
        tokens: [
          t("Il", "il", "il", "he", "il", "PRON", ["Masc", "Sing"]),
          t("pose", "poz", "pos-e", "ask-3SG", "poser", "VERB", ["Pres", "3SG"]),
          t("une", "yn", "un-e", "a-FEM", "un", "DET", ["Indef", "Fem", "Sing"]),
          t("question", "kɛs.tjɔ̃", "question", "question", "question", "NOUN", ["Fem", "Sing"]),
          t("au", "o", "à+le", "to+the", "à", "ADP+DET", ["Contracted"]),
          t("pilote", "pi.lɔt", "pilote", "pilot", "pilote", "NOUN", ["Sing"]),
          t(".", "", ".", ".", ".", "PUNCT", []),
        ],
      },
      {
        translation: "The rose is beautiful, but she is difficult.",
        tokens: [
          t("La", "la", "la", "the", "le", "DET", ["Definite", "Fem", "Sing"]),
          t("rose", "ʁoz", "rose", "rose", "rose", "NOUN", ["Fem", "Sing"]),
          t("est", "ɛ", "est", "is", "être", "AUX", ["Pres", "3SG"]),
          t("belle", "bɛl", "bell-e", "beautiful-FEM", "beau", "ADJ", ["Fem", "Sing"]),
          t(",", "", ",", ",", ",", "PUNCT", []),
          t("mais", "mɛ", "mais", "but", "mais", "CCONJ", []),
          t("elle", "ɛl", "elle", "she", "elle", "PRON", ["Fem", "Sing"]),
          t("est", "ɛ", "est", "is", "être", "AUX", ["Pres", "3SG"]),
          t("difficile", "di.fi.sil", "difficile", "difficult", "difficile", "ADJ", ["Sing"]),
          t(".", "", ".", ".", ".", "PUNCT", []),
        ],
      },
    ],
  },
  hebrew: {
    title: "Hebrew RTL: short reading sample",
    languageName: "Hebrew",
    direction: "rtl",
    defaultSettings: {
      targetSize: 32,
      annotationSize: 13,
      tokenGap: 20,
      rowGap: 4,
      originalColor: "#162018",
      glossColor: "#4e5f75",
      featureColor: "#7c3aed",
    },
    sentences: [
      {
        translation: "The child reads a new book in the room.",
        tokens: [
          t("הילד", "ha-yeled", "ha-yeled", "the-child", "ילד", "NOUN", ["Masc", "Sing", "Definite"], "y-l-d"),
          t("קורא", "kore", "kor-e", "read-MSG", "קרא", "VERB", ["Participle", "Masc", "Sing"], "q-r-ʾ"),
          t("ספר", "sefer", "sefer", "book", "ספר", "NOUN", ["Masc", "Sing"], "s-p-r"),
          t("חדש", "chadash", "chadash", "new", "חדש", "ADJ", ["Masc", "Sing"], "ḥ-d-sh"),
          t("בחדר", "ba-cheder", "b-a-cheder", "in-the-room", "חדר", "NOUN", ["Masc", "Sing", "Prep=b"], "ḥ-d-r"),
          t(".", "", ".", ".", ".", "PUNCT", []),
        ],
      },
      {
        translation: "She writes a letter to her friend.",
        tokens: [
          t("היא", "hi", "hi", "she", "היא", "PRON", ["Fem", "Sing"]),
          t("כותבת", "kotevet", "kot-ev-et", "write-PTCP-FSG", "כתב", "VERB", ["Participle", "Fem", "Sing"], "k-t-v"),
          t("מכתב", "mikhtav", "mikhtav", "letter", "מכתב", "NOUN", ["Masc", "Sing"], "k-t-v"),
          t("לחברה", "la-chavera", "l-a-chavera", "to-the-friend", "חברה", "NOUN", ["Fem", "Sing", "Prep=l"], "ḥ-v-r"),
          t("שלה", "shela", "shel-a", "of-3FSG", "של", "PRON", ["Poss", "3FSG"]),
          t(".", "", ".", ".", ".", "PUNCT", []),
        ],
      },
    ],
  },
  arabic: {
    title: "Arabic RTL: roots and clitics",
    languageName: "Arabic",
    direction: "rtl",
    defaultSettings: {
      targetSize: 34,
      annotationSize: 13,
      tokenGap: 22,
      rowGap: 4,
      originalColor: "#171d19",
      glossColor: "#455c70",
      featureColor: "#8b3f13",
    },
    sentences: [
      {
        translation: "The teacher writes the lesson on the board.",
        tokens: [
          t("يكتب", "yaktubu", "ya-ktub-u", "3MS-write-IND", "كتب", "VERB", ["Imperf", "3MS", "Ind"], "k-t-b"),
          t("المعلّم", "al-muʿallim", "al-muʿallim", "the-teacher", "معلّم", "NOUN", ["Masc", "Sing", "Definite"], "ʿ-l-m"),
          t("الدرس", "ad-dars", "al-dars", "the-lesson", "درس", "NOUN", ["Masc", "Sing", "Definite"], "d-r-s"),
          t("على", "ʿalā", "ʿalā", "on", "على", "ADP", []),
          t("السبورة", "as-sabbūra", "al-sabbūra", "the-board", "سبورة", "NOUN", ["Fem", "Sing", "Definite"], "s-b-r"),
          t(".", "", ".", ".", ".", "PUNCT", []),
        ],
      },
      {
        translation: "I went from the house to the market.",
        tokens: [
          t("ذهبتُ", "dhahabtu", "dhahab-tu", "go.PAST-1SG", "ذهب", "VERB", ["Past", "1SG"], "dh-h-b"),
          t("من", "min", "min", "from", "من", "ADP", []),
          t("البيت", "al-bayt", "al-bayt", "the-house", "بيت", "NOUN", ["Masc", "Sing", "Definite"], "b-y-t"),
          t("إلى", "ilā", "ilā", "to", "إلى", "ADP", []),
          t("السوق", "as-sūq", "al-sūq", "the-market", "سوق", "NOUN", ["Masc", "Sing", "Definite"], "s-w-q"),
          t(".", "", ".", ".", ".", "PUNCT", []),
        ],
      },
    ],
  },
  turkish: {
    title: "Turkish morphology: dense suffix stacks",
    languageName: "Turkish",
    direction: "ltr",
    defaultSettings: {
      targetSize: 28,
      annotationSize: 12,
      tokenGap: 20,
      rowGap: 3,
      originalColor: "#152019",
      glossColor: "#45596b",
      featureColor: "#8a3ffc",
    },
    sentences: [
      {
        translation: "We came from our houses.",
        tokens: [
          t("Evlerimizden", "evlerimizden", "ev-ler-imiz-den", "house-PL-1PL.POSS-ABL", "ev", "NOUN", ["Number=Plur", "Poss=1Pl", "Case=Abl"], "ev"),
          t("geldik", "geldik", "gel-di-k", "come-PST-1PL", "gelmek", "VERB", ["Tense=Past", "Person=1", "Number=Plur"], "gel"),
          t(".", "", ".", ".", ".", "PUNCT", []),
        ],
      },
      {
        translation: "You will not be able to make them love it.",
        tokens: [
          t("Sevdiremeyeceksiniz", "sevdiremeyeceksiniz", "sev-dir-e-me-yecek-siniz", "love-CAUS-ABIL-NEG-FUT-2PL", "sevmek", "VERB", ["Causative", "Ability", "Polarity=Neg", "Tense=Fut", "Person=2", "Number=Plur"], "sev"),
          t(".", "", ".", ".", ".", "PUNCT", []),
        ],
      },
      {
        translation: "The children are playing in the garden.",
        tokens: [
          t("Çocuklar", "çocuklar", "çocuk-lar", "child-PL", "çocuk", "NOUN", ["Number=Plur"], "çocuk"),
          t("bahçede", "bahçede", "bahçe-de", "garden-LOC", "bahçe", "NOUN", ["Case=Loc"], "bahçe"),
          t("oynuyor", "oynuyor", "oyna-yor", "play-PROG", "oynamak", "VERB", ["Aspect=Prog", "Person=3"], "oyna"),
          t(".", "", ".", ".", ".", "PUNCT", []),
        ],
      },
    ],
  },
};

function t(surface, transliteration, morphs, gloss, lemma, pos, features, root = "") {
  return { surface, transliteration, morphs, gloss, lemma, pos, features, root };
}

const state = {
  view: "library",
  language: "french",
  selected: null,
  current: { sentenceIndex: 0, tokenIndex: 0 },
  activeSentence: 0,
  playing: false,
  loop: false,
  abStart: null,
  abEnd: null,
  progress: 0,
  customSettings: false,
  inspectorOpen: false,
  clozeMode: "off",
  rtlTransliterationMode: "normal",
  clozeRevealed: false,
  wordSort: "knowledge",
  wordListView: "interlinear",
  libraryViewMode: "table",
  librarySort: "language",
  libraryLanguageFilter: "all",
  knowledge: {},
  reviewEvents: [],
  importStage: "source",
  visibleRows: new Set(["transliteration", "morphs", "gloss", "lemma", "pos", "features"]),
};

const learningStages = ["New", "Learning", "Acquainted", "Well known"];
const stageProgress = [0, 34, 67, 100];

const appShell = document.querySelector(".app-shell");
const reader = document.querySelector("#reader");
const workspace = document.querySelector(".workspace");
const documentTitle = document.querySelector("#document-title");
const languageName = document.querySelector("#language-name");
const sentenceCount = document.querySelector("#sentence-count");
const directionLabel = document.querySelector("#direction-label");
const inspectTitle = document.querySelector("#inspect-title");
const inspectDetails = document.querySelector("#inspect-details");
const audioLabel = document.querySelector("#audio-label");
const progressFill = document.querySelector("#progress-fill");
const playToggle = document.querySelector("#play-toggle");
const inspectorPanel = document.querySelector("#inspector-panel");
const inspectorToggle = document.querySelector("#inspector-toggle");
const wordListPanel = document.querySelector("#word-list-panel");
const wordListContent = document.querySelector("#word-list-content");
const speedValue = document.querySelector("#speed-value");
const libraryGrid = document.querySelector("#library-grid");
const importText = document.querySelector("#import-text");
const importPreviewList = document.querySelector("#import-preview-list");
const entityList = document.querySelector("#entity-list");
const entityDetail = document.querySelector("#entity-detail");
const progressGrid = document.querySelector("#progress-grid");
const scheduleList = document.querySelector("#schedule-list");
const knowledgeStageLabel = document.querySelector("#knowledge-stage");
const knowledgeDown = document.querySelector("#knowledge-down");
const knowledgeUp = document.querySelector("#knowledge-up");
const annotationList = document.querySelector("#import-annotation-list");
let timer = null;

const viewTitles = {
  library: "Library draft",
  import: "Import workflow draft",
  reader: "",
  dictionary: "Dictionary draft",
  progress: "Progress draft",
};

function render() {
  const sample = samples[state.language];
  documentTitle.textContent = state.view === "reader" ? sample.title : viewTitles[state.view];
  languageName.textContent = sample.languageName;
  sentenceCount.textContent = `${sample.sentences.length} sentences`;
  directionLabel.textContent = sample.direction.toUpperCase();
  reader.dir = sample.direction;
  reader.className = `reader ${sample.direction === "rtl" ? "rtl" : "ltr"} ${state.rtlTransliterationMode === "reverse" ? "reverse-transliteration" : ""}`;
  workspace.classList.toggle("inspector-collapsed", !state.inspectorOpen);

  if (!state.customSettings) {
    applyLanguageDefaults(sample.defaultSettings);
  }

  const inner = document.createElement("div");
  inner.className = "reader-inner";

  sample.sentences.forEach((sentence, sentenceIndex) => {
    const section = document.createElement("section");
    section.className = `sentence ${sentenceIndex === state.activeSentence ? "is-active" : ""}`;
    section.dataset.sentence = String(sentenceIndex);

    const progress = document.createElement("div");
    progress.className = "sentence-progress";
    progress.textContent = sentenceIndex === state.activeSentence ? "Active sentence" : `Sentence ${sentenceIndex + 1}`;
    section.append(progress);

    const translation = document.createElement("p");
    translation.className = "sentence-translation";
    translation.textContent = sentence.translation;
    section.append(translation);

    const tokenList = document.createElement("div");
    tokenList.className = "sentence-tokens";

    sentence.tokens.forEach((token, tokenIndex) => {
      tokenList.append(renderToken(token, sentenceIndex, tokenIndex));
    });

    section.append(tokenList);
    inner.append(section);
  });

  const endActions = document.createElement("div");
  endActions.className = "reader-end-actions";
  const wordButton = document.createElement("button");
  wordButton.type = "button";
  wordButton.textContent = "Review word list";
  wordButton.addEventListener("click", toggleWordList);
  endActions.append(wordButton);
  inner.append(endActions);

  reader.replaceChildren(inner);
  renderWordList();
  updateAudio();
  updateViewChrome();
}

function renderToken(token, sentenceIndex, tokenIndex) {
  const selected = state.selected?.sentenceIndex === sentenceIndex && state.selected?.tokenIndex === tokenIndex;
  const current = state.current?.sentenceIndex === sentenceIndex && state.current?.tokenIndex === tokenIndex;
  const stack = document.createElement("article");
  stack.className = `token-stack ${selected ? "is-selected" : ""} ${current ? "is-current" : ""}`;
  stack.dataset.sentence = String(sentenceIndex);
  stack.dataset.token = String(tokenIndex);

  stack.append(row("surface", entityButton(clozeValue("surface", token.surface), "token", token, sentenceIndex, tokenIndex)));

  if (state.visibleRows.has("transliteration") && token.transliteration) {
    stack.append(row("transliteration", clozeValue("transliteration", transformTransliteration(token.transliteration))));
  }
  if (state.visibleRows.has("morphs") && token.morphs) {
    const morphText = clozeValue("morphs", transformTransliteration(token.morphs));
    stack.append(row("morphs", state.clozeMode === "off" ? morphemeButtons(morphText, token, sentenceIndex, tokenIndex) : morphText));
  }
  if (state.visibleRows.has("gloss") && token.gloss) {
    stack.append(row("gloss", token.gloss));
  }
  if (state.visibleRows.has("lemma") && token.lemma) {
    stack.append(row("lemma", entityButton(clozeValue("lemma", transformTransliteration(token.lemma)), "lemma", token, sentenceIndex, tokenIndex)));
  }
  if (state.visibleRows.has("root") && token.root) {
    stack.append(row("root", entityButton(clozeValue("root", transformTransliteration(token.root)), "root", token, sentenceIndex, tokenIndex)));
  }
  if (state.visibleRows.has("pos") && token.pos) {
    stack.append(row("pos", entityButton(token.pos, "part of speech", token, sentenceIndex, tokenIndex)));
  }
  if (state.visibleRows.has("features") && token.features.length) {
    const holder = document.createElement("span");
    token.features.forEach((feature) => holder.append(featureButton(feature, token, sentenceIndex, tokenIndex)));
    stack.append(row("features", holder));
  }

  stack.addEventListener("click", () => selectToken(sentenceIndex, tokenIndex, token));
  return stack;
}

function row(className, content) {
  const div = document.createElement("div");
  div.className = `token-row ${className}`;
  if (typeof content === "string") {
    div.textContent = content;
  } else {
    div.append(content);
  }
  return div;
}

function entityButton(label, type, token, sentenceIndex, tokenIndex) {
  const button = document.createElement("button");
  button.className = "clickable";
  button.type = "button";
  button.textContent = label;
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    activateToken(sentenceIndex, tokenIndex);
    inspect(type, label, token);
    render();
  });
  return button;
}

function clozeValue(rowName, value) {
  if (state.clozeMode === "off" || state.clozeRevealed || !answerRevealingRows.has(rowName) || value === "." || value === "," || !value) {
    return value;
  }
  if (state.clozeMode === "first") {
    const [first = "", ...rest] = Array.from(value);
    return `${first}${rest.map((char) => (char === "-" ? "-" : "·")).join("")}`;
  }
  return "_____";
}

const answerRevealingRows = new Set(["surface", "transliteration", "morphs", "lemma", "root"]);

function transformTransliteration(value) {
  if (samples[state.language].direction !== "rtl") return value;
  if (state.rtlTransliterationMode === "reverse") {
    return reverseText(value);
  }
  if (state.rtlTransliterationMode === "morpheme") {
    return value
      .split("-")
      .map((part) => reverseText(part))
      .join("-");
  }
  return value;
}

function reverseText(value) {
  return Array.from(value).reverse().join("");
}

function morphemeButtons(value, token, sentenceIndex, tokenIndex) {
  const span = document.createElement("span");
  value.split("-").forEach((piece, index, all) => {
    span.append(entityButton(piece, "morpheme", token, sentenceIndex, tokenIndex));
    if (index < all.length - 1) span.append("-");
  });
  return span;
}

function featureButton(feature, token, sentenceIndex, tokenIndex) {
  const button = document.createElement("button");
  button.className = "clickable feature-pill";
  button.type = "button";
  button.textContent = feature;
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    activateToken(sentenceIndex, tokenIndex);
    inspect("grammar feature", feature, token);
    render();
  });
  return button;
}

function activateToken(sentenceIndex, tokenIndex) {
  state.selected = { sentenceIndex, tokenIndex };
  state.current = { sentenceIndex, tokenIndex };
  state.activeSentence = sentenceIndex;
  state.clozeRevealed = false;
}

function selectToken(sentenceIndex, tokenIndex, token) {
  activateToken(sentenceIndex, tokenIndex);
  inspect("token", token.surface, token);
  render();
}

function inspect(type, label, token) {
  openInspector();
  inspectTitle.textContent = label;
  updateKnowledgeControls(token);
  const details = [
    ["Type", type],
    ["Lemma", token.lemma || "—"],
    ["Root", token.root || "—"],
    ["Morphs", token.morphs || "—"],
    ["Gloss", token.gloss || "—"],
    ["Part of speech", token.pos || "—"],
    ["Features", token.features.length ? token.features.join(", ") : "—"],
  ];

  inspectDetails.replaceChildren(
    ...details.map(([term, value]) => {
      const wrapper = document.createElement("div");
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = term;
      dd.textContent = value;
      wrapper.append(dt, dd);
      return wrapper;
    }),
  );
}

function openInspector() {
  state.inspectorOpen = true;
  workspace.classList.remove("inspector-collapsed");
  inspectorToggle.setAttribute("aria-expanded", "true");
}

function closeInspector() {
  state.inspectorOpen = false;
  workspace.classList.add("inspector-collapsed");
  inspectorToggle.setAttribute("aria-expanded", "false");
}

function applyLanguageDefaults(settings) {
  document.documentElement.style.setProperty("--target-size", `${settings.targetSize}px`);
  document.documentElement.style.setProperty("--annotation-size", `${settings.annotationSize}px`);
  document.documentElement.style.setProperty("--token-gap", `${settings.tokenGap}px`);
  document.documentElement.style.setProperty("--row-gap", `${settings.rowGap}px`);
  document.documentElement.style.setProperty("--original-color", settings.originalColor);
  document.documentElement.style.setProperty("--transliteration-color", "#59656f");
  document.documentElement.style.setProperty("--morphs-color", "#9a5a1f");
  document.documentElement.style.setProperty("--gloss-color", settings.glossColor);
  document.documentElement.style.setProperty("--lemma-color", "#2f6f4f");
  document.documentElement.style.setProperty("--root-color", "#6b4f2a");
  document.documentElement.style.setProperty("--pos-color", "#755a13");
  document.documentElement.style.setProperty("--feature-color", settings.featureColor);

  document.querySelector("#target-size").value = settings.targetSize;
  document.querySelector("#annotation-size").value = settings.annotationSize;
  document.querySelector("#token-gap").value = settings.tokenGap;
  document.querySelector("#row-gap").value = settings.rowGap;
  document.querySelector("#original-color").value = settings.originalColor;
  document.querySelector("#transliteration-color").value = "#59656f";
  document.querySelector("#morphs-color").value = "#9a5a1f";
  document.querySelector("#gloss-color").value = settings.glossColor;
  document.querySelector("#lemma-color").value = "#2f6f4f";
  document.querySelector("#root-color").value = "#6b4f2a";
  document.querySelector("#pos-color").value = "#755a13";
  document.querySelector("#feature-color").value = settings.featureColor;
}

function updateAudio() {
  const sample = samples[state.language];
  audioLabel.textContent = `${sample.languageName} · sentence ${state.activeSentence + 1} of ${sample.sentences.length}`;
  progressFill.style.width = `${state.progress}%`;
  playToggle.textContent = state.playing ? "Pause" : "Play";
}

function stepAudio() {
  const speed = Number(document.querySelector("#speed-range").value) / 100;
  state.progress += 10 * speed;
  if (state.abStart !== null && state.abEnd !== null && state.progress >= state.abEnd) {
    state.progress = state.abStart;
  }
  if (state.progress >= 100) {
    state.progress = 0;
    if (!state.loop) {
      state.activeSentence = (state.activeSentence + 1) % samples[state.language].sentences.length;
    }
    render();
  }
  updateAudio();
}

function currentToken() {
  return samples[state.language].sentences[state.current.sentenceIndex]?.tokens[state.current.tokenIndex];
}

function moveCurrent(delta) {
  const sentences = samples[state.language].sentences;
  let sentenceIndex = state.current.sentenceIndex;
  let tokenIndex = state.current.tokenIndex + delta;

  while (sentenceIndex >= 0 && sentenceIndex < sentences.length) {
    if (tokenIndex >= 0 && tokenIndex < sentences[sentenceIndex].tokens.length) {
      state.current = { sentenceIndex, tokenIndex };
      state.activeSentence = sentenceIndex;
      state.selected = { sentenceIndex, tokenIndex };
      state.clozeRevealed = false;
      inspect("token", sentences[sentenceIndex].tokens[tokenIndex].surface, sentences[sentenceIndex].tokens[tokenIndex]);
      render();
      scrollCurrentIntoView();
      return;
    }
    if (delta > 0) {
      sentenceIndex += 1;
      tokenIndex = 0;
    } else {
      sentenceIndex -= 1;
      tokenIndex = sentenceIndex >= 0 ? sentences[sentenceIndex].tokens.length - 1 : 0;
    }
  }
}

function scrollCurrentIntoView() {
  window.requestAnimationFrame(() => {
    document.querySelector(".token-stack.is-current")?.scrollIntoView({ block: "nearest", inline: "nearest" });
  });
}

function knowledgeKey(token) {
  return `${state.language}:${token.lemma || token.surface}`;
}

function knowledgeStageIndex(token) {
  const key = knowledgeKey(token);
  if (state.knowledge[key] === undefined) {
    state.knowledge[key] = 0;
  }
  return state.knowledge[key];
}

function knowledgeStage(token) {
  return learningStages[knowledgeStageIndex(token)];
}

function knowledgeProgress(token) {
  return stageProgress[knowledgeStageIndex(token)];
}

function updateKnowledgeControls(token) {
  const adjustable = token && token.pos !== "PUNCT";
  const index = adjustable ? knowledgeStageIndex(token) : 0;
  knowledgeStageLabel.textContent = adjustable ? learningStages[index] : "Not scored";
  knowledgeDown.disabled = !adjustable || index === 0;
  knowledgeUp.disabled = !adjustable || index === learningStages.length - 1;
}

function updateKnowledge(delta) {
  const token = currentToken();
  if (!token || token.pos === "PUNCT") return;
  const key = knowledgeKey(token);
  const previous = knowledgeStageIndex(token);
  const next = Math.min(learningStages.length - 1, Math.max(0, previous + delta));
  state.knowledge[key] = next;
  state.reviewEvents.push({
    key,
    from: learningStages[previous],
    to: learningStages[next],
    recalled: delta > 0,
    reviewedAt: new Date().toISOString(),
  });
  state.clozeRevealed = true;
  inspect("token", token.surface, token);
  render();
}

function targetValue(token, frequency) {
  return Math.min(100, (learningStages.length - 1 - knowledgeStageIndex(token)) * 25 + frequency * 8);
}

function collectWords() {
  const map = new Map();
  samples[state.language].sentences.forEach((sentence, sentenceIndex) => {
    sentence.tokens.forEach((token, tokenIndex) => {
      if (token.pos === "PUNCT") return;
      const key = token.lemma || token.surface;
      const existing = map.get(key) || { token, frequency: 0, examples: [] };
      existing.frequency += 1;
      existing.examples.push({ sentenceIndex, tokenIndex });
      map.set(key, existing);
    });
  });
  return Array.from(map.values()).map((item) => ({
    ...item,
    knowledge: knowledgeProgress(item.token),
    stageIndex: knowledgeStageIndex(item.token),
    stage: knowledgeStage(item.token),
    target: targetValue(item.token, item.frequency),
  }));
}

function renderWordList() {
  const words = collectWords();
  words.sort((a, b) => {
    if (state.wordSort === "target") return b.target - a.target;
    if (state.wordSort === "frequency") return b.frequency - a.frequency;
    if (state.wordSort === "alphabetic") return (a.token.lemma || a.token.surface).localeCompare(b.token.lemma || b.token.surface);
    return a.stageIndex - b.stageIndex;
  });

  wordListContent.replaceChildren(...words.map(renderWordCard));
}

function renderWordCard(word) {
  const card = document.createElement("article");
  card.className = `word-card word-card-${state.wordListView}`;
  const display = state.wordListView === "cloze" ? "_____" : word.token.surface;
  const nextDue = word.stageIndex < 2 ? "Today" : word.stageIndex === 2 ? "Soon" : "Not scheduled";
  if (state.wordListView === "interlinear" || state.wordListView === "cloze") {
    card.innerHTML = `
      <div class="mini-token">
        <strong>${escapeHtml(display)}</strong>
        <span class="transliteration">${escapeHtml(word.token.transliteration || "")}</span>
        <span class="morphs">${escapeHtml(word.token.morphs || "")}</span>
        <span class="gloss">${escapeHtml(word.token.gloss || "")}</span>
        <span class="lemma">${escapeHtml(word.token.lemma || "")}</span>
      </div>
      <div><span>Learning stage</span><div class="meter"><i style="width:${word.knowledge}%"></i></div><strong>${escapeHtml(word.stage)}</strong></div>
      <div><span>Due</span><strong>${nextDue}</strong></div>
      <div><span>Seen</span><strong>${word.frequency}</strong></div>
      <div><span>Target</span><strong>${word.target}</strong></div>
    `;
  } else {
  card.innerHTML = `
    <div>
      <strong>${escapeHtml(display)}</strong>
      <span>${escapeHtml(word.token.lemma)} · ${escapeHtml(word.token.gloss)}</span>
    </div>
    <div><span>Learning stage</span><div class="meter"><i style="width:${word.knowledge}%"></i></div><strong>${escapeHtml(word.stage)}</strong></div>
    <div><span>Target</span><strong>${word.target}</strong></div>
    <div><span>Text freq.</span><strong>${word.frequency}</strong></div>
  `;
  }
  card.addEventListener("click", () => {
    const first = word.examples[0];
    selectToken(first.sentenceIndex, first.tokenIndex, word.token);
  });
  return card;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function toggleWordList() {
  const hidden = wordListPanel.hasAttribute("hidden");
  wordListPanel.toggleAttribute("hidden", !hidden);
  document.querySelector("#word-list-toggle").setAttribute("aria-expanded", String(hidden));
  if (hidden) {
    renderWordList();
    wordListPanel.scrollIntoView({ block: "nearest" });
  }
}

function switchView(view) {
  state.view = view;
  document.querySelectorAll(".app-view").forEach((section) => {
    section.classList.toggle("is-active", section.id === `${view}-view`);
  });
  document.querySelectorAll(".app-nav-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });
  updateViewChrome();
  if (view === "library") renderLibrary();
  if (view === "import") renderImportPreview();
  if (view === "dictionary") renderDictionary();
  if (view === "progress") renderProgress();
}

function updateViewChrome() {
  const isReader = state.view === "reader";
  const sample = samples[state.language];
  appShell.dataset.view = state.view;
  documentTitle.textContent = isReader ? sample.title : viewTitles[state.view];
  document.querySelector("#settings-toggle").hidden = !isReader;
  document.querySelector("#word-list-toggle").hidden = !isReader;
  inspectorToggle.hidden = !isReader;
  document.querySelector(".language-select-control").hidden = !isReader && state.view !== "progress";
}

function switchLanguage(language) {
  state.language = language;
  state.activeSentence = 0;
  state.progress = 0;
  state.selected = null;
  state.current = { sentenceIndex: 0, tokenIndex: 0 };
  state.clozeRevealed = false;
  state.customSettings = false;
  document.querySelector("#language-select").value = language;
  document.querySelector("#dictionary-language").value = language;
  render();
}

function renderLibrary() {
  let rows = Object.entries(samples)
    .map(([key, sample], index) => {
      const words = collectWordsForLanguage(key);
      const known = Math.round(words.reduce((sum, item) => sum + item.knowledge, 0) / Math.max(1, words.length));
      return {
        key,
        sample,
        words,
        known,
        recentOrder: index,
        recent: ["Today", "Yesterday", "2 days ago", "Last week"][index] || "Just imported",
        due: known < 45 ? "Today" : known < 70 ? "Tomorrow" : "Later",
        next: known < 45 ? "Review unknown words" : "Continue reading",
      };
    })
    .filter(({ key }) => state.libraryLanguageFilter === "all" || key === state.libraryLanguageFilter);

  rows.sort((a, b) => {
    if (state.librarySort === "progress") return a.known - b.known;
    if (state.librarySort === "recent") return a.recentOrder - b.recentOrder;
    if (state.librarySort === "due") {
      const dueRank = { Today: 0, Tomorrow: 1, Later: 2 };
      return dueRank[a.due] - dueRank[b.due];
    }
    return a.sample.languageName.localeCompare(b.sample.languageName);
  });

  libraryGrid.classList.toggle("is-table", state.libraryViewMode === "table");
  if (state.libraryViewMode === "table") {
    const table = document.createElement("div");
    table.className = "library-table";
    table.innerHTML = `
      <div class="library-table-head">
        <span>Language</span><span>Text / lesson</span><span>Progress</span><span>Recent</span><span>Due</span><span>Next</span><span></span>
      </div>
    `;
    rows.forEach(({ key, sample, words, known, recent, due, next }) => {
      const row = document.createElement("article");
      row.className = "library-row";
      row.innerHTML = `
        <span>${escapeHtml(sample.languageName)}</span>
        <strong>${escapeHtml(sample.title)}</strong>
        <span><div class="meter"><i style="width:${known}%"></i></div>${known}% · ${words.length} words</span>
        <span>${escapeHtml(recent)}</span>
        <span>${escapeHtml(due)}</span>
        <span>${escapeHtml(next)}</span>
        <button type="button">Open</button>
      `;
      row.querySelector("button").addEventListener("click", () => {
        switchLanguage(key);
        switchView("reader");
      });
      table.append(row);
    });
    libraryGrid.replaceChildren(table);
    return;
  }

  const cards = rows.map(({ key, sample, words, known, due }) => {
    const card = document.createElement("article");
    card.className = "library-card";
    card.innerHTML = `
      <div>
        <div class="eyebrow">${escapeHtml(sample.languageName)} · ${sample.direction.toUpperCase()}</div>
        <h3>${escapeHtml(sample.title)}</h3>
      </div>
      <p>${sample.sentences.length} sentences · ${words.length} tracked words · parser preview ready</p>
      <div class="card-metrics">
        <span><strong>${known}%</strong> known</span>
        <span><strong>${escapeHtml(due)}</strong> due</span>
        <span><strong>${sample.sentences.length}</strong> reading units</span>
        <span><strong>${sample.direction.toUpperCase()}</strong> script</span>
      </div>
      <button type="button">Open reader</button>
    `;
    card.querySelector("button").addEventListener("click", () => {
      switchLanguage(key);
      switchView("reader");
    });
    return card;
  });
  libraryGrid.replaceChildren(...cards);
}

function renderImportPreview() {
  const lines = importSentenceCandidates();
  importPreviewList.replaceChildren(
    ...lines.map((line, index) => {
      const item = document.createElement("li");
      item.innerHTML = `
        <strong>${index + 1}</strong>
        <span>${escapeHtml(line)}</span>
        <span class="candidate-actions"><button type="button" disabled title="Parser editing is not connected yet">Split</button><button type="button" disabled title="Parser editing is not connected yet">Merge</button></span>
      `;
      return item;
    }),
  );
  const selectedLanguage = document.querySelector("#import-language").value;
  const languageReady = selectedLanguage !== "new" || document.querySelector("#new-language-name").value.trim();
  const validation = document.querySelector("#structure-review .validation-list");
  validation.innerHTML = `
    <span>${languageReady ? "Language set" : "New language name required"}</span>
    <span>${lines.length} sentence candidates</span>
    <span>Audio optional</span>
    <span>Source URL captured</span>
    <span>${languageReady && lines.length ? "Ready for parser job" : "Needs attention"}</span>
  `;
  const languageSelect = document.querySelector("#import-language");
  const languageLabel = languageSelect.selectedOptions[0]?.textContent || "Language needed";
  const wordCount = importText.value.trim() ? importText.value.trim().split(/\s+/).length : 0;
  document.querySelector("#import-source-summary").textContent = `${languageLabel} · ${wordCount} words`;
  document.querySelector("#import-structure-summary").textContent = lines.length ? `${lines.length} sentence candidates` : "Needs source text";
  document.querySelector("#import-annotation-summary").textContent = lines.length ? `${lines.length} sentences · draft rows` : "Waiting for structure";
  document.querySelector("#import-reader-summary").textContent = lines.length ? `${languageLabel} · ready after review` : "Waiting for source";
  document.querySelector("#import-ready-title").textContent = document.querySelector("#import-title").value.trim() || "Untitled import";
  document.querySelector("#import-ready-description").textContent = `${languageLabel} · ${lines.length} sentence${lines.length === 1 ? "" : "s"} · annotation draft available`;
  renderImportAnnotations(lines);
}

function importSentenceCandidates() {
  return importText.value
    .split(/\n+/)
    .flatMap((line) => line.split(/(?<=[.!?؟])\s+/))
    .map((line) => line.trim())
    .filter(Boolean);
}

function renderImportAnnotations(lines = importSentenceCandidates()) {
  annotationList.replaceChildren(
    ...lines.map((line, index) => {
      const section = document.createElement("article");
      section.className = "annotation-review-row";
      section.innerHTML = `
        <div class="annotation-source-line"><span>Sentence ${index + 1} · original</span><strong>${escapeHtml(line)}</strong></div>
        <div class="annotation-field-grid">
          <label>Transliteration <input type="text" placeholder="Automatic draft or correction" /></label>
          <label>Translation / gloss <input type="text" placeholder="Add or correct meaning" /></label>
          <label>Morphology / lemma / root notes <textarea rows="2" placeholder="Parser rows will be editable here"></textarea></label>
        </div>
        <span class="annotation-status">Automatic draft · review optional</span>
      `;
      return section;
    }),
  );
}

function setImportStage(stage) {
  state.importStage = stage;
  document.querySelectorAll("[data-import-stage]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.importStage === stage);
  });
  const sourcePanel = document.querySelector('[data-import-panel="source"]');
  const reviewFlow = document.querySelector("#import-review-flow");
  sourcePanel.hidden = stage !== "source";
  reviewFlow.hidden = stage === "source";
  reviewFlow.querySelectorAll("[data-import-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.importPanel !== stage;
  });
  if (stage !== "source") renderImportPreview();
  const activePanel = document.querySelector(`[data-import-panel="${stage}"]`);
  if (activePanel) activePanel.scrollIntoView({ block: "start", behavior: "smooth" });
}

function importedSentenceDrafts() {
  return importSentenceCandidates().map((line) => {
    const pieces = line.match(/\p{L}[\p{L}\p{M}'’\-]*|[^\s\p{L}\p{M}]/gu) || [];
    return {
      translation: "Translation pending",
      tokens: pieces.map((piece) => {
        const punctuation = /^[^\p{L}\p{M}]+$/u.test(piece);
        return t(piece, "", piece, "", punctuation ? piece : piece.toLocaleLowerCase(), punctuation ? "PUNCT" : "X", []);
      }),
    };
  });
}

function createImportDraftDocument() {
  const selectedLanguage = document.querySelector("#import-language").value;
  if (selectedLanguage === "new") {
    const key = createImportedLanguage();
    document.querySelector("#import-language").value = key;
    return key;
  }

  const base = samples[selectedLanguage];
  const key = `import-draft-${selectedLanguage}`;
  samples[key] = {
    title: document.querySelector("#import-title").value.trim() || "Untitled import",
    languageName: base.languageName,
    direction: base.direction,
    defaultSettings: { ...base.defaultSettings },
    sentences: importedSentenceDrafts(),
  };
  addLanguageOption("#language-select", key, `${base.languageName} · imported draft`);
  addLanguageOption("#library-language-filter", key, `${base.languageName} · imported draft`);
  addLanguageOption("#dictionary-language", key, `${base.languageName} · imported draft`);
  return key;
}

function addLanguageOption(selectId, key, name, beforeValue = "") {
  const select = document.querySelector(selectId);
  if (Array.from(select.options).some((option) => option.value === key)) return;
  const option = document.createElement("option");
  option.value = key;
  option.textContent = name;
  const before = beforeValue ? Array.from(select.options).find((item) => item.value === beforeValue) : null;
  select.add(option, before || null);
}

function createImportedLanguage() {
  const name = document.querySelector("#new-language-name").value.trim() || "Imported language";
  const requestedCode = document.querySelector("#new-language-code").value.trim().toLowerCase();
  const baseKey = (requestedCode || name.toLowerCase()).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "imported";
  let key = baseKey;
  let suffix = 2;
  while (samples[key]) {
    key = `${baseKey}-${suffix}`;
    suffix += 1;
  }
  const sentences = importSentenceCandidates().map((line) => {
    const pieces = line.match(/\p{L}[\p{L}\p{M}'’\-]*|[^\s\p{L}\p{M}]/gu) || [];
    return {
      translation: "Translation not supplied",
      tokens: pieces.map((piece) => {
        const punctuation = /^[^\p{L}\p{M}]+$/u.test(piece);
        return t(piece, "", piece, "", punctuation ? piece : piece.toLocaleLowerCase(), punctuation ? "PUNCT" : "X", []);
      }),
    };
  });
  samples[key] = {
    title: document.querySelector("#import-title").value.trim() || "Untitled import",
    languageName: name,
    direction: document.querySelector("#new-language-direction").value,
    defaultSettings: {
      targetSize: 28,
      annotationSize: 13,
      tokenGap: 18,
      rowGap: 4,
      originalColor: "#13201b",
      glossColor: "#42526b",
      featureColor: "#315b9d",
    },
    sentences,
  };
  addLanguageOption("#language-select", key, name);
  addLanguageOption("#library-language-filter", key, name);
  addLanguageOption("#dictionary-language", key, name);
  addLanguageOption("#import-language", key, name, "new");
  return key;
}

function collectDictionaryWords(language) {
  const sample = samples[language];
  const previousLanguage = state.language;
  state.language = language;
  const map = new Map();
  let encounterIndex = 0;
  sample.sentences.forEach((sentence) => {
    const sentenceText = sentence.tokens.map((token) => token.surface).join(" ").replace(/\s+([.,!?؟])/g, "$1");
    sentence.tokens.forEach((token) => {
      if (token.pos === "PUNCT") return;
      encounterIndex += 1;
      const key = token.lemma || token.surface;
      const entry = map.get(key) || {
        key,
        label: key,
        language: sample.languageName,
        meaning: token.gloss || "—",
        root: token.root || "—",
        morphs: new Set(),
        forms: new Set(),
        features: new Set(),
        pos: token.pos || "—",
        seen: 0,
        examples: [],
        token,
        source: sample.title,
        lastEncounter: encounterIndex,
      };
      entry.seen += 1;
      entry.lastEncounter = encounterIndex;
      entry.forms.add(token.surface);
      if (token.morphs) entry.morphs.add(token.morphs);
      token.features.forEach((feature) => entry.features.add(feature));
      if (!entry.examples.includes(sentenceText)) entry.examples.push(sentenceText);
      map.set(key, entry);
    });
  });
  const entries = Array.from(map.values()).map((entry) => ({
    ...entry,
    morphs: Array.from(entry.morphs),
    forms: Array.from(entry.forms),
    features: Array.from(entry.features),
    stage: knowledgeStage(entry.token),
    stageIndex: knowledgeStageIndex(entry.token),
    progress: knowledgeProgress(entry.token),
    target: targetValue(entry.token, entry.seen),
    targetList: entry.seen > 1 || ["NOUN", "VERB"].includes(entry.pos),
    recent: entry.lastEncounter >= Math.max(1, encounterIndex - 11),
  }));
  state.language = previousLanguage;
  return entries;
}

function renderDictionary(selectedKey = "") {
  const language = document.querySelector("#dictionary-language").value;
  const query = document.querySelector("#dictionary-search").value.toLowerCase();
  const scope = document.querySelector("#dictionary-scope").value;
  const rootFilter = document.querySelector("#dictionary-root-filter").value.toLowerCase();
  const morphFilter = document.querySelector("#dictionary-morph-filter").value.toLowerCase();
  const posFilter = document.querySelector("#dictionary-pos-filter").value;
  const advanced = document.querySelector("#dictionary-advanced").checked;
  const entries = collectDictionaryWords(language);
  const visible = entries.filter((entry) => {
    const searchable = `${entry.label} ${entry.meaning} ${entry.root} ${entry.morphs.join(" ")} ${entry.features.join(" ")} ${entry.forms.join(" ")}`.toLowerCase();
    const queryMatch = searchable.includes(query);
    const rootMatch = !rootFilter || entry.root.toLowerCase().includes(rootFilter);
    const morphMatch = !morphFilter || `${entry.morphs.join(" ")} ${entry.features.join(" ")}`.toLowerCase().includes(morphFilter);
    const posMatch = posFilter === "all" || (posFilter === "other" ? !["NOUN", "VERB", "ADJ", "PRON"].includes(entry.pos) : entry.pos === posFilter);
    const scopeMatch = scope === "recent" ? entry.recent : scope === "target" ? entry.targetList : true;
    return queryMatch && rootMatch && morphMatch && posMatch && scopeMatch;
  });
  const current = visible.find((entry) => entry.key === selectedKey) || visible[0];
  const table = document.createElement("div");
  table.className = `entity-table word-dictionary-table ${advanced ? "is-advanced" : ""}`;
  table.innerHTML = `
    <div class="entity-table-head">
      <span>Word / lemma</span><span>Meaning</span><span>Root</span><span>Morphology</span><span>POS</span><span>Learning stage</span><span>Seen</span><span>Source</span>
      ${advanced ? "<span>Features</span><span>Forms</span>" : ""}
    </div>
  `;
  visible.forEach((entry) => {
    const button = document.createElement("button");
    button.className = `entity-table-row ${entry.key === current?.key ? "is-active" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <strong>${escapeHtml(entry.label)}</strong>
      <span>${escapeHtml(entry.meaning)}</span>
      <span>${escapeHtml(entry.root)}</span>
      <span>${escapeHtml(entry.morphs.join(", ") || "—")}</span>
      <span>${escapeHtml(entry.pos)}</span>
      <span><div class="meter"><i style="width:${entry.progress}%"></i></div>${escapeHtml(entry.stage)}</span>
      <span>${entry.seen}</span>
      <span>${escapeHtml(entry.source)}</span>
      ${advanced ? `<span>${escapeHtml(entry.features.join(", ") || "—")}</span><span>${escapeHtml(entry.forms.join(", "))}</span>` : ""}
    `;
    button.addEventListener("click", () => renderDictionary(entry.key));
    table.append(button);
  });
  if (!visible.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No words match these filters in the current sample data.";
    entityList.replaceChildren(empty);
    entityDetail.innerHTML = `<div class="eyebrow">Dictionary</div><h2>No selection</h2><p>Clear one or more filters to continue.</p>`;
    return;
  }
  entityList.replaceChildren(table);
  renderEntityDetail(current);
}

function renderEntityDetail(entry) {
  entityDetail.innerHTML = `
    <div class="eyebrow">${escapeHtml(entry.language)} word</div>
    <h2>${escapeHtml(entry.label)}</h2>
    <p class="entity-meaning">${escapeHtml(entry.meaning)}</p>
    <dl class="detail-list">
      <div><dt>Learning stage</dt><dd>${escapeHtml(entry.stage)}</dd></div>
      <div><dt>Root</dt><dd>${escapeHtml(entry.root)}</dd></div>
      <div><dt>Morphology</dt><dd>${escapeHtml(entry.morphs.join(", ") || "—")}</dd></div>
      <div><dt>Features</dt><dd>${escapeHtml(entry.features.join(", ") || "—")}</dd></div>
      <div><dt>Source text</dt><dd>${escapeHtml(entry.source)}</dd></div>
      <div><dt>Personal editing</dt><dd>Learner note, preferred gloss, learning stage</dd></div>
      <div><dt>Shared editing</dt><dd>Requires later permissions and provenance rules</dd></div>
    </dl>
    <h3>Corpus examples</h3>
    <ul>${entry.examples.map((example) => `<li>${escapeHtml(example)}</li>`).join("")}</ul>
    <h3>Forms and structural matches</h3>
    <div class="tag-row">${[...entry.forms, ...entry.features].map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
  `;
}

function renderProgress() {
  const allWords = Object.keys(samples).flatMap(collectWordsForLanguage);
  const knownAverage = Math.round(allWords.reduce((sum, item) => sum + item.knowledge, 0) / Math.max(1, allWords.length));
  const cards = Object.entries(samples).map(([key, sample]) => {
    const words = collectWordsForLanguage(key);
    const known = Math.round(words.reduce((sum, item) => sum + item.knowledge, 0) / Math.max(1, words.length));
    return [sample.languageName, `${known}% stage progress`, `${words.length} tracked words · ${sample.sentences.length} reading units · ${key === state.language ? "active language" : "available"}`];
  });
  cards.unshift(["All languages", `${knownAverage}% stage progress`, `${allWords.length} tracked lemmas · derived only from New/Learning/Acquainted/Well known stages`]);
  progressGrid.replaceChildren(
    ...cards.map(([title, value, copy]) => {
      const card = document.createElement("article");
      card.className = "progress-card";
      card.innerHTML = `<span>${escapeHtml(title)}</span><strong>${escapeHtml(value)}</strong><p>${escapeHtml(copy)}</p>`;
      return card;
    }),
  );
  renderSchedule();
}

function renderSchedule() {
  const suggestions = [
    ["Review candidate", "Review New and Learning words in the current reader", "Stage-based placeholder; scheduling method not yet selected"],
    ["Target lexicon", "Distill high-frequency words from imported texts", "Frequency data + teacher targets"],
    ["Grammar pattern", "Practise ablative/source patterns", "Parser feature examples"],
    ["Teacher/Maven", "Assign a short dialogue with audio", "Speaking practice schedule"],
  ];
  scheduleList.replaceChildren(
    ...suggestions.map(([label, action, reason]) => {
      const card = document.createElement("article");
      card.className = "schedule-card";
      card.innerHTML = `<span>${escapeHtml(label)}</span><strong>${escapeHtml(action)}</strong><p>${escapeHtml(reason)}</p>`;
      return card;
    }),
  );
}

function collectWordsForLanguage(language) {
  const previous = state.language;
  state.language = language;
  const words = collectWords();
  state.language = previous;
  return words;
}

document.querySelector("#language-select").addEventListener("change", (event) => {
  switchLanguage(event.target.value);
  if (state.view === "library") renderLibrary();
  if (state.view === "progress") renderProgress();
});

document.querySelectorAll(".app-nav-button").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

document.querySelectorAll("[data-switch-view]").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.switchView));
});

importText.addEventListener("input", () => {
  document.querySelector("#import-save-state").textContent = "Draft saved on this device";
  renderImportPreview();
});

document.querySelectorAll("[data-import-stage]").forEach((button) => {
  button.addEventListener("click", () => setImportStage(button.dataset.importStage));
});

document.querySelector("#review-import").addEventListener("click", () => setImportStage("structure"));
document.querySelector("#quick-read-import").addEventListener("click", () => {
  const language = createImportDraftDocument();
  switchLanguage(language);
  switchView("reader");
});
document.querySelector("#rerun-import-preview").addEventListener("click", renderImportPreview);

document.querySelector("#import-language").addEventListener("change", (event) => {
  document.querySelector("#new-language-panel").hidden = event.target.value !== "new";
  renderImportPreview();
});

document.querySelector("#new-language-name").addEventListener("input", renderImportPreview);
document.querySelector("#import-title").addEventListener("input", renderImportPreview);

document.querySelector("#mock-import-confirm").addEventListener("click", () => {
  document.querySelector("#import-title").value = document.querySelector("#import-title").value || "Untitled import";
  const language = createImportDraftDocument();
  switchLanguage(language);
  renderLibrary();
  switchView("library");
});

document.querySelector("#open-import-reader").addEventListener("click", () => {
  const language = createImportDraftDocument();
  switchLanguage(language);
  switchView("reader");
});

document.querySelectorAll("[data-edit-import-stage]").forEach((button) => {
  button.addEventListener("click", () => {
    switchView("import");
    setImportStage(button.dataset.editImportStage);
  });
});

document.querySelector("#dictionary-search").addEventListener("input", () => renderDictionary());
document.querySelector("#dictionary-scope").addEventListener("change", () => renderDictionary());
document.querySelector("#dictionary-language").addEventListener("change", () => renderDictionary());
document.querySelector("#dictionary-root-filter").addEventListener("input", () => renderDictionary());
document.querySelector("#dictionary-morph-filter").addEventListener("input", () => renderDictionary());
document.querySelector("#dictionary-pos-filter").addEventListener("change", () => renderDictionary());
document.querySelector("#dictionary-advanced").addEventListener("change", () => renderDictionary());

document.querySelector("#library-view-mode").addEventListener("change", (event) => {
  state.libraryViewMode = event.target.value;
  renderLibrary();
});

document.querySelector("#library-sort").addEventListener("change", (event) => {
  state.librarySort = event.target.value;
  renderLibrary();
});

document.querySelector("#library-language-filter").addEventListener("change", (event) => {
  state.libraryLanguageFilter = event.target.value;
  renderLibrary();
});

document.querySelectorAll("[data-row]").forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      state.visibleRows.add(checkbox.dataset.row);
    } else {
      state.visibleRows.delete(checkbox.dataset.row);
    }
    render();
  });
});

const rowPresets = {
  reading: ["gloss"],
  interlinear: ["transliteration", "morphs", "gloss", "lemma", "pos", "features"],
  morphology: ["transliteration", "morphs", "gloss", "lemma", "root", "pos", "features"],
  cloze: ["transliteration", "morphs", "gloss", "lemma", "root", "pos", "features"],
  minimal: [],
};

function setVisibleRows(rows) {
  state.visibleRows = new Set(rows);
  document.querySelectorAll("[data-row]").forEach((checkbox) => {
    checkbox.checked = state.visibleRows.has(checkbox.dataset.row);
  });
  render();
}

document.querySelector("#row-preset").addEventListener("change", (event) => {
  if (event.target.value === "cloze") {
    state.clozeMode = "blank";
    state.clozeRevealed = false;
    document.querySelector("#cloze-mode").value = "blank";
  }
  setVisibleRows(rowPresets[event.target.value]);
});

document.querySelector("#cloze-mode").addEventListener("change", (event) => {
  state.clozeMode = event.target.value;
  state.clozeRevealed = false;
  render();
});

document.querySelector("#word-list-toggle").addEventListener("click", toggleWordList);

document.querySelector("#word-sort").addEventListener("change", (event) => {
  state.wordSort = event.target.value;
  renderWordList();
});

document.querySelector("#word-list-view").addEventListener("change", (event) => {
  state.wordListView = event.target.value;
  renderWordList();
});

document.querySelector("#settings-toggle").addEventListener("click", () => {
  const panel = document.querySelector("#settings-panel");
  const hidden = panel.hasAttribute("hidden");
  panel.toggleAttribute("hidden", !hidden);
  document.querySelector("#settings-toggle").setAttribute("aria-expanded", String(hidden));
});

document.querySelector("#settings-close").addEventListener("click", () => {
  document.querySelector("#settings-panel").setAttribute("hidden", "");
  document.querySelector("#settings-toggle").setAttribute("aria-expanded", "false");
});

inspectorToggle.addEventListener("click", () => {
  if (state.inspectorOpen) {
    closeInspector();
  } else {
    openInspector();
  }
});

document.querySelector("#inspector-close").addEventListener("click", closeInspector);

knowledgeDown.addEventListener("click", () => updateKnowledge(-1));
knowledgeUp.addEventListener("click", () => updateKnowledge(1));

[
  ["target-size", "--target-size", "px"],
  ["annotation-size", "--annotation-size", "px"],
  ["token-gap", "--token-gap", "px"],
  ["row-gap", "--row-gap", "px"],
  ["reading-width", "--reading-width", "px"],
  ["original-color", "--original-color", ""],
  ["transliteration-color", "--transliteration-color", ""],
  ["morphs-color", "--morphs-color", ""],
  ["gloss-color", "--gloss-color", ""],
  ["lemma-color", "--lemma-color", ""],
  ["root-color", "--root-color", ""],
  ["pos-color", "--pos-color", ""],
  ["feature-color", "--feature-color", ""],
  ["highlight-color", "--highlight-color", ""],
].forEach(([id, property, unit]) => {
  document.querySelector(`#${id}`).addEventListener("input", (event) => {
    state.customSettings = true;
    document.documentElement.style.setProperty(property, `${event.target.value}${unit}`);
  });
});

document.querySelector("#rtl-transliteration-mode").addEventListener("change", (event) => {
  state.rtlTransliterationMode = event.target.value;
  render();
});

const densityPresets = {
  comfortable: {
    targetSize: 32,
    annotationSize: 14,
    tokenGap: 26,
    rowGap: 6,
    readingWidth: 1040,
  },
  standard: {
    targetSize: 28,
    annotationSize: 13,
    tokenGap: 18,
    rowGap: 4,
    readingWidth: 1120,
  },
  compact: {
    targetSize: 24,
    annotationSize: 11,
    tokenGap: 12,
    rowGap: 2,
    readingWidth: 1280,
  },
};

document.querySelectorAll("[data-density]").forEach((button) => {
  button.addEventListener("click", () => {
    const preset = densityPresets[button.dataset.density];
    state.customSettings = true;
    document.documentElement.style.setProperty("--target-size", `${preset.targetSize}px`);
    document.documentElement.style.setProperty("--annotation-size", `${preset.annotationSize}px`);
    document.documentElement.style.setProperty("--token-gap", `${preset.tokenGap}px`);
    document.documentElement.style.setProperty("--row-gap", `${preset.rowGap}px`);
    document.documentElement.style.setProperty("--reading-width", `${preset.readingWidth}px`);
    document.querySelector("#target-size").value = preset.targetSize;
    document.querySelector("#annotation-size").value = preset.annotationSize;
    document.querySelector("#token-gap").value = preset.tokenGap;
    document.querySelector("#row-gap").value = preset.rowGap;
    document.querySelector("#reading-width").value = preset.readingWidth;
  });
});

document.querySelector("#speed-range").addEventListener("input", (event) => {
  speedValue.textContent = `${(Number(event.target.value) / 100).toFixed(2).replace(/0$/, "")}x`;
});

playToggle.addEventListener("click", () => {
  state.playing = !state.playing;
  if (state.playing) {
    timer = window.setInterval(stepAudio, 650);
  } else {
    window.clearInterval(timer);
  }
  updateAudio();
});

document.querySelector("#previous-sentence").addEventListener("click", () => {
  state.activeSentence = Math.max(0, state.activeSentence - 1);
  state.progress = 0;
  render();
});

document.querySelector("#next-sentence").addEventListener("click", () => {
  const last = samples[state.language].sentences.length - 1;
  state.activeSentence = Math.min(last, state.activeSentence + 1);
  state.progress = 0;
  render();
});

document.querySelector("#loop-toggle").addEventListener("click", (event) => {
  state.loop = !state.loop;
  event.target.classList.toggle("is-active", state.loop);
});

document.querySelector("#ab-start").addEventListener("click", (event) => {
  state.abStart = Math.round(state.progress);
  event.target.textContent = `A ${state.abStart}%`;
});

document.querySelector("#ab-end").addEventListener("click", (event) => {
  state.abEnd = Math.max(Math.round(state.progress), (state.abStart || 0) + 5);
  event.target.textContent = `B ${state.abEnd}%`;
});

document.querySelector("#ab-clear").addEventListener("click", () => {
  state.abStart = null;
  state.abEnd = null;
  document.querySelector("#ab-start").textContent = "A";
  document.querySelector("#ab-end").textContent = "B";
});

document.addEventListener("keydown", (event) => {
  if (event.target.matches("input, select, textarea, button") || document.body.classList.contains("feedback-dialog-open")) return;
  if (event.key === "Tab") {
    event.preventDefault();
    moveCurrent(event.shiftKey ? -1 : 1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    moveCurrent(1);
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    moveCurrent(-1);
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    updateKnowledge(1);
  } else if (event.key === "ArrowDown") {
    event.preventDefault();
    updateKnowledge(-1);
  }
});

const feedbackStorageKey = "polyglot-reader-ui-feedback-v1";
const feedbackRepositoryUrl = "https://github.com/MTarragano/PolyglotInterlinearReader";
const feedbackToggle = document.querySelector("#feedback-toggle");
const feedbackReviewToggle = document.querySelector("#feedback-review-toggle");
const feedbackPanel = document.querySelector("#feedback-panel");
const feedbackDialog = document.querySelector("#feedback-dialog");
const feedbackForm = document.querySelector("#feedback-form");
const feedbackComment = document.querySelector("#feedback-comment");
const feedbackTargetSummary = document.querySelector("#feedback-target-summary");
const feedbackList = document.querySelector("#feedback-list");
const feedbackCount = document.querySelector("#feedback-count");
const feedbackPinLayer = document.querySelector("#feedback-pin-layer");
const feedbackStatus = document.querySelector("#feedback-status");
const feedbackLocalCount = document.querySelector("#feedback-local-count");
const feedbackSubmittedCount = document.querySelector("#feedback-submitted-count");
const feedbackGithubDialog = document.querySelector("#feedback-github-dialog");
const feedbackGithubSummary = document.querySelector("#feedback-github-summary");
const feedbackGithubBatches = document.querySelector("#feedback-github-batches");

let feedbackMode = false;
let feedbackHoverTarget = null;
let pendingFeedbackTarget = null;
let feedbackPinFrame = null;
let feedbackComments = loadFeedbackComments();
let preparedFeedbackBatches = [];

function normalizeFeedbackComment(item) {
  return {
    id: item.id || `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    view: item.view || "Unknown view",
    selector: item.selector || "",
    element: item.element || "Unknown element",
    comment: item.comment || "",
    viewport: item.viewport || "Unknown viewport",
    path: item.path || "/",
    createdAt: item.createdAt || new Date().toISOString(),
    submittedIssueUrl: item.submittedIssueUrl || "",
    submittedAt: item.submittedAt || "",
  };
}

function loadFeedbackComments() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(feedbackStorageKey) || "[]");
    return Array.isArray(saved) ? saved.map(normalizeFeedbackComment) : [];
  } catch (error) {
    return [];
  }
}

function setFeedbackStatus(message, tone = "") {
  feedbackStatus.textContent = message;
  if (tone) feedbackStatus.dataset.tone = tone;
  else feedbackStatus.removeAttribute("data-tone");
}

function saveFeedbackComments() {
  try {
    window.localStorage.setItem(feedbackStorageKey, JSON.stringify(feedbackComments));
    renderFeedback();
    return true;
  } catch (error) {
    setFeedbackStatus("These notes could not be saved in this browser. Export them before leaving the page.", "warning");
    return false;
  }
}

function escapeCssValue(value) {
  if (window.CSS && typeof window.CSS.escape === "function") return window.CSS.escape(value);
  return String(value).replace(/[^a-zA-Z0-9_-]/g, (character) => `\\${character}`);
}

function feedbackSelectorFor(element) {
  if (element.id) return `#${escapeCssValue(element.id)}`;

  const path = [];
  let current = element;
  while (current && current !== document.body && path.length < 6) {
    if (current.id) {
      path.unshift(`#${escapeCssValue(current.id)}`);
      break;
    }

    let segment = current.tagName.toLowerCase();
    const stableAttribute = ["data-view", "data-switch-view", "data-row", "data-density", "data-import-stage"]
      .find((name) => current.hasAttribute(name));

    if (stableAttribute) {
      const value = escapeCssValue(current.getAttribute(stableAttribute));
      segment += `[${stableAttribute}="${value}"]`;
    } else {
      const stableClass = [...current.classList].find((name) => !name.startsWith("is-") && !name.startsWith("feedback-"));
      if (stableClass) segment += `.${escapeCssValue(stableClass)}`;

      const siblings = current.parentElement
        ? [...current.parentElement.children].filter((child) => child.tagName === current.tagName)
        : [];
      if (siblings.length > 1) segment += `:nth-of-type(${siblings.indexOf(current) + 1})`;
    }

    path.unshift(segment);
    current = current.parentElement;
  }

  return path.join(" > ");
}

function feedbackElementLabel(element) {
  const labelled = element.getAttribute("aria-label") || element.getAttribute("title");
  const text = labelled || element.innerText || element.textContent || element.tagName;
  return text.replace(/\s+/g, " ").trim().slice(0, 140) || element.tagName.toLowerCase();
}

function currentFeedbackView() {
  const activeView = document.querySelector(".app-view.is-active");
  const ariaLabel = activeView && activeView.getAttribute("aria-label");
  return ariaLabel || `${state.view.charAt(0).toUpperCase()}${state.view.slice(1)}`;
}

function setFeedbackMode(active) {
  feedbackMode = active;
  document.body.classList.toggle("feedback-mode-active", active);
  feedbackToggle.setAttribute("aria-pressed", String(active));
  feedbackToggle.querySelector("span:last-child").textContent = active ? "Selecting…" : "Add feedback";
  feedbackReviewToggle.classList.toggle("is-selecting", active);
  feedbackReviewToggle.setAttribute("aria-pressed", String(active));
  feedbackReviewToggle.querySelector("span:nth-child(2)").textContent = active ? "Cancel" : "Feedback";
  if (active) closeFeedbackPanel();
  if (!active && feedbackHoverTarget) {
    feedbackHoverTarget.classList.remove("feedback-hover-target");
    feedbackHoverTarget = null;
  }
  scheduleFeedbackPins();
}

function openFeedbackDialog(element) {
  pendingFeedbackTarget = element;
  feedbackTargetSummary.textContent = `${currentFeedbackView()} · ${feedbackElementLabel(element)}`;
  feedbackComment.value = "";
  document.body.classList.add("feedback-dialog-open");
  feedbackDialog.showModal();
  window.setTimeout(() => feedbackComment.focus(), 0);
}

function closeFeedbackDialog() {
  pendingFeedbackTarget = null;
  document.body.classList.remove("feedback-dialog-open");
  if (feedbackDialog.open) feedbackDialog.close();
}

function addFeedbackComment() {
  const comment = feedbackComment.value.trim();
  if (!comment || !pendingFeedbackTarget) return;

  const item = normalizeFeedbackComment({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    view: currentFeedbackView(),
    selector: feedbackSelectorFor(pendingFeedbackTarget),
    element: feedbackElementLabel(pendingFeedbackTarget),
    comment,
    viewport: `${window.innerWidth}×${window.innerHeight}`,
    path: window.location.pathname,
    createdAt: new Date().toISOString(),
  });
  feedbackComments.push(item);
  const saved = saveFeedbackComments();
  closeFeedbackDialog();
  setFeedbackMode(false);
  openFeedbackPanel(item.id);
  if (saved) setFeedbackStatus("Saved on this device — not yet sent to GitHub.", "success");
}

function scheduleFeedbackPins() {
  if (feedbackPinFrame) return;
  feedbackPinFrame = window.requestAnimationFrame(() => {
    feedbackPinFrame = null;
    renderFeedbackPins();
  });
}

function renderFeedbackPins() {
  feedbackPinLayer.replaceChildren();
  if (!feedbackMode && feedbackPanel.hidden) return;
  feedbackComments.forEach((item, index) => {
    let target;
    try {
      target = document.querySelector(item.selector);
    } catch (error) {
      target = null;
    }
    if (!target) return;

    const rect = target.getBoundingClientRect();
    if (!rect.width || !rect.height || rect.bottom < 0 || rect.top > window.innerHeight) return;

    const pin = document.createElement("button");
    pin.className = "feedback-pin";
    pin.type = "button";
    pin.textContent = String(index + 1);
    pin.setAttribute("aria-label", `Review feedback ${index + 1}: ${item.comment}`);
    pin.style.left = `${Math.min(window.innerWidth - 16, rect.right)}px`;
    pin.style.top = `${Math.max(16, rect.top)}px`;
    pin.addEventListener("click", () => openFeedbackPanel(item.id));
    feedbackPinLayer.append(pin);
  });
}

function makeFeedbackItem(item, index) {
  const article = document.createElement("article");
  article.className = `feedback-item${item.submittedIssueUrl ? " is-submitted" : ""}`;
  article.dataset.feedbackId = item.id;

  const header = document.createElement("div");
  header.className = "feedback-item-header";
  const title = document.createElement("strong");
  title.textContent = `${index + 1}. ${item.view}`;
  header.append(title);

  const stateBadge = document.createElement("span");
  stateBadge.className = `feedback-state-badge${item.submittedIssueUrl ? " is-submitted" : ""}`;
  const issueNumber = item.submittedIssueUrl ? feedbackIssueNumber(item.submittedIssueUrl) : "";
  stateBadge.textContent = issueNumber ? `GitHub #${issueNumber}` : "Saved on this device";

  const target = document.createElement("div");
  target.className = "feedback-item-meta";
  target.textContent = item.element;
  const comment = document.createElement("p");
  comment.textContent = item.comment;
  article.append(header, stateBadge, target, comment);
  if (item.submittedIssueUrl) {
    const issueLink = document.createElement("a");
    issueLink.className = "feedback-issue-link";
    issueLink.href = item.submittedIssueUrl;
    issueLink.target = "_blank";
    issueLink.rel = "noopener";
    issueLink.textContent = `Open submitted issue #${item.submittedIssueUrl.split("/").pop()}`;
    article.append(issueLink);
  }
  return article;
}

function renderFeedback() {
  const unsentCount = feedbackComments.filter((item) => !item.submittedIssueUrl).length;
  const submittedCount = feedbackComments.filter((item) => item.submittedIssueUrl).length;
  feedbackCount.textContent = String(feedbackComments.length);
  feedbackLocalCount.textContent = String(feedbackComments.length);
  feedbackSubmittedCount.textContent = String(submittedCount);
  feedbackList.replaceChildren();
  if (!feedbackComments.length) {
    const empty = document.createElement("p");
    empty.className = "feedback-empty";
    empty.textContent = "No notes yet. Add feedback, then tap any part of the draft.";
    feedbackList.append(empty);
  } else {
    feedbackComments.forEach((item, index) => feedbackList.append(makeFeedbackItem(item, index)));
  }
  const prepareButton = document.querySelector("#feedback-send-github");
  prepareButton.disabled = !unsentCount;
  prepareButton.textContent = unsentCount
    ? `Send ${unsentCount} unsent note${unsentCount === 1 ? "" : "s"} to GitHub`
    : "All notes linked to GitHub";
  document.querySelector("#feedback-copy").disabled = !feedbackComments.length;
  document.querySelector("#feedback-export").disabled = !feedbackComments.length;
  scheduleFeedbackPins();
}

function openFeedbackPanel(focusId = "") {
  feedbackPanel.hidden = false;
  feedbackReviewToggle.setAttribute("aria-expanded", "true");
  scheduleFeedbackPins();
  if (focusId) {
    window.setTimeout(() => {
      const item = feedbackPanel.querySelector(`[data-feedback-id="${escapeCssValue(focusId)}"]`);
      if (item) item.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 0);
  }
}

function closeFeedbackPanel() {
  feedbackPanel.hidden = true;
  feedbackReviewToggle.setAttribute("aria-expanded", "false");
  scheduleFeedbackPins();
}

function selectedFeedbackComments() {
  return feedbackComments.filter((item) => !item.submittedIssueUrl);
}

function markdownFeedback(items) {
  const views = [...new Set(items.map((item) => item.view))].join(", ");
  const lines = [
    "## UI feedback",
    "",
    `Views reviewed: ${views}`,
    `Submitted from: ${window.location.href}`,
    "",
  ];

  items.forEach((item, index) => {
    lines.push(
      `### ${index + 1}. ${item.view}`,
      "",
      `- **Element:** ${item.element}`,
      `- **Selector:** \`${item.selector.replace(/`/g, "\\`")}\``,
      `- **Viewport:** ${item.viewport}`,
      `- **Comment:** ${item.comment}`,
      "",
    );
  });
  lines.push("Please address each numbered comment and summarize the result before closing this issue.");
  return lines.join("\n");
}

function feedbackIssueUrl(items) {
  const viewNames = [...new Set(items.map((item) => item.view))];
  const titleView = viewNames.length === 1 ? viewNames[0] : `${viewNames.length} views`;
  const parameters = new URLSearchParams({
    title: `[UI feedback] ${titleView} — ${items.length} comment${items.length === 1 ? "" : "s"}`,
    body: markdownFeedback(items),
    labels: "ui-feedback",
  });
  return `${feedbackRepositoryUrl}/issues/new?${parameters.toString()}`;
}

async function copyFeedbackText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    return copied;
  }
}

async function copySelectedFeedback() {
  const items = feedbackComments;
  if (!items.length) return;
  const text = markdownFeedback(items);
  const copied = await copyFeedbackText(text);
  if (copied) {
    setFeedbackStatus(`Copied all ${items.length} note${items.length === 1 ? "" : "s"}. Copying does not send or change their status.`, "success");
  } else {
    setFeedbackStatus("Clipboard access failed. Export the selected notes instead.", "warning");
  }
}

function exportSelectedFeedback() {
  const items = feedbackComments;
  if (!items.length) return;
  const payload = JSON.stringify({
    format: "polyglot-ui-feedback-v2",
    exportedAt: new Date().toISOString(),
    repository: feedbackRepositoryUrl,
    comments: items,
  }, null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `polyglot-ui-feedback-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
  setFeedbackStatus(`Exported a backup of all ${items.length} note${items.length === 1 ? "" : "s"}. Their status did not change.`, "success");
}

function buildFeedbackBatches(items) {
  const maxPreparedUrlLength = 6500;
  const grouped = new Map();
  items.forEach((item) => {
    if (!grouped.has(item.view)) grouped.set(item.view, []);
    grouped.get(item.view).push(item);
  });

  const batches = [];
  grouped.forEach((groupItems, view) => {
    let current = [];
    groupItems.forEach((item) => {
      const candidate = [...current, item];
      if (current.length && feedbackIssueUrl(candidate).length > maxPreparedUrlLength) {
        batches.push({ view, comments: current });
        current = [item];
      } else {
        current = candidate;
      }
    });
    if (current.length) batches.push({ view, comments: current });
  });

  return batches.map((batch, index) => ({
    ...batch,
    id: `batch-${index + 1}`,
    issueUrl: feedbackIssueUrl(batch.comments),
    requiresClipboard: feedbackIssueUrl(batch.comments).length > maxPreparedUrlLength,
  }));
}

function feedbackIssueNumber(issueUrl) {
  const match = issueUrl.match(/^https:\/\/github\.com\/MTarragano\/PolyglotInterlinearReader\/issues\/(\d+)(?:[/?#].*)?$/i);
  return match ? match[1] : "";
}

function renderPreparedFeedbackBatches() {
  feedbackGithubBatches.replaceChildren();
  feedbackGithubSummary.textContent = `${preparedFeedbackBatches.reduce((total, batch) => total + batch.comments.length, 0)} unsent notes need ${preparedFeedbackBatches.length} GitHub ${preparedFeedbackBatches.length === 1 ? "issue" : "issues"}. Open and submit each one on GitHub.`;

  preparedFeedbackBatches.forEach((batch, index) => {
    const submittedUrls = [...new Set(batch.comments.map((item) => item.submittedIssueUrl).filter(Boolean))];
    const allSubmitted = batch.comments.every((item) => item.submittedIssueUrl);
    const card = document.createElement("article");
    card.className = `feedback-github-batch${allSubmitted ? " is-submitted" : ""}`;
    const title = document.createElement("h3");
    title.textContent = `Issue ${index + 1}: ${batch.view}`;
    const detail = document.createElement("p");
    detail.textContent = `${batch.comments.length} note${batch.comments.length === 1 ? "" : "s"}${batch.requiresClipboard ? " · too large for URL prefill" : " · safely prefilled"}`;
    const actions = document.createElement("div");
    actions.className = "feedback-github-actions";
    const open = document.createElement("button");
    open.type = "button";
    open.className = "primary-action";
    open.disabled = allSubmitted;
    open.textContent = batch.requiresClipboard ? "Copy batch and open GitHub" : "Open prefilled GitHub issue";
    open.addEventListener("click", () => {
      if (batch.requiresClipboard) {
        window.open(`${feedbackRepositoryUrl}/issues/new`, "_blank", "noopener");
        copyFeedbackText(markdownFeedback(batch.comments)).then((copied) => {
          setFeedbackStatus(copied
            ? `Issue ${index + 1} was copied to the clipboard and GitHub was opened. Paste, review and submit it.`
            : `Clipboard access failed for issue ${index + 1}. Export the notes before continuing.`, "warning");
        });
      } else {
        window.open(batch.issueUrl, "_blank", "noopener");
        setFeedbackStatus(`Issue ${index + 1} opened prefilled. Review and submit it on GitHub, then return with its issue URL.`, "warning");
      }
    });
    actions.append(open);
    card.append(title, detail, actions);

    if (allSubmitted) {
      submittedUrls.forEach((url) => {
        const link = document.createElement("a");
        link.className = "feedback-issue-link";
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener";
        link.textContent = `Submitted as issue #${feedbackIssueNumber(url)}`;
        card.append(link);
      });
    } else {
      const confirmation = document.createElement("div");
      confirmation.className = "feedback-github-confirm";
      const input = document.createElement("input");
      input.type = "url";
      input.placeholder = `${feedbackRepositoryUrl}/issues/123`;
      input.setAttribute("aria-label", `Submitted issue URL for issue ${index + 1}`);
      const mark = document.createElement("button");
      mark.type = "button";
      mark.textContent = "Mark submitted";
      mark.addEventListener("click", () => {
        const issueUrl = input.value.trim();
        const issueNumber = feedbackIssueNumber(issueUrl);
        if (!issueNumber) {
          setFeedbackStatus("Paste a valid issue URL from this repository before marking notes submitted.", "warning");
          input.focus();
          return;
        }
        batch.comments.forEach((item) => {
          item.submittedIssueUrl = issueUrl;
          item.submittedAt = new Date().toISOString();
        });
        saveFeedbackComments();
        renderPreparedFeedbackBatches();
        setFeedbackStatus(`Marked ${batch.comments.length} note${batch.comments.length === 1 ? "" : "s"} submitted in GitHub issue #${issueNumber}.`, "success");
      });
      confirmation.append(input, mark);
      card.append(confirmation);
    }
    feedbackGithubBatches.append(card);
  });
}

function prepareSelectedFeedbackForGithub() {
  const items = selectedFeedbackComments();
  if (!items.length) return;
  preparedFeedbackBatches = buildFeedbackBatches(items);
  renderPreparedFeedbackBatches();
  feedbackGithubDialog.showModal();
  document.body.classList.add("feedback-dialog-open");
  setFeedbackStatus(`Prepared ${items.length} unsent note${items.length === 1 ? "" : "s"}. Nothing has been submitted yet.`, "warning");
}

function closeFeedbackGithubDialog() {
  if (feedbackGithubDialog.open) feedbackGithubDialog.close();
  document.body.classList.remove("feedback-dialog-open");
}

feedbackToggle.addEventListener("click", () => setFeedbackMode(true));
feedbackReviewToggle.addEventListener("click", () => {
  if (feedbackMode) {
    setFeedbackMode(false);
    return;
  }
  if (feedbackPanel.hidden) openFeedbackPanel();
  else closeFeedbackPanel();
});
document.querySelector("#feedback-panel-close").addEventListener("click", closeFeedbackPanel);
document.querySelector("#feedback-cancel").addEventListener("click", () => {
  closeFeedbackDialog();
  setFeedbackMode(false);
  openFeedbackPanel();
});
feedbackDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeFeedbackDialog();
  setFeedbackMode(false);
  openFeedbackPanel();
});
feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addFeedbackComment();
});

document.querySelector("#feedback-copy").addEventListener("click", copySelectedFeedback);
document.querySelector("#feedback-export").addEventListener("click", exportSelectedFeedback);
document.querySelector("#feedback-send-github").addEventListener("click", prepareSelectedFeedbackForGithub);
document.querySelector("#feedback-github-close").addEventListener("click", closeFeedbackGithubDialog);
feedbackGithubDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeFeedbackGithubDialog();
});

document.querySelector("#feedback-clear").addEventListener("click", () => {
  if (!feedbackComments.length || !window.confirm("Permanently delete every locally saved feedback note, including submitted-note history?")) return;
  feedbackComments = [];
  saveFeedbackComments();
  setFeedbackStatus("All locally saved feedback was deleted.", "warning");
});

document.addEventListener("pointermove", (event) => {
  if (!feedbackMode || event.pointerType === "touch" || event.target.closest("[data-feedback-ui]")) return;
  if (feedbackHoverTarget === event.target) return;
  if (feedbackHoverTarget) feedbackHoverTarget.classList.remove("feedback-hover-target");
  feedbackHoverTarget = event.target;
  feedbackHoverTarget.classList.add("feedback-hover-target");
}, { passive: true });

document.addEventListener("click", (event) => {
  if (!feedbackMode || event.target.closest("[data-feedback-ui]")) return;
  event.preventDefault();
  event.stopPropagation();
  openFeedbackDialog(event.target);
}, true);

window.addEventListener("resize", scheduleFeedbackPins);
window.addEventListener("scroll", scheduleFeedbackPins, true);
document.addEventListener("click", () => window.setTimeout(scheduleFeedbackPins, 0));

closeInspector();
render();
renderLibrary();
renderImportPreview();
setImportStage("source");
renderDictionary();
renderProgress();
switchView("library");
renderFeedback();
