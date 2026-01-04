// Menu toggle functionality
const toggle = document.querySelector(".header-menu");
const nav = document.querySelector(".menu");

if (toggle && nav) {
   toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
   });
}

// Fermer le menu quand on clique sur un lien de navigation
document.addEventListener("click", (e) => {
   if (!nav) return;
   
   // Si c'est un lien du menu avec un href valide (pas #)
   if (e.target.classList.contains("menu-link") && e.target.getAttribute("href") !== "#") {
      // Petit délai pour laisser le clic se terminer avant de fermer
      setTimeout(() => {
         nav.classList.remove("open");
      }, 50);
   }
   
   // Fermer le menu si on clique en dehors
   if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove("open");
   }
});
