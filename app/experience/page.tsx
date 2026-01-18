"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, ExternalLink, Briefcase, Building2 } from "lucide-react";
import Link from "next/link";
import { workExperience } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen py-24 px-6">
      {/* Background */}
      <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="fixed top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[var(--accent)]/10 to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/#experience"
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
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[var(--accent)] border border-[var(--accent)]/30 rounded-full mb-4">
            <Briefcase className="h-3 w-3" />
            Career Journey
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="font-serif italic text-[var(--muted)]">Work</span>{" "}
            <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-lg text-[var(--muted)] max-w-2xl">
            A detailed look at my professional journey, from building AI products to pioneering Web3 interfaces.
          </p>
        </motion.div>

        {/* Experience list */}
        <div className="space-y-8">
          {workExperience.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm hover:border-[var(--accent)]/30 transition-all duration-300">
                {/* Company header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-secondary)]/20 flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-6 w-6 text-[var(--accent)]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-1">{exp.role}</h2>
                      <div className="flex items-center gap-2 text-[var(--muted)]">
                        <span className="font-medium text-[var(--foreground)]">{exp.company}</span>
                        {exp.website && (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[var(--accent)] transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 text-sm text-[var(--muted)]">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {exp.startDate} — {exp.endDate}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[var(--muted)] leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Achievements */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">
                      Key Achievements
                    </h3>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[var(--foreground)]">
                          <span className="text-[var(--accent)] mt-1">→</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--border)]">
                    {exp.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-3xl font-bold gradient-text">{metric.value}</div>
                        <div className="text-sm text-[var(--muted)] mt-1">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
