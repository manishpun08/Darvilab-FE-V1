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
		slug: "atlas-dispatch",
		accent: "#355dff",
		accentGlow: "rgba(86, 117, 255, 0.92)",
		accentHaze: "rgba(35, 66, 186, 0.44)",
		horizonBand: "rgba(72, 118, 255, 0.24)",
		horizonMist: "rgba(214, 230, 255, 0.82)",
		engagementType: "Operations System Redesign",
		timeline: "Jan - Apr 2025",
		heroMetric: "31%",
		heroMetricLabel: "fewer manual handoffs",
		heroContext:
			"less reconciliation work in the dispatch room, without adding more operators.",
		metadataOutcome: "44% faster recovery time after launch.",
		situation: [
			"Atlas Dispatch coordinates regional freight across a network where timing slips become expensive quickly. The client had grown faster than its operating system, and dispatchers were stitching together email, chat, spreadsheets, and a legacy control panel to decide what was actually happening.",
			"Nothing was missing in isolation. The problem was that every tool held a different version of the same move. By the time an exception became visible to the right person, the cheapest recovery option was usually gone.",
			"The engagement started because leadership did not need another dashboard. They needed one operating model that could stay coherent during a busy day.",
		],
		situationHighlight:
			"The operation was not slow because people were weak. It was slow because the system asked them to reconcile truth by hand.",
		challenge: [
			"The real constraint was temporal ambiguity. A vehicle issue, a client update, and a depot capacity change could each appear in different places at different times, so escalation happened after the system had already drifted.",
			"We had to make unresolved exceptions visible earlier without burying operators in another wall of status noise.",
		],
		challengeQuote:
			"If two coordinators can answer the same question differently, the system is already late.",
		decisions: [
			{
				term: "Single event model",
				detail:
					"We replaced task-centric updates with one shared event stream so every exception, handoff, and recovery state referenced the same record. Business reason: operators stopped debating which tool was current before acting.",
			},
			{
				term: "Exception-first view",
				detail:
					"Routine work moved into the background while unresolved exceptions, exception age, and next recovery action became the primary surface. Business reason: attention shifted to the moments where service risk changed fastest.",
			},
			{
				term: "Recovery evidence trail",
				detail:
					"Each intervention carried owner, timestamp, and downstream impact so decisions could be reviewed after the shift instead of disappearing into chat. Business reason: management could improve the system, not just remind people to be careful.",
			},
		],
		outcomeNarrative: [
			"After launch, dispatchers were no longer reconstructing the state of the network before they could respond. The interface already exposed the exception, the owner, and the recovery window.",
			"Manual handoffs fell because fewer updates had to be re-entered or translated between tools. Recovery time dropped because the first useful action became visible sooner, not because the team suddenly worked harder.",
			"The deeper change was confidence. Managers could inspect a delay, trace the intervention path, and understand whether the system was holding under load.",
		],
		clientPerspective: {
			quote:
				"Our worry was that we would get another polished control screen that still relied on dispatchers to glue everything together. What changed the outcome was that the model itself became shared. When something broke, everyone saw the same exception, the same owner, and the same recovery path. That changed how fast we could act and how much we trusted the room.",
			attribution: "Operations Director, Atlas Dispatch",
		},
		related: ["05", "04"],
	},
	"02": {
		slug: "northstar",
		accent: "#2457ff",
		accentGlow: "rgba(63, 111, 255, 0.92)",
		accentHaze: "rgba(31, 73, 205, 0.44)",
		horizonBand: "rgba(58, 111, 255, 0.24)",
		horizonMist: "rgba(214, 229, 255, 0.82)",
		engagementType: "Commerce Configuration Rebuild",
		timeline: "Feb - May 2025",
		heroMetric: "38%",
		heroMetricLabel: "less quote rework",
		heroContext:
			"commercial rules became visible before a bad order could reach operations.",
		metadataOutcome: "94% rule coverage across active configurations.",
		situation: [
			"Northstar sells configurable products with pricing, material, and fulfilment rules that do not fit a normal catalogue pattern. Internally, a small group of specialists translated those constraints for sales, customers, and operations.",
			"The business was expanding, but every new option increased the amount of interpretation required before a quote could be trusted. Orders were technically possible to place and operationally impossible to fulfil.",
			"The client came to us when commercial accuracy had become a bottleneck, not because demand was weak but because the rule system still lived in people.",
		],
		situationHighlight:
			"Growth was not limited by traffic. It was limited by how many complex decisions a small internal team could manually absorb.",
		challenge: [
			"The hard part was not building a configurator. It was deciding where rule ownership should live so that sales, customers, and operations were not each interpreting constraints differently.",
			"We needed to prevent invalid combinations before quoting without turning the buying flow into a compliance form.",
		],
		challengeQuote:
			"If validation only happens after a quote is created, the commercial process is already paying for the mistake.",
		decisions: [
			{
				term: "Visible validation gates",
				detail:
					"We encoded commercial constraints as explicit gates inside the flow instead of hidden back-office checks. Business reason: customers and sales teams could correct issues before work reached the expensive part of the process.",
			},
			{
				term: "Shared rule ownership",
				detail:
					"Product, pricing, and fulfilment logic were modeled in a structure that non-engineering stakeholders could inspect and update. Business reason: the system stopped depending on a small translation layer of internal experts.",
			},
			{
				term: "Completion with proof",
				detail:
					"A configuration was only considered complete when every required rule family had passed. Business reason: valid orders increased because completion now meant operationally ready, not just visually submitted.",
			},
		],
		outcomeNarrative: [
			"Quote rework dropped because invalid combinations were blocked before they became downstream work. The system made commercial accuracy part of the buying experience instead of an invisible after-check.",
			"Valid orders rose because customers were no longer guessing what operations would later reject. The same rule set now informed the front-end path and the internal fulfilment decision.",
			"The client also gained leverage. Product changes no longer required a fragile handoff through undocumented commercial knowledge.",
		],
		clientPerspective: {
			quote:
				"We were worried that a new interface would make the experience look cleaner while the same manual review still happened behind it. The difference was that the rules became visible where the decision was happening. That reduced rework, but more importantly it made our commercial logic inspectable by the people responsible for it.",
			attribution: "Commercial Systems Lead, Northstar",
		},
		related: ["01", "03"],
	},
	"03": {
		slug: "clearledger",
		accent: "#3851ff",
		accentGlow: "rgba(78, 108, 255, 0.92)",
		accentHaze: "rgba(34, 63, 192, 0.42)",
		horizonBand: "rgba(64, 101, 255, 0.22)",
		horizonMist: "rgba(210, 224, 255, 0.8)",
		engagementType: "Decision Audit Platform",
		timeline: "Sep - Dec 2024",
		heroMetric: "38%",
		heroMetricLabel: "faster risk review",
		heroContext:
			"analysts could inspect the reason behind a score instead of rebuilding it after the fact.",
		metadataOutcome: "22% fewer audit exceptions after release.",
		situation: [
			"ClearLedger operates in a review environment where a score alone is not enough. Analysts, compliance teams, and auditors each need to understand how a threshold was crossed and whether the evidence chain can be defended later.",
			"The client already had a scoring system, but the score arrived as a conclusion rather than an inspectable sequence. Analysts kept leaving the product to reconstruct why a decision had happened.",
			"The engagement was triggered by a familiar enterprise problem: the model could calculate quickly, but the organization could not justify quickly.",
		],
		situationHighlight:
			"A decision that cannot be explained under scrutiny is operationally unfinished, no matter how accurate the model appears.",
		challenge: [
			"The actual risk was hidden state. Source signals, rule interactions, and threshold effects were distributed across the stack, so the review path only existed if an analyst rebuilt it manually.",
			"We needed to expose the chain from source to score without overwhelming users with raw model internals.",
		],
		challengeQuote:
			"Confidence drops when the system can tell you what happened but not why it happened.",
		decisions: [
			{
				term: "Traceable score path",
				detail:
					"Every score became traversable from source signal to rule to threshold to reviewer action. Business reason: analysts could defend a decision inside the product instead of reconstructing it in external documents.",
			},
			{
				term: "Decision-state visibility",
				detail:
					"We removed hidden transitions and surfaced review status, overrides, and exception rationale in the same chain. Business reason: audit preparation stopped being a separate clean-up process.",
			},
			{
				term: "Analyst-readable threshold logic",
				detail:
					"Threshold movement was expressed in a way that made model behavior legible to the people accountable for outcomes. Business reason: review consistency improved because interpretation stopped varying by analyst experience.",
			},
		],
		outcomeNarrative: [
			"Review time dropped because the system no longer forced analysts to reverse-engineer its output. The explanation path was already present when the case opened.",
			"Audit exceptions fell because the product could now show its reasoning under inspection. That changed the platform from a score presenter into a decision record.",
			"The operational benefit was not just speed. It was that confidence became structurally supported instead of socially improvised.",
		],
		clientPerspective: {
			quote:
				"Before this work, our analysts spent too much time proving the system was right instead of deciding what to do next. The turning point was making the evidence path visible in the product itself. We review faster now, but the bigger win is that our decisions stand up to scrutiny without a parallel paper trail.",
			attribution: "Head of Risk Operations, ClearLedger",
		},
		related: ["02", "07"],
	},
	"04": {
		slug: "fieldline",
		accent: "#2d6bff",
		accentGlow: "rgba(72, 126, 255, 0.9)",
		accentHaze: "rgba(26, 80, 195, 0.42)",
		horizonBand: "rgba(56, 123, 255, 0.24)",
		horizonMist: "rgba(212, 229, 255, 0.82)",
		engagementType: "Field Readiness System",
		timeline: "May - Aug 2024",
		heroMetric: "34%",
		heroMetricLabel: "higher first-fix rate",
		heroContext:
			"dispatch only moved forward once the visit had proof of readiness behind it.",
		metadataOutcome: "99% offline sync integrity in the field.",
		situation: [
			"Fieldline supports distributed service teams whose success depends on more than a calendar slot. Technicians need the right history, the right parts, the right access context, and enough evidence to know the visit can succeed before a van leaves the depot.",
			"The client's old workflow treated a scheduled job as a ready job. That meant technicians arrived on time for work that could not be finished, and repeat visits became normal operating cost.",
			"The team asked for a better field experience, but the real issue sat one step earlier: dispatch was happening before readiness had been verified.",
		],
		situationHighlight:
			"Availability looked organized on the schedule, while operational readiness was still largely unknown.",
		challenge: [
			"The hard part was that readiness depended on several conditions owned by different teams, and field devices still needed to work when connectivity dropped.",
			"We had to decide which evidence truly determined readiness and make that proof durable enough to survive offline field work.",
		],
		challengeQuote:
			"A job is not ready because it has a time slot. It is ready because the visit can actually succeed.",
		decisions: [
			{
				term: "Readiness gate before dispatch",
				detail:
					"Scheduling could not progress until required readiness signals were present. Business reason: dispatch stopped creating avoidable failure before the technician even arrived.",
			},
			{
				term: "Offline proof preservation",
				detail:
					"We stored critical evidence locally so technicians could keep operating even when the device reconnected later. Business reason: the field workflow stayed trustworthy outside ideal network conditions.",
			},
			{
				term: "Visit-prep ownership model",
				detail:
					"The system exposed who still owned missing prerequisites before the visit moved forward. Business reason: repeat visits decreased because the unresolved dependency had a visible owner before dispatch.",
			},
		],
		outcomeNarrative: [
			"First-fix rates improved because visits were filtered through readiness instead of availability. That single shift removed a large class of avoidable failure from the schedule.",
			"Return visits dropped because the system surfaced missing prerequisites while there was still time to intervene. The offline evidence model also meant field teams did not lose trust when connectivity became unreliable.",
			"The client ended up with more than a field interface. They gained a readiness protocol that made success inspectable before work was sent out.",
		],
		clientPerspective: {
			quote:
				"We thought we were solving for technician frustration, but the real change came from stopping bad work before it ever became a visit. The readiness model gave dispatch, support, and field teams one shared standard for whether a job could genuinely succeed.",
			attribution: "Service Operations Manager, Fieldline",
		},
		related: ["01", "06"],
	},
	"05": {
		slug: "relayos",
		accent: "#1f4fff",
		accentGlow: "rgba(64, 111, 255, 0.9)",
		accentHaze: "rgba(22, 63, 188, 0.42)",
		horizonBand: "rgba(48, 102, 255, 0.22)",
		horizonMist: "rgba(208, 224, 255, 0.8)",
		engagementType: "Routing Recovery Platform",
		timeline: "Jun - Oct 2023",
		heroMetric: "32%",
		heroMetricLabel: "less late recovery",
		heroContext:
			"capacity issues surfaced while cheaper intervention options still existed.",
		metadataOutcome: "18% lower route cost under live constraints.",
		situation: [
			"RelayOS manages a logistics network where route quality changes as capacity shifts, not just when a job is initially planned. Static routing rules worked at average volume and quietly failed when the network moved outside the average case.",
			"By the time delivery risk became obvious, the cheap recovery option had already disappeared. Teams were good at firefighting, but the system kept introducing the fire too late to contain efficiently.",
			"The engagement began with cost pressure, but the actual diagnosis was timing: the network needed to reveal risk earlier than it did.",
		],
		situationHighlight:
			"The business was paying for late knowledge as much as it was paying for late deliveries.",
		challenge: [
			"The hardest part was modeling capacity as a changing operating constraint instead of a background assumption. The previous system only treated disruption as visible once a route was already in trouble.",
			"We needed to identify the earliest meaningful recovery point and make it actionable before cost escalated.",
		],
		challengeQuote:
			"The network did not need more alerts. It needed earlier evidence of which intervention was still cheap enough to matter.",
		decisions: [
			{
				term: "Live capacity model",
				detail:
					"Capacity became a continuously evaluated input rather than a static planning parameter. Business reason: the system could surface route risk before the failure became customer-visible.",
			},
			{
				term: "Earliest viable recovery",
				detail:
					"We designed the operating view around the first recoverable exception, not the final broken state. Business reason: interventions happened while there were still lower-cost options on the table.",
			},
			{
				term: "Constraint-linked evidence",
				detail:
					"Every route change recorded the constraint that forced it and the effect on delivery reliability. Business reason: the client could finally see whether operating cost was improving because the system was smarter, not because teams were simply absorbing pain.",
			},
		],
		outcomeNarrative: [
			"Late recovery dropped because teams were no longer learning about capacity problems at the point of failure. The operating model shifted from reactive routing to monitored constraint response.",
			"Route cost improved because the system created more opportunities to choose the cheaper intervention. Reliability also climbed because those interventions happened while the network still had room to recover.",
			"The result was a platform that treated routing as a living system instead of a plan that quietly aged out of reality.",
		],
		clientPerspective: {
			quote:
				"Our fear was that we would buy another optimization layer that looked sophisticated and still told us the bad news too late. The difference here was not better maps or prettier controls. It was that the system started showing us the constraint while we still had a realistic choice about what to do.",
			attribution: "Network Operations Lead, RelayOS",
		},
		related: ["01", "04"],
	},
	"06": {
		slug: "civiclink",
		accent: "#3157ff",
		accentGlow: "rgba(80, 115, 255, 0.9)",
		accentHaze: "rgba(35, 73, 188, 0.42)",
		horizonBand: "rgba(66, 111, 255, 0.22)",
		horizonMist: "rgba(212, 225, 255, 0.8)",
		engagementType: "Public Service Intake Redesign",
		timeline: "Jul - Nov 2024",
		heroMetric: "41%",
		heroMetricLabel: "faster first response",
		heroContext:
			"ownership became explicit before a request could drift into an SLA breach.",
		metadataOutcome: "33% higher SLA recovery rate across teams.",
		situation: [
			"CivicLink handles public-service requests that move between departments with different responsibilities, deadlines, and escalation pressures. Residents only experience the delay at the front edge, but the actual failure often begins when ownership becomes ambiguous inside the queue.",
			"The client's previous intake flow organized work by department. Requests could change hands several times before anyone had clear accountability for the next action.",
			"By the time SLA risk became visible, the deadline was already close enough that recovery depended on goodwill rather than system support.",
		],
		situationHighlight:
			"The queue looked orderly from a distance, but the next responsible action was often invisible at the exact moment it mattered.",
		challenge: [
			"The challenge was not simply assigning tickets faster. It was reframing intake around accountable next steps instead of org-chart boundaries, while still fitting the realities of public-sector handoffs.",
			"We needed to surface ownership and SLA exposure early enough that intervention felt operational, not ceremonial.",
		],
		challengeQuote:
			"A request without a named next owner is already accumulating hidden service risk.",
		decisions: [
			{
				term: "Next-action ownership model",
				detail:
					"Requests were organized around the next accountable action rather than the department currently touching them. Business reason: work stopped disappearing into cross-team limbo.",
			},
			{
				term: "SLA risk as operating signal",
				detail:
					"Exposure to breach became a first-class state, visible before the deadline passed. Business reason: managers could intervene while recovery was still possible.",
			},
			{
				term: "Reassignment with evidence",
				detail:
					"Transfers required reason and ownership continuity rather than silent queue movement. Business reason: reassignments dropped because the system made drift inspectable instead of invisible.",
			},
		],
		outcomeNarrative: [
			"First-response times improved because the system forced clarity earlier. A request entered the queue with a visible next owner instead of a vague departmental destination.",
			"Reassignments fell and SLA recovery improved because risk surfaced while teams still had time to redirect work. The platform made accountability operational rather than performative.",
			"The lasting benefit was public-service confidence: the client could now inspect how ownership moved through the system instead of assuming the queue would behave.",
		],
		clientPerspective: {
			quote:
				"We were concerned that a redesign would make intake look more modern while the same handoff problems stayed hidden underneath. What changed was the accountability model. The system now tells us who owns the next move, what is at risk, and where intervention should happen before the deadline is gone.",
			attribution: "Digital Service Manager, CivicLink",
		},
		related: ["04", "07"],
	},
	"07": {
		slug: "signal-room",
		accent: "#2268ff",
		accentGlow: "rgba(68, 136, 255, 0.92)",
		accentHaze: "rgba(18, 88, 190, 0.44)",
		horizonBand: "rgba(48, 130, 255, 0.22)",
		horizonMist: "rgba(212, 232, 255, 0.82)",
		engagementType: "Grounded Answer System",
		timeline: "Mar - Jun 2025",
		heroMetric: "93%",
		heroMetricLabel: "grounded answers",
		heroContext:
			"speed improved only where the system could prove the answer against approved sources.",
		metadataOutcome: "36% fewer repeated answer errors.",
		situation: [
			"Signal Room supports teams that need fast answers without letting speed quietly introduce policy risk. Before the engagement, the client had a promising answer layer that responded quickly but could not prove whether the underlying source was current, approved, or in conflict.",
			"The system sounded certain even when the knowledge beneath it was stale. That moved risk from response time into answer quality, which is harder to notice until trust has already eroded.",
			"The client did not need a more impressive assistant. They needed an answer system with explicit grounding and visible human ownership when certainty dropped.",
		],
		situationHighlight:
			"A fast answer is only useful when the system can also show why that answer deserves to be trusted.",
		challenge: [
			"The real problem was confidence signaling. Without a clear grounding model, users experienced fluent output as authoritative even when the evidence was weak, conflicting, or outdated.",
			"We had to make uncertainty operationally visible without destroying the speed benefit that made the system valuable in the first place.",
		],
		challengeQuote:
			"If the answer sounds confident while the evidence is shaky, the interface is amplifying risk instead of reducing it.",
		decisions: [
			{
				term: "Approved-source grounding",
				detail:
					"Every response was tied to sanctioned source material with explicit citation state. Business reason: answer speed no longer depended on invisible policy drift.",
			},
			{
				term: "Confidence-driven routing",
				detail:
					"Low-confidence or conflicting evidence automatically escalated to a named human owner. Business reason: uncertain answers were intercepted before they reached the client.",
			},
			{
				term: "Expiry and ownership trail",
				detail:
					"Knowledge entries carried recency and owner signals through the answer flow. Business reason: the team could see whether the system was trustworthy because the content was healthy, not because users were lucky.",
			},
		],
		outcomeNarrative: [
			"Grounded-answer coverage rose because the system only accelerated where approved evidence existed. That restraint was the feature, not a compromise.",
			"Support load dropped and repeated answer errors fell because ambiguous cases no longer slipped through the same confident template. Human review happened upstream when the evidence said it should.",
			"The client ended up with a more credible knowledge system because certainty was earned, not performed.",
		],
		clientPerspective: {
			quote:
				"We were worried that we would move faster and quietly increase the cost of being wrong. What made the difference was the grounding model. The system now proves the answer when it should, and hands the work to a named person when it should not pretend. That is why the team trusts it.",
			attribution: "Knowledge Operations Lead, Signal Room",
		},
		related: ["03", "06"],
	},
	"08": {
		slug: "uk-uniladder",
		accent: "#1a6b3c",
		accentGlow: "rgba(46, 139, 87, 0.92)",
		accentHaze: "rgba(20, 80, 45, 0.44)",
		horizonBand: "rgba(46, 139, 87, 0.24)",
		horizonMist: "rgba(200, 240, 220, 0.82)",
		engagementType: "Consultation Platform",
		timeline: "Jan - Apr 2025",
		heroMetric: "99.99%",
		heroMetricLabel: "visa success rate",
		heroContext:
			"students booked consultations with accredited counselors directly through the platform.",
		metadataOutcome: "99.99% visa success rate after launch.",
		situation: [
			"UK Uniladder connects prospective students with British Council certified study abroad counselors. Before the engagement, their website presented credentials as static content — visitors had to trust a brand claim without any interactive proof of counselor expertise.",
			"The consultation booking process required phone or email follow-up, and by the time a student spoke to someone, the trust question was already unresolved.",
			"The client came to us because they needed the platform itself to prove credibility, not just describe it.",
		],
		situationHighlight:
			"The website described trust. It did not demonstrate it before a consultation was booked.",
		challenge: [
			"The core constraint was proving counselor legitimacy inside the browsing experience. Static credential pages were being skipped, and phone consultations lacked a trust signal before the student committed time.",
			"We had to make accreditation visible and actionable without overwhelming prospective students with documentation.",
		],
		challengeQuote:
			"If a student cannot verify who they are speaking to before they call, trust is already behind.",
		decisions: [
			{
				term: "Visible counselor credentials",
				detail:
					"Every counselor profile displayed verified accreditation badges, certification numbers, and experience history before a consultation was booked. Business reason: trust was established before the first conversation, not after.",
			},
			{
				term: "In-platform video consultations",
				detail:
					"Students could book and join video consultations directly inside the platform without third-party tools. Business reason: the handoff from browsing to consultation was seamless, removing friction that killed conversions.",
			},
			{
				term: "Post-consultation evidence trail",
				detail:
					"Each consultation generated a summary with counselor notes, action items, and next steps accessible in the student dashboard. Business reason: students could reference their consultation without relying on memory or scattered email chains.",
			},
		],
		outcomeNarrative: [
			"After launch, students could see counselor credentials, read verified accreditation, and book a consultation without leaving the platform. The trust question was resolved before the first hello.",
			"Video consultation bookings increased because students had confidence in who they were speaking to. The credential display turned a trust barrier into a conversion driver.",
			"The deeper change was in the student journey. Instead of a website that described expertise and a phone call that proved it, the platform itself carried the proof through every step.",
		],
		clientPerspective: {
			quote:
				"Our challenge was always that students had to trust us before we could prove anything. Now the platform proves counselor credibility from the first click, and that has changed how students engage with us before they ever pick up the phone.",
			attribution: "Director, UK Uniladder",
		},
		related: [],
	},
	"09": {
		slug: "himalayan-bullion",
		accent: "#b8860b",
		accentGlow: "rgba(218, 165, 32, 0.92)",
		accentHaze: "rgba(139, 105, 20, 0.44)",
		horizonBand: "rgba(218, 165, 32, 0.24)",
		horizonMist: "rgba(255, 240, 200, 0.82)",
		engagementType: "Real-Time Trading Platform",
		timeline: "Feb - May 2025",
		heroMetric: "Real-time",
		heroMetricLabel: "market rate accuracy",
		heroContext:
			"buyers saw current silver prices before making a transaction decision.",
		metadataOutcome: "Nepal's #1 silver trading house platform.",
		situation: [
			"Himalayan Bullion is Nepal's leading silver trading house. Their previous website showed rates that updated on page refresh — but in a market where silver prices move by the hour, a rate displayed even five minutes ago was already a trust risk.",
			"Customers would call to verify the price, creating friction and delaying transactions. The site was generating inquiries, but the rate uncertainty was depressing conversion.",
			"The engagement started because the client needed a platform where price trust was immediate, not something that required a phone call to confirm.",
		],
		situationHighlight:
			"The rate on screen was never the rate a customer could actually transact at.",
		challenge: [
			"The hard problem was not technical — it was trust timing. A stale price on screen looked authoritative but was already wrong, and every phone verification eroded the speed advantage of a digital platform.",
			"We needed real-time rate delivery with transaction security that matched the speed of the market.",
		],
		challengeQuote:
			"A price that cannot be trusted on sight is not a price — it is an invitation to call.",
		decisions: [
			{
				term: "Live market rate feed",
				detail:
					"Silver and precious metal rates were connected to live market feeds with sub-minute latency. Business reason: customers saw the same rate the system was trading on, removing the verification phone call.",
			},
			{
				term: "Secure transaction flow",
				detail:
					"Buy and sell actions were protected with multi-factor authentication and encrypted order records. Business reason: speed did not come at the cost of security or regulatory compliance.",
			},
			{
				term: "Rate history transparency",
				detail:
					"Customers could view rate movement over time and understand the market context behind the current price. Business reason: educated buyers transacted with higher confidence and lower support load.",
			},
		],
		outcomeNarrative: [
			"After launch, customers saw real-time rates and could transact immediately without calling to verify. The trust question moved from 'is this price real?' to 'what do I want to buy?'",
			"Transaction volume increased because the speed of trust matched the speed of the market. The platform became the primary transaction channel instead of an inquiry generator.",
			"Himalayan Bullion solidified its position as Nepal's #1 silver trading house with a platform that proved price integrity at every refresh.",
		],
		clientPerspective: {
			quote:
				"Our customers were calling to verify prices because they did not trust what they saw on the old site. Now the rate they see is the rate they get, and transactions happen in minutes instead of phone calls. That changed our whole digital sales model.",
			attribution: "Managing Director, Himalayan Bullion",
		},
		related: [],
	},
	"10": {
		slug: "humanedge-nepal",
		accent: "#2c5282",
		accentGlow: "rgba(66, 133, 244, 0.92)",
		accentHaze: "rgba(30, 70, 130, 0.44)",
		horizonBand: "rgba(66, 133, 244, 0.24)",
		horizonMist: "rgba(200, 220, 255, 0.82)",
		engagementType: "Service Organization Platform",
		timeline: "Mar - Jun 2025",
		heroMetric: "Full",
		heroMetricLabel: "service range visibility",
		heroContext:
			"clients could evaluate development, content, and design work side by side.",
		metadataOutcome: "Structured service discovery across all lines.",
		situation: [
			"HumanEdge Nepal is a full-service creative agency offering development, content, and design. Before the engagement, their website presented work by project rather than by capability — visitors could see individual pieces but had no way to understand the agency's full range.",
			"Prospective clients were reaching out with narrow briefs because they only saw one dimension of the agency's work. The full range existed, but it was invisible until a conversation revealed it.",
			"The client wanted a platform that organized their range into something a client could actually evaluate before picking up the phone.",
		],
		situationHighlight:
			"The agency did everything, but the website showed it one project at a time.",
		challenge: [
			"The challenge was not adding more content. It was structuring existing work into service lines that a prospective client could browse, compare, and evaluate without needing a sales call to connect the dots.",
			"We needed to turn 'we do everything' from a tagline into an inspectable reality — organized by service, not by chronology.",
		],
		challengeQuote:
			"When every project looks like a one-off, the client cannot tell if you can handle their actual need.",
		decisions: [
			{
				term: "Service-line organization",
				detail:
					"Work was organized by service line — development, content, and design — with filtering and cross-linking between related capabilities. Business reason: clients could evaluate the full range without a discovery call.",
			},
			{
				term: "Capability-based portfolio view",
				detail:
					"Each service line displayed representative work, team expertise, and process overview specific to that discipline. Business reason: depth in each area was visible, not hidden behind a generic portfolio grid.",
			},
			{
				term: "Cross-service navigation",
				detail:
					"Visitors could move between service lines and see how capabilities connected for integrated projects. Business reason: complex clients could evaluate the full-service model before engaging.",
			},
		],
		outcomeNarrative: [
			"After launch, prospective clients could browse development, content, and design work side by side. The agency's full range became visible before a conversation, not revealed during one.",
			"Inbound briefs became more specific and better aligned with the agency's actual capabilities because clients understood the full offering before reaching out.",
			"The platform turned 'we do everything' from a claim into something a client could verify independently — and the conversations that followed were more productive from the first message.",
		],
		clientPerspective: {
			quote:
				"Our old site showed great work, but it never showed our range. Clients were coming to us for one thing when we could do three. Now the platform organizes everything we do into something a client can actually evaluate, and the conversations we have are completely different.",
			attribution: "Founder, HumanEdge Nepal",
		},
		related: [],
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
