"use client";

type SEOProps = {
	canonical?: string;
	description?: string;
	jsonLd?: Record<string, unknown> | Record<string, unknown>[];
	noindex?: boolean;
	ogImage?: string;
	ogType?: string;
	title?: string;
};

export function SEO(_props: SEOProps) {
	return null;
}
