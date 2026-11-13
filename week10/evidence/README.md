# Week 10 evidence — Abinash Lamichhane

This folder is for evidence captured from my own browser, terminal and GitHub account. The checklist is a capture plan, not a claim that screenshots or tests have already been completed.

## Live pages and verifiable GitHub records

- Week 10 hub: https://abinaah2004-maker.github.io/WebClass/week10/
- Custom 404 page (repository-root file used by GitHub Pages): https://abinaah2004-maker.github.io/WebClass/404.html
- 404 test URL (open this exact nonexistent address and keep the address bar visible): https://abinaah2004-maker.github.io/WebClass/week10/this-page-does-not-exist-for-testing.html
- Repository commit history: https://github.com/abinaah2004-maker/WebClass/commits/main/
- Pull requests (branch/merge evidence): https://github.com/abinaah2004-maker/WebClass/pulls
- GitHub Pages deployment history: https://github.com/abinaah2004-maker/WebClass/deployments

The custom error page belongs at the repository root as `/404.html`. GitHub Pages looks for that root-level file; a second copy inside `week10/` would not replace the site-wide error page.

## Screenshots to capture and save here

| Suggested file name | What the original capture must show |
|---|---|
| `git-01-init-and-first-commit.png` | Your own terminal: `git init`, `git add`, `git commit`, and `git log --oneline`. |
| `git-02-branch-and-merge.png` | Your own branch and merge workflow, plus the actual merged pull request page. |
| `git-03-push-to-github.png` | Your terminal showing a successful `git push`; hide credentials and tokens. |
| `git-04-remote-commit.png` | Your repository's Commits page showing the matching pushed commit(s). |
| `pages-01-settings.png` | Repository Settings → Pages showing the publishing source/branch. |
| `pages-02-deployment.png` | The actual successful Pages deployment in the Deployments or Actions page. |
| `pages-03-live-week10.png` | The deployed Week 10 page in a browser, with the full URL visible. |
| `404-01-not-found-test.png` | The exact test URL above in the address bar and the custom 404 content visible. |
| `404-02-recovery-link.png` | The custom 404 page with the homepage and Week 10 recovery links visible. |
| `accessibility-01-skip-link.png` | Press Tab on the live Week 10 page and capture the visible focused skip link. |
| `accessibility-02-main-focus.png` | Activate the skip link with Enter and capture the main content focus/result. |

## How to capture trustworthy evidence

1. Open the live page or GitHub page listed above on your own device.
2. Make sure the browser address bar or GitHub repository identity is visible where relevant.
3. Capture the real screen. Do not recreate a terminal, edit scores into a screenshot, or use another student's evidence.
4. Save the original screenshots using the file names above. Crop only if the URL and relevant result remain visible.
5. For terminal captures, run the commands in your own local clone. Do not paste a made-up transcript into a terminal window.

## Lighthouse (only if requested)

Run Lighthouse on the actual deployed URL you are auditing. Save the original report or screenshot and record the tested URL, date, device mode and measured scores. Do not reuse another student's report or describe a planned test as a completed test.

## Submission

Upload the required original captures/report through the professor's requested LMS or submission channel. Keeping them in this repository is useful, but do not claim that the evidence is attached until the image/report files have actually been added.
