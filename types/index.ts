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
