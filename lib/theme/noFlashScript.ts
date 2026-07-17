import { THEME_STORAGE_KEY } from "./tokens"

/**
 * Runs synchronously in <head>, before first paint, so the page never
 * flashes the wrong theme (US-02 CA3). Kept as a plain string (not JSX)
 * so it can be inlined verbatim via dangerouslySetInnerHTML.
 */
export const noFlashThemeScript = `(function(){try{var k=${JSON.stringify(
  THEME_STORAGE_KEY
)};var s=localStorage.getItem(k);var t=(s==="light"||s==="dark")?s:(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");document.documentElement.dataset.theme=t;}catch(e){}})();`
