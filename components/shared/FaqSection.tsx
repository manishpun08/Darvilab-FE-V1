"use client";

import { useRef, useState } from "react";
import { useFaqAnimations } from "../../hooks/useFaqAnimations";
import { getRevealStyle, useReveal } from "../../hooks/useRevealMotion";
import { shell } from "../../lib/classes";
import { SectionEyebrow } from "./SectionEyebrow";
import { SectionTitle } from "./SectionTitle";

type FaqItem = {
	question: string;
	answer: string;
};

type FaqSectionProps = {
	className?: string;
	description?: string;
	eyebrow?: string;
	id?: string;
	items: FaqItem[];
	title: string;
	titleAccent?: string;
};

export function FaqSection({
	className = "mt-0 bg-paper pb-[clamp(84px,9vw,132px)] pt-[clamp(84px,9vw,132px)]",
	description,
	eyebrow = "FAQ",
	id = "faq",
	items,
	title,
	titleAccent,
}: FaqSectionProps) {
	const [openIndex, setOpenIndex] = useState(0);
	const { ref, visible, reducedMotion } = useReveal({ threshold: 0.12 });
	const faqItemsRef = useRef<HTMLDivElement>(null);

	useFaqAnimations({ containerRef: faqItemsRef, openIndex });

	const faqJsonLd = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: items.map((item) => ({
			"@type": "Question",
			acceptedAnswer: {
				"@type": "Answer",
				text: item.answer,
			},
			name: item.question,
		})),
	};


	return (
		<section className={className} id={id}>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
			/>
			<div
				className={`${shell} grid grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] gap-[clamp(40px,8vw,120px)] max-lg:grid-cols-1`}
				ref={ref as React.RefObject<HTMLDivElement | null>}
			>
				<div style={getRevealStyle({ visible, reducedMotion, y: 18 })}>
					<SectionEyebrow>{eyebrow}</SectionEyebrow>
					<SectionTitle
						accent={titleAccent}
						className="mt-8 max-w-[560px] text-ink"
					>
						{title}
					</SectionTitle>
					{description ? (
						<p className="mt-8 max-w-[420px] text-[15px] leading-[1.7] text-muted">
							{description}
						</p>
					) : null}
				</div>

			<div
				ref={faqItemsRef}
				style={getRevealStyle({ visible, reducedMotion, delay: 80, y: 18 })}
			>
				{items.map((item, index) => {
					const isOpen = openIndex === index;

					return (
						<div className="border-b border-line" data-faq-item key={item.question}>
							<button
								aria-controls={`${id}-answer-${index}`}
								aria-expanded={isOpen}
								className="grid min-h-16 w-full grid-cols-[32px_minmax(0,1fr)_24px] items-center gap-4 py-5 text-left"
								onClick={() =>
									setOpenIndex((current) => (current === index ? -1 : index))
								}
								type="button"
							>
								<span
									className="font-mono text-[8px] font-semibold uppercase tracking-[0.1em] text-dl-blue"
									data-faq-number
								>
									{String(index + 1).padStart(2, "0")}
								</span>
								<span className="text-[18px] font-semibold tracking-[-0.03em] text-ink">
									{item.question}
								</span>
								<span
									aria-hidden="true"
									className="flex h-6 w-6 items-center justify-center text-muted"
									data-faq-icon
								>
									<svg
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M7 1V13M1 7H13"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
									</svg>
								</span>
							</button>
							<div
								className="grid grid-rows-[0fr]"
								data-faq-answer-wrapper
							>
								<div className="overflow-hidden" data-faq-answer-content>
									<p
										className="max-w-[720px] pb-6 pl-12 text-[15px] leading-[1.68] text-muted"
										id={`${id}-answer-${index}`}
									>
										{item.answer}
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			</div>
		</section>
	);
}
