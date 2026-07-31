"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { HomeFooter } from "@/components/shared/HomeFooter";
import { SEO } from "@/components/shared/SEO";
import { useFooterRevealMotion } from "@/hooks/useFooterRevealMotion";
import { useHorizonShift } from "@/hooks/useHorizonShift";
import { usePrefersReducedMotion } from "@/hooks/useRevealMotion";
import {
	getCaseStudy,
	getCaseStudyReadingTime,
	getRelatedCaseStudies,
} from "../data/caseStudyDetails";
import { sectionOrder } from "../data/sectionOrder";
import type { CaseStudy } from "../interface/caseStudy.interface";
import { CaseStudyHero } from "../partials/CaseStudyHero";
import { DecisionsSection } from "../partials/DecisionsSection";
import { InlineCta } from "../partials/InlineCta";
import { NarrativeSection } from "../partials/NarrativeSection";
import { OutcomeSection } from "../partials/OutcomeSection";
import { PerspectiveSection } from "../partials/PerspectiveSection";
import { RelatedProjectsStrip } from "../partials/RelatedProjectsStrip";
import { SectionNav } from "../partials/SectionNav";

function resolveCaseStudy(
	routeId?: string,
	queryId?: string | null,
): CaseStudy {
	return getCaseStudy(routeId || queryId || "");
}

export default function CaseStudyPage() {
	const params = useParams<{ id: string }>();
	const id = params.id;
	const searchParams = useSearchParams();
	const reducedMotion = usePrefersReducedMotion();
	const {
		testimonialsRef: sectionRef,
		footerRef,
		reducedMotion: footerReducedMotion,
	} = useFooterRevealMotion();
	const caseStudy = useMemo(
		() => resolveCaseStudy(id, searchParams.get("case")),
		[id, searchParams],
	);
	const relatedProjects = useMemo(
		() => getRelatedCaseStudies(caseStudy),
		[caseStudy],
	);
	const readingTime = useMemo(
		() => getCaseStudyReadingTime(caseStudy),
		[caseStudy],
	);
	const [activeSection, setActiveSection] = useState(sectionOrder[0].id);
	const horizonShift = useHorizonShift();
	const [entered, setEntered] = useState(reducedMotion);

	useEffect(() => {
		if (reducedMotion) {
			setEntered(true);
			return undefined;
		}

		const timer = window.setTimeout(() => setEntered(true), 80);
		return () => window.clearTimeout(timer);
	}, [reducedMotion]);

	useEffect(() => {
		const sections = sectionOrder
			.map((section) => document.getElementById(section.id))
			.filter((el): el is HTMLElement => el !== null);

		if (!sections.length || typeof IntersectionObserver === "undefined") {
			return undefined;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				const visibleEntry = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

				if (visibleEntry?.target?.id) {
					setActiveSection(visibleEntry.target.id);
				}
			},
			{ rootMargin: "-24% 0px -54% 0px", threshold: [0.1, 0.3, 0.55] },
		);

		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, []);

	return (
		<div className="min-h-screen bg-paper text-ink">
			<SEO
				description={`${caseStudy.project} case study - the full evidence behind the client system decision and outcome.`}
				jsonLd={{
					"@context": "https://schema.org",
					"@type": "Article",
					author: {
						"@type": "Organization",
						name: "DarviLabs",
						url: "https://darvilabs.com",
					},
					dateModified: "2026-07-13",
					datePublished: "2026-01-01",
					description: `${caseStudy.project} case study - the full evidence behind the client system decision and outcome.`,
					headline: `${caseStudy.project} Case Study`,
					image: "https://darvilabs.com/about-map-blend.png",
					mainEntityOfPage: `https://darvilabs.com/case-studies/${caseStudy.slug}`,
				}}
				ogType="article"
				title={`${caseStudy.project} Case Study - DarviLabs`}
			/>
			<main id="main-content">
				<CaseStudyHero
					caseStudy={caseStudy}
					entered={entered}
					horizonShift={horizonShift}
					reducedMotion={reducedMotion}
				/>


				<section className="bg-white">
					<div className="mx-auto grid w-full max-w-[1280px] grid-cols-[280px_minmax(0,1fr)] gap-0 max-md:grid-cols-1">
						<div className="sticky top-[96px] h-fit pt-24 max-md:hidden">
							<SectionNav activeSection={activeSection} caseStudy={caseStudy} />
						</div>

						<div className="min-w-0 px-8 py-[80px] max-lg:px-7 max-md:px-5 max-md:py-14">
							<div className="mx-auto grid max-w-[780px] gap-24 max-md:gap-20">
								<NarrativeSection
									accent={caseStudy.accent}
									highlight={caseStudy.situationHighlight}
									id="situation"
									no="01"
									paragraphs={caseStudy.situation}
									title="The Situation"
								/>
								<NarrativeSection
									accent={caseStudy.accent}
									highlight={caseStudy.challengeQuote}
									id="challenge"
									no="02"
									paragraphs={caseStudy.challenge}
									title="The Real Challenge"
								/>
								<DecisionsSection
									accent={caseStudy.accent}
									caseStudy={caseStudy}
								/>
								<OutcomeSection
									accent={caseStudy.accent}
									caseStudy={caseStudy}
								/>
								<PerspectiveSection
									accent={caseStudy.accent}
									caseStudy={caseStudy}
								/>
								<InlineCta />
							</div>
						</div>
					</div>
				</section>
				<div className="relative">
					<RelatedProjectsStrip
						parallaxDisabled={footerReducedMotion}
						relatedProjects={relatedProjects}
						sectionRef={sectionRef}
					/>
					<HomeFooter
						footerRef={footerRef}
						revealMotionDisabled={footerReducedMotion}
						stickyRevealEnabled
					/>
				</div>
			</main>
		</div>
	);
}
