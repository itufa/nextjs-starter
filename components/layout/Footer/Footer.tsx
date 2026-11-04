// ============================================================
// components/layout/Footer/Footer.tsx
// ------------------------------------------------------------
// Нижний блок.
//
// brand/description — левая колонка
// columns          — колонки ссылок
// copyright        — нижняя строка
//
// Пример:
//   <Footer
//     brand="Next.js Starter"
//     description="Микро-фреймворк для лендингов"
//     columns={[{ title: "Продукт", links: [...] }]}
//     copyright="© 2026 Next.js Starter"
//   />
// ============================================================

import Link from 'next/link'
import { cn } from '@/lib/cn'
import styles from './Footer.module.scss'

export type FooterLink = {
	label: string
	href: string
}

export type FooterColumn = {
	title: string
	links: FooterLink[]
}

type FooterProps = {
	brand?: React.ReactNode
	description?: React.ReactNode
	columns?: FooterColumn[]
	copyright?: React.ReactNode
	className?: string
}

export function Footer({
	brand,
	description,
	columns = [],
	copyright,
	className,
}: FooterProps) {
	return (
		<footer className={cn(styles.footer, className)}>
			<div className='container'>
				<div className={styles.top}>
					<div className={styles.brand}>
						{brand && <div className={styles.brandName}>{brand}</div>}
						{description && (
							<p className={styles.description}>{description}</p>
						)}
					</div>

					{columns.map(column => (
						<div key={column.title} className={styles.column}>
							<h3 className={styles.columnTitle}>{column.title}</h3>
							<ul className={styles.list}>
								{column.links.map(link => (
									<li key={link.href}>
										<Link href={link.href} className={styles.link}>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{copyright && (
					<div className={styles.bottom}>
						<div>{copyright}</div>
					</div>
				)}
			</div>
		</footer>
	)
}
