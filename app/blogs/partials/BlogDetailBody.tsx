"use client";

import { label } from "@/lib/classes";
import { getBlogArticleSections } from "../data/blogArticles";
import type { BlogArticle } from "../interface";
import { InsightSection } from "./InsightSection";

interface BlogDetailBodyProps {
	article: BlogArticle;
}

export function BlogDetailBody({ article }: BlogDetailBodyProps) {
	const sections = getBlogArticleSections(article);

	return (
		<section className="bg-white">
			<div className="mx-auto grid w-full max-w-[1280px] grid-cols-[280px_minmax(0,1fr)] max-md:grid-cols-1">
				<aside className="pt-24 max-md:hidden">
					<div className="sticky top-[144px] px-4 py-2">
						<span className={`${label} text-muted`}>Insight structure</span>
						<ol className="mt-5 grid gap-3">
							{sections.map((section, index) => (
								<li
									className="grid grid-cols-[24px_1fr] gap-3 text-[13px] text-[#55607a]"
									key={section.heading}
								>
									<span className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-dl-blue">
										{String(index + 1).padStart(2, "0")}
									</span>
									<span className="tracking-[-0.02em]">{section.heading}</span>
								</li>
							))}
						</ol>
					</div>
				</aside>

				<div className="min-w-0 px-8 py-[80px] max-lg:px-7 max-md:px-5 max-md:py-14">
					<div className="mx-auto grid max-w-[780px] gap-[clamp(64px,8vw,96px)]">
						{sections.map((section, index) => (
							<InsightSection
								key={section.heading}
								no={String(index + 1).padStart(2, "0")}
								section={section}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
