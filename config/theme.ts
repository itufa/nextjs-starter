// ============================================================
// config/theme.ts
// ------------------------------------------------------------
// Настройки темы: ключ хранения, дефолт и список тем.
// ============================================================

import type { Theme } from '@/types'

export const THEME_STORAGE_KEY = 'theme'

export const DEFAULT_THEME: Theme = 'default'

export const THEMES: readonly Theme[] = ['default', 'dark']
