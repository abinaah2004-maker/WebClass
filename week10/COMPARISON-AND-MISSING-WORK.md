# Week 10 comparison and remaining work
**Student:** Abinash Lamichhane  
**Course:** Web Programming — Week 10  
**Compared repositories:**
- My work: https://github.com/abinaah2004-maker/WebClass/tree/main/week10
- Reference: https://github.com/sudip09-sys/WebProgramming/tree/main/week10

**Live entry points:**
- My Week 10: https://abinaah2004-maker.github.io/WebClass/week10/
- My portfolio: https://abinaah2004-maker.github.io/WebClass/week10/portfolio/
- Sudip's Week 10: https://sudip09-sys.github.io/WebProgramming/week10/

> This is a source-file comparison, not a claim that every live page or interaction was independently browser-tested during this review. Any test marked pending must be completed on my own device. Do not copy another student's screenshots, audit scores, or personal content.

## 1. Overall comparison

| Area | My Week 10 | Sudip's Week 10 | Assessment |
|---|---|---|---|
| Coursework hub | Connected Week 10 page with links to six exercise pages, projects, portfolio and evidence | Connected hub for exercises, portfolio, Book Search and evidence | Both have a hub; mine has more project links |
| Monday E1–E3 / Friday E1–E3 | Six separate exercise pages | Six exercises linked from the hub and supporting repositories | Present in mine; capture my own completion evidence |
| Portfolio projects | Expense Tracker, Job Application Tracker, Study Planner, Book Search and Memory Match | Memory Match, Book Search and JokeLab are featured | Mine lists more projects |
| Portfolio interactions | Responsive navigation menu, project filters, skill tabs, scroll progress and reveal effects | Project filters, skill controls, theme toggle and scroll progress | Both interactive; Sudip has a theme toggle |
| Personal portrait | Initials/decorative profile card; no personal photograph yet | Portrait image included | My portrait is a pending personal-content item; add my own photo when ready |
| Accessibility report | Report template with blank/unrecorded test results | Completed report with stated keyboard test observations and implementation details | **My report needs completion using my real test results** |
| Evidence | Evidence README checklist | Lighthouse screenshot and portfolio audit PDF linked | **My evidence package is the largest submission gap** |
| Git workflow proof | E2 merged PR is linked; E3 page explains local push steps | README records commit and push history for supporting repositories | I still need genuine local terminal push evidence |
| 404 page | Root-level custom `404.html` exists and is linked from the exercise | Root-level custom `404.html` and a Week 10 preview | My implementation exists; I need to capture a real nonexistent-URL test |

## 2. What is already present in my repository

- Week 10 hub: `week10/index.html`
- Six study-guide pages:
  - `week10/monday/e1-git-basics.html`
  - `week10/monday/e2-branch-merge.html`
  - `week10/monday/e3-github-push.html`
  - `week10/friday/e1-github-pages.html`
  - `week10/friday/e2-test-404.html`
  - `week10/friday/e3-custom-404.html`
- Personal portfolio with separate HTML, CSS and JavaScript files.
- Expense Tracker, Job Tracker, Study Planner and Book Search.
- Existing Memory Match team project linked from the hub.
- Interactive keyboard accessibility test page.
- Root-level custom `404.html`.
- E2 branch-and-merge page links to the merged pull request: https://github.com/abinaah2004-maker/WebClass/pull/2

The Book Search folder is nested at `week10/projects/book-search/` in my repository, while Sudip places his at `week10/book-search/`. My hub links to my folder, so the different folder location is not by itself a missing requirement.

## 3. Work still required before submission

### Priority 1 — Complete my accessibility report
File: `week10/report.html`

- [ ] Open my deployed Week 10 hub, portfolio and relevant exercise/project pages.
- [ ] Reload each page and press Tab before clicking anything.
- [ ] Confirm the skip link is the first keyboard stop and becomes visible.
- [ ] Press Enter and check that focus moves to the main content.
- [ ] Continue pressing Tab to check the next focusable control.
- [ ] Record the actual result for each page in the report; do not copy Sudip's test results.
- [ ] Capture my own screenshots of the focused skip link and main-content focus.
- [ ] Update the report's “not yet recorded” rows only after testing.

### Priority 2 — Capture original evidence on my own computer
The evidence checklist is at `week10/evidence/README.md`. Capture the items below if they are required by the professor:

| Evidence file to capture | What my screenshot must show |
|---|---|
| `monday-e1-git-basics.png` | My terminal: git init, staging, first commit and git log |
| `monday-e2-merged-pr.png` | My actual merged PR #2, its merged status and changed files |
| `monday-e2-styled-result.png` | My finished Hello Git page in the browser |
| `monday-e3-push-terminal.png` | My own terminal showing a successful git push; hide credentials |
| `monday-e3-github-commit.png` | The matching pushed commit and files on my GitHub repository |
| `friday-e1-pages-deployment.png` | My GitHub Pages source setting and successful deployment status |
| `friday-e1-live-site.png` | My deployed Week 10 page open in a browser |
| `friday-e2-custom-404-test.png` | Browser address bar with a deliberately nonexistent URL and the resulting 404 page |
| `friday-e3-custom-404-page.png` | My custom 404 page and its working return links |
| `week10-2-skip-link-tab.png` | My skip link visibly focused after Tab |
| `week10-2-main-focus-enter.png` | My main content focused after activating the skip link with Enter |

A GitHub-created commit or a written instruction page is not proof that I personally ran a local terminal push. The E3 terminal screenshot must come from my own terminal.

### Priority 3 — Finish personal portfolio content
- [ ] Replace the initials/profile placeholder with a photograph I choose and provide.
- [ ] Check the photo has appropriate alternative text and does not stretch or crop awkwardly.
- [ ] Test the portfolio menu, project filters and skill tabs on desktop and mobile.
- [ ] Sudip has a theme toggle; my portfolio currently uses a dark theme. A light/dark toggle is an optional improvement unless the assignment specifically requires it.

### Priority 4 — Verify the deployed work
- [ ] Open every Week 10 exercise link from the hub.
- [ ] Test each project: add/edit/delete or search actions as appropriate, and reload to check saved data where local storage is used.
- [ ] Check the Book Search API in a normal browser session and note any API/network error honestly.
- [ ] Open a made-up URL under my published site to test the real GitHub Pages 404 response.
- [ ] Check the pages at phone width and desktop width.

### Priority 5 — Lighthouse (only if required)
- [ ] If the professor asks for a Lighthouse audit, run it on my own deployed URL.
- [ ] Save my own report or screenshots and state the tested URL, date and mobile/desktop mode.
- [ ] Do not use Sudip's PDF or his score as evidence for my site. His README says his saved audit measures his original portfolio deployment, not necessarily his Week 10 portfolio URL.

## 4. Portfolio comparison notes

My portfolio already has:
- My own name, university and course details.
- About, projects, skills and coursework sections.
- Five project cards and working project links in the HTML.
- JavaScript project filtering and interactive skill tabs.
- A responsive navigation menu and scroll-progress indicator.
- Separate `style.css` and `app.js` files.

Differences worth considering:
- Sudip includes a personal portrait; mine currently shows a designed initials card.
- Sudip includes a light/dark theme toggle; mine currently has a dark visual theme.
- My project collection is broader, so I do not need to add more projects just to match his project count.

## 5. Submission conclusion

My Week 10 source structure and project work are substantial. The main unfinished submission tasks are **real screenshots/evidence, completing the accessibility report from my own keyboard tests, recording my own local Git push, and adding my own portrait when ready**.

I should not mark these tasks complete until I have performed them and captured the genuine results. Submit the required evidence through the professor's requested LMS or channel; keeping screenshots in GitHub is optional unless instructed.
