// ============================================================
// components/layout/Cluster/Cluster.tsx
// ------------------------------------------------------------
// Горизонтальная группа.
//
// gap:     xs | sm | md | lg | xl
// align:   start | center | end | stretch
// justify: start | center | end | between
// wrap:    переносить ли элементы
//
// Пример:
//   <Cluster gap="sm">
//     <Badge>Новое</Badge>
//     <Badge>Важно</Badge>
//   </Cluster>
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Cluster.module.scss'

type ClusterGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type ClusterAlign = 'start' | 'center' | 'end' | 'stretch'
type ClusterJustify = 'start' | 'center' | 'end' | 'between'

type ClusterProps = {
	children: React.ReactNode
	gap?: ClusterGap
	align?: ClusterAlign
	justify?: ClusterJustify
	wrap?: boolean
	className?: string
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>

const ALIGN_CLASS: Record<ClusterAlign, string> = {
	start: styles.alignStart,
	center: styles.alignCenter,
	end: styles.alignEnd,
	stretch: styles.alignStretch,
}

const JUSTIFY_CLASS: Record<ClusterJustify, string> = {
	start: styles.justifyStart,
	center: styles.justifyCenter,
	end: styles.justifyEnd,
	between: styles.justifyBetween,
}

export function Cluster({
	children,
	gap = 'sm',
	align = 'center',
	justify = 'start',
	wrap = true,
	className,
	...rest
}: ClusterProps) {
	return (
		<div
			className={cn(
				styles.cluster,
				styles[gap],
				ALIGN_CLASS[align],
				JUSTIFY_CLASS[justify],
				!wrap && styles.noWrap,
				className,
			)}
			{...rest}
		>
			{children}
		</div>
	)
}
