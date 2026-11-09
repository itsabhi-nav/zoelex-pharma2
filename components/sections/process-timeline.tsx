"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { processSteps } from "@/lib/site";
import { cn } from "@/lib/utils";

const stepImages = [
  "/images/product-amber.jpg",
  "/images/lab-bench.jpg",
  "/images/lab-pipette.jpg",
  "/images/softgels-gold.jpg",
  "/images/production-line.jpg",
  "/images/cargo-sunset.jpg",
];

const stepImageClass = [
  "img-warm",
  "img-warm",
  "img-warm",
  "img-warm",
  "img-warm",
  "img-duo",
];

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.6"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActive(
      Math.min(
        processSteps.length - 1,
        Math.max(0, Math.floor(value * processSteps.length)),
      ),
    );
  });

  return (
    <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-28">
          <div className="flex items-center gap-3">
            <span className="mono-micro text-ink/45">How we work</span>
            <span aria-hidden="true" className="h-px flex-1 bg-[var(--line)]" />
          </div>

          <h2 className="display mt-6 text-[clamp(2.3rem,4.6vw,4rem)] leading-[0.94]">
            Six steps from
            <br />
            brief to production.
          </h2>

          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ink/60">
            Product scope, feasibility, minimum quantities and timelines are
            reviewed with you before production is confirmed.
          </p>

          <div className="relative mt-8 aspect-[5/4] overflow-hidden border border-[var(--line)] bg-bone-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className={cn("absolute inset-0", stepImageClass[active])}
              >
                <Image
                  src={stepImages[active]}
                  alt={processSteps[active].title}
                  fill
                  sizes="(max-width: 1024px) 92vw, 38vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
              <div>
                <p className="mono-micro text-ember">
                  Step {processSteps[active].index}
                </p>
                <p className="mt-1 text-[15px] font-medium text-bone">
                  {processSteps[active].title}
                </p>
              </div>
              <span className="mono-micro text-bone/45">
                {processSteps[active].index} / 06
              </span>
            </div>
          </div>
        </div>
      </div>

      <div ref={ref} className="relative lg:col-span-6 lg:col-start-7">
        <div className="absolute bottom-3 left-[7px] top-3 w-px bg-[var(--line)]">
          <motion.div
            className="h-full w-full origin-top bg-ember"
            style={{ scaleY }}
          />
        </div>

        {processSteps.map((step, index) => {
          const isReached = index <= active;
          return (
            <motion.div
              key={step.index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.55,
                delay: index * 0.03,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative pb-9 pl-10 last:pb-0"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border transition-colors duration-300",
                  isReached
                    ? "border-ember bg-ember"
                    : "border-[var(--line-strong)] bg-bone",
                )}
              >
                <span
                  className={cn(
                    "h-1 w-1 rounded-full transition-colors duration-300",
                    isReached ? "bg-bone" : "bg-ink/25",
                  )}
                />
              </span>
              <div className="flex items-baseline gap-3">
                <span
                  className={cn(
                    "mono-micro transition-colors duration-300",
                    isReached ? "text-ember" : "text-ink/25",
                  )}
                >
                  {step.index}
                </span>
                <h3
                  className={cn(
                    "text-[16px] font-medium leading-snug transition-colors duration-300 md:text-[17px]",
                    isReached ? "text-ink" : "text-ink/45",
                  )}
                >
                  {step.title}
                </h3>
              </div>
              <p className="mt-1.5 max-w-md pl-[calc(1.25rem+0.75rem)] text-[13px] leading-relaxed text-ink/55">
                {step.copy}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
