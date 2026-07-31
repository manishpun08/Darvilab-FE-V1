"use client";

import Image from "next/image";

interface InsightImageProps {
	image?: string | null;
}

export function InsightImage({ image }: InsightImageProps) {
	if (!image) {
		return null;
	}

	return (
		<div className="relative mt-10 aspect-[1.9] overflow-hidden bg-surface max-sm:aspect-[1.35]">
			<Image
				alt=""
				className="object-cover"
				fill
				sizes="(min-width: 768px) 780px, 100vw"
				src={image}
			/>
		</div>
	);
}
