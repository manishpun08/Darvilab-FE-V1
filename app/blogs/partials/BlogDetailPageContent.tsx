"use client";

import { HomeFooter } from "@/components/shared/HomeFooter";
import { useFooterRevealMotion } from "@/hooks/useFooterRevealMotion";
import type { BlogArticle } from "../interface";
import { BlogDetailBody } from "./BlogDetailBody";
import { BlogDetailIntro } from "./BlogDetailIntro";
import { MoreBlogsSection } from "./MoreBlogsSection";
import { NextStepSection } from "./NextStepSection";

interface BlogDetailPageContentProps {
	article: BlogArticle;
}

export function BlogDetailPageContent({ article }: BlogDetailPageContentProps) {
	const {
		testimonialsRef: sectionRef,
		footerRef,
		reducedMotion,
	} = useFooterRevealMotion();

	return (
		<div className="min-h-screen bg-paper text-ink">
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
		</div>
	);
}
