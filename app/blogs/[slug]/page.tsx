"use client";

import { useParams } from "next/navigation";
import { HomeFooter } from "@/components/shared/HomeFooter";
import { NotFoundPage } from "@/components/shared/NotFoundPage";
import { SEO } from "@/components/shared/SEO";
import { useFooterRevealMotion } from "@/hooks/useFooterRevealMotion";
import { getBlogArticle, getBlogArticlePath } from "../data/blogArticles";
import { BlogDetailBody } from "../partials/BlogDetailBody";
import { BlogDetailIntro } from "../partials/BlogDetailIntro";
import { MoreBlogsSection } from "../partials/MoreBlogsSection";
import { NextStepSection } from "../partials/NextStepSection";

export default function Page() {
	const params = useParams<{ slug: string }>();
	const slug = params.slug;
	const article = getBlogArticle(slug);
	const {
		testimonialsRef: sectionRef,
		footerRef,
		reducedMotion,
	} = useFooterRevealMotion();

	if (!article) {
		return <NotFoundPage />;
	}

	return (
		<div className="min-h-screen bg-paper text-ink">
			<SEO
				description={article.description}
				jsonLd={{
					"@context": "https://schema.org",
					"@type": "Article",
					author: {
						"@type": "Organization",
						name: "DarviLabs",
						url: "https://darvilabs.com",
					},
					datePublished: article.date,
					description: article.description,
					headline: article.title,
					image: article.image,
					mainEntityOfPage: `https://darvilabs.com${getBlogArticlePath(article.slug)}`,
				}}
				ogImage={article.image}
				ogType="article"
				title={`${article.title} - DarviLabs`}
			/>
			<main id="main-content">
				<BlogDetailIntro article={article} />
				<BlogDetailBody article={article} />
				<NextStepSection />
				<div className="relative">
					<MoreBlogsSection
						article={article}
						parallaxDisabled={reducedMotion}
						sectionRef={sectionRef}
					/>
					<HomeFooter
						footerRef={footerRef}
						revealMotionDisabled={reducedMotion}
						stickyRevealEnabled
					/>
				</div>
			</main>
		</div>
	);
}
