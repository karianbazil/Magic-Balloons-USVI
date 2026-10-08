// theme.js
// Switches the site between light and dark mode.
// The colors themselves live in style.css as CSS variables;
// this script only changes the data-theme attribute on the <html> element.

// Grab the toggle button from the page
const toggleButton = document.getElementById('theme-toggle');

// Applies a theme ("light" or "dark") to the page
function applyTheme(theme) {
    // Setting data-theme="dark" activates the [data-theme="dark"] variables in style.css
    document.documentElement.setAttribute('data-theme', theme);

    // Show a sun in dark mode (click for light) and a moon in light mode (click for dark)
    toggleButton.textContent = theme === 'dark' ? '☀️' : '🌙';

    // Remember the choice so it persists after a page refresh
    localStorage.setItem('theme', theme);
}

// On page load: use the saved choice if there is one,
// otherwise match the visitor's operating system setting
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));

// When the button is clicked, flip to the opposite theme
toggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});