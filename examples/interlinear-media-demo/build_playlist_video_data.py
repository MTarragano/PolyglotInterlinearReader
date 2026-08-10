#!/usr/bin/env python3
"""Build full Chinese and Arabic interlinear video data and caption tracks."""

from __future__ import annotations

import csv
import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent
MEDIA = Path("/Users/m.tarraganogmail.com/Sites/media")


ZH = [
    [("我", "wǒ", "1SG"), ("学习", "xuéxí", "learn"), ("英语。", "Yīngyǔ", "English")],
    [("我", "wǒ", "1SG"), ("是", "shì", "COP"), ("初学者。", "chūxuézhě", "beginner")],
    [("我", "wǒ", "1SG"), ("还", "hái", "still"), ("会", "huì", "MOD"), ("出", "chū", "make"), ("很多", "hěn duō", "many"), ("错误。", "cuòwù", "mistakes")],
    [("我", "wǒ", "1SG"), ("不", "bù", "NEG"), ("明白", "míngbai", "understand"), ("这个", "zhège", "this"), ("词。", "cí", "word")],
    [("我", "wǒ", "1SG"), ("不", "bù", "NEG"), ("明白", "míngbai", "understand"), ("这个", "zhège", "this"), ("意思。", "yìsi", "meaning")],
    [("我", "wǒ", "1SG"), ("把", "bǎ", "BA"), ("它", "tā", "3SG"), ("忘", "wàng", "forget"), ("了。", "le", "PRF")],
    [("我", "wǒ", "1SG"), ("现在", "xiànzài", "now"), ("一时", "yīshí", "for-now"), ("记不起来", "jì-bu-qǐlái", "cannot-recall"), ("（这教材）", "zhè jiàocái", "this-material"), ("叫", "jiào", "be-called"), ("什么", "shénme", "what"), ("名字。", "míngzi", "name")],
    [("学习", "xuéxí", "learn"), ("外语", "wàiyǔ", "foreign-language")],
    [("学习", "xuéxí", "learning"), ("语言", "yǔyán", "languages"), ("是", "shì", "COP"), ("很", "hěn", "very"), ("有趣", "yǒuqù", "interesting"), ("的。", "de", "NMLZ")],
    [("是啊，", "shì a", "yes"), ("而且", "érqiě", "and"), ("我", "wǒ", "1SG"), ("也", "yě", "also"), ("会", "huì", "can"), ("说", "shuō", "speak"), ("一点", "yīdiǎn", "a-little"), ("意大利语。", "Yìdàlìyǔ", "Italian")],
    [("这些", "zhèxiē", "these"), ("语言", "yǔyán", "languages"), ("都", "dōu", "all"), ("是", "shì", "COP"), ("很", "hěn", "very"), ("相近", "xiāngjìn", "similar"), ("的。", "de", "NMLZ")],
    [("我", "wǒ", "1SG"), ("听得", "tīng-de", "hear-COMP"), ("很", "hěn", "very"), ("明白。", "míngbai", "clearly")],
    [("我们", "wǒmen", "1PL"), ("学习", "xuéxí", "learn"), ("一门", "yī-mén", "one-CL"), ("语言。", "yǔyán", "language")],
    [("我们", "wǒmen", "1PL"), ("要", "yào", "want"), ("理解／听懂", "lǐjiě / tīngdǒng", "understand"), ("人们（讲话）。", "rénmen (jiǎnghuà)", "people (speaking)")],
    [("我们", "wǒmen", "1PL"), ("想", "xiǎng", "want"), ("和", "hé", "with"), ("人们", "rénmen", "people"), ("说话／交谈。", "shuōhuà / jiāotán", "speak / converse")],
    [("他", "tā", "3SG"), ("在", "zài", "at"), ("大学", "dàxué", "university"), ("学", "xué", "study"), ("语言。", "yǔyán", "language")],
    [("他", "tā", "3SG"), ("会", "huì", "can"), ("说", "shuō", "speak"), ("很多种", "hěn-duō-zhǒng", "many-kinds"), ("语言。", "yǔyán", "languages")],
    [("你", "nǐ", "2SG"), ("学习", "xuéxí", "learn"), ("西班牙语。", "Xībānyáyǔ", "Spanish")],
    [("我", "wǒ", "1SG"), ("觉得，", "juéde", "think"), ("您", "nín", "2SG.POL"), ("说得", "shuō-de", "speak-COMP"), ("很好。", "hěn hǎo", "very-well")],
    [("您", "nín", "2SG.POL"), ("从", "cóng", "from"), ("哪里", "nǎlǐ", "where"), ("来？", "lái", "come")],
    [("您", "nín", "2SG.POL"), ("在", "zài", "PROG"), ("上", "shàng", "attend"), ("语言培训班", "yǔyán péixùnbān", "language-course"), ("吗？", "ma", "Q")],
    [("您的", "nín-de", "2SG.POL-POSS"), ("发音", "fāyīn", "pronunciation"), ("很好（准确）。", "hěn hǎo (zhǔnquè)", "very-good (accurate)")],
]


AR = [
    [("أنا", "ʾanā", "1SG"), ("أتعلم", "ʾataʿallam", "learn.IPFV"), ("الإنجليزية.", "al-ʾinglīziyyah", "DEF-English")],
    [("أنا", "ʾanā", "1SG"), ("مجرد", "mujarrad", "merely"), ("مبتدئ.", "mubtadiʾ", "beginner")],
    [("وما", "wa-mā", "and-NEG"), ("أزال", "ʾazālu", "cease.1SG"), ("أعمل", "ʾaʿmalu", "make.1SG"), ("أخطاء", "ʾakhṭāʾ", "mistakes"), ("كثيرة.", "kathīrah", "many")],
    [("لا", "lā", "NEG"), ("أفهم", "ʾafhamu", "understand.1SG"), ("الكلمة.", "al-kalimah", "DEF-word")],
    [("لا", "lā", "NEG"), ("أفهم", "ʾafhamu", "understand.1SG"), ("المعنى.", "al-maʿnā", "DEF-meaning")],
    [("لقد", "laqad", "indeed"), ("نسيته", "nasītuhu", "forget.PST.1SG-it"), ("للتو.", "li-l-taww", "just-now")],
    [("لا", "lā", "NEG"), ("أعرف", "ʾaʿrifu", "know.1SG"), ("اسمه", "ismahu", "name-his"), ("في", "fī", "in"), ("الوقت", "al-waqt", "DEF-time"), ("الحالي.", "al-ḥālī", "current")],
    [("تعلم", "taʿallumu", "learning"), ("اللغات", "al-lughāt", "DEF-languages"), ("شيء", "shayʾ", "thing"), ("ممتع.", "mumtiʿ", "enjoyable")],
    [("نعم،", "naʿam", "yes"), ("وأتكلم", "wa-ʾatakallamu", "and-speak.1SG"), ("أيضًا", "ʾayḍan", "also"), ("شيئاً", "shayʾan", "something"), ("من", "min", "of"), ("الإيطالية.", "al-ʾīṭāliyyah", "DEF-Italian")],
    [("اللغات", "al-lughāt", "DEF-languages"), ("متشابهة", "mutashābihah", "similar"), ("إلى", "ʾilā", "to"), ("حد", "ḥadd", "extent"), ("ما.", "mā", "somewhat")],
    [("أستطيع", "ʾastaṭīʿu", "can.1SG"), ("أن", "ʾan", "COMP"), ("أفهمها", "ʾafhamahā", "understand.1SG-it"), ("جيدًا.", "jayyidan", "well")],
    [("نحن", "naḥnu", "1PL"), ("نتعلم", "nataʿallamu", "learn.IPFV.1PL"), ("لغة.", "lughah", "language")],
    [("نحن", "naḥnu", "1PL"), ("نريد", "nurīdu", "want.1PL"), ("أن", "ʾan", "COMP"), ("نفهم", "nafhamu", "understand.1PL"), ("الناس.", "al-nās", "DEF-people")],
    [("نريد", "nurīdu", "want.1PL"), ("أن", "ʾan", "COMP"), ("نتكلم", "natakallama", "speak.1PL"), ("مع", "maʿa", "with"), ("الناس.", "al-nās", "DEF-people")],
    [("هو", "huwa", "3MSG"), ("يدرس", "yadrusu", "study.IPFV.3MSG"), ("لغات.", "lughāt", "languages")],
    [("هو", "huwa", "3MSG"), ("يتكلم", "yatakallamu", "speak.IPFV.3MSG"), ("عدّة", "ʿiddata", "several"), ("لغات.", "lughāt", "languages")],
    [("أنت", "ʾanta", "2MSG"), ("تتعلم", "tataʿallamu", "learn.IPFV.2MSG"), ("الأسبانية.", "al-ʾisbāniyyah", "DEF-Spanish")],
    [("أرى", "ʾarā", "see.1SG"), ("أنك", "ʾannaka", "that-2MSG"), ("تتكلم", "tatakallamu", "speak.2MSG"), ("بشكل", "bi-shakl", "in-manner"), ("جيد", "jayyid", "good"), ("جدًا.", "jiddan", "very")],
    [("من", "min", "from"), ("أين", "ʾayna", "where"), ("أنت؟", "ʾanta", "2MSG")],
    [("هل", "hal", "Q"), ("أنت", "ʾanta", "2MSG"), ("تتعلم", "tataʿallamu", "learn.2MSG"), ("في", "fī", "in"), ("دورة", "dawrah", "course"), ("لغوية؟", "lughawiyyah", "language.ADJ")],
    [("نطقك", "nuṭquka", "pronunciation-your"), ("جيد", "jayyid", "good"), ("تماماً.", "tamāman", "completely")],
]


def timestamp(ms: int, separator: str = ".") -> str:
    hours, remainder = divmod(ms, 3_600_000)
    minutes, remainder = divmod(remainder, 60_000)
    seconds, millis = divmod(remainder, 1000)
    return f"{hours:02}:{minutes:02}:{seconds:02}{separator}{millis:03}"


def write_tracks(slug: str, cues: list[dict]) -> None:
    tracks = {
        "original": lambda cue: "".join(token["surface"] for token in cue["tokens"]),
        "english": lambda cue: cue["translation"],
        "transliteration": lambda cue: " ".join(token["transliteration"] for token in cue["tokens"]),
    }
    output_dir = ROOT / "youtube-captions"
    output_dir.mkdir(exist_ok=True)
    for label, getter in tracks.items():
        vtt = ["WEBVTT", ""]
        srt = []
        for index, cue in enumerate(cues, 1):
            value = getter(cue)
            vtt.extend([str(index), f"{timestamp(cue['startMs'])} --> {timestamp(cue['endMs'])}", value, ""])
            srt.extend([str(index), f"{timestamp(cue['startMs'], ',')} --> {timestamp(cue['endMs'], ',')}", value, ""])
        (output_dir / f"{slug}-{label}.vtt").write_text("\n".join(vtt), encoding="utf-8")
        (output_dir / f"{slug}-{label}.srt").write_text("\n".join(srt), encoding="utf-8")


def build(slug: str, language: str, direction: str, manifest: Path, verification: Path, annotations: list[list[tuple[str, str, str]]]) -> None:
    with manifest.open(encoding="utf-8-sig", newline="") as handle:
        rows = list(csv.DictReader(handle))
    if len(rows) != len(annotations):
        raise ValueError(f"{language}: {len(rows)} manifest rows but {len(annotations)} annotation rows")
    duration = json.loads(verification.read_text(encoding="utf-8"))["duration_seconds"]
    cues = []
    for row, token_rows in zip(rows, annotations, strict=True):
        tokens = [
            {"surface": surface, "transliteration": transliteration, "gloss": gloss}
            for surface, transliteration, gloss in token_rows
        ]
        cues.append(
            {
                "id": row["number"],
                "startMs": int(row["start_ms"]),
                "endMs": int(row["end_ms"]),
                "translation": row.get("english") or row.get("en"),
                "tokens": tokens,
            }
        )
    payload = {
        "language": language,
        "direction": direction,
        "durationSeconds": duration,
        "cues": cues,
        "annotationStatus": "provisional video-layout glosses; backend review required",
    }
    output_dir = ROOT / "youtube-data"
    output_dir.mkdir(exist_ok=True)
    (output_dir / f"{slug}.json").write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    write_tracks(slug, cues)
    print(f"{language}: {len(cues)} cues, {duration:.3f}s")


def main() -> None:
    build(
        "chinese",
        "Chinese",
        "ltr",
        MEDIA / "Chinese/Chinese English 1st Playlist manifest.csv",
        MEDIA / "Chinese/verification.json",
        ZH,
    )
    build(
        "arabic",
        "Arabic",
        "rtl",
        MEDIA / "Arabic/Arabic English 1st Playlist manifest.csv",
        MEDIA / "Arabic/verification.json",
        AR,
    )


if __name__ == "__main__":
    main()
