import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import {
	caseStudies,
	getCaseStudy,
	getRelatedCaseStudies,
} from "../data/caseStudyDetails";
import { CaseStudyPageContent } from "../partials/CaseStudyPageContent";

interface CaseStudyPageProps {
	params: Promise<{ id: string }>;
}

export function generateStaticParams() {
	return caseStudies.map((caseStudy) => ({ id: caseStudy.slug }));
}

export async function generateMetadata({
	params,
}: CaseStudyPageProps): Promise<Metadata> {
	const { id } = await params;
	const caseStudy = getCaseStudy(id);

	if (!caseStudy) {
		return {};
	}

	const title = `${caseStudy.project} Case Study`;
	const description = `${caseStudy.project} case study - the full evidence behind the client system decision and outcome.`;

	return {
		title,
		description,
		openGraph: {
			title: `${title} — ${SITE_NAME}`,
			description,
			type: "article",
		},
		twitter: {
			title: `${title} — ${SITE_NAME}`,
			description,
		},
		alternates: {
			canonical: `/case-studies/${caseStudy.slug}`,
		},
	};
}

export default async function Page({ params }: CaseStudyPageProps) {
	const { id } = await params;
	const caseStudy = getCaseStudy(id);
	const relatedProjects = getRelatedCaseStudies(caseStudy);

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Article",
		author: {
			"@type": "Organization",
			name: SITE_NAME,
			url: SITE_URL,
		},
		dateModified: "2026-07-13",
		datePublished: "2026-01-01",
		description: `${caseStudy.project} case study - the full evidence behind the client system decision and outcome.`,
		headline: `${caseStudy.project} Case Study`,
		image: `${SITE_URL}/about-map-blend.webp`,
		mainEntityOfPage: `${SITE_URL}/case-studies/${caseStudy.slug}`,
	};

	return (
		<>
			<script
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				type="application/ld+json"
			/>
			<CaseStudyPageContent
				caseStudy={caseStudy}
				relatedProjects={relatedProjects}
			/>
		</>
	);
}
