# Branching

How a piece of work gets (or doesn't get) a branch, and what happens on it.

## Ticket group

A **ticket group** is the set of child tickets `to-tickets` published from a single spec issue (each child's body has a `## Parent` section pointing at that spec; see `to-tickets`' `SKILL.md`). Not wayfinder's map/child tickets, which have their own claim/resolve flow in `docs/agents/issue-tracker.md`.

1. **Before implementing any ticket in the group**, start one feature branch for the whole group: `git checkout -b feature/<slug> develop`, where `<slug>` is a short kebab-case name for the spec (e.g. the spec's title). Every ticket in the group lands on this branch — never branch per ticket.

2. Work the group's frontier (blockers-first order, per `to-tickets`). For each ticket, in order:
   - Implement it with `/implement`.
   - Check off the acceptance-criteria checkboxes it actually completed: `gh issue view <n> --json body -q .body`, flip the completed `- [ ]` to `- [x]`, then `gh issue edit <n> --body-file -` with the updated body on stdin. Leave any criterion not actually done unchecked.
   - Close it: `gh issue close <n> --comment "..."`.

3. Once every child ticket in the group is closed — not before — close the parent spec issue the same way.

4. Leave the feature branch as-is. Do not merge it into `develop` — that's a human call (PR review or manual merge).

## One-off

A **one-off** is a single ask: one fix, one tweak, one small implementation, a handful of commits that are born and merged within the session. Commit it directly to `develop` — no branch.

When the two are hard to tell apart, ask the user before cutting a branch.

## When a skill says "create a branch for this spec/feature"

`git checkout -b feature/<slug> develop`