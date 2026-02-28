# Repository Guidelines

## Project Structure & Module Organization
This is a Vue 3 + Vue Router site built with Vue CLI.

- `src/main.js`: app bootstrap.
- `src/App.vue`: root component.
- `src/views/`: route-level pages (`HomeView.vue`, `WorksView.vue`, etc.).
- `src/components/`: reusable UI components.
- `src/router/index.js`: route definitions.
- `public/`: static assets and `works/*.json` content data.
- `docs/`: production build output for GitHub Pages (`outputDir` in `vue.config.js`).
- `.github/workflows/build-docs.yml`: CI that builds and commits `docs/` on `main`.

## Build, Test, and Development Commands
Use Yarn 4 (via Corepack) in this repo.

- `corepack enable && corepack prepare yarn@4.9.1 --activate`: activate the pinned Yarn version.
- `yarn install --immutable`: install dependencies from lockfile.
- `yarn serve`: start local dev server with hot reload.
- `yarn build`: create production assets in `docs/`.
- `yarn lint`: run ESLint checks and autofixes when available.

## Coding Style & Naming Conventions
- Follow ESLint config in `.eslintrc.js` (`plugin:vue/vue3-essential`, `eslint:recommended`).
- Use 2-space indentation in `.vue` files and keep formatting consistent with surrounding code.
- Vue component and view filenames use PascalCase (example: `WorkDetailComponent.vue`).
- Keep route/view naming aligned (example: route `/about` -> `AboutView.vue`).
- Avoid introducing new global CSS when a scoped/component-level style is enough.

## Testing Guidelines
No automated test framework is currently configured. Minimum validation for changes:

- `yarn lint`
- `yarn build`
- manual smoke test via `yarn serve` (check navigation, work list/detail pages, and static asset loading)

If adding non-trivial logic, include a short manual test checklist in the PR.

## Commit & Pull Request Guidelines
- Prefer concise, imperative commit messages; conventional prefixes are recommended (`feat:`, `fix:`, `chore:`).
- Keep commits focused (one logical change per commit).
- PRs should include:
  - what changed and why
  - linked issue (if any)
  - screenshots/GIFs for UI changes
  - confirmation that `yarn lint` and `yarn build` passed
