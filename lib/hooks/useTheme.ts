'use client'

import { useCallback, useSyncExternalStore } from 'react'
import type { Theme } from '@/types'
import { DEFAULT_THEME, THEME_STORAGE_KEY } from '@/config/theme'

function subscribe(onChange: () => void) {
	const observer = new MutationObserver(onChange)

	observer.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ['data-theme'],
	})

	return () => observer.disconnect()
}

function getSnapshot(): Theme {
	if (typeof document === 'undefined') {
		return DEFAULT_THEME
	}

	return document.documentElement.getAttribute('data-theme') === 'dark'
		? 'dark'
		: 'default'
}

function getServerSnapshot(): Theme {
	return DEFAULT_THEME
}

export function useTheme() {
	const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

	const setTheme = useCallback((next: Theme) => {
		document.documentElement.setAttribute('data-theme', next)

		try {
			window.localStorage.setItem(THEME_STORAGE_KEY, next)
		} catch {
			// localStorage может быть недоступен.
		}
	}, [])

	const toggleTheme = useCallback(() => {
		setTheme(getSnapshot() === 'dark' ? 'default' : 'dark')
	}, [setTheme])

	return { theme, setTheme, toggleTheme }
}
