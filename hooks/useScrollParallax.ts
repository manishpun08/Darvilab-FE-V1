import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "./useRevealMotion";

type ParallaxNodes = Record<string, HTMLElement>;
type ParallaxState = Record<string, number>;
type NodeRef = ParallaxNodes | null;

interface ScrollParallaxContext {
	nodes: ParallaxNodes;
	state: ParallaxState;
}

interface ScrollParallaxCallbacks {
	createInitialState: () => ParallaxState;
	dependencies?: unknown[];
	onReset: (context: ScrollParallaxContext) => void;
	onScroll?: (context: ScrollParallaxContext) => void;
	onSync: (context: ScrollParallaxContext) => void;
	onUpdate: (context: ScrollParallaxContext) => boolean;
	resolveNodes: () => NodeRef;
}

export function clamp(value: number, min: number, max: number): number {
	return Math.min(Math.max(value, min), max);
}

export function easeInOut(value: number): number {
	return value * value * (3 - 2 * value);
}

export function setMotionValue(
	node: HTMLElement,
	name: string,
	value: string,
): void {
	node.style.setProperty(name, value);
}

export function useScrollParallax({
	createInitialState,
	dependencies = [],
	onReset,
	onScroll,
	onSync,
	onUpdate,
	resolveNodes,
}: ScrollParallaxCallbacks): boolean {
	const reducedMotion = usePrefersReducedMotion();
	const stateRef = useRef<ParallaxState>(createInitialState());

	useEffect(() => {
		const nodes = resolveNodes();
		const state = stateRef.current;

		if (!nodes) {
			return undefined;
		}

		const resetMotion = () => onReset({ nodes, state });

		if (reducedMotion) {
			resetMotion();
			return undefined;
		}

		let frameId = 0;

		const requestUpdate = () => {
			if (!frameId) {
				frameId = window.requestAnimationFrame(updateMotion);
			}
		};

		const updateMotion = () => {
			frameId = 0;

			if (onUpdate({ nodes, state })) {
				requestUpdate();
			}
		};

		const handleScroll = () => {
			onScroll?.({ nodes, state });
			onSync({ nodes, state });
			requestUpdate();
		};

		const handleResize = () => {
			onSync({ nodes, state });
			requestUpdate();
		};

		resetMotion();
		onSync({ nodes, state });
		requestUpdate();

		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", handleResize);

		return () => {
			if (frameId) {
				window.cancelAnimationFrame(frameId);
			}

			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
			resetMotion();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [reducedMotion, ...dependencies]);

	return reducedMotion;
}
