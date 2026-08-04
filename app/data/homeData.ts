import { clientLogos } from "../about/data/aboutData";
import {
  caseStudies,
  getCaseStudyUrl,
} from "../case-studies/data/caseStudyDetails";

function getServicePath(id = "product-design") {
  return `/services/${id}`;
}

const routes = {
  home: "/",
  about: "/about",
  contact: "/contact",
  portfolio: "/portfolio",
  work: "/work",
  process: "/process",
  services: "/services",
  blogs: "/blogs",
};

const selectedCases = ["01", "02", "03"];
const testimonialCases = ["01", "02", "03", "04", "05", "06", "07"];

interface HomeHeroStat {
  value: string;
  label: string;
}

interface ProblemRecognitionItem {
  quote: string;
  response: string;
}

export interface SelectedWork {
  no: string;
  industry: string;
  problem: string;
  outcome: string;
  metrics: string[][];
  href: string;
  project: string;
}

interface ProcessStep {
  no: string;
  title: string;
  body: string;
}

interface HomeService {
  key: string;
  title: string;
  body: string;
  href?: string;
}

interface FitColumns {
  notFit: string[];
  goodFit: string[];
}

interface Testimonial {
  no: string;
  project: string;
  quote: string;
  attribution: string;
  href: string;
}

interface FooterLink {
  label: string;
  href: string;
}

interface FooterData {
  serviceLinks: FooterLink[];
  companyLinks: FooterLink[];
  contactLinks: FooterLink[];
}

export const homeHeroStats: HomeHeroStat[] = [
  {
    value: "3+ Years",
    label: "Combined Experience",
  },
  {
    value: "20+",
    label: "Projects Delivered",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
];

export const heroTrustedBy = clientLogos;

export const problemRecognitionItems: ProblemRecognitionItem[] = [
  {
    quote:
      "We launched on time. Six months later we were patching the same issue for the third time.",
    response:
      "The system wasn't late. It was built for version one, not version five.",
  },
  {
    quote:
      "Our engineers spend more time on maintenance than on new features. We're not moving forward.",
    response: "That's not a team problem. That's an architecture problem.",
  },
  {
    quote: "We've already paid for one rebuild. We're not doing that again.",
    response:
      "We've heard that enough times to build differently from the start.",
  },
];

export const selectedWork: SelectedWork[] = selectedCases.map((no) => {
  const caseStudy = caseStudies.find((item) => item.no === no);
  if (!caseStudy)
    return {
      no: "",
      industry: "",
      problem: "",
      outcome: "",
      metrics: [],
      href: "",
      project: "",
    };

  return {
    no: caseStudy.no,
    industry: caseStudy.industry,
    problem: caseStudy.problem,
    outcome: caseStudy.metricPlainEnglish,
    metrics: caseStudy.outcome,
    href: getCaseStudyUrl(caseStudy),
    project: caseStudy.project,
  };
});

export const processSteps: ProcessStep[] = [
  {
    no: "01",
    title: "Discovery & Scoping",
    body: "Before we write a line of code, we understand your system - what it needs to do today, where it's going in 18 months, and what it cannot afford to break. You leave discovery with a written scope document and a technical direction, not a verbal estimate.",
  },
  {
    no: "02",
    title: "Architecture & Design",
    body: "We plan the system before we build it. Every architecture decision is documented and explained in plain language. You'll understand what we're building and why before development begins.",
  },
  {
    no: "03",
    title: "Build & Iteration",
    body: "Development runs in two-week cycles. You don't wait three months for a reveal - you see working software as it's built, with space to refine before anything is locked.",
  },
  {
    no: "04",
    title: "Handover & Ongoing Support",
    body: "When we hand over the system, you own it fully. Code, documentation, infrastructure access - everything. We don't create dependency. We stay available for what comes next on your terms.",
  },
];

export const homeServices: HomeService[] = [
  {
    key: "design",
    title: "Product Design",
    body: "From wireframe to working interface - we design product systems your users understand and your engineering team can actually maintain and extend.",
    href: getServicePath("product-design"),
  },
  {
    key: "mobile",
    title: "Mobile Applications",
    body: "iOS and Android products built for the update cycle, not just the launch. Performance and architecture decisions made at the start, not fixed later.",
    href: getServicePath("mobile-app-development"),
  },
  {
    key: "web",
    title: "Web Development",
    body: "Web platforms and applications that handle real traffic, real data, and real edge cases - not just what's in the demo.",
    href: getServicePath("web-application-development"),
  },
  {
    key: "systems",
    title: "System Architecture",
    body: "The part most agencies skip. We define the systems underneath the product - the decisions that determine whether you're rebuilding in 18 months or scaling for five years.",
    href: getServicePath("system-architecture"),
  },
];

export const fitColumns: FitColumns = {
  notFit: [
    "You need a design agency for a marketing site or brand refresh.",
    "You're shopping for the lowest quote on a spec you've already locked.",
    "Your timeline is two weeks and your requirements are still being decided.",
    "You want a vendor who says yes first and figures it out during the build.",
  ],
  goodFit: [
    "You've been through a build that didn't hold up, and you won't make the same mistake twice.",
    "You're scaling a product and need a technical partner who thinks past the delivery date.",
    "You want to understand the architecture decisions, not just receive a handover file.",
    "You care more about the system working reliably in year two than hitting a headline launch date.",
  ],
};

export const testimonials: Testimonial[] = testimonialCases.map((no) => {
  const caseStudy = caseStudies.find((item) => item.no === no);
  if (!caseStudy)
    return { no: "", project: "", quote: "", attribution: "", href: "" };

  return {
    no: caseStudy.no,
    project: caseStudy.project,
    quote: caseStudy.clientPerspective.quote,
    attribution: caseStudy.clientPerspective.attribution,
    href: getCaseStudyUrl(caseStudy),
  };
});

export const footerData: FooterData = {
  serviceLinks: [
    { label: "Product Design", href: getServicePath("product-design") },
    { label: "Mobile Applications", href: `${routes.home}#services` },
    { label: "Web Development", href: `${routes.home}#services` },
    { label: "System Architecture", href: `${routes.home}#services` },
  ],
  companyLinks: [
    { label: "About", href: routes.about },
    { label: "Our Process", href: routes.process },
    { label: "Contact", href: routes.contact },
  ],
  contactLinks: [
    { label: "hello@darvilabs.com", href: "mailto:hello@darvilabs.com" },
    { label: "Dhumbarahi, Kathmandu", href: `${routes.contact}#reach-out` },
  ],
};
