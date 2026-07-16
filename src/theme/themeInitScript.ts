// Runs before first paint (injected via gatsby-ssr's setPreBodyComponents) to
// set data-theme on <html> synchronously, avoiding a flash of the wrong theme.
export const themeInitScript = `(function () {
  try {
    var STORAGE_KEY = "macosta-theme";
    var stored = window.localStorage.getItem(STORAGE_KEY);
    var mode =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    document.documentElement.setAttribute("data-theme", mode);
  } catch (e) {}
})();`
