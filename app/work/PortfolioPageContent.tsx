"use client";

import { HomeFooter } from "@/components/shared/HomeFooter";
import { SEO } from "@/components/shared/SEO";
import { useFooterRevealMotion } from "@/hooks/useFooterRevealMotion";
import {
	useHeroIntroParallax,
	useHeroIntroParallaxWithMode,
} from "@/hooks/useHeroIntroParallax";
import { useHorizonShift } from "@/hooks/useHorizonShift";
import { CtaSection } from "./partials/CtaSection";
import { EvidenceIndex } from "./partials/EvidenceIndex";
import { Hero } from "./partials/Hero";
import { IntroSection } from "./partials/InspectorSection";
import { ReadingGuide } from "./partials/ReadingGuide";

export function PortfolioPageContent() {
	const horizonShift = useHorizonShift();
	const {
		heroRef,
		introRef,
		reducedMotion: heroIntroReducedMotion,
	} = useHeroIntroParallax();
	const {
		heroRef: projectIndexRef,
		introRef: readingGuideRef,
		triggerRef: projectIndexTriggerRef,
		reducedMotion: projectIndexReducedMotion,
	} = useHeroIntroParallaxWithMode({ trigger: "backBottom" });
	const {
		testimonialsRef: sectionRef,
		footerRef,
		reducedMotion,
	} = useFooterRevealMotion();

	return (
		<div className="min-h-screen bg-paper text-ink">
			<SEO
				description="DarviLabs portfolio - seven client systems documented through the problem, the decision, and the measured outcome."
				title="Portfolio - DarviLabs"
			/>
			<main id="main-content">
				<div className="relative">
					<Hero
						horizonShift={horizonShift}
						parallaxDisabled={heroIntroReducedMotion}
						sectionRef={heroRef}
						stickyLayerEnabled
					/>
					<IntroSection
						parallaxDisabled={heroIntroReducedMotion}
						sectionRef={introRef}
					/>
				</div>
				<div className="relative">
					<EvidenceIndex
						parallaxDisabled={projectIndexReducedMotion}
						sectionRef={projectIndexRef}
						stickyLayerEnabled
					/>
					<div
						aria-hidden="true"
						className="pointer-events-none h-px"
						ref={projectIndexTriggerRef as React.Ref<HTMLDivElement>}
					/>
					<ReadingGuide
						parallaxDisabled={projectIndexReducedMotion}
						sectionRef={readingGuideRef}
					/>
				</div>
				<div className="relative">
					<CtaSection
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
