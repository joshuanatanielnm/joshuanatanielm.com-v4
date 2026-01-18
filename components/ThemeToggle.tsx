"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = stored || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  if (!mounted) {
    return (
      <button className="relative p-2 rounded-lg hover:bg-[var(--surface-elevated)] transition-colors">
        <Sun className="h-5 w-5" />
      </button>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg hover:bg-[var(--surface-elevated)] transition-colors"
      aria-label="Toggle theme"
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-[var(--accent)]" />
        ) : (
          <Moon className="h-5 w-5 text-[var(--accent-secondary)]" />
        )}
      </motion.div>
    </motion.button>
  );
}
