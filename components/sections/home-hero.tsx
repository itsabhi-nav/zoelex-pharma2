"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MaskLines } from "@/components/ui/reveal";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { FormatSpecimen } from "@/components/sections/format-specimen";
import { SpecRail } from "@/components/sections/spec-rail";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

const stats = [
  { label: "Delivery formats", value: "Four" },
  { label: "Certifications", value: "GMP · FSSAI · GLP" },
  { label: "Enquiry response", value: "24–48 hours" },
  { label: "Manufacturing base", value: "Pune, India" },
];

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.2]);

  return (
    <section
      ref={ref}
      className="surface-dark relative flex min-h-[100svh] flex-col overflow-hidden pt-[calc(var(--nav-h)+1.5rem)]"
    >
      <CursorGlow className="hidden md:block" />

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-40 top-10 h-[42rem] w-[42rem] rounded-full bg-ember/[0.07] blur-[140px]" />
        <div className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-sage/[0.04] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(244,238,226,0.04) 1px, transparent 1px)",
            backgroundSize: "clamp(80px, 10vw, 160px) 100%",
          }}
        />
      </div>

      <div className="shell relative flex flex-1 items-center">
        <div className="grid w-full items-center gap-10 py-8 lg:grid-cols-12 lg:gap-8 lg:py-8">
          <motion.div
            className="lg:col-span-6"
            style={reduced ? undefined : { y: textY, opacity: textOpacity }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mono-label flex items-center gap-3 text-bone/55"
            >
              <span className="h-px w-8 bg-ember" aria-hidden="true" />
              Contract &amp; private-label manufacturing
              <span className="hidden text-bone/25 sm:inline">·</span>
              <span className="hidden text-bone/35 sm:inline">Pune, India</span>
            </motion.p>

            <h1 className="display display-tight mt-6 text-[clamp(3rem,6.4vw,5.6rem)] text-bone">
              <MaskLines
                delay={0.15}
                lines={[
                  <>Make</>,
                  <>wellness</>,
                  <>
                    worth <span className="text-ember">taking.</span>
                  </>,
                ]}
              />
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="mt-7 max-w-md text-[16px] leading-relaxed text-bone/60">
                Zoelex Pharma makes gummies, oral thin films, softgels and
                liposomal products for brands that care how the product is
                taken, and how it is remembered.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="btn btn-ember">
                  Start an enquiry
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/technologies" className="btn btn-outline-light">
                  Explore formats
                </Link>
              </div>

            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 lg:col-start-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <FormatSpecimen />
          </motion.div>
        </div>
      </div>

      <div className="shell relative pb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1 }}
        >
          <SpecRail items={stats} />
        </motion.div>
      </div>
    </section>
  );
}
