"use client";

import { HomeFooter } from "@/components/shared/HomeFooter";
import { useFooterRevealMotion } from "@/hooks/useFooterRevealMotion";
import { useHeroIntroParallax } from "@/hooks/useHeroIntroParallax";
import { useHorizonShift } from "@/hooks/useHorizonShift";
import { WhereWeWorkSection } from "../about/partials/WhereWeWorkSection";
import { ContactFaqSection } from "./partials/ContactFaqSection";
import { ContactFormSection } from "./partials/ContactFormSection";
import { ContactHero } from "./partials/ContactHero";

export default function Page() {
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
			<main id="main-content">
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
			</main>
		</div>
	);
}
