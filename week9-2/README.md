# Week 9.2 — Performance and accessibility

Start at [the Week 9.2 overview](index.html).

## Coursework parts

1. [Homework report](homework.html) — CineReview before-and-after audit, recorded Lighthouse results, changes and limitations.
2. [Practice exercises](exercises/index.html) — E1 Lighthouse, E2 responsive images, and E3 script loading.
3. [Seven-step CineReview lab](lab/index.html) — broken starter, progressive stages, and completed solution.

## Exercise pages

- [E1 — Lighthouse audit](E1_Lighthouse.html)
- [E2 — Responsive images](E2_Responsive_Images.html)
- [E3 — defer and async](E3_Script_Loading.html)

## E2 — Responsive images

The exercise uses a credited photograph by Aayush Gupta from Unsplash. The page offers JPEG and WebP image candidates at 400px and 800px widths using `srcset`, `sizes`, and `picture`. It also includes a small browser check that displays the selected image URL and its intrinsic dimensions.

To verify the result, resize the browser or use a phone, then inspect the image request in Developer Tools → Network → Img. The selected candidate can vary with viewport width, device pixel ratio, and browser format support. Do not report byte-size savings unless you measure the actual downloaded files in your own browser.

Photo: [Aayush Gupta — “Summers of Lisbon”](https://unsplash.com/photos/yellow-tram-in-historic-lisbon-street-ljhCEaHYWJ8), published March 26, 2020, used under the [Unsplash License](https://unsplash.com/license).

## Audit evidence and accuracy

The CineReview homework page records the figures transcribed from your supplied report: Performance 92 → 100, Accessibility 69 → 100, and Best Practices 100 → 100. These are historical screenshot results, not a fresh run performed by the website.

The original PDF has not yet been copied into this repository. The HTML homework page preserves the key report content; upload the PDF here if a downloadable copy is required.

## Submission checks

- Run E1 and save your own Lighthouse report if the professor requests it.
- Test E2 at wide and narrow widths and capture the Network panel if image-selection evidence is required.
- Run the lab checks yourself before describing them as passed.
- Keep screenshots from your own browser; do not invent audit results.

Prepared by Abinash Lamichhane · Gachon University · Web Programming.
