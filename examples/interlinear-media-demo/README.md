# Interlinear Caption Composer proof of concept

Naming used in this draft:

- **Interlinear Media Studio**: the overall media-creation feature.
- **Create interlinear media**: the end-to-end workflow.
- **Interlinear Caption Composer**: the screen/applet that arranges linguistic
  rows against timed media.
- **Compose & preview**: step 4 of the proposed five-step workflow.

The proposed workflow is: (1) import media, (2) transcribe and align, (3) add
linguistic annotation, (4) compose and preview, and (5) export and publish.

This example reuses the first 25 seconds and timing data from `Chinese English
1st Playlist.mp3`. The derived M4A is clipped to exactly 25 seconds. It adds
illustrative token alignment and four displayed text
layers:

1. Natural English translation
2. Original script
3. Hanyu Pinyin
4. Compact token glosses

Previous and next subtitles use spare space around the focus block. The
underlying JSON retains richer fields such as word-for-word values, but the
default presentation deliberately does not show them.

Open `index.html` through a local web server to see the audio-synchronised
interactive version. The sample also includes:

- `subtitles/reading.vtt`: broadly compatible, three-line captions.
- `subtitles/interlinear.vtt`: labelled four-line captions.
- `subtitles/interlinear.ass`: styled captions with illustrative karaoke
  timing. ASS is suitable for mpv/VLC and FFmpeg burn-in workflows.
- `interlinear-data.json`: the lossless token-level source for a reader,
  caption exporter, or video renderer.
- `assets/chinese-interlinear-sample.mp4`: a portable burned-in video sample.
- `assets/chinese-sample-embedded-lyrics.mp3`: a 25-second MP3 carrying both
  unsynchronised (`USLT`) and millisecond-timed (`SYLT`) ID3 lyric frames.
- `embed_lyrics.py`: a dependency-free, lossless MP3 frame trimmer and ID3v2.3
  lyric writer used to create that sample.

## Important distinction

Sentence timing already exists in the playlist manifest. True word highlighting
requires word timestamps, which are not present, so the ASS karaoke splits in
this proof of concept are illustrative rather than speech-aligned. A production
pipeline should add forced alignment and retain confidence/provenance for every
token.

MP3 timed-lyric support varies considerably between players. External VTT/LRC
tracks and interactive JSON remain the dependable choices; embedded ID3 lyrics
are an additional distribution option rather than the canonical annotation
store.

## Full-playlist YouTube renders

The example now also includes two full-length, 1920×1080 MP4 exports designed
for YouTube and speak-along study:

- `assets/youtube-chinese-interlinear.mp4` (22 cues, 4:10.8)
- `assets/youtube-arabic-interlinear.mp4` (21 cues, 3:00.1)

Each **interlinear page** contains only the four reader layers: natural English
translation, original script, transliteration (Pinyin for Chinese), and compact
token glosses. Each sentence is an **interlinear block**; the one currently
being spoken is the **focus block**. Focus moves from the top to the bottom of a
fixed page, then the page advances to the next group. The renderer fits four
short blocks, three medium blocks, or two long blocks rather than duplicating
information to fill the frame. A slim monochrome marker sits in the outside
gutter beside the focus block; it never covers the text. Thin rules separate
blocks, and both block and token spacing are kept compact. Arabic token groups
are laid out right-to-left.

`youtube-captions/` contains separately uploadable UTF-8 SRT and WebVTT tracks
for original script, English, and transliteration for each video. These are
toggleable YouTube caption alternatives; the four-layer interlinear display is
burned into the picture because conventional caption tracks cannot reproduce
the reader's token-column layout reliably.

The generic export inputs and rebuild tools are:

- `youtube-data/chinese.json` and `youtube-data/arabic.json`
- `build_playlist_video_data.py`
- `render_youtube_video.swift`
- `mux_media.swift`

The manually segmented transliterations and glosses are a layout-complete
prototype, not publication-ready linguistic data. They should be reviewed—or
replaced by authoritative backend annotations—before public release.
