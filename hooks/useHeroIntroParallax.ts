"use client";

import { useRef } from "react";
import {
	clamp,
	easeInOut,
	setMotionValue,
	useScrollParallax,
} from "./useScrollParallax";

const INTRO_PROGRESS_START = 0.94;
const INTRO_PROGRESS_END = 0.16;
const MAX_HERO_SHIFT = 16;
const MAX_INTRO_SHIFT = 30;
const POSITION_SMOOTHING = 0.11;
const SETTLE_EPSILON = 0.08;

interface ParallaxStyle {
	transform: string;
	willChange: string;
}

export function getHeroIntroParallaxStyle(
	enabled: boolean,
	variableName: string,
): ParallaxStyle | undefined {
	if (!enabled) {
		return undefined;
	}

	return {
		transform: `translate3d(0, var(${variableName}, 0px), 0)`,
		willChange: "transform",
	};
}

type HeroIntroState = Record<string, number> & {
	currentHeroY: number;
	targetHeroY: number;
	currentIntroY: number;
	targetIntroY: number;
};

type HeroIntroNodes = Record<string, HTMLElement> & {
	heroNode: HTMLElement;
	introNode: HTMLElement;
};

type TriggerMode = "frontTop" | "backBottom";

interface UseHeroIntroParallaxOptions {
	heroVariableName?: string;
	introVariableName?: string;
	stickyTopVariableName?: string;
	trigger?: TriggerMode;
}

export function useHeroIntroParallax(): {
	heroRef: React.RefObject<HTMLElement | null>;
	introRef: React.RefObject<HTMLElement | null>;
	triggerRef: React.RefObject<HTMLElement | null>;
	reducedMotion: boolean;
} {
	return useHeroIntroParallaxWithMode();
}

export function useHeroIntroParallaxWithMode({
	heroVariableName = "--work-hero-layer-y",
	introVariableName = "--work-intro-layer-y",
	stickyTopVariableName = "--work-hero-sticky-top",
	trigger = "frontTop",
}: UseHeroIntroParallaxOptions = {}): {
	heroRef: React.RefObject<HTMLElement | null>;
	introRef: React.RefObject<HTMLElement | null>;
	triggerRef: React.RefObject<HTMLElement | null>;
	reducedMotion: boolean;
} {
	const heroRef = useRef<HTMLElement | null>(null);
	const introRef = useRef<HTMLElement | null>(null);
	const triggerRef = useRef<HTMLElement | null>(null);
	const reducedMotion = useScrollParallax({
		createInitialState: () => ({
			currentHeroY: 0,
			targetHeroY: 0,
			currentIntroY: 0,
			targetIntroY: 0,
		}),
		dependencies: [
			heroVariableName,
			introVariableName,
			stickyTopVariableName,
			trigger,
		],
		resolveNodes: () => {
			const heroNode = heroRef.current;
			const introNode = introRef.current;

			if (!heroNode || !introNode) {
				return null;
			}

			return { heroNode, introNode };
		},
		onReset: ({
			nodes,
			state,
		}: {
			nodes: Record<string, HTMLElement>;
			state: Record<string, number>;
		}) => {
			state.currentHeroY = 0;
			state.targetHeroY = 0;
			state.currentIntroY = 0;
			state.targetIntroY = 0;
			setMotionValue(nodes.heroNode, heroVariableName, "0px");
			setMotionValue(nodes.heroNode, stickyTopVariableName, "0px");
			setMotionValue(nodes.introNode, introVariableName, "0px");
		},
		onSync: ({
			nodes,
			state,
		}: {
			nodes: Record<string, HTMLElement>;
			state: Record<string, number>;
		}) => {
			const viewportHeight = window.innerHeight || 1;
			const triggerNode = triggerRef.current;
			const introTop = nodes.introNode.getBoundingClientRect().top;
			const triggerTop =
				trigger === "backBottom" && triggerNode
					? triggerNode.getBoundingClientRect().top
					: nodes.heroNode.getBoundingClientRect().bottom;
			const start = viewportHeight * INTRO_PROGRESS_START;
			const end = viewportHeight * INTRO_PROGRESS_END;
			const stickyTop =
				trigger === "backBottom"
					? Math.min(0, viewportHeight - nodes.heroNode.offsetHeight)
					: 0;
			const rawProgress =
				trigger === "backBottom"
					? (viewportHeight - triggerTop) / (start - end)
					: (start - introTop) / (start - end);
			const progress = easeInOut(clamp(rawProgress, 0, 1));

			setMotionValue(
				nodes.heroNode,
				stickyTopVariableName,
				`${stickyTop.toFixed(2)}px`,
			);
			state.targetHeroY = progress * -MAX_HERO_SHIFT;
			state.targetIntroY = (1 - progress) * MAX_INTRO_SHIFT;
		},
		onUpdate: ({
			nodes,
			state,
		}: {
			nodes: Record<string, HTMLElement>;
			state: Record<string, number>;
		}): boolean => {
			state.currentHeroY +=
				(state.targetHeroY - state.currentHeroY) * POSITION_SMOOTHING;
			state.currentIntroY +=
				(state.targetIntroY - state.currentIntroY) * POSITION_SMOOTHING;

			setMotionValue(
				nodes.heroNode,
				heroVariableName,
				`${state.currentHeroY.toFixed(2)}px`,
			);
			setMotionValue(
				nodes.introNode,
				introVariableName,
				`${state.currentIntroY.toFixed(2)}px`,
			);

			const shouldContinue =
				Math.abs(state.targetHeroY - state.currentHeroY) > SETTLE_EPSILON ||
				Math.abs(state.targetIntroY - state.currentIntroY) > SETTLE_EPSILON;

			if (!shouldContinue) {
				state.currentHeroY = state.targetHeroY;
				state.currentIntroY = state.targetIntroY;
				setMotionValue(
					nodes.heroNode,
					heroVariableName,
					`${state.currentHeroY.toFixed(2)}px`,
				);
				setMotionValue(
					nodes.introNode,
					introVariableName,
					`${state.currentIntroY.toFixed(2)}px`,
				);
			}

			return shouldContinue;
		},
	});

	return { heroRef, introRef, triggerRef, reducedMotion };
}
