"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { portfolioProjects, getProjectsByCategory } from "@/lib/data";
import type { PortfolioProject } from "@/types";

export default function PortfolioPage() {
  const [filter, setFilter] = useState<PortfolioProject["category"] | "All">("All");

  const categories: (PortfolioProject["category"] | "All")[] = [
    "All",
    "Frontend",
    "AI",
    "Web3",
    "Full Stack",
  ];

  const filteredProjects =
    filter === "All" ? portfolioProjects : getProjectsByCategory(filter);

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
    <main className="min-h-screen py-24 px-6">
      {/* Background */}
      <div className="fixed inset-0 bg-[var(--surface)]" />
      <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[var(--accent)] border border-[var(--accent)]/30 rounded-full mb-4">
            Portfolio
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
                <span className="font-serif italic text-[var(--muted)]">All</span>{" "}
                <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-lg text-[var(--muted)] max-w-xl">
                A complete collection of my work across frontend, AI, and Web3.
              </p>
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    filter === category
                      ? "bg-[var(--accent)] text-[var(--background)]"
                      : "border border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/portfolio/${project.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] hover:border-[var(--accent)]/50 transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={getProjectImage(index)}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 text-xs font-semibold rounded-md bg-[var(--accent)]/20 text-[var(--accent)]">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="px-2 py-1 text-xs font-semibold rounded-md bg-[var(--accent-secondary)]/20 text-[var(--accent-secondary)]">
                            Featured
                          </span>
                        )}
                        <span className="px-2 py-1 text-xs font-medium rounded-md border border-[var(--border)]">
                          {project.year}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-[var(--muted)] line-clamp-2 mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-md border border-[var(--border)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[var(--accent)] font-medium flex items-center gap-1">
                          View Project <ArrowUpRight className="h-4 w-4" />
                        </span>
                        <div className="flex gap-2">
                          {project.githubUrl && (
                            <span className="p-2 rounded-lg border border-[var(--border)]">
                              <Github className="h-4 w-4" />
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
