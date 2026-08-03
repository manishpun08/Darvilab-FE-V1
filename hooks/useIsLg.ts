"use client";

import { useEffect, useState } from "react";

export function useIsLg(): boolean {
	const [isLg, setIsLg] = useState(
		() =>
			typeof window === "undefined"
				? false
				: window.matchMedia("(min-width: 64rem)").matches,
	);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(min-width: 64rem)");
		const handleChange = () => setIsLg(mediaQuery.matches);

		handleChange();
		mediaQuery.addEventListener("change", handleChange);

		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	return isLg;
}
