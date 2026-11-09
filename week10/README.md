# Week 10 — Web Programming Submission Guide

**Student:** Abinash Lamichhane  
**University:** Gachon University  
**Major:** Computer Engineering  
**Repository:** https://github.com/abinaah2004-maker/WebClass  
**Live Week 10 page:** https://abinaah2004-maker.github.io/WebClass/week10/

This README is the reader's guide to my Week 10 work. It explains where each exercise is, what the projects do, how my work compares with the reference Week 10 folder, and what evidence I still need to capture myself.

## 1. Start here

- [Open the Week 10 hub](https://abinaah2004-maker.github.io/WebClass/week10/)
- [Open my portfolio](https://abinaah2004-maker.github.io/WebClass/week10/portfolio/)
- [Open the repository's Week 10 source folder](https://github.com/abinaah2004-maker/WebClass/tree/main/week10)

The hub links to all six study-guide exercises, the portfolio, the JavaScript projects, and the keyboard-accessibility task.

## 2. Six study-guide exercises

### Monday — Git

| Exercise | File | What it covers |
|---|---|---|
| E1 — Git basics | `monday/e1-git-basics.html` | Initialize a repository, stage files, commit, and inspect commit history |
| E2 — Branch and merge | `monday/e2-branch-merge.html` | Create a feature branch, make a CSS change, open a pull request, and merge it |
| E3 — Push to GitHub | `monday/e3-github-push.html` | Connect a local repository to a remote and push commits |

### Friday — GitHub Pages and 404

| Exercise | File | What it covers |
|---|---|---|
| E1 — GitHub Pages | `friday/e1-github-pages.html` | Publish a site using GitHub Pages |
| E2 — Test a 404 | `friday/e2-test-404.html` | Open a deliberately incorrect URL and inspect the not-found response |
| E3 — Custom 404 | `friday/e3-custom-404.html` | Explain a missing page and provide recovery links |

**404 implementation note:** The repository has a root-level `404.html` at `/WebClass/404.html`. That is the correct location for the GitHub Pages project site. The Friday E2 and E3 pages link to this root-level page; a second `week10/404.html` is not required for this repository layout.

## 3. Portfolio

- [Open the portfolio](https://abinaah2004-maker.github.io/WebClass/week10/portfolio/)
- [View its source](https://github.com/abinaah2004-maker/WebClass/tree/main/week10/portfolio)

The portfolio is built with HTML, CSS, and JavaScript. It includes an introduction, selected projects, interactive skill topics, coursework links, and contact information.

**Personal photo still to add:** The current hero uses a designed initials/profile card rather than a real portrait. I plan to add my own photo later. The reference portfolio contains a portrait image, so this is one visible difference to address when my photo is ready. Do not replace it with somebody else's image or a generated audit screenshot.

## 4. Interactive projects

| Project | Location | Purpose |
|---|---|---|
| Expense Tracker | `projects/expense-tracker/` | Record income and expenses and view totals |
| Job Tracker | `projects/job-tracker/` | Explore job-search links and manage application records |
| Study Planner | `projects/study-planner/` | Organize study tasks and weekly planning |
| Book Search | `projects/book-search/` | Search book information using the Open Library service |

The existing [Memory Match team project](https://abinaah2004-maker.github.io/WebClass/teamproject/) is also linked from the Week 10 hub.

**Important scope note:** The Job Tracker provides links to external job-search services and an application tracker. It does not claim to scrape or display guaranteed live job vacancies directly from those services.

## 5. Week 10_2 — Keyboard accessibility

- [Open the interactive keyboard test](https://abinaah2004-maker.github.io/WebClass/week10/accessibility/)
- [Open the accessibility report template](https://abinaah2004-maker.github.io/WebClass/week10/report.html)
- [Open the evidence checklist](https://github.com/abinaah2004-maker/WebClass/blob/main/week10/evidence/README.md)

The pages provide a skip link and a focusable main-content target. The report is intentionally a **template**, not a completed test result. I must test the published pages on my own device, record what actually happens, and attach my own screenshots before marking the test as passed.

## 6. Comparison with the reference Week 10 folder

Reference inspected: https://sudip09-sys.github.io/WebProgramming/week10/

| Area | My Week 10 | Reference Week 10 | Review |
|---|---|---|---|
| Six study-guide exercises | Separate Monday and Friday E1–E3 pages | Six exercises linked from the hub | Present in my source |
| Git E2 branch/merge | Exercise page and linked merged pull request | Exercise page and merged pull request | Present; retain the real PR link |
| Git E3 push | Step-by-step instructions | Reference describes a local push and links commit evidence | I still need my own local terminal push screenshot and matching GitHub commit evidence |
| GitHub Pages | Deployment exercise and Week 10 hub | Deployment exercise and live hub | Capture my own Pages settings/deployment evidence |
| Custom 404 | Repository-root `404.html`, plus E2/E3 explanation pages | Root and Week 10 custom 404 pages | My root-level file is appropriate for the project site; test a genuinely nonexistent URL |
| Portfolio | Responsive portfolio with interactive project and skill sections | Portfolio with a portrait, theme control, project filtering and skills | My portfolio is present; add my own portrait when ready and manually check mobile/keyboard use |
| Book Search | `projects/book-search/index.html` | Separate HTML, CSS and JavaScript files under `week10/book-search/` | My project exists; keep the code organized and verify a real search works |
| Extra projects | Expense Tracker, Job Tracker and Study Planner | The reference Week 10 folder has Book Search and its portfolio/team links | My folder has additional project work |
| Evidence files | Evidence folder currently contains the checklist README | Reference folder contains a Lighthouse screenshot and audit PDF | Main submission gap: add my own original screenshots and any report required by the professor |
| Accessibility report | Interactive report template with blank observation fields | Completed written report with recorded keyboard results | Complete mine only after carrying out the tests; do not copy the reference student's results |

This is a source-file comparison. A file existing in GitHub does not, by itself, prove that I personally performed the local terminal steps, that a browser test passed, or that a screenshot was captured.

## 7. My remaining submission checklist

Capture these on my own computer or phone. Save the original screenshots in `week10/evidence/` if the professor wants evidence in the repository, and submit them through the professor's required submission channel.

- [ ] **Monday E1:** Terminal showing `git init`, staging, first commit, and `git log --oneline`.
- [ ] **Monday E2:** The actual merged pull request and the finished styled Hello Git page.
- [ ] **Monday E3:** My own terminal showing a successful `git push`, plus the matching commit/files on GitHub. Hide tokens and private credentials.
- [ ] **Friday E1:** GitHub Pages source/settings, successful deployment status, and the live Week 10 page.
- [ ] **Friday E2:** Browser address bar showing a deliberately nonexistent URL and the custom root-level 404 page.
- [ ] **Friday E3:** Custom 404 page with its recovery links; click the links to confirm they work.
- [ ] **Week 10_2:** Screenshot with the skip link visible after pressing Tab.
- [ ] **Week 10_2:** Screenshot or short recording showing where focus goes after pressing Enter.
- [ ] **Week 10_2:** Complete the report with the real device/browser, actual observations, and any issues found.
- [ ] **Portfolio:** Add my own photo when ready; check the page at phone and desktop widths.
- [ ] **Projects:** Open each project and test its main interaction, especially adding and refreshing saved data and searching for a book.

### Lighthouse evidence

Run Lighthouse against **my own deployed URL** if the assignment asks for it. Save the report or screenshots with the tested URL and date. Do not copy the reference student's scores or describe them as results for my site. If Lighthouse is not required, do not invent a score.

## 8. Submission links

- [Week 10 hub](https://abinaah2004-maker.github.io/WebClass/week10/)
- [Portfolio](https://abinaah2004-maker.github.io/WebClass/week10/portfolio/)
- [Accessibility test](https://abinaah2004-maker.github.io/WebClass/week10/accessibility/)
- [Accessibility report template](https://abinaah2004-maker.github.io/WebClass/week10/report.html)
- [Week 10 source on GitHub](https://github.com/abinaah2004-maker/WebClass/tree/main/week10)

---

**Evidence policy:** This guide distinguishes implemented source code from work that still needs personal testing or screenshots. Only mark a task complete after performing it and keeping the real evidence.
