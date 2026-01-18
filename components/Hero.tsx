"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Mail, Sparkles } from "lucide-react";
import { personalInfo, contactInfo } from "@/lib/data";

export function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = personalInfo.tagline;
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm text-[var(--muted)]">Available for new opportunities</span>
          </motion.div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="block font-serif italic text-[var(--muted)]">Hello, I'm</span>
              <span className="block mt-2 gradient-text">{personalInfo.name}</span>
            </h1>
          </div>

          {/* Tagline with typing effect */}
          <div className="h-16 sm:h-20 flex items-center justify-center">
            <p className="text-xl sm:text-2xl md:text-3xl text-[var(--muted)] font-light tracking-wide">
              {displayedText}
              {isTyping && (
                <span className="inline-block w-[3px] h-7 bg-[var(--accent)] ml-1 animate-pulse" />
              )}
            </p>
          </div>

          {/* Bio */}
          <p className="text-lg sm:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            {contactInfo.socialLinks.github && (
              <a
                href={contactInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 group-hover:text-[var(--accent)] transition-colors" />
              </a>
            )}
            {contactInfo.socialLinks.linkedin && (
              <a
                href={contactInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 group-hover:text-[var(--accent)] transition-colors" />
              </a>
            )}
            {contactInfo.socialLinks.twitter && (
              <a
                href={contactInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 group-hover:text-[var(--accent)] transition-colors" />
              </a>
            )}
            <a
              href={`mailto:${contactInfo.email}`}
              className="group p-3 rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 group-hover:text-[var(--accent)] transition-colors" />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={() => scrollToSection("portfolio")}
              className="group relative px-8 py-4 rounded-full font-semibold text-[var(--background)] overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)]" />
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Explore My Work
              </span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 rounded-full font-semibold border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
            >
              Get in Touch
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("experience")}
            className="flex flex-col items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-current"
              />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
