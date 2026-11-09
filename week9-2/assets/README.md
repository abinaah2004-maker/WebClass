# E2 image source

The responsive image exercise uses a photograph hosted by Unsplash. It is loaded in the browser at 400px and 800px candidate widths in JPEG and WebP formats, so this folder does not need copied image exports.

Photo: Aayush Gupta, “Summers of Lisbon,” published March 26, 2020.
Original: https://unsplash.com/photos/yellow-tram-in-historic-lisbon-street-ljhCEaHYWJ8
License: https://unsplash.com/license

The page uses `srcset`, `sizes`, and `picture` to let the browser choose an appropriate resource. Check the actual request and transferred size in Developer Tools → Network → Img.