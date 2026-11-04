'use client'

import Link from 'next/link'
import { Button } from '@/components/ui'
import styles from './status.module.scss'

export default function ErrorPage({
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	return (
		<main className='section'>
			<div className='container'>
				<p className={styles.code}>Ошибка</p>
				<h1 className={styles.title}>Что-то пошло не так</h1>
				<p className={styles.text}>
					Произошла непредвиденная ошибка. Попробуйте обновить страницу или
					вернуться на главную.
				</p>

				<div className={styles.actions}>
					<Button onClick={reset}>Попробовать снова</Button>
					<Link href='/' className={styles.link}>
						На главную
					</Link>
				</div>
			</div>
		</main>
	)
}
