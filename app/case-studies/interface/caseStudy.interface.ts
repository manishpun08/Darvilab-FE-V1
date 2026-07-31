export interface CaseStudy {
	no: string;
	project: string;
	industry: string;
	domain: string;
	year: string;
	type: string;
	status: string;
	subtitle: string;
	slug: string;
	accent: string;
	accentGlow: string;
	accentHaze: string;
	horizonBand: string;
	horizonMist: string;
	engagementType: string;
	timeline: string;
	heroMetric: string;
	heroMetricLabel: string;
	heroContext: string;
	metadataOutcome: string;
	situation: string[];
	situationHighlight: string;
	challenge: string[];
	challengeQuote: string;
	decisions: { term: string; detail: string }[];
	outcomeNarrative: string[];
	clientPerspective: { quote: string; attribution: string };
	outcomeMetrics: { value: string; label: string }[];
	related: string[];
	signal: string;
	evidenceId: string;
	variant: string;
	problem: string;
	whatChanged: string;
	outcome: string[][];
	metricPlainEnglish: string;
	clientQuote: string;
}

export interface SectionOrderItem {
	id: string;
	no: string;
	label: string;
}
