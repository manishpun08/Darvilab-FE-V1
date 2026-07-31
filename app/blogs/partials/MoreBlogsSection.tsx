"use client";

import { getFooterParallaxStyle } from "@/hooks/useFooterRevealMotion";
import { label, shell } from "@/lib/classes";
import { blogArticles } from "../data/blogArticles";
import type { BlogArticle } from "../interface";
import { BlogArticleCard } from "./BlogArticleCard";

interface MoreBlogsSectionProps {
	article: BlogArticle;
	parallaxDisabled?: boolean;
	sectionRef?: React.RefObject<HTMLElement | null> | null;
}

export function MoreBlogsSection({
	article,
	parallaxDisabled = false,
	sectionRef = null,
}: MoreBlogsSectionProps) {
	const enableParallax = Boolean(sectionRef) && !parallaxDisabled;
	const relatedArticles = blogArticles
		.filter((item) => item.slug !== article.slug)
		.slice(0, 3);

	return (
		<section
			className={`bg-paper py-[clamp(72px,8vw,112px)] ${enableParallax ? "relative z-10" : ""}`}
			ref={sectionRef}
		>
			<div className={shell} style={getFooterParallaxStyle(enableParallax)}>
				<div className="grid grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] items-end gap-[clamp(40px,8vw,120px)] border-b border-line pb-10 max-lg:grid-cols-1">
					<div>
						<div className="flex items-center gap-3 text-dl-blue">
							<span className={label}>More blogs</span>
							<i className="h-px w-16 bg-dl-blue" />
						</div>
						<h2 className="mt-8 max-w-[720px] text-[clamp(42px,4.5vw,64px)] font-semibold leading-[0.92] tracking-[-0.066em] text-ink">
							Keep the decision trail moving.
						</h2>
					</div>
					<p className="mb-[10px] max-w-[520px] text-[16px] leading-[1.72] text-muted lg:ml-auto">
						Three more short reads from DarviLabs work across product, systems,
						and operating constraints.
					</p>
				</div>

				<div className="mt-12 grid gap-x-[clamp(20px,3vw,36px)] gap-y-14 md:grid-cols-2 lg:grid-cols-3">
					{relatedArticles.map((relatedArticle) => (
						<BlogArticleCard
							article={relatedArticle}
							key={relatedArticle.slug}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
