import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

type BuildMetadataOptions = {
	title?: string
	description?: string
	path?: string
	image?: string
	noIndex?: boolean
}

export function buildMetadata({
	title = siteConfig.name,
	description = siteConfig.description,
	path = '/',
	image = '/opengraph-image',
	noIndex = false,
}: BuildMetadataOptions = {}): Metadata {
	const url = new URL(path, siteConfig.url).toString()
	const imageUrl = new URL(image, siteConfig.url).toString()
	const ogImage = {
		url: imageUrl,
		width: 1200,
		height: 630,
		alt: title,
	}

	return {
		title,
		description,
		alternates: {
			canonical: url,
		},
		openGraph: {
			type: 'website',
			url,
			title,
			description,
			siteName: siteConfig.name,
			locale: siteConfig.locale,
			images: [ogImage],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
		robots: noIndex
			? {
					index: false,
					follow: false,
				}
			: undefined,
	}
}
