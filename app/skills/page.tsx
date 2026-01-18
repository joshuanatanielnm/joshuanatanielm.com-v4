"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Code2, Brain, Wallet, Server, Wrench, Palette, Clock } from "lucide-react";
import Link from "next/link";
import { skills } from "@/lib/data";

const categoryData: Record<string, { icon: React.ReactNode; description: string; gradient: string; accent: string }> = {
  Frontend: {
    icon: <Code2 className="h-6 w-6" />,
    description: "Building beautiful, performant user interfaces with modern frameworks and best practices.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    accent: "text-cyan-400 border-cyan-400/30",
  },
  "AI/ML": {
    icon: <Brain className="h-6 w-6" />,
    description: "Integrating AI capabilities into applications, from LLM APIs to prompt engineering.",
    gradient: "from-purple-500/20 to-pink-500/20",
    accent: "text-purple-400 border-purple-400/30",
  },
  Web3: {
    icon: <Wallet className="h-6 w-6" />,
    description: "Creating decentralized applications and wallet integrations for the blockchain ecosystem.",
    gradient: "from-green-500/20 to-emerald-500/20",
    accent: "text-emerald-400 border-emerald-400/30",
  },
  Backend: {
    icon: <Server className="h-6 w-6" />,
    description: "Building robust APIs and server-side logic to power applications at scale.",
    gradient: "from-orange-500/20 to-amber-500/20",
    accent: "text-orange-400 border-orange-400/30",
  },
  Tools: {
    icon: <Wrench className="h-6 w-6" />,
    description: "Leveraging development tools and workflows for efficient, quality-focused development.",
    gradient: "from-rose-500/20 to-red-500/20",
    accent: "text-rose-400 border-rose-400/30",
  },
  Design: {
    icon: <Palette className="h-6 w-6" />,
    description: "Creating user-centered designs and translating them into pixel-perfect implementations.",
    gradient: "from-violet-500/20 to-purple-500/20",
    accent: "text-violet-400 border-violet-400/30",
  },
};

export default function SkillsPage() {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const totalYears = Math.max(...skills.map((s) => s.yearsOfExperience || 0));

  return (
    <main className="min-h-screen py-24 px-6">
      {/* Background */}
      <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-80 h-80 bg-[var(--accent-secondary)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/#skills"
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
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[var(--accent)] border border-[var(--accent)]/30 rounded-full mb-4">
            Technical Skills
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="font-serif italic text-[var(--muted)]">Tools &</span>{" "}
            <span className="gradient-text">Technologies</span>
          </h1>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I use to build
            exceptional digital experiences.
          </p>
        </motion.div>

        {/* Stats overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm text-center">
            <div className="text-4xl font-bold gradient-text mb-2">{skills.length}</div>
            <div className="text-sm text-[var(--muted)]">Total Skills</div>
          </div>
          <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm text-center">
            <div className="text-4xl font-bold gradient-text mb-2">{Object.keys(skillsByCategory).length}</div>
            <div className="text-sm text-[var(--muted)]">Categories</div>
          </div>
          <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm text-center">
            <div className="text-4xl font-bold gradient-text mb-2">{totalYears}+</div>
            <div className="text-sm text-[var(--muted)]">Years Coding</div>
          </div>
          <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm text-center">
            <div className="text-4xl font-bold gradient-text mb-2">∞</div>
            <div className="text-sm text-[var(--muted)]">Always Learning</div>
          </div>
        </motion.div>

        {/* Skills by category */}
        <div className="space-y-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => {
            const data = categoryData[category];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + categoryIndex * 0.1 }}
              >
                <div className={`p-8 rounded-2xl border border-[var(--border)] bg-gradient-to-br ${data?.gradient || ""}`}>
                  {/* Category header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-xl border ${data?.accent || ""} bg-[var(--background)]/50`}>
                      {data?.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">{category}</h2>
                      <p className="text-[var(--muted)]">{data?.description}</p>
                    </div>
                    <div className="text-sm text-[var(--muted)]">
                      {categorySkills.length} skills
                    </div>
                  </div>

                  {/* Skills grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 + skillIndex * 0.05 }}
                        className={`p-4 rounded-xl border ${data?.accent || "border-[var(--border)]"} bg-[var(--background)]/80 backdrop-blur-sm`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold">{skill.name}</span>
                          {skill.yearsOfExperience && (
                            <span className="flex items-center gap-1 text-sm text-[var(--muted)]">
                              <Clock className="h-3 w-3" />
                              {skill.yearsOfExperience}y
                            </span>
                          )}
                        </div>
                        {skill.yearsOfExperience && (
                          <div className="mt-3">
                            <div className="h-1.5 rounded-full bg-[var(--surface-elevated)] overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${(skill.yearsOfExperience / totalYears) * 100}%` }}
                                transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                                className={`h-full rounded-full ${
                                  data?.accent?.includes("cyan") ? "bg-cyan-400" :
                                  data?.accent?.includes("purple") ? "bg-purple-400" :
                                  data?.accent?.includes("emerald") ? "bg-emerald-400" :
                                  data?.accent?.includes("orange") ? "bg-orange-400" :
                                  data?.accent?.includes("rose") ? "bg-rose-400" :
                                  data?.accent?.includes("violet") ? "bg-violet-400" :
                                  "bg-[var(--accent)]"
                                }`}
                              />
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
