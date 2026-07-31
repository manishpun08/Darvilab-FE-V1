export const processSectionLinks = [
	{ id: "opening", label: "Opening", no: "01" },
	{ id: "overview", label: "Overview", no: "02" },
	{ id: "breakdown", label: "Phases", no: "03" },
	{ id: "responsibilities", label: "What We Need", no: "04" },
	{ id: "changes", label: "When Things Shift", no: "05" },
	{ id: "sync", label: "How We Stay In Sync", no: "06" },
];

export const processPhases = [
	{
		id: "discovery",
		no: "01",
		name: "Discovery",
		duration: "1–2 weeks",
		summary:
			"We define the actual problem, the constraints around it, and what a useful outcome looks like.",
		whatHappens: [
			"Review the current system, workflow, or delivery brief in detail.",
			"Map risks, dependencies, and the assumptions that need to be challenged early.",
			"Define scope boundaries, success criteria, and the decision-makers involved.",
			"Turn ambiguity into a concrete plan before design or engineering begins.",
		],
		whatWeNeed: [
			"Access to the people closest to the problem.",
			"Existing documentation, code, process notes, or product context.",
			"Honest answers about what is blocked, politically sensitive, or already tried.",
		],
		whatYouReceive:
			"A scoped working plan, clarified priorities, known risks, and a shared definition of success.",
		durationDetail: "Usually 1–2 weeks, depending on access and complexity.",
	},
	{
		id: "architecture",
		no: "02",
		name: "Architecture",
		duration: "1–3 weeks",
		summary:
			"We decide how the system should be shaped before implementation starts consuming time and budget.",
		whatHappens: [
			"Translate Discovery decisions into system structure, product flows, and delivery sequencing.",
			"Make the key technical and operational tradeoffs visible while they are still cheap to change.",
			"Define how design, engineering, and review loops will work during Build.",
		],
		whatWeNeed: [
			"Fast confirmation on major tradeoffs and business constraints.",
			"Access to any existing infrastructure or platform rules that affect delivery.",
		],
		whatYouReceive:
			"A delivery architecture, decision log, implementation priorities, and a build sequence the team can follow without guesswork.",
		durationDetail: "Usually 1–3 weeks, depending on system breadth.",
	},
	{
		id: "build",
		no: "03",
		name: "Build",
		duration: "4–10 weeks",
		summary:
			"We implement in working increments, not as a black-box sprint that only becomes visible near the end.",
		whatHappens: [
			"Build the agreed scope in documented milestones with regular internal QA.",
			"Surface decisions and edge cases while they are happening, not after they have hardened into rework.",
			"Review progress against the original outcomes, not just completed tickets.",
			"Keep the decision context intact across product, design, and engineering work.",
		],
		whatWeNeed: [
			"Feedback inside agreed windows so the schedule stays reliable.",
			"A named contact who can unblock decisions when tradeoffs appear.",
			"Access to staging, integrations, or systems needed for implementation.",
		],
		whatYouReceive:
			"Working product increments, documented decisions, and visible progress tied to the plan set in Discovery.",
		durationDetail: "Usually 4–10 weeks, depending on scope and integrations.",
	},
	{
		id: "review",
		no: "04",
		name: "Review",
		duration: "1–2 weeks",
		summary:
			"We inspect what was built against the brief, the system constraints, and the operational reality around launch.",
		whatHappens: [
			"Run final QA, edge-case review, and acceptance checks against agreed outcomes.",
			"Close documentation gaps and confirm anything that still needs explicit sign-off.",
			"Address the last issues that would make handover fragile or incomplete.",
		],
		whatWeNeed: [
			"Timely feedback from the people approving release readiness.",
			"Clear escalation if an issue changes launch confidence or acceptance criteria.",
		],
		whatYouReceive:
			"A reviewed system, a resolved issue list, and a handover-ready baseline instead of an unfinished delivery dump.",
		durationDetail: "Usually 1–2 weeks, depending on final revisions.",
	},
	{
		id: "handover",
		no: "05",
		name: "Handover",
		duration: "1–3 weeks",
		summary:
			"We close the engagement by making ownership transferable, not by disappearing after the final demo.",
		whatHappens: [
			"Package documentation, decision context, credentials, and operational notes.",
			"Walk the client team through what changed, what matters, and what to watch next.",
			"Define the immediate post-launch responsibilities and unresolved watchpoints.",
		],
		whatWeNeed: [
			"The right internal owners present for transition and knowledge transfer.",
			"Confirmation of where ongoing responsibility sits after delivery.",
		],
		whatYouReceive:
			"A handover record, usable documentation, and clear operational ownership for what happens next.",
		durationDetail: "Usually 1–3 weeks, depending on transition complexity.",
	},
];

export const clientResponsibilities = [
	{
		label: "A named point of contact",
		body: "One person on your side needs enough authority to confirm decisions, coordinate feedback, and keep the work moving.",
	},
	{
		label: "Feedback within agreed windows",
		body: "We plan review time into the schedule. When feedback slips, timelines usually slip with it, so this is the most important client-side discipline.",
	},
	{
		label: "Access to existing systems",
		body: "Credentials, repositories, product environments, and internal documentation need to be available before the phase that depends on them starts.",
	},
	{
		label: "Availability at key checkpoints",
		body: "Discovery and Review require real engagement from the people closest to the business context and release decision.",
	},
	{
		label: "Clarity on internal constraints",
		body: "Commercial rules, compliance realities, stakeholder politics, and operational limits need to be surfaced early, even when they are inconvenient.",
	},
	{
		label: "A clear escalation path",
		body: "If something becomes blocked, we need to know who can resolve it quickly rather than letting uncertainty sit in the schedule.",
	},
];

export const changeBlocks = [
	{
		title: "If scope expands",
		body: "We raise it explicitly, document what changed, and separate it from the originally agreed scope. You are shown the impact before the work is absorbed into the schedule, so the decision stays commercial as well as technical.",
	},
	{
		title: "If the timeline shifts",
		body: "We communicate that directly through the named contact, explain what moved the date, and show which dependencies changed. The point is to make the shift legible early enough for you to decide what to protect, compress, or move.",
	},
	{
		title: "If something technically breaks or changes",
		body: "Unexpected technical issues are treated as delivery risks, not buried engineering trivia. We explain what changed, what it affects, what we are doing about it, and whether it alters scope, timeline, or launch confidence.",
	},
];

export const syncBlocks = [
	{
		title: "Communication",
		body: "Async communication runs through shared written channels so decisions stay visible and searchable. Live calls are used for milestone reviews, complex tradeoffs, or moments where written feedback would slow clarity down.",
	},
	{
		title: "Reporting",
		body: "Progress updates are structured around what changed, what is blocked, and what decisions are pending. The format is concise on purpose: enough to understand movement and risk without turning status reporting into its own project.",
	},
	{
		title: "Escalation",
		body: "If something needs immediate attention, it is raised directly through the agreed point of contact rather than waiting for the next review window. That keeps operational risk small and prevents avoidable surprises late in the timeline.",
	},
];
