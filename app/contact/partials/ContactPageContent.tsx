"use client";

import { HomeFooter } from "@/components/shared/HomeFooter";
import { useFooterRevealMotion } from "@/hooks/useFooterRevealMotion";
import { useHeroIntroParallax } from "@/hooks/useHeroIntroParallax";
import { useHorizonShift } from "@/hooks/useHorizonShift";
import { WhereWeWorkSection } from "../../about/partials/WhereWeWorkSection";
import { ContactFaqSection } from "./ContactFaqSection";
import { ContactFormSection } from "./ContactFormSection";
import { ContactHero } from "./ContactHero";

export function ContactPageContent() {
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

	return (
		<div className="min-h-screen bg-paper text-ink">
			<div className="relative">
				<ContactHero
					horizonShift={horizonShift}
					parallaxDisabled={heroIntroReducedMotion}
					sectionRef={heroRef}
					stickyLayerEnabled
				/>
				<ContactFormSection
					parallaxDisabled={heroIntroReducedMotion}
					sectionRef={introRef}
				/>
			</div>
			<ContactFaqSection />
			<WhereWeWorkSection />
			<div className="relative">
				<HomeFooter
					footerRef={footerRef}
					revealMotionDisabled={reducedMotion}
					stickyRevealEnabled
				/>
			</div>
		</div>
	);
}
