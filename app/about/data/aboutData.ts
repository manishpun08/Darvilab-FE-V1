export interface ClientLogo {
  name: string;
  mark: string;
}

interface SectorEntry {
  title: string;
  descriptor: string;
  accent?: boolean;
}

interface ProofMetric {
  value: string;
  suffix: string;
  body: string;
}

export interface Founder {
  name: string;
  role: string;
  statement: string;
  clientLine: string;
  initials: string;
  image: string;
}

export interface CoreTeamMember {
  name: string;
  role: string;
  image: string;
}

export const foundingParagraphs: string[] = [
  "We kept seeing clients receive technically correct systems that were already failing operationally six months later because the vendor had exited the moment the build was signed off.",
  "DarviLabs was set up to stay involved where most IT vendors step away: the handover, the edge cases, the system decisions that only show their consequences once real teams start relying on them.",
  "That difference is less about project delivery than about who remains accountable when the work enters live conditions.",
];

export const clientLogos: ClientLogo[] = [
  { name: "Kubernetes", mark: "si-kubernetes" },
  { name: "Tailwind CSS", mark: "si-tailwindcss" },
  { name: "Python", mark: "si-python" },
  { name: "TensorFlow", mark: "si-tensorflow" },
  { name: "PostgreSQL", mark: "si-postgresql" },
  { name: "Node.js", mark: "si-nodedotjs" },
  { name: "Nest.js", mark: "si-nestjs" },
  { name: "Next.js", mark: "si-nextdotjs" },
  { name: "React", mark: "si-react" },
  { name: "Flutter", mark: "si-flutter" },
  { name: "PyTorch", mark: "si-pytorch" },
  { name: "FastAPI", mark: "si-fastapi" },
  { name: "Docker", mark: "si-docker" },
  { name: "React Native", mark: "si-reactnative" },
  { name: "Django", mark: "si-django" },
  { name: "Express", mark: "si-express" },
  { name: "AWS", mark: "si-amazonaws" },
];

export const sectorEntries: SectorEntry[] = [
  {
    title: "Financial Services",
    descriptor: "Banking, Fintech",
    accent: true,
  },
  {
    title: "Healthcare & Biotech",
    descriptor: "Systems, Compliance",
  },
  {
    title: "E-Commerce & Retail",
    descriptor: "Platform, Integration",
  },
  {
    title: "Education Technology",
    descriptor: "LMS, Infrastructure",
  },
  {
    title: "Remote-First Teams",
    descriptor: "Asia-Pacific, UK, AU",
  },
];

export const proofMetrics: ProofMetric[] = [
  {
    value: "6.2",
    suffix: "yrs",
    body: "Average active partnership - not project length, but ongoing relationship.",
  },
  {
    value: "68",
    suffix: "%",
    body: "Of work comes from returning clients or direct referrals.",
  },
  {
    value: "42",
    suffix: "+",
    body: "Successful system handovers - documented, tested, and trained through.",
  },
  {
    value: "₹1Cr",
    suffix: "+",
    body: "Revenue delivered for clients.",
  },
];

export const founders: Founder[] = [
  {
    name: "Founder Name",
    role: "CEO - accountable direction and client decisions",
    statement:
      "The work is only successful if the system still makes sense when your team is the one carrying it.",
    clientLine:
      "Keeps the engagement tied to business consequences, priorities, and the decisions that cannot be delegated.",
    initials: "FN",
    image: "",
  },
  {
    name: "Co-Founder Name",
    role: "Co-Founder - delivery architecture and system judgment",
    statement:
      "Every build decision should leave the client with more control, not a more fragile dependency on us.",
    clientLine:
      "Turns the agreed direction into a build path your team can understand, operate, and trust after launch.",
    initials: "CF",
    image: "",
  },
];

export const coreTeam: CoreTeamMember[] = [
  {
    name: "Sandesh Rimal",
    role: "Team Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bibek Shah",
    role: "Team Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Anugrah Pradhan",
    role: "Product Designer",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sandesh Rimal",
    role: "Team Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bibek Shah",
    role: "Team Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Anugrah Pradhan",
    role: "Product Designer",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sandesh Rimal",
    role: "Team Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bibek Shah",
    role: "Team Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Anugrah Pradhan",
    role: "Product Designer",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sandesh Rimal",
    role: "Team Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bibek Shah",
    role: "Team Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Anugrah Pradhan",
    role: "Product Designer",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sandesh Rimal",
    role: "Team Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bibek Shah",
    role: "Team Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Anugrah Pradhan",
    role: "Product Designer",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sandesh Rimal",
    role: "Team Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bibek Shah",
    role: "Team Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Anugrah Pradhan",
    role: "Product Designer",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sandesh Rimal",
    role: "Team Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bibek Shah",
    role: "Team Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Anugrah Pradhan",
    role: "Product Designer",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sandesh Rimal",
    role: "Team Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bibek Shah",
    role: "Team Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Anugrah Pradhan",
    role: "Product Designer",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sandesh Rimal",
    role: "Team Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bibek Shah",
    role: "Team Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Anugrah Pradhan",
    role: "Product Designer",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sandesh Rimal",
    role: "Team Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bibek Shah",
    role: "Team Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Anugrah Pradhan",
    role: "Product Designer",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sandesh Rimal",
    role: "Team Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bibek Shah",
    role: "Team Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Anugrah Pradhan",
    role: "Product Designer",
    image: "",
  },
];
