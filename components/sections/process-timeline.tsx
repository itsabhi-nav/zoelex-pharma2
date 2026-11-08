"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { processSteps } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.55"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
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
    <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-28">
          <p className="eyebrow mb-4">Process</p>
          <h2 className="display text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[1.02]">
            Six steps from
            <br />
            brief to production.
          </h2>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink/60">
            Product scope, feasibility, minimum quantities and timelines are
            reviewed with you before production is confirmed.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-ember" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/50">
              {processSteps[active]?.title ?? processSteps[0].title}
            </span>
          </div>
        </div>
      </div>

      <div ref={ref} className="relative lg:col-span-6 lg:col-start-7">
        <div className="absolute bottom-4 left-[15px] top-4 w-px bg-ink/12">
          <motion.div
            className="h-full w-full origin-top bg-ember"
            style={{ scaleY }}
          />
        </div>

        {processSteps.map((step, index) => {
          const isActive = index <= active;
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
              className="relative pb-9 pl-12 last:pb-0"
            >
              <span
                className={cn(
                  "absolute left-0 top-0 flex h-[31px] w-[31px] items-center justify-center rounded-sm border text-[10px] font-semibold transition-colors duration-300",
                  isActive
                    ? "border-ember bg-ember text-bone"
                    : "border-[var(--line)] bg-bone text-ink/40",
                )}
              >
                {step.index}
              </span>
              <h3
                className={cn(
                  "text-[16px] font-medium leading-snug transition-colors duration-300",
                  isActive ? "text-ink" : "text-ink/50",
                )}
              >
                {step.title}
              </h3>
              <p className="mt-1.5 max-w-md text-[13px] leading-relaxed text-ink/55">
                {step.copy}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
