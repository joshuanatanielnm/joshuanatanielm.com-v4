"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#portfolio" },
  { label: "Lab", href: "#explorations" },
  { label: "Photos", href: "#photography" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["hero", ...navItems.map((item) => item.href.substring(1))];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "py-3"
            : "py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={cn(
            "flex items-center justify-between transition-all duration-500",
            isScrolled
              ? "px-6 py-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-xl shadow-lg shadow-black/5"
              : ""
          )}>
            <button
              onClick={() => handleNavClick("#hero")}
              className="text-lg font-bold tracking-tight hover:text-[var(--accent)] transition-colors"
            >
              JN<span className="text-[var(--accent)]">.</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "text-[var(--foreground)]"
                        : "text-[var(--muted)] hover:text-[var(--foreground)]"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                );
              })}
              <div className="ml-4 pl-4 border-l border-[var(--border)]">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-[var(--surface-elevated)] transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-[var(--background)]/95 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="relative pt-24 px-6">
              <div className="space-y-2">
                {navItems.map((item, index) => {
                  const sectionId = item.href.substring(1);
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.button
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        "w-full text-left px-4 py-4 text-2xl font-medium rounded-xl transition-colors",
                        isActive
                          ? "text-[var(--foreground)] bg-[var(--accent)]/10"
                          : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-elevated)]"
                      )}
                    >
                      {item.label}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
