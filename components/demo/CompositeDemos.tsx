'use client'

import { useState } from 'react'
import { Button, Drawer, Modal, Toast } from '@/components/ui'

export function CompositeDemos() {
	const [modalOpen, setModalOpen] = useState(false)
	const [drawerOpen, setDrawerOpen] = useState(false)
	const [toastOpen, setToastOpen] = useState(false)

	return (
		<>
			<Button onClick={() => setModalOpen(true)}>Modal</Button>
			<Button onClick={() => setDrawerOpen(true)}>Drawer</Button>
			<Button onClick={() => setToastOpen(true)}>Toast</Button>

			<Modal
				open={modalOpen}
				onClose={() => setModalOpen(false)}
				title='Модальное окно'
				footer={<Button onClick={() => setModalOpen(false)}>Понятно</Button>}
			>
				<p>
					Нативный &lt;dialog&gt;: фокус заперт внутри, Escape закрывает,
					фон затемнён.
				</p>
			</Modal>

			<Drawer
				open={drawerOpen}
				onClose={() => setDrawerOpen(false)}
				title='Панель'
				footer={
					<Button variant='outline' onClick={() => setDrawerOpen(false)}>
						Закрыть
					</Button>
				}
			>
				<p>Выдвижная панель справа. Закрывается по Escape и клику по фону.</p>
			</Drawer>

			<Toast
				open={toastOpen}
				onClose={() => setToastOpen(false)}
				title='Готово'
				message='Изменения сохранены.'
				variant='success'
			/>
		</>
	)
}
