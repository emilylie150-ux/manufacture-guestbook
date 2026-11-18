// Paste your Google Form or guestbook page link here
const GUESTBOOK_URL = "https://forms.cloud.microsoft/r/3V4aAYXtK4";

const button = document.getElementById("guestbook-btn");
button.href = GUESTBOOK_URL;

button.addEventListener("click", () => {
  if (navigator.vibrate) navigator.vibrate(15);
});

const logo = document.querySelector(".navbar__logo");
const brand = document.querySelector(".navbar__brand");

function showLogoPlaceholder() {
  brand.classList.add("is-empty");
}

logo.addEventListener("error", showLogoPlaceholder);
if (logo.complete && logo.naturalWidth === 0) showLogoPlaceholder();