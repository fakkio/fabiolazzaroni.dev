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

The full [gitmoji.dev](https://gitmoji.dev/) catalogue, in its own order, with the official descriptions. The "Conventional type" column marks the emoji that replace a Conventional Commits type word.

Pick the **most specific** row that fits, not the first plausible one. Cases that have gone wrong here before:

- Dependency updates (`npm update`, version bumps of packages) → ⬆️, not 📦️. 📦️ is for compiled files or packages you produce.
- Visual regression baselines → 📸, not ✅.
- Development scripts (`package.json` scripts, `scripts/`) → 🔨, not 🔧.
- Images, logos and other static assets → 🍱.
- Version bump on a release branch → 🔖; merge commits → 🔀 (see `docs/agents/release.md`).

| Emoji | Code | Conventional type | Use for |
|-------|------|-------------------|---------|
| 🎨 | `:art:` | style | Improve structure / format of the code |
| ⚡️ | `:zap:` | perf | Improve performance |
| 🔥 | `:fire:` |  | Remove code or files |
| 🐛 | `:bug:` | fix | Fix a bug |
| 🚑️ | `:ambulance:` |  | Critical hotfix |
| ✨ | `:sparkles:` | feat | Introduce new features |
| 📝 | `:memo:` | docs | Add or update documentation |
| 🚀 | `:rocket:` |  | Deploy stuff |
| 💄 | `:lipstick:` |  | Add or update the UI and style files |
| 🎉 | `:tada:` |  | Begin a project |
| ✅ | `:white_check_mark:` | test | Add, update, or pass tests |
| 🔒️ | `:lock:` |  | Fix security or privacy issues |
| 🔐 | `:closed_lock_with_key:` |  | Add or update secrets |
| 🔖 | `:bookmark:` |  | Release / Version tags |
| 🚨 | `:rotating_light:` |  | Fix compiler / linter warnings |
| 🚧 | `:construction:` |  | Work in progress |
| 💚 | `:green_heart:` |  | Fix CI Build |
| ⬇️ | `:arrow_down:` |  | Downgrade dependencies |
| ⬆️ | `:arrow_up:` |  | Upgrade dependencies |
| 📌 | `:pushpin:` |  | Pin dependencies to specific versions |
| 👷 | `:construction_worker:` | ci | Add or update CI build system |
| 📈 | `:chart_with_upwards_trend:` |  | Add or update analytics or track code |
| ♻️ | `:recycle:` | refactor | Refactor code |
| ➕ | `:heavy_plus_sign:` |  | Add a dependency |
| ➖ | `:heavy_minus_sign:` |  | Remove a dependency |
| 🔧 | `:wrench:` | chore | Add or update configuration files |
| 🔨 | `:hammer:` |  | Add or update development scripts |
| 🌐 | `:globe_with_meridians:` |  | Internationalization and localization |
| ✏️ | `:pencil2:` |  | Fix typos |
| 💩 | `:poop:` |  | Write bad code that needs to be improved |
| ⏪️ | `:rewind:` | revert | Revert changes |
| 🔀 | `:twisted_rightwards_arrows:` |  | Merge branches |
| 📦️ | `:package:` | build | Add or update compiled files or packages |
| 👽️ | `:alien:` |  | Update code due to external API changes |
| 🚚 | `:truck:` |  | Move or rename resources (e.g.: files, paths, routes) |
| 📄 | `:page_facing_up:` |  | Add or update license |
| 💥 | `:boom:` |  | Introduce breaking changes |
| 🍱 | `:bento:` |  | Add or update assets |
| ♿️ | `:wheelchair:` |  | Improve accessibility |
| 💡 | `:bulb:` |  | Add or update comments in source code |
| 🍻 | `:beers:` |  | Write code drunkenly |
| 💬 | `:speech_balloon:` |  | Add or update text and literals |
| 🗃️ | `:card_file_box:` |  | Perform database related changes |
| 🔊 | `:loud_sound:` |  | Add or update logs |
| 🔇 | `:mute:` |  | Remove logs |
| 👥 | `:busts_in_silhouette:` |  | Add or update contributor(s) |
| 🚸 | `:children_crossing:` |  | Improve user experience / usability |
| 🏗️ | `:building_construction:` |  | Make architectural changes |
| 📱 | `:iphone:` |  | Work on responsive design |
| 🤡 | `:clown_face:` |  | Mock things |
| 🥚 | `:egg:` |  | Add or update an easter egg |
| 🙈 | `:see_no_evil:` |  | Add or update a .gitignore file |
| 📸 | `:camera_flash:` |  | Add or update snapshots |
| ⚗️ | `:alembic:` |  | Perform experiments |
| 🔍️ | `:mag:` |  | Improve SEO |
| 🏷️ | `:label:` |  | Add or update types |
| 🌱 | `:seedling:` |  | Add or update seed files |
| 🚩 | `:triangular_flag_on_post:` |  | Add, update, or remove feature flags |
| 🥅 | `:goal_net:` |  | Catch errors |
| 💫 | `:dizzy:` |  | Add or update animations and transitions |
| 🗑️ | `:wastebasket:` |  | Deprecate code that needs to be cleaned up |
| 🛂 | `:passport_control:` |  | Work on code related to authorization, roles and permissions |
| 🩹 | `:adhesive_bandage:` |  | Simple fix for a non-critical issue |
| 🧐 | `:monocle_face:` |  | Data exploration/inspection |
| ⚰️ | `:coffin:` |  | Remove dead code |
| 🧪 | `:test_tube:` |  | Add a failing test |
| 👔 | `:necktie:` |  | Add or update business logic |
| 🩺 | `:stethoscope:` |  | Add or update healthcheck |
| 🧱 | `:bricks:` |  | Infrastructure related changes |
| 🧑‍💻 | `:technologist:` |  | Improve developer experience |
| 💸 | `:money_with_wings:` |  | Add sponsorships or money related infrastructure |
| 🧵 | `:thread:` |  | Add or update code related to multithreading or concurrency |
| 🦺 | `:safety_vest:` |  | Add or update code related to validation |
| ✈️ | `:airplane:` |  | Improve offline support |
| 🦖 | `:t-rex:` |  | Code that adds backwards compatibility |

Never invent an emoji outside this table. If gitmoji.dev adds new entries, refresh the table from the official list rather than editing it by hand.

## When a skill says "commit your work"

Use this format instead of a plain Conventional Commits type.
