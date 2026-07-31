import type { Metadata } from "next";
import { NotFoundPage } from "@/components/shared/NotFoundPage";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { getBlogArticle, getBlogArticlePath, blogArticles } from "../data/blogArticles";
import { BlogDetailPageContent } from "../partials/BlogDetailPageContent";

interface BlogDetailPageProps {
	params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
	return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
	params,
}: BlogDetailPageProps): Promise<Metadata> {
	const { slug } = await params;
	const article = getBlogArticle(slug);

	if (!article) {
		return {};
	}

	const title = `${article.title} — ${SITE_NAME}`;
	const description = article.description;

	return {
		title: article.title,
		description,
		openGraph: {
			title,
			description,
			type: "article",
			images: [{ url: article.image }],
		},
		twitter: {
			title,
			description,
			images: [{ url: article.image }],
		},
		alternates: {
			canonical: getBlogArticlePath(article.slug),
		},
	};
}

export default async function Page({ params }: BlogDetailPageProps) {
	const { slug } = await params;
	const article = getBlogArticle(slug);

	if (!article) {
		return <NotFoundPage />;
	}

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Article",
		author: {
			"@type": "Organization",
			name: SITE_NAME,
			url: SITE_URL,
		},
		datePublished: article.date,
		description: article.description,
		headline: article.title,
		image: article.image,
		mainEntityOfPage: `${SITE_URL}${getBlogArticlePath(article.slug)}`,
	};

	return (
		<>
			<script
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				type="application/ld+json"
			/>
			<BlogDetailPageContent article={article} />
		</>
	);
}
