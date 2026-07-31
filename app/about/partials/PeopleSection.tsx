"use client";

import type { CSSProperties, RefObject } from "react";
import { getHeroIntroParallaxStyle } from "@/hooks/useHeroIntroParallax";
import { getRevealStyle, useReveal } from "@/hooks/useRevealMotion";
import { label, shell } from "@/lib/classes";
import type { CoreTeamMember, Founder } from "../data/aboutData";
import { coreTeam, founders } from "../data/aboutData";

type FounderAvatarProps = {
	person: Founder;
	align?: "left" | "right";
};

function FounderAvatar({ person, align = "left" }: FounderAvatarProps) {
	const alignedRight = align === "right";

	return (
		<div
			className={`mt-[clamp(28px,4vw,44px)] flex items-center gap-5 ${
				alignedRight
					? "justify-end text-right max-sm:justify-start max-sm:text-left"
					: ""
			}`}
		>
			<div
				className={`group relative h-[clamp(56px,5.6vw,76px)] w-[clamp(56px,5.6vw,76px)] shrink-0 overflow-hidden rounded-full border border-white/12 bg-paper-blue ${
					alignedRight ? "order-2 max-sm:order-none" : ""
				}`}
			>
				{person.image ? (
					<img
						alt={`${person.name} portrait`}
						className="h-full w-full object-cover object-center transition duration-500 ease-out group-hover:scale-[1.035] group-hover:brightness-[1.05]"
						src={person.image}
					/>
				) : (
					<div className="flex h-full w-full items-center justify-center">
						<span className="font-display text-[clamp(20px,2.2vw,30px)] leading-none tracking-[-0.04em] text-ink/28">
							{person.initials}
						</span>
					</div>
				)}
			</div>
			<div className="max-w-[420px]">
				<h3 className="text-[clamp(20px,2vw,28px)] font-semibold leading-[1] tracking-[-0.04em] text-white">
					{person.name}
				</h3>
				<p className={`${label} mt-3 text-ice/78`}>{person.role}</p>
			</div>
		</div>
	);
}

type FounderStatementProps = {
	person: Founder;
	index: number;
};

function FounderStatement({ person, index }: FounderStatementProps) {
	const alignedRight = index === 1;

	return (
		<article
			className={`group w-full max-w-none ${alignedRight ? "mt-[clamp(64px,8vw,112px)] text-right max-sm:text-left" : "text-left"}`}
		>
			<blockquote className="block w-full max-w-none text-[clamp(30px,4vw,54px)] font-semibold leading-[1.05] tracking-[-0.052em] text-white transition duration-500 ease-out group-hover:text-white/92">
				{person.statement}
			</blockquote>
			<FounderAvatar align={alignedRight ? "right" : "left"} person={person} />
		</article>
	);
}

type SpecialistProfileProps = {
	person: CoreTeamMember;
	showDivider?: boolean;
	style?: CSSProperties;
};

function SpecialistProfile({
	person,
	showDivider = false,
	style,
}: SpecialistProfileProps) {
	return (
		<article
			className={`relative flex w-full flex-col items-center text-center ${
				showDivider
					? "before:absolute before:left-0 before:top-1/2 before:hidden before:h-[clamp(44px,5vw,68px)] before:w-px before:-translate-y-1/2 before:bg-line md:before:block"
					: ""
			}`}
			style={style}
		>
			<div className="h-[clamp(150px,14vw,184px)] w-[clamp(150px,14vw,184px)] overflow-hidden rounded-full bg-paper-blue max-md:h-[clamp(130px,38vw,150px)] max-md:w-[clamp(130px,38vw,150px)]">
				{person.image ? (
					<img
						alt={`${person.name} portrait`}
						className="h-full w-full object-cover object-center"
						src={person.image}
					/>
				) : null}
			</div>
			<h3 className="mt-6 text-[clamp(24px,2.2vw,32px)] font-semibold leading-[0.96] tracking-[-0.052em] text-ink">
				{person.name}
			</h3>
			<p className={`${label} mt-2 text-muted`}>{person.role}</p>
		</article>
	);
}

type PeopleSectionProps = {
	foundersIntroParallaxDisabled?: boolean;
	foundersIntroParallaxRef?: RefObject<HTMLElement | null> | null;
	foundersOutroParallaxDisabled?: boolean;
	foundersOutroParallaxRef?: RefObject<HTMLElement | null> | null;
	parallaxDisabled?: boolean;
	specialistsIntroParallaxRef?: RefObject<HTMLElement | null> | null;
	stickyLayerEnabled?: boolean;
};

export function PeopleSection({
	foundersIntroParallaxDisabled = false,
	foundersIntroParallaxRef = null,
	foundersOutroParallaxDisabled = false,
	foundersOutroParallaxRef = null,
	parallaxDisabled = false,
	specialistsIntroParallaxRef = null,
	stickyLayerEnabled = false,
}: PeopleSectionProps) {
	const { ref, visible, reducedMotion } = useReveal({ threshold: 0.16 });
	const enableFoundersIntroParallax =
		Boolean(foundersIntroParallaxRef) &&
		!foundersIntroParallaxDisabled &&
		!parallaxDisabled;
	const enableFoundersOutroParallax =
		Boolean(foundersOutroParallaxRef) &&
		!foundersOutroParallaxDisabled &&
		!parallaxDisabled;
	const enableSpecialistsIntroParallax =
		Boolean(specialistsIntroParallaxRef) &&
		!foundersOutroParallaxDisabled &&
		!parallaxDisabled;

	const setFoundersRef = (node: HTMLElement | null) => {
		if (foundersIntroParallaxRef) {
			(
				foundersIntroParallaxRef as React.MutableRefObject<HTMLElement | null>
			).current = node;
		}

		if (foundersOutroParallaxRef) {
			(
				foundersOutroParallaxRef as React.MutableRefObject<HTMLElement | null>
			).current = node;
		}
	};

	return (
		<section ref={ref}>
			<div
				className={`bg-ink pb-[clamp(76px,9vw,128px)] pt-[clamp(36px,5vw,72px)] text-white ${
					stickyLayerEnabled
						? "sticky top-0 z-20 overflow-hidden overflow-x-clip"
						: "relative z-20"
				}`}
			>
				<div
					className={shell}
					ref={setFoundersRef}
					style={{
						transform:
							enableFoundersIntroParallax || enableFoundersOutroParallax
								? "translate3d(0, calc(var(--work-intro-layer-y, 0px) + var(--work-hero-layer-y, 0px)), 0)"
								: undefined,
						willChange:
							enableFoundersIntroParallax || enableFoundersOutroParallax
								? "transform"
								: undefined,
					}}
				>
					<div style={getRevealStyle({ visible, reducedMotion, y: 24 })}>
						<div className="flex items-center justify-center gap-3 text-center text-ice">
							<i className="h-px w-16 bg-ice/55" />
							<p className={label}>
								The people accountable for what we deliver
							</p>
							<i className="h-px w-16 bg-ice/55" />
						</div>

						<div className="mt-[clamp(44px,6vw,76px)]">
							{founders.map((person, index) => (
								<FounderStatement
									index={index}
									key={person.role}
									person={person}
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="relative z-30 bg-paper py-[clamp(72px,8vw,116px)]">
				<div
					className={shell}
					ref={specialistsIntroParallaxRef as React.Ref<HTMLDivElement>}
					style={getHeroIntroParallaxStyle(
						enableSpecialistsIntroParallax,
						"--work-intro-layer-y",
					)}
				>
					<div
						className="flex items-center justify-center gap-3 text-center text-muted"
						style={getRevealStyle({
							visible,
							reducedMotion,
							delay: 100,
							y: 22,
						})}
					>
						<i className="h-px w-16 bg-[#9fb0c5]" />
						<p className={label}>The specialists behind the systems</p>
						<i className="h-px w-16 bg-[#9fb0c5]" />
					</div>

					<div className="mx-auto mt-[clamp(56px,7vw,92px)] grid max-w-[980px] grid-cols-3 items-start justify-items-center gap-[10px] max-md:grid-cols-1 max-md:gap-12">
						{coreTeam.map((person, index) => (
							<SpecialistProfile
								key={`${person.role}-${index}`}
								person={person}
								showDivider={index > 0}
								style={getRevealStyle({
									visible,
									reducedMotion,
									delay: 180 + index * 70,
									y: 14,
								})}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
