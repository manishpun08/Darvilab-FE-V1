"use client";

import { useEffect, useRef, useState } from "react";

export function usePrefersReducedMotion(): boolean {
	const [reducedMotion, setReducedMotion] = useState(false);

	useEffect(() => {
		if (typeof window === "undefined") {
			return undefined;
		}

		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);

		updateMotionPreference();
		mediaQuery.addEventListener("change", updateMotionPreference);

		return () => {
			mediaQuery.removeEventListener("change", updateMotionPreference);
		};
	}, []);

	return reducedMotion;
}

interface UseRevealOptions {
	threshold?: number;
	rootMargin?: string;
}

export function useReveal<T extends HTMLElement = HTMLDivElement>({
	threshold = 0.2,
	rootMargin = "0px 0px -10% 0px",
}: UseRevealOptions = {}) {
	const ref = useRef<T | null>(null);
	const reducedMotion = usePrefersReducedMotion();
	const [visible, setVisible] = useState(reducedMotion);

	useEffect(() => {
		if (reducedMotion) {
			setVisible(true);
			return undefined;
		}

		const node = ref.current;

		if (!node || typeof IntersectionObserver === "undefined") {
			setVisible(true);
			return undefined;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold, rootMargin },
		);

		observer.observe(node);

		return () => observer.disconnect();
	}, [reducedMotion, rootMargin, threshold]);

	return { ref, visible, reducedMotion };
}

interface RevealStyleOptions {
	visible: boolean;
	reducedMotion: boolean;
	delay?: number;
	y?: number;
}

interface RevealStyle {
	opacity: number;
	transform: string;
	transition?: string;
	willChange?: string;
}

export function getRevealStyle({
	visible,
	reducedMotion,
	delay = 0,
	y = 16,
}: RevealStyleOptions): RevealStyle {
	if (reducedMotion) {
		return {
			opacity: 1,
			transform: "translate3d(0, 0, 0)",
		};
	}

	return {
		opacity: visible ? 1 : 0,
		transform: visible ? "translate3d(0, 0, 0)" : `translate3d(0, ${y}px, 0)`,
		transition: `opacity 680ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 680ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
		willChange: "opacity, transform",
	};
}
