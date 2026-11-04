'use client'

import { useEffect } from 'react'
import type { RefObject } from 'react'

export function useClickOutside<T extends HTMLElement>(
	ref: RefObject<T | null>,
	handler: (event: PointerEvent) => void,
	enabled = true,
) {
	useEffect(() => {
		if (!enabled) {
			return
		}

		function onPointerDown(event: PointerEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				handler(event)
			}
		}

		document.addEventListener('pointerdown', onPointerDown)

		return () => document.removeEventListener('pointerdown', onPointerDown)
	}, [ref, handler, enabled])
}
