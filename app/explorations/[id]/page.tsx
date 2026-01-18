"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Code2, Play, Sparkles, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { explorations } from "@/lib/data";
import { notFound } from "next/navigation";

export default function ExplorationDetailPage() {
  const params = useParams();
  const explorationId = params.id as string;

  const exploration = explorations.find((e) => e.id === explorationId);
  const explorationIndex = explorations.findIndex((e) => e.id === explorationId);

  if (!exploration) {
    notFound();
  }

  const getExplorationImage = (index: number) => {
    const images = [
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=800&fit=crop",
    ];
    return images[index % images.length];
  };

  // Get next/prev explorations
  const prevExploration = explorationIndex > 0 ? explorations[explorationIndex - 1] : null;
  const nextExploration = explorationIndex < explorations.length - 1 ? explorations[explorationIndex + 1] : null;

  return (
    <main className="min-h-screen py-24 px-6">
      {/* Background */}
      <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="fixed top-1/4 right-0 w-96 h-96 bg-[var(--accent-secondary)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/explorations"
            className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            All Explorations
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
            src={getExplorationImage(explorationIndex)}
            alt={exploration.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />

          {/* Floating badges */}
          <div className="absolute top-6 left-6 flex gap-2">
            <span className="flex items-center gap-1 px-3 py-1.5 text-sm font-semibold rounded-lg bg-[var(--background)]/80 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-[var(--accent-secondary)]" />
              {exploration.category}
            </span>
            {exploration.interactive && (
              <span className="flex items-center gap-1 px-3 py-1.5 text-sm font-semibold rounded-lg bg-emerald-500/20 text-emerald-400 backdrop-blur-sm">
                <Play className="h-4 w-4" />
                Interactive Demo
              </span>
            )}
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center gap-1 px-3 py-1 text-sm rounded-lg border border-[var(--border)]">
              <Calendar className="h-3 w-3" />
              {exploration.year}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            {exploration.title}
          </h1>

          <p className="text-xl text-[var(--muted)] leading-relaxed max-w-3xl">
            {exploration.description}
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {exploration.demoUrl && (
            <a
              href={exploration.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] text-[var(--background)] hover:opacity-90 transition-opacity"
            >
              <Play className="h-4 w-4" />
              Try the Demo
            </a>
          )}
          {exploration.codeUrl && (
            <a
              href={exploration.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              <Code2 className="h-4 w-4" />
              View Source Code
            </a>
          )}
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">
            Built With
          </h2>
          <div className="flex flex-wrap gap-3">
            {exploration.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-medium rounded-xl bg-[var(--accent-secondary)]/10 text-[var(--accent-secondary)] border border-[var(--accent-secondary)]/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">
            Tags
          </h2>
          <div className="flex flex-wrap gap-2">
            {exploration.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm rounded-lg border border-[var(--border)] text-[var(--muted)]"
              >
                #{tag}
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
          {prevExploration ? (
            <Link
              href={`/explorations/${prevExploration.id}`}
              className="group p-6 rounded-xl border border-[var(--border)] hover:border-[var(--accent-secondary)]/50 transition-colors"
            >
              <span className="text-sm text-[var(--muted)]">← Previous</span>
              <h3 className="font-semibold group-hover:text-[var(--accent-secondary)] transition-colors">
                {prevExploration.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}
          {nextExploration && (
            <Link
              href={`/explorations/${nextExploration.id}`}
              className="group p-6 rounded-xl border border-[var(--border)] hover:border-[var(--accent-secondary)]/50 transition-colors text-right"
            >
              <span className="text-sm text-[var(--muted)]">Next →</span>
              <h3 className="font-semibold group-hover:text-[var(--accent-secondary)] transition-colors">
                {nextExploration.title}
              </h3>
            </Link>
          )}
        </motion.div>
      </div>
    </main>
  );
}
