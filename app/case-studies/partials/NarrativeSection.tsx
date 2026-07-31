import { SectionFrame } from "./SectionFrame";

interface NarrativeSectionProps {
	accent: string;
	highlight?: string | null;
	id: string;
	no: string;
	paragraphs: string[];
	title: string;
}

export function NarrativeSection({
	accent,
	highlight,
	id,
	no,
	paragraphs,
	title,
}: NarrativeSectionProps) {
	return (
		<SectionFrame accent={accent} id={id} no={no} title={title}>
			{paragraphs.map((paragraph) => (
				<p className="max-w-[68ch]" key={paragraph}>
					{paragraph}
				</p>
			))}
			{highlight ? (
				<p className="max-w-[54ch] text-[19px] italic leading-[1.75] text-ink">
					{highlight}
				</p>
			) : null}
		</SectionFrame>
	);
}
