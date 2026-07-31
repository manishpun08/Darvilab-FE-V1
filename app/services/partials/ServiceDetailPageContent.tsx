"use client";

import { useEffect } from "react";
import { FaqSection } from "@/components/shared/FaqSection";
import { HomeFooter } from "@/components/shared/HomeFooter";
import { useFooterRevealMotion } from "@/hooks/useFooterRevealMotion";
import { useHeroIntroParallax } from "@/hooks/useHeroIntroParallax";
import { useHorizonShift } from "@/hooks/useHorizonShift";
import type { ServiceDetail } from "../interface/service.interface";
import { ApproachSection } from "../partials/ApproachSection";
import { ConversationSection } from "../partials/ConversationSection";
import { OutcomesSection } from "../partials/OutcomesSection";
import { ProblemSpaceSection } from "../partials/ProblemSpaceSection";
import { ServiceHero } from "../partials/ServiceHero";

interface ServiceDetailPageContentProps {
	service: ServiceDetail;
}

export function ServiceDetailPageContent({
	service,
}: ServiceDetailPageContentProps) {
	const horizonShift = useHorizonShift();
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

	useEffect(() => {
		window.history.replaceState(null, "", `/services/${service.slug}`);
	}, [service.slug]);

	return (
		<div className="min-h-screen bg-paper text-ink">
			<div className="relative isolate">
				<ServiceHero
					horizonShift={horizonShift}
					parallaxDisabled={heroIntroReducedMotion}
					sectionRef={heroRef}
					service={service}
					stickyLayerEnabled
				/>
				<ProblemSpaceSection
					parallaxDisabled={heroIntroReducedMotion}
					sectionRef={introRef}
					service={service}
				/>
			</div>
			<ApproachSection service={service} />
			<OutcomesSection service={service} />
			<FaqSection
				className="mt-0 bg-paper pb-[clamp(84px,9vw,128px)] pt-[clamp(84px,9vw,128px)]"
				eyebrow="COMMON QUESTIONS"
				id="faq"
				items={service.faqs}
				title="Common questions"
			/>
			<div className="relative">
				<ConversationSection
					parallaxDisabled={reducedMotion}
					sectionRef={sectionRef}
					service={service}
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
