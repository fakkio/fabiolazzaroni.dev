## Conventions

### Commit messages

Conventional Commits shape, with the type replaced by a [gitmoji](https://gitmoji.dev/): `<emoji>: message` or `<emoji>(scope): message`. See `docs/agents/commit.md` for the emoji table.

### Language

Commit messages and everything under `docs/` are written in English, regardless of the language used in conversation.

### Branching

Ticket group from a spec (`to-spec` → `to-tickets`): one `feature/` branch for the whole group, tickets and the spec issue close as they complete. One-off fix/tweak: commit straight to `develop`, no branch. See `docs/agents/branching.md`.

## Agent skills

### Issue tracker

Issues and specs live as GitHub issues in `fakkio/new-fabiolazzaroni.dev`. See `docs/agents/issue-tracker.md`.

### Triage labels

Default label vocabulary: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout — `CONTEXT.md` + `docs/adr/` at the repo root (neither exists yet; created lazily by `/domain-modeling`). See `docs/agents/domain.md`.
