"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Standard scroll-reveal used across the site: fade + 12px rise, as
 * specified in design.md §3.5. Honours prefers-reduced-motion by skipping
 * the transform entirely (fade only, no motion).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  y = 12,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
  y?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const MotionTag = as === "li" ? motion.li : motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
