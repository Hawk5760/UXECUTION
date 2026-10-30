/**
 * Anti-flash theme bootstrap. Runs before paint so there is no light/dark flash
 * on first load. It reads the same persisted blob the Zustand store writes
 * (localStorage key "cosmoatlas:prefs:v1") and resolves a "system" or missing
 * preference through prefers-color-scheme, then toggles the theme class and
 * color-scheme hint on <html>. This must mirror src/theme/applyTheme.ts.
 */
(function () {
  try {
    var theme = "system";
    var raw = localStorage.getItem("cosmoatlas:prefs:v1");
    if (raw) {
      var stored = JSON.parse(raw);
      if (stored && (stored.theme === "light" || stored.theme === "dark" || stored.theme === "system")) {
        theme = stored.theme;
      }
    }

    var prefersLight =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    var light = theme === "light" || (theme === "system" && prefersLight);

    var root = document.documentElement;
    root.classList.toggle("theme-light", light);
    root.classList.toggle("theme-dark", !light);
    root.style.colorScheme = light ? "light" : "dark";
  } catch (e) {
    /* ignore storage / parse / matchMedia errors and keep the dark default */
  }
})();
