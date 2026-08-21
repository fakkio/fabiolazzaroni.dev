# Commit message conventions

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) shape, with the type word replaced by a [gitmoji](https://gitmoji.dev/):

```
<emoji>: subject
<emoji>(scope): subject
```

- Subject in English, imperative mood ("add", not "added"/"adds").
- `(scope)` is optional — the area of the repo touched (e.g. `(blog)`, `(deploy)`).
- One emoji per commit, matching the dominant change. If a commit mixes concerns, split it instead of stacking emoji.

## Emoji table

The core set, mapped to the Conventional Commits type it replaces:

| Emoji | Code                         | Conventional type   | Use for                                |
| ----- |------------------------------|---------------------|----------------------------------------|
| ✨    | `:sparkles:`                 | feat                | A new feature                          |
| 🐛    | `:bug:`                      | fix                 | A bug fix                              |
| 📝    | `:memo:`                     | docs                | Documentation only                     |
| 🎨    | `:art:`                      | style               | Code structure/format, no logic change |
| ♻️    | `:recycle:`                  | refactor            | Refactor without behaviour change      |
| ⚡️    | `:zap:`                      | perf                | Performance improvement                |
| ✅    | `:white_check_mark:`         | test                | Add or fix tests                       |
| 📦️    | `:package:`                  | build               | Build system or dependency output      |
| 👷    | `:construction_worker:`      | ci                  | CI configuration                       |
| 🔧    | `:wrench:`                   | chore               | Tooling/config, no source change       |
| ⏪️    | `:rewind:`                   | revert              | Revert a previous commit               |

Extras used often enough to standardise, outside the Conventional Commits type list:

| Emoji | Code             | Use for                                   |
|-------|------------------|-------------------------------------------|
| 🎉    | `:tada:`         | Initial commit / start a project          |
| 🔥    | `:fire:`         | Remove code or files                      |
| 💥    | `:boom:`         | Breaking change                           |
| 🚑️    | `:ambulance:`    | Critical hotfix                           |
| 🔒️    | `:lock:`         | Security fix                              |
| 🚧    | `:construction:` | Work in progress, not meant to ship as-is |

If a change doesn't fit any row above, pick the closest match from the full catalog at [gitmoji.dev](https://gitmoji.dev/) rather than inventing a new emoji for it.

## When a skill says "commit your work"

Use this format instead of a plain Conventional Commits type.
