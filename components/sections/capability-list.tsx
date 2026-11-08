"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { capabilities } from "@/lib/site";
import { cn } from "@/lib/utils";

const images = [
  "/images/lab-equipment.jpg",
  "/images/gummies-jar.jpg",
  "/images/lab-scientists.jpg",
  "/images/softgels-2.jpg",
  "/images/droplets.jpg",
  "/images/containers.jpg",
];

const imageClass = [
  "img-duo",
  "img-warm",
  "img-duo",
  "img-warm",
  "img-duo",
  "img-duo",
];

export function CapabilityList() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-6">
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
                <div className="flex items-baseline justify-between gap-5">
                  <h3
                    className={cn(
                      "text-[clamp(1.15rem,2vw,1.5rem)] font-medium transition-colors duration-300",
                      isActive ? "text-ember" : "text-ink",
                    )}
                  >
                    {item.title}
                  </h3>
                  <ArrowUpRight
                    className={cn(
                      "h-4 w-4 shrink-0 transition-all duration-300",
                      isActive
                        ? "translate-x-0.5 -translate-y-0.5 text-ember"
                        : "text-ink/25",
                    )}
                  />
                </div>
                <p className="mt-2 max-w-md text-[13px] leading-relaxed text-ink/55">
                  {item.copy}
                </p>
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-px bg-ember transition-all duration-500",
                    isActive ? "w-full" : "w-0",
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="hidden lg:col-span-5 lg:col-start-8 lg:block">
        <div className="sticky top-28">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-[var(--line)] bg-bone-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className={cn("absolute inset-0", imageClass[active])}
              >
                <Image
                  src={images[active]}
                  alt={capabilities[active].title}
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.12em] text-ink/45">
            <span>{capabilities[active].title}</span>
            <span>
              {String(active + 1).padStart(2, "0")} / 06
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
