"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.028 },
  },
};

const word = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/**
 * Word-by-word reveal that stays visible once triggered. Unlike a
 * scroll-linked opacity map, the text does not fade again when the visitor
 * scrolls back up.
 *
 * The animation is driven by the paragraph (not the clipped word spans):
 * observing a child that is fully clipped by `overflow-hidden` reports a
 * zero intersection ratio and would never trigger.
 */
export function WordReveal({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <motion.p
      className={cn(className)}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {words.map((item, index) => (
        <span key={`${item}-${index}`}>
          <span className="mr-[0.24em] inline-block overflow-hidden align-bottom">
            <motion.span className="inline-block" variants={word}>
              {item}
            </motion.span>
          </span>{" "}
        </span>
      ))}
    </motion.p>
  );
}
