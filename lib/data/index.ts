// Re-export all data from individual files
export { personalInfo } from "./personalInfo";
export { workExperience } from "./workExperience";
export { portfolioProjects } from "./portfolioProjects";
export { explorations } from "./explorations";
export { photography } from "./photography";
export { skills } from "./skills";
export { contactInfo } from "./contactInfo";

// Re-export types
export type { PersonalInfo } from "@/types";
export type { WorkExperience } from "@/types";
export type { PortfolioProject } from "@/types";
export type { Exploration } from "@/types";
export type { Photo } from "@/types";
export type { Skill } from "@/types";
export type { ContactInfo } from "@/types";

// Helper Functions
import { portfolioProjects } from "./portfolioProjects";
import { explorations } from "./explorations";
import { photography } from "./photography";
import type { PortfolioProject, Exploration, Photo } from "@/types";

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
