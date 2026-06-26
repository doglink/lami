document.querySelectorAll(".current-year").forEach((year) => {
  year.textContent = new Date().getFullYear();
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  window.addEventListener("pageshow", () => {
    document.body.classList.remove("page-is-leaving");
  });

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");

    if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    if (link.target && link.target !== "_self") {
      return;
    }

    if (link.hasAttribute("download")) {
      return;
    }

    const href = link.getAttribute("href");

    if (!href || /^(mailto:|tel:|sms:|javascript:)/i.test(href)) {
      return;
    }

    const destination = new URL(link.href, window.location.href);

    if (destination.origin !== window.location.origin) {
      return;
    }

    const samePage =
      destination.pathname === window.location.pathname &&
      destination.search === window.location.search;

    if (samePage && destination.hash) {
      return;
    }

    event.preventDefault();
    document.body.classList.add("page-is-leaving");

    window.setTimeout(() => {
      window.location.href = destination.href;
    }, 180);
  });
}
