const tabRoots = document.querySelectorAll("[data-tabs]");

for (const root of tabRoots) {
  const tabs = root.querySelectorAll("[data-tab]");
  const panels = root.querySelectorAll("[data-panel]");

  for (const tab of tabs) {
    tab.addEventListener("click", () => {
      const key = tab.dataset.tab;

      for (const item of tabs) {
        item.classList.toggle("active", item === tab);
      }

      for (const panel of panels) {
        panel.classList.toggle("active", panel.dataset.panel === key);
      }
    });
  }
}

const navLinks = [...document.querySelectorAll(".nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    for (const link of navLinks) {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    }
  },
  {
    rootMargin: "-25% 0px -60% 0px",
    threshold: [0.05, 0.2, 0.5],
  },
);

for (const section of sections) {
  observer.observe(section);
}

for (const pre of document.querySelectorAll("pre")) {
  const code = pre.querySelector("code");
  if (!code) continue;

  const button = document.createElement("button");
  button.className = "copy-button";
  button.type = "button";
  button.textContent = "Copiar";
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(code.innerText);
      button.textContent = "Copiado";
      setTimeout(() => {
        button.textContent = "Copiar";
      }, 1400);
    } catch {
      button.textContent = "No disponible";
      setTimeout(() => {
        button.textContent = "Copiar";
      }, 1400);
    }
  });

  pre.append(button);
}
