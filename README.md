# Web Programming Coursework

**Student:** Abinash Lamichhane  
**Student ID:** 202637724  
**University:** Gachon University  
**Major:** Computer Engineering  
**Course:** Web Programming K0126_002

This repository contains my weekly web-programming exercises, practical projects and learning notes. The published site is arranged in chronological order so each week can be opened from one place.

- **Live coursework:** https://abinaah2004-maker.github.io/WebClass/
- **GitHub repository:** https://github.com/abinaah2004-maker/WebClass

## Coursework map

| Week | Main topic | Main location |
|---|---|---|
| 2 | HTML fundamentals, semantic HTML, forms and page structure | `Week2_1/`, `Week2_2/` |
| 3 | CSS fundamentals, selectors, layout and component styling | `Week3_1/`, `Week3_2/`, `Week3_Assignment/`, `week3-3/` |
| 4 | JavaScript DOM, events and interactive tasks | [Week 4 hub](week4-1/index.html) |
| 5 | JavaScript conditions, grading and loops | [Week 5 hub](week5-1/index.html) |
| 6 | Fetch, promises and public APIs | [Week 6 hub](week6-1/index.html) |
| 7 | Book search and API practice | [Week 7 hub](week7-1/index.html) |
| 8 Monday | HTML forms and native validation | [Week 8 Monday](week8-1/index.html) |
| 8 Friday | JavaScript form validation and registration homework | [Week 8 Friday](week8-2/index.html) |
| 9.1 | Memory Match accessibility audit | [Week 9.1 hub](week9-1/index.html) · [Audit PDF](Week9.pdf) |
| 9.2 | Performance, responsive images, script loading and CineReview lab | [Week 9.2 hub](week9-2/index.html) |
| 10 | Git, GitHub Pages, 404 handling, portfolio and projects | [Week 10 hub](week10/index.html) |
| 11 Monday | React foundations, JSX, props and StudentCard | [Week 11 Monday](week11-monday/index.html) |
| 11 Friday | React components, props, lists and composition | [Week 11 Friday](week11-friday/index.html) |
| 12 Monday | React state, useState, tech desk builder and interactive state exercises | [Week 12 Monday](week12/index.html) |
| 12 Friday | React effects, data fetching, timers, browser events and cleanup | [Week 12 Friday](week12/friday/index.html) |

For the full set of links, use the [published coursework homepage](https://abinaah2004-maker.github.io/WebClass/).

## Projects

These projects are kept separate from the weekly exercise folders.

| Project | What it practises | Link |
|---|---|---|
| Memory Match | JavaScript, DOM events, game state and keyboard accessibility | [Open project](teamproject/index.html) |
| StudyHub | DOM events, task management and local storage | [Open project](studyhub/index.html) |
| JokeLab | Fetch requests, loading states and saved jokes | [Open project](week6-1/jokelab/index.html) |
| BookFinder | Open Library API search and result rendering | [Open project](bookfinder/index.html) |
| Idea Mixer | Interactive prompt generation and saved ideas | [Open project](idea-mixer/index.html) |
| Contact form | Labels, native validation and accessible feedback | [Open form](contact/index.html) |
| Learn Korean With Me | Personal Korean vocabulary, grammar and practical conversation practice | [Open project](korean-learning/index.html) |

## React work

Week 11 is split into two sessions:

- **Monday:** React foundations, JSX, component props, a StudentCard lab and a short knowledge check.
- **Friday:** ProductCard, Course Catalog, ProfileCard, notifications, Student Directory, Portfolio Gallery and component composition.

The Week 11 pages currently use React 18, ReactDOM and Babel Standalone from public CDNs so the lessons can run directly on GitHub Pages without a local build step. Source is separated into data, component and page files. Browser test pages are included for the Monday and Friday work.

- [Monday tests](week11-monday/tests.html)
- [Friday tests](week11-friday/tests.html)
- [Week 10 portfolio tests](week10/portfolio/tests.html)

Automated checks are useful, but they do not replace manual browser, keyboard, mobile and screen-reader testing.

## Reports and evidence

- [Week 9.1 accessibility audit](week9-1/index.html) links to the existing `Week9.pdf`.
- [Week 9.2 coursework and report notes](week9-2/README.md) explain the CineReview comparison and the original evidence used.
- [Week 10 evidence checklist](week10/evidence/README.md) lists the screenshots and local Git steps that still need to be captured by me.

**Week 9.2 PDF reminder:** the original `CineReview_Week9_2_Audit_Report_Abinash_Lamichhane.pdf` is not yet committed inside `week9-2/`. The report is available in my file library; add that original PDF to the folder before relying on the PDF links in the Week 9.2 pages. Do not replace the original screenshots with recreated evidence.

Scores and manual test results should only be reported when supported by the actual screenshots or tests. A file being present in this repository does not by itself prove that a browser test or local Git step has been completed.

## Local use

Most exercises are static HTML, CSS and JavaScript pages. Open the relevant `index.html` in a browser or use VS Code Live Server.

For the React coursework, open the task hub and select an exercise. The deployed pages load their React dependencies from public CDNs. Run the included browser test pages when checking changes.
