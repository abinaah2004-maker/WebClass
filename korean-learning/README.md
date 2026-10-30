# Learn Korean With Me

A responsive, beginner-friendly Korean learning website built with **HTML, CSS and vanilla JavaScript**. The goal is practical Korean for everyday life: reading Hangul, understanding grammar, learning useful vocabulary, practising with quizzes and using natural expressions in common situations.

## Live website

After GitHub Pages publishes the repository, open:

https://abinaah2004-maker.github.io/WebClass/korean-learning/

## Features

- **Dashboard:** learning overview, progress statistics, next lesson, phrase of the day and a suggested two-hour study routine.
- **Seven-level learning path:** from Hangul foundations through everyday Korean, workplace communication and TOPIK-oriented practice.
- **Vocabulary notebook:** Korean word, romanization, English meaning, example sentence and category filters. Save words to your personal notebook.
- **Grammar studio:** practical explanations and example sentences for common Korean particles and verb endings.
- **Practice and quiz:** multiple-choice knowledge checks with explanations and a vocabulary flashcard deck.
- **Real-life Korean:** dialogues for restaurants, part-time work, shopping, university, hospitals and public transport.
- **Progress tracking:** completed lessons, saved vocabulary, points and study minutes are stored in the browser using localStorage.
- **Responsive layout:** works on desktop, tablet and mobile screens.
- **Accessibility basics:** semantic page structure, keyboard-friendly buttons, visible focus, skip link, and reduced-motion support.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Main app structure and navigation |
| `styles.css` | Responsive visual design and layout |
| `app.js` | Lesson data, vocabulary, grammar, quizzes, dialogues and progress logic |

## Run locally

1. Download or clone the repository.
2. Open the `korean-learning` folder in Visual Studio Code.
3. Open `index.html`.
4. Right-click the file and choose **Open with Live Server** (if the Live Server extension is installed).

You can also open `index.html` directly in a modern browser; no build step or package installation is required.

## Deploy with GitHub Pages

The project is stored in the `korean-learning/` folder of the WebClass repository. The repository's existing GitHub Pages site can serve this folder at the live website URL above. If the URL returns 404 immediately after the commit, wait for the Pages deployment to finish and check the repository's **Settings → Pages** configuration.

## Progress data

The app saves lesson completions, saved words, points and study minutes in the current browser's localStorage. This means progress stays on the same browser/device, but it is not synced between devices and can be cleared if browser data is deleted.

## Current scope and next improvements

This is the first complete front-end version. It does not yet include user accounts, cloud sync, AI conversation, recorded speech assessment or audio files. These can be added in later phases. Romanization is provided as a learning aid; listening to native-speaker audio is recommended for accurate pronunciation.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript (ES6)
- Browser localStorage
- Google Fonts: DM Sans and Noto Sans KR
