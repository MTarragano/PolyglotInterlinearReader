#!/usr/bin/env python3
"""Export locally stored Codex conversations as readable Markdown.

Only user and assistant conversation events are exported. Authentication,
system/developer instructions, reasoning, tool calls, tool output, caches, and
binary attachments are deliberately omitted.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Iterable


SECRET_PATTERNS = (
    re.compile(r"\bsk-[A-Za-z0-9_-]{20,}\b"),
    re.compile(r"\bgh[pousr]_[A-Za-z0-9]{20,}\b"),
    re.compile(r"\bgithub_pat_[A-Za-z0-9_]{20,}\b"),
    re.compile(r"\bAKIA[0-9A-Z]{16}\b"),
    re.compile(
        r"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----.*?"
        r"-----END (?:RSA |EC |OPENSSH )?PRIVATE KEY-----",
        re.DOTALL,
    ),
)


@dataclass(frozen=True)
class Message:
    timestamp: str
    role: str
    text: str


@dataclass(frozen=True)
class Conversation:
    session_id: str
    started_at: str
    source_group: str
    source_file: Path
    cwd: str
    messages: tuple[Message, ...]
    redactions: int


def redact_secrets(text: str) -> tuple[str, int]:
    count = 0
    for pattern in SECRET_PATTERNS:
        text, substitutions = pattern.subn("[REDACTED CREDENTIAL]", text)
        count += substitutions
    return text, count


def read_conversation(path: Path, source_group: str) -> Conversation | None:
    metadata: dict[str, Any] = {}
    messages: list[Message] = []
    redactions = 0

    with path.open("r", encoding="utf-8") as handle:
        for line_number, line in enumerate(handle, start=1):
            try:
                event = json.loads(line)
            except json.JSONDecodeError as error:
                raise ValueError(f"Invalid JSON in {path}:{line_number}: {error}") from error

            event_type = event.get("type")
            payload = event.get("payload") or {}
            if event_type == "session_meta":
                metadata = payload
                continue
            if event_type != "event_msg":
                continue

            payload_type = payload.get("type")
            if payload_type == "user_message":
                role = "User"
            elif payload_type == "agent_message":
                role = "Assistant"
            else:
                continue

            message = payload.get("message")
            if not isinstance(message, str) or not message.strip():
                continue
            message, message_redactions = redact_secrets(message.rstrip())
            redactions += message_redactions
            messages.append(
                Message(
                    timestamp=str(event.get("timestamp") or ""),
                    role=role,
                    text=message,
                )
            )

    if not messages:
        return None

    session_id = str(metadata.get("session_id") or metadata.get("id") or path.stem)
    started_at = str(metadata.get("timestamp") or messages[0].timestamp)
    cwd = str(metadata.get("cwd") or "")
    return Conversation(
        session_id=session_id,
        started_at=started_at,
        source_group=source_group,
        source_file=path,
        cwd=cwd,
        messages=tuple(messages),
        redactions=redactions,
    )


def first_line(text: str, limit: int = 100) -> str:
    compact = " ".join(text.split())
    if not compact:
        return "Untitled conversation"
    return compact if len(compact) <= limit else compact[: limit - 1].rstrip() + "…"


def markdown_escape(text: str) -> str:
    return text.replace("|", "\\|").replace("\n", " ")


def conversation_filename(conversation: Conversation) -> str:
    # A parent conversation and its internal review/delegation sessions can share
    # a session ID, while every rollout filename is unique within its source set.
    return f"{conversation.source_group}_{conversation.source_file.stem}.md"


def render_conversation(conversation: Conversation, exported_at: str) -> str:
    first_user = next(
        (message.text for message in conversation.messages if message.role == "User"),
        "Untitled conversation",
    )
    title = first_line(first_user)
    lines = [
        f"# {title}",
        "",
        f"- Session ID: `{conversation.session_id}`",
        f"- Started: `{conversation.started_at}`",
        f"- Local status: `{conversation.source_group}`",
        f"- Original workspace: `{conversation.cwd or 'unknown'}`",
        f"- Exported: `{exported_at}`",
        "- Scope: user and assistant messages; attachments and internal execution records omitted",
        "",
    ]
    if conversation.redactions:
        lines.extend(
            [
                f"> {conversation.redactions} credential-like value(s) were replaced with "
                "`[REDACTED CREDENTIAL]`.",
                "",
            ]
        )

    for message in conversation.messages:
        timestamp = f" — `{message.timestamp}`" if message.timestamp else ""
        lines.extend([f"## {message.role}{timestamp}", "", message.text, ""])
    return "\n".join(lines).rstrip() + "\n"


def iter_sources(active: Path, archived: Path) -> Iterable[tuple[Path, str]]:
    for path in sorted(active.rglob("*.jsonl")):
        yield path, "active"
    for path in sorted(archived.rglob("*.jsonl")):
        yield path, "archived"


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for block in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def export(active: Path, archived: Path, output: Path) -> None:
    exported_at = datetime.now(timezone.utc).replace(microsecond=0).isoformat()
    conversations = [
        conversation
        for path, source_group in iter_sources(active, archived)
        if (conversation := read_conversation(path, source_group)) is not None
    ]
    conversations.sort(key=lambda item: (item.started_at, item.session_id))

    output.mkdir(parents=True, exist_ok=True)
    conversation_dir = output / "conversations"
    conversation_dir.mkdir(parents=True, exist_ok=True)

    expected_names: set[str] = set()
    manifest: list[dict[str, Any]] = []
    index_rows: list[str] = []
    for conversation in conversations:
        filename = conversation_filename(conversation)
        expected_names.add(filename)
        destination = conversation_dir / filename
        destination.write_text(
            render_conversation(conversation, exported_at), encoding="utf-8"
        )
        first_user = next(
            (message.text for message in conversation.messages if message.role == "User"),
            "Untitled conversation",
        )
        title = first_line(first_user)
        user_count = sum(message.role == "User" for message in conversation.messages)
        assistant_count = sum(
            message.role == "Assistant" for message in conversation.messages
        )
        relative_link = f"conversations/{filename}"
        index_rows.append(
            f"| {conversation.started_at[:10]} | {conversation.source_group} | "
            f"[{markdown_escape(title)}]({relative_link}) | {user_count} | "
            f"{assistant_count} |"
        )
        manifest.append(
            {
                "session_id": conversation.session_id,
                "started_at": conversation.started_at,
                "status": conversation.source_group,
                "title": title,
                "export_file": relative_link,
                "source_size_bytes": conversation.source_file.stat().st_size,
                "source_sha256": sha256(conversation.source_file),
                "user_messages": user_count,
                "assistant_messages": assistant_count,
                "credential_redactions": conversation.redactions,
            }
        )

    for stale_file in conversation_dir.glob("*.md"):
        if stale_file.name not in expected_names:
            stale_file.unlink()

    index = [
        "# Local Codex conversation backup",
        "",
        f"Exported `{len(conversations)}` locally stored conversations on `{exported_at}`.",
        "",
        "| Started | Status | Conversation | User messages | Assistant messages |",
        "| --- | --- | --- | ---: | ---: |",
        *index_rows,
        "",
    ]
    (output / "INDEX.md").write_text("\n".join(index), encoding="utf-8")
    (output / "manifest.json").write_text(
        json.dumps(
            {"exported_at": exported_at, "conversation_count": len(manifest), "sessions": manifest},
            indent=2,
            ensure_ascii=False,
        )
        + "\n",
        encoding="utf-8",
    )
    (output / "README.md").write_text(
        "# Conversation backup\n\n"
        "This directory is a portable, readable export of locally stored Codex "
        "conversations. Each session is a separate Markdown file and `INDEX.md` "
        "links to every session.\n\n"
        "The export deliberately excludes authentication data, browser state, "
        "system/developer instructions, hidden reasoning, tool calls and output, "
        "caches, and binary attachments. It preserves every locally recorded user "
        "message and every assistant message event, including progress updates. "
        "Credential-like strings in message text are redacted.\n\n"
        "Regenerate on the Mac with:\n\n"
        "```sh\n"
        "python3 scripts/export_codex_conversations.py \\\n"
        "  --sessions ~/.codex/sessions \\\n"
        "  --archived-sessions ~/.codex/archived_sessions \\\n"
        "  --output conversation-backup/2026-08-10\n"
        "```\n",
        encoding="utf-8",
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--sessions", type=Path, required=True)
    parser.add_argument("--archived-sessions", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    export(args.sessions.expanduser(), args.archived_sessions.expanduser(), args.output)


if __name__ == "__main__":
    main()
