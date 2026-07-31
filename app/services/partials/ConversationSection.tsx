"use client";

import type { RefObject } from "react";
import { InquiryFormCard } from "@/components/shared/InquiryFormCard";
import { getFooterParallaxStyle } from "@/hooks/useFooterRevealMotion";
import { shell } from "@/lib/classes";
import type { ServiceDetail } from "../interface/service.interface";
import { RevealSection } from "./RevealSection";
import { SectionLabel } from "./SectionLabel";

type Props = {
	parallaxDisabled?: boolean;
	sectionRef?: RefObject<HTMLElement | null> | null;
	service: ServiceDetail;
};

export function ConversationSection({
	parallaxDisabled = false,
	sectionRef = null,
	service,
}: Props) {
	const enableParallax = Boolean(sectionRef) && !parallaxDisabled;

	return (
		<RevealSection
			className={`scroll-mt-[104px] bg-[#050b1f] pb-[clamp(84px,9vw,128px)] pt-[clamp(84px,9vw,128px)] text-white ${
				enableParallax ? "relative z-10" : ""
			}`}
			id="start-a-conversation"
			sectionRef={sectionRef}
		>
			<div
				className={`${shell} grid gap-[clamp(40px,8vw,120px)] lg:grid-cols-[minmax(0,0.86fr)_minmax(420px,0.74fr)]`}
				style={getFooterParallaxStyle(enableParallax)}
			>
				<div className="grid gap-7">
					<SectionLabel dark>{service.contact.eyebrow}</SectionLabel>
					<h2 className="max-w-[11ch] text-[clamp(3.2rem,6vw,6.1rem)] font-case font-semibold leading-[0.92] tracking-[-0.08em] text-white">
						{service.contact.headline}
					</h2>
					<p className="max-w-[38ch] text-[16px] leading-[1.78] text-white/66">
						{service.contact.supporting}
					</p>
				</div>

			<InquiryFormCard
				badgeLabel={`${service.name.toLowerCase()} inquiry`}
				buttonLabel="Send your brief"
				className="mx-auto w-full max-w-[560px]"
				companyBodyLabel="Company or product name"
				companyLabel="Company or product name"
				emailLabel="Your email"
				fullNameLabel="Your name"
				problemBodyLabel="What are you trying to figure out?"
				problemLabel="What are you trying to figure out?"
				problemPlaceholder="A short description is enough. Tell us what you're building and where you're stuck."
				responseNote="We typically reply within one business day."
				subjectPrefix={`DarviLabs ${service.name.toLowerCase()} inquiry`}
			/>
			</div>
		</RevealSection>
	);
}
