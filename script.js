const year = document.querySelector("#year");
const menuButton = document.querySelector(".menu-toggle");
const menuLinks = document.querySelectorAll(".site-nav a");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuButton) {
  menuButton.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});
