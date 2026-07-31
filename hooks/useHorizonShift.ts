"use client";

import { useEffect, useState } from "react";

interface HorizonShiftOptions {
	max?: number;
	speed?: number;
}

export function useHorizonShift({
	max = 56,
	speed = 0.08,
}: HorizonShiftOptions = {}): number {
	const [horizonShift, setHorizonShift] = useState(0);

	useEffect(() => {
		const syncHorizon = () => {
			setHorizonShift(Math.min(max, window.scrollY * speed));
		};

		syncHorizon();
		window.addEventListener("scroll", syncHorizon, { passive: true });
		window.addEventListener("resize", syncHorizon);

		return () => {
			window.removeEventListener("scroll", syncHorizon);
			window.removeEventListener("resize", syncHorizon);
		};
	}, [max, speed]);

	return horizonShift;
}
