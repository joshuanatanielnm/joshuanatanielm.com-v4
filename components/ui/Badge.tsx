import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "accent";
  children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center rounded-lg px-3 py-1 text-xs font-medium transition-colors";

    const variants = {
      default: "bg-[var(--foreground)] text-[var(--background)]",
      secondary: "bg-[var(--surface-elevated)] text-[var(--foreground)]",
      outline: "border border-[var(--border)] bg-transparent",
      accent: "bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20",
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
