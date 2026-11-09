"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/site";
import { cn } from "@/lib/utils";

const categoryImages = [
  "/images/gummies-color.jpg",
  "/images/orange-macro.jpg",
  "/images/ashwagandha-dark.jpg",
  "/images/product-amber.jpg",
  "/images/liquid-drop.jpg",
  "/images/softgels-gold.jpg",
  "/images/mint-leaf.jpg",
  "/images/gummies-spill.jpg",
  "/images/turmeric.jpg",
  "/images/softgels-marble.jpg",
];

const imageClass = [
  "img-warm",
  "img-warm",
  "img-warm",
  "img-warm",
  "img-warm",
  "img-warm",
  "img-warm",
  "img-warm",
  "img-warm",
  "img-warm",
];

export function CategoryIndex() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-7">
        <div className="border-t border-[var(--line)]">
          {categories.map((category, index) => {
            const isActive = active === index;
            return (
              <button
                key={category.name}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                aria-pressed={isActive}
                className="group relative block w-full border-b border-[var(--line)] py-4 text-left md:py-5"
              >
                <div className="flex items-start gap-4">
                  <span
                    className={cn(
                      "mono-micro mt-1.5 shrink-0 transition-colors duration-300",
                      isActive ? "text-ember" : "text-ink/30",
                    )}
                  >
                    {category.index}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3
                        className={cn(
                          "text-[clamp(1.15rem,2.2vw,1.7rem)] font-medium leading-tight transition-colors duration-300",
                          isActive ? "text-ember" : "text-ink",
                        )}
                      >
                        {category.name}
                      </h3>
                      <ArrowUpRight
                        className={cn(
                          "h-3.5 w-3.5 shrink-0 transition-[transform,color] duration-300",
                          isActive
                            ? "-translate-y-0.5 translate-x-0.5 text-ember"
                            : "text-ink/20",
                        )}
                      />
                    </div>
                    <p className="mt-1 text-[12px] leading-relaxed text-ink/50">
                      {category.ideas.join(" · ")}
                    </p>
                    <p className="mono-micro mt-1.5 text-ink/30">
                      {category.formats.join(" / ")}
                    </p>
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute bottom-0 left-0 h-px bg-ember transition-transform duration-500 ease-out",
                    isActive ? "w-full scale-x-100" : "w-full scale-x-0",
                  )}
                  style={{ transformOrigin: "left" }}
                />
              </button>
            );
          })}
        </div>
        <p className="mt-6 max-w-xl text-[12px] leading-relaxed text-ink/45">
          Examples are starting points for discussion. Final product scope
          depends on formulation feasibility and applicable regulations.
        </p>
      </div>

      <div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
        <div className="sticky top-28">
          <div className="relative aspect-[4/5] overflow-hidden border border-[var(--line)] bg-bone-2">
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
                  src={categoryImages[active]}
                  alt={categories[active].name}
                  fill
                  sizes="34vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="mono-micro text-ember">
                {categories[active].index} / 10
              </p>
              <p className="display mt-1 text-[1.8rem] leading-none text-bone">
                {categories[active].name}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {categories[active].formats.map((format) => (
                  <span
                    key={format}
                    className="mono-micro border border-[var(--line-light-strong)] px-2 py-1 text-bone/60"
                  >
                    {format}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="mono-micro text-ink/35">Hover to preview</span>
            <Link
              href="/technologies#categories"
              className="mono-micro inline-flex items-center gap-1 text-ink/45 transition-colors hover:text-ember"
            >
              All categories
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
