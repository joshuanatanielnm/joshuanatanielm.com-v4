import { WorkExperience } from "@/types";

export const workExperience: WorkExperience[] = [
  {
    id: "exp-1",
    company: "Anthropic",
    role: "Senior Frontend Engineer",
    location: "San Francisco, CA",
    startDate: "2023",
    endDate: "Present",
    description: "Leading frontend development for Claude AI products, building intuitive interfaces that make AI accessible to millions of users worldwide.",
    achievements: [
      "Architected the new Claude.ai interface serving 10M+ weekly active users",
      "Reduced initial load time by 60% through code splitting and lazy loading",
      "Built real-time streaming chat UI with sub-100ms perceived latency",
      "Led accessibility initiatives achieving WCAG 2.1 AA compliance",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "WebSockets"],
    website: "https://anthropic.com",
    metrics: [
      { label: "Users Served", value: "10M+" },
      { label: "Load Time", value: "-60%" },
      { label: "Team Size", value: 8 },
    ],
  },
  {
    id: "exp-2",
    company: "Uniswap Labs",
    role: "Frontend Engineer",
    location: "New York, NY",
    startDate: "2021",
    endDate: "2023",
    description: "Built and maintained the Uniswap web interface, enabling billions in trading volume. Pioneered Web3 UX patterns that became industry standards.",
    achievements: [
      "Developed swap interface handling $50B+ in trading volume",
      "Implemented multi-chain support across 6 networks",
      "Created reusable Web3 component library used across 5 products",
      "Reduced transaction failure rate by 40% through better error handling",
    ],
    technologies: ["React", "TypeScript", "Ethers.js", "GraphQL", "Web3"],
    website: "https://uniswap.org",
    metrics: [
      { label: "Volume", value: "$50B+" },
      { label: "Chains", value: 6 },
      { label: "Error Rate", value: "-40%" },
    ],
  },
  {
    id: "exp-3",
    company: "Vercel",
    role: "Software Engineer",
    location: "Remote",
    startDate: "2019",
    endDate: "2021",
    description: "Worked on the Vercel dashboard and deployment platform, helping developers ship their projects faster.",
    achievements: [
      "Built deployment status UI with real-time build logs",
      "Implemented new onboarding flow increasing activation by 25%",
      "Contributed to Next.js documentation and examples",
    ],
    technologies: ["Next.js", "React", "TypeScript", "SWR", "Tailwind CSS"],
    website: "https://vercel.com",
    metrics: [
      { label: "Activation", value: "+25%" },
      { label: "Projects", value: "100+" },
    ],
  },
];
