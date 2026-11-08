const cues = [
  {
    start: 0,
    end: 7.001,
    source: "我学习英语。",
    pinyin: "wǒ xuéxí Yīngyǔ",
    translation: "I learn English.",
    tokens: [
      { form: "我", pinyin: "wǒ", wordForWord: "I", gloss: "1SG" },
      { form: "学习", pinyin: "xuéxí", wordForWord: "learn", gloss: "learn" },
      { form: "英语", pinyin: "Yīngyǔ", wordForWord: "English", gloss: "English" },
      { form: "。", pinyin: "", wordForWord: ".", gloss: "PUNCT" },
    ],
  },
  {
    start: 9.001,
    end: 14.774,
    source: "我是初学者。",
    pinyin: "wǒ shì chūxuézhě",
    translation: "I'm only a beginner.",
    tokens: [
      { form: "我", pinyin: "wǒ", wordForWord: "I", gloss: "1SG" },
      { form: "是", pinyin: "shì", wordForWord: "be", gloss: "COP" },
      { form: "初学者", pinyin: "chūxuézhě", wordForWord: "beginner", gloss: "beginner" },
      { form: "。", pinyin: "", wordForWord: ".", gloss: "PUNCT" },
    ],
  },
  {
    start: 16.774,
    end: 24.976,
    source: "我还会出很多错误。",
    pinyin: "wǒ hái huì chū hěn duō cuòwù",
    translation: "I still make many mistakes.",
    tokens: [
      { form: "我", pinyin: "wǒ", wordForWord: "I", gloss: "1SG" },
      { form: "还", pinyin: "hái", wordForWord: "still", gloss: "still" },
      { form: "会", pinyin: "huì", wordForWord: "will / tend to", gloss: "MOD" },
      { form: "出", pinyin: "chū", wordForWord: "produce", gloss: "produce" },
      { form: "很多", pinyin: "hěn duō", wordForWord: "many", gloss: "many" },
      { form: "错误", pinyin: "cuòwù", wordForWord: "mistakes", gloss: "error" },
      { form: "。", pinyin: "", wordForWord: ".", gloss: "PUNCT" },
    ],
  },
];

const audio = document.querySelector("#audio");
const translation = document.querySelector("#sentence-translation");
const tokensElement = document.querySelector("#tokens");
const cueCounter = document.querySelector("#cue-counter");
const cueTime = document.querySelector("#cue-time");
const contextPrevious = document.querySelector("#context-previous");
const contextNext = document.querySelector("#context-next");
const focusedTokenLabel = document.querySelector("#focused-token");
const playButton = document.querySelector("#play");
const seek = document.querySelector("#seek");
const elapsed = document.querySelector("#elapsed");

let cueIndex = 0;
let tokenIndex = 0;

function pad(value, width = 2) {
  return String(value).padStart(width, "0");
}

function formatTimestamp(seconds, milliseconds = false) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const base = `${pad(mins)}:${pad(secs)}`;
  return milliseconds ? `${base}.${pad(Math.round((seconds % 1) * 1000), 3)}` : base;
}

function renderCue(index, keepFocus = false) {
  cueIndex = Math.max(0, Math.min(cues.length - 1, index));
  const cue = cues[cueIndex];
  if (!keepFocus) tokenIndex = 0;

  translation.textContent = cue.translation;
  cueCounter.textContent = `Sentence ${cueIndex + 1} of ${cues.length}`;
  cueTime.textContent = `${formatTimestamp(cue.start, true)}–${formatTimestamp(cue.end, true)}`;
  tokensElement.replaceChildren(
    ...cue.tokens.map((token, index) => {
      const stack = document.createElement("span");
      stack.className = "token-stack";
      stack.tabIndex = 0;
      stack.dataset.tokenIndex = index;
      stack.setAttribute("role", "button");
      const displayedGloss = token.form === "。" ? "" : token.gloss;
      stack.setAttribute("aria-label", `${token.form}, ${token.pinyin || "punctuation"}, gloss ${displayedGloss || "none"}`);

      for (const [className, value] of [
        ["token-original", token.form],
        ["token-pinyin", token.pinyin || " "],
        ["token-gloss", displayedGloss || " "],
      ]) {
        const row = document.createElement("span");
        row.className = className;
        row.textContent = value;
        stack.append(row);
      }

      stack.addEventListener("click", () => focusToken(index));
      stack.addEventListener("focus", () => focusToken(index));
      return stack;
    }),
  );
  renderContext(contextPrevious, cueIndex - 1, "Start of clip");
  renderContext(contextNext, cueIndex + 1, "End of clip");
  focusToken(Math.min(tokenIndex, cue.tokens.length - 1));
}

function renderContext(element, index, boundaryLabel) {
  const cue = cues[index];
  element.disabled = !cue;
  element.dataset.cueIndex = cue ? String(index) : "";
  element.querySelector(".context-original").textContent = cue?.source || boundaryLabel;
  element.querySelector(".context-translation").textContent = cue?.translation || "";
}

function focusToken(index) {
  const cue = cues[cueIndex];
  tokenIndex = Math.max(0, Math.min(cue.tokens.length - 1, index));
  for (const token of tokensElement.children) {
    token.classList.toggle("is-focused", Number(token.dataset.tokenIndex) === tokenIndex);
  }
  const token = cue.tokens[tokenIndex];
  focusedTokenLabel.textContent = `${token.form} · ${token.pinyin || "punctuation"} · ${token.wordForWord}`;
}

function markToken(status) {
  const token = tokensElement.children[tokenIndex];
  token.classList.remove("is-known", "is-learning");
  token.classList.add(`is-${status}`);
  focusToken(Math.min(tokenIndex + 1, cues[cueIndex].tokens.length - 1));
}

function seekCue(index) {
  renderCue(index);
  audio.currentTime = cues[cueIndex].start;
}

function cueForTime(time) {
  const exact = cues.findIndex((cue) => time >= cue.start && time < cue.end);
  if (exact >= 0) return exact;
  let nearest = 0;
  cues.forEach((cue, index) => {
    if (time >= cue.start) nearest = index;
  });
  return nearest;
}

for (const contextCue of [contextPrevious, contextNext]) {
  contextCue.addEventListener("click", () => {
    if (contextCue.dataset.cueIndex) seekCue(Number(contextCue.dataset.cueIndex));
  });
}

document.querySelector("#previous").addEventListener("click", () => seekCue(cueIndex - 1));
document.querySelector("#next").addEventListener("click", () => seekCue(cueIndex + 1));
document.querySelector("#rewind").addEventListener("click", () => {
  audio.currentTime = Math.max(0, audio.currentTime - 3);
});
document.querySelector("#forward").addEventListener("click", () => {
  audio.currentTime = Math.min(25, audio.currentTime + 3);
});
document.querySelector("#focus-previous").addEventListener("click", () => focusToken(tokenIndex - 1));
document.querySelector("#mark-learning").addEventListener("click", () => markToken("learning"));
document.querySelector("#mark-known").addEventListener("click", () => markToken("known"));
document.querySelector("#speed").addEventListener("change", (event) => {
  audio.playbackRate = Number(event.target.value);
});

playButton.addEventListener("click", () => {
  if (audio.paused) audio.play();
  else audio.pause();
});

audio.addEventListener("play", () => {
  playButton.textContent = "❚❚ Pause";
});

audio.addEventListener("pause", () => {
  playButton.textContent = "▶ Play";
});

audio.addEventListener("timeupdate", () => {
  if (audio.currentTime >= 25) {
    audio.pause();
    audio.currentTime = 24.976;
  }
  seek.value = audio.currentTime;
  elapsed.textContent = formatTimestamp(audio.currentTime);
  const activeCue = cueForTime(audio.currentTime);
  if (activeCue !== cueIndex) renderCue(activeCue);
});

seek.addEventListener("input", () => {
  audio.currentTime = Number(seek.value);
  renderCue(cueForTime(audio.currentTime));
});

document.addEventListener("keydown", (event) => {
  if (event.target.matches("input, select, button")) return;
  if (event.code === "Space") {
    event.preventDefault();
    playButton.click();
  }
  if (event.code === "ArrowLeft") focusToken(tokenIndex - 1);
  if (event.code === "ArrowRight") focusToken(tokenIndex + 1);
});

renderCue(0);
