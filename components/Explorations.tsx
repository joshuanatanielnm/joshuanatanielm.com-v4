"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ExternalLink, Code2, Play, Sparkles, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { explorations } from "@/lib/data";

export function Explorations() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Placeholder images for explorations
  const getExplorationImage = (index: number) => {
    const images = [
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
    ];
    return images[index % images.length];
  };

  return (
    <section id="explorations" className="relative py-32 px-6 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--accent-secondary)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--accent)]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[var(--accent-secondary)] border border-[var(--accent-secondary)]/30 rounded-full mb-4">
            Laboratory
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="font-serif italic text-[var(--muted)]">Creative</span>
            <br />
            <span className="gradient-text">Explorations</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--muted)] max-w-xl">
            Experimental projects and interactive demos where I push the boundaries of what's possible on the web.
          </p>
          <Link
            href="/explorations"
            className="group inline-flex items-center gap-2 text-[var(--accent-secondary)] font-medium hover:gap-3 transition-all mt-4"
          >
            View All Explorations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {explorations.map((exploration, index) => (
            <motion.div
              key={exploration.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm overflow-hidden hover:border-[var(--accent-secondary)]/50 transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
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
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent-secondary)] transition-colors">
                    {exploration.title}
                  </h3>
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
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exploration.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs text-[var(--muted)]">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    {exploration.demoUrl && (
                      <a
                        href={exploration.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] text-[var(--background)] hover:opacity-90 transition-opacity"
                      >
                        <Sparkles className="h-4 w-4" />
                        Try It
                      </a>
                    )}
                    {exploration.codeUrl && (
                      <a
                        href={exploration.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                      >
                        <Code2 className="h-4 w-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
