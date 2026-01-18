"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Twitter, Instagram, Download, Calendar, ArrowUpRight, Sparkles } from "lucide-react";
import { contactInfo, personalInfo } from "@/lib/data";

const socialIcons: Record<string, React.ReactNode> = {
  github: <Github className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
  instagram: <Instagram className="h-5 w-5" />,
};

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--surface)]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[var(--accent-secondary)]/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[var(--accent)] border border-[var(--accent)]/30 rounded-full mb-4">
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="font-serif italic text-[var(--muted)]">Let's work</span>
            <br />
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto mb-12">
            Have a project in mind or just want to chat? I'm always open to discussing new opportunities and ideas.
          </p>

          {/* Email CTA */}
          <motion.a
            href={`mailto:${contactInfo.email}`}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="group inline-flex items-center gap-3 px-8 py-5 rounded-2xl border border-[var(--border)] bg-[var(--background)]/50 backdrop-blur-sm hover:border-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all duration-300 mb-12"
          >
            <div className="p-3 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-secondary)]/20">
              <Mail className="h-6 w-6 text-[var(--accent)]" />
            </div>
            <div className="text-left">
              <p className="text-sm text-[var(--muted)]">Email me at</p>
              <p className="text-lg font-semibold group-hover:text-[var(--accent)] transition-colors">
                {contactInfo.email}
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </motion.a>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--background)]/50 backdrop-blur-sm">
              <MapPin className="h-6 w-6 text-[var(--accent)] mb-4" />
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-[var(--muted)]">{contactInfo.location}</p>
            </div>
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--background)]/50 backdrop-blur-sm">
              <Sparkles className="h-6 w-6 text-[var(--accent-secondary)] mb-4" />
              <h3 className="font-semibold mb-1">Status</h3>
              <p className="text-[var(--muted)]">
                {personalInfo.availableForWork ? "Available for work" : "Open to opportunities"}
              </p>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {Object.entries(contactInfo.socialLinks).map(([platform, url]) => {
              if (!url || !socialIcons[platform]) return null;

              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]/50 backdrop-blur-sm hover:border-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all duration-300"
                  aria-label={platform}
                >
                  <div className="group-hover:text-[var(--accent)] group-hover:scale-110 transition-all">
                    {socialIcons[platform]}
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {contactInfo.resumeUrl && (
              <a
                href={contactInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] text-[var(--background)] hover:opacity-90 transition-opacity"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            )}
            {contactInfo.calendlyUrl && (
              <a
                href={contactInfo.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                <Calendar className="h-4 w-4" />
                Schedule a Call
              </a>
            )}
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-24 pt-8 border-t border-[var(--border)] text-center"
        >
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
