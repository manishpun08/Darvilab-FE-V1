export const workCases = [
	{
		no: "01",
		project: "Chynabazar",
		industry: "E-Commerce",
		domain: "E-COMMERCE",
		year: "2025",
		type: "COMMERCE ECOSYSTEM",
		status: "IN PRODUCTION",
		subtitle:
			"A full commerce ecosystem — web, mobile, and admin — built from zero, not stitched together.",
		situation:
			"The client needed a full commerce ecosystem, not a single storefront — a customer-facing web platform, a native mobile app, and a complete administrative system to run the business behind it. There was no existing platform to extend; this was architecture through launch, end to end.",
		challenge:
			"A platform with three live client-facing surfaces and a full admin system creates a coordination problem before it creates a technical one. Backend and infrastructure, admin dashboard development, B2C and mobile frontend, and QA all had to move in parallel without priorities drifting as scope expanded. The other constraint was operational control: an e-commerce business this size needed precise, granular control over who on the team could view or act on what, not a flat admin system where every user had the same access.",
		decision:
			"Built a full admin dashboard supporting 19 distinct roles and permission sets, in-house Live Stream and Shorts features instead of third-party integration, and structured DEV → QA → UAT cycle with consistent client status reporting.",
		outcomeRecord:
			"A fully functional admin system supporting 19 role-based permission tiers across all core commerce operations, a live B2C web storefront and companion mobile app, integrated payment (eSewa, Khalti, Connect IPS), logistics (Pathao), SMS notifications, and finance/invoice systems, and in-house-built Live Stream and Shorts features.",
		signal: "ROLE-BASED COMMERCE",
		evidenceId: "ECOM-CB-001",
		variant: "commerce",
		metrics: [
			["Role tiers", "19"],
			["Surfaces", "3 (Web, Mobile, Admin)"],
			["Live features", "Stream + Shorts"],
		],
		problem: "Needed a full commerce ecosystem — web, mobile, admin — built from zero.",
		whatChanged:
			"Built granular 19-role admin RBAC, native mobile app, and in-house live-commerce features instead of third-party integrations.",
		outcome: [
			["19", "role-based permission tiers"],
			["3", "client-facing surfaces"],
			["In-house", "Live Stream & Shorts"],
		],
		metricPlainEnglish:
			"The client needed a full commerce ecosystem built from zero — web, mobile, and admin. After launch, all three surfaces run in production with granular RBAC controlling access across 19 distinct roles, integrated payment, logistics, and SMS systems, and native live-commerce features.",
		clientQuote:
			"Before this, our team was managing three different systems just to keep operations running. Now everything — inventory, orders, customer support — lives in one platform we actually trust. It's changed how fast we can move.",
	},
	{
		no: "02",
		project: "HumanEdge LMS",
		industry: "EdTech / Corporate Training",
		domain: "EDTECH",
		year: "2025",
		type: "ROLE-BASED LMS",
		status: "LIVE",
		subtitle:
			"Five function-specific access tiers replacing one generic training interface.",
		situation:
			"Corporate training needed to run at scale across very different roles, each requiring a different level of access and responsibility. A single generic interface couldn't accommodate the operational differences between administrators, trainers, managers, and learners.",
		challenge:
			"One generic interface forced every role into the same workflow, creating friction for power users and confusion for casual ones. Training rollout couldn't scale because each role had different needs that a single interface couldn't serve.",
		decision:
			"Replace one generic interface with five function-specific access tiers, each built for exactly what that role needs to do, backed by full UAT and training documentation.",
		outcomeRecord:
			"Five distinct access tiers operational, organization-wide training rollout with clear role accountability, full UAT documentation, and training materials for each user type.",
		signal: "ROLE-BASED ACCESS",
		evidenceId: "EDU-HE-002",
		variant: "edtech",
		metrics: [
			["Access tiers", "5"],
			["Documentation", "Full UAT + Training"],
			["Deployment", "Organization-wide"],
		],
		problem: "Needed structured, org-wide training delivery across very different user roles.",
		whatChanged:
			"Built five distinct, function-specific access tiers instead of one generic interface, backed by full UAT and training documentation.",
		outcome: [
			["5", "function-specific tiers"],
			["Full", "UAT documentation"],
			["Smooth", "organization-wide rollout"],
		],
		metricPlainEnglish:
			"Corporate training was stuck on a one-size-fits-all interface that couldn't scale across different organizational roles. After launch, five distinct access tiers let each role work exactly as needed, with full UAT and training documentation ensuring smooth rollout.",
		clientQuote:
			"Each team now has exactly the access they need — no more, no less. Training finally runs the way our organization actually works.",
	},
	{
		no: "03",
		project: "LifeRishi",
		industry: "Consumer / Wellness Tech",
		domain: "CONSUMER TECH",
		year: "2025",
		type: "TWO-SIDED PLATFORM",
		status: "BETA 2.0",
		subtitle:
			"An on-demand astrology consultation platform with dedicated dashboards for both consumers and astrologers.",
		situation:
			"Astrology consultation was still offline and appointment-based, with no way for users to connect with astrologers on demand. The service had no digital equivalent for real-time consultation.",
		challenge:
			"Building a two-sided marketplace required solving for both supply (astrologers) and demand (consumers) simultaneously. Astrologers needed their own dashboard to manage availability and consultations, while consumers needed a seamless way to find and connect with them instantly.",
		decision:
			"Build a two-sided platform — consumer app plus a dedicated astrologer dashboard — so both sides of the marketplace could actually operate, delivered through sprint-based cycles to 2.0 beta.",
		outcomeRecord:
			"Two-sided platform reaching 2.0 beta, live on-demand consultations running, astrologer dashboard operational, and consumer app delivering real-time consultation booking.",
		signal: "MARKETPLACE",
		evidenceId: "CON-LR-003",
		variant: "consumer",
		metrics: [
			["Version", "2.0 Beta"],
			["Platform", "Two-sided"],
			["Consultations", "On-demand live"],
		],
		problem: "An offline, appointment-based astrology service had no on-demand digital equivalent.",
		whatChanged:
			"Built a two-sided platform with a dedicated astrologer dashboard, delivered through sprint-based cycles to 2.0 beta.",
		outcome: [
			["2.0", "beta reached"],
			["Live", "on-demand consultations"],
			["Two-sided", "marketplace operational"],
		],
		metricPlainEnglish:
			"Astrology consultation was stuck in offline, appointment-based mode with no digital path to on-demand service. After build, a two-sided platform with dedicated consumer and astrologer dashboards reached 2.0 beta with live consultations running.",
		clientQuote:
			"For the first time, our astrologers and clients can connect instantly — no phone tag, no scheduling delays.",
	},
	{
		no: "04",
		project: "Himalayan Bullion",
		industry: "FinTech / Precious Metals",
		domain: "FINTECH",
		year: "2025",
		type: "REAL-TIME TRADING PLATFORM",
		status: "LIVE",
		subtitle:
			"Nepal's #1 silver trading platform built for real-time pricing reliability.",
		situation:
			"Silver prices move by the minute, and customers had no live, trustworthy reference to trade against. A stale rate on screen erodes trust immediately for price-sensitive buyers.",
		challenge:
			"Customers needed to trust a price the moment they saw it. Real-time pricing couldn't be a bolt-on feature — it had to be the platform's core reliability requirement for the trading experience to work.",
		decision:
			"Engineer real-time pricing as the platform's core reliability requirement, not a bolt-on feature, with live market rates and secure transactions buyers could act on instantly.",
		outcomeRecord:
			"Recognized as Nepal's #1 silver trading platform, trusted for real-time pricing, with market rate accuracy and transaction speed forming the post-launch record.",
		signal: "REAL-TIME PRICING",
		evidenceId: "FIN-HB-004",
		variant: "finance",
		metrics: [
			["Market rank", "#1 in Nepal"],
			["Pricing", "Real-time"],
			["Trust", "Price-locked"],
		],
		problem: "Silver prices move by the minute; customers had no live, trustworthy price reference.",
		whatChanged:
			"Engineered real-time pricing as the platform's core reliability requirement, not a bolt-on feature.",
		outcome: [
			["#1", "silver trading platform"],
			["Real-time", "market rates"],
			["Trusted", "by price-sensitive buyers"],
		],
		metricPlainEnglish:
			"Silver prices move by the minute, and customers had no live, trustworthy reference to trade against. After launch, real-time pricing became the platform's core reliability requirement, earning recognition as Nepal's #1 silver trading platform.",
		clientQuote:
			"Price trust was always the barrier. Now our customers move on the same rate we see.",
	},
	{
		no: "05",
		project: "AI-Powered PM Platform",
		industry: "Internal Product / AI & Automation",
		domain: "INTERNAL PRODUCT",
		year: "2025",
		type: "AI AUTOMATION PLATFORM",
		status: "IN USE",
		subtitle:
			"Role-specific portals with integrated LLM automation for task routing, status, and reporting.",
		situation:
			"Generic PM tools don't adapt to how PM, Developer, QA, and Client roles actually make decisions. Status updates and task handoffs were eating up time that should have gone into actual project work.",
		challenge:
			"Each role needed a different view and different automation — PMs need portfolio oversight, developers need task context, QA needs validation workflows, clients need status transparency. A single generic tool couldn't serve these distinct decision-making patterns.",
		decision:
			"Build role-specific portals with an integrated LLM automation layer handling task routing, status, and reporting directly inside the workflow.",
		outcomeRecord:
			"AI automation handling real task routing and reporting in daily internal use, with role-specific portals serving PM, Developer, QA, and Client workflows.",
		signal: "AI ROUTING",
		evidenceId: "INT-PM-005",
		variant: "internal",
		metrics: [
			["Portals", "4 role-specific"],
			["Automation", "LLM-integrated"],
			["Status", "Daily internal use"],
		],
		problem: "Generic PM tools don't adapt to how PM, Developer, QA, and Client roles actually make decisions.",
		whatChanged:
			"Built role-specific portals with an integrated LLM automation layer for task routing, status, and reporting.",
		outcome: [
			["4", "role-specific portals"],
			["AI", "task routing active"],
			["Daily", "internal use"],
		],
		metricPlainEnglish:
			"Status updates and task handoffs were consuming time meant for actual project work. After launch, role-specific portals with LLM automation now handle task routing, status updates, and reporting directly in the workflow.",
		clientQuote:
			"The team spends time on project work now, not on telling people what's happening with project work.",
	},
	{
		no: "06",
		project: "NIET College",
		industry: "Education / Engineering",
		domain: "EDUCATION",
		year: "2025",
		type: "CMS WEBSITE",
		status: "LIVE",
		subtitle:
			"A website reflecting UGC-QAA accreditation, built as a CMS the college can maintain.",
		situation:
			"Nepal's first UGC-QAA certified engineering college needed a website that actually reflected that credibility. The existing site didn't communicate the college's unique positioning or program differentiation.",
		challenge:
			"A generic college template wouldn't work — the site needed to highlight Nepal's only Biomedical Engineering program and the UGC-QAA accreditation that sets NIET apart. The college also needed to maintain content without developer dependency.",
		decision:
			"Structure the site around real program differentiation — including Nepal's only Biomedical Engineering program — instead of a generic college template, built as a CMS the college can maintain.",
		outcomeRecord:
			"Elevated digital credibility for admissions, reflecting UGC-QAA accreditation, with CMS-enabled content management and program-specific landing pages.",
		signal: "PROGRAM DIFFERENTIATION",
		evidenceId: "EDU-NI-006",
		variant: "edtech",
		metrics: [
			["Accreditation", "UGC-QAA"],
			["Unique program", "Biomedical Engineering"],
			["CMS", "College-maintained"],
		],
		problem: "Nepal's first UGC-QAA certified engineering college needed a site reflecting that credibility.",
		whatChanged:
			"Structured content around real program differentiation (incl. Nepal's only Biomedical Engineering program), built as a CMS the college can maintain.",
		outcome: [
			["UGC-QAA", "accreditation reflected"],
			["Only", "Biomedical Engineering in Nepal"],
			["CMS", "for college maintenance"],
		],
		metricPlainEnglish:
			"Nepal's first UGC-QAA certified engineering college had a site that didn't reflect its credibility. After launch, the site highlights unique program differentiation including Nepal's only Biomedical Engineering program, built as a CMS the college can maintain independently.",
		clientQuote:
			"Our accreditation and programs finally show up the way they should. The site now matches the institution.",
	},
	{
		no: "07",
		project: "JobLadder (JL Recruitment)",
		industry: "HR / Recruitment",
		domain: "HR TECH",
		year: "2025",
		type: "DUAL-AUDIENCE PLATFORM",
		status: "LIVE",
		subtitle:
			"A platform splitting employer and candidate journeys to serve two audiences without diluting either message.",
		situation:
			"A recruitment firm positioning itself as a strategic partner, not a staffing agency, needed a site serving two distinct audiences — employers and candidates — without diluting either message.",
		challenge:
			"Employers need to see capability and process; candidates need to see opportunity and support. One page trying to speak to both audiences weakens both messages. The firm also needed to prove credibility through real metrics, not just claims.",
		decision:
			"Split employer and candidate journeys at the top level, backed by a visible 4-step methodology and real placement metrics displayed directly on the page.",
		outcomeRecord:
			"500+ professionals placed, 2-4 week average time-to-placement, 10+ partner companies, with split employer/candidate journeys and visible methodology.",
		signal: "SPLIT JOURNEYS",
		evidenceId: "HR-JL-007",
		variant: "hr",
		metrics: [
			["Placements", "500+"],
			["Time-to-placement", "2-4 weeks avg"],
			["Partner companies", "10+"],
		],
		problem: "A recruitment firm positioning itself as a strategic partner needed a site serving two distinct audiences without diluting either message.",
		whatChanged:
			"Split employer and candidate journeys at the top level, backed by a visible 4-step methodology and real placement metrics displayed directly on the page.",
		outcome: [
			["500+", "professionals placed"],
			["2-4 week", "avg time-to-placement"],
			["10+", "partner companies"],
		],
		metricPlainEnglish:
			"A recruitment firm needed to speak to employers and candidates without weakening either message. After launch, split journeys let each audience see what matters to them, backed by a visible 4-step methodology and real placement metrics: 500+ professionals placed, 2-4 week average time-to-placement.",
		clientQuote:
			"Employers see our process, candidates see their path — and both see the numbers that prove we deliver.",
	},
];

export const readingModel = [
	[
		"01",
		"Situation",
		"The operating context the client was working inside before anything changed.",
	],
	[
		"02",
		"Challenge",
		"The specific failure, constraint, or risk that made the status quo unsustainable.",
	],
	[
		"03",
		"Decision",
		"The call we made, technical or structural, and why we made it over the alternatives.",
	],
	[
		"04",
		"Outcome",
		"What changed after launch, documented in metrics the client can verify.",
	],
];
