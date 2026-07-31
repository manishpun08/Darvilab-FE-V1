"use client";

import { useEffect, useRef, useState } from "react";

interface UseHeaderVisibilityOptions {
	locked?: boolean;
}

const TOP_LOCK_OFFSET = 12;
const SCROLL_DELTA_THRESHOLD = 10;

export function useHeaderVisibility({
	locked = false,
}: UseHeaderVisibilityOptions = {}): {
	isVisible: boolean;
	hasScrolled: boolean;
} {
	const [isVisible, setIsVisible] = useState(true);
	const [hasScrolled, setHasScrolled] = useState(false);
	const lastScrollYRef = useRef(0);

	useEffect(() => {
		if (locked) {
			setIsVisible(true);
			return undefined;
		}

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const previousScrollY = lastScrollYRef.current;
			const delta = currentScrollY - previousScrollY;

			setHasScrolled(currentScrollY > TOP_LOCK_OFFSET);

			if (currentScrollY <= TOP_LOCK_OFFSET) {
				setIsVisible(true);
				lastScrollYRef.current = currentScrollY;
				return;
			}

			if (Math.abs(delta) < SCROLL_DELTA_THRESHOLD) {
				return;
			}

			setIsVisible(delta < 0);
			lastScrollYRef.current = currentScrollY;
		};

		lastScrollYRef.current = window.scrollY;
		setHasScrolled(window.scrollY > TOP_LOCK_OFFSET);
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => window.removeEventListener("scroll", handleScroll);
	}, [locked]);

	return { isVisible, hasScrolled };
}
