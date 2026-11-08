"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  q: string;
  a: string;
};

export default function Accordion({
  items,
  light = false,
  defaultOpen = 0,
}: {
  items: AccordionItem[];
  light?: boolean;
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className={cn("border-t", light ? "border-ink/15" : "border-white/12")}>
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div
            key={item.q}
            className={cn(
              "border-b",
              light ? "border-ink/15" : "border-white/12",
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span
                className={cn(
                  "text-[15px] font-medium transition-colors duration-300 md:text-lg",
                  isOpen
                    ? "text-ember"
                    : light
                      ? "text-ink group-hover:text-ember"
                      : "text-bone group-hover:text-ember",
                )}
              >
                {item.q}
              </span>
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border transition-all duration-300",
                  isOpen
                    ? "rotate-45 border-ember bg-ember text-bone"
                    : light
                      ? "border-[var(--line-dark)] text-ink/55 group-hover:border-ember group-hover:text-ember"
                      : "border-[var(--line-light)] text-bone/60 group-hover:border-ember group-hover:text-ember",
                )}
              >
                <Plus className="h-3.5 w-3.5" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className={cn(
                      "max-w-2xl pb-7 pr-12 text-sm leading-relaxed",
                      light ? "text-ink/60" : "text-bone/55",
                    )}
                  >
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
