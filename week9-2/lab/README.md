# CineReview — Broken Website Fix

**Week 9.2 · Web Programming**  
**Author:** Abinash Lamichhane  
**Project:** Accessibility and performance improvement lab

## Project overview

This folder contains an intentionally inaccessible/poorly structured starter website and an improved version of the same fictional movie-review website.

- **`broken.html`** is the original starter page. It is kept unchanged so it can be used as the **before** version for comparison.
- **`solution.html`** is the completed improved version.
- **`step1.html` to `step7.html`** demonstrate the improvements progressively. Each page shows the state of the website at a particular stage.
- **`lab.css`** contains the styling for the completed website.
- **`lab.js`** contains the search, movie-details and form-validation interactions.
- **`stage-preview.js`** controls the step-by-step demonstrations.

## Problems in the original starter

The original `broken.html` was deliberately made with several issues for the exercise:

1. It uses generic `div` elements instead of clear semantic page landmarks.
2. Some clickable controls are `div` elements with click handlers rather than real buttons.
3. Images have missing or unhelpful alternative text.
4. Several text and background color combinations have weak contrast.
5. Form fields do not have proper visible labels or useful validation feedback.
6. Images do not declare intrinsic dimensions or loading behavior.
7. The page does not demonstrate an organized deferred application-script setup.

These are the issues addressed in the completed version and the seven learning stages.

## Improvements made in the completed solution

### 1. Semantic HTML and keyboard navigation

- Added the document language with `lang="en"`.
- Added a skip link that moves keyboard users to the main content.
- Organized the page with semantic elements such as `header`, `nav`, `main`, `section`, `article` and `footer`.
- Added meaningful navigation labels and a clear heading structure.
- Added visible keyboard focus styles for links, buttons and form fields.

### 2. Real buttons and working interactions

- Replaced clickable-looking elements with actual `button` elements.
- Added `type="button"` to movie detail buttons and `type="submit"` to form buttons.
- Added `aria-expanded` and `aria-controls` to the movie detail controls.
- Added JavaScript so each **View Details** button opens and closes its matching description.
- Added a working client-side movie search that filters the movie cards and announces the number of matching results.

### 3. Image alternative text

- Added descriptive `alt` text to informative movie images.
- Used an empty `alt=""` for the decorative featured image so assistive technology can ignore it.

### 4. Improved color contrast and visual design

- Reworked the page with a dark movie-review theme, readable text, clearer metadata, visible links and distinct buttons.
- Improved the contrast of important page content and controls.
- Added clear hover and keyboard-focus states.
- Used responsive layouts so the movie cards and featured section adapt to smaller screens.

**Note:** This describes the design changes; it is not a claim that every color combination has been independently measured or that the page has been certified as fully WCAG conformant.

### 5. Form labels and validation feedback

- Added visible labels connected to the name and email fields using `for` and `id`.
- Added `required` and email-format validation.
- Connected each field to its error message with `aria-describedby`.
- Used `aria-invalid` to communicate invalid fields.
- Added clear error and success-status messages.
- Moved keyboard focus to the first invalid field after an unsuccessful submission.

The newsletter form is a classroom demonstration only. It does not send or store personal information.

### 6. Image loading and layout stability

- Added explicit `width` and `height` attributes to images to reserve layout space while they load.
- Used eager loading for the first visible movie images.
- Used lazy loading for images farther down the page.
- Added asynchronous image decoding hints.

### 7. Deferred JavaScript

- Loaded the completed website's external `lab.js` file with the `defer` attribute.
- This allows the browser to parse the HTML before executing the application script.

## How to compare the original and improved websites

1. Open **`broken.html`** to see the original starter.
2. Open **`solution.html`** to see the completed version.
3. Use the navigation at the top of the lab guide to open each of the seven stages.
4. In the completed version, test the movie detail buttons, search field and newsletter form.
5. Use the keyboard (Tab, Shift+Tab, Enter and Space) to check navigation and controls.

## Files in this folder

| File | Purpose |
|---|---|
| `index.html` | Lab guide and interactive stage preview |
| `broken.html` | Original starter website; intentionally left broken |
| `solution.html` | Completed improved website |
| `step1.html` – `step7.html` | Progressive demonstrations of the seven changes |
| `lab.css` | Completed website styles |
| `lab.js` | Search, details and newsletter validation behavior |
| `stage-preview.css` | Styles for the progressive stage pages |
| `stage-preview.js` | Shows the relevant explanation and feature state for each stage |

## Testing and evidence

Run Lighthouse separately on the original and completed pages using the same browser, device setting and audit conditions. Save your own screenshots and reports if your instructor requires evidence.

Lighthouse scores can vary between runs. No specific score or percentage improvement is claimed in this README. Also test keyboard access and form feedback manually; an automated score alone does not prove complete accessibility.

---

**Prepared by Abinash Lamichhane**  
Gachon University · Web Programming
