(() => {
  const button = document.querySelector(".theme-toggle");
  if (!button) return;
  const saved = localStorage.getItem("week10-theme");
  if (saved === "light") document.body.classList.add("light");
  button.addEventListener("click", () => {
    document.body.classList.toggle("light");
    localStorage.setItem("week10-theme", document.body.classList.contains("light") ? "light" : "dark");
    button.setAttribute("aria-label", document.body.classList.contains("light") ? "Switch to dark theme" : "Switch to light theme");
  });
})();