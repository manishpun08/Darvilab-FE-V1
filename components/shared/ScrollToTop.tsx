"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollToTop() {
	const pathname = usePathname();

	useEffect(() => {
		// Next.js and Lenis race condition fix for scroll restoration
		if ("scrollRestoration" in window.history) {
			window.history.scrollRestoration = "manual";
		}
		
		// Fire immediately
		window.scrollTo({ left: 0, top: 0, behavior: "instant" });

		// Fire again slightly after to catch Lenis initialized state
		const timer = setTimeout(() => {
			window.scrollTo({ left: 0, top: 0, behavior: "instant" });
		}, 50);

		return () => clearTimeout(timer);
	}, [pathname]);

	return null;
}
