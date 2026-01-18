"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Code2, Brain, Wallet, Server, Wrench, Palette, ArrowRight } from "lucide-react";
import Link from "next/link";

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code2 className="h-5 w-5" />,
  "AI/ML": <Brain className="h-5 w-5" />,
  Web3: <Wallet className="h-5 w-5" />,
  Backend: <Server className="h-5 w-5" />,
  Tools: <Wrench className="h-5 w-5" />,
  Design: <Palette className="h-5 w-5" />,
};

const categoryGradients: Record<string, string> = {
  Frontend: "from-blue-500/20 to-cyan-500/20",
  "AI/ML": "from-purple-500/20 to-pink-500/20",
  Web3: "from-green-500/20 to-emerald-500/20",
  Backend: "from-orange-500/20 to-amber-500/20",
  Tools: "from-rose-500/20 to-red-500/20",
  Design: "from-violet-500/20 to-purple-500/20",
};

const categoryAccents: Record<string, string> = {
  Frontend: "text-cyan-400 border-cyan-400/30",
  "AI/ML": "text-purple-400 border-purple-400/30",
  Web3: "text-emerald-400 border-emerald-400/30",
  Backend: "text-orange-400 border-orange-400/30",
  Tools: "text-rose-400 border-rose-400/30",
  Design: "text-violet-400 border-violet-400/30",
};

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[var(--accent)] border border-[var(--accent)]/30 rounded-full mb-4">
            Skills
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="font-serif italic text-[var(--muted)]">Tools &</span>
            <br />
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--muted)] max-w-2xl mx-auto">
            A curated collection of technologies I use to bring ideas to life.
          </p>
          <Link
            href="/skills"
            className="group inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:gap-3 transition-all mt-4"
          >
            View All Skills
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className={`relative p-6 rounded-2xl border border-[var(--border)] bg-gradient-to-br ${categoryGradients[category]} backdrop-blur-sm hover:border-[var(--accent)]/30 transition-all duration-300`}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-xl border ${categoryAccents[category]} bg-[var(--background)]/50`}>
                    {categoryIcons[category]}
                  </div>
                  <h3 className="text-xl font-bold">{category}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1.5 text-sm font-medium rounded-lg border ${categoryAccents[category]} bg-[var(--background)]/80 backdrop-blur-sm cursor-default`}
                    >
                      {skill.name}
                      {skill.yearsOfExperience && (
                        <span className="ml-1.5 text-xs opacity-60">
                          {skill.yearsOfExperience}y
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
