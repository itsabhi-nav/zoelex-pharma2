"use client";

import { MotionConfig } from "framer-motion";

/**
 * Global motion policy. Framer Motion disables transform/layout animations
 * for visitors who prefer reduced motion while keeping opacity transitions,
 * which avoids hydration mismatches from per-component media queries.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
