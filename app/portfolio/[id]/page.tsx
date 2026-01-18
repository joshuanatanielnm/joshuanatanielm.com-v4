"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { portfolioProjects } from "@/lib/data";
import { notFound } from "next/navigation";

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.id as string;

  const project = portfolioProjects.find((p) => p.id === projectId);
  const projectIndex = portfolioProjects.findIndex((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  const getProjectImage = (index: number) => {
    const images = [
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop",
    ];
    return images[index % images.length];
  };

  // Get next/prev projects
  const prevProject = projectIndex > 0 ? portfolioProjects[projectIndex - 1] : null;
  const nextProject = projectIndex < portfolioProjects.length - 1 ? portfolioProjects[projectIndex + 1] : null;

  return (
    <main className="min-h-screen py-24 px-6">
      {/* Background */}
      <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            All Projects
          </Link>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12"
        >
          <Image
            src={getProjectImage(projectIndex)}
            alt={project.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 text-sm font-semibold rounded-lg bg-[var(--accent)]/20 text-[var(--accent)]">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 text-sm font-semibold rounded-lg bg-[var(--accent-secondary)]/20 text-[var(--accent-secondary)]">
                Featured
              </span>
            )}
            <span className="flex items-center gap-1 px-3 py-1 text-sm rounded-lg border border-[var(--border)]">
              <Calendar className="h-3 w-3" />
              {project.year}
            </span>
            <span className={`flex items-center gap-1 px-3 py-1 text-sm rounded-lg ${
              project.status === "Completed"
                ? "bg-emerald-500/20 text-emerald-400"
                : "bg-amber-500/20 text-amber-400"
            }`}>
              <CheckCircle className="h-3 w-3" />
              {project.status}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            {project.title}
          </h1>

          <p className="text-xl text-[var(--muted)] leading-relaxed max-w-3xl">
            {project.longDescription || project.description}
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] text-[var(--background)] hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="h-4 w-4" />
              Visit Live Site
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              <Github className="h-4 w-4" />
              View Source Code
            </a>
          )}
        </motion.div>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm mb-12"
          >
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">{metric.value}</div>
                <div className="text-[var(--muted)]">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-medium rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 gap-6 pt-12 border-t border-[var(--border)]"
        >
          {prevProject ? (
            <Link
              href={`/portfolio/${prevProject.id}`}
              className="group p-6 rounded-xl border border-[var(--border)] hover:border-[var(--accent)]/50 transition-colors"
            >
              <span className="text-sm text-[var(--muted)]">← Previous</span>
              <h3 className="font-semibold group-hover:text-[var(--accent)] transition-colors">
                {prevProject.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}
          {nextProject && (
            <Link
              href={`/portfolio/${nextProject.id}`}
              className="group p-6 rounded-xl border border-[var(--border)] hover:border-[var(--accent)]/50 transition-colors text-right"
            >
              <span className="text-sm text-[var(--muted)]">Next →</span>
              <h3 className="font-semibold group-hover:text-[var(--accent)] transition-colors">
                {nextProject.title}
              </h3>
            </Link>
          )}
        </motion.div>
      </div>
    </main>
  );
}
