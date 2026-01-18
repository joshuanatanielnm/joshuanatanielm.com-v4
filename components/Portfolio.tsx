"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { portfolioProjects, getProjectsByCategory } from "@/lib/data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/Dialog";
import type { PortfolioProject } from "@/types";

export function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [filter, setFilter] = useState<PortfolioProject["category"] | "All">("All");

  const categories: (PortfolioProject["category"] | "All")[] = [
    "All",
    "Frontend",
    "AI",
    "Web3",
  ];

  const filteredProjects =
    filter === "All"
      ? portfolioProjects
      : getProjectsByCategory(filter);

  // Placeholder images for projects
  const getProjectImage = (index: number) => {
    const images = [
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    ];
    return images[index % images.length];
  };

  return (
    <section id="portfolio" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--surface)]" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[var(--accent)] border border-[var(--accent)]/30 rounded-full mb-4">
            Portfolio
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="font-serif italic text-[var(--muted)]">Selected</span>
              <br />
              <span className="gradient-text">Projects</span>
            </h2>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:gap-3 transition-all mt-4"
            >
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>

            {/* Filter tabs */}
            <div className="flex gap-2 p-1 rounded-xl border border-[var(--border)] bg-[var(--background)]/50 backdrop-blur-sm">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    filter === category
                      ? "bg-[var(--accent)] text-[var(--background)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative ${
                  index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div
                  onClick={() => setSelectedProject(project)}
                  className={`relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] cursor-pointer transition-all duration-500 hover:border-[var(--accent)]/50 hover:shadow-2xl hover:shadow-[var(--accent)]/10 ${
                    index === 0 ? "h-full min-h-[500px]" : "h-[320px]"
                  }`}
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={getProjectImage(index)}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Category & Status */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 text-xs font-semibold rounded-md bg-[var(--accent)]/20 text-[var(--accent)]">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2 py-1 text-xs font-semibold rounded-md bg-[var(--accent-secondary)]/20 text-[var(--accent-secondary)]">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className={`font-bold mb-2 ${index === 0 ? "text-3xl" : "text-xl"}`}>
                      {project.title}
                    </h3>

                    <p className={`text-[var(--muted)] mb-4 leading-relaxed ${
                      index === 0 ? "text-base" : "text-sm line-clamp-2"
                    }`}>
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, index === 0 ? 5 : 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    {index === 0 && project.metrics && (
                      <div className="flex gap-6 mb-4">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx}>
                            <div className="text-2xl font-bold gradient-text">{metric.value}</div>
                            <div className="text-xs text-[var(--muted)]">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1 text-sm font-medium text-[var(--accent)] hover:underline"
                        >
                          Live Demo <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[var(--background)] border-[var(--border)]">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold">{selectedProject.title}</DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              <div className="relative w-full h-72 rounded-xl overflow-hidden">
                <Image
                  src={getProjectImage(portfolioProjects.indexOf(selectedProject))}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              <p className="text-lg text-[var(--muted)] leading-relaxed">
                {selectedProject.longDescription || selectedProject.description}
              </p>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.metrics && selectedProject.metrics.length > 0 && (
                <div className="grid grid-cols-3 gap-4 p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                  {selectedProject.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-3xl font-bold gradient-text">{metric.value}</div>
                      <div className="text-sm text-[var(--muted)] mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex gap-4 pt-4">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] text-[var(--background)] hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit Live Site
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
