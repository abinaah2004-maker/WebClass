# Learn Korean With Me

A responsive, beginner-friendly Korean learning website built with **HTML, CSS, vanilla JavaScript and React**. The goal is practical Korean for everyday life: reading Hangul, understanding grammar, learning useful vocabulary, practising with quizzes and using natural expressions in common situations.

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
- **Expanded scene library:** longer practical conversations for convenience stores, cafés, restaurant shifts, workplace instructions, university, friends, clinics, transport and housing.
- **React roleplay room:** choose a shopkeeper, teacher, Korean friend or restaurant coworker; send your own messages, receive character replies and get feedback on selected common Korean mistakes.
- **TOPIK II intermediate chapter track:** eight deeper chapters covering reasons/results, comparisons, opinions, indirect speech, formal Korean, conditions, reading comprehension and structured writing.
- **Chapter review centre:** chapter checkpoints, reading passages, vocabulary, grammar examples, review scheduling (1/3/7 days) and browser-saved progress.
- **TOPIK II Level 4 practical training:** a separate intermediate module with 12 grammar patterns, four 20-line conversations (80 dialogue lines total) covering work scheduling, university administration, housing repairs and clinic visits.
- **Active output practice:** English reveal controls, speaking challenges, a reading-comprehension check, weekly writing task and browser-saved learner responses.
- **Progress tracking:** completed lessons, saved vocabulary, points and study minutes are stored in the browser using localStorage.
- **Responsive layout:** works on desktop, tablet and mobile screens.
- **Accessibility basics:** semantic page structure, keyboard-friendly buttons, visible focus, skip link, and reduced-motion support.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Main app structure and navigation |
| `styles.css` | Responsive visual design and layout |
| `app.js` | Lesson data, vocabulary, grammar, quizzes, dialogues and progress logic |
| `practice-react.js` | React scene library, roleplay characters and practice feedback |
| `chapters.html` | Intermediate TOPIK II chapter lessons, reading, quizzes and spaced review centre |
| `level4-practical.html` | Level 4 grammar toolkit, four 20-line real-life dialogues and writing/speaking practice |

## Run locally

1. Download or clone the repository.
2. Open the `korean-learning` folder in Visual Studio Code.
3. Open `index.html`.
4. Right-click the file and choose **Open with Live Server** (if the Live Server extension is installed).

You can also open `index.html` directly in a modern browser; no build step or package installation is required. The React roleplay module loads React 18 from the esm.sh CDN, so an internet connection is needed for that section.

## Deploy with GitHub Pages

The project is stored in the `korean-learning/` folder of the WebClass repository. The repository's existing GitHub Pages site can serve this folder at the live website URL above. If the URL returns 404 immediately after the commit, wait for the Pages deployment to finish and check the repository's **Settings → Pages** configuration.

## Progress data

The app saves lesson completions, saved words, points and study minutes in the current browser's localStorage. This means progress stays on the same browser/device, but it is not synced between devices and can be cleared if browser data is deleted.

## Current scope and next improvements

The main course is supported by a separate intermediate TOPIK II chapter track. The chapter track and practical module are designed to practise skills associated with TOPIK II level 4, but they are not an official TOPIK syllabus or score guarantee. The roleplay room is a rule-based prototype, not a live AI chatbot. It recognises selected common phrases and learner errors; unrecognised replies receive a general prompt. It does not yet include user accounts, cloud sync, generative-AI conversation, recorded speech assessment or audio files. These can be added in later phases. Romanization is provided as a learning aid; listening to native-speaker audio is recommended for accurate pronunciation.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript (ES6)
- Browser localStorage
- Google Fonts: DM Sans and Noto Sans KR
