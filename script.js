const themeToggle = document.getElementById('theme-toggle-checkbox');
const themeLink = document.getElementById('theme-link');

themeToggle.addEventListener('change', function () {
    if (themeToggle.checked) {
        themeLink.href = "https://mrseasy1.github.io/real100..girl/"; // Перехід на нічний сайт
    } else {
        themeLink.href = "https://mrseasy1.github.io/real100.girl/"; // Перехід на денний сайт
    }
});
