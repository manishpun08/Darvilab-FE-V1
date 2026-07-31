interface SectionIntroProps {
	body?: string;
	title: string;
}

export function SectionIntro({ body, title }: SectionIntroProps) {
	return (
		<div className="grid gap-7 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end lg:gap-[clamp(40px,8vw,120px)]">
			<h2 className="max-w-[12ch] text-[clamp(2.8rem,4.8vw,5rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-ink" data-animate-title>
				{title}
			</h2>
			{body ? (
				<p className="max-w-[620px] text-[16px] leading-[1.76] text-muted" data-animate-body>
					{body}
				</p>
			) : null}
		</div>
	);
}
