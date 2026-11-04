// ============================================================
// lib/theme.ts
// ------------------------------------------------------------
// Тема: ключ localStorage и скрипт инициализации.
//
// Скрипт выполняется до гидратации (beforeInteractive) и
// выставляет data-theme до первой отрисовки — без мигания.
// ============================================================

export const THEME_STORAGE_KEY = 'theme'

export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('${THEME_STORAGE_KEY}');
    var theme = stored === 'dark' || stored === 'default'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (error) {
    // localStorage может быть недоступен — остаёмся на дефолтной теме.
  }
})();
`
