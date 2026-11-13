"use strict";

// Movie detail buttons
document.querySelectorAll("[data-details]").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = document.getElementById(button.dataset.details);
    if (!panel) return;

    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    panel.hidden = isOpen;
  });
});

// Simple title search. An empty search shows every movie again.
const searchForm = document.getElementById("search-form");

if (searchForm) {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.getElementById("movie-search");
    const status = document.getElementById("search-status");
    if (!input || !status) return;

    const query = input.value.trim().toLowerCase();
    let matches = 0;

    document.querySelectorAll(".movie-card").forEach((card) => {
      const title = card.querySelector("h3");
      const found = !query || (title && title.textContent.toLowerCase().includes(query));

      card.hidden = !found;
      if (found) matches += 1;
    });

    status.textContent = query
      ? `${matches} movie(s) found for "${input.value.trim()}".`
      : "Showing all movies.";
  });
}

// This form is a local exercise. It validates input but does not send data.
const newsletterForm = document.getElementById("newsletter-form");

if (newsletterForm) {
  const fields = [
    document.getElementById("subscriber-name"),
    document.getElementById("subscriber-email")
  ].filter(Boolean);

  function validateField(input) {
    const error = document.getElementById(`${input.id}-error`);
    let message = "";

    if (!input.value.trim()) {
      message = input.type === "email"
        ? "Please enter your email address."
        : "Please enter your name.";
    } else if (input.type === "email" && !input.validity.valid) {
      message = "Please enter a valid email address.";
    }

    if (error) error.textContent = message;
    input.setAttribute("aria-invalid", String(Boolean(message)));
    return message === "";
  }

  fields.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.getAttribute("aria-invalid") === "true") {
        validateField(input);
      }
    });
  });

  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const invalidFields = fields.filter((input) => !validateField(input));
    const status = document.getElementById("newsletter-status");

    if (status) {
      status.textContent = invalidFields.length
        ? "Please correct the highlighted fields."
        : "The form is valid. This classroom demo does not send or store your information.";
    }

    if (invalidFields.length) invalidFields[0].focus();
  });
}
