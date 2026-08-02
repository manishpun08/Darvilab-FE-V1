"use client";

import { label, shell } from "@/lib/classes";
import type { BlogArticle } from "../interface";
import { BlogArticleCard } from "./BlogArticleCard";
import { useBlogSectionReveal } from "@/hooks/usePortfolioAnimations";
import { useRef } from "react";

interface ArticleGridProps {
	articles: BlogArticle[];
	parallaxDisabled?: boolean;
	sectionRef?: React.RefObject<HTMLElement | null> | null;
	stickyLayerEnabled?: boolean;
}

export function ArticleGrid({
	articles,
	parallaxDisabled = false,
	sectionRef = null,
	stickyLayerEnabled = false,
}: ArticleGridProps) {
	const enableParallax = Boolean(sectionRef) && !parallaxDisabled;
	const containerRef = useRef<HTMLDivElement>(null);
	
	useBlogSectionReveal(containerRef);

	return (
		<section
			className={`bg-paper py-[clamp(72px,8vw,112px)] ${
				stickyLayerEnabled
					? "sticky top-0 z-10 overflow-hidden overflow-x-clip"
					: enableParallax
						? "relative z-10"
						: ""
			}`}
			id="articles"
			ref={sectionRef}
		>
			<div
				className={shell}
				ref={containerRef}
				style={
					enableParallax
						? {
								transform:
									"translate3d(0, calc(var(--work-intro-layer-y, 0px) + var(--work-hero-layer-y, 0px)), 0)",
								willChange: "transform",
							}
						: undefined
				}
			>
				<div className="grid grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] items-end gap-[clamp(40px,8vw,120px)] border-b border-line pb-10 max-lg:grid-cols-1">
					<div>
						<div className="flex items-center gap-3 text-dl-blue">
							<span className={label} data-animate-tagline>Latest blogs</span>
							<i className="h-px w-16 bg-dl-blue origin-left" data-animate-tagline />
						</div>
						<h2 className="mt-8 max-w-[720px] text-[clamp(42px,4.5vw,64px)] font-semibold leading-[0.92] tracking-[-0.066em] text-ink">
							<span className="block" data-animate-line>Three blog reads</span>
							<span className="block" data-animate-line>worth your time.</span>
						</h2>
					</div>
					<p className="mb-[10px] max-w-[520px] text-[16px] leading-[1.72] text-muted lg:ml-auto" data-animate-paragraph>
						Short, practical records from the decisions behind product design,
						web systems, and architecture work.
					</p>
				</div>

				<div className="mt-12 grid gap-x-[clamp(20px,3vw,36px)] gap-y-14 md:grid-cols-2 lg:grid-cols-3">
					{articles.map((article) => (
						<div key={article.slug} data-animate-card>
							<BlogArticleCard article={article} />
						</div>
					))}
				</div>

				<div className="mt-12 flex justify-center">
					<button
						className="inline-flex min-h-11 items-center gap-3 border-b border-ink pb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink transition hover:border-dl-blue hover:text-dl-blue"
						type="button"
					>
						Load More →
					</button>
				</div>
			</div>
		</section>
	);
}
