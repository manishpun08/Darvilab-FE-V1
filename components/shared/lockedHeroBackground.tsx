export function getLockedHeroBackgroundImage(horizonShift: number): string {
	return `radial-gradient(ellipse 118% 62% at 50% calc(100% + ${horizonShift + 64}px), rgba(220,232,255,0.5) 0%, rgba(201,219,255,0.78) 10%, rgba(170,198,255,0.34) 19%, rgba(170,198,255,0) 30%), radial-gradient(ellipse 108% 52% at 50% calc(100% + ${horizonShift + 20}px), rgba(54,112,255,0.94) 0%, rgba(43,92,232,0.9) 16%, rgba(31,71,190,0.78) 29%, rgba(18,42,126,0.56) 41%, rgba(11,23,74,0.2) 53%, rgba(11,23,74,0) 63%), radial-gradient(ellipse 170% 125% at 50% -10%, rgba(9,18,52,0.18) 0%, rgba(9,18,52,0.08) 42%, rgba(5,11,31,0) 66%), linear-gradient(180deg, #03081d 0%, #04102b 74%, #06183e 100%)`;
}

export const lockedHeroGridMaskClass =
	"pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,#000,transparent_80%)]";

export const lockedHeroGlowClass =
	"pointer-events-none absolute inset-x-[-14%] bottom-[-18%] h-[26%] rounded-full bg-[rgba(217,229,255,0.74)] blur-[54px]";

type LockedHeroBackgroundLayersProps = {
	maskFade?: string;
};

export function LockedHeroBackgroundLayers({
	maskFade,
}: LockedHeroBackgroundLayersProps) {
	return (
		<>
			<div
				className={lockedHeroGridMaskClass}
				style={maskFade ? { maskImage: maskFade } : undefined}
			/>
			<div className={lockedHeroGlowClass} />
		</>
	);
}
