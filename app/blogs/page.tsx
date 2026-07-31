"use client";

import { HomeFooter } from "@/components/shared/HomeFooter";
import { SEO } from "@/components/shared/SEO";
import { useFooterRevealMotion } from "@/hooks/useFooterRevealMotion";
import { useHeroIntroParallax } from "@/hooks/useHeroIntroParallax";
import { useHorizonShift } from "@/hooks/useHorizonShift";
import { blogArticles, getFeaturedArticle } from "./data/blogArticles";
import { ArticleGrid } from "./partials/ArticleGrid";
import { BlogCTA } from "./partials/BlogCTA";
import { FeaturedArticleHero } from "./partials/FeaturedArticleHero";

const articleIndexItems = blogArticles
	.filter((article) => !article.curatedFeatured)
	.slice(0, 3);

export default function Page() {
	const horizonShift = useHorizonShift();
	const featuredArticle = getFeaturedArticle();
	const {
		heroRef,
		introRef,
		reducedMotion: heroIntroReducedMotion,
	} = useHeroIntroParallax();
	const {
		testimonialsRef: sectionRef,
		footerRef,
		reducedMotion,
	} = useFooterRevealMotion();

	return (
		<div className="min-h-screen bg-paper text-ink">
			<SEO
				description="DarviLabs blog - service notes, build decisions, and operating lessons from product design, AI, web development, architecture, cloud, and support work."
				title="Blogs - DarviLabs"
			/>
			<main id="main-content">
				<div className="relative">
					<FeaturedArticleHero
						article={featuredArticle}
						horizonShift={horizonShift}
						parallaxDisabled={heroIntroReducedMotion}
						sectionRef={heroRef}
						stickyLayerEnabled
					/>
					<ArticleGrid
						articles={articleIndexItems}
						parallaxDisabled={heroIntroReducedMotion}
						sectionRef={introRef}
						stickyLayerEnabled
					/>
				</div>
				<div className="relative">
					<BlogCTA sectionRef={sectionRef} />
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
