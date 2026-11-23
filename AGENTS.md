# Repository Guidance

## Canonical Project Identity and Checkout

Treat `PolyglotInterlinearReader` as the single canonical project name and `MTarragano/PolyglotInterlinearReader` as the single canonical GitHub repository. Do not create another project, repository, workspace, or checkout merely because a displayed name differs in capitalization, spacing, or filesystem casing.

The canonical local checkout is `/Users/m.tarraganogmail.com/Sites/PolyglotInterlinearReader`. A historical duplicate previously existed at `/Users/m.tarraganogmail.com/Downloads/PolyglotInterlinearReader`; if that checkout or a stale project entry reappears, do not treat it as an independent project or the default work location.

Before deleting, moving, renaming, merging, or archiving either checkout, inspect its Git branch, status, remotes, and uncommitted changes. Preserve or reconcile unique work before changing the filesystem, and obtain explicit user authorization before removing or archiving a checkout.

For mobile, remote, or GitHub-based ChatGPT/Codex work, use the canonical GitHub repository and its `main` branch as the source of truth unless the user selects another branch. If both local project entries appear in Codex, continue in the canonical `Sites/PolyglotInterlinearReader` checkout and tell the user that the other entry is stale or historical. Do not invent a nickname or create another organizational entry to resolve the duplication.

## UI Feedback

Before starting visual UI work, inspect open GitHub issues whose title begins with `[UI feedback]` or which have the `ui-feedback` label. Treat unresolved element comments as current design requirements unless they conflict with a newer explicit user request.

When feedback has been addressed, summarize the implemented changes against the numbered comments and close the corresponding issue only when authorized to update GitHub.
