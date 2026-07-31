export interface ServicePhase {
	name: string;
	whatHappens: string;
	whatYouDo: string;
	whatYouLeaveWith: string;
}

export interface ServiceDeliverable {
	deliverable: string;
	impact: string;
}

export interface ServiceContact {
	eyebrow: string;
	headline: string;
	supporting: string;
}

export interface ServiceFaq {
	question: string;
	answer: string;
}

export interface ServiceDetail {
	slug: string;
	name: string;
	subline: string;
	situations: string[];
	phases: ServicePhase[];
	deliverables: ServiceDeliverable[];
	faqs: ServiceFaq[];
	contact: ServiceContact;
	heroTagline?: string;
}
