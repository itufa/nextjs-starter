// ============================================================
// lib/theme.ts
// ------------------------------------------------------------
// Скрипт инициализации темы.
//
// Выполняется inline в <head> до отрисовки body, чтобы
// не было вспышки светлой темы.
// ============================================================

import { THEME_STORAGE_KEY } from '@/config/theme'

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
