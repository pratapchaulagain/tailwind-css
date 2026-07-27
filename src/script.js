const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

// Load saved theme
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  themeIcon.classList.replace("ri-moon-line", "ri-sun-line");
} else {
  document.documentElement.classList.remove("dark");
  themeIcon.classList.replace("ri-sun-line", "ri-moon-line");
}

// Toggle theme
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
    themeIcon.classList.replace("ri-moon-line", "ri-sun-line");
  } else {
    localStorage.theme = "light";
    themeIcon.classList.replace("ri-sun-line", "ri-moon-line");
  }
});
