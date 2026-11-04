import type { Metadata } from 'next'
import { Badge, Breadcrumbs, Card, Progress, Tabs } from '@/components/ui'
import { buildMetadata } from '@/lib/seo'
import styles from './page.module.scss'

export const metadata: Metadata = buildMetadata({
	title: 'Кабинет',
	description: 'Пример приватной части приложения с боковой навигацией.',
	path: '/app',
})

const tabItems = [
	{
		id: 'activity',
		label: 'Активность',
		content: <p>За последнюю неделю добавлено 3 проекта и 12 задач.</p>,
	},
	{
		id: 'tasks',
		label: 'Задачи',
		content: <p>Открытых задач: 8. Просроченных: 2.</p>,
	},
]

export default function AppDashboardPage() {
	return (
		<>
			<Breadcrumbs
				items={[
					{ label: 'Главная', href: '/' },
					{ label: 'Кабинет' },
				]}
			/>

			<h1 className={styles.block}>Обзор</h1>
			<p className='text-muted'>
				Демонстрационная приватная часть: здесь используется Sidebar
				и компоненты каталога.
			</p>

			<div className={styles.metrics}>
				<Card title='Проекты'>
					<div className={styles.value}>12</div>
					<div className={styles.note}>
						<Badge variant='success' dot>
							+2 за месяц
						</Badge>
					</div>
				</Card>

				<Card title='Задачи'>
					<div className={styles.value}>48</div>
					<div className={styles.note}>
						<Badge variant='warning' dot>
							8 открыто
						</Badge>
					</div>
				</Card>

				<Card title='Команда'>
					<div className={styles.value}>6</div>
					<div className={styles.note}>
						<Badge variant='info' dot>
							Онлайн
						</Badge>
					</div>
				</Card>
			</div>

			<Card title='Прогресс запуска' className={styles.block}>
				<Progress value={68} label='Готовность запуска' />
				<Progress
					value={42}
					variant='success'
					size='sm'
					className={styles.block}
					aria-label='Готовность контента'
				/>
			</Card>

			<Card title='Активность' className={styles.block}>
				<Tabs items={tabItems} />
			</Card>
		</>
	)
}
