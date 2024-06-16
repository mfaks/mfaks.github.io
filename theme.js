document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    if (currentTheme === "dark") {
        document.documentElement.classList.add('sl-theme-dark');
        themeToggle.checked = true;
    } else {
        document.documentElement.classList.remove('sl-theme-dark');
        themeToggle.checked = false;
    }

    themeToggle.addEventListener('sl-change', () => {
        if (themeToggle.checked) {
            document.documentElement.classList.add('sl-theme-dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('sl-theme-dark');
            localStorage.setItem('theme', 'light');
        }
    });
});
