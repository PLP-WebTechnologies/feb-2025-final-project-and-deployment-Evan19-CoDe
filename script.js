document.getElementById('themeToggle').addEventListener('click', () => {
  const root = document.documentElement;
  const isDark = root.style.getPropertyValue('--bg') === '#121212';

  if (isDark) {
    root.style.setProperty('--bg', '#ffffff');
    root.style.setProperty('--text', '#000000');
    localStorage.setItem('theme', 'light');
  } else {
    root.style.setProperty('--bg', '#121212');
    root.style.setProperty('--text', '#ffffff');
    localStorage.setItem('theme', 'dark');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.documentElement.style.setProperty('--bg', '#121212');
    document.documentElement.style.setProperty('--text', '#ffffff');
  }
});
