// Menu toggle functionality
const toggle = document.querySelector(".header-menu");
const nav = document.querySelector(".menu");

toggle.addEventListener("click", () => {
   nav.classList.toggle("open");
});
