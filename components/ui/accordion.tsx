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
    <div className="border-t border-[var(--line)]">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} className="border-b border-[var(--line)]">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="group flex w-full items-start justify-between gap-6 py-5 text-left md:py-6"
            >
              <span className="flex items-baseline gap-4">
                <span className="mono-micro shrink-0 text-ember">
                  {String(index + 1).padStart(2, "0")}
                </span>
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
              </span>
              <span
                className={cn(
                  "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color,color] duration-300",
                  isOpen
                    ? "rotate-45 border-ember bg-ember text-ink"
                    : "border-[var(--line-strong)] text-[color:var(--color-mute)] group-hover:border-ember group-hover:text-ember",
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
                      "max-w-2xl pb-7 pl-10 pr-12 text-sm leading-relaxed",
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
