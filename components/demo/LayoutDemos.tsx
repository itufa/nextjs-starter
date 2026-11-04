'use client'

import { useState } from 'react'
import { Hamburger, MobileMenu } from '@/components/layout'
import type { NavLink } from '@/components/layout'

type LayoutDemosProps = {
	links: NavLink[]
}

export function LayoutDemos({ links }: LayoutDemosProps) {
	const [open, setOpen] = useState(false)

	return (
		<div className='flex items-center gap-4 flex-wrap'>
			<Hamburger open={open} onClick={() => setOpen(value => !value)} />
			<span className='text-muted'>Открыть мобильное меню</span>

			<MobileMenu open={open} onClose={() => setOpen(false)} links={links} />
		</div>
	)
}
