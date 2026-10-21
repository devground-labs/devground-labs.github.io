// Fill in the latest release version for any element with data-release-repo.
// Purely cosmetic: download links point at releases/latest and work without it.
document.querySelectorAll("[data-release-repo]").forEach(async (el) => {
  try {
    const res = await fetch(`https://api.github.com/repos/${el.dataset.releaseRepo}/releases/latest`);
    if (!res.ok) return;
    const { tag_name, published_at } = await res.json();
    const date = new Date(published_at).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
    el.textContent = `Version ${tag_name.replace(/^v/, "")} · ${date}`;
  } catch {
    // Offline or rate-limited: keep the static fallback text.
  }
});
