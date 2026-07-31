"use client";

interface InsightImageProps {
	image?: string | null;
}

export function InsightImage({ image }: InsightImageProps) {
	if (!image) {
		return null;
	}

	return (
		<div className="mt-10 aspect-[1.9] overflow-hidden bg-surface max-sm:aspect-[1.35]">
			<img
				alt=""
				className="h-full w-full object-cover"
				loading="lazy"
				src={image}
			/>
		</div>
	);
}
