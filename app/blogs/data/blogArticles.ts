export const blogArticles = [
	{
		author: "DarviLabs Team",
		category: "AI & ML",
		curatedFeatured: true,
		date: "Jul 14, 2026",
		description:
			"A practical way to decide where AI belongs before a model becomes another fragile dependency.",
		image:
			"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
		readTime: "7 min read",
		slug: "where-ai-belongs-in-business-systems",
		title: "Where AI Belongs in a Business System, and Where It Does Not",
	},
	{
		author: "DarviLabs Team",
		category: "Product Design",
		date: "Jul 9, 2026",
		description:
			"Design decisions that reduce rework by making operational risk visible earlier.",
		image:
			"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
		readTime: "5 min read",
		slug: "product-design-for-operational-software",
		title: "Product Design for Software That Has to Survive Real Operations",
	},
	{
		author: "DarviLabs Team",
		category: "Web Development",
		date: "Jul 2, 2026",
		description:
			"What makes a web platform reliable after launch, when traffic and teams start changing it.",
		image:
			"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
		readTime: "6 min read",
		slug: "web-platforms-after-launch",
		title: "Building Web Platforms for the Months After Launch",
	},
	{
		author: "DarviLabs Team",
		category: "System Architecture",
		date: "Jun 25, 2026",
		description:
			"Architecture choices that keep a product understandable when the feature list grows.",
		image:
			"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
		readTime: "8 min read",
		slug: "architecture-that-stays-legible",
		title: "System Architecture That Stays Legible Under Pressure",
	},
	{
		author: "DarviLabs Team",
		category: "Cloud Infrastructure",
		date: "Jun 18, 2026",
		description:
			"How to treat cloud infrastructure as a product constraint, not a background detail.",
		image:
			"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
		readTime: "6 min read",
		slug: "cloud-decisions-before-scale",
		title: "Cloud Decisions to Make Before Scale Forces Them",
	},
	{
		author: "DarviLabs Team",
		category: "Mobile Apps",
		date: "Jun 11, 2026",
		description:
			"Field-use mobile apps fail differently, so the design and engineering contract has to change.",
		image:
			"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
		readTime: "4 min read",
		slug: "mobile-apps-for-field-work",
		title: "Mobile Apps for Teams That Are Not Sitting at Desks",
	},
	{
		author: "DarviLabs Team",
		category: "API Integrations",
		date: "Jun 4, 2026",
		description:
			"A cleaner integration starts with ownership, failure modes, and the right boundary.",
		image:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
		readTime: "5 min read",
		slug: "api-integrations-with-clear-ownership",
		title: "API Integrations Need Owners Before They Need Endpoints",
	},
	{
		author: "DarviLabs Team",
		category: "Ongoing Support",
		date: "May 28, 2026",
		description:
			"Support works best when teams can see the reason behind a fix, not only the ticket status.",
		image:
			"https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
		readTime: "5 min read",
		slug: "support-that-improves-the-system",
		title: "Ongoing Support Should Improve the System, Not Just Close Tickets",
	},
	{
		author: "DarviLabs Team",
		category: "AI & ML",
		date: "May 21, 2026",
		description:
			"A simple governance layer can keep AI outputs useful without slowing teams down.",
		image:
			"https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=900&q=80",
		readTime: "6 min read",
		slug: "human-review-in-ai-workflows",
		title: "Human Review Is a Product Feature in AI Workflows",
	},
	{
		author: "DarviLabs Team",
		category: "Product Design",
		date: "May 14, 2026",
		description:
			"The fastest interface is often the one that makes the next responsible action obvious.",
		image:
			"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
		readTime: "4 min read",
		slug: "interfaces-that-show-next-ownership",
		title: "Good Interfaces Show Who Owns the Next Step",
	},
	{
		author: "DarviLabs Team",
		category: "Web Development",
		date: "May 7, 2026",
		description:
			"Performance planning is easier when content, interaction, and deployment are designed together.",
		image:
			"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
		readTime: "7 min read",
		slug: "performance-as-product-scope",
		title: "Website Performance Is Product Scope, Not Cleanup",
	},
	{
		author: "DarviLabs Team",
		category: "System Architecture",
		date: "Apr 30, 2026",
		description:
			"When the system boundary is unclear, every feature starts acting like infrastructure.",
		image:
			"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
		readTime: "8 min read",
		slug: "system-boundaries-before-features",
		title: "Draw the System Boundary Before You Add the Feature",
	},
	{
		author: "DarviLabs Team",
		category: "Cloud Infrastructure",
		date: "Apr 23, 2026",
		description:
			"Cost control improves when product events explain infrastructure behavior.",
		image:
			"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
		readTime: "5 min read",
		slug: "cloud-costs-need-product-context",
		title: "Cloud Costs Need Product Context to Become Manageable",
	},
];

export function getFeaturedArticle() {
	return (
		blogArticles.find((article) => article.curatedFeatured) || blogArticles[0]
	);
}

export function getBlogArticle(slug: string) {
	return blogArticles.find((article) => article.slug === slug);
}

export function getBlogArticlePath(slug: string) {
	return `/blogs/${slug}`;
}

const articleSectionsBySlug: Record<
	string,
	{ heading: string; image?: string; paragraphs: string[] }[]
> = {
	"where-ai-belongs-in-business-systems": [
		{
			heading: "Start with the decision, not the model.",
			image:
				"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
			paragraphs: [
				"AI earns its place when it changes a repeated business decision. If the decision is vague, the model becomes another layer of uncertainty instead of leverage.",
				"The useful question is not whether a workflow can use AI. It is whether the team can name what should become faster, more consistent, easier to review, or safer to hand off.",
				"That clarity gives the technical work a boundary. The model is no longer the strategy; it becomes one part of a workflow with an accountable result.",
			],
		},
		{
			heading: "Keep judgment visible.",
			image:
				"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
			paragraphs: [
				"A strong AI workflow does not hide judgment inside a black box. It separates inputs, confidence, exceptions, and ownership so teams can see when automation should stop.",
				"That visibility makes the system easier to trust and easier to improve after launch. Teams can challenge a weak output without questioning the whole system.",
				"The interface should show what the system used, what it ignored, and where human review is expected. Those details are operational controls, not explanatory extras.",
			],
		},
		{
			heading: "Design the fallback before scale.",
			paragraphs: [
				"Every automated path needs a human route before it is busy. Escalation, review, and correction are not edge cases; they are part of the product contract.",
				"When fallback is designed early, AI can support operations without making the business dependent on perfect output. Failure becomes a managed path instead of a surprise.",
				"The strongest systems make recovery boring: a named owner, a visible reason, and a clear way to correct the record before the next decision depends on it.",
			],
		},
	],
	"product-design-for-operational-software": [
		{
			heading: "Design around the moment of commitment.",
			image:
				"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
			paragraphs: [
				"Operational software is judged when a user has to decide, approve, dispatch, update, or recover. The interface should make that moment clear before it makes anything pretty.",
				"That means reducing hesitation at the point where the work actually changes state. The screen should show context, consequence, and next ownership in the same breath.",
			],
		},
		{
			heading: "Expose ownership.",
			image:
				"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
			paragraphs: [
				"Most workflow confusion comes from unclear responsibility. Good product design shows whether the next step belongs to the user, the system, or another team.",
				"When ownership is visible, support load drops and teams stop treating every unclear state as a bug. The product becomes easier to operate because responsibility is legible.",
			],
		},
		{
			heading: "Reduce avoidable interpretation.",
			paragraphs: [
				"The best screens remove unnecessary translation. Labels, status, and evidence should help a user act without asking what the system means.",
				"This is where design quality becomes operational quality. A clearer interface changes how quickly teams can recover, not just how polished the product feels.",
			],
		},
	],
	"web-platforms-after-launch": [
		{
			heading: "Launch is a stress test, not the finish.",
			image:
				"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
			paragraphs: [
				"A web platform becomes real when content changes, teams touch it, and traffic patterns stop behaving like the test plan. The architecture has to expect that.",
				"The work before launch should make the months after launch simpler: predictable deployment, clear ownership, and surfaces that can change without reopening the whole system.",
			],
		},
		{
			heading: "Separate stable foundations from moving parts.",
			image:
				"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
			paragraphs: [
				"Teams move faster when the parts that change often do not threaten the parts that must stay dependable. That boundary is a product decision as much as a technical one.",
				"Navigation, content, integrations, and admin workflows rarely change at the same pace. Treating them as one undifferentiated surface makes every update more fragile.",
			],
		},
		{
			heading: "Measure the maintenance cost.",
			paragraphs: [
				"If every small update needs a developer to rediscover the system, the platform is already expensive. Good web work makes future change legible.",
				"Maintenance cost shows up in hesitation: teams delay content updates, avoid experiments, or create side processes outside the system. The platform should make the right path easier.",
			],
		},
	],
};

export function getBlogArticleSections(article: {
	slug?: string;
	title?: string;
}) {
	return (
		(article?.slug ? articleSectionsBySlug[article.slug] : undefined) || [
			{
				heading: "Name the operating constraint.",
				image:
					"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
				paragraphs: [
					`${article?.title || "This article"} starts with the constraint behind the work: what has to become clearer, faster, or more dependable for the business to move.`,
					"Once the constraint is named, the article can stay practical. The point is not to cover every possibility; it is to identify the decision that should shape the system.",
				],
			},
			{
				heading: "Make the decision visible.",
				image:
					"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
				paragraphs: [
					"A useful system shows why something is happening, who owns the next step, and where the team should intervene when the normal path breaks.",
					"That visibility turns a product from a place where work is entered into a place where work can be understood, reviewed, and improved.",
				],
			},
			{
				heading: "Keep the implementation accountable.",
				paragraphs: [
					"The final shape should be easy to operate after launch, not only impressive during handoff. That is where product, design, and engineering need to stay connected.",
					"A concise article should leave the reader with a sharper operating principle, not a pile of generic recommendations.",
				],
			},
		]
	);
}
