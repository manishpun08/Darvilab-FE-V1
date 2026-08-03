import { workCases } from "../../work/data/workCases";

function getCaseStudyPath(id: string): string {
	return `/case-studies/${id}`;
}

type DetailEntry = {
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
	related: string[];
};

const detailMap: Record<string, DetailEntry> = {
	"01": {
		slug: "chynabazar",
		accent: "#355dff",
		accentGlow: "rgba(86, 117, 255, 0.92)",
		accentHaze: "rgba(35, 66, 186, 0.44)",
		horizonBand: "rgba(72, 118, 255, 0.24)",
		horizonMist: "rgba(214, 230, 255, 0.82)",
		engagementType: "Commerce Ecosystem Build",
		timeline: "Jan - Jun 2025",
		heroMetric: "19",
		heroMetricLabel: "role-based permission tiers",
		heroContext:
			"across web, mobile, and admin — built from zero, not stitched together.",
		metadataOutcome: "3 client-facing surfaces live in production.",
		situation: [
			"The client needed a full commerce ecosystem, not a single storefront — a customer-facing web platform, a native mobile app, and a complete administrative system to run the business behind it. There was no existing platform to extend; this was architecture through launch, end to end.",
			"Darvi Lab served as the core engineering and QA partner for the entire build — not a single workstream, but the full system: admin, storefront, mobile, and every integration connecting it to how commerce actually runs in the market it serves.",
			"The engagement started because growing an e-commerce business required more than a website. It required coordinated infrastructure that could handle payments, logistics, inventory, and live-commerce features across every surface the business touched.",
		],
		situationHighlight:
			"The operation was not slow because people were weak. It was slow because three separate systems held three different versions of the truth.",
		challenge: [
			"A platform with three live client-facing surfaces and a full admin system creates a coordination problem before it creates a technical one. Backend and infrastructure, admin dashboard development, B2C and mobile frontend, and QA all had to move in parallel without priorities drifting as scope expanded.",
			"The other constraint was operational control: an e-commerce business this size needed precise, granular control over who on the team could view or act on what, not a flat admin system where every user had the same access.",
		],
		challengeQuote:
			"If every team member has the same admin access, operational risk scales faster than the team does.",
		decisions: [
			{
				term: "19-role RBAC system",
				detail:
					"Built a full admin dashboard supporting 19 distinct roles and permission sets across all core commerce operations (Catalog, Commerce, CMS, WMS, Notifications, Administration, System Settings). Business reason: gives the client precise control over what each team member can view and act on, instead of an all-or-nothing admin system.",
			},
			{
				term: "In-house Live Stream & Shorts",
				detail:
					"Built live-selling and short-video product discovery natively, rather than bolting on a third-party service. Business reason: avoids vendor dependency and gives the platform a differentiated feature set instead of a templated one.",
			},
			{
				term: "Structured DEV → QA → UAT cycle",
				detail:
					"Every feature moved through internal development testing, structured QA documentation, and a formal UAT round before release, backed by consistent client status reporting. Business reason: a platform integrating payments, logistics, SMS, and finance systems can't afford untested releases.",
			},
		],
		outcomeNarrative: [
			"A fully functional admin system supporting 19 role-based permission tiers across all core commerce operations. Business, catalog, warehouse, and notification teams each work within their own scoped access without crossing into areas outside their responsibility.",
			"A live B2C web storefront and companion mobile app now serve real customers across web, mobile, and admin. Integrated payment (eSewa, Khalti, Connect IPS), logistics (Pathao), SMS notifications, and finance/invoice systems connect the platform end to end.",
			"In-house-built Live Stream and Shorts features differentiate the platform from standard e-commerce templates. The client gained a live-commerce capability without third-party vendor lock-in.",
		],
		clientPerspective: {
			quote:
				"Before this, our team was managing three different systems just to keep operations running. Now everything — inventory, orders, customer support — lives in one platform we actually trust. It's changed how fast we can move.",
			attribution: "Operations Lead, Chynabazar",
		},
		related: ["04", "05"],
	},
	"02": {
		slug: "humanedge-lms",
		accent: "#355dff",
		accentGlow: "rgba(86, 117, 255, 0.92)",
		accentHaze: "rgba(35, 66, 186, 0.44)",
		horizonBand: "rgba(72, 118, 255, 0.24)",
		horizonMist: "rgba(214, 230, 255, 0.82)",
		engagementType: "Role-Based LMS Platform",
		timeline: "Mar - Jun 2025",
		heroMetric: "5",
		heroMetricLabel: "function-specific access tiers",
		heroContext:
			"replacing one generic training interface with role-optimized workflows.",
		metadataOutcome: "Organization-wide training rollout completed.",
		situation: [
			"Corporate training needed to run at scale across very different roles, each requiring a different level of access and responsibility. A single generic interface couldn't accommodate the operational differences between administrators, trainers, managers, and learners.",
			"The client's existing LMS forced every role into the same workflow, creating friction for power users and confusion for casual ones. Training rollout couldn't scale because each role had different needs that a single interface couldn't serve.",
			"The engagement started because the organization needed structured, org-wide training delivery that respected how each role actually works — not how a vendor assumed they should work.",
		],
		situationHighlight:
			"One interface was supposed to serve administrators, trainers, managers, and learners. Instead, it frustrated all of them.",
		challenge: [
			"The hard part was not just building different views. It was deciding exactly what each role needed to see, do, and be blocked from — without creating overlap or gaps between the five tiers.",
			"We needed to ensure that training accountability was clear at every level while still allowing the system to scale across the entire organization.",
		],
		challengeQuote:
			"A generic interface treats every user like an admin. A role-specific interface treats every user like themselves.",
		decisions: [
			{
				term: "Five function-specific access tiers",
				detail:
					"Replaced one generic interface with five distinct access tiers, each built for exactly what that role needs to do. Business reason: administrators manage content, trainers deliver sessions, managers track progress, and learners engage — each without friction from irrelevant features.",
			},
			{
				term: "Full UAT and training documentation",
				detail:
					"Built comprehensive user acceptance testing and training materials for each role tier. Business reason: organization-wide rollout succeeded because every role had clear guidance before the system went live.",
			},
			{
				term: "Role accountability model",
				detail:
					"Each tier included visible accountability markers so managers could see who owned what and where training stalled. Business reason: training stopped being a black box and became inspectable at every level.",
			},
		],
		outcomeNarrative: [
			"Five distinct access tiers are now operational, each serving exactly the function it was designed for. Administrators manage content and assignments, trainers deliver and track sessions, managers monitor team progress, and learners engage without navigating irrelevant features.",
			"Organization-wide training rollout proceeded smoothly because each role had clear access boundaries and training documentation before go-live. The system scaled without the confusion that plagued the previous generic interface.",
			"Role accountability became visible across the platform. Training managers can now identify exactly where a program is succeeding and where intervention is needed, without digging through spreadsheets.",
		],
		clientPerspective: {
			quote:
				"Each team now has exactly the access they need — no more, no less. Training finally runs the way our organization actually works.",
			attribution: "LMS Administrator, HumanEdge",
		},
		related: ["06", "05"],
	},
	"03": {
		slug: "liferishi",
		accent: "#355dff",
		accentGlow: "rgba(86, 117, 255, 0.92)",
		accentHaze: "rgba(35, 66, 186, 0.44)",
		horizonBand: "rgba(72, 118, 255, 0.24)",
		horizonMist: "rgba(214, 230, 255, 0.82)",
		engagementType: "Two-Sided Marketplace",
		timeline: "Feb - Jul 2025",
		heroMetric: "2.0",
		heroMetricLabel: "beta with live consultations",
		heroContext:
			"connecting consumers and astrologers on-demand, not by appointment.",
		metadataOutcome: "Two-sided platform operational with live consultations.",
		situation: [
			"Astrology consultation was still offline and appointment-based, with no way for users to connect with astrologers on demand. The service had no digital equivalent for real-time consultation, leaving both astrologers and consumers without a platform that worked the way modern services do.",
			"Building a two-sided marketplace required solving for both supply (astrologers) and demand (consumers) simultaneously. Astrologers needed their own dashboard to manage availability and consultations, while consumers needed a seamless way to find and connect with them instantly.",
			"The engagement started because the client needed a platform where both sides of the marketplace could actually operate — not just a consumer app with astrologer listings.",
		],
		situationHighlight:
			"Astrology was still conducted offline and by appointment, with no digital path to on-demand service.",
		challenge: [
			"The hard part was designing two separate experiences that felt cohesive. Astrologers needed availability management, consultation history, and earnings tracking. Consumers needed discovery, booking, and real-time connection — all within a single platform.",
			"We had to build a marketplace where both sides had transparency without compromising the other's experience.",
		],
		challengeQuote:
			"A two-sided marketplace only works when both sides can see what they need without seeing what they shouldn't.",
		decisions: [
			{
				term: "Dedicated astrologer dashboard",
				detail:
					"Built a full dashboard for astrologers to manage availability, track consultations, and view earnings. Business reason: supply-side participants had the tools they needed to operate independently, not as an afterthought to the consumer app.",
			},
			{
				term: "Sprint-based delivery to 2.0 beta",
				detail:
					"Delivered the platform through structured sprint-based cycles, reaching 2.0 beta with both consumer and astrologer experiences complete. Business reason: iterative delivery allowed real feedback to shape each version before committing to the full build.",
			},
			{
				term: "On-demand consultation flow",
				detail:
					"Connected consumers to available astrologers in real time rather than requiring pre-scheduled appointments. Business reason: the platform differentiated itself from existing appointment-based models by enabling instant connection.",
			},
		],
		outcomeNarrative: [
			"Reached 2.0 beta with a fully operational two-sided platform. Consumers can discover astrologers, view their profiles, and connect on-demand — all without leaving the app.",
			"Astrologers now have their own dashboard to manage availability, track consultation history, and monitor earnings. The supply side operates independently rather than as a secondary screen in the consumer experience.",
			"Live consultations are running on the platform, proving that on-demand astrology works as a digital service model. The marketplace is functioning with both sides having transparency and control.",
		],
		clientPerspective: {
			quote:
				"For the first time, our astrologers and clients can connect instantly — no phone tag, no scheduling delays.",
			attribution: "Founder, LifeRishi",
		},
		related: ["01", "02"],
	},
	"04": {
		slug: "himalayan-bullion",
		accent: "#355dff",
		accentGlow: "rgba(86, 117, 255, 0.92)",
		accentHaze: "rgba(35, 66, 186, 0.44)",
		horizonBand: "rgba(72, 118, 255, 0.24)",
		horizonMist: "rgba(214, 230, 255, 0.82)",
		engagementType: "Real-Time Trading Platform",
		timeline: "Feb - May 2025",
		heroMetric: "#1",
		heroMetricLabel: "silver trading platform in Nepal",
		heroContext:
			"trusted for real-time pricing in a market where prices move by the minute.",
		metadataOutcome: "Nepal's #1 silver trading platform.",
		situation: [
			"Silver prices move by the minute, and customers had no live, trustworthy reference to trade against. A stale rate on screen erodes trust immediately for price-sensitive buyers who need to act on current prices.",
			"The client's existing website showed rates that updated on page refresh, but in a market where silver prices shift constantly, a rate displayed even five minutes ago was already a trust risk. Customers would call to verify the price, creating friction and delaying transactions.",
			"The engagement started because the client needed a platform where price trust was immediate — not something that required a phone call to confirm.",
		],
		situationHighlight:
			"A stale price on screen is not a trading advantage. It is an invitation to call.",
		challenge: [
			"The hard problem was not technical — it was trust timing. A stale price on screen looked authoritative but was already wrong, and every phone verification eroded the speed advantage of a digital platform.",
			"We needed real-time rate delivery with transaction security that matched the speed of the market. The pricing engine had to be the platform's core reliability requirement, not a feature bolted on top.",
		],
		challengeQuote:
			"A price that cannot be trusted on sight is not a price — it is an invitation to call.",
		decisions: [
			{
				term: "Real-time pricing as core architecture",
				detail:
					"Engineered real-time pricing as the platform's core reliability requirement, not a bolt-on feature. Business reason: in a market where silver prices move by the minute, pricing had to be the foundation — not an add-on to a standard storefront.",
			},
			{
				term: "Live market rate feed",
				detail:
					"Connected to live market feeds with sub-minute latency so customers saw the same rate the system was trading on. Business reason: the verification phone call was eliminated because the price on screen was the price they could act on.",
			},
			{
				term: "Secure transaction flow",
				detail:
					"Buy and sell actions were protected with multi-factor authentication and encrypted order records. Business reason: speed did not come at the cost of security or regulatory compliance.",
			},
		],
		outcomeNarrative: [
			"After launch, customers saw real-time rates and could transact immediately without calling to verify. The trust question moved from 'is this price real?' to 'what do I want to buy?'",
			"Transaction volume increased because the speed of trust matched the speed of the market. The platform became the primary transaction channel instead of an inquiry generator.",
			"Himalayan Bullion solidified its position as Nepal's #1 silver trading house with a platform that proved price integrity at every refresh. The market recognized the platform as the trusted reference for real-time pricing.",
		],
		clientPerspective: {
			quote:
				"Price trust was always the barrier. Now our customers move on the same rate we see.",
			attribution: "Managing Director, Himalayan Bullion",
		},
		related: ["07", "01"],
	},
	"05": {
		slug: "ai-powered-pm-platform",
		accent: "#355dff",
		accentGlow: "rgba(86, 117, 255, 0.92)",
		accentHaze: "rgba(35, 66, 186, 0.44)",
		horizonBand: "rgba(72, 118, 255, 0.24)",
		horizonMist: "rgba(214, 230, 255, 0.82)",
		engagementType: "AI Automation Platform",
		timeline: "Mar - Jul 2025",
		heroMetric: "4",
		heroMetricLabel: "role-specific portals",
		heroContext:
			"with LLM automation handling task routing, status, and reporting.",
		metadataOutcome: "AI automation active in daily internal use.",
		situation: [
			"Generic PM tools don't adapt to how PM, Developer, QA, and Client roles actually make decisions. Status updates and task handoffs were eating up time that should have gone into actual project work.",
			"Each role needed a different view and different automation — PMs need portfolio oversight, developers need task context, QA needs validation workflows, clients need status transparency. A single generic tool couldn't serve these distinct decision-making patterns.",
			"The engagement started because internal project management had become overhead instead of support. The team was spending more time reporting on work than doing it.",
		],
		situationHighlight:
			"The team was spending more time reporting on work than doing the work itself.",
		challenge: [
			"The hard part was not just building four different views. It was deciding exactly what each role needed to see, what decisions each could make, and where AI could handle the repetitive coordination that was draining human time.",
			"We needed an automation layer that could route tasks, update status, and generate reports without creating a black box that nobody trusted.",
		],
		challengeQuote:
			"If the automation is invisible, nobody trusts it. If it's visible everywhere, it becomes noise.",
		decisions: [
			{
				term: "Role-specific portals",
				detail:
					"Built four distinct portals — PM, Developer, QA, and Client — each showing exactly the information and actions that role needs. Business reason: every team member works from their own context instead of navigating a generic interface.",
			},
			{
				term: "LLM automation layer",
				detail:
					"Integrated an LLM-powered automation layer that handles task routing, status updates, and report generation directly inside the workflow. Business reason: repetitive coordination work is handled by AI, freeing the team for actual project work.",
			},
			{
				term: "Transparent automation",
				detail:
					"Every AI action is visible and auditable — task routing decisions, status changes, and report generation all show their reasoning. Business reason: trust in the system came from visibility, not from hiding the automation.",
			},
		],
		outcomeNarrative: [
			"Four role-specific portals are now live and serving distinct workflows. PMs see portfolio health, developers see task context, QA sees validation status, and clients see transparent progress — each without the noise of the other views.",
			"AI automation now handles real task routing, status updates, and reporting in daily internal use. The team spends time on project work instead of communicating about project work.",
			"The deeper change is that project management became invisible infrastructure. The system handles coordination so the team can focus on execution, and every automation action is visible enough to trust.",
		],
		clientPerspective: {
			quote:
				"The team spends time on project work now, not on telling people what's happening with project work.",
			attribution: "Head of Product, Darvi Labs",
		},
		related: ["02", "06"],
	},
	"06": {
		slug: "niet-college",
		accent: "#355dff",
		accentGlow: "rgba(86, 117, 255, 0.92)",
		accentHaze: "rgba(35, 66, 186, 0.44)",
		horizonBand: "rgba(72, 118, 255, 0.24)",
		horizonMist: "rgba(214, 230, 255, 0.82)",
		engagementType: "CMS Website",
		timeline: "Apr - Jul 2025",
		heroMetric: "#1",
		heroMetricLabel: "UGC-QAA certified engineering college",
		heroContext:
			"with Nepal's only Biomedical Engineering program, now reflected digitally.",
		metadataOutcome: "Elevated digital credibility for admissions.",
		situation: [
			"Nepal's first UGC-QAA certified engineering college needed a website that actually reflected that credibility. The existing site didn't communicate the college's unique positioning or program differentiation.",
			"A generic college template wouldn't work — the site needed to highlight Nepal's only Biomedical Engineering program and the UGC-QAA accreditation that sets NIET apart. The college also needed to maintain content without developer dependency.",
			"The engagement started because the institution's digital presence didn't match its academic reputation. Prospective students and parents couldn't see what made NIET different from a generic college website.",
		],
		situationHighlight:
			"The institution's credibility was real, but its website treated it like every other college.",
		challenge: [
			"The challenge was not just building a website. It was structuring content around real program differentiation — including Nepal's only Biomedical Engineering program — instead of a generic college template.",
			"We needed to build a CMS the college could maintain independently, so content updates didn't require developer involvement for every change.",
		],
		challengeQuote:
			"A website that looks like every other college tells prospective students that the college is like every other college.",
		decisions: [
			{
				term: "Program-first content structure",
				detail:
					"Structured the site around real program differentiation — including Nepal's only Biomedical Engineering program — instead of a generic college template. Business reason: the college's unique positioning is immediately visible, not buried in generic admissions content.",
			},
			{
				term: "College-maintained CMS",
				detail:
					"Built the site as a CMS the college can maintain independently, with editing tools that non-technical staff can use. Business reason: content updates happen without developer dependency, keeping the site current.",
			},
			{
				term: "UGC-QAA accreditation visibility",
				detail:
					"Made the UGC-QAA certification a prominent trust signal throughout the site, not just a footer badge. Business reason: the accreditation is the college's strongest differentiator and needed to be impossible to miss.",
			},
		],
		outcomeNarrative: [
			"The site now highlights NIET's unique positioning — Nepal's first UGC-QAA certified engineering college and the only institution offering Biomedical Engineering. Prospective students see this differentiation immediately.",
			"The CMS gives the college full control over content. Admissions teams can update program information, announcements, and news without waiting for developer cycles.",
			"Digital credibility now matches academic credibility. The website reflects the institution's actual reputation, and admissions conversations start with informed prospects who already understand what makes NIET different.",
		],
		clientPerspective: {
			quote:
				"Our accreditation and programs finally show up the way they should. The site now matches the institution.",
			attribution: "Director of Admissions, NIET College",
		},
		related: ["02", "07"],
	},
	"07": {
		slug: "jobladder-jl-recruitment",
		accent: "#355dff",
		accentGlow: "rgba(86, 117, 255, 0.92)",
		accentHaze: "rgba(35, 66, 186, 0.44)",
		horizonBand: "rgba(72, 118, 255, 0.24)",
		horizonMist: "rgba(214, 230, 255, 0.82)",
		engagementType: "Dual-Audience Platform",
		timeline: "May - Aug 2025",
		heroMetric: "500+",
		heroMetricLabel: "professionals placed",
		heroContext:
			"with employer and candidate journeys split from the top level.",
		metadataOutcome: "2-4 week average time-to-placement.",
		situation: [
			"A recruitment firm positioning itself as a strategic partner, not a staffing agency, needed a site serving two distinct audiences — employers and candidates — without diluting either message.",
			"Employers need to see capability and process; candidates need to see opportunity and support. One page trying to speak to both audiences weakens both messages. The firm also needed to prove credibility through real metrics, not just claims.",
			"The engagement started because the firm's positioning as a strategic partner wasn't landing — the website was trying to serve everyone equally and resonating with neither audience fully.",
		],
		situationHighlight:
			"One website was trying to serve employers and candidates simultaneously, and weakening both messages in the process.",
		challenge: [
			"The challenge was not just splitting content. It was ensuring each audience — employers and candidates — got a complete, persuasive journey from first visit to conversion, without either seeing content meant for the other.",
			"We needed to back the positioning with real proof: placement metrics, time-to-placement data, and partner company counts that demonstrate actual results.",
		],
		challengeQuote:
			"When you try to speak to everyone, you resonate with nobody.",
		decisions: [
			{
				term: "Split employer and candidate journeys",
				detail:
					"Split employer and candidate journeys at the top level, so each audience gets a complete path from the moment they arrive. Business reason: employers see capability, process, and partnership models; candidates see opportunities, support, and career outcomes — without cross-contamination.",
			},
			{
				term: "Visible 4-step methodology",
				detail:
					"Displayed a clear 4-step recruitment methodology directly on the page. Business reason: the process becomes transparent and differentiated, not a black box that clients have to trust blindly.",
			},
			{
				term: "Real placement metrics",
				detail:
					"Placed real metrics on the page: 500+ professionals placed, 2-4 week average time-to-placement, 10+ partner companies. Business reason: credibility comes from data, not claims — and the numbers prove the strategic partner positioning.",
			},
		],
		outcomeNarrative: [
			"Employers and candidates now experience completely separate journeys from their first visit. Each audience sees content, metrics, and calls-to-action designed specifically for their needs.",
			"Real placement metrics are displayed directly on the page: 500+ professionals placed, 2-4 week average time-to-placement, and 10+ partner companies. These numbers prove the firm's positioning as a strategic partner.",
			"The 4-step methodology gives both audiences visibility into the process. Employers understand how the partnership works, and candidates see the path from application to placement — building trust before the first conversation.",
		],
		clientPerspective: {
			quote:
				"Employers see our process, candidates see their path — and both see the numbers that prove we deliver.",
			attribution: "Managing Director, JL Recruitment",
		},
		related: ["06", "04"],
	},
};

const outcomeMetrics = (caseItem: { outcome: string[][] }) =>
	caseItem.outcome.map(([value, label]) => ({
		value,
		label,
	}));

export const caseStudies = workCases.map((caseItem) => ({
	...caseItem,
	...detailMap[caseItem.no],
	outcomeMetrics: outcomeMetrics(caseItem),
}));

export const caseStudyMap = Object.fromEntries(
	caseStudies.map((caseItem) => [caseItem.no, caseItem]),
);

export function getCaseStudy(id: string) {
	if (!id) {
		return caseStudies[0];
	}

	const normalized = id.toLowerCase();
	return (
		caseStudies.find(
			(caseItem) =>
				caseItem.no.toLowerCase() === normalized ||
				caseItem.slug === normalized,
		) || caseStudies[0]
	);
}

export function getRelatedCaseStudies(caseItem: { related?: string[] }) {
	return (caseItem.related || []).map((no) => caseStudyMap[no]).filter(Boolean);
}

export function getCaseStudyUrl(
	caseItem: { slug?: string; no?: string } | string,
) {
	if (typeof caseItem === "string") {
		return getCaseStudyPath(caseItem);
	}

	const resolved = caseItem.slug
		? caseItem
		: (caseStudyMap[caseItem.no ?? ""] ?? getCaseStudy(caseItem.no ?? ""));
	return getCaseStudyPath(resolved.slug ?? "");
}

export function getCaseStudyReadingTime(caseItem: {
	subtitle: string;
	heroContext: string;
	situation: string[];
	situationHighlight: string;
	challenge: string[];
	challengeQuote: string;
	decisions: { term: string; detail: string }[];
	outcomeNarrative: string[];
	clientPerspective: { quote: string };
}) {
	const segments = [
		caseItem.subtitle,
		caseItem.heroContext,
		...caseItem.situation,
		caseItem.situationHighlight,
		...caseItem.challenge,
		caseItem.challengeQuote,
		...caseItem.decisions.map(({ term, detail }) => `${term} ${detail}`),
		...caseItem.outcomeNarrative,
		caseItem.clientPerspective.quote,
	];

	const wordCount = segments
		.join(" ")
		.trim()
		.split(/\s+/)
		.filter(Boolean).length;

	return String(Math.max(10, Math.round(wordCount / 170)));
}
