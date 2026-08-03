"use client";

import { useRef } from "react";
import { useIsLg } from "./useIsLg";
import {
	clamp,
	easeInOut,
	setMotionValue,
	useScrollParallax,
} from "./useScrollParallax";

const FOOTER_REVEAL_DISTANCE = 0.72;
const MAX_TESTIMONIAL_SHIFT = 28;
const MAX_FOOTER_CONTENT_SHIFT = 42;
const MAX_FOOTER_DRIFT = 30;
const DRIFT_RESPONSE = 0.26;
const POSITION_SMOOTHING = 0.13;
const DRIFT_SMOOTHING = 0.2;
const DRIFT_RETURN = 0.9;
const VELOCITY_BLEND = 0.55;
const SCROLL_IDLE_MS = 70;
const SETTLE_EPSILON = 0.08;

interface FooterParallaxStyle {
	transform: string;
	willChange: string;
}

export function getFooterParallaxStyle(
	enabled: boolean,
): FooterParallaxStyle | undefined {
	if (!enabled) {
		return undefined;
	}

	return {
		transform: "translate3d(0, var(--home-footer-parallax-y, 0px), 0)",
		willChange: "transform",
	};
}

type FooterRevealState = Record<string, number> & {
	currentTestimonialsY: number;
	targetTestimonialsY: number;
	currentFooterRevealY: number;
	targetFooterRevealY: number;
	currentFooterDriftY: number;
	targetFooterDriftY: number;
	scrollVelocity: number;
	lastScrollY: number;
	lastScrollTimestamp: number;
};

type FooterNodes = Record<string, HTMLElement> & {
	footerNode: HTMLElement;
	testimonialsNode: HTMLElement;
};

export function useFooterRevealMotion(): {
	testimonialsRef: React.RefObject<HTMLElement | null>;
	footerRef: React.RefObject<HTMLElement | null>;
	reducedMotion: boolean;
} {
	const testimonialsRef = useRef<HTMLElement | null>(null);
	const footerRef = useRef<HTMLElement | null>(null);
	const isLg = useIsLg();
	const reducedMotion = useScrollParallax({
		createInitialState: () => ({
			currentTestimonialsY: 0,
			targetTestimonialsY: 0,
			currentFooterRevealY: 0,
			targetFooterRevealY: 0,
			currentFooterDriftY: 0,
			targetFooterDriftY: 0,
			scrollVelocity: 0,
			lastScrollY: 0,
			lastScrollTimestamp: 0,
		}),
		resolveNodes: () => {
			const testimonialsNode = testimonialsRef.current;
			const footerNode = footerRef.current;

			if (!testimonialsNode || !footerNode) {
				return null;
			}

			return { footerNode, testimonialsNode };
		},
		onReset: ({
			nodes,
			state,
		}: {
			nodes: Record<string, HTMLElement>;
			state: Record<string, number>;
		}) => {
			state.currentTestimonialsY = 0;
			state.targetTestimonialsY = 0;
			state.currentFooterRevealY = 0;
			state.targetFooterRevealY = 0;
			state.currentFooterDriftY = 0;
			state.targetFooterDriftY = 0;
			state.scrollVelocity = 0;
			state.lastScrollY = window.scrollY || window.pageYOffset || 0;
			state.lastScrollTimestamp = performance.now();
			setMotionValue(nodes.testimonialsNode, "--home-footer-parallax-y", "0px");
			setMotionValue(nodes.footerNode, "--home-footer-reveal-y", "0px");
			setMotionValue(nodes.footerNode, "--home-footer-content-drift-y", "0px");
		},
		onScroll: ({
			state,
		}: {
			nodes: Record<string, HTMLElement>;
			state: Record<string, number>;
		}) => {
			const scrollY = window.scrollY || window.pageYOffset || 0;
			const deltaScroll = scrollY - state.lastScrollY;

			state.lastScrollY = scrollY;
			state.lastScrollTimestamp = performance.now();
			state.scrollVelocity =
				state.scrollVelocity * (1 - VELOCITY_BLEND) +
				deltaScroll * VELOCITY_BLEND;
			state.targetFooterDriftY = clamp(
				state.targetFooterDriftY - state.scrollVelocity * DRIFT_RESPONSE,
				-MAX_FOOTER_DRIFT,
				MAX_FOOTER_DRIFT,
			);
		},
		onSync: ({
			nodes,
			state,
		}: {
			nodes: Record<string, HTMLElement>;
			state: Record<string, number>;
		}) => {
			const viewportHeight = window.innerHeight || 1;
			const testimonialsBottom =
				nodes.testimonialsNode.getBoundingClientRect().bottom;
			const footerHeight = Math.max(nodes.footerNode.offsetHeight, 1);
			const revealDistance = footerHeight * FOOTER_REVEAL_DISTANCE;
			const progress = easeInOut(
				clamp((viewportHeight - testimonialsBottom) / revealDistance, 0, 1),
			);

			state.targetTestimonialsY = progress * MAX_TESTIMONIAL_SHIFT;
			state.targetFooterRevealY = (1 - progress) * MAX_FOOTER_CONTENT_SHIFT;
		},
		onUpdate: ({
			nodes,
			state,
		}: {
			nodes: Record<string, HTMLElement>;
			state: Record<string, number>;
		}): boolean => {
			const now = performance.now();

			if (now - state.lastScrollTimestamp > SCROLL_IDLE_MS) {
				state.targetFooterDriftY *= DRIFT_RETURN;
				state.scrollVelocity *= DRIFT_RETURN;
			}

			state.currentTestimonialsY +=
				(state.targetTestimonialsY - state.currentTestimonialsY) *
				POSITION_SMOOTHING;
			state.currentFooterRevealY +=
				(state.targetFooterRevealY - state.currentFooterRevealY) *
				POSITION_SMOOTHING;
			state.currentFooterDriftY +=
				(state.targetFooterDriftY - state.currentFooterDriftY) *
				DRIFT_SMOOTHING;

			setMotionValue(
				nodes.testimonialsNode,
				"--home-footer-parallax-y",
				`${state.currentTestimonialsY.toFixed(2)}px`,
			);
			setMotionValue(
				nodes.footerNode,
				"--home-footer-reveal-y",
				`${Math.max(0, state.currentFooterRevealY).toFixed(2)}px`,
			);
			setMotionValue(
				nodes.footerNode,
				"--home-footer-content-drift-y",
				`${state.currentFooterDriftY.toFixed(2)}px`,
			);

			const shouldContinue =
				Math.abs(state.targetTestimonialsY - state.currentTestimonialsY) >
					SETTLE_EPSILON ||
				Math.abs(state.targetFooterRevealY - state.currentFooterRevealY) >
					SETTLE_EPSILON ||
				Math.abs(state.targetFooterDriftY - state.currentFooterDriftY) >
					SETTLE_EPSILON ||
				Math.abs(state.targetFooterDriftY) > SETTLE_EPSILON;

			if (!shouldContinue) {
				state.currentTestimonialsY = state.targetTestimonialsY;
				state.currentFooterRevealY = state.targetFooterRevealY;
				state.currentFooterDriftY = state.targetFooterDriftY;
				setMotionValue(
					nodes.testimonialsNode,
					"--home-footer-parallax-y",
					`${state.currentTestimonialsY.toFixed(2)}px`,
				);
				setMotionValue(
					nodes.footerNode,
					"--home-footer-reveal-y",
					`${Math.max(0, state.currentFooterRevealY).toFixed(2)}px`,
				);
				setMotionValue(
					nodes.footerNode,
					"--home-footer-content-drift-y",
					`${state.currentFooterDriftY.toFixed(2)}px`,
				);
			}

			return shouldContinue;
		},
	});

	return { testimonialsRef, footerRef, reducedMotion: reducedMotion || !isLg };
}
