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
  wordSort: "knowledge",
  wordListView: "compact",
  knowledge: {},
  visibleRows: new Set(["transliteration", "morphs", "gloss", "lemma", "pos", "features"]),
};

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

  stack.append(row("surface", entityButton(clozeValue("surface", token.surface), "token", token)));

  if (state.visibleRows.has("transliteration") && token.transliteration) {
    stack.append(row("transliteration", clozeValue("transliteration", transformTransliteration(token.transliteration))));
  }
  if (state.visibleRows.has("morphs") && token.morphs) {
    const morphText = clozeValue("morphs", transformTransliteration(token.morphs));
    stack.append(row("morphs", state.clozeMode === "off" ? morphemeButtons(morphText, token) : morphText));
  }
  if (state.visibleRows.has("gloss") && token.gloss) {
    stack.append(row("gloss", token.gloss));
  }
  if (state.visibleRows.has("lemma") && token.lemma) {
    stack.append(row("lemma", entityButton(clozeValue("lemma", transformTransliteration(token.lemma)), "lemma", token)));
  }
  if (state.visibleRows.has("root") && token.root) {
    stack.append(row("root", entityButton(clozeValue("root", transformTransliteration(token.root)), "root", token)));
  }
  if (state.visibleRows.has("pos") && token.pos) {
    stack.append(row("pos", entityButton(token.pos, "part of speech", token)));
  }
  if (state.visibleRows.has("features") && token.features.length) {
    const holder = document.createElement("span");
    token.features.forEach((feature) => holder.append(featureButton(feature, token)));
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

function entityButton(label, type, token) {
  const button = document.createElement("button");
  button.className = "clickable";
  button.type = "button";
  button.textContent = label;
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    inspect(type, label, token);
  });
  return button;
}

function clozeValue(rowName, value) {
  if (state.clozeMode === "off" || !answerRevealingRows.has(rowName) || value === "." || value === "," || !value) {
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

function morphemeButtons(value, token) {
  const span = document.createElement("span");
  value.split("-").forEach((piece, index, all) => {
    span.append(entityButton(piece, "morpheme", token));
    if (index < all.length - 1) span.append("-");
  });
  return span;
}

function featureButton(feature, token) {
  const button = document.createElement("button");
  button.className = "clickable feature-pill";
  button.type = "button";
  button.textContent = feature;
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    inspect("grammar feature", feature, token);
  });
  return button;
}

function selectToken(sentenceIndex, tokenIndex, token) {
  state.selected = { sentenceIndex, tokenIndex };
  state.current = { sentenceIndex, tokenIndex };
  state.activeSentence = sentenceIndex;
  inspect("token", token.surface, token);
  render();
}

function inspect(type, label, token) {
  openInspector();
  inspectTitle.textContent = label;
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

function baseKnowledge(token) {
  const seed = Array.from(`${state.language}:${token.lemma || token.surface}`).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return Math.min(95, Math.max(5, seed % 100));
}

function knowledgeScore(token) {
  const key = knowledgeKey(token);
  if (state.knowledge[key] === undefined) {
    state.knowledge[key] = baseKnowledge(token);
  }
  return state.knowledge[key];
}

function updateKnowledge(delta) {
  const token = currentToken();
  if (!token || token.pos === "PUNCT") return;
  const key = knowledgeKey(token);
  state.knowledge[key] = Math.min(100, Math.max(0, knowledgeScore(token) + delta));
  inspect("token", token.surface, token);
  render();
}

function targetValue(token, frequency) {
  return Math.min(100, Math.round((100 - knowledgeScore(token)) * 0.55 + frequency * 12));
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
    knowledge: knowledgeScore(item.token),
    target: targetValue(item.token, item.frequency),
  }));
}

function renderWordList() {
  const words = collectWords();
  words.sort((a, b) => {
    if (state.wordSort === "target") return b.target - a.target;
    if (state.wordSort === "frequency") return b.frequency - a.frequency;
    if (state.wordSort === "alphabetic") return (a.token.lemma || a.token.surface).localeCompare(b.token.lemma || b.token.surface);
    return a.knowledge - b.knowledge;
  });

  wordListContent.replaceChildren(...words.map(renderWordCard));
}

function renderWordCard(word) {
  const card = document.createElement("article");
  card.className = `word-card word-card-${state.wordListView}`;
  const display = state.wordListView === "cloze" ? "_____" : word.token.surface;
  card.innerHTML = `
    <div>
      <strong>${escapeHtml(display)}</strong>
      <span>${escapeHtml(word.token.lemma)} · ${escapeHtml(word.token.gloss)}</span>
    </div>
    <div><span>Knowledge</span><div class="meter"><i style="width:${word.knowledge}%"></i></div><span>${word.knowledge}/100</span></div>
    <div><span>Target</span><strong>${word.target}</strong></div>
    <div><span>Text freq.</span><strong>${word.frequency}</strong></div>
  `;
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
  document.querySelector(".language-tabs").hidden = !isReader && state.view !== "library";
}

function switchLanguage(language) {
  state.language = language;
  state.activeSentence = 0;
  state.progress = 0;
  state.selected = null;
  state.current = { sentenceIndex: 0, tokenIndex: 0 };
  state.customSettings = false;
  document.querySelectorAll(".tab").forEach((item) => item.classList.toggle("is-active", item.dataset.language === language));
  render();
}

function renderLibrary() {
  const cards = Object.entries(samples).map(([key, sample]) => {
    const words = collectWordsForLanguage(key);
    const known = Math.round(words.reduce((sum, item) => sum + item.knowledge, 0) / Math.max(1, words.length));
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
  const lines = importText.value
    .split(/\n+/)
    .flatMap((line) => line.split(/(?<=[.!?؟])\s+/))
    .map((line) => line.trim())
    .filter(Boolean);
  importPreviewList.replaceChildren(
    ...lines.map((line, index) => {
      const item = document.createElement("li");
      item.innerHTML = `<strong>${index + 1}</strong><span>${escapeHtml(line)}</span>`;
      return item;
    }),
  );
}

const dictionaryEntities = [
  {
    label: "ev",
    type: "Lemma",
    language: "Turkish",
    meaning: "house, home",
    source: "Corpus-derived plus learner note",
    examples: ["Evlerimizden geldik.", "Sonra evde kahve içeceğiz."],
    related: ["Case=Abl", "Case=Loc", "Poss=1Pl"],
  },
  {
    label: "k-t-b",
    type: "Root",
    language: "Arabic / Hebrew",
    meaning: "writing, inscription",
    source: "Parser-produced root with corpus examples",
    examples: ["يكتب المعلّم الدرس.", "היא כותבת מכתב."],
    related: ["כתב", "كتب", "Participle"],
  },
  {
    label: "Case=Abl",
    type: "Grammar feature",
    language: "Language-independent",
    meaning: "movement or origin away from a source",
    source: "Grammar feature registry draft",
    examples: ["Evlerimizden geldik.", "I went from the house."],
    related: ["ev", "من", "ABL cloze"],
  },
];

function renderDictionary(selected = dictionaryEntities[0]) {
  const query = document.querySelector("#dictionary-search").value.toLowerCase();
  const visible = dictionaryEntities.filter((entity) => `${entity.label} ${entity.type} ${entity.meaning}`.toLowerCase().includes(query));
  const current = visible.some((entity) => entity.label === selected.label) ? selected : visible[0] || dictionaryEntities[0];
  entityList.replaceChildren(
    ...visible.map((entity) => {
      const button = document.createElement("button");
      button.className = `entity-row ${entity.label === current.label ? "is-active" : ""}`;
      button.type = "button";
      button.innerHTML = `<strong>${escapeHtml(entity.label)}</strong><span>${escapeHtml(entity.type)} · ${escapeHtml(entity.language)}</span>`;
      button.addEventListener("click", () => renderDictionary(entity));
      return button;
    }),
  );
  renderEntityDetail(current);
}

function renderEntityDetail(entity) {
  entityDetail.innerHTML = `
    <div class="eyebrow">${escapeHtml(entity.type)}</div>
    <h2>${escapeHtml(entity.label)}</h2>
    <p class="entity-meaning">${escapeHtml(entity.meaning)}</p>
    <dl class="detail-list">
      <div><dt>Language</dt><dd>${escapeHtml(entity.language)}</dd></div>
      <div><dt>Source layer</dt><dd>${escapeHtml(entity.source)}</dd></div>
    </dl>
    <h3>Corpus examples</h3>
    <ul>${entity.examples.map((example) => `<li>${escapeHtml(example)}</li>`).join("")}</ul>
    <h3>Related entities</h3>
    <div class="tag-row">${entity.related.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
  `;
}

function renderProgress() {
  const allWords = Object.keys(samples).flatMap(collectWordsForLanguage);
  const knownAverage = Math.round(allWords.reduce((sum, item) => sum + item.knowledge, 0) / Math.max(1, allWords.length));
  const cards = [
    ["Reading progress", "68%", "4 active texts, 10 sentences drafted"],
    ["Known word score", `${knownAverage}%`, `${allWords.length} tracked lemmas across samples`],
    ["Cloze success", "74%", "Word, gloss, and morpheme hiding modes"],
    ["Speaking practice", "12", "Recorded attempts planned for TTS pass"],
  ];
  progressGrid.replaceChildren(
    ...cards.map(([title, value, copy]) => {
      const card = document.createElement("article");
      card.className = "progress-card";
      card.innerHTML = `<span>${escapeHtml(title)}</span><strong>${escapeHtml(value)}</strong><p>${escapeHtml(copy)}</p>`;
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

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    switchLanguage(tab.dataset.language);
    if (state.view === "library") renderLibrary();
  });
});

document.querySelectorAll(".app-nav-button").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

document.querySelectorAll("[data-switch-view]").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.switchView));
});

importText.addEventListener("input", renderImportPreview);

document.querySelector("#mock-import-confirm").addEventListener("click", () => {
  document.querySelector("#import-title").value = document.querySelector("#import-title").value || "Untitled import";
  switchView("library");
});

document.querySelector("#dictionary-search").addEventListener("input", () => renderDictionary());

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
  setVisibleRows(rowPresets[event.target.value]);
  if (event.target.value === "cloze") {
    state.clozeMode = "blank";
    document.querySelector("#cloze-mode").value = "blank";
  }
});

document.querySelector("#cloze-mode").addEventListener("change", (event) => {
  state.clozeMode = event.target.value;
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
  if (event.target.matches("input, select, textarea")) return;
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
    updateKnowledge(8);
  } else if (event.key === "ArrowDown") {
    event.preventDefault();
    updateKnowledge(-8);
  }
});

closeInspector();
render();
renderLibrary();
renderImportPreview();
renderDictionary();
renderProgress();
switchView("library");
