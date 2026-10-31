# Recent Changes — Accessibility Assignment

This README records the latest changes made for the accessibility assignment you provided.

## Changes made

### Coursework homepage — `index.html`

- Added a **Skip to content** link as the first element inside `<body>`.
- Linked it to the main content using `href="#main-content"`.
- Added `id="main-content"` and `tabindex="-1"` to the main content element.
- Added CSS so the skip link stays off-screen until it receives keyboard focus.
- Added a visible focus outline for keyboard users.

### Memory Match project

Files updated:
- `teamproject/index.html`
- `teamproject/style.css`

Changes:
- Added the same skip link as the first element inside `<body>`.
- Added the `main-content` target to the main element.
- Styled the link to become visible on keyboard focus, with a clear outline.

## How to test

1. Open the [coursework homepage](https://abinaah2004-maker.github.io/WebClass/).
2. Press **Tab** and check that **Skip to content** becomes visible.
3. Press **Enter** and check that focus moves to the main content.
4. Repeat on the [Memory Match project](https://abinaah2004-maker.github.io/WebClass/teamproject/).
5. In Chrome, open Developer Tools → **Lighthouse** → select **Accessibility** → run the audit.
6. Fix any remaining issues and run the audit again.

## Verification status

- The relevant HTML and CSS were checked in the repository.
- A Lighthouse audit has **not** been run by me in a real browser, so no accessibility score is claimed.
- Capture your actual initial and improved Lighthouse results for the assignment screenshots.

## Latest commits

- Homepage accessibility changes: [9d47451](https://github.com/abinaah2004-maker/WebClass/commit/9d47451e70da9bf6f25a83c68c4e50245b81a3de)
- Memory Match HTML changes: [cf8de41](https://github.com/abinaah2004-maker/WebClass/commit/cf8de413656bc9f390dd6fbc96cf4cabfb130d14)
- Memory Match CSS changes: [dc173b1](https://github.com/abinaah2004-maker/WebClass/commit/dc173b19f457ecacb55e71e816152890490c6550)


## Personal project — Korean Learning 🇰🇷

A practical Korean-learning website created as part of this repository. It includes vocabulary, grammar practice, real-life conversation scenes, interactive roleplay, TOPIK II chapters, and Level 4 skills practice.

- [Open the Korean learning website](korean-learning/index.html)
- [TOPIK II chapter library](korean-learning/chapters.html)
- [Level 4 — Korean in Korea](korean-learning/level4-practical.html)
- [Level 4 — Skills Lab](korean-learning/level4-skills-lab.html)
- [View the Korean project folder on GitHub](https://github.com/abinaah2004-maker/WebClass/tree/main/korean-learning)
- [Open the deployed Korean learning website](https://abinaah2004-maker.github.io/WebClass/korean-learning/)

The project is also linked from the [main coursework homepage](index.html), under **Projects and repository information**.
