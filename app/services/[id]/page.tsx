"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { FaqSection } from "@/components/shared/FaqSection";
import { HomeFooter } from "@/components/shared/HomeFooter";
import { SEO } from "@/components/shared/SEO";
import { useFooterRevealMotion } from "@/hooks/useFooterRevealMotion";
import { useHeroIntroParallax } from "@/hooks/useHeroIntroParallax";
import { useHorizonShift } from "@/hooks/useHorizonShift";
import { getServiceDetail } from "../data/serviceDetails";
import type { ServiceDetail } from "../interface/service.interface";
import { ApproachSection } from "../partials/ApproachSection";
import { ConversationSection } from "../partials/ConversationSection";
import { OutcomesSection } from "../partials/OutcomesSection";
import { ProblemSpaceSection } from "../partials/ProblemSpaceSection";
import { ServiceHero } from "../partials/ServiceHero";

function resolveServiceDetail(
  routeId?: string,
  queryId?: string | null,
): ServiceDetail {
  return getServiceDetail(routeId || queryId || "");
}

export default function Page() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const searchParams = useSearchParams();
  const horizonShift = useHorizonShift();
  const service = resolveServiceDetail(id, searchParams.get("service"));
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
      <SEO
        canonical={`/services/${service.slug}`}
        description={service.subline}
        title={`${service.name} - DarviLabs`}
      />
      <main id="main-content">
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
      </main>
    </div>
  );
}
