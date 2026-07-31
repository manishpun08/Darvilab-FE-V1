"use client";

import { useState } from "react";
import { HomeFooter } from "@/components/shared/HomeFooter";
import { SEO } from "@/components/shared/SEO";
import { useFooterRevealMotion } from "@/hooks/useFooterRevealMotion";
import { useHeroIntroParallax } from "@/hooks/useHeroIntroParallax";
import { useHorizonShift } from "@/hooks/useHorizonShift";
import { usePrefersReducedMotion } from "@/hooks/useRevealMotion";
import { useProcessPageAnimations } from "./hooks/useProcessAnimations";
import { ChangeSection } from "./partials/ChangeSection";
import { OpeningSection } from "./partials/OpeningSection";
import { PhaseBreakdownSection } from "./partials/PhaseBreakdownSection";
import { ResponsibilitiesSection } from "./partials/ResponsibilitiesSection";
import { SyncSection } from "./partials/SyncSection";
import { TimelineSection } from "./partials/TimelineSection";

export default function ProcessPage() {
	const reducedMotion = usePrefersReducedMotion();
	const {
		heroRef,
		introRef,
		reducedMotion: heroIntroReducedMotion,
	} = useHeroIntroParallax();
	const {
		testimonialsRef: sectionRef,
		footerRef,
		reducedMotion: footerReducedMotion,
	} = useFooterRevealMotion();
	const [openIndex, setOpenIndex] = useState(0);
	useProcessPageAnimations({ closeAccordion: () => setOpenIndex(-1) });
	const horizonShift = useHorizonShift();

	return (
		<div className="min-h-screen overflow-x-clip bg-paper text-ink">
			<SEO
				description="DarviLabs process - a transparent breakdown of every stage, what we do, what we need from you, and what you receive."
				title="Our Process - DarviLabs"
			/>
			<main id="main-content">
				<div className="relative">
					<OpeningSection
						horizonShift={horizonShift}
						parallaxDisabled={heroIntroReducedMotion}
						sectionRef={heroRef}
						stickyLayerEnabled
					/>
					<TimelineSection
						parallaxDisabled={heroIntroReducedMotion}
						sectionRef={introRef}
					/>
				</div>
				<PhaseBreakdownSection
					openIndex={openIndex}
					reducedMotion={reducedMotion}
					setOpenIndex={setOpenIndex}
				/>
				<ResponsibilitiesSection />
				<ChangeSection />
				<div className="relative">
					<SyncSection
						parallaxDisabled={footerReducedMotion}
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
