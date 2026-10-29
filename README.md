# WebClass — Abinash Lamichhane

My Web Programming coursework repository for practising HTML, CSS, JavaScript, DOM events, forms, APIs, accessibility, and project development.

**Coursework homepage:** [Open the website](index.html) · [View the GitHub repository](https://github.com/abinaah2004-maker/WebClass)

## Coursework navigation

The homepage groups coursework chronologically, from the earliest week to the latest:

- [Week 2 — HTML fundamentals](Week2_1/Task9_Forms.html)
- [Week 3 — CSS fundamentals and layouts](Week3_1/lessons/index.html)
- [Week 4 — JavaScript DOM and events](week4-1/index.html)
- [Week 5 — JavaScript conditions and loops](week5-1/index.html)
- [Week 6 — Promises, async/await, and APIs](week6-1/index.html)
- [Week 7 — API exploration and Book Finder](week7-1/index.html)
- [Week 8 — Forms and validation](week8-1/index.html)
- [Team project — Memory Match](teamproject/index.html)

For the full list of exercises and projects, start at the [coursework homepage](index.html).

## Summary of changes made

### 1. Homepage organization and design

- Reorganized the homepage into chronological weekly sections: Week 2 through Week 8.
- Grouped related exercises under their corresponding week instead of mixing tasks together.
- Added quick-navigation links so visitors can jump directly to a week.
- Standardized task links into a consistent grid.
- Improved spacing, typography, contrast, focus indicators, and responsive behavior for smaller screens.
- Kept the team project and repository resources in separate sections, so they do not interrupt the weekly sequence.

### 2. Accessibility improvements

- Added a **Skip to content** link as the first element inside the `<body>` on the coursework homepage and Memory Match project page.
- Connected each skip link to the page's main content using `href="#main-content"` and `id="main-content"`.
- Styled the link so it appears when keyboard users focus it.
- Added a visible keyboard-focus outline and made the main content a focus target.
- Verified in the source code that both pages declare `<html lang="en">`.

These code checks do not mean a Lighthouse score of 100 has been achieved. Run Lighthouse in Chrome and address any remaining reported issues before submitting an accessibility audit.

### 3. Coursework and practice pages

The repository contains HTML exercises, CSS lessons and assignments, JavaScript DOM lessons, conditional and loop practice, asynchronous JavaScript examples, API demonstrations, Book Finder practice, and form-validation exercises. The homepage provides links to the available weekly hubs and selected individual tasks.

### 4. Team project

- Kept the Memory Match project separate from the weekly coursework.
- Added a dedicated homepage link to the game and its supporting project pages.
- Added the same keyboard-accessible skip link to the project page.

### 5. Week 9 removal

- Removed the Week 9 section and its links from the homepage and README navigation.
- Deleted the Week 9.1 pages that had been added to this repository.
- Kept the other coursework weeks and the team project in place.

## Technical notes

- Some Week 6 and Week 7 examples use public APIs and require an internet connection.
- The Book Finder reading list uses browser `localStorage`, so saved items are stored in that browser.
- Links and HTML structure were checked against the repository files, but every page has not been manually tested in a browser.
- Lighthouse accessibility results must be generated in Chrome; no score is claimed here.

## Change plan

For the detailed change plan, see [README_CHANGE_PLAN.md](README_CHANGE_PLAN.md).
