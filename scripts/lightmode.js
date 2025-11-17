let lightMode = localStorage.getItem("lightmode");
const lightModeToggle = document.querySelector('#theme-switch');

const enableLightMode = () => {
    document.body.classList.add('light-mode');
    localStorage.setItem("lightmode", "enabled");
}

const disableLightMode = () => {
    document.body.classList.remove('light-mode');
    localStorage.setItem("lightmode", null);
}

if (lightMode === 'enabled') {
    enableLightMode();
}

lightModeToggle.addEventListener('click', () => {
    lightMode = localStorage.getItem("lightmode");
    lightMode !== 'enabled' ? enableLightMode() : disableLightMode();
});