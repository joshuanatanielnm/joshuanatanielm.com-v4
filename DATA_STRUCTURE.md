# Data Structure Documentation

This document outlines all TypeScript types and data structures for the portfolio site.

## Type Definitions

### Types File (`types/index.ts`)

```typescript
// Work Experience
export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string; // Format: "YYYY-MM" or "YYYY"
  endDate: string | "Present"; // "Present" for current role
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string; // Path to company logo
  website?: string; // Company website URL
  metrics?: {
    label: string;
    value: string | number;
  }[]; // Uniswap-inspired metrics cards
}

// Portfolio Projects
export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  longDescription?: string; // For modal/detail view
  category: "Frontend" | "AI" | "Web3" | "Full Stack";
  thumbnail: string; // Path to thumbnail image
  images?: string[]; // Additional images for gallery
  technologies: string[];
  liveUrl?: string; // Live demo URL
  githubUrl?: string; // GitHub repository URL
  featured: boolean; // Show in featured section
  status: "Completed" | "In Progress" | "Archived";
  year: number;
  metrics?: {
    label: string;
    value: string | number;
  }[]; // Project impact metrics
}

// Exploration Projects
export interface Exploration {
  id: string;
  title: string;
  description: string;
  category: "AI" | "Web3" | "Frontend" | "Experimental";
  thumbnail: string;
  demoUrl?: string; // Interactive demo URL
  codeUrl?: string; // Code snippet or playground link
  technologies: string[];
  featured: boolean;
  interactive: boolean; // Has live interactive demo
  year: number;
  tags: string[];
}

// Photography
export interface Photo {
  id: string;
  title: string;
  description?: string;
  imageUrl: string; // Full resolution image
  thumbnailUrl: string; // Optimized thumbnail
  category: "Landscape" | "Portrait" | "Street" | "Nature" | "Urban" | "Abstract" | "Other";
  tags: string[];
  location?: string;
  date?: string; // Format: "YYYY-MM-DD"
  camera?: string; // Camera model
  settings?: {
    aperture?: string;
    shutterSpeed?: string;
    iso?: number;
    focalLength?: string;
  };
  featured: boolean; // Show in featured/home preview
  year: number;
}

// Skills
export interface Skill {
  id: string;
  name: string;
  category: "Frontend" | "AI/ML" | "Web3" | "Backend" | "Tools" | "Design";
  icon?: string; // Icon name or URL
  yearsOfExperience?: number;
}

// Contact Information
export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    behance?: string;
    dribbble?: string;
    medium?: string;
    [key: string]: string | undefined; // Allow custom social links
  };
  resumeUrl?: string; // Path to resume PDF
  calendlyUrl?: string; // For scheduling meetings
}

// Personal Info (for Hero section)
export interface PersonalInfo {
  name: string;
  title: string; // e.g., "Frontend Engineer"
  bio: string; // Short bio
  tagline: string; // One-liner for hero
  avatar?: string; // Profile picture
  location: string;
  availableForWork: boolean;
}
```

## Data File Structure (`lib/data.ts`)

```typescript
import {
  WorkExperience,
  PortfolioProject,
  Exploration,
  Photo,
  Skill,
  ContactInfo,
  PersonalInfo,
} from "@/types";

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Joshua Nathaniel Manuputty",
  title: "Frontend Engineer",
  bio: "Building beautiful, interactive web experiences with a focus on AI and Web3 technologies.",
  tagline: "Crafting digital experiences at the intersection of design and code",
  avatar: "/images/avatar.jpg",
  location: "San Francisco, CA",
  availableForWork: false,
};

// Work Experience
export const workExperience: WorkExperience[] = [
  {
    id: "exp-1",
    company: "Tech Company",
    role: "Senior Frontend Engineer",
    location: "San Francisco, CA",
    startDate: "2022-01",
    endDate: "Present",
    description: "Leading frontend development for AI-powered products...",
    achievements: [
      "Built responsive web applications serving 1M+ users",
      "Implemented Web3 wallet integration",
      "Led team of 3 frontend engineers",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Web3"],
    logo: "/images/companies/tech-company.svg",
    website: "https://example.com",
    metrics: [
      { label: "Users Impacted", value: "1M+" },
      { label: "Projects Shipped", value: 15 },
      { label: "Team Size", value: 3 },
    ],
  },
  // Add more experiences...
];

// Portfolio Projects
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "proj-1",
    title: "AI Chat Interface",
    description: "Modern chat interface inspired by ChatGPT with real-time AI responses",
    longDescription: "A fully-featured chat interface built with React and Next.js...",
    category: "AI",
    thumbnail: "/images/portfolio/ai-chat-thumb.jpg",
    images: [
      "/images/portfolio/ai-chat-1.jpg",
      "/images/portfolio/ai-chat-2.jpg",
    ],
    technologies: ["React", "Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
    liveUrl: "https://example.com/ai-chat",
    githubUrl: "https://github.com/username/ai-chat",
    featured: true,
    status: "Completed",
    year: 2024,
    metrics: [
      { label: "Response Time", value: "< 2s" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    id: "proj-2",
    title: "DeFi Dashboard",
    description: "Real-time DeFi analytics dashboard with wallet integration",
    category: "Web3",
    thumbnail: "/images/portfolio/defi-dashboard-thumb.jpg",
    technologies: ["React", "Web3.js", "Ethers.js", "Chart.js", "Tailwind CSS"],
    liveUrl: "https://example.com/defi-dashboard",
    githubUrl: "https://github.com/username/defi-dashboard",
    featured: true,
    status: "Completed",
    year: 2023,
    metrics: [
      { label: "TVL Tracked", value: "$10M+" },
      { label: "Active Users", value: "5K+" },
    ],
  },
  // Add more projects...
];

// Explorations
export const explorations: Exploration[] = [
  {
    id: "explore-1",
    title: "Web3 Wallet Connector",
    description: "Interactive demo of multi-wallet connection with state management",
    category: "Web3",
    thumbnail: "/images/explorations/wallet-connector.jpg",
    demoUrl: "https://example.com/wallet-demo",
    codeUrl: "https://codesandbox.io/example",
    technologies: ["React", "Ethers.js", "Web3Modal"],
    featured: true,
    interactive: true,
    year: 2024,
    tags: ["wallet", "web3", "ethereum", "demo"],
  },
  {
    id: "explore-2",
    title: "AI Image Generator",
    description: "Real-time AI image generation using Stable Diffusion API",
    category: "AI",
    thumbnail: "/images/explorations/ai-image-gen.jpg",
    demoUrl: "https://example.com/ai-image-demo",
    technologies: ["React", "Next.js", "Stable Diffusion API"],
    featured: true,
    interactive: true,
    year: 2024,
    tags: ["ai", "image-generation", "ml", "demo"],
  },
  // Add more explorations...
];

// Photography Collection
export const photography: Photo[] = [
  {
    id: "photo-1",
    title: "Golden Gate Sunset",
    description: "Sunset over the Golden Gate Bridge",
    imageUrl: "/images/photography/golden-gate-full.jpg",
    thumbnailUrl: "/images/photography/golden-gate-thumb.jpg",
    category: "Landscape",
    tags: ["sunset", "bridge", "san francisco", "golden hour"],
    location: "San Francisco, CA",
    date: "2024-03-15",
    camera: "Sony A7III",
    settings: {
      aperture: "f/8",
      shutterSpeed: "1/125s",
      iso: 100,
      focalLength: "24mm",
    },
    featured: true,
    year: 2024,
  },
  {
    id: "photo-2",
    title: "Street Life",
    description: "Urban street photography",
    imageUrl: "/images/photography/street-life-full.jpg",
    thumbnailUrl: "/images/photography/street-life-thumb.jpg",
    category: "Street",
    tags: ["urban", "street", "black and white", "people"],
    location: "New York, NY",
    date: "2024-02-20",
    camera: "Fujifilm X-T4",
    settings: {
      aperture: "f/2.8",
      shutterSpeed: "1/250s",
      iso: 400,
      focalLength: "35mm",
    },
    featured: true,
    year: 2024,
  },
  // Add more photos...
];

// Skills
export const skills: Skill[] = [
  {
    id: "skill-1",
    name: "React",
    category: "Frontend",
    icon: "react",
    yearsOfExperience: 5,
  },
  {
    id: "skill-2",
    name: "TypeScript",
    category: "Frontend",
    icon: "typescript",
    yearsOfExperience: 4,
  },
  {
    id: "skill-3",
    name: "Next.js",
    category: "Frontend",
    icon: "nextjs",
    yearsOfExperience: 3,
  },
  {
    id: "skill-4",
    name: "Web3.js",
    category: "Web3",
    icon: "web3",
    yearsOfExperience: 2,
  },
  {
    id: "skill-5",
    name: "OpenAI API",
    category: "AI/ML",
    icon: "openai",
    yearsOfExperience: 2,
  },
  // Add more skills...
];

// Contact Information
export const contactInfo: ContactInfo = {
  email: "hello@joshuanatanielm.com",
  location: "San Francisco, CA",
  socialLinks: {
    github: "https://github.com/joshuanatanielm",
    linkedin: "https://linkedin.com/in/joshuanatanielm",
    twitter: "https://twitter.com/joshuanatanielm",
    instagram: "https://instagram.com/joshuanatanielm",
  },
  resumeUrl: "/documents/resume.pdf",
  calendlyUrl: "https://calendly.com/joshuanatanielm",
};

// Helper Functions
export const getFeaturedProjects = (): PortfolioProject[] => {
  return portfolioProjects.filter((project) => project.featured);
};

export const getFeaturedExplorations = (): Exploration[] => {
  return explorations.filter((exploration) => exploration.featured);
};

export const getFeaturedPhotos = (): Photo[] => {
  return photography.filter((photo) => photo.featured);
};

export const getProjectsByCategory = (category: PortfolioProject["category"]): PortfolioProject[] => {
  return portfolioProjects.filter((project) => project.category === category);
};

export const getPhotosByCategory = (category: Photo["category"]): Photo[] => {
  return photography.filter((photo) => photo.category === category);
};

export const getAllPhotoCategories = (): Photo["category"][] => {
  return Array.from(new Set(photography.map((photo) => photo.category)));
};
```

## Data Organization Notes

### Image Paths
- Store images in `public/images/` directory
- Structure:
  ```
  public/
  ├── images/
  │   ├── avatar.jpg
  │   ├── companies/
  │   │   └── company-logo.svg
  │   ├── portfolio/
  │   │   ├── project-thumb.jpg
  │   │   └── project-full.jpg
  │   ├── explorations/
  │   │   └── exploration-thumb.jpg
  │   └── photography/
  │       ├── photo-thumb.jpg
  │       └── photo-full.jpg
  ```

### Data Validation
Consider adding runtime validation using libraries like `zod`:
```typescript
import { z } from "zod";

const WorkExperienceSchema = z.object({
  id: z.string(),
  company: z.string(),
  role: z.string(),
  // ... etc
});
```

### Data Fetching (Future)
If you plan to fetch data from a CMS or API later, you can create data fetching functions:
```typescript
// lib/api.ts
export async function getWorkExperience(): Promise<WorkExperience[]> {
  // Fetch from API or return static data
  return workExperience;
}
```
