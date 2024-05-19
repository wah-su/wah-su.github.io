const bodyElement = document.getElementById("body");
const logo = document.getElementById("logo");
const themeToggle = document.getElementById("theme-toggle");

const setTheme = (theme) => {
  bodyElement.classList.remove(theme == "light" ? "dark" : "light");
  bodyElement.classList.add(theme == "light" ? "light" : "dark");
  theme == "light"
    ? (themeToggle.checked = false)
    : (themeToggle.checked = true);
  logo.src = `/public/images/logo-${theme}.svg`;
  localStorage.setItem("theme", theme);
};

function updateTheme() {
  let theme = localStorage.getItem("theme");
  if (theme) {
    setTheme(theme);
  } else {
    setTheme("light");
  }
}

themeToggle.addEventListener("click", () => {
  let theme = localStorage.getItem("theme");
  if (theme == "light") {
    setTheme("dark");
    renderCards();
  } else {
    setTheme("light");
    renderCards();
  }
});

updateTheme();
