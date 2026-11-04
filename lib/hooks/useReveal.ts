'use client'

import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

type RevealOptions = {
	root?: Element | Document | null
	rootMargin?: string
	threshold?: number | number[]
	once?: boolean
}

export function useReveal<T extends HTMLElement = HTMLDivElement>(
	options: RevealOptions = {},
): { ref: RefObject<T | null>; visible: boolean } {
	const { root = null, rootMargin = '0px', threshold = 0.15, once = true } = options
	const ref = useRef<T>(null)
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const element = ref.current

		if (!element) {
			return
		}

		if (typeof IntersectionObserver === 'undefined') {
			const frame = requestAnimationFrame(() => setVisible(true))
			return () => cancelAnimationFrame(frame)
		}

		const observer = new IntersectionObserver(
			entries => {
				const entry = entries[0]

				if (entry?.isIntersecting) {
					setVisible(true)

					if (once) {
						observer.disconnect()
					}
				} else if (!once) {
					setVisible(false)
				}
			},
			{ root, rootMargin, threshold },
		)

		observer.observe(element)

		return () => observer.disconnect()
	}, [root, rootMargin, threshold, once])

	return { ref, visible }
}
