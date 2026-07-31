"use client";

import { useState } from "react";
import { HomeFooter } from "@/components/shared/HomeFooter";
import { useFooterRevealMotion } from "@/hooks/useFooterRevealMotion";
import { useHeroIntroParallax } from "@/hooks/useHeroIntroParallax";
import { useHorizonShift } from "@/hooks/useHorizonShift";
import { usePrefersReducedMotion } from "@/hooks/useRevealMotion";
import { useProcessPageAnimations } from "../hooks/useProcessAnimations";
import { ChangeSection } from "./ChangeSection";
import { OpeningSection } from "./OpeningSection";
import { PhaseBreakdownSection } from "./PhaseBreakdownSection";
import { ResponsibilitiesSection } from "./ResponsibilitiesSection";
import { SyncSection } from "./SyncSection";
import { TimelineSection } from "./TimelineSection";

export function ProcessPageContent() {
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
		</div>
	);
}
