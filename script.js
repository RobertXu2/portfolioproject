document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('themeToggle');
  const icon = btn.querySelector('i');

  // Determine initial theme: stored > system > light
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');
  setTheme(initial);

  btn.addEventListener('click', () => {
    const next = (document.body.getAttribute('data-theme') === 'light') ? 'dark' : 'light';
    setTheme(next);
  });

  function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // update toggle state + icon
    const isDark = theme === 'dark';
    btn.setAttribute('aria-pressed', String(isDark));
    icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
});


