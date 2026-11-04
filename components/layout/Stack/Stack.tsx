// ============================================================
// components/layout/Stack/Stack.tsx
// ------------------------------------------------------------
// Вертикальный ритм.
//
// gap:   xs | sm | md | lg | xl
// align: start | center | stretch
//
// Пример:
//   <Stack gap="md">
//     <div>Первый</div>
//     <div>Второй</div>
//   </Stack>
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Stack.module.scss'

type StackGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type StackAlign = 'start' | 'center' | 'stretch'

type StackProps = {
	children: React.ReactNode
	gap?: StackGap
	align?: StackAlign
	className?: string
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>

export function Stack({
	children,
	gap = 'md',
	align = 'stretch',
	className,
	...rest
}: StackProps) {
	return (
		<div
			className={cn(styles.stack, styles[gap], styles[align], className)}
			{...rest}
		>
			{children}
		</div>
	)
}
