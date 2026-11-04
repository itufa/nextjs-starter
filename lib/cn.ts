// ============================================================
// lib/cn.ts
// ------------------------------------------------------------
// Утилита для условной сборки className.
//
// Пример:
//   cn("btn", isPrimary && "btn-primary", { "btn-loading": isLoading })
//   → "btn btn-primary"
//
// Не тянет clsx — минимум, 5 строк.
// ============================================================

type ClassValue =
	| string
	| number
	| null
	| undefined
	| false
	| Record<string, boolean | undefined | null>

export function cn(...args: ClassValue[]): string {
	const out: string[] = []

	for (const arg of args) {
		if (!arg) continue

		if (typeof arg === 'string' || typeof arg === 'number') {
			out.push(String(arg))
		} else if (typeof arg === 'object') {
			for (const [key, value] of Object.entries(arg)) {
				if (value) out.push(key)
			}
		}
	}

	return out.join(' ')
}
