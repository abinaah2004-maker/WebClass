const stage = Number(document.body.dataset.stage || 1);
const stages = [
["Semantic HTML","The page uses meaningful header, navigation, main, section, article and footer landmarks, with a clear heading structure and skip link.","<header> · <nav> · <main> · <section> · <article> · <footer>"],
["Buttons and descriptive links","Clickable-looking divs become real buttons and links. Search and movie detail controls can now be operated by keyboard as well as mouse.","<button type=\"button\" aria-expanded=\"false\">View Details</button>"],
["Image alternatives","Informative images receive meaningful alt text. The featured decorative image uses alt=\"\" so assistive technology can skip it.","<img src=\"movie.jpg\" alt=\"Movie poster artwork for The Last Harbor\">"],
["Color contrast","Text, metadata, buttons and links use stronger foreground/background contrast so normal text is easier to read.","color: #555; /* on a light background */"],
["Form labels and errors","Newsletter fields now have visible labels, connected error messages and focus management for invalid entries.","<input required aria-describedby=\"email-error\"><p id=\"email-error\"></p>"],
["Image loading and layout stability","Images reserve space with intrinsic width and height. Above-the-fold images load eagerly; lower images can load lazily.","<img width=\"400\" height=\"500\" loading=\"lazy\" decoding=\"async\">"],
["Deferred scripts","The completed page loads its external JavaScript after the HTML has been parsed. The defer attribute keeps execution predictable while the app remains interactive.","<!-- End of body -->\n<script src=\"lab.js\" defer></script>"]
];
const info = stages[stage - 1];
document.getElementById("stage-title").textContent = "Step " + stage + " · " + info[0];
document.getElementById("stage-description").textContent = info[1];
document.getElementById("stage-count").textContent = String(stage).padStart(2, "0") + " / 07";
document.getElementById("stage-code").textContent = info[2];

if (stage < 2) {
  document.querySelectorAll("button").forEach(button => {
    const replacement = document.createElement("div");
    replacement.className = "fake-btn";
    replacement.textContent = button.textContent;
    button.replaceWith(replacement);
  });
}
document.querySelectorAll('label[for="movie-search"]').forEach(label => label.hidden = stage < 2);
document.querySelectorAll('label[for="name"], label[for="email"]').forEach(label => label.hidden = stage < 5);

document.querySelectorAll("img").forEach((img, index) => {
  if (stage < 3) {
    img.removeAttribute("alt");
  } else if (index === 3) {
    img.alt = "";
  } else {
    img.alt = ["Movie poster artwork for Echoes of Tomorrow", "Movie poster artwork for The Last Harbor", "Movie poster artwork for Crimson Horizon"][index] || "Featured movie artwork";
  }
  if (stage < 6) {
    img.removeAttribute("width");
    img.removeAttribute("height");
    img.removeAttribute("loading");
    img.removeAttribute("decoding");
  } else {
    img.width = index === 3 ? 300 : 400;
    img.height = index === 3 ? 400 : 500;
    img.decoding = "async";
    img.loading = index >= 2 ? "lazy" : "eager";
  }
});

if (stage >= 2 && stage < 7) {
  document.querySelectorAll("[data-details]").forEach(button => button.addEventListener("click", () => {
    const panel = document.getElementById(button.dataset.details);
    const open = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(open));
    panel.hidden = !open;
  }));
  const search = document.getElementById("search-form");
  if (search) search.addEventListener("submit", event => {
    event.preventDefault();
    const query = document.getElementById("movie-search").value.toLowerCase().trim();
    let count = 0;
    document.querySelectorAll(".movie-card").forEach(card => {
      const match = card.querySelector("h3").textContent.toLowerCase().includes(query);
      card.hidden = !match;
      if (match) count++;
    });
    document.getElementById("search-status").textContent = count + " movie(s) found.";
  });
}

if (stage >= 5 && stage < 7) {
  const form = document.getElementById("newsletter-form");
  if (form) form.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("subscriber-name");
    const email = document.getElementById("subscriber-email");
    const errors = [
      ["name", name, name.value.trim() ? "" : "Please enter your name."],
      ["email", email, !email.value.trim() ? "Please enter your email address." : email.validity.valid ? "" : "Enter a valid email address."]
    ];
    let firstInvalid = null;
    errors.forEach(([id, input, message]) => {
      document.getElementById("subscriber-" + id + "-error").textContent = message;
      input.setAttribute("aria-invalid", String(Boolean(message)));
      if (message && !firstInvalid) firstInvalid = input;
    });
    document.getElementById("form-status").textContent = firstInvalid ? "Please correct the highlighted fields." : "Form validated. This classroom demo does not send or store your information.";
    if (firstInvalid) firstInvalid.focus();
  });
}
