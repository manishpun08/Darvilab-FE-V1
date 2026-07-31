function getCaseStudyPath(id: string) {
  return `/case-studies/${id}`;
}

export const serviceDetailMap = {
  "product-design": {
    slug: "product-design",
    name: "Product Design",
    heroTagline: "Decision-led interface work",
    eyebrow: "PRODUCT DESIGN",
    headline: "We design for the moment your user decides to stay.",
    subline:
      "Most product design work begins at the interface. Ours begins at the decision your user makes before they interact with anything - what they expect, what they fear, and what will make them commit. We work with companies building products where that moment is unclear, contested, or currently causing them to lose users they should be keeping.",
    ctaLabel: "Tell us about your product",
    situations: [
      '"The product works. Engineering is solid. But users are dropping off somewhere between signup and the first time they actually get value - and nobody knows exactly where or why."',
      '"We\'ve validated the idea. The team is ready. But nobody has clearly defined what the product must do for the user at each moment - and that ambiguity is about to become expensive."',
      "\"We're rebuilding a legacy tool for a new type of user. The old logic doesn't map to new behavior. We need someone who can hold both simultaneously without losing either.\"",
      "\"We have a design team. What we don't have is someone who can step back and tell us whether the thing we're building is actually the right thing to build.\"",
    ],
    phases: [
      {
        name: "Direction",
        whatHappens:
          "We map the user's decision path before we sketch anything. We run structured sessions with your team to understand the user's situation, their existing mental model, and the moment your product must change their behavior. We surface the assumptions your team is holding about the user that have never been tested.",
        whatYouDo:
          "Bring your team, your data, and your honest uncertainty. This phase runs best when people say what they actually think, not what sounds good.",
        whatYouLeaveWith:
          "A product direction document that defines what the product must do, for whom, in what order - before a single interface element is drawn.",
      },
      {
        name: "Structure",
        whatHappens:
          "We translate the direction into a structural model - the core flows, decision points, and content hierarchy that the interface must support. No visual design yet. Only logic.",
        whatYouDo:
          "Review and pressure-test the structure against real user scenarios you know from your own experience. Push back where something doesn't match what you know about your users.",
        whatYouLeaveWith:
          "A validated product structure that engineering can begin planning against - and that you can show stakeholders without embarrassment.",
      },
      {
        name: "Interface",
        whatHappens:
          "We design the interface across all critical flows. Every screen is connected to the decision logic defined in the structure phase. Nothing exists because it looked good in isolation.",
        whatYouDo:
          "Review in rounds. We show our reasoning, not just our output. You push back on what doesn't serve your user.",
        whatYouLeaveWith:
          "A fully designed, annotated interface ready for development - with a design system built for your product's scale, not borrowed from a generic library.",
      },
      {
        name: "Validation",
        whatHappens:
          "We put real users in front of the interface before a single line of production code is written. We watch where they hesitate, where they misread, and where they succeed. We revise based on what we see - not what we think.",
        whatYouDo:
          "Help us recruit the right users. Be present for testing if you can. The best decisions come from watching your own users struggle.",
        whatYouLeaveWith:
          "A tested product that enters development with evidence behind it - not assumptions.",
      },
    ],
    deliverables: [
      {
        deliverable: "Product direction document",
        impact:
          "Eliminates scope ambiguity before engineering starts. Saves revision cycles before they're created.",
      },
      {
        deliverable: "Product structure model",
        impact:
          "Gives engineering a logical foundation to build against. Prevents architecture decisions that have to be reversed later.",
      },
      {
        deliverable: "Designed and annotated interface",
        impact:
          "Removes interpretation gaps between design and development. Every screen includes the reasoning behind it.",
      },
      {
        deliverable: "Product-specific design system",
        impact:
          "Your next feature ships faster because the decisions are already made. Consistency is structural, not manual.",
      },
      {
        deliverable: "Validation report",
        impact:
          "You enter development with tested evidence. Your stakeholder conversations are grounded in user behavior, not assumptions.",
      },
    ],
    proof: {
      title:
        "Rebuilding a field operations tool for a team that had stopped trusting the software they were supposed to use.",
      situation:
        "The client had an internal tool used by field teams across multiple sites. Adoption had quietly collapsed - teams had built workarounds in spreadsheets and messaging apps. The tool still existed. Nobody wanted to use it.",
      hard: "The users weren't in the room. They were on-site, often offline, under time pressure. Every insight had to come from structured sessions with team leads who were themselves frustrated. And the business couldn't afford a long rebuild - they needed something deployed within a defined window.",
      action:
        "We ran discovery sessions that focused not on what users wanted but on what decisions they were making in the field and what information they needed at each one. We found that the tool was failing not because of its interface but because it was built around a reporting model that didn't match how field decisions actually got made. We restructured the product around decision checkpoints, not data entry forms.",
      outcome:
        'Within six weeks of deployment, unsolicited workaround usage dropped by over 70%. The team leads described it as "the first tool that works the way the job works."',
      linkLabel: "View full project",
      linkHref: getCaseStudyPath("fieldline"),
      statValue: "70%",
      statContext: "drop in workaround usage within six weeks of deployment.",
    },
    heroImage: {
      alt: "Wireframe notes and interface planning on a desk",
      pageUrl:
        "https://unsplash.com/photos/a-person-writing-on-a-piece-of-paper-next-to-a-keyboard-ml1IgjV8OvY",
      imageUrl:
        "https://images.unsplash.com/photo-1634245482394-1bcf5ccffcc0?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    },
    interfaceSketch: {
      alt: "Interface wireframes displayed on a laptop during review",
      pageUrl:
        "https://unsplash.com/photos/a-laptop-computer-sitting-on-top-of-a-table-FvpVY7TpwNY",
      imageUrl:
        "https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    },
    proofImage: {
      alt: "Operational dashboard displayed on a laptop screen",
      pageUrl:
        "https://unsplash.com/photos/graphs-of-performance-analytics-on-a-laptop-screen-JKUTrJ4vK00",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    },
    fit: {
      worksWellIf: [
        "You're building a product where the user's decision path is not yet clearly understood",
        "You need someone who can hold both product strategy and interface execution without losing either",
        "You're approaching a rebuild where the old logic doesn't map to new behavior",
        "Engineering is ready but the product definition still has gaps that need resolving before work begins",
        "You've shipped something and the data is telling you something is wrong but not what",
      ],
      notRightIf: [
        "You need a visual refresh with no change to how the product works",
        "You need a complete, deliverable-ready design in under three weeks with no discovery phase",
        "You already have a defined product structure and only need execution support",
        "You're looking for a large design team embedded across multiple concurrent workstreams",
      ],
    },
    faqs: [
      {
        question: "What do we need to have ready before we start?",
        answer:
          "Not as much as you might think. You need a clear sense of the problem you're trying to solve and access to the people in your organisation who understand your users best. You do not need a finished brief, a complete spec, or a resolved product direction - that's part of what the first phase produces.",
      },
      {
        question: "How involved does our team need to be?",
        answer:
          "Meaningfully involved, not constantly available. The direction phase requires real sessions with the people who understand your users and your business. After that, the heaviest demand is in reviews - where your judgment on what's right for your user matters more than ours. We work in structured cycles so your involvement is concentrated, not continuous.",
      },
      {
        question:
          "Who owns the design files and all IP at the end of the engagement?",
        answer:
          "You do. All source files, documentation, and design assets are transferred to you at the end of the engagement with no conditions.",
      },
      {
        question: "How long does a product design engagement typically take?",
        answer:
          "A full engagement - covering all four phases - typically runs eight to fourteen weeks depending on product complexity and the pace of your team's availability. Projects with tighter timelines can be scoped around specific phases rather than the full process. We'll tell you clearly what's possible in the time you have.",
      },
    ],
    contact: {
      eyebrow: "START A CONVERSATION",
      headline: "Tell us what you're building and where you're stuck.",
      supporting:
        "We respond with a perspective, not a proposal. If there's a fit, we'll suggest a short call. If there isn't, we'll say that too.",
    },
  },
  "web-application-development": {
    slug: "web-application-development",
    name: "Web Application Development",
    heroTagline: "Systems-led engineering work",
    eyebrow: "WEB APPLICATION DEVELOPMENT",
    headline: "Systems that hold up after launch.",
    subline:
      "Most web development work begins at the feature list. Ours begins at the workflow your business actually runs on — who touches the system, what breaks when they do, and what it needs to survive once real users, real data, and real edge cases hit it. We work with companies whose current system is either held together by hand or about to be, and where that's starting to cost them.",
    ctaLabel: "Tell us about your web application",
    situations: [
      '"It started as a tool three people used internally. Now twelve teams depend on it, and it breaks every time someone touches it."',
      '"We shipped fast to get to market. It worked. Eighteen months later, we can\'t add one feature without breaking three others."',
      '"Our engineers spend more time patching than building. Every sprint is triage, not progress."',
      '"We have real traffic and real data now. What we built for our first ten users is falling over at ten thousand."',
    ],
    phases: [
      {
        name: "Discovery & Scoping",
        whatHappens:
          "We map your current system — or the absence of one — before proposing anything. We understand what the system needs to do today, where the business is going in 18 months, and what it cannot afford to break.",
        whatYouDo:
          "Bring your team and your honest constraints — budget, timeline, and the parts of the current system nobody wants to admit are held together with duct tape.",
        whatYouLeaveWith:
          "A written scope document and technical direction — not a verbal estimate.",
      },
      {
        name: "Architecture & Design",
        whatHappens:
          "We plan the system before we build it. Data model, service boundaries, and integration points get decided and documented up front.",
        whatYouDo:
          "Review the architecture against scenarios you know from running the business — where it'll actually get stressed.",
        whatYouLeaveWith:
          "A documented architecture your engineering team could pick up and understand without us in the room.",
      },
      {
        name: "Build & Iteration",
        whatHappens:
          "Development runs in two-week cycles. You see working software as it's built, not a reveal after three months.",
        whatYouDo:
          "Review each cycle. Tell us when something doesn't match how the business actually works.",
        whatYouLeaveWith:
          "A working, tested increment of the system every cycle — deployed, not just demoed.",
      },
      {
        name: "Handover & Ongoing Support",
        whatHappens:
          "We hand over the full system — code, docs, infrastructure access. We stay available for what comes next, on your terms.",
        whatYouDo: "Take ownership. Ask us anything before we step back.",
        whatYouLeaveWith:
          "A system your team can operate, extend, and debug without depending on us.",
      },
    ],
    deliverables: [
      {
        deliverable: "Technical scope document",
        impact:
          "Removes ambiguity about what's being built and in what order — before a sprint starts.",
      },
      {
        deliverable: "Architecture & data model",
        impact:
          "Prevents the rebuild-in-18-months problem by getting the foundation right the first time.",
      },
      {
        deliverable: "Working software each cycle",
        impact: "You see real progress every two weeks, not a status update.",
      },
      {
        deliverable: "Documented, owned codebase",
        impact:
          "Your team can maintain and extend it — you're not locked to us.",
      },
      {
        deliverable: "Handover & support plan",
        impact: "You know exactly who owns what the day we step back.",
      },
    ],
    proof: {
      title:
        "Rebuilding a logistics platform that was crashing weekly under peak-hour load.",
      situation:
        "A logistics company had built a web-based dispatch and tracking platform that worked well during pilot testing with a handful of users. As they scaled to full operations across multiple cities, the platform began failing under load - slow page loads, dropped API requests, and intermittent crashes during peak dispatch hours. The internal team was stuck in a cycle of firefighting.",
      hard: "The platform had to remain operational throughout the rebuild - they couldn't afford downtime during business hours. User behaviour was unpredictable, and the existing codebase had no tests and minimal documentation. The team had to learn the system while simultaneously rebuilding it.",
      action:
        "We started with a two-week audit to identify the critical failure points. We then rebuilt the architecture incrementally, deploying each module as it was completed rather than doing a big-bang rewrite. We introduced automated testing, added monitoring and alerting, and structured the codebase so the internal team could take over module by module.",
      outcome:
        "After the full transition, crash incidents dropped from weekly to zero over a three-month period. Page load times improved by over 60%. The internal team reported being able to ship features independently within weeks of taking over.",
      linkLabel: "View full project",
      linkHref: "",
      statValue: "0",
      statContext:
        "crash incidents in the three months following the rebuild, down from weekly.",
    },
    heroImage: {
      alt: "Developer reviewing code on a large monitor setup",
      pageUrl:
        "https://unsplash.com/photos/a-person-coding-on-a-laptop-near-a-window-4folb3V1fC0",
      imageUrl:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    },
    interfaceSketch: {
      alt: "Whiteboard diagram of system architecture and data flow",
      pageUrl:
        "https://unsplash.com/photos/a-whiteboard-with-diagrams-and-notes-on-it-5fNmWej4tAA",
      imageUrl:
        "https://images.unsplash.com/photo-1600267185393-e158a98703de?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    },
    proofImage: {
      alt: "Dashboard showing application performance metrics and logs",
      pageUrl:
        "https://unsplash.com/photos/a-computer-screen-with-a-graph-on-it-Mc0YZ4VbPbo",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    },
    fit: {
      worksWellIf: [
        "Your web application is experiencing performance or reliability issues that are affecting your users",
        "You're planning a migration from a legacy system and need a structured approach with minimal business disruption",
        "Your team needs to scale but the current architecture is becoming a bottleneck",
        "You have a working prototype that needs to be productionised with proper testing, monitoring, and deployment practices",
        "You need a development partner who can work alongside your existing team, not replace them",
      ],
      notRightIf: [
        "You need a simple marketing site or brochure-ware with no complex logic or data processing",
        "You're looking for a team to build a spec that is already fully detailed with no room for architectural input",
        "You need a short-term fix without addressing the underlying structural issues",
        "You're not ready to invest in testing, monitoring, and documentation as part of the build process",
      ],
    },
    faqs: [
      {
        question: "What do we need ready before we start?",
        answer:
          "A clear sense of the problem, and access to whoever understands the current workflow best — even if that's someone doing it manually in a spreadsheet. You don't need a finished spec; that's what Discovery produces.",
      },
      {
        question: "How involved does our team need to be?",
        answer:
          "Most engagement happens at the start and end of each two-week cycle — scoping and review. You don't need to be in daily standups, but the person who understands the business side needs to be reachable.",
      },
      {
        question: "Who owns the code and all IP at the end of the engagement?",
        answer:
          "You do. Code, documentation, and infrastructure access transfer fully at handover.",
      },
    ],
    contact: {
      eyebrow: "START A CONVERSATION",
      headline: "Tell us what you're building and where you're stuck.",
      supporting:
        "We respond with a perspective, not a proposal. If there's a fit, we'll suggest a short call. If there isn't, we'll say that too.",
    },
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    heroTagline: "Built for the update cycle, not the launch",
    eyebrow: "MOBILE APP DEVELOPMENT",
    headline: "An app people keep using past week one.",
    subline:
      "Most mobile work ends at the App Store submission. Ours starts with what happens after — because that's when most apps actually fail. Users open it once, and don't come back. We work with companies who need an app people keep using past week one, and who are planning to keep shipping after launch, not just once.",
    ctaLabel: "Tell us about your mobile app",
    situations: [
      '"We shipped v1. Downloads were fine. Nobody opened it a second time."',
      '"iOS and Android keep drifting apart. Every feature takes twice as long because we\'re maintaining two different apps that were supposed to be one."',
      '"We don\'t know if this should be native, cross-platform, or a web app pretending to be one — and getting that decision wrong is expensive."',
      '"App Store review keeps rejecting us, and nobody on the team can tell you exactly why."',
    ],
    phases: [
      {
        name: "Discovery & Platform Strategy",
        whatHappens:
          "We define who the user is, what they need the app to do in the first sixty seconds, and whether native, cross-platform, or web-based is the right call for your actual constraints — not the trendiest option.",
        whatYouDo:
          "Bring your user data if you have it, and your honest read on what's driving churn if you don't.",
        whatYouLeaveWith:
          "A platform strategy document — the technical direction and why, in plain language.",
      },
      {
        name: "Architecture & Interface Design",
        whatHappens:
          "We design navigation, offline behavior, and the interface across critical flows, connected to a defined technical architecture — not screens that look good in isolation.",
        whatYouDo:
          "Review in rounds. Push back on flows that don't match how your users actually behave.",
        whatYouLeaveWith:
          "An annotated, connected interface design ready for development.",
      },
      {
        name: "Build & Test Cycles",
        whatHappens:
          "Development runs in cycles with working builds you can install and use, not just view. Performance and architecture decisions get made early, so update six doesn't break update one.",
        whatYouDo:
          "Test builds on real devices. Flag what feels wrong before it ships.",
        whatYouLeaveWith:
          "A tested build, cycle over cycle, moving toward store submission.",
      },
      {
        name: "Launch & Iteration",
        whatHappens:
          "We manage store submission and release, then move into a post-launch cycle — the part where most apps get abandoned by their own dev team.",
        whatYouDo:
          "Decide what happens after launch — we stay available to build it.",
        whatYouLeaveWith:
          "A live app, plus a plan for the update cycle that keeps it alive.",
      },
    ],
    deliverables: [
      {
        deliverable: "Platform strategy document",
        impact:
          "Prevents an expensive native-vs-cross-platform mistake made too early.",
      },
      {
        deliverable: "Annotated interface design",
        impact: "Removes interpretation gaps between design and development.",
      },
      {
        deliverable: "Tested builds each cycle",
        impact:
          "You catch what feels wrong on a real device before your users do.",
      },
      {
        deliverable: "Store-ready release package",
        impact: "Submission delays don't become launch delays.",
      },
      {
        deliverable: "Post-launch iteration plan",
        impact: "The app doesn't stop getting better the day it ships.",
      },
    ],
    faqs: [
      {
        question: "What do we need ready before we start?",
        answer:
          "A clear problem and a sense of your users — you don't need a finished spec or a resolved native-vs-cross-platform decision; that's what Discovery is for.",
      },
      {
        question: "How involved does our team need to be?",
        answer:
          "Reachable for platform-strategy calls early, and for real-device testing during build cycles. Daily involvement isn't required.",
      },
      {
        question: "Who owns the code, design files, and IP at the end?",
        answer: "You do, fully, at handover.",
      },
    ],
    contact: {
      eyebrow: "START A CONVERSATION",
      headline: "Tell us what you're building and where you're stuck.",
      supporting:
        "We respond with a perspective, not a proposal. If there's a fit, we'll suggest a short call. If there isn't, we'll say that too.",
    },
  },
  "ai-ml-engineering": {
    slug: "ai-ml-engineering",
    name: "AI & ML Engineering",
    heroTagline: "Automation with a defined boundary",
    eyebrow: "AI & ML ENGINEERING",
    headline: "Replace repetitive decisions with reliable automation.",
    subline:
      "Most \"AI\" work starts with a model. Ours starts with the decision the model is meant to replace — what it should handle automatically, what should escalate to a person, and how you'll know when it's wrong instead of just confident. We work with companies who have a repetitive decision happening dozens of times a day that someone is still doing by hand.",
    ctaLabel: "Tell us about your AI use case",
    situations: [
      '"We know AI could help here, but nobody can say exactly what decision it should make — or where a human needs to stay in the loop."',
      '"We built a prototype on a general-purpose API. It looked great in the demo. It falls apart on our actual data."',
      '"Nobody on the team can explain why the model got something wrong, which makes it impossible to trust in production."',
      '"We have the data. We don\'t have a system that turns it into a decision anyone will actually act on."',
    ],
    phases: [
      {
        name: "Problem Framing & Data Audit",
        whatHappens:
          'We define the exact decision the system needs to make, what "wrong" looks like, and whether your data can actually support it — before any model gets built.',
        whatYouDo:
          "Bring your data and your honest uncertainty about where it's messy or incomplete.",
        whatYouLeaveWith:
          "A problem definition and data audit that says clearly whether this is buildable, and what it would take.",
      },
      {
        name: "System & Model Design",
        whatHappens:
          "We design the system boundary — what the model decides automatically, what gets escalated to a person, and how confidence gets measured. No model training yet. Only logic.",
        whatYouDo:
          "Pressure-test the escalation boundary against real cases you already know are ambiguous.",
        whatYouLeaveWith:
          "A system design that engineering and your operations team can both read and agree on.",
      },
      {
        name: "Build & Evaluation",
        whatHappens:
          "We build and evaluate the model or pipeline against defined accuracy and failure thresholds — not a demo that only works on clean examples.",
        whatYouDo:
          "Review evaluation results in rounds. Tell us where a wrong answer is more costly than we've accounted for.",
        whatYouLeaveWith:
          "A model or pipeline with documented performance, and a clear picture of where it fails.",
      },
      {
        name: "Deployment & Monitoring",
        whatHappens:
          "We deploy with monitoring in place, so drift and failure show up before your users notice them, not after.",
        whatYouDo:
          "Own the escalation path — who gets the alert when the model's confidence drops.",
        whatYouLeaveWith:
          "A production system with a monitoring and retraining plan, not a model you have to babysit manually.",
      },
    ],
    deliverables: [
      {
        deliverable: "Problem & data audit",
        impact:
          "Tells you honestly whether this is buildable before you spend on building it.",
      },
      {
        deliverable: "System design document",
        impact:
          "Defines exactly where the model decides and where a human does — no ambiguity in production.",
      },
      {
        deliverable: "Evaluated model / pipeline",
        impact:
          "You know its real accuracy and failure modes, not just its demo performance.",
      },
      {
        deliverable: "Monitoring & retraining plan",
        impact: "You find out the model is wrong before your customers do.",
      },
    ],
    faqs: [
      {
        question: "What do we need ready before we start?",
        answer:
          "Access to the data behind the decision, and someone who understands the current manual process well enough to explain when it goes wrong.",
      },
      {
        question: "How involved does our team need to be?",
        answer:
          "Heavily involved in Problem Framing — the decision boundary has to come from people who know the real cases. Lighter involvement during build.",
      },
      {
        question: "Who owns the model, code, and IP at the end?",
        answer:
          "You do. We don't retain rights to models or pipelines built for you.",
      },
    ],
    contact: {
      eyebrow: "START A CONVERSATION",
      headline: "Tell us what you're building and where you're stuck.",
      supporting:
        "We respond with a perspective, not a proposal. If there's a fit, we'll suggest a short call. If there isn't, we'll say that too.",
    },
  },
  "cloud-devops": {
    slug: "cloud-devops",
    name: "Cloud & DevOps",
    heroTagline: "Infrastructure that doesn't need babysitting",
    eyebrow: "CLOUD & DEVOPS",
    headline: "Infrastructure that scales without requiring your attention.",
    subline:
      "Most infrastructure work starts with tools. Ours starts with the failure you're currently one bad night away from — the manual deploy, the region with no failover, the cost spike nobody can explain. We work with teams whose infrastructure currently requires someone's attention to stay up, and who are about to scale into a system that can't take that risk.",
    ctaLabel: "Tell us about your infrastructure",
    situations: [
      '"Every deploy is a manual process someone has to babysit at 11pm, hoping nothing breaks."',
      "\"We don't actually know what happens if our primary region goes down. We've never tested it.\"",
      '"Our cloud bill doubled last quarter and nobody can tell you which part of the system caused it."',
      "\"We're about to scale and we don't trust what we currently have to hold.\"",
    ],
    phases: [
      {
        name: "Infrastructure Audit",
        whatHappens:
          "We map your current infrastructure, deployment process, and cost breakdown to find out exactly where risk and spend are hiding.",
        whatYouDo:
          "Give us access and your honest read on what's fragile — the thing everyone knows not to touch.",
        whatYouLeaveWith:
          "An audit that shows what's actually at risk, in plain terms your team and leadership can both read.",
      },
      {
        name: "Architecture & Migration Plan",
        whatHappens:
          "We design the target infrastructure — how it scales, fails over, and gets monitored — and a migration path that doesn't require downtime you haven't agreed to.",
        whatYouDo:
          "Review the plan against constraints we can't see from outside — compliance, budget, existing vendor commitments.",
        whatYouLeaveWith:
          "A migration plan with a defined sequence, so nothing moves without a reason.",
      },
      {
        name: "Build & Automate",
        whatHappens:
          "We build the CI/CD pipeline, infrastructure-as-code, and monitoring — so deploys stop being a manual event someone has to stay up for.",
        whatYouDo:
          "Review each stage as it goes live. Confirm alerting is going to the right people.",
        whatYouLeaveWith:
          "A deployment pipeline and monitoring stack running in parallel with your current setup until it's proven.",
      },
      {
        name: "Handover & Monitoring",
        whatHappens:
          "We hand over infrastructure access, documentation, and runbooks. Monitoring and alerting are live before we step back — not after.",
        whatYouDo:
          "Take ownership of the runbook. Ask us anything before we go.",
        whatYouLeaveWith:
          "Infrastructure your team can operate and scale without depending on us to be online.",
      },
    ],
    deliverables: [
      {
        deliverable: "Infrastructure audit",
        impact:
          "Shows exactly where risk and cost are hiding — before either becomes an incident.",
      },
      {
        deliverable: "Architecture & migration plan",
        impact: "Nothing moves without a defined, agreed sequence.",
      },
      {
        deliverable: "CI/CD pipeline",
        impact: "Deploys stop being a manual event someone has to babysit.",
      },
      {
        deliverable: "Monitoring & alerting setup",
        impact:
          "You find out about a problem before your users file a ticket about it.",
      },
      {
        deliverable: "Runbook & handover",
        impact:
          "Your team can operate the system without us — that's the point.",
      },
    ],
    faqs: [
      {
        question: "What do we need ready before we start?",
        answer:
          "Access to your current infrastructure and whoever knows where the fragile parts are — even informally.",
      },
      {
        question: "How involved does our team need to be?",
        answer:
          "Heavily involved during the audit and migration plan review; lighter during build, since this work is mostly infrastructure-side.",
      },
      {
        question: "Who owns the infrastructure and configuration at the end?",
        answer:
          "You do, fully — including all infrastructure-as-code and documentation.",
      },
    ],
    contact: {
      eyebrow: "START A CONVERSATION",
      headline: "Tell us what you're building and where you're stuck.",
      supporting:
        "We respond with a perspective, not a proposal. If there's a fit, we'll suggest a short call. If there isn't, we'll say that too.",
    },
  },
  "system-architecture": {
    slug: "system-architecture",
    name: "System Architecture",
    heroTagline: "Decisions that determine your next 18 months",
    eyebrow: "SYSTEM ARCHITECTURE",
    headline: "The part most agencies skip. We don't.",
    subline:
      "Most product work focuses on what the user sees. We focus on what sits underneath — the data model, service boundaries, integration points, and deployment strategy that determine whether your product is rebuilt in 18 months or scales for five years. We work with companies whose current architecture is starting to show its limits, and who need a foundation that won't dictate their next rebuild.",
    ctaLabel: "Tell us about your system",
    situations: [
      '"The product works today. But every new feature takes longer than the last one, and the team is starting to avoid touching certain parts of the codebase."',
      "\"We're planning a major expansion — new markets, new integrations, new users — and we're not sure the current architecture can handle it without a rewrite.\"",
      '"Our system was built by different teams at different times with different assumptions. The result works, but nobody fully understands how all the pieces fit together."',
      '"We\'re evaluating build-versus-buy for a critical capability, and we need someone who can assess the architectural impact of either decision before we commit."',
    ],
    phases: [
      {
        name: "Discovery & Mapping",
        whatHappens:
          "We map your current system landscape — codebase structure, data flows, service dependencies, deployment architecture, and team workflows. We identify the hot spots: the parts of the system where complexity is hiding, performance is degrading, or knowledge is concentrated in one person.",
        whatYouDo:
          "Give us access to your codebase, infrastructure, and team. Be honest about which parts of the system nobody wants to touch and why.",
        whatYouLeaveWith:
          "A system map that shows what exists, how it connects, and where the risk is hiding — in terms your whole team can understand.",
      },
      {
        name: "Target Architecture",
        whatHappens:
          "We design the target architecture based on your business goals, not technology trends. We define service boundaries, data ownership, integration patterns, and migration sequencing — before any code is written or moved.",
        whatYouDo:
          "Review the architecture against real scenarios your business will face. Push back on complexity that doesn't serve a concrete need.",
        whatYouLeaveWith:
          "A documented target architecture with explicit trade-offs — why each decision was made and what it means for your team.",
      },
      {
        name: "Migration & Build",
        whatHappens:
          "We execute the migration or build in sequenced phases, each with a clear definition of done. Every phase leaves the system in a working state — no long-running branches, no big-bang cutovers. We establish patterns your team can follow for future work.",
        whatYouDo:
          "Assign team members to work alongside us during each phase. Review deliverables and sign off before the next phase begins.",
        whatYouLeaveWith:
          "A working system delivered incrementally, with each phase independently verifiable and deployable.",
      },
      {
        name: "Handover & Governance",
        whatHappens:
          "We hand over architecture documentation, decision records, and runbooks. We establish lightweight governance — the decision framework your team uses to keep the architecture consistent as they build new features without us.",
        whatYouDo:
          "Participate in handover sessions. Take ownership of the governance framework — it only works if your team uses it.",
        whatYouLeaveWith:
          "A documented, governed architecture your team can extend independently — plus the decision framework to keep it consistent.",
      },
    ],
    deliverables: [
      {
        deliverable: "Current system map",
        impact:
          "Your team finally sees how the system actually works — not how anyone remembers it working.",
      },
      {
        deliverable: "Target architecture document",
        impact:
          "Every engineering decision has a clear rationale. New team members can understand the system without depending on tribal knowledge.",
      },
      {
        deliverable: "Migration plan with phases",
        impact:
          "You know what moves when, in what order, and what each phase costs — before any commitment is made.",
      },
      {
        deliverable: "Decision records & runbooks",
        impact:
          "Future teams understand why things are the way they are — not just what was built.",
      },
      {
        deliverable: "Architecture governance framework",
        impact:
          "Your team can make consistent architecture decisions without depending on external input for every choice.",
      },
    ],
    faqs: [
      {
        question:
          "Do we need to have a clear architecture problem before we start?",
        answer:
          "You need a sense that something isn't right — features taking too long, deployments getting risky, scaling concerns. You don't need a diagnosed problem. The discovery phase exists to find out what's actually wrong before we propose a solution.",
      },
      {
        question: "How involved does our engineering team need to be?",
        answer:
          "Heavily involved during discovery and architecture review — nobody knows your system better than the people who work in it every day. During migration and build, we work alongside your team so knowledge transfer happens naturally.",
      },
      {
        question:
          "Who owns the architecture decisions and documentation at the end?",
        answer:
          "You do. All architecture documents, decision records, and governance frameworks are yours. We don't retain any rights to the work product.",
      },
    ],
    contact: {
      eyebrow: "START A CONVERSATION",
      headline: "Tell us what you're building and where you're stuck.",
      supporting:
        "We respond with a perspective, not a proposal. If there's a fit, we'll suggest a short call. If there isn't, we'll say that too.",
    },
  },
  "api-integrations": {
    slug: "api-integrations",
    name: "API Integrations",
    heroTagline: "Systems that connect without breaking",
    eyebrow: "API INTEGRATIONS",
    headline: "Connect your systems without breaking what works.",
    subline:
      "Most integration work focuses on the handshake between systems. Ours focuses on what happens when that handshake fails — data drift, silent failures, and the manual reconciliation that follows. We work with companies whose tools need to talk to each other, but the connections between them have become a source of fragility instead of leverage.",
    ctaLabel: "Tell us about your integration needs",
    situations: [
      "\"Our CRM doesn't talk to our billing system. Someone manually exports data from one and imports it into the other. It works until it doesn't — and nobody knows when it doesn't.\"",
      '"We acquired a company with a different stack. Now we have two of everything — two customer databases, two order systems, two ways of reporting the same thing."',
      "\"We're building a product that needs to integrate with third-party APIs, and we're not sure how to handle rate limits, failures, and data consistency across services that don't coordinate with each other.\"",
      '"Every new integration is a custom project. What we\'re calling integration is really point-to-point duct tape that only the person who built it understands."',
    ],
    phases: [
      {
        name: "Discovery & Mapping",
        whatHappens:
          "We map the systems that need to connect, the data that needs to move between them, and the failure modes that currently require manual intervention. We identify what's fragile, what's redundant, and what's missing.",
        whatYouDo:
          "Give us access to the systems and the people who understand the current workarounds — the manual steps everyone knows not to talk about.",
        whatYouLeaveWith:
          "An integration map showing every connection point, data flow, and known failure mode — before any code is written.",
      },
      {
        name: "Architecture & Design",
        whatHappens:
          "We design the integration architecture — API contracts, data transformation logic, error handling, retry strategies, and monitoring. We decide where consistency is critical and where eventual consistency is acceptable.",
        whatYouDo:
          "Review the design against your actual business workflows. Tell us which data mismatches would cause real problems and which ones are cosmetic.",
        whatYouLeaveWith:
          "A documented integration design with explicit trade-offs about consistency, latency, and failure handling.",
      },
      {
        name: "Build & Integration",
        whatHappens:
          "We build the integration layer — API wrappers, data pipelines, transformation logic, and error handling. Every integration point is tested against real data and real failure scenarios, not happy-path examples.",
        whatYouDo:
          "Provide test accounts, sample data, and access to the systems we're integrating with. Review integration test results in rounds.",
        whatYouLeaveWith:
          "Working integration code deployed alongside monitoring so you can see when data flows break before it causes downstream problems.",
      },
      {
        name: "Handover & Monitoring",
        whatHappens:
          "We hand over integration documentation, runbooks, and monitoring dashboards. Your team knows what to check, what to do when a connection fails, and how to add new integrations using the patterns we established.",
        whatYouDo:
          "Take ownership of monitoring and runbooks. Practice the failure scenarios during handover.",
        whatYouLeaveWith:
          "A monitored, documented integration layer your team can extend without rebuilding from scratch each time.",
      },
    ],
    deliverables: [
      {
        deliverable: "Integration system map",
        impact:
          "Your team sees every connection, data flow, and failure point — no undocumented duct tape.",
      },
      {
        deliverable: "Integration architecture design",
        impact:
          "Decisions about consistency, error handling, and retry logic are made deliberately, not discovered during an incident.",
      },
      {
        deliverable: "Working integration code",
        impact:
          "Data flows reliably between your systems. Failures are caught and handled, not silently corrupted.",
      },
      {
        deliverable: "Monitoring dashboards & alerts",
        impact:
          "You find out an integration is failing before someone in another department sends a frustrated message.",
      },
      {
        deliverable: "Runbooks & integration patterns",
        impact:
          "Your team can add new integrations without reinventing the approach each time.",
      },
    ],
    faqs: [
      {
        question: "What do we need ready before we start?",
        answer:
          "Access to the systems you want to integrate and someone who understands the current data flow — including the manual steps that exist because the integration hasn't been built yet. You don't need documented APIs for every system; we work with whatever access is available.",
      },
      {
        question: "How involved does our team need to be?",
        answer:
          "Heavily involved during discovery — your team knows the quirks of each system better than we ever will. During build, lighter involvement is fine; we need access to systems for testing and your review of integration test results.",
      },
      {
        question: "Who owns the integration code and documentation?",
        answer:
          "You do. All integration code, API wrappers, documentation, and monitoring configurations are fully transferred at handover.",
      },
    ],
    contact: {
      eyebrow: "START A CONVERSATION",
      headline: "Tell us what you're building and where you're stuck.",
      supporting:
        "We respond with a perspective, not a proposal. If there's a fit, we'll suggest a short call. If there isn't, we'll say that too.",
    },
  },
  "ongoing-support": {
    slug: "ongoing-support",
    name: "Ongoing Support",
    heroTagline: "Systems don't maintain themselves",
    eyebrow: "ONGOING SUPPORT",
    headline: "Keep shipping without keeping a full team on it.",
    subline:
      "Most support relationships start when something breaks. Ours starts before it does. We work with teams who have a live product they need to keep running, updating, and improving — but don't have the internal capacity to do it without burning out their existing people. We become the reliable layer your team depends on between major initiatives.",
    ctaLabel: "Tell us about your support needs",
    situations: [
      "\"We shipped v1 and it's working. But the team is exhausted, the backlog is growing, and every new bug report feels like another thing we don't have time for.\"",
      '"Our product is live and growing. But we don\'t have the budget for a full-time engineering team to maintain it, and the founders are doing the support work themselves."',
      '"We have a major feature planned for next quarter. We need someone to keep the current system running while the core team focuses on the new work."',
      '"We\'re between engineering hires and need someone who can keep things stable — fix bugs, handle deployments, respond to incidents — without requiring ramp-up time."',
    ],
    phases: [
      {
        name: "Handover & Context",
        whatHappens:
          "We learn your system, your team's current workflows, and your support patterns. We take over the tasks that are consuming your team's time — bug fixes, deployments, dependency updates, monitoring responses — so your team can focus on what needs their attention.",
        whatYouDo:
          "Give us access to your codebase, infrastructure, and issue tracker. Walk us through your current process so we understand how things actually work — not just how they're documented.",
        whatYouLeaveWith:
          "A running system with us handling routine maintenance. Your team reclaims the hours they were spending on support work.",
      },
      {
        name: "Stabilisation & Triage",
        whatHappens:
          "We work through the existing backlog, fix recurring issues, and establish a triage process for new reports. We separate urgent from important from noise, so your team sees a clear picture of what actually needs attention.",
        whatYouDo:
          "Review our triage priorities. Tell us which issues are real blockers versus nice-to-haves. Let us know your team's capacity for the non-urgent improvements.",
        whatYouLeaveWith:
          "A triaged backlog, a functioning support process, and a system that's more stable than when we started.",
      },
      {
        name: "Ongoing Maintenance",
        whatHappens:
          "We handle routine maintenance — bug fixes, dependency updates, security patches, deployment management, and monitoring responses. We work in regular cycles so your team always knows what's being worked on and what's been completed.",
        whatYouDo:
          "Prioritise work in regular syncs. Let us know about upcoming changes or events that might affect the system. Your team stays focused on product work.",
        whatYouLeaveWith:
          "A reliable maintenance cadence that keeps your system stable without requiring your team's constant attention.",
      },
      {
        name: "Scaling & Transition",
        whatHappens:
          "As your team grows or your needs change, we scale our support up or down accordingly. When you're ready to bring support in-house, we plan a structured transition — no abrupt handoffs, no dropped context.",
        whatYouDo:
          "Tell us when your capacity or needs change. If you decide to transition, assign the team members who will take over and participate in paired handover sessions.",
        whatYouLeaveWith:
          "A system we've maintained, a team we've supported, and a transition plan if and when you're ready to take over.",
      },
    ],
    deliverables: [
      {
        deliverable: "System handover & context",
        impact:
          "Your team doesn't waste time ramping us up. We're productive from the first cycle.",
      },
      {
        deliverable: "Triaged issue backlog",
        impact:
          "Everyone knows what matters and what doesn't. No more drowning in a sea of open tickets.",
      },
      {
        deliverable: "Routine maintenance delivery",
        impact:
          "Bugs get fixed, dependencies stay updated, and deployments happen — without your team managing it.",
      },
      {
        deliverable: "Monitoring & incident response",
        impact:
          "Issues are caught and handled before they escalate. Your users don't file tickets about things you already fixed.",
      },
      {
        deliverable: "Support runbook & transition plan",
        impact:
          "When you're ready to bring support in-house, the knowledge comes with it — nothing is lost.",
      },
    ],
    faqs: [
      {
        question: "How much of our team's time will this require?",
        answer:
          "More at the start during handover, less once we're running. Expect a few hours per week for syncs and priority setting. Day-to-day operations don't require your team's involvement once we're established.",
      },
      {
        question: "Can you work with our existing tools and workflows?",
        answer:
          "Yes. We adapt to your issue tracker, communication tools, and deployment process — we don't require you to adopt new tools or change how your team works.",
      },
      {
        question: "How do we end the engagement when we're ready?",
        answer:
          "With notice, we plan a structured transition — paired handover sessions, updated documentation, and a support buffer period. No abrupt cutoffs, no dropped context. You own everything we've maintained.",
      },
    ],
    contact: {
      eyebrow: "START A CONVERSATION",
      headline: "Tell us what you're building and where you're stuck.",
      supporting:
        "We respond with a perspective, not a proposal. If there's a fit, we'll suggest a short call. If there isn't, we'll say that too.",
    },
  },
};

export function getServiceDetail(id: string) {
  if (!id) {
    return serviceDetailMap["product-design"];
  }

  return (
    serviceDetailMap[id as keyof typeof serviceDetailMap] ||
    serviceDetailMap["product-design"]
  );
}
