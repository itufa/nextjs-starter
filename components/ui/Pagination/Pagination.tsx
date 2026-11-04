// ============================================================
// components/ui/Pagination/Pagination.tsx
// ------------------------------------------------------------
// Пагинация.
//
// page        — текущая страница (1..totalPages)
// totalPages  — всего страниц
// hrefForPage — функция построения ссылки
//
// Показывает первую, последнюю и соседние страницы,
// остальное схлопывает в многоточие.
//
// Пример:
//   <Pagination
//     page={3}
//     totalPages={10}
//     hrefForPage={page => `/blog?page=${page}`}
//   />
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Pagination.module.scss'

type PaginationProps = {
	page: number
	totalPages: number
	hrefForPage: (page: number) => string
	label?: string
	className?: string
}

type PageToken = number | 'ellipsis'

function getPages(page: number, totalPages: number): PageToken[] {
	if (totalPages <= 7) {
		return Array.from({ length: totalPages }, (_, index) => index + 1)
	}

	const pages = new Set<number>([
		1,
		totalPages,
		page - 1,
		page,
		page + 1,
	])

	const sorted = [...pages]
		.filter(item => item >= 1 && item <= totalPages)
		.sort((a, b) => a - b)

	const result: PageToken[] = []

	sorted.forEach((item, index) => {
		if (index > 0 && item - sorted[index - 1] > 1) {
			result.push('ellipsis')
		}

		result.push(item)
	})

	return result
}

export function Pagination({
	page,
	totalPages,
	hrefForPage,
	label = 'Пагинация',
	className,
}: PaginationProps) {
	if (totalPages < 1) {
		return null
	}

	const current = Math.min(Math.max(page, 1), totalPages)
	const pages = getPages(current, totalPages)

	return (
		<nav aria-label={label} className={cn(styles.nav, className)}>
			<ul className={styles.list}>
				<li>
					{current > 1 ? (
						<a
							href={hrefForPage(current - 1)}
							className={styles.arrow}
							aria-label='Предыдущая страница'
						>
							←
						</a>
					) : (
						<span
							className={cn(styles.arrow, styles.disabled)}
							aria-disabled='true'
						>
							←
						</span>
					)}
				</li>

				{pages.map((item, index) =>
					item === 'ellipsis' ? (
						<li
							key={`ellipsis-${index}`}
							className={styles.ellipsis}
							aria-hidden='true'
						>
							…
						</li>
					) : (
						<li key={item}>
							{item === current ? (
								<span className={styles.current} aria-current='page'>
									{item}
								</span>
							) : (
								<a href={hrefForPage(item)} className={styles.link}>
									{item}
								</a>
							)}
						</li>
					),
				)}

				<li>
					{current < totalPages ? (
						<a
							href={hrefForPage(current + 1)}
							className={styles.arrow}
							aria-label='Следующая страница'
						>
							→
						</a>
					) : (
						<span
							className={cn(styles.arrow, styles.disabled)}
							aria-disabled='true'
						>
							→
						</span>
					)}
				</li>
			</ul>
		</nav>
	)
}
