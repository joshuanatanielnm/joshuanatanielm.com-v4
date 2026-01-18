"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Code2, Play, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { explorations } from "@/lib/data";

export default function ExplorationsPage() {
  const getExplorationImage = (index: number) => {
    const images = [
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
    ];
    return images[index % images.length];
  };

  return (
    <main className="min-h-screen py-24 px-6">
      {/* Background */}
      <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="fixed top-1/4 right-0 w-96 h-96 bg-[var(--accent-secondary)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-80 h-80 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/#explorations"
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
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[var(--accent-secondary)] border border-[var(--accent-secondary)]/30 rounded-full mb-4">
            <Sparkles className="h-3 w-3" />
            Laboratory
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="font-serif italic text-[var(--muted)]">Creative</span>{" "}
            <span className="gradient-text">Explorations</span>
          </h1>
          <p className="text-lg text-[var(--muted)] max-w-2xl">
            Experimental projects, interactive demos, and creative coding adventures.
            This is where I push the boundaries of what's possible on the web.
          </p>
        </motion.div>

        {/* Explorations grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {explorations.map((exploration, index) => (
            <motion.div
              key={exploration.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/explorations/${exploration.id}`} className="group block h-full">
                <div className="relative h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm overflow-hidden hover:border-[var(--accent-secondary)]/50 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={getExplorationImage(index)}
                      alt={exploration.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-md bg-[var(--background)]/80 backdrop-blur-sm">
                        <Zap className="h-3 w-3 text-[var(--accent)]" />
                        {exploration.category}
                      </span>
                      {exploration.interactive && (
                        <span className="flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-md bg-emerald-500/20 text-emerald-400">
                          <Play className="h-3 w-3" />
                          Interactive
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2 group-hover:text-[var(--accent-secondary)] transition-colors">
                      {exploration.title}
                    </h2>
                    <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
                      {exploration.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exploration.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md border border-[var(--border)] bg-[var(--background)]/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exploration.tags.map((tag) => (
                        <span key={tag} className="text-xs text-[var(--muted)]">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                      <span className="text-sm text-[var(--accent-secondary)] font-medium flex items-center gap-1">
                        View Details <ArrowUpRight className="h-4 w-4" />
                      </span>
                      <span className="text-xs text-[var(--muted)]">{exploration.year}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
