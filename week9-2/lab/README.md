# Week 9.2 lab: Fix the Broken Website

**Student:** Abinash Lamichhane  
**Course:** Web Programming  
**Example site:** CineReview (fictional movie-review page)

## Files

- `broken.html` — the starter page with the problems kept in it for comparison.
- `solution.html` — the improved page.
- `step1.html` to `step7.html` — one example for each change.
- `lab.css` and `lab.js` — styles and interactions used by the completed page.
- `index.html` — the lab guide.

The movie titles, reviews and ratings are sample content for this exercise. They are not real movie listings.

## Problems I looked for in the starter

1. The page used generic `div` elements for the main page areas.
2. Some controls looked like buttons but were clickable `div` elements.
3. Some images had missing or unhelpful alternative text.
4. Some text was difficult to read against its background.
5. The form inputs did not have proper labels or useful error messages.
6. The images did not show a clear responsive-image or loading strategy.
7. The page did not show an external application script loaded with `defer`.

## What each step demonstrates

| Step | Change | What to look at |
|---|---|---|
| 1 | Semantic HTML | The page landmarks and the skip link |
| 2 | Buttons and links | Real buttons and controls that can be used with a keyboard |
| 3 | Image alternatives | The `alt` text on informative images and empty alt text on the decorative image |
| 4 | Contrast | Text and control colors |
| 5 | Form feedback | Labels, error messages and focus on the first invalid field |
| 6 | Responsive images | `srcset`, `sizes`, image dimensions and loading behavior |
| 7 | Script loading | The external JavaScript file loaded with `defer` |

## How the page works

- The search checks the movie titles. Leaving the search field empty shows all cards again.
- Each **View Details** button opens or closes the description belonging to that movie.
- The form checks the name and email fields. It only shows a local validation message; it does not send or save personal information.
- The first movie images load eagerly. Images further down the page use lazy loading.
- The page uses a skip link and visible keyboard focus styles.

## Checks to perform before submitting

Please do these checks in the browser yourself and record what happens. Do not mark a check as passed until you have tried it.

- [ ] Open `broken.html` and note at least two problems you can see.
- [ ] Open `solution.html` and search for a movie title.
- [ ] Search for a title that is not in the list and check the result message.
- [ ] Open and close each movie's **View Details** panel.
- [ ] Submit the form empty and check the error messages and focus.
- [ ] Enter a name and a valid email, then check the success message.
- [ ] Use Tab, Shift+Tab, Enter and Space without using the mouse.
- [ ] Open the page at phone width and desktop width.
- [ ] If the assignment requires Lighthouse, run it on the deployed page and keep your own report.

## Before-and-after audit

The PDF report records the scores visible in the supplied screenshots:

| Category | Before | After |
|---|---:|---:|
| Performance | 92 | 100 |
| Accessibility | 69 | 100 |
| Best Practices | 100 | 100 |

The scores were transcribed from those screenshots. I have not treated them as a new Lighthouse run. A score of 100 also does not prove that every accessibility requirement has been met. Keyboard and screen-reader checks still matter.

The original report is named `CineReview_Week9_2_Audit_Report_Abinash_Lamichhane.pdf`. The lab guide links to it, but the PDF itself still needs to be uploaded to the `week9-2/` folder in GitHub before the published download link will work.

## My explanation to prepare for the professor

Before the demonstration, I should be able to explain in my own words:

- Why a real `button` is better than a clickable `div`.
- What the `alt` attribute is for.
- How `srcset` and `sizes` help the browser choose an image.
- Why `width` and `height` are useful on images.
- What the `defer` attribute changes about script loading.
- How I checked the skip link and form using only the keyboard.

I should use my own test results when answering. This README is a guide to the files and checks, not proof that every check has already been completed.
