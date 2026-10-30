
(() => {
    const storageKey = "northstar-theme";
    const root = document.documentElement;

    function getSavedTheme() {
        try {
            const saved = localStorage.getItem(storageKey);

            if (saved === "light" || saved === "dark") {
                return saved;
            }
        } catch (error) {
            // Continue without saved preferences if storage is unavailable.
        }

        return window.matchMedia("(prefers-color-scheme: light)").matches
            ? "light"
            : "dark";
    }

    function applyTheme(theme) {
        const selectedTheme = theme === "light" ? "light" : "dark";

        root.setAttribute("data-theme", selectedTheme);

        const toggle = document.getElementById("themeToggle");

        if (toggle) {
            const isDark = selectedTheme === "dark";

            toggle.innerHTML = isDark
                ? '<span aria-hidden="true">☀️</span><span>Light mode</span>'
                : '<span aria-hidden="true">🌙</span><span>Dark mode</span>';

            toggle.setAttribute(
                "aria-label",
                isDark ? "Switch to light theme" : "Switch to dark theme"
            );

            toggle.setAttribute("aria-pressed", String(isDark));
        }
    }

    // Apply the initial theme before the user interacts.
    applyTheme(getSavedTheme());

    document.addEventListener("DOMContentLoaded", () => {
        const toggle = document.getElementById("themeToggle");

        if (!toggle) return;

        toggle.addEventListener("click", () => {
            const currentTheme = root.getAttribute("data-theme");
            const nextTheme = currentTheme === "dark" ? "light" : "dark";

            applyTheme(nextTheme);

            try {
                localStorage.setItem(storageKey, nextTheme);
            } catch (error) {
                // Theme still works for this page if storage is unavailable.
            }
        });
    });
})();
