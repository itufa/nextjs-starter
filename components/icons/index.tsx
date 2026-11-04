import type { ComponentProps } from 'react'
import { Icon } from '@/components/ui'

export type IconProps = Omit<ComponentProps<typeof Icon>, 'children'>

export function ArrowRight(props: IconProps) {
	return (
		<Icon {...props}>
			<path d='M5 12h14M13 6l6 6-6 6' />
		</Icon>
	)
}

export function ArrowLeft(props: IconProps) {
	return (
		<Icon {...props}>
			<path d='M19 12H5M11 6l-6 6 6 6' />
		</Icon>
	)
}

export function Check(props: IconProps) {
	return (
		<Icon {...props}>
			<path d='M20 6 9 17l-5-5' />
		</Icon>
	)
}

export function Close(props: IconProps) {
	return (
		<Icon {...props}>
			<path d='M18 6 6 18M6 6l12 12' />
		</Icon>
	)
}

export function Menu(props: IconProps) {
	return (
		<Icon {...props}>
			<path d='M4 6h16M4 12h16M4 18h16' />
		</Icon>
	)
}

export function Sun(props: IconProps) {
	return (
		<Icon {...props}>
			<circle cx='12' cy='12' r='4' />
			<path d='M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41' />
		</Icon>
	)
}

export function Moon(props: IconProps) {
	return (
		<Icon {...props}>
			<path d='M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z' />
		</Icon>
	)
}

export function Search(props: IconProps) {
	return (
		<Icon {...props}>
			<circle cx='11' cy='11' r='8' />
			<path d='m21 21-4.3-4.3' />
		</Icon>
	)
}

export function ChevronDown(props: IconProps) {
	return (
		<Icon {...props}>
			<path d='m6 9 6 6 6-6' />
		</Icon>
	)
}

export function ChevronRight(props: IconProps) {
	return (
		<Icon {...props}>
			<path d='m9 18 6-6-6-6' />
		</Icon>
	)
}

export function Plus(props: IconProps) {
	return (
		<Icon {...props}>
			<path d='M12 5v14M5 12h14' />
		</Icon>
	)
}

export function ExternalLink(props: IconProps) {
	return (
		<Icon {...props}>
			<path d='M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6' />
		</Icon>
	)
}
