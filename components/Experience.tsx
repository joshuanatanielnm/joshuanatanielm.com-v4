"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";
import { workExperience } from "@/lib/data";

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="relative py-32 px-6">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--accent)]/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[var(--accent)] border border-[var(--accent)]/30 rounded-full mb-4">
                Career
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                <span className="font-serif italic text-[var(--muted)]">Where I've</span>
                <br />
                <span className="gradient-text">Worked</span>
              </h2>
            </div>
            <Link
              href="/experience"
              className="group inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:gap-3 transition-all"
            >
              View Full Experience
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent-secondary)] to-transparent" />

          <div className="space-y-12">
            {workExperience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "" : "md:direction-rtl"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 -translate-x-1/2 rounded-full bg-[var(--accent)] border-4 border-[var(--background)] shadow-lg shadow-[var(--accent)]/30" />

                {/* Content */}
                <div className={`${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"} pl-8 md:pl-0`}>
                  <div className="group p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm hover:border-[var(--accent)]/50 transition-all duration-300">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-secondary)]/20 flex items-center justify-center">
                        <Briefcase className="h-5 w-5 text-[var(--accent)]" />
                      </div>
                      <div className={index % 2 === 0 ? "md:text-right" : ""}>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-[var(--muted)]">
                          <span className="font-medium">{exp.company}</span>
                          {exp.website && (
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-[var(--accent)] transition-colors"
                            >
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className={`flex flex-wrap gap-4 text-sm text-[var(--muted)] mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.startDate} - {exp.endDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-[var(--muted)] mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        {exp.achievements.slice(0, 3).map((achievement, idx) => (
                          <li key={idx} className="text-sm text-[var(--muted)] flex items-start gap-2">
                            <span className="text-[var(--accent)] mt-1">→</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {exp.metrics && exp.metrics.length > 0 && (
                      <div className={`grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-[var(--border)]`}>
                        {exp.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-2xl font-bold gradient-text">{metric.value}</div>
                            <div className="text-xs text-[var(--muted)]">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
