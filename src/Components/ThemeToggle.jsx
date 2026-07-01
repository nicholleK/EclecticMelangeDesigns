import React, { useEffect, useState } from "react";

const THEMES = ["gold", "plum", "teal", "coral"];

// Cycles the site's accent palette and remembers the choice.
function ThemeToggle() {
  const [theme, setTheme] = useState("gold");

  function apply(next) {
    THEMES.forEach((t) => document.body.classList.remove(`theme-${t}`));
    if (next !== "gold") document.body.classList.add(`theme-${next}`);
  }

  useEffect(() => {
    const saved = localStorage.getItem("emd-theme") || "gold";
    apply(saved);
    setTheme(saved);
  }, []);

  function cycle() {
    const next = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length];
    setTheme(next);
    apply(next);
    localStorage.setItem("emd-theme", next);
  }

  return (
    <button
      className="theme-toggle"
      onClick={cycle}
      aria-label="Change accent colour"
      title={`Accent: ${theme} — tap to change`}
    >
      <i className="fa-solid fa-palette"></i>
    </button>
  );
}

export default ThemeToggle;
