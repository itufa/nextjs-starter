// ============================================================
// components/ui/Icon/Icon.tsx
// ------------------------------------------------------------
// Обёртка для SVG-иконок.
//
// Размеры: sm | md | lg
// Цвет:    currentColor (наследуется от текста)
// Подпись: label — если не задана, иконка декоративная
//
// Примеры:
//   <Icon><path d="M20 6 9 17l-5-5" /></Icon>
//   <Icon size="lg" label="Поиск">
//     <circle cx="11" cy="11" r="8" />
//     <path d="m21 21-4.3-4.3" />
//   </Icon>
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Icon.module.scss'

type IconSize = 'sm' | 'md' | 'lg'

type IconProps = {
	children: React.ReactNode
	size?: IconSize
	label?: string
	className?: string
} & Omit<React.SVGProps<SVGSVGElement>, 'children'>

export function Icon({
	children,
	size = 'md',
	label,
	className,
	...rest
}: IconProps) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth={1.75}
			strokeLinecap='round'
			strokeLinejoin='round'
			role={label ? 'img' : undefined}
			aria-label={label}
			aria-hidden={label ? undefined : true}
			focusable='false'
			className={cn(styles.icon, styles[size], className)}
			{...rest}
		>
			{children}
		</svg>
	)
}
