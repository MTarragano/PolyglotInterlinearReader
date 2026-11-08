#!/usr/bin/env python3
"""Create a short MP3 sample with ID3v2.3 USLT and SYLT lyrics.

The source audio is copied frame-for-frame; it is not re-encoded. This keeps the
proof of concept dependency-free and makes the ID3 lyric payload reproducible.
"""

from __future__ import annotations

import argparse
import struct
from pathlib import Path


CUES = [
    {
        "start_ms": 0,
        "translation": "I learn English.",
        "source": "我学习英语。",
        "pinyin": "wǒ xuéxí Yīngyǔ",
        "gloss": "1SG · learn · English",
    },
    {
        "start_ms": 9001,
        "translation": "I'm only a beginner.",
        "source": "我是初学者。",
        "pinyin": "wǒ shì chūxuézhě",
        "gloss": "1SG · COP · beginner",
    },
    {
        "start_ms": 16774,
        "translation": "I still make many mistakes.",
        "source": "我还会出很多错误。",
        "pinyin": "wǒ hái huì chū hěn duō cuòwù",
        "gloss": "1SG · still · MOD · produce · many · error",
    },
]


def decode_syncsafe(value: bytes) -> int:
    if len(value) != 4 or any(byte & 0x80 for byte in value):
        raise ValueError("Invalid ID3 syncsafe integer")
    return (value[0] << 21) | (value[1] << 14) | (value[2] << 7) | value[3]


def encode_syncsafe(value: int) -> bytes:
    return bytes(
        [
            (value >> 21) & 0x7F,
            (value >> 14) & 0x7F,
            (value >> 7) & 0x7F,
            value & 0x7F,
        ]
    )


def id3_frame(frame_id: str, payload: bytes) -> bytes:
    return frame_id.encode("ascii") + struct.pack(">I", len(payload)) + b"\x00\x00" + payload


def encoded_text(text: str) -> bytes:
    return text.encode("utf-16")


def terminated_text(text: str) -> bytes:
    return encoded_text(text) + b"\x00\x00"


def text_frame(frame_id: str, text: str) -> bytes:
    return id3_frame(frame_id, b"\x01" + encoded_text(text))


def uslt_frame() -> bytes:
    blocks = []
    for cue in CUES:
        blocks.append(
            "\n".join(
                [
                    f"[{cue['start_ms'] / 1000:06.3f}]",
                    f"Translation: {cue['translation']}",
                    f"Original: {cue['source']}",
                    f"Pinyin: {cue['pinyin']}",
                    f"Gloss: {cue['gloss']}",
                ]
            )
        )
    payload = b"\x01" + b"mul" + terminated_text("Interlinear basics")
    payload += encoded_text("\n\n".join(blocks))
    return id3_frame("USLT", payload)


def sylt_frame() -> bytes:
    # Encoding 1 = UTF-16; timestamp format 2 = milliseconds; content type 1 = lyrics.
    payload = b"\x01" + b"mul" + b"\x02\x01" + terminated_text("Interlinear basics")
    for cue in CUES:
        text = "\n".join(
            [
                cue["translation"],
                cue["source"],
                cue["pinyin"],
                cue["gloss"],
            ]
        )
        payload += terminated_text(text) + struct.pack(">I", cue["start_ms"])
    return id3_frame("SYLT", payload)


def preserved_frames(tag_data: bytes) -> list[bytes]:
    frames: list[bytes] = []
    offset = 0
    # Playlist chapters and the original timing comment describe the full
    # 250-second source, so they must not be copied into the 25-second sample.
    replaced = {b"TIT2", b"USLT", b"SYLT", b"CHAP", b"CTOC", b"COMM"}
    while offset + 10 <= len(tag_data):
        frame_id = tag_data[offset : offset + 4]
        if frame_id == b"\x00\x00\x00\x00":
            break
        if not all(0x20 <= byte <= 0x7E for byte in frame_id):
            break
        size = struct.unpack(">I", tag_data[offset + 4 : offset + 8])[0]
        end = offset + 10 + size
        if size <= 0 or end > len(tag_data):
            break
        if frame_id not in replaced:
            frames.append(tag_data[offset:end])
        offset = end
    return frames


def mp3_frame_info(header_bytes: bytes) -> tuple[int, int] | None:
    if len(header_bytes) < 4:
        return None
    header = int.from_bytes(header_bytes, "big")
    if header >> 21 != 0x7FF:
        return None

    version_id = (header >> 19) & 0x3
    layer_id = (header >> 17) & 0x3
    bitrate_index = (header >> 12) & 0xF
    sample_rate_index = (header >> 10) & 0x3
    padding = (header >> 9) & 0x1
    if version_id == 1 or layer_id != 1 or bitrate_index in (0, 15) or sample_rate_index == 3:
        return None

    if version_id == 3:
        bitrate_kbps = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320][bitrate_index]
        sample_rate = [44100, 48000, 32000][sample_rate_index]
        samples_per_frame = 1152
        frame_length = (144 * bitrate_kbps * 1000) // sample_rate + padding
    else:
        bitrate_kbps = [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160][bitrate_index]
        base_rate = [44100, 48000, 32000][sample_rate_index]
        sample_rate = base_rate // (2 if version_id == 2 else 4)
        samples_per_frame = 576
        frame_length = (72 * bitrate_kbps * 1000) // sample_rate + padding

    return frame_length, samples_per_frame * 1000 // sample_rate


def select_audio_frames(audio: bytes, duration_ms: int) -> tuple[bytes, int, int]:
    offset = 0
    elapsed_ms = 0
    frame_count = 0
    chunks: list[bytes] = []
    while offset + 4 <= len(audio) and elapsed_ms < duration_ms:
        info = mp3_frame_info(audio[offset : offset + 4])
        if info is None:
            if frame_count == 0:
                offset += 1
                continue
            break
        frame_length, frame_duration_ms = info
        end = offset + frame_length
        if end > len(audio):
            break
        chunks.append(audio[offset:end])
        frame_count += 1
        elapsed_ms += frame_duration_ms
        offset = end
    if not chunks:
        raise ValueError("No MPEG Layer III audio frames found")
    return b"".join(chunks), frame_count, elapsed_ms


def patch_info_header(audio: bytes, frame_count: int) -> bytes:
    """Update the first-frame Xing/Info counts after lossless frame trimming."""
    mutable = bytearray(audio)
    marker_offset = -1
    marker = b""
    for candidate in (b"Info", b"Xing"):
        found = mutable.find(candidate, 0, min(len(mutable), 256))
        if found >= 0:
            marker_offset = found
            marker = candidate
            break
    if marker_offset < 0:
        return audio

    flags_offset = marker_offset + len(marker)
    flags = struct.unpack(">I", mutable[flags_offset : flags_offset + 4])[0]
    cursor = flags_offset + 4
    if flags & 0x1:
        mutable[cursor : cursor + 4] = struct.pack(">I", frame_count)
        cursor += 4
    if flags & 0x2:
        mutable[cursor : cursor + 4] = struct.pack(">I", len(mutable))
    return bytes(mutable)


def create_sample(source: Path, output: Path, duration_seconds: float) -> None:
    source_bytes = source.read_bytes()
    if source_bytes[:3] == b"ID3":
        original_tag_size = decode_syncsafe(source_bytes[6:10])
        original_tag_data = source_bytes[10 : 10 + original_tag_size]
        audio_start = 10 + original_tag_size
        frames = preserved_frames(original_tag_data)
    else:
        audio_start = 0
        frames = []

    frames.extend(
        [
            text_frame("TIT2", "Chinese interlinear sample · embedded lyrics"),
            uslt_frame(),
            sylt_frame(),
        ]
    )
    tag_payload = b"".join(frames) + (b"\x00" * 1024)
    tag = b"ID3\x03\x00\x00" + encode_syncsafe(len(tag_payload)) + tag_payload

    audio, frame_count, elapsed_ms = select_audio_frames(
        source_bytes[audio_start:], round(duration_seconds * 1000)
    )
    audio = patch_info_header(audio, frame_count)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_bytes(tag + audio)

    created = output.read_bytes()
    created_tag_size = decode_syncsafe(created[6:10])
    created_tag = created[10 : 10 + created_tag_size]
    present_ids = []
    offset = 0
    while offset + 10 <= len(created_tag):
        frame_id = created_tag[offset : offset + 4]
        if frame_id == b"\x00\x00\x00\x00":
            break
        size = struct.unpack(">I", created_tag[offset + 4 : offset + 8])[0]
        present_ids.append(frame_id.decode("ascii", errors="replace"))
        offset += 10 + size

    print(f"Created: {output}")
    print(f"Audio: {frame_count} copied MP3 frames, approximately {elapsed_ms / 1000:.3f} seconds")
    print(f"Embedded lyric frames: USLT={present_ids.count('USLT')}, SYLT={present_ids.count('SYLT')}")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path, help="Source MP3")
    parser.add_argument("output", type=Path, help="Output MP3")
    parser.add_argument("--seconds", type=float, default=25.0)
    args = parser.parse_args()
    create_sample(args.source, args.output, args.seconds)


if __name__ == "__main__":
    main()
