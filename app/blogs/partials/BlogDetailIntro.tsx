"use client";

import { FiShare2 } from "react-icons/fi";
import Image from "next/image";
import { label, shell } from "@/lib/classes";
import { getBlogArticlePath } from "../data/blogArticles";
import type { BlogArticle } from "../interface";
import { BlogArticleMeta } from "./BlogArticleCard";
import { useBlogHeroReveal } from "@/hooks/usePortfolioAnimations";
import { useRef } from "react";

interface BlogDetailIntroProps {
	article: BlogArticle;
}

function shareArticle(article: BlogArticle) {
	const url =
		typeof window === "undefined"
			? getBlogArticlePath(article.slug)
			: window.location.href;

	if (typeof navigator !== "undefined" && navigator.share) {
		navigator
			.share({ title: article.title, text: article.description, url })
			.catch(() => {});
		return;
	}

	if (typeof navigator !== "undefined" && navigator.clipboard) {
		navigator.clipboard.writeText(url).catch(() => {});
	}
}

export function BlogDetailIntro({ article }: BlogDetailIntroProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	useBlogHeroReveal(containerRef);

	return (
		<section className="bg-paper pt-[clamp(124px,13vw,172px)]" ref={containerRef}>
			<div className={shell}>
				<div className="grid items-end gap-[clamp(40px,8vw,120px)] border-b border-line pb-[clamp(48px,6vw,72px)] lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.7fr)]">
					<div>
						<div className="flex items-center gap-3 text-dl-blue">
							<span className={label} data-animate-tagline>{article.category}</span>
							<i className="h-px w-16 bg-dl-blue origin-left" data-animate-tagline />
						</div>
						<h1 className="mt-8 max-w-[920px] text-[clamp(3.4rem,6.2vw,6.9rem)] font-semibold leading-[0.86] tracking-[-0.072em] text-ink">
							<span className="block" data-animate-line>{article.title}</span>
						</h1>
					</div>

					<div className="grid gap-7 lg:justify-self-end">
						<p className="max-w-[520px] text-[17px] leading-[1.68] text-muted" data-animate-paragraph>
							{article.description}
						</p>
						<div className="grid items-center gap-x-6 gap-y-4 sm:grid-cols-[minmax(0,1fr)_auto]" data-animate-paragraph>
							<BlogArticleMeta article={article} />
							<button
								className="inline-flex min-h-9 items-center gap-2 justify-self-start text-[12px] font-semibold tracking-[0.01em] text-ink transition hover:text-dl-blue sm:justify-self-end"
								onClick={() => shareArticle(article)}
								type="button"
							>
								<FiShare2 className="text-[14px]" />
								<span>Share Article</span>
							</button>
						</div>
					</div>
				</div>

				<div className="py-[clamp(40px,5vw,64px)]">
					<div className="relative aspect-[2.35] overflow-hidden bg-surface max-md:aspect-[1.35]" data-animate-image>
						<Image
							alt={article.title}
							className="object-cover"
							fill
							priority
							sizes="(min-width: 768px) 1280px, 100vw"
							src={article.image}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
