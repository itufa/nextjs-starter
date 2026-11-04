// ============================================================
// components/sections/LogoCloud/LogoCloud.tsx
// ------------------------------------------------------------
// Логотипы клиентов.
//
// Пример:
//   <LogoCloud
//     title="Нам доверяют"
//     logos={['Acme', 'Globex', 'Initech']}
//   />
// ============================================================

import { cn } from '@/lib/cn'
import styles from './LogoCloud.module.scss'

type LogoCloudProps = {
	title?: React.ReactNode
	logos: React.ReactNode[]
	className?: string
}

export function LogoCloud({ title, logos, className }: LogoCloudProps) {
	return (
		<section className={cn('section', className)}>
			<div className='container'>
				{title && <p className={styles.title}>{title}</p>}

				<div className={styles.row}>
					{logos.map((logo, index) => (
						<div key={index} className={styles.logo}>
							{logo}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
