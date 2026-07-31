"use client";

import { HomeFooter } from "@/components/shared/HomeFooter";
import { OurClientsSection } from "@/components/shared/OurClientsSection";
import { useFooterRevealMotion } from "@/hooks/useFooterRevealMotion";
import { useHeroIntroParallaxWithMode } from "@/hooks/useHeroIntroParallax";
import { useHorizonShift } from "@/hooks/useHorizonShift";
import { HomeHero } from "./partials/HomeHero";
import {
  ClientFitSection,
  HomeProcessSection,
  HomeServicesSection,
  ProblemRecognitionSection,
  SelectedWorkSection,
  TestimonialsSection,
} from "./partials/HomeSections";

export default function Page() {
  const horizonShift = useHorizonShift();
  const {
    heroRef: selectedWorkRef,
    introRef: processRef,
    triggerRef: selectedWorkTriggerRef,
    reducedMotion: selectedWorkProcessReducedMotion,
  } = useHeroIntroParallaxWithMode({ trigger: "backBottom" });
  const {
    heroRef: processServicesRef,
    introRef: servicesRef,
    triggerRef: processServicesTriggerRef,
    reducedMotion: processServicesReducedMotion,
  } = useHeroIntroParallaxWithMode({
    heroVariableName: "--home-process-services-hero-y",
    introVariableName: "--home-process-services-intro-y",
    stickyTopVariableName: "--home-process-services-sticky-top",
    trigger: "backBottom",
  });
  const {
    heroRef: clientFitRef,
    introRef: testimonialsIntroRef,
    triggerRef: clientFitTestimonialsTriggerRef,
    reducedMotion: clientFitTestimonialsReducedMotion,
  } = useHeroIntroParallaxWithMode({
    heroVariableName: "--home-client-testimonials-hero-y",
    introVariableName: "--home-client-testimonials-intro-y",
    stickyTopVariableName: "--home-client-testimonials-sticky-top",
    trigger: "backBottom",
  });
  const { testimonialsRef, footerRef, reducedMotion } = useFooterRevealMotion();

  return (
    <div className="min-h-screen bg-paper text-ink">
      <main id="main-content">
        <HomeHero horizonShift={horizonShift} />
        <OurClientsSection hideLabel tightToPrevious variant="dark" />
        <ProblemRecognitionSection />
        <div className="relative isolate">
          <SelectedWorkSection
            parallaxDisabled={selectedWorkProcessReducedMotion}
            sectionRef={selectedWorkRef}
            stickyLayerEnabled
          />
          <div
            aria-hidden="true"
            className="pointer-events-none h-px"
            ref={selectedWorkTriggerRef as React.Ref<HTMLDivElement>}
          />
        </div>
        <HomeProcessSection />
        <div className="relative isolate">
          <HomeServicesSection
            parallaxDisabled={processServicesReducedMotion}
            sectionRef={servicesRef}
            variableName="--home-process-services-intro-y"
          />
        </div>
        <div className="relative isolate">
          <ClientFitSection
            parallaxDisabled={clientFitTestimonialsReducedMotion}
            sectionRef={clientFitRef}
            stickyLayerEnabled
            stickyTopVariableName="--home-client-testimonials-sticky-top"
            variableName="--home-client-testimonials-hero-y"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none h-px"
            ref={clientFitTestimonialsTriggerRef as React.Ref<HTMLDivElement>}
          />
          <div className="relative z-20">
            <TestimonialsSection
              introParallaxDisabled={clientFitTestimonialsReducedMotion}
              introParallaxRef={testimonialsIntroRef}
              introVariableName="--home-client-testimonials-intro-y"
              parallaxDisabled={reducedMotion}
              sectionRef={testimonialsRef}
            />
            <HomeFooter
              footerRef={footerRef}
              revealMotionDisabled={reducedMotion}
              stickyRevealEnabled
            />
          </div>
        </div>
      </main>
    </div>
  );
}
