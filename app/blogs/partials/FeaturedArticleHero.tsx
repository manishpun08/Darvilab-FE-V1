"use client";

import {
	getLockedHeroBackgroundImage,
	LockedHeroBackgroundLayers,
} from "@/components/shared/lockedHeroBackground";
import { SmartLink } from "@/components/shared/SmartLink";
import { getHeroIntroParallaxStyle } from "@/hooks/useHeroIntroParallax";
import { label, shell } from "@/lib/classes";
import { getBlogArticlePath } from "../data/blogArticles";
import type { BlogArticle } from "../interface";
import { BlogArticleMeta } from "./BlogArticleCard";

interface FeaturedArticleHeroProps {
	article: BlogArticle;
	horizonShift: number;
	parallaxDisabled?: boolean;
	sectionRef?: React.RefObject<HTMLElement | null> | null;
	stickyLayerEnabled?: boolean;
}

export function FeaturedArticleHero({
	article,
	horizonShift,
	parallaxDisabled = false,
	sectionRef = null,
	stickyLayerEnabled = false,
}: FeaturedArticleHeroProps) {
	const enableParallax = Boolean(sectionRef) && !parallaxDisabled;

	return (
		<section
			className={`min-h-screen overflow-hidden overflow-x-clip bg-[#050b1f] pt-[72px] text-white ${
				stickyLayerEnabled ? "sticky top-0 z-0" : "relative"
			}`}
			id="top"
			ref={sectionRef}
		>
			<div
				className="pointer-events-none absolute inset-0"
				style={getHeroIntroParallaxStyle(enableParallax, "--work-hero-layer-y")}
			>
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: getLockedHeroBackgroundImage(horizonShift),
					}}
				/>
				<LockedHeroBackgroundLayers />
			</div>

			<div
				className={`${shell} relative z-10 grid min-h-[calc(100vh-72px)] content-center py-[clamp(44px,6vh,72px)]`}
			>
				<article className="grid gap-[clamp(32px,5vh,56px)]">
					<div className="relative grid min-h-10 items-center">
						<i className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/16" />
						<span
							className={`${label} relative justify-self-start bg-[#050b1f] pr-4 text-white/74`}
						>
							Featured article
						</span>
					</div>

					<div className="grid items-center gap-[clamp(40px,7vw,104px)] lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.72fr)]">
						<div className="min-w-0">
							<span className={`${label} text-ice`}>{article.category}</span>
							<h1 className="mt-5 max-w-[820px] text-[clamp(46px,5.6vw,84px)] font-semibold leading-[0.9] tracking-[-0.066em] text-white">
								{article.title}
							</h1>

							<p className="mt-7 max-w-[540px] text-[16px] leading-[1.68] text-white/74">
								{article.description}
							</p>

							<div className="mt-8">
								<BlogArticleMeta article={article} dark />
							</div>

							<SmartLink
								className="mt-10 inline-flex min-h-11 items-center gap-3 border-b border-white/30 pb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition hover:border-white"
								href={getBlogArticlePath(article.slug)}
							>
								Read article →
							</SmartLink>
						</div>

						<SmartLink
							aria-label={`Read ${article.title}`}
							className="group relative block aspect-[1.48] overflow-hidden bg-white/[0.04] [clip-path:polygon(0_0,calc(100%_-_72px)_0,100%_72px,100%_100%,48px_100%,0_calc(100%_-_48px))] max-lg:aspect-[1.72] max-md:[clip-path:polygon(0_0,calc(100%_-_48px)_0,100%_48px,100%_100%,32px_100%,0_calc(100%_-_32px))] max-sm:[clip-path:polygon(0_0,calc(100%_-_34px)_0,100%_34px,100%_100%,24px_100%,0_calc(100%_-_24px))]"
							href={getBlogArticlePath(article.slug)}
						>
							<img
								alt=""
								className="h-full w-full object-cover transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025] motion-reduce:transition-none"
								loading="eager"
								src={article.image}
							/>
						</SmartLink>
					</div>
				</article>
			</div>
		</section>
	);
}
