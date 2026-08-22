# Releases

A release cuts a `release/<version>` branch from `develop` and finishes it into `main`, following [git flow](https://nvie.com/posts/a-successful-git-branching-model/)'s release-branch flow. `<version>` is the semver bump: patch for fixes only, minor for any new feature, major for a breaking change.

1. **Cut the branch**: `git checkout -b release/<version> develop`.

2. **Bump the version**: set `version` in `package.json` to `<version>`, commit `🔖 bump version to <version>`.

3. **Update npm packages**: run `npm update` to refresh `package-lock.json` against the current `package.json` ranges. Commit the lockfile if it changed.

4. **Check**: run the project's check scripts — `npm run check`, `npm run lint` (add `npm test` if the repo gains a test script). All must pass before continuing; fix anything the package update broke.

5. **Finish the release**:
   - `git checkout main && git merge --no-ff release/<version> -m "🔀 Merge branch 'release/<version>'"`
   - `git tag -a v<version> -m "<version> — <one-line summary>"` (tag the merge commit just made)
   - `git checkout develop && git merge --no-ff v<version> -m "🔀 Merge tag 'v<version>' into develop"`
   - `git branch -d release/<version>`
   - `git push origin main develop v<version>`
