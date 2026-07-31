"use client";

import { HomeFooter } from "@/components/shared/HomeFooter";
import { useFooterRevealMotion } from "@/hooks/useFooterRevealMotion";
import {
	useHeroIntroParallax,
	useHeroIntroParallaxWithMode,
} from "@/hooks/useHeroIntroParallax";
import { useHorizonShift } from "@/hooks/useHorizonShift";
import { AboutCtaSection } from "./AboutCtaSection";
import { AboutHero } from "./AboutHero";
import { OurClientsSection } from "./OurClientsSection";
import { PeopleSection } from "./PeopleSection";
import { ProofSection } from "./ProofSection";
import { WhereWeWorkSection } from "./WhereWeWorkSection";
import { WhyExistSection } from "./WhyExistSection";

export function AboutPageContent() {
	const horizonShift = useHorizonShift();
	const {
		heroRef,
		introRef,
		reducedMotion: heroIntroReducedMotion,
	} = useHeroIntroParallax();
	const {
		heroRef: whyRef,
		introRef: foundersIntroRef,
		reducedMotion: whyFoundersReducedMotion,
	} = useHeroIntroParallaxWithMode();
	const {
		heroRef: foundersOutroRef,
		introRef: specialistsIntroRef,
		reducedMotion: foundersSpecialistsReducedMotion,
	} = useHeroIntroParallaxWithMode();
	const {
		testimonialsRef: sectionRef,
		footerRef,
		reducedMotion,
	} = useFooterRevealMotion();

	const setWhyRef = (node: HTMLDivElement | null) => {
		introRef.current = node;
		whyRef.current = node;
	};

	const setFoundersIntroRef = (node: HTMLElement | null) => {
		(foundersIntroRef as React.MutableRefObject<HTMLElement | null>).current =
			node;
	};

	const setFoundersOutroRef = (node: HTMLElement | null) => {
		(foundersOutroRef as React.MutableRefObject<HTMLElement | null>).current =
			node;
	};

	return (
		<div className="min-h-screen bg-paper text-ink">
			<main id="main-content">
				<div className="relative">
					<AboutHero
						horizonShift={horizonShift}
						parallaxDisabled={heroIntroReducedMotion}
						sectionRef={heroRef}
						stickyLayerEnabled
					/>
					<WhyExistSection
						parallaxDisabled={heroIntroReducedMotion}
						sectionRef={
							setWhyRef as unknown as React.RefObject<HTMLElement | null>
						}
						stickyLayerEnabled
					/>
				</div>
				<PeopleSection
					foundersIntroParallaxDisabled={whyFoundersReducedMotion}
					foundersIntroParallaxRef={
						setFoundersIntroRef as unknown as React.RefObject<HTMLElement | null>
					}
					foundersOutroParallaxDisabled={foundersSpecialistsReducedMotion}
					foundersOutroParallaxRef={
						setFoundersOutroRef as unknown as React.RefObject<HTMLElement | null>
					}
					specialistsIntroParallaxRef={
						specialistsIntroRef as unknown as React.RefObject<HTMLDivElement | null>
					}
					stickyLayerEnabled
				/>
				<ProofSection />
				<OurClientsSection />
				<WhereWeWorkSection />
				<div className="relative">
					<AboutCtaSection
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
