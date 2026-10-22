document.documentElement.classList.remove("no-js");

// Fill in the latest release for any element with data-release-repo.
// Purely cosmetic: download links point at releases/latest and work without it.
document.querySelectorAll("[data-release-repo]").forEach(async (el) => {
  try {
    const res = await fetch(`https://api.github.com/repos/${el.dataset.releaseRepo}/releases/latest`);
    if (!res.ok) return;
    const { tag_name, published_at } = await res.json();
    const version = tag_name.replace(/^v/, "");
    if (el.dataset.format === "short") {
      el.textContent = version;
      return;
    }
    const date = new Date(published_at).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
    el.textContent = `Version ${version} · ${date}`;
  } catch {
    // Offline or rate-limited: keep the static fallback text.
  }
});

// Hairline under the sticky header once the page scrolls.
const header = document.querySelector(".site-header");
if (header) {
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// Fade sections in as they enter the viewport.
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }
  }, { rootMargin: "0px 0px -8% 0px" });
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("in"));
}
