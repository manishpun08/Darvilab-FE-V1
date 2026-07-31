export const workCases = [
	{
		no: "01",
		project: "Atlas Dispatch",
		industry: "Logistics SaaS",
		domain: "OPERATIONS",
		year: "2025",
		type: "WORKFLOW SYSTEM",
		status: "MONITORED",
		subtitle:
			"An exception-first control surface for high-pressure dispatch operations.",
		situation:
			"Dispatch teams were coordinating live work across six tools, each carrying a different version of operational truth.",
		challenge:
			"Exceptions surfaced late. Operators reconciled state by hand, increasing response time exactly when the system was under pressure.",
		decision:
			"Replace task lists with one event model, then make unresolved exceptions, not routine work, the primary operating view.",
		outcomeRecord:
			"Evidence slots track handoffs, exception age, and recovery time after the new operating model went live.",
		signal: "EVENT MODEL",
		evidenceId: "OPS-AC-014",
		variant: "operations",
		metrics: [
			["Manual handoffs", "↓ 31%"],
			["Recovery time", "↓ 44%"],
			["State coverage", "↑ 96%"],
		],
		problem: "Exceptions kept slipping across handoffs.",
		whatChanged: "Rebuilt tracking around live exception state.",
		outcome: [
			["↓31%", "resolution time"],
			["↑98%", "adoption"],
			["↓46%", "escalations"],
		],
		metricPlainEnglish:
			"Teams were spending around four hours a day reconciling updates. After launch, exception review dropped below forty minutes.",
		clientQuote:
			"We stopped managing around the system and finally had one place to run the operation.",
	},
	{
		no: "02",
		project: "Northstar",
		industry: "Commerce",
		domain: "COMMERCE",
		year: "2025",
		type: "CONFIGURATION ENGINE",
		status: "VALIDATED",
		subtitle:
			"A rule-led buying system for products too complex for a standard catalogue.",
		situation:
			"A fast-growing catalogue depended on a small internal team to interpret product, pricing, and fulfilment rules.",
		challenge:
			"Invalid combinations reached quoting, creating rework and making commercial accuracy dependent on tribal knowledge.",
		decision:
			"Encode commercial constraints as visible validation gates shared by customers, sales, and operations.",
		outcomeRecord:
			"The record measures invalid quote prevention, configuration completion, and operator intervention.",
		signal: "RULE ENGINE",
		evidenceId: "COM-NS-082",
		variant: "commerce",
		metrics: [
			["Quote rework", "↓ 38%"],
			["Valid orders", "↑ 29%"],
			["Rule coverage", "↑ 94%"],
		],
		problem: "Quotes broke when rules lived in people.",
		whatChanged: "Made validation gates visible before quoting.",
		outcome: [
			["↓38%", "quote rework"],
			["↑29%", "valid orders"],
			["↑94%", "rule coverage"],
		],
		metricPlainEnglish:
			"Quoting used to bounce between teams for manual checks. After launch, invalid configurations were blocked before they reached operations.",
		clientQuote:
			"The system now tells people what will work before a bad order gets any further.",
	},
	{
		no: "03",
		project: "ClearLedger",
		industry: "FinTech",
		domain: "FINTECH",
		year: "2024",
		type: "DECISION PLATFORM",
		status: "AUDIT READY",
		subtitle:
			"A traceable risk decision model built for analyst confidence and audit scrutiny.",
		situation:
			"Analysts could see a risk score, but not which source signals moved an account across a decision threshold.",
		challenge:
			"Reviews were slow and inconsistent because the system exposed conclusions without a defensible evidence chain.",
		decision:
			"Make every score traversable from source to rule to threshold to human review, with no hidden decision state.",
		outcomeRecord:
			"Review duration, exception rates, and decision consistency become inspectable operating evidence.",
		signal: "TRACE GRAPH",
		evidenceId: "FIN-CL-117",
		variant: "finance",
		metrics: [
			["Review time", "↓ 38%"],
			["Audit exceptions", "↓ 22%"],
			["Consistency", "↑ 41%"],
		],
		problem: "Analysts saw scores, not the reason.",
		whatChanged: "Exposed source-to-rule decision trace.",
		outcome: [
			["↓38%", "review time"],
			["↓22%", "audit exceptions"],
			["↑41%", "consistency"],
		],
		metricPlainEnglish:
			"Analysts were manually rebuilding the reason behind a score. After launch, the review path was already visible inside the decision flow.",
		clientQuote:
			"Confidence improved because the team could inspect the decision instead of debating it.",
	},
	{
		no: "04",
		project: "Fieldline",
		industry: "Field Service",
		domain: "FIELD SERVICE",
		year: "2024",
		type: "READINESS SYSTEM",
		status: "FIELD PROVEN",
		subtitle:
			"A readiness protocol that determines whether a visit can succeed before dispatch.",
		situation:
			"Technicians received schedules without the history, parts, or escalation context required to finish the work.",
		challenge:
			"Calendar availability was mistaken for operational readiness, creating preventable repeat visits and support calls.",
		decision:
			"Gate dispatch through a readiness model and preserve evidence offline until the field device reconnects.",
		outcomeRecord:
			"First-visit completion, return rate, and offline sync integrity form the post-launch record.",
		signal: "READINESS PROTOCOL",
		evidenceId: "FLD-FL-055",
		variant: "field",
		metrics: [
			["Return visits", "↓ 26%"],
			["First-fix rate", "↑ 34%"],
			["Sync integrity", "↑ 99%"],
		],
		problem: "Jobs arrived before teams were ready.",
		whatChanged: "Gated dispatch behind readiness proof.",
		outcome: [
			["↓26%", "return visits"],
			["↑34%", "first-fix rate"],
			["↑99%", "sync integrity"],
		],
		metricPlainEnglish:
			"A scheduled visit did not mean a completable visit. After launch, teams could stop dispatching work that was not actually ready.",
		clientQuote:
			"Readiness became something we could verify before a van ever left the depot.",
	},
	{
		no: "05",
		project: "RelayOS",
		industry: "Logistics",
		domain: "NETWORK OPERATIONS",
		year: "2023",
		type: "ROUTING PLATFORM",
		status: "LIVE CONTROL",
		subtitle:
			"A recoverable routing network that treats capacity as a changing constraint.",
		situation:
			"Static routing rules worked at average volume and failed when capacity shifted across the network.",
		challenge:
			"Cost accumulated invisibly until a late delivery made the constraint visible, too late for low-cost recovery.",
		decision:
			"Model capacity continuously and surface the earliest exception with a viable recovery path.",
		outcomeRecord:
			"Route cost, intervention lead time, and delivery reliability are recorded against each constraint change.",
		signal: "CAPACITY NETWORK",
		evidenceId: "LOG-RO-063",
		variant: "logistics",
		metrics: [
			["Route cost", "↓ 18%"],
			["Late recovery", "↓ 32%"],
			["On-time rate", "↑ 17%"],
		],
		problem: "Capacity risk appeared after recovery got expensive.",
		whatChanged: "Modeled capacity as a live constraint.",
		outcome: [
			["↓18%", "route cost"],
			["↓32%", "late recovery"],
			["↑17%", "on-time rate"],
		],
		metricPlainEnglish:
			"Teams were reacting after delivery risk had already materialized. After launch, they could intervene while the cheaper option still existed.",
		clientQuote:
			"We stopped learning about capacity problems at the point of failure.",
	},
	{
		no: "06",
		project: "CivicLink",
		industry: "GovOps",
		domain: "PUBLIC SERVICE OPS",
		year: "2024",
		type: "SERVICE INTAKE SYSTEM",
		status: "ACCOUNTABLE",
		subtitle:
			"An intake model that makes ownership and SLA risk explicit before service failure.",
		situation:
			"Service requests moved between teams without visible ownership or next-step accountability.",
		challenge:
			"Service risk became visible only after a deadline had already slipped.",
		decision:
			"Organize work around accountable next actions and SLA exposure, not departments.",
		outcomeRecord:
			"First response time, reassignments, and SLA recovery become visible operational evidence.",
		signal: "OWNERSHIP LEDGER",
		evidenceId: "GOV-CV-041",
		variant: "govops",
		metrics: [
			["First response", "↓ 41%"],
			["Reassignments", "↓ 27%"],
			["SLA recovery", "↑ 33%"],
		],
		problem: "Requests moved with no clear owner.",
		whatChanged: "Reframed intake around accountable next actions.",
		outcome: [
			["↓41%", "first response"],
			["↓27%", "reassignments"],
			["↑33%", "SLA recovery"],
		],
		metricPlainEnglish:
			"Risk used to appear only after a deadline slipped. After launch, service teams could see the next owner and intervention window before the breach.",
		clientQuote:
			"The queue stopped being a black box because ownership was explicit at every step.",
	},
	{
		no: "07",
		project: "Signal Room",
		industry: "HealthTech",
		domain: "KNOWLEDGE SYSTEMS",
		year: "2025",
		type: "GROUNDING SYSTEM",
		status: "HUMAN GUARDED",
		subtitle:
			"A source-grounded answer system with explicit confidence and human ownership.",
		situation:
			"Fast support answers drew from source knowledge with no ownership, expiry, or confidence model.",
		challenge:
			"The system could sound certain while using stale policy, moving risk from response speed into answer quality.",
		decision:
			"Ground each response in approved sources and route low-confidence or conflicting evidence to a named human owner.",
		outcomeRecord:
			"Grounding coverage, human review rate, and corrected-answer recurrence become the quality trail.",
		signal: "GROUNDING GRAPH",
		evidenceId: "AIK-SR-091",
		variant: "knowledge",
		metrics: [
			["Support load", "↓ 28%"],
			["Grounded answers", "↑ 93%"],
			["Repeat errors", "↓ 36%"],
		],
		problem: "Fast answers still carried policy risk.",
		whatChanged: "Grounded replies in approved sources.",
		outcome: [
			["↓28%", "support load"],
			["↑93%", "grounded answers"],
			["↓36%", "repeat errors"],
		],
		metricPlainEnglish:
			"The team was correcting confident but outdated answers after the fact. After launch, uncertain responses were escalated before they reached the client.",
		clientQuote:
			"Speed mattered less than being able to trust the answer that went out.",
	},
	{
		no: "08",
		project: "UK Uniladder",
		industry: "Study Abroad Consultancy",
		domain: "EDTECH",
		year: "2025",
		type: "CONSULTATION PLATFORM",
		status: "LIVE",
		subtitle:
			"A consultation platform that proved counselor credibility before the first meeting.",
		situation:
			"Prospective students had no way to see counselor credentials or talk to someone before committing.",
		challenge:
			"Consultations were slow, and trust was hard to prove from a website alone.",
		decision:
			"Build video consultations with accredited counselors directly into the platform so trust was established before the first meeting.",
		outcomeRecord:
			"Visa success rate and consultation conversion track platform trust and student outcomes.",
		signal: "TRUST MODEL",
		evidenceId: "EDU-UK-001",
		variant: "edtech",
		metrics: [
			["Visa success", "↑ 99.99%"],
		],
		problem:
			"Consultations were slow, and trust was hard to prove from a website alone.",
		whatChanged:
			"Built video consultations with accredited counselors directly into the platform.",
		outcome: [
			["99.99%", "visa success rate"],
		],
		metricPlainEnglish:
			"Prospective students had no way to see counselor credentials or talk to someone before committing. After launch, video consultations with British Council certified counselors happened directly through the platform.",
		clientQuote:
			"Trust used to be the hardest thing to prove from a website. Now it's built into every step before the first conversation.",
	},
	{
		no: "09",
		project: "Himalayan Bullion",
		industry: "Precious Metals Trading",
		domain: "FINTECH",
		year: "2025",
		type: "REAL-TIME TRADING PLATFORM",
		status: "LIVE",
		subtitle:
			"A precious metals trading platform built for price-sensitive buyers who need to act instantly.",
		situation:
			"Silver prices move by the hour — a stale rate on screen erodes trust immediately.",
		challenge:
			"Customers needed to trust a price the moment they saw it.",
		decision:
			"Deliver real-time market rates and secure transactions so buyers could act on current prices with confidence.",
		outcomeRecord:
			"Market rate accuracy, transaction speed, and customer trust form the post-launch record.",
		signal: "LIVE PRICING",
		evidenceId: "FIn-HB-002",
		variant: "finance",
		metrics: [
			["Market rank", "#1"],
		],
		problem:
			"Customers needed to trust a price the moment they saw it.",
		whatChanged:
			"Delivered real-time market rates and secure transactions on a platform buyers could act on instantly.",
		outcome: [
			["Nepal's #1", "silver trading house"],
		],
		metricPlainEnglish:
			"Silver prices move by the hour — a stale rate on screen erodes trust immediately. After launch, real-time market rates and secure transactions gave Nepal's leading silver trading house a platform buyers could act on instantly.",
		clientQuote:
			"Price trust was always the barrier. Now our customers move on the same rate we see.",
	},
	{
		no: "10",
		project: "HumanEdge Nepal",
		industry: "Creative Agency Platform",
		domain: "CREATIVE",
		year: "2025",
		type: "SERVICE ORGANIZATION PLATFORM",
		status: "LIVE",
		subtitle:
			"A platform that organized a full-service agency's range into something clients could evaluate.",
		situation:
			"Visitors had no structured way to see development, content, and design work side by side.",
		challenge:
			"Prospective clients couldn't see the agency's actual range before reaching out.",
		decision:
			"Organize every service line into one clear structure so clients could evaluate the full range before engaging.",
		outcomeRecord:
			"Client engagement depth and service discovery rate measure platform effectiveness.",
		signal: "SERVICE GRID",
		evidenceId: "CRE-HE-003",
		variant: "creative",
		metrics: [
			["Service lines", "3"],
		],
		problem:
			"Prospective clients couldn't see the agency's actual range before reaching out.",
		whatChanged:
			"Organized every service line into one clear, evaluable structure.",
		outcome: [],
		metricPlainEnglish:
			"A full-service creative agency was competing on reputation alone — visitors had no structured way to see development, content, and design work side by side. After launch, the platform organized every service line into one clear structure, turning 'we do everything' into something a client could actually evaluate.",
		clientQuote:
			"Our range was always our strength, but nobody could see it at once. Now they can.",
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
