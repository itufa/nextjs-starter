// ============================================================
// components/ui/Breadcrumbs/Breadcrumbs.tsx
// ------------------------------------------------------------
// Хлебные крошки.
//
// Пункты: items ({ label, href? })
// Последний пункт — текущая страница (aria-current="page").
//
// Пример:
//   <Breadcrumbs items={[
//     { label: "Главная", href: "/" },
//     { label: "Каталог", href: "/catalog" },
//     { label: "Компоненты" },
//   ]} />
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Breadcrumbs.module.scss'

type BreadcrumbItem = {
	label: string
	href?: string
}

type BreadcrumbsProps = {
	items: BreadcrumbItem[]
	label?: string
	className?: string
}

export function Breadcrumbs({
	items,
	label = 'Хлебные крошки',
	className,
}: BreadcrumbsProps) {
	return (
		<nav aria-label={label} className={cn(styles.nav, className)}>
			<ol className={styles.list}>
				{items.map((item, index) => {
					const isLast = index === items.length - 1

					return (
						<li key={`${item.label}-${index}`} className={styles.item}>
							{item.href && !isLast ? (
								<a href={item.href} className={styles.link}>
									{item.label}
								</a>
							) : (
								<span
									className={styles.current}
									aria-current={isLast ? 'page' : undefined}
								>
									{item.label}
								</span>
							)}
							{!isLast && (
								<span className={styles.separator} aria-hidden='true'>
									/
								</span>
							)}
						</li>
					)
				})}
			</ol>
		</nav>
	)
}
