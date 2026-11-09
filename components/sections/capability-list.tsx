"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { capabilities } from "@/lib/site";
import { cn } from "@/lib/utils";

const images = [
  "/images/cleanroom.jpg",
  "/images/product-amber.jpg",
  "/images/lab-team.jpg",
  "/images/lab-bench.jpg",
  "/images/liquid-splash.jpg",
  "/images/cargo-aerial.jpg",
];

const imageClass = [
  "img-duo",
  "img-warm",
  "img-warm",
  "img-warm",
  "img-warm",
  "img-duo",
];

export function CapabilityList() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-7">
        <div className="border-t border-[var(--line)]">
          {capabilities.map((item, index) => {
            const isActive = active === index;
            return (
              <button
                key={item.title}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                aria-pressed={isActive}
                className="group relative block w-full border-b border-[var(--line)] py-5 text-left md:py-6"
              >
                <div className="flex items-start gap-4 md:gap-5">
                  <span
                    className={cn(
                      "mono-micro mt-1.5 shrink-0 transition-colors duration-300",
                      isActive ? "text-ember" : "text-ink/30",
                    )}
                  >
                    {item.index}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-5">
                      <h3
                        className={cn(
                          "text-[clamp(1.25rem,2.4vw,1.9rem)] font-medium leading-tight transition-colors duration-300",
                          isActive ? "text-ember" : "text-ink",
                        )}
                      >
                        {item.title}
                      </h3>
                      <ArrowUpRight
                        className={cn(
                          "h-4 w-4 shrink-0 transition-transform duration-300",
                          isActive
                            ? "-translate-y-0.5 translate-x-0.5 text-ember"
                            : "text-ink/20",
                        )}
                      />
                    </div>
                    <p className="mt-2 max-w-md text-[13px] leading-relaxed text-ink/55">
                      {item.copy}
                    </p>
                  </div>
                </div>
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-px bg-ember transition-[width] duration-500",
                    isActive ? "w-full" : "w-0",
                  )}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
        <div className="sticky top-28">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius)] border border-[var(--line)] bg-bone-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={cn("absolute inset-0", imageClass[active])}
              >
                <Image
                  src={images[active]}
                  alt={capabilities[active].title}
                  fill
                  sizes="34vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="mono-micro text-bone/70">
                {capabilities[active].title}
              </p>
              <p className="mt-1 text-[11px] text-bone/40">
                Illustrative image
              </p>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="mono-micro text-ink/35">Hover to preview</span>
            <span className="mono-micro text-ink/35">
              {String(active + 1).padStart(2, "0")} / 06
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
