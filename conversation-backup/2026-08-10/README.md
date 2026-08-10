# Conversation backup

This directory is a portable, readable export of locally stored Codex conversations. Each session is a separate Markdown file and `INDEX.md` links to every session.

The export deliberately excludes authentication data, browser state, system/developer instructions, hidden reasoning, tool calls and output, caches, and binary attachments. It preserves every locally recorded user message and every assistant message event, including progress updates. Credential-like strings in message text are redacted.

Regenerate on the Mac with:

```sh
python3 scripts/export_codex_conversations.py \
  --sessions ~/.codex/sessions \
  --archived-sessions ~/.codex/archived_sessions \
  --output conversation-backup/2026-08-10
```
